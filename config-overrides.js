/*
 * @Author: lifan
 * @Date: 2018-11-23 15:22:07
 * @Last Modified by: lifan
 * @Last Modified time: 2019-03-13 16:30:41
 */
const {
  override,
  addBundleVisualizer,
  disableChunk,
  addTslintLoader,
  disableEsLint
} = require('customize-cra');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
  InjectManifest
} = require('workbox-webpack-plugin');
const path = require('path');

const addStylint = () => (config) => {
  config.plugins.push(
    new StyleLintPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, './.stylelintrc.json'),
      files: '**/*.scss',
      failOnError: false,
      quiet: true,
      syntax: 'scss',
      fix: true,
    }),
  );

  return config;
};

const injectManifest = () => (config) => {
  let plugins = config.plugins.filter(p => {
    return p.constructor.name !== 'GenerateSW';
  });

  plugins.push(
    new InjectManifest({
      swSrc: './public/service-worker.js',
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: 'cdn',
    }),
  );

  config.plugins = plugins;

  return config;
};

module.exports = override(
  addStylint(),
  injectManifest(),
  disableChunk(),
  disableEsLint(),
  addTslintLoader(),
  process.env.NODE_ENV === 'production' && addBundleVisualizer(),
);
