'use strict'

const Hapi        = require('hapi');
const Path        = require('path');
const goodOptions = require('./log_options')
const moment      = require('moment')

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});
server.connection({ host: 'localhost', port: 8080 })

server.register([
  require('inert'),
  require('vision'),
  {
    register: require('good'),
    options: goodOptions
  },
  {
    register: require('hapi-stylus'),
    options: {
      home: __dirname + "/public/stylesheets",
      route: "/css/{filename*}" // default
    }
  }
], (err) => {
  if (err) {
    throw err;
  }

  server.views({
    engines: {jade: require('jade')},
    path: 'views',
    compileOptions: {
      pretty: true
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index', {year: moment().format('YYYY')});
    }
  });
  server.route({
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: 'js'
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/img/{param*}',
    handler: {
      directory: {
        path: 'img'
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/fonts/{param*}',
    handler: {
      directory: {
        path: 'fonts'
      }
    }
  });
  // server.route({
  //   method: 'GET',
  //   path: '/css/{param*}',
  //   handler: {
  //     directory: {
  //       path: 'stylesheets'
  //     }
  //   }
  // });
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);

});
