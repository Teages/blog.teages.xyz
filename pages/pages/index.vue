<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <SearchBar v-model="query" />
    </div>
  </div>
  <div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>标题</th>
        <th>路径</th>
        <th>类别</th>
        <th>标签</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles">
        <td>
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </td>
        <td>
          <NuxtLink :to="article._path">{{ article._path }}</NuxtLink>
        </td>
        <td>{{ article.category }}</td>
        <td>{{ article.tags }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

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
    router.replace({
      query
    })
  }
})

let articles = ref<ParsedContent[]>(await updateResult())
// 更新文章列表
watch(query, async () => {
  articles.value = await updateResult()
})

async function updateResult() {
  useHeadSafe({
    title: query.value.search ? `搜索帖子: ${query.value.search}` : '帖子列表',
  })
  let querier = queryContent('/pages')
  if (query.value.query.category.length > 0) {
    querier = querier.where({
      category_query: {
        $in: query.value.query.category.map((item) => item.toLowerCase())
      }
    })
  }
  if (query.value.query.tag.length > 0) {
    querier = querier.where({
      tags_query: {
        $contains: query.value.query.tag.map((item) => item.toLowerCase())
      }
    })
  }
  const ans = await querier.find()
  if (query.value.search !== '') {
    const keywords = query.value.search.split(' ').map((item) => item.toLowerCase())
    return ans.map((article) => {
      const articleStr = JSON.stringify(article).toLowerCase()
      if (keywords.every((keyword) => articleStr.includes(keyword))) {
        return article
      }
    }).filter((item) => item !== undefined) as ParsedContent[]
  }
  return ans
}


</script>