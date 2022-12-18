<script setup lang="ts">
import { onMounted } from 'vue'
const props = defineProps({
  adClient: {
    type: String,
    required: true
  },
  adSlot: {
    type: String,
    required: true
  },
  adFormat: {
    type: String,
    default: 'auto'
  },
  fullWidthResponsive: {
    type: Boolean,
    default: false
  }
})


onMounted(() => {
  if (import.meta.env.PROD) {
    if (typeof window !== 'undefined') {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } else {
      console.warn(`[GoogleAdDocAside] adsbygoogle object is undefined!`)
    }
  }
})



</script>

<template>
  <div class="google-ad-aside">
    <ins
      class="adsbygoogle"
      style="display: block"
      :data-ad-client="props.adClient"
      :data-ad-slot="props.adSlot"
      :data-ad-format="props.adFormat"
      :data-full-width-responsive="props.fullWidthResponsive"
    ></ins>
  </div>
</template>

<style lang="scss" scoped>
.google-ad-aside {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 14px;
  position: relative;
  filter: grayscale(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 0.75rem;
  background-color: var(--vp-c-bg-alt);
  // border: 2px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
}
.google-ad-aside:hover {
  filter: grayscale(0%);
  // border: 2px solid var(--vp-c-brand-light);
}

.google-ad-aside {
  .adsbygoogle {
    display: block;
    height: 90px;
    width: 100%;
    iframe {
      border-radius: 14px;
    }
  }
}
</style>
