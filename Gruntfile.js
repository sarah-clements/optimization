
module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
 //    concat: {   
	//     build: {
	//     src: ['src/js/perfmatters.js', 'src/views/js/main.js'],
	//     dest: 'build/js/scripts.min.js'
	//     }
	// },
	uglify: {
		build: {
			files: {
		   'build/views/js/main.js': 'src/views/js/main.js',
		   
			}
		 }
	},
	cssmin: {
	  options: {
	    shorthandCompacting: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'build/views/css/style.css': 'src/views/css/style.css'
	    }
	  }
	},
	imageoptim: {
	  build: {
	    src: ['build/views/images', 'build/img']
		}
	  },
	uncss: {
	  build: {
	    files: {
	      'build/css/bootstrap-grid.css': 'src/views/pizza.html'
	    }
	  }
	},
     inlinecss: {
        main: {
            files: {
                'build/index.html': 'src/index.html',
                // 'build/views/pizza.html': 'src/views/pizza.html' inlining this scrambled the page's layout
            }
        }
	},
	htmlmin: {                                     
	    build: {                                     
	      options: {                                 
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   
	        'build/index.html': 'build/index.html',     
	        'build/views/pizza.html': 'src/views/pizza.html'
	      }
		}
	 },
	 imagemin: {
	 	build: {
	 		files: {
	 			'build/views/images/pizza.png': 'build/views/images/pizza.png',
	 			'build/views/images/pizzeria.jpg': 'build/views/images/pizzeria.jpg'
	 		}
	 	 }
	 	},
		// build: {                         // Another target
	 //      files: {
	 //        expand: true,                  // Enable dynamic expansion
	 //        cwd: 'build/views/images',                   // Src matches are relative to this path
	 //        src: ['**/*.{png,jpg}'],   // Actual patterns to match
	 //        dest: 'build/views/compressed'                  // Destination path prefix
	 //      }
  //     	}
    // },
	 watch: {
	 	options: {
	        livereload: true
	    },
			scripts: {
				files: ['src/js/perfmatters.js', 'src/views/js/main.js'],
				tasks: ['concat', 'uglify', 'zopfli'],
				options: {
					spawn: false
			}
		}
	}
	// processhtml: {
	//   build: {
	//     files: {
	//       'build/views/pizza.html': 'src/pizza.html'
	//     }
	//   }
	// }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['uglify', 'inlinecss', 'htmlmin', 'imagemin', 'uncss']);
  grunt.registerTask('build', ['inlinecss', 'htmlmin']);
};


