<template>
  <div class="flex my-4 opacity-60">
    <div class="mx-auto text-center">
      <div>
        Copyright © 2018-2023 Teages.
        <span class="hidden md:inline">All rights reserved.</span>
      </div>
      <div class="flex gap-2 md:gap-3 justify-center">
        <div class="tooltip" data-tip="Bilibili">
          <NuxtLink to="https://space.bilibili.com/37429890" class="btn btn-ghost btn-sm btn-circle">
            <Icon name="tabler:brand-bilibili" size="24" />
          </NuxtLink>
        </div>
        <div class="tooltip" data-tip="GitHub">
          <NuxtLink to="https://github.com/Teages" class="btn btn-ghost btn-sm btn-circle">
            <Icon name="tabler:brand-github" size="24" />
          </NuxtLink>
        </div>
        <div class="tooltip" data-tip="Twitter">
          <NuxtLink to="https://www.twitter.com/Teages_L" class="btn btn-ghost btn-sm btn-circle">
            <Icon name="tabler:brand-twitter" size="24" />
          </NuxtLink>
        </div>
        <div :class="'tooltip' + (copied ? ' tooltip-success' : '')" :data-tip="copied ? '复制成功' : 'Discord'">
          <button @click="isSupported ? copy('teages') : null" class="btn btn-ghost btn-sm btn-circle">
            <Icon name="tabler:brand-discord" size="24" />
          </button>
        </div>
        <div class="tooltip" data-tip="Cytoid">
          <NuxtLink to="https://cytoid.io/profile/teages_0v0" class="btn btn-ghost btn-sm btn-circle">
            <Icon name="tabler:circle-dashed" size="24" />
          </NuxtLink>
        </div>
        <div class="tooltip" data-tip="osu">
          <NuxtLink to="https://osu.ppy.sh/users/12756920" class="btn btn-ghost btn-sm btn-circle">
            <Icon name="simple-icons:osu" size="22" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { copy, copied, isSupported } = useClipboard()
</script>