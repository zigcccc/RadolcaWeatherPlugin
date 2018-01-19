const path = require('path')

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "weather.dist.js"
  },
  rules: [
    {
      loader: "babel-loader",
      options: {
        preset: ["es2015"]
      }
    }
  ]
}