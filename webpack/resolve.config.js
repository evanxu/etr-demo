const path = require('path');

let resolve = {
  extensions: ['.js', '.json']
}

resolve.alias = Object.assign({
  '@': path.join(__dirname, '..', 'dev')
})

module.exports = resolve
