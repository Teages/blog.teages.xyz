<script setup lang="ts">
const [DefineTocTemplate, ReuseTocTemplate] = createReusableTemplate<{data:Array<any>}>()
const { toc } = defineProps({
  toc: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <DefineTocTemplate v-slot="{ data }">
    <ul v-if="data">
      <li v-for="link in data" :key="link.id">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
        <ReuseTocTemplate :data="link.children" />
      </li>
    </ul>
  </DefineTocTemplate>
  <div>
    <strong> 目录 </strong>
    <ReuseTocTemplate v-if="toc && toc.links" :data="toc.links" />
  </div>
</template>
