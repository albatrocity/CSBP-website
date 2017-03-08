const keystone = require('keystone')
const Types = keystone.Field.Types

const Sponsor = new keystone.List('Sponsor', {
  defaultSort: 'sortOrder', sortable: true
})

Sponsor.add({
  name: { type: Types.Text, required: true, index: true },
  website: { type: Types.Url, initial: true },
  logo: {
    type: Types.CloudinaryImage, autoCleanup: true, folder: 'sponsors',
    select: true, selectPrefix: 'sponsors'
  },
  logoSizing: {
    type: Types.Select,
    options: ['regular', 'wide', 'superwide'],
    default: 'regular'
  },
  tier: {
    type: Types.Select, options: ['High Five', 'Fist Bump', 'Bear Hug', 'Special', 'Partner'],
    initial: true,
    default: 'High FIve'
  },
  notes: { type: Types.Textarea },
  visible: { type: Types.Boolean, default: true }
})

Sponsor.defaultColumns = 'name, tier'
Sponsor.register()
