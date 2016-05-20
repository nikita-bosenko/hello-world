var path = require('path');

module.exports = {
    entry: './frontend/js/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    watch: true,

    watchOptions: {
      aggregateTimeout: 100
    },

    module: {
      loaders: [
        { test:  /\.js$/, loader: 'babel'},
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.html$/, loader: 'html'},
        { test: /\.png$/, loader: "file-loader?mimetype=image/png&name=images/[name].[ext]" }
        

      ]
    },
    devServer: {
      host: 'localhost',
      port: 8080
    },

    externals: {
      lodash: "_",
      jquery: "$"
    },

    resolveLoader: {
       root: path.join(__dirname, 'node_modules')
    }
};
