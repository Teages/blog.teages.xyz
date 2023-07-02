
export function useContentMeta(content: any) {
  return computed(() => {
    if (content.page.value === undefined || content.page.value === null) {
      return null
    }
    let title : string = content.page.value.title
    let date : string = content.page.value.date
    let description : string = content.page.value.description
    let tags : string[] = content.page.value.tags
    let category : string | null = content.page.value.category
    let top : boolean = content.page.value.top
    let announcement : boolean = content.page.value.announcement
    let showToc : boolean = content.page.value.showToc
    let comment: boolean = content.page.value.comment
    let coverImage : string = content.page.value.coverImage
  
    return {
      title, date, description, tags, category, top, announcement, showToc, comment, coverImage
    }
  })
}