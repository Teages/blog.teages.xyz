<template>
  <App>
    <h1> {{ statusCode ?? 500 }} </h1>
    <blockquote><p>
      {{ error?.message ?? '未知错误' }}
    </p></blockquote>
  </App>
</template>

<script setup lang="ts">
import App from './app.vue'

const error = useError()
const statusCode = computed(() => {
  if (error.value && !(error.value instanceof Error)) {
    return error.value.statusCode
  }
})
</script>