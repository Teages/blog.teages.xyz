<template>
  <div class="navbar bg-base-100/30 max-w-4xl mx-auto backdrop-blur">
    <div class="dropdown dropdown-start">
      <label tabindex="0" class="btn btn-ghost normal-case text-xl">
        <Icon name="mdi:square-rounded-outline" size="32" />
        Teages
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
        <div class="join">
          <button @click="toggleDark()" class="btn btn-square btn-ghost join-item">
            <Icon name="mdi:theme-light-dark" size="24" />
          </button>
          <NuxtLink to="https://github.com/Teages/blog.teages.xyz" target="_blank" class="btn btn-square btn-ghost join-item">
            <Icon name="mdi:github" size="24" />
          </NuxtLink>
        </div>

      </div>
    </div>

    <div class="flex-1"></div>
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
const colorMode = useColorMode()

const links = [
  addLink('主页', '/', 'material-symbols:home-outline'),
  addLink('帖子', '/', 'material-symbols:article-outline-rounded'),
  addLink('关于', '/', 'material-symbols:info-outline-rounded'),
]

function toggleDark() {
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  if (colorMode.preference === system) {
    colorMode.preference = 'system'
  }
}

function addLink(name: string, path: string, icon: string) {
  return { name, path, icon }
}
</script>