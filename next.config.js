const withLess = require('@zeit/next-less');

const isProduction = process.env.NODE_ENV === 'production';
const PRODUCTION_STATIC_URL = '/yasaricli.github.io/';

module.exports = {
  assetPrefix:  isProduction ? PRODUCTION_STATIC_URL : '',
  ...withLess()
}
