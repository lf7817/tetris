/*
 * @Author: lifan
 * @Date: 2018-11-23 15:22:07
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-06 23:12:04
 */
const { override, addBundleVisualizer, useEslintRc, enableEslintTypescript, adjustWorkbox, } = require('customize-cra');
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
  config.plugins.push(
    new InjectManifest({
      swSrc: './src/sw.js',
    }),
  );

  return config;
};

module.exports = override(
  addStylint(),
  useEslintRc(),
  enableEslintTypescript(),
  adjustWorkbox(wb => wb),
  // injectManifest(),
  process.env.NODE_ENV === 'production' && addBundleVisualizer(),
);
