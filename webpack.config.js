const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
/*      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },*/
      {
          test: /\.scss$/,
          use: [ MiniCssExtractPlugin.loader, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader", // compiles Sass to CSS
              options: {
                 includePaths: ["./src/scss"]
             }
          }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/views/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};