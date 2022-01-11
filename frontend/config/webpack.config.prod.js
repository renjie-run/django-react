const { merge } = require('webpack-merge');
const configFactory = require('./webpack.config');

const config = configFactory({ webpackEnv: 'production' });

module.exports = merge(config, {

});
