<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <SearchBar v-model="query" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const query = computed<{
  search: string,
  query: {
    category: string[],
    tag: string[]
  }
}>({
  get() {
    const search = route.query.search as string
    const category = route.query.category as string
    const tag = route.query.tag as string
    return {
      search: search ?? '',
      query: {
        category: category?.split(',') ?? [],
        tag: tag?.split(',') ?? []
      }
    }
  },
  set(val) {
    const { search, query: values } = val
    const {category, tag } = values
    const query: {
      search?: string,
      category?: string,
      tag?: string
    } = {}
    if (search) {
      query.search = search
    }
    if (category && category.length > 0) {
      query.category = category.join(',')
    }
    if (tag && tag.length > 0) {
      query.tag = tag.join(',')
    }
    router.push({
      query
    })
  }
})

</script>