/**
 * @license MIT http://troopjs.mit-license.org/
 */
/*globals module:false*/
/*eslint no-multi-str:0*/
module.exports = function (grunt) {
  "use strict";

  // Configure grunt
  grunt.initConfig({
    "pkg": grunt.file.readJSON("bower.json"),

    "build": {
      "src": ".",
      "dist": "dist",
      "footer": "\
define(['troopjs-hub-proxy/version'], function (version) {\n\
  return version;\n\
});"
    },

    "requirejs": {
      "options": {
        "mainConfigFile": "require.js",
        "appDir": "<%= build.src %>",
        "dir": "<%= build.dist %>",
        "optimize": "none",
        "optimizeCss": "none",
        "skipDirOptimize": true,
        "keepBuildDir": true,
        "fileExclusionRegExp": /^(?:\.(?!travis|gitignore)|node_modules|test|guides|(?:version|require|Gruntfile)\.js|package\.json)/,
        "rawText": {
          "troopjs-hub-proxy/version": "define([], { 'toString': function () { return <%= JSON.stringify(pkg.version) %>; } });\n"
        },
        "wrap": {
          "end": "<%= build.footer %>"
        }
      },

      "bundles": {
        "options": {
          "modules": [ {
            "name": "troopjs-hub-proxy/main",
            "exclude": [
              "when/when",
              "mu-merge/main",
              "troopjs-core/component/emitter",
              "troopjs-hub/emitter"
            ],
            "excludeShallow": [
              "troopjs-hub-proxy/main"
            ]
          } ]
        }
      }
    },

    "clean": {
      "dist": [ "<%= build.dist %>" ]
    },

    "uglify": {
      "options": {
        "report": "min",
        "preserveComments": false
      },
      "bundles": {
        "files": [ {
          "expand": true,
          "dest": "<%= build.dist %>",
          "cwd": "<%= build.dist %>",
          "src": [ "main.js" ],
          "ext": ".min.js"
        } ]
      }
    }
  });

  // Load all grunt tasks from package.json
  require("load-grunt-tasks")(grunt);

  grunt.registerTask("compile", [ "requirejs" ]);
  grunt.registerTask("compress", [ "uglify" ]);
  grunt.registerTask("default", [ "compile", "compress" ]);
};
