<template>
  <div class="min-h-screen items-center mx-auto overflow-auto">
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
const isDark = useDark()

watch(isDark, async (newMode) => {
  updateDaisyTheme(newMode)
})
updateDaisyTheme(isDark.value)

function updateDaisyTheme(dark:boolean) {
  useHead({
    htmlAttrs: {
      'data-theme': dark ? 'dark' : 'light'
    }
  })
}
</script>