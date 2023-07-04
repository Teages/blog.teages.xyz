<template>
  <div v-if="query.tag.length > 0 || query.category.length > 0" class="flex gap-2">
    <div v-for="category in query.category" class="badge badge-primary badge-lg gap-2">
      文章类别: {{ category }}
      <button @click="removeCategory(category)" class="btn btn-xs btn-ghost btn-circle">
        <Icon name="mdi:close" size="18" />
      </button>
    </div>
    <div v-for="tag in query.tag" class="badge badge-outline badge-lg gap-2">
      文章标签: {{ tag }}
      <button @click="removeTag(tag)" class="btn btn-xs btn-ghost btn-circle">
        <Icon name="mdi:close" size="18" />
      </button>
    </div>
  </div>
  <div class="join w-full">
    <input v-model.trim="search" @blur="updateAll(false)" class="input input-primary input-bordered join-item flex-1"
      placeholder="搜索帖子..." />
    <div v-if="!autoUpdate" class="indicator">
      <button @click="updateAll(true)" class="btn btn-primary w-24 join-item">
        <Icon name="mdi:magnify" size="22" />
        搜索
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { autoUpdate, lazy, modelValue } = defineProps({
  autoUpdate: {
    type: Boolean,
    default: true
  },
  lazy: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Object,
    default: () => ({
      query: {
        category: [],
        tag: []
      },
      search: ''
    })
  }
})

const emits = defineEmits(['update:modelValue'])

const allowKeys = [
  'category',
  'tag'
]


const search = ref<string>(modelValue.search ?? '')
const query: Ref<{
  [key in typeof allowKeys[number]]: string[]
}> = ref(Object.fromEntries(
  allowKeys.map((key) => [key, []])
))
if (modelValue.query) {
  query.value = modelValue.query
}

const pendingQuery = computed(() => {
  const ans: {
    [key in typeof allowKeys[number]]: string[]
  } = Object.fromEntries(
    allowKeys.map((key) => [key, []])
  )
  const queries = search.value.split(' ').map((item) => {
    const [key, valuesStr] = item.split('=')
    const values = valuesStr?.split(',')
    return {
      [key]: values
    };
  })
  queries.forEach((item) => {
    const key = Object.keys(item)[0]
    const values = item[key]
    if (allowKeys.includes(key)) {
      ans[key] = ans[key].concat(values)
    }
  })
  Object.keys(ans).forEach((key) => {
    ans[key] = Array.from(new Set(ans[key]?.filter((item) => item)))
  })
  return ans
})
const pendingSearch = computed(() => {
  return search.value.split(' ').filter((item) => {
    const [key] = item.split('=')
    return !allowKeys.includes(key)
  }).join(' ')
})

const value = computed({
  get() {
    if (lazy) {
      return {
        query: pendingQuery.value,
        search: pendingSearch.value
      }
    }
    return {
      query: query.value,
      search: pendingSearch.value
    }
  },
  set(val: {
    query: {
      [key in typeof allowKeys[number]]: string[]
    },
    search: string
  }) {
    query.value = val.query
    search.value = val.search
  }
})

watch(value, (val) => {
  emits('update:modelValue', val)
}, {
  deep: true
})

function updateAll(force = false) {
  if (!autoUpdate && !force) {
    return
  }
  Object.keys(query.value).forEach((key) => {
    query.value[key] = [...new Set(query.value[key].concat(pendingQuery.value[key]))]
    // 去重
  })
  search.value = pendingSearch.value
}

function removeCategory(category: string) {
  query.value.category = query.value.category.filter((item) => item !== category)
}
function removeTag(tag: string) {
  query.value.tag = query.value.tag.filter((item) => item !== tag)
}
</script>