let modules = {
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },{ 
    test: /\.jsp$/, 
    loader: 'underscore-template-loader',
    query: { 
      interpolate : '\\{\\{(.+?)\\}\\}', 
    }
  }]
}

module.exports = modules;
