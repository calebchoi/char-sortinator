const path = require("path");
module.exports = {
  entry: ["./src/js/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.js"
  },
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader'
      }
    ]
  }
};