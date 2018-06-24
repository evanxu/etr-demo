const webpackConfig = require('./webpack.config');
const distFolder = {
  production: 'release',
  development: 'dev',
  qa: 'qa'
}[process.env.NODE_ENV] || 'dev'

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: [`dist/${distFolder}`]
      }
    },
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      release: webpackConfig,
      dev: Object.assign({watch: true}, webpackConfig)
    },
    watch: {
      files: ['**/*.js'], 
      tasks: ['clean:build', `webpack:${distFolder}`]
    }
  });


  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('dev', ['clean:build', `webpack:${distFolder}`, `watch`]);
};