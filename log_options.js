module.exports = {
  ops: {
      interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout'],
    file: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ ops: '*' }]
    }, {
      module: 'good-squeeze',
      name: 'SafeJson'
    }],
    http: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ error: '*' }]
    }]
  }
};
