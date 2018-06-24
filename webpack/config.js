const entryPath = './dev/js/src/**/*.js'

const output = {
  production: 'release',
  development: 'dev',
  qa: 'qa'
}[process.env.NODE_ENV] || 'dev'

const template = './dev/views/**/*.jsp'

module.exports = {
  entryPath,
  output,
  template
}
