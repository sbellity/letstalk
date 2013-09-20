module.exports = function (grunt) {

  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({


    watch: {
      components: {
        files: 'app/aura_components/**/*.js',
        tasks: ['concat'],
        options: {
          livereload: true
        }

      },
      handlebars: {
        files: 'app/aura_components/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: 'app/styles/*.css',
        tasks: ['cssmin'],
        options: {
          livereload: true
        }
      }
    },

    jshint: {
      all: [
        'app/scripts/[^templates].js',
        'app/aura_components/**/*.js'
      ]
    },

    handlebars: {
      compile: {
        files: {
          "app/scripts/templates.js" : ["app/aura_components/**/*.hbs"]
        },
        options: {
          wrapped: false,
          namespace: "Hull.templates",
          processName: function (filename) {
            return filename.replace(/^app\/aura_components\//, '').replace(/\.hbs$/, '');
          }
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app'
        }
      }
    },

    clean: {
      dist: ['.tmp', 'dist/*'],
      server: '.tmp'
    },

    uglify: {
      dist: {
        files: {
          'dist/application.js': [
            'app/scripts/*.js'
          ]
        }
      }
    },

    useminPrepare: {
      html: 'index.html'
    },

    usemin: {
      html: ['dist/*.html'],
      css: ['dist/styles/*.css']
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: '*.{png,jpg,jpeg}',
          dest: 'dist/images'
        }]
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/application.css': [
            'app/styles/*.css'
          ]
        }
      }
    },

    copy: {
      dist: {
        files: [
          { dest: 'dist/index.php', src: 'dist/index.html' },
          { cwd: 'app/', dest: 'dist/', src: ['.htaccess', 'robots.txt'], expand: true },
        ]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: false,
          removeCommentsFromCDATA: true,
          collapseWhitespace: false,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeRedundantAttributes: false,
          useShortDoctype: true,
          removeEmptyAttributes: false,
          removeOptionalTags: false
        },
        files: [{
          expand: true,
          cwd: 'app',
          src: '*.html',
          dest: 'dist'
        }]
      }
    },

    concat: {
      options: {
        separator: "\n\n\n\n//--------\n\n\n"
      },
      dist: {
        src: ['app/aura_components/**/*.js'],
        dest: 'app/scripts/components.js'
      }
    }

  });


  // grunt.renameTask('mincss', 'cssmin');

  // grunt.registerTask('server', [
  //   'clean:server',
  //   'watch'
  // ]);

  // grunt.registerTask('test', [
  //   'clean:server',
  //   'watch'
  // ]);

  // grunt.registerTask('build', [
  //   'clean:dist',
  //   'concat',
  //   'jshint',
  //   'handlebars',
  //   'useminPrepare',

  //   'uglify',
  //   'imagemin',
  //   'htmlmin',
  //   'cssmin',
  //   'usemin',
  //   'copy'
  // ]);

  // grunt.registerTask('default', ['build']);

};
