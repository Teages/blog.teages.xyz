<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  }
})
const count = computed(() => props.code.split('\n').length - 1)
const codeLines = computed(() => {
  return Array.from({ length: count.value }, (_, i) => {
    return {
      num: i + 1,
      highlighted: props.highlights.includes(i + 1)
    }
  })
})

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="mb-1">
    <div class="opacity-80 text-sm flex px-2 py-1">
      <span>
        {{ props.filename && props.meta ? `${props.meta} (${props.filename})` : (props.filename ?? props.meta)}}
      </span>
      <span class="flex-1" />
      <span>
        {{ props.language ? props.language : 'text' }}
      </span>
    </div>
    <div class="code-block border border-gray-400 rounded-md not-prose text-base relative">
      <div class="pt-2 w-16 absolute top-0 left-0 bottom-0 select-none opacity-80">
        <div v-for="line of codeLines" :class="'text-center' + (line.highlighted ? ' highlight' : '')">
          {{ line.num }}
        </div>
      </div>
      <button v-if="isSupported" @click="copy(props.code)"
        :class="'copy-btn opacity-60 m-1 btn btn-sm btn-square absolute top-0 right-0 bottom-0'
        + (copied ? ' btn-success' : '')"
      >
        <Icon v-if="copied" name="mdi:clipboard-check-multiple-outline" size="20" />
        <Icon v-else name="mdi:clipboard-multiple-outline" size="20" />
      </button>
      <slot />
    </div>
  </div>
</template>

<style>
.code-block .highlight{
  @apply bg-red-100 block;
}

.code-block pre {
  @apply overflow-x-auto ml-16 py-2;
}

.code-block .copy-btn {
  @apply hidden;
}

.code-block:hover .copy-btn {
  @apply block;
}
</style>