const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (options) => {
  const { webpackEnv } = options;
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    mode: webpackEnv,
    entry: {
      home: './src/pages/home/index.js',
      user: './src/pages/user/index.js',
    },
    output: {
      path: isEnvProduction ? path.resolve(__dirname, '../build/frontend') : undefined,
      publicPath: isEnvDevelopment ? 'http://localhost:8099/bundles/' : undefined,
      filename: isEnvDevelopment ? 'static/js/[name].bundle.js' : 'static/js/[name].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    },
    plugins: [
      isEnvProduction && new CleanWebpackPlugin(),
      isEnvDevelopment ?
        new BundleTracker({ filename: 'webpack-stats.dev.json' }) :
        new BundleTracker({ filename: 'webpack-stats.prod.json' }),
    ].filter(Boolean),
  };
}