module.exports = function(grunt) {
    var fs = require('fs');
    var path = require('path');

    /**
     * Register the 'resole angular-ui-router replace templateUrl with $templateCache' task
     **/

    grunt.registerMultiTask('concattpls', 'Replaces templateUrl content with $templateCache', function() {
        var self = this;
        var options = this.options({

        });
        var resolveTpl = [
            'template: function($templateCache) {',
            'return $templateCache.get($1);',
            '},'
        ].join('');

        var handle = {
            develop: function(content) {
                return content.replace(/templateUrl:\s+("[^']+")/gi, resolveTpl);
            },
            latest: function(content) {
                return content.replace(/CONFIG.EVIDEBUG/gi, "false");
            },
            release: function(content) {
                //console.log(content);
                return content.replace(/templateUrl:\s?("[^"]+")/gi,
                    'template: function($templateCache) {return $templateCache.get($1);},'
                );
            }
        };

        this.files.forEach(function(file) {
            var content = file.src.map(function(filepath) {
                return grunt.file.read(filepath);
            }).join('\n');

            // Write joined contents to destination filepath.
            grunt.log.writeln(self.target);
            content = handle[self.target](content);
            grunt.file.write(file.dest, content);
            // Print a success message.
            grunt.log.writeln('File "' + file.dest + '" created.');
        });

    });

};
