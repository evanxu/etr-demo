const path = require('path');

const outputPath = require('./config').output

let output = {
  path: path.join(__dirname, '..', 'dist', outputPath),
  filename: `js/[name].[hash:9].js`,
  chunkFilename: `js/[name].chunk.js`,
  publicPath: '/'
}

module.exports = output;
