const keystone = require('keystone')
const Sponsor  = keystone.list('Sponsor')
const Page     = keystone.list('Page')

const logoLevels = [ 'Bear Hug', 'Partner']
const textLevels = [ 'High Five', 'Fist Bump', 'Special']

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res)
  var locals = res.locals

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'home'

  view.on('init', (next) => {
    return Page.model.findOne({slug: 'home'}).then((page) => {
      if (!page) { res.notfound() }
      locals.content = page.content
      locals.section = 'home'
      return locals
    })
    .then(() => Sponsor.model.find({ visible: true }))
    .then((sponsors) => {
      locals.sponsors = {
        logo: sponsors.filter(x => logoLevels.indexOf(x.tier) > -1)
          .sort((a, b) => a.sortOrder - b.sortOrder),
        text: sponsors.filter(x => textLevels.indexOf(x.tier) > -1)
          .sort((a, b) => a.sortOrder - b.sortOrder)
      }
      next()
    })
  })

  // Render the view
  view.render('home')
}
