const keystone = require('keystone')
const Types = keystone.Field.Types

const Page = new keystone.List('Page', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: 'name'
})

Page.add({
  name: { type: Types.Text, required: true, index: true },
  content: { type: Types.Markdown },
  inMenu: { type: Types.Boolean, index: true },
  slug: { type: Types.Text, initial: true },
  published: { type: Types.Boolean, default: true, initial: true },
  images: {
    type: Types.CloudinaryImages, select: true, autoCleanup: true,
    note: `Just a shortcut to upload images. Copy/paste their URLs into the content section if you want to use them`
  },
  gallery: {
    type: Types.CloudinaryImages, select: true, autoCleanup: true,
    note: `Images will be displayed in a slider gallery at the top of the page.`
  }
})

Page.defaultColumns = 'name, published'
Page.register()
