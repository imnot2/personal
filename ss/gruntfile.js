/*
 * 1. 安装NodeJS
 * 2. npm install -g grunt-cli
 * 3. 进入项目根目录执行npm install命令安装依赖包(npm install grunt --save-dev / npm init)
 * 4. 运行grunt命令打包SDK
 * 5. srccss目录是原来的css文件，src目录下的sass目录是整理后的目录（整理完毕后srccss可以删掉）
 */

'use strict';
module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        dirs: {
            root: './',
            src: {
                root: 'src',
                sass: '<%= dirs.src.root %>/sass',
                js: '<%= dirs.src.root %>/js',
                lib: '<%= dirs.root %>/vendor',
                imgs: '<%= dirs.src.root %>/images',
                font: '<%= dirs.src.root %>/fonts',
                tpl: '<%= dirs.src.root %>/tpls',
                products: '<%= dirs.src.root %>/products'
            },
            build: {
                root: 'build',
                css: '<%= dirs.build.root %>/css',
                imgs: '<%= dirs.build.root %>/images',
                js: '<%= dirs.build.root %>/js',
                font: '<%= dirs.build.root %>/fonts',
                tpl: '<%= dirs.build.root %>/tpls',
                products: '<%= dirs.build.root %>/products'
            },
            dest: {
                root: 'dist',
                css: '<%= dirs.dest.root %>/css',
                imgs: '<%= dirs.dest.root %>/images',
                js: '<%= dirs.dest.root %>/js',
                font: '<%= dirs.dest.root %>/fonts',
                tpl: '<%= dirs.dest.root %>/tpls',
                products: '<%= dirs.dest.root %>/products'
            }
        },

        compass: {
            build: {
                options: {
                    sassDir: '<%= dirs.src.sass %>',
                    specify: ['<%= dirs.src.sass %>/**/*.scss'],
                    cssDir: '<%= dirs.build.css %>',
                    imagesDir: "<%= dirs.src.imgs %>",
                    httpPath: "<%= dirs.CDNurl %>",
                    assetCacheBuster: false
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            //合并css
            build: {
                files: {
                    '<%= dirs.build.css %>/app.css': ['<%= dirs.build.css %>/**/*.css']
                }
            },
            //压缩css
            dest: {
                expand: true,
                cwd: '<%= dirs.build.css %>',
                src: ['**/*.css', '!**/*-min.css'],
                dest: '<%= dirs.dest.css %>',
                ext: '.css'
            }
        },
        imagemin: {
            build: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.src.imgs %>',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= dirs.build.imgs %>'
                }]
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.src.root %>',
                    src: ['index.html'],
                    dest: '<%= dirs.build.root %>'
                }, {
                    expand: true,
                    cwd: '<%= dirs.src.font %>',
                    src: ['*.{eot,svg,ttf,woff}'],
                    dest: '<%= dirs.build.font %>'
                }, {
                    expand: true,
                    cwd: '<%= dirs.src.tpl %>',
                    src: ['*.html', '**/*.html'],
                    dest: '<%= dirs.build.tpl %>'
                }, {
                    expand: true,
                    cwd: '<%= dirs.src.products %>',
                    src: ['*.json'],
                    dest: '<%= dirs.build.products %>'
                }]
            },
            dest: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.src.root %>',
                    src: ['index.html'],
                    dest: '<%= dirs.dest.root %>'
                }, {
                    expand: true,
                    cwd: '<%= dirs.build.imgs %>',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= dirs.dest.imgs %>'
                }, {
                    expand: true,
                    cwd: '<%= dirs.src.font %>',
                    src: ['*.{eot,svg,ttf,woff}'],
                    dest: '<%= dirs.dest.font %>'
                }, {
                    expand: true,
                    cwd: '<%= dirs.src.tpl %>',
                    src: ['*.html', '**/*.html'],
                    dest: '<%= dirs.dest.tpl %>'
                }, {
                    expand: true,
                    cwd: '<%= dirs.src.products %>',
                    src: ['*.json'],
                    dest: '<%= dirs.dest.products %>'
                }]
            }
        },
        concat: {
            options: {
                //separator: ';',
                stripBanners: true
            },
            //合并js
            build: {
                files: {
                    '<%= dirs.build.js %>/app.js': [
                        '<%= dirs.src.js %>/module.prefix',
                        '<%= dirs.src.js %>/app.js',
                        '<%= dirs.src.js %>/routers/*.js',
                        '<%= dirs.src.js %>/controllers/**/*.js',
                        '<%= dirs.src.js %>/directives/**/*.js',
                        '<%= dirs.src.js %>/filters/**/*.js',
                        '<%= dirs.src.js %>/services/**/*.js',
                        '<%= dirs.src.js %>/module.suffix'
                    ],
                    '<%= dirs.build.js %>/vendor/lib.js': [
                        '<%= dirs.src.lib %>/angular/angular.js',
                        '<%= dirs.src.lib %>/angular-ui-router/release/angular-ui-router.js',
                        '<%= dirs.src.lib %>/jquery/dist/jquery.js',
                        '<%= dirs.src.lib %>/jquery.cookie/jquery.cookie.js',
                        '<%= dirs.src.lib %>/touchjs/touch.js'
                    ]
                }
            },
            // dest:{
            //     src: ['<%= dirs.build.js %>/app.js', '<%= dirs.src.js %>/*.js'],
            //     dest: '<%= dirs.dest.js %>/app.js',
            // }
        },
        //压缩js
        uglify: {
            // build: {
            //     files: [{
            //         expand: true,
            //         cwd: '<%= dirs.build.js %>',
            //         src: '**/*.js',
            //         dest: '<%= dirs.dest.js %>'
            //     }]
            // },
            dest: {
                files: [{
                    '<%= dirs.dest.js %>/app.js': ['<%= dirs.build.js %>/app.js']
                }, {
                    '<%= dirs.dest.js %>/vendor/lib.js': ['<%= dirs.build.js %>/vendor/lib.js']
                }]
            }
        },
        // replace: {
        //     //给背景图添加版本号
        //     build: {
        //         src: ['<%= dirs.dest.css %>/page/*.css'],
        //         overwrite: true,
        //         replacements: [{
        //             from: /(url\((\'|\"|\s?)[^\'\"\)]+)/ig,
        //             to: '$1?v=' + new Date().getTime()
        //         }]
        //     }
        // },
        watch: {
            options: {
                livereload: true
            },
            compass: {
                files: ['<%= dirs.src.sass %>/**/*.sass', '<%= dirs.src.sass %>/**/*.scss'],
                tasks: ['compass']
            },
            js: {
                files: ['<%= dirs.src.js %>/**/*.js'],
                tasks: ['concat']
            }
        },
        clean: {
            build: ['<%= dirs.build.root %>'],
            dest: ['<%= dirs.dest.root %>']
        }
    });
    /**
     * 载入使用到的通过NPM安装的模块
     */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('dev', ['clean', 'compass', 'imagemin', 'concat:build', 'copy:build']);
    grunt.registerTask('dest', ['dev', 'uglify:dest', 'cssmin:dest', 'copy:dest']);
    grunt.registerTask('default', ['dest']);
}
