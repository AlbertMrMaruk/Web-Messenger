const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "serv"),
    filename: "project-name.bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".scss", ".css", ".json"],
    fallback: {
      fs: false,
    },
    alias: {
      "express-handlebars": "/node_modules/handlebars/dist/handlebars.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
        exclude: path.resolve(__dirname, "node_modules"),
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
};
