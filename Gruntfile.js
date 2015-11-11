// Irvan Setiawan
// peang.cookie@gmail.com

module.exports = function(grunt) {
    grunt.initConfig({
    	name : 'Peang UI Component Builder',
        pkg: grunt.file.readJSON('package.json')
    });

    copy : {
        // bootstrap official sass - https://github.com/twbs/bootstrap-sass
        bootstrap_sass: {
            files: [{
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/bootstrap-sass-official/assets/stylesheets/bootstrap/*.scss',
                dest   : 'assets/sass/bootstrap/bootstrap/',
                filter : 'isFile'
            }, {
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/bootstrap-sass-official/assets/stylesheets/bootstrap/mixins/*.scss',
                dest   : 'assets/sass/bootstrap/bootstrap/mixins/',
                filter : 'isFile'
            }, {
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/*.js',
                dest   : 'assets/js/bootstrap/',
                filter : 'isFile'
            }, {
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/bootstrap-sass-official/assets/javascripts/bootstrap.js',
                dest   : 'assets/js/',
                filter : 'isFile'
            }, {
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/bootstrap-sass-official/assets/fonts/bootstrap/*',
                dest   : 'assets/fonts/',
                filter : 'isFile'
            }],
        },

        // jquery - http://jquery.com/
        jquery : {
            files: [{
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/jquery/jquery.js',
                dest   : 'assets/js/jquery/',
                filter : 'isFile'
            }],
        },

        // select2 - https://select2.github.io/
        select2 : {
            files: [{
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/select2/select2.js',
                dest   : 'assets/js/',
                filter : 'isFile'
            }, {
                nonull : true, expand : true, flatten : true,
                src : [
                    'vendor/select2/select2.png',
                    'vendor/select2/select2x2.png',
                ],
                dest   : 'assets/img/',
                filter : 'isFile'
            }]
        },

        // Utilities
        utilities: {
            files: [{
                nonull : true,
                expand : true, flatten : true,
                dest   : 'assets/js/',
                filter : 'isFile',
                src    : [
                    'vendor/console.message/console.message.js'
                ],
            }, {
                nonull : true, expand : true, flatten : true,
                dest   : 'assets/css/',
                filter : 'isFile',
                src     : [
                    // Forms
                    'vendor/jquery-minicolors/jquery.minicolors.css'
                ],
            }]
        },

        // Admin LTE
        adminLte : {
            files: [{
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/admin-lte/build/bootstrap-less/*.less',
                dest   : 'assets/less/bootstrap-less/'
             }, {
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/admin-lte/build/bootstrap-less/mixins/*.less',
                dest   : 'assets/less/bootstrap-less/mixins/'
             }, {
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/admin-lte/build/less/skins/*.less',
                dest   : 'assets/less/admin-lte/skins/'
             },
             {
                nonull : true, expand : true, flatten : true,
                src    : 'vendor/admin-lte/build/less/*.less',
                dest   : 'assets/less/admin-lte/'
             }]
        },

        // FontAwesome
        font_awesome : {
            files: [{
                    nonull : true, expand : true, flatten : true,
                    src    : 'vendor/font-awesome/fonts/*',
                    dest   : 'assets/fonts/'
                },
                {
                    nonull : true, expand : true, flatten : true,
                    src    : 'vendor/font-awesome/scss/*',
                    dest   : 'assets/sass/fontawesome/'
                },
            ]
        },

    },

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);
};