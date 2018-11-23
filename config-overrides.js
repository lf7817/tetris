/*
 * @Author: lifan 
 * @Date: 2018-11-23 15:22:07 
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-23 15:29:45
 */
const { override, addBundleVisualizer } = require('customize-cra');
const StyleLintPlugin = require('stylelint-webpack-plugin');
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

module.exports = override(
  addStylint(),
  process.env.NODE_ENV === 'production' && addBundleVisualizer(),
);