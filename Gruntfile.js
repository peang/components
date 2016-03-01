/** 
 * @author Irvan Setiawan <peang.cookie@gmail.com>
**/

module.exports = function(grunt) {
    grunt.initConfig({
    	name : 'Peang UI Component Builder',

        pkg: grunt.file.readJSON('package.json'),

		/**
		 * Copy package from /vendor/bower to assets
		 */
		copy : {
	        // jquery - http://jquery.com/
	        jquery : {
	            files: [{
	                nonull : true, expand : true, flatten : true,
	                src    : 'vendor/bower/jquery/dist/jquery.js',
	                dest   : 'assets/js/jquery/',
	                filter : 'isFile'
	            }],
	        },

	        // jquery loading - http://carlosbonetti.github.io/jquery-loading/
	        jquery_loading : {
	            files: [{
	                nonull : true, expand : true, flatten : true,
	                src    : 'vendor/bower/jquery-loading/dist/jquery.loading.js',
	                dest   : 'assets/js/jquery-loading/',
	                filter : 'isFile'
	            },{
	            	nonull : true, expand : true, flatten : true,
	                src    : 'vendor/bower/jquery-loading/dist/jquery.loading.css',
	                dest   : 'assets/css/jquery-loading/',
	                filter : 'isFile'
	            }],
	        },

	        // Admin LTE - https://almsaeedstudio.com
	        admin_lte : {
	        	files: [{
	                nonull : true, expand : true, flatten : true,
	                src    : 'vendor/bower/admin-lte/dist/css/AdminLTE.css',
	                dest   : 'assets/css/admin-lte/',
	                filter : 'isFile'
	            },{
	            	nonull : true, expand : true, flatten : true,
	                src    : 'vendor/bower/admin-lte/dist/css/skins/_all-skins.css',
	                dest   : 'assets/css/admin-lte/skins/',
	                filter : 'isFile'
	            },{
	            	nonull : true, expand : true, flatten : true,
	                src    : 'vendor/bower/admin-lte/dist/js/app.js',
	                dest   : 'assets/js/admin-lte/',
	                filter : 'isFile'
	            }],
	        },

			// bootstrap_sass - https://github.com/twbs/bootstrap-sass
			bootstrap_sass : {
				files : [{
					nonull : true, expand : true, flatten : true,
					src    : 'vendor/bower/bootstrap-sass/assets/stylesheets/*.scss',
					dest   : 'assets/sass/bootstrap/',
					filter : 'isFile'
				},{
					nonull : true, expand : true, flatten : true,
					src    : 'vendor/bower/bootstrap-sass/assets/stylesheets/bootstrap/*.scss',
					dest   : 'assets/sass/bootstrap/bootstrap',
					filter : 'isFile'
				},{
					nonull : true, expand : true, flatten : true,
					src    : 'vendor/bower/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss',
					dest   : 'assets/sass/bootstrap/bootstrap/mixins',
					filter : 'isFile'
				},{
					nonull : true, expand : true, flatten : true,
					src    : 'vendor/bower/bootstrap-sass/assets/javascripts/bootstrap/*.js',
					dest   : 'assets/js/bootstrap/',
					filter : 'isFile'
				},{
					nonull : true, expand : true, flatten : true,
					src    : 'vendor/bower/bootstrap-sass/assets/javascripts/bootstrap.js',
					dest   : 'assets/js/',
					filter : 'isFile'
				},{
					nonull : true, expand : true, flatten : true,
					src    : 'vendor/bower/bootstrap-sass/assets/fonts/bootstrap/*.*',
					dest   : 'assets/fonts/',
					filter : 'isFile'
				}]
			},

			// bootbox asset http://bootboxjs.com/
			bootbox : {
				files : [{
					nonull : true, expand : true, flatten : true,
					src    : 'vendor/bower/bootbox/bootbox.js',
					dest   : 'assets/js/',
					filter : 'isFile'
				}]
			}
	    },

	    /**
	     * Minified CSS
	     */
	    cssmin: {
            minify: {
                expand : true,
                cwd    : 'assets/',
				dest   : 'assets/',
                src    : ['**/*.css','*.css'],
                extDot : 'last',
				rename  : function (dest, src) {
					var folder    = src.substring(0, src.lastIndexOf('/'));
					var filename  = src.substring(src.lastIndexOf('/'), src.length);

					filename  = filename.substring(0, filename.lastIndexOf('.'));

					return dest + folder + filename + '.min.css';
				}
            }
        },

		/**
		 * Convert assets from SCSS to CSS
		 */
		sass: {
			dist: {
				options: {
					precision     : 3, // decimal precision
					lineNumbers   : false,
					style         : 'expanded', // nested, compact, compressed, expanded
					loadPath      : [],
					require       : [],
					cacheLocation : '.sass-cache'
				},
				files: [{
					expand  : true,
					flatten : true,
					cwd     : 'assets/sass',
					src     : ['**/*.scss','*.scss'],
					dest    : 'assets/css',
					ext     : '.css',
					extDot  : 'last'
				}]
			}
		},


        /**
         * JS Uglify
         */
        uglify: {
            dist: {
                options: {
                    mangle           : false,
                    preserveComments : 'some',
                    banner           : '/*! peang.ui */'
                },
                files: [{
                    src    : [
                        '**/*.js',
                        '!**/*.min.js'
                    ],
                    expand : true,
                    cwd    : 'assets/',
                    dest   : 'assets/',
                    extDot : 'last',
                    rename  : function (dest, src) {
                        var folder    = src.substring(0, src.lastIndexOf('/'));
                        var filename  = src.substring(src.lastIndexOf('/'), src.length);

                        filename  = filename.substring(0, filename.lastIndexOf('.'));

                        return dest + folder + filename + '.min.js';
                    }
                }]
            }
        }


    });

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', [ 'copy' , 'sass', 'cssmin', 'uglify']);
};