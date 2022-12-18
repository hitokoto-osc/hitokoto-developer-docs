import { EnhanceAppContext } from 'vitepress'

interface Options {
  adClient: string
}

export default function addGoogleAdsProvider(
  ctx: EnhanceAppContext,
  options: Options
): void {
  const { adClient } = options
  if (
    adClient &&
    typeof window !== 'undefined' &&
    import.meta.env.PROD
  ) {
    const script = document.createElement('script')
    script.async = true
    script.crossOrigin = 'anonymous'
    script.type = 'text/javascript'
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`
    document.head.appendChild(script)
  }
}
