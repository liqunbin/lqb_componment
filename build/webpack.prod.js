const webpack = require('webpack');

const baseConfig = require('./webpack.base');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  module: {
    rules: [
      ...baseConfig.module.rules,
    ]
  },
})