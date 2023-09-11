<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, reactive } from 'vue'

// Components
import BackToTop from './components/BackToTop.vue'
import GoogleAdDocAside from './components/GoogleAdDocAside.vue'
import GoogleAdDocFooter from './components/GoogleAdDocFooter.vue'

// 切换 夜间 / 日间 模式
const { isDark } = useData()
function enableTransitions() {
  return (
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  )
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  // @ts-ignore:ts(2339)
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

// Google Ads
const googleAdOptions = reactive({
  adClient: 'ca-pub-8868204327924354',
  docAsideAdSlot: '1137431788',
  docFooterAdSlot: '7449637304'
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-ads-before>
      <GoogleAdDocAside
        :ad-client="googleAdOptions.adClient"
        :ad-slot="googleAdOptions.docAsideAdSlot"
        ad-format="rectangle, horizontal"
      />
    </template>
    <template #doc-after>
      <GoogleAdDocFooter
        :ad-client="googleAdOptions.adClient"
        :ad-slot="googleAdOptions.docFooterAdSlot"
        ad-format="horizontal"
      />
    </template>
    <template #layout-bottom>
      <BackToTop />
    </template>
  </DefaultTheme.Layout>
</template>

<style lang="scss">
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
