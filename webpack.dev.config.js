const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const webpack = require("webpack");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: "./",
    port: 3000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
