const path = require("path");
module.exports = {
  entry: ["./src/js/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};