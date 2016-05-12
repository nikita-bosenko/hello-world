var path = require('path');

module.exports = {
    entry: './frontend/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    watch: false,

    watchOptions: {
      aggregateTimeout: 100
    },

    module: {
      loaders: [
        { test:  /\.js$/, loader: 'babel'},
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.html$/, loader: 'html'}
      ]
    },
    devServer: {
      host: 'localhost',
      port: 8080
    },

    externals: {
      lodash: "_",
      jquery: "$"
    }
};
