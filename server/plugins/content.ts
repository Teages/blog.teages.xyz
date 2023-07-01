import { title } from 'process'
import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
  // @ts-ignore
  nitroApp.hooks.hook('content:file:afterParse', (file: any) => {
    console.log('ddddd')
    if (file._id.endsWith('.md')) {
      // metadata
      let title : string = file.title ?? (() => {
        let title : string = ''
        visit(
          file.body, (n:any) => n.tag === 'h1', (node) => {
            console.log(node.children[0].value)
            title = node.children[0].value
          }
        )
        return title
      })()
      let date : string = file.date ?? new Date().toISOString()
      let description : string = file.description ?? (file.body.substring(0, 100) + '...')
      let author : string = file.author
      let tags : string[] = file.tags ?? []
      let category : string | null = file.category
      let top : boolean = file.top ?? false
      let announcement : boolean = (file.announcement && top)
      let showToc : boolean = file.showToc ?? false
      let comment: boolean = file.comment ?? true
      let coverImage : string = file.coverImage ?? (()=> {
        if (file.coverImage === null) {
          return null // allow null
        }
        // auto generate if undefined
        let coverImage : string | null = null
        visit(
          file.body, (n:any) => n.tag === 'img', (node) => {
            console.log(node.props.src)
            coverImage = node.props.src
          }
        )
        return coverImage
      })()

      // write back
      file.title = title
      file.date = date
      file.description = description
      file.tags = tags
      file.author = author
      file.category = category
      file.top = top
      file.announcement = announcement
      file.showToc = showToc
      file.comment = comment
      file.coverImage = coverImage
    }
  })
})
