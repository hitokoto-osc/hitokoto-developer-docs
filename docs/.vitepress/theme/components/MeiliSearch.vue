<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick, computed, shallowRef } from 'vue'
import { useRouter, inBrowser } from 'vitepress'
import type { MeiliSearch as MeiliSearchType } from 'meilisearch'

const isOpen = ref(false)
const query = ref('')
const results = ref<any[]>([])
const selectedIndex = ref(0)
const inputRef = ref<HTMLInputElement>()
const resultsRef = ref<HTMLElement>()

const client = shallowRef<MeiliSearchType>()
const indexName = import.meta.env.VITE_MEILISEARCH_INDEX_NAME || 'docs'
const router = useRouter()

const metaKey = computed(() =>
  typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
    ? '⌘'
    : 'Ctrl'
)

function onGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isOpen.value = !isOpen.value
  }
}

onMounted(async () => {
  const { MeiliSearch } = await import('meilisearch')
  client.value = new MeiliSearch({
    host: import.meta.env.VITE_MEILISEARCH_HOST || '',
    apiKey: import.meta.env.VITE_MEILISEARCH_SEARCH_KEY || ''
  })
  window.addEventListener('keydown', onGlobalKeydown)
})
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))

watch(isOpen, (val) => {
  if (val) {
    nextTick(() => inputRef.value?.focus())
    document.body.style.overflow = 'hidden'
  } else {
    query.value = ''
    results.value = []
    selectedIndex.value = 0
    document.body.style.overflow = ''
  }
})

let timer: ReturnType<typeof setTimeout>

watch(query, (val) => {
  clearTimeout(timer)
  if (!val.trim()) {
    results.value = []
    selectedIndex.value = 0
    return
  }
  timer = setTimeout(async () => {
    if (!client.value) return
    try {
      const res = await client.value.index(indexName).search(val, {
        limit: 20,
        attributesToHighlight: ['title', 'body'],
        attributesToCrop: ['body'],
        cropLength: 80,
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>'
      })
      results.value = res.hits
      selectedIndex.value = 0
    } catch {
      results.value = []
    }
  }, 200)
})

function navigate(url: string) {
  isOpen.value = false
  router.go(url)
}

function onInputKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    isOpen.value = false
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, results.value.length - 1)
    scrollToSelected()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
    scrollToSelected()
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const hit = results.value[selectedIndex.value]
    if (hit) navigate(hit.url)
  }
}

function scrollToSelected() {
  nextTick(() => {
    const el = resultsRef.value?.querySelector('.meili-result-item.selected')
    el?.scrollIntoView({ block: 'nearest' })
  })
}
</script>

<template>
  <!-- Search Button -->
  <button class="meili-search-button" @click="isOpen = true" aria-label="搜索">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <span class="meili-search-button-text">搜索</span>
    <span class="meili-search-button-keys">
      <kbd>{{ metaKey }}</kbd><kbd>K</kbd>
    </span>
  </button>

  <!-- Search Modal -->
  <Teleport to="body">
    <div v-if="isOpen" class="meili-search-overlay" @mousedown.self="isOpen = false">
      <div class="meili-search-modal">
        <!-- Input -->
        <div class="meili-search-input-wrapper">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="搜索文档..."
            class="meili-search-input"
            @keydown="onInputKeydown"
          />
          <kbd class="meili-search-esc" @click="isOpen = false">Esc</kbd>
        </div>

        <!-- Results -->
        <div v-if="results.length" ref="resultsRef" class="meili-search-results">
          <a
            v-for="(hit, i) in results"
            :key="hit.id"
            class="meili-result-item"
            :class="{ selected: i === selectedIndex }"
            :href="hit.url"
            @click.prevent="navigate(hit.url)"
            @mouseenter="selectedIndex = i"
          >
            <div class="meili-result-title" v-html="hit._formatted?.title || hit.title" />
            <div
              v-if="hit._formatted?.body"
              class="meili-result-body"
              v-html="hit._formatted.body"
            />
          </a>
        </div>

        <!-- Empty state -->
        <div v-else-if="query.trim()" class="meili-search-empty">
          没有找到相关结果
        </div>

        <!-- Footer -->
        <div class="meili-search-footer">
          <span>
            <kbd>↑</kbd><kbd>↓</kbd> 导航
            <kbd>↵</kbd> 跳转
            <kbd>Esc</kbd> 关闭
          </span>
          <span class="meili-search-powered">
            Powered by <a href="https://www.meilisearch.com" target="_blank" rel="noopener">Meilisearch</a>
          </span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.meili-search-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 14px;
  transition: border-color 0.25s, color 0.25s;
}

.meili-search-button:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-text-1);
}

.meili-search-button-text {
  display: none;
}

.meili-search-button-keys {
  display: none;
  gap: 2px;
}

.meili-search-button-keys kbd {
  font-family: var(--vp-font-family-base);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  padding: 0 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-3);
}

@media (min-width: 768px) {
  .meili-search-button {
    width: 200px;
    justify-content: flex-start;
  }

  .meili-search-button-text {
    display: inline;
    flex: 1;
  }

  .meili-search-button-keys {
    display: flex;
  }
}

@media (min-width: 960px) {
  .meili-search-button {
    width: 240px;
  }
}

/* Modal overlay */
.meili-search-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 60px 16px 16px;
  background: rgba(0, 0, 0, 0.5);
}

.dark .meili-search-overlay {
  background: rgba(0, 0, 0, 0.7);
}

/* Modal */
.meili-search-modal {
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

/* Input */
.meili-search-input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.meili-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.meili-search-input::placeholder {
  color: var(--vp-c-text-3);
}

.meili-search-esc {
  font-family: var(--vp-font-family-base);
  font-size: 12px;
  font-weight: 500;
  padding: 2px 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-3);
  cursor: pointer;
}

/* Results */
.meili-search-results {
  overflow-y: auto;
  padding: 8px;
}

.meili-result-item {
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background-color 0.15s;
}

.meili-result-item.selected {
  background: var(--vp-c-bg-soft);
}

.meili-result-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
}

.meili-result-body {
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin-top: 4px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.meili-result-item :deep(mark) {
  background: var(--vp-c-brand-dimm);
  color: var(--vp-c-brand);
  border-radius: 2px;
  padding: 0 2px;
}

/* Empty state */
.meili-search-empty {
  padding: 32px 16px;
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 14px;
}

/* Footer */
.meili-search-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.meili-search-footer kbd {
  font-family: var(--vp-font-family-base);
  font-size: 11px;
  font-weight: 500;
  padding: 1px 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  margin: 0 2px;
}

.meili-search-powered a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.meili-search-powered a:hover {
  text-decoration: underline;
}
</style>
