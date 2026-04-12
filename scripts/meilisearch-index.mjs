#!/usr/bin/env node
import { MeiliSearch } from 'meilisearch'
import { readFileSync, readdirSync } from 'fs'
import { join, relative, basename, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const docsDir = join(__dirname, '..', 'docs')

const host = process.env.VITE_MEILISEARCH_HOST
const adminKey = process.env.MEILISEARCH_ADMIN_KEY
const indexName = process.env.VITE_MEILISEARCH_INDEX_NAME || 'docs'

if (!host || !adminKey) {
  console.error(
    'Error: VITE_MEILISEARCH_HOST and MEILISEARCH_ADMIN_KEY must be set.'
  )
  console.error('See .env.example for details.')
  process.exit(1)
}

const client = new MeiliSearch({ host, apiKey: adminKey })

/** Recursively collect all .md files, skipping dotfiles/directories */
function getMarkdownFiles(dir) {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath))
    } else if (entry.isFile() && extname(entry.name) === '.md') {
      files.push(fullPath)
    }
  }
  return files
}

/** Parse a markdown file into a searchable document */
function parseMarkdown(content, filePath) {
  // Strip frontmatter
  const fmMatch = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
  let body = fmMatch ? content.slice(fmMatch[0].length) : content

  // Extract title from first h1
  const titleMatch = body.match(/^#\s+(.+)$/m)
  const title = titleMatch ? titleMatch[1].trim() : basename(filePath, '.md')

  // Extract h2–h6 headings
  const headings = []
  const headingRe = /^#{2,6}\s+(.+)$/gm
  let m
  while ((m = headingRe.exec(body)) !== null) {
    headings.push(m[1].trim())
  }

  // Clean body for indexing
  body = body
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/`[^`]+`/g, '') // inline code
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links → text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '') // images
    .replace(/[#*_~>|`]/g, '') // markdown symbols
    .replace(/\n{2,}/g, '\n') // collapse blank lines
    .trim()

  return { title, body, headings }
}

async function main() {
  console.log(`Meilisearch host: ${host}`)
  console.log(`Index: ${indexName}`)

  // 1. Clear: delete index if it exists, then recreate
  try {
    const deleteTask = await client.deleteIndex(indexName)
    await client.waitForTask(deleteTask.taskUid)
    console.log('Cleared existing index.')
  } catch {
    // Index may not exist yet — that's fine
  }

  const index = client.index(indexName)

  // 2. Configure index settings
  const settingsTask = await index.updateSettings({
    searchableAttributes: ['title', 'headings', 'body'],
    displayedAttributes: ['title', 'url', 'headings', 'body'],
    rankingRules: [
      'words',
      'typo',
      'proximity',
      'attribute',
      'sort',
      'exactness'
    ]
  })
  await client.waitForTask(settingsTask.taskUid)

  // 3. Collect and parse documents
  const files = getMarkdownFiles(docsDir)
  const documents = []

  for (const file of files) {
    const raw = readFileSync(file, 'utf-8')
    const relPath = relative(docsDir, file)
    const { title, body, headings } = parseMarkdown(raw, file)

    // Convert file path → URL path
    let url = '/' + relPath.replace(/\.md$/, '').replace(/\\/g, '/')
    if (url.endsWith('/index')) url = url.slice(0, -5)
    if (url === '/index') url = '/'

    documents.push({
      id: relPath.replace(/[/\\.]/g, '_'),
      title,
      url,
      headings,
      body: body.slice(0, 10000) // cap body size
    })
  }

  // 4. Index all documents
  console.log(`Indexing ${documents.length} documents...`)
  const addTask = await index.addDocuments(documents)
  await client.waitForTask(addTask.taskUid)
  console.log('Indexing completed!')
}

main().catch((err) => {
  console.error('Indexing failed:', err.message || err)
  process.exit(1)
})
