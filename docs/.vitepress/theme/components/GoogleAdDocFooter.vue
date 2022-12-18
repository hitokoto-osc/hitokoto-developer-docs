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
    default: true
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
  <div class="google-ad-doc-footer">
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
.google-ad-doc-footer {
  margin-top: 2rem;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
  filter: grayscale(100%);
  display: block;
  border-radius: 8px;
}
.google-ad-doc-footer:hover {
  filter: grayscale(0%);
  border: 1px solid var(--vp-c-brand-light);
}

.google-ad-doc-footer {
  .adsbygoogle {
    display: block;
    height: 100px;
    width: 100%;
    iframe {
      border-radius: 8px;
    }
  }
}
</style>
