<template>
  <div class="min-h-screen items-center flex flex-col mx-auto overflow-auto">
    <div class="w-full z-10 fixed top-0 backdrop-blur">
      <NavBar />
    </div>
    <div class="pt-16 flex-1 w-full">
      <div class="py-2 px-4 lg:px-12">
        <NuxtPage />
      </div>
    </div>
    <div class="w-full">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const content = useContent()
const meta = useContentMeta(content)
console.warn(meta)
useHead({
  titleTemplate: (titleChunk) => {
    const siteTitle = 'Teages\'s Blog';
    const siteSubTitle = 'Teages 的博客';
    return titleChunk ? `${titleChunk} - ${siteTitle}` : `${siteSubTitle} | ${siteTitle}`;
  },
  htmlAttrs: {
    lang: 'zh-CN',
  },
  meta: (meta ? [
    {
      name: 'description',
      content: meta?.description,
    },
    {
      name: 'keywords',
      content: meta?.tags.join(', '),
    },
    (meta?.coverImage ?{
      name: 'og:image',
      content: meta?.coverImage,
    }:{}),
    {
      name: 'author',
      content: 'Teages',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ] : undefined)
})
</script>
