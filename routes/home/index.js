const keystone = require('keystone')
const Page     = keystone.list('Page')

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
    }).then(() => {
      next()
    })
  })

  // Render the view
  view.render('home')
}
