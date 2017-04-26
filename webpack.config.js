var webpack = require('webpack');

module.exports = {

  entry: ['./src/entry.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        use:  ['underscore-template-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  output: {
    path: __dirname + '/js',
    filename: 'app.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  resolve: {
    modules: [
      __dirname + '/node_modules'
    ]
  }
  
};
