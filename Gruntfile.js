module.exports = function(grunt) {
  var files = grunt.file.expand('dev/js/src/*.js');
  var requireOptions = {};

  files.forEach(function (file) {
    var filenamelist = file.split('/');
    var num = filenamelist.length;
    var filename = filenamelist[num - 1].replace(/\.js$/,'');

    requireOptions[filename] = {
      options: {
        baseUrl: 'dev/js',
        paths: {
        },
        optimizeAllPluginResources: true,
        include: 'common/main.js',
        name: 'src/' + filename,
        out: 'dist/js/' + filename + '.js'
      }
    };
  })



  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dev/js/*.js',
        dest: 'build/*.min.js'
      }
    },
    babel: {
      options: {
          sourceMap: false,
          presets: ['babel-preset-es2015']
          
      },
      dist: {
        files: [{
            expand:true,
            cwd:'dist/', //js目录下
            src:['**/t.js'], //所有js文件
            dest:'dist/'  //输出到此目录下
          }] 
      }
    },
    requirejs: requireOptions
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-webpack');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('require', ['requirejs']);
};