<template>
  <div class="min-h-screen items-center flex flex-col mx-auto overflow-auto">
    <div class="w-full z-10 fixed top-0 backdrop-blur">
      <NavBar />
    </div>
    <div class="pt-32 pb-4 px-4 flex-1 w-full">
      <div class="lg:px-12">
        <main class="prose lg:prose-xl mx-auto">
          <NuxtPage />
        </main>
      </div>
    </div>
    <div class="w-full">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const content = useContent()
const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    const siteTitle = 'Teages\'s Blog';
    const siteSubTitle = 'Teages 的博客';
    return titleChunk ? `${titleChunk} - ${siteTitle}` : `${siteSubTitle} | ${siteTitle}`;
  },
  htmlAttrs: {
    lang: 'zh-CN',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'giscus:backlink',
      content: `https://blog.teages.xyz${route.path}`
    }
  ]
})
</script>
