const webpack = require('webpack')
const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: path.join(__dirname, "./js/app/index.js"), // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.join(__dirname, "../public/js"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "index.js", // string    // the filename template for entry chunks
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'js/mod'),
      mod: path.join(__dirname, "js/mod"),
      less: path.join(__dirname, "less")
    },
    /* alternative alias syntax (click to show) */
    /* Advanced resolve configuration (click to show) */
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ],
  // list of additional plugins
  /* Advanced configuration (click to show) */
}