<template>
  <template v-if="meta">
    <img v-if="meta.coverImage" :src="meta?.coverImage">
    <h1 style="margin-bottom: 1.5rem;" v-if="meta.title">{{ meta?.title }}</h1>
    <div v-if="meta.category || (meta?.tags && meta.tags.length > 0)" class="flex gap-2 mb-8">
      <NuxtLink to="https://baidu.com">
        <div v-if="meta.category" class="badge badge-lg badge-primary badge-outline"> {{ meta.category }} </div>
      </NuxtLink>
      <template v-if="meta.tags">
        <NuxtLink v-for="tag in meta.tags" to="https://baidu.com">
          <div class="badge badge-lg badge-outline"> {{ tag }} </div>
        </NuxtLink>
      </template>
    </div>
    <Toc v-if="meta.showToc && toc" :toc="toc" />
  </template>
  <ContentRenderer :key="page._id" :value="page" />
  <Comments v-if="meta?.comment" />
</template>

<script setup lang="ts">
const content = useContent()
const { page, toc } = content
const meta = useContentMeta(content)

if (meta?.value != null) {
  useSeoMeta({
    title: meta.value.title,
    ogTitle: meta.value.title,
    description: meta.value.description,
    keywords: meta.value.tags.join(', '),
    ogImage: meta.value.coverImage,
    author: 'Teages',
  })
}
const { y: windowY } = useWindowScroll()
watch(windowY, (y) => {
  if (process.client) {
    const offset = 128
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
