const keystone = require('keystone')
const Sponsor  = keystone.list('Sponsor')
const Page = keystone.list('Page')

const logoLevels = [ 'Bear Hug', 'Partner']
const textLevels = [ 'High Five', 'Fist Bump', 'Special']

exports = module.exports = function (req, res) {
  const view = new keystone.View(req, res)
  var locals = res.locals
  locals.section = req.params.page

  view.on('init', (next) => {
    return Page.model.findOne({slug: req.params.page}).then((page) => {
      if (!page) { res.notfound() }
      locals.page = page
      locals.title = page.name
      locals.section = page.slug
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

  view.render('page')
}
