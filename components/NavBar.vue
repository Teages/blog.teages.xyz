<template>
  <div class="navbar bg-base-100/30 max-w-4xl mx-auto">
    <div class="dropdown dropdown-start">
      <label tabindex="0" class="btn btn-ghost normal-case text-xl">
        <!-- <Icon name="mdi:square-rounded-outline" size="28" /> -->
        <span>
          Teages's Blog
        </span>
      </label>
      <div tabindex="0" class="mt-3 z-10 p-2 shadow dropdown-content bg-base-100 rounded-box">
        <ul class="menu px-1 block sm:hidden">
          <li v-for="link in links">
            <NuxtLink :to="link.path" class="justify-center">
              <Icon :name="link.icon" size="24" />
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
        <div class="join px-1">
          <ClientOnly>
            <button @click="toggleDark()" class="btn btn-square btn-ghost join-item">
              <Icon v-if="isDark" name="material-symbols:light-mode" size="24" />
              <Icon v-else name="material-symbols:dark-mode" size="24" />
            </button>
          </ClientOnly>
          <NuxtLink to="https://github.com/Teages/blog.teages.xyz" target="_blank" class="btn btn-square btn-ghost join-item">
            <Icon name="mdi:github" size="24" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex-1 sm:hidden" />

    <div class="sm:flex-1">
      <span v-if="title" class="text-lg opacity-80 p-2 pt-3">
        {{ title }}
      </span>
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li v-for="link in links" class="hidden sm:inline">
          <NuxtLink :to="link.path" class="">
            <Icon :name="link.icon" size="24" />
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

const content = useContent()
const meta = useContentMeta(content)
const title = computed(() => meta?.value?.title)

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const links = [
  addLink('主页', '/', 'material-symbols:home-outline'),
  addLink('帖子', '/pages', 'material-symbols:article-outline-rounded'),
  addLink('关于', '/about', 'material-symbols:info-outline-rounded'),
]

function toggleDark() {
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  console.log('before', system, colorMode.value, colorMode.preference)
  colorMode.preference = isDark.value ? 'light' : 'dark'
  if (colorMode.preference === system) {
    colorMode.preference = 'system'
  }
  console.log('after', system, colorMode.value, colorMode.preference)
}

function addLink(name: string, path: string, icon: string) {
  return { name, path, icon }
}
</script>