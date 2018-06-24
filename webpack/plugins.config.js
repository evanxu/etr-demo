const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const template = require('./config').template;

let plugins = []

/**
 * create page
 */
let files = glob.sync(template, {nodir: true});
files.map(file => {
  let arr = file.split('/')
  let fileName = arr[arr.length - 1]
  let folderName = arr[arr.length - 2]
  let name = arr[arr.length - 1].split('.')[0];
  let config = {
    template: file,
    inject: false,
    filename: `pages/${folderName}/${name}.jsp`,
    chunks: ['common', name],
    chunksSortMode: function (chunk1, chunk2) {
      let order = ['common', name];
      let order1 = order.indexOf(chunk1.names[0]);
      let order2 = order.indexOf(chunk2.names[0]);
      return order1 - order2;
    }
  };

  plugins.push(new HtmlWebpackPlugin(config));
})


/**
 * combine common code
 */
plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: `js/[name].js`,
    minChunks: '2'
  })
)


/**
 * compress code
 */
if(process.env.NODE_ENV === 'production'){
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    })
  )
}

module.exports = plugins
