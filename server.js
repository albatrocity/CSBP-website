'use strict'

// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

const keystone   = require('keystone')

// For Mongoose 4 (Promises)
keystone.mongoose.Promise = global.Promise

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
  'name': 'Crossroads Flock Party',
  'brand': 'Crossroads Flock Party',
  'stylus': 'public',
  'static': 'public',
  'views': 'views',
  'view engine': 'jade',
  'session': true,
  'session store': 'mongo',
  'auth': true,
  'auto update': true,
  'user model': 'User',
  'mongo': process.env.MONGODB_URI || 'mongodb://localhost/crossroads-flock-party'
})

keystone.set('s3 config', {
  bucket: process.env.S3_BUCKET,
  key: process.env.AWS_KEY,
  secret: process.env.AWS_SECRET
})
keystone.set('cloudinary config', {
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

// Load your project's Models
keystone.import('models')

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
})

// Load your project's Routes
keystone.set('routes', require('./routes'))

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
  users: 'users',
  pages: 'pages'
})

// Start Keystone to connect to your database and initialise the web server

keystone.start()
