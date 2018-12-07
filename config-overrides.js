/*
 * @Author: lifan
 * @Date: 2018-11-23 15:22:07
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-07 15:53:26
 */
const { override, addBundleVisualizer, useEslintRc, enableEslintTypescript } = require('customize-cra');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
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
      fix: false,
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
      swSrc: './src/service-worker.js',
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: 'cdn',
    }),
  );

  config.plugins = plugins;

  return config;
};

module.exports = override(
  addStylint(),
  useEslintRc(),
  enableEslintTypescript(),
  injectManifest(),
  process.env.NODE_ENV === 'production' && addBundleVisualizer(),
);
