<script setup lang="ts">
import Giscus from '@giscus/vue'
const giscusDom = ref<InstanceType<typeof Giscus>>()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

watch(isDark, (isDark) => {
  updateTheme()
})

function getTheme() {
  return `${getLocalOrigin()}/giscus/${
    isDark.value ? 'dark' : 'light'
  }.css`

  function getLocalOrigin() {
    if (process.client && process.dev) {
      return window.location.origin
    }
    return 'https://blog.teages.xyz'
  }
}

function updateTheme() {
  if (process.client) {
    console.log(giscusDom.value?.$el)
    const theme = getTheme()
    // giscusDom.value?.$el
    giscusDom.value?.$el.querySelector('iframe')?.contentWindow?.postMessage(
      {
        giscus: { theme },
      },
      'https://giscus.app',
    )
  }
}

</script>

<template>
  <ClientOnly>
    <Giscus
      ref="giscusDom"
      repo="Teages/blog.teages.xyz" repo-id="MDEwOlJlcG9zaXRvcnkzNTY2NjAzMTg="
      category="Comments" category-id="DIC_kwDOFUI0Xs4CXp36"
      mapping="pathname"
      strict="1"
      reactions-enabled="1"
      emit-metadata="1"
      input-position="top"
      :theme="getTheme()"
      lang="zh-CN" 
      loading="lazy"
    />
  </ClientOnly>
</template>