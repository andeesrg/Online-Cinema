const { merge } = require('webpack-merge');
const baseWebpackConfig = require("./webpack.base.config");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
