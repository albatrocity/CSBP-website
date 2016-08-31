const keystone = require('keystone')
const Page = keystone.list('Page')

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
      next()
    })
  })

  view.render('page')
}
