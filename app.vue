<template>
  <div class="min-h-screen items-center flex flex-col mx-auto overflow-auto">
    <div class="w-full z-10 fixed top-0">
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
useHead({
  titleTemplate: (titleChunk) => {
    const siteTitle = 'Teages\'s Blog';
    const siteSubTitle = 'Teages 的个人博客';
    return titleChunk ? `${titleChunk} - ${siteTitle}` : `${siteSubTitle} | ${siteTitle}`;
  }
})
</script>
