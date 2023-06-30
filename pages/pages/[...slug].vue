<template>
  <main>
    <ContentDoc class="prose lg:prose-xl mx-auto" :path="path">
      <template #not-found>
        not found
      </template>
      <template #empty>
        <h1>Document is loading</h1>
      </template>
      <!-- Content -->
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const path = computed(() => {
  const slug = route.params.slug
  if (slug instanceof Array) {
    return slug.join('/')
  }
  return slug
})
</script>
