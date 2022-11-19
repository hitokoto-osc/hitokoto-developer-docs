<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import debounce from 'lodash.debounce'
const scrollTop = ref(0)
const props = defineProps({
  threshold: {
    type: Number,
    default: 100
  }
})

const getScrollTop = () => {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  scrollTop.value = 0
}

const show = computed(() => scrollTop.value > props.threshold)

onMounted(() => {
  scrollTop.value = getScrollTop()
  window.addEventListener(
    'scroll',
    debounce(() => {
      scrollTop.value = getScrollTop()
    }, 100)
  )
})
</script>

<template>
  <Transition name="fade">
    <div class="back-to-top" v-show="show" @click="scrollToTop">
      <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.back-to-top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: rgb(219, 219, 219);
  box-shadow: rgba(162, 162, 162, 0.3) 0px 0px 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark {
  .back-to-top {
    background-color: rgb(48, 48, 48);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
  }
}
</style>
