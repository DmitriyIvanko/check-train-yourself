// "builder": "ngx-build-plus:build", // for release
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
