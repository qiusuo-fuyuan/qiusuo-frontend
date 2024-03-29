const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./config/webpack/config.base');
const devConfig = require('./config/webpack/config.dev');
const prodConfig = require('./config/webpack/config.prod');
const dotenv = require('dotenv');

const sourceDir = path.join(__dirname, './src');
const distDir = path.join(__dirname, './dist');

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  let envFile = devMode ? '.env.dev' : '.env.prod';
  console.log("in file");
  envFile = path.join(__dirname) + '/' + envFile;
  const paths = { sourceDir, distDir, envFile };

  const base = baseConfig(paths);
  const dev = merge(base, devConfig(paths));
  const prod = merge(base, prodConfig(paths));

  return devMode ? dev : prod;
};