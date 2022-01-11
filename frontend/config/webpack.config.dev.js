const { merge } = require('webpack-merge');
const configFactory = require('./webpack.config');

const config = configFactory({ webpackEnv: 'development' });

module.exports = merge(config, {
    devServer: {
      hot: true,
      port: 8099,
      compress: true,
    },
  }
);