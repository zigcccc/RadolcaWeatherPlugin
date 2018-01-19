const path = require('path')
const Minify = require('babel-minify-webpack-plugin')


module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "weather.dist.js"
  },
  plugins: [
    new Minify()
  ],
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  }
}