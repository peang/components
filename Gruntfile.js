// Irvan Setiawan
// peang.cookie@gmail.com

module.exports = function(grunt) {
    grunt.initConfig({
    	name : 'Peang UI Component Builder',

        pkg: grunt.file.readJSON('package.json'),
        copy : {

	        // jquery - http://jquery.com/
	        jquery : {
	            files: [{
	                nonull : true, expand : true, flatten : true,
	                src    : 'bower_components/jquery/dist/jquery.js',
	                dest   : 'assets/js/jquery/',
	                filter : 'isFile'
	            }],
	        },

	        // select2 - https://select2.github.io/
	        select2 : {
	            files: [{
	                nonull : true, expand : true, flatten : true,
	                src    : 'bower_components/select2/select2.js',
	                dest   : 'assets/js/',
	                filter : 'isFile'
	            }, {
	            	nonull : true, expand : true, flatten : true,
	                src    : 'bower_components/select2/select2.css',
	                dest   : 'assets/css/',
	                filter : 'isFile'

	            }, {
	                nonull : true, expand : true, flatten : true,
	                src : [
	                    'bower_components/select2/select2.png',
	                    'bower_components/select2/select2x2.png',
	                ],
	                dest   : 'assets/img/',
	                filter : 'isFile'
	            }]
	        },
	    }

    });

	grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('default', [ 'copy' ]);
};