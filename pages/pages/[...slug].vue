<template>
  <img v-if="meta?.coverImage" :src="meta?.coverImage">
  <h1 v-if="meta?.title">{{ meta?.title }}</h1>
  <Toc v-if="toc" :toc="toc" />
  <ContentRenderer :key="page._id" :value="page" />
</template>

<script setup lang="ts">
const content = useContent()
const { page, toc } = content
const meta = useContentMeta(content)

const { y: windowY } = useWindowScroll()

watch(windowY, (y) => {
  if (process.client) {
    const offset = 80
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
