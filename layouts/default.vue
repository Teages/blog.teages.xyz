<template>
  <main class="prose lg:prose-xl mx-auto">
    <slot />
  </main>
</template>

<script setup lang="ts">
const { y: windowY } = useWindowScroll()

watch(windowY, (y) => {
  if (process.client) {
    const offset = 72
    const anchors = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]')
    const activeAnchor = Array.from(anchors).find((anchor) => {
      const anchorTop = anchor.getBoundingClientRect().top + window.scrollY - offset
      const anchorBottom = anchor.getBoundingClientRect().bottom + window.scrollY - offset
      return y >= anchorTop && y < anchorBottom
    })
    if (activeAnchor) {
      history.replaceState(null, '', `#${activeAnchor.id}`)
    }
  }
})

</script>