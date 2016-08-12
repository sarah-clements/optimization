
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
		   'build/css/bootstrap-grid.css': 'build/css/bootstrap-grid.css'
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
                'build/views/pizza.html': 'src/views/pizza.html'
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
	        'build/views/pizza.html': 'build/views/pizza.html'
	      }
		}
	 },
	 imagemin: {
	 	build: {
	 		files: {
	 			'build/views/compressed/pizza.png': 'build/views/images/pizza.png',
	 			'build/views/compressed/pizzeria.jpg': 'build/views/images/pizzeria.jpg'
	 		}
	 	}
		// build: {                         // Another target
	 //      files: {
	 //        expand: true,                  // Enable dynamic expansion
	 //        cwd: 'build/views/images',                   // Src matches are relative to this path
	 //        src: ['**/*.{png,jpg}'],   // Actual patterns to match
	 //        dest: 'build/views/compressed'                  // Destination path prefix
	 //      }
  //     	}
    },
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
	},
	// processhtml: {
	//   build: {
	//     files: {
	//       'build/views/pizza.html': 'src/pizza.html'
	//     }
	//   }
	// }
  });
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
  grunt.registerTask('default', ['uncss', 'uglify', 'inlinecss', 'htmlmin']);
  grunt.registerMultiTask('watch');
  grunt.registerTask('images', ['imageoptim', 'imagemin']);
};




















// 'use strict'

// var ngrok = require('ngrok');

// module.exports = function(grunt) {
// 	require('load-grunt-tasks')(grunt);

// 	grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json'),
// 			pagespeed: {
// 		      options: {
// 		        nokey: true,
// 		        locale: "en_GB",
// 		        threshold: 40
// 		      },
// 		      local: {
// 		        options: {
// 		          strategy: "desktop",
// 		          threshold: 90
// 		        }
// 		      },
// 		      mobile: {
// 		        options: {
// 		          strategy: "mobile",
// 		          threshold: 90
// 		        }
// 		      }
// 		    },
// 		    concat: {   
// 			    build: {
// 			    src: ['src/js/perfmatters.js', 'src/views/js/main.js'],
// 			    dest: 'build/js/main.js'
// 			    }
// 			},
// 			uglify: {
// 		    	build: {
// 		        src: 'build/js/main.js',
// 		        dest: 'build/js/main.min.js'
// 	   		 	}
// 			},
// 			imageoptim: {
// 			  build: {
// 			    src: ['src/views/images', 'src/img'],
// 			    dest: 'build/img'
// 				}
// 			  },
// 			uncss: {
// 			  build: {
// 			    files: {
// 			      'build/css/bootstrap-tidy.css': 'src/views/pizza.html'
// 			    }
// 			  }
// 			},
// 		     inlinecss: {
// 		        main: {
// 		            files: {
// 		                'build/index-inline.html': 'src/index.html',
// 		                // juice.inlineContent('src/views/pizza.html', 'src/views/css/style.css');
// 		                'build/pizza-inline.html': 'src/views/pizza.html'
// 		            }
// 		        }
// 			},
// 			htmlmin: {                                     
// 		    build: {                                     
// 		      options: {                                 
// 		        removeComments: true,
// 		        collapseWhitespace: true
// 		      },
// 		      files: {                                   
// 		        'build/index.html': 'build/index-inline.html',     
// 		        'build/pizza.html': 'build/pizza-inline.html'
// 		      }
// 		    }
// 		 },
// 		 watch: {
// 		 	options: {
// 		        livereload: true
// 		    },
// 				scripts: {
// 					files: ['src/js/perfmatters.js', 'src/views/js/main.js'],
// 					tasks: ['concat', 'uglify'],
// 					options: {
// 						spawn: false
// 			}
// 		}
// 	}
// });
// 	// Register customer task for ngrok
//   grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
//     var done = this.async();
//     var port = 8080;

//     ngrok.connect(port, function(err, url) {
//       if (err !== null) {
//         grunt.fail.fatal(err);
//         return done();
//       }
//       grunt.config.set('pagespeed.options.url', url);
//       grunt.task.run('pagespeed');
//       done();
//     });
//   });

// 	// grunt.loadNpmTasks('grunt-contrib-uglify');
// 	// grunt.loadNpmTasks('grunt-imageoptim');
// 	// grunt.loadNpmTasks('grunt-inline-css');
// 	// grunt.loadNpmTasks('grunt-contrib-htmlmin');
// 	// grunt.loadNpmTasks('grunt-contrib-concat');
// 	// grunt.loadNpmTasks('grunt-contrib-watch');
// 	// grunt.loadNpmTasks('grunt-uncss');
// 	// grunt.loadNpmTasks('grunt-pagespeed');
// 	grunt.registerTask('default'['psi-ngrok', 'uglify', 'concat', 'imageoptim', 'uncss', 'inlinecss', 'htmlmin']);
// 	grunt.registerMultiTask('pagespeed'['local', 'mobile']);
// 	grunt.registerMultiTask('watch'['scripts']);
