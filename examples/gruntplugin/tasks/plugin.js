/*
 * grunt-plugin
 * https://github.com/phated/dcc_grunt
 *
 * Copyright (c) 2012 Blaine Bublitz
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('plugin', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('plugin'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('plugin', function() {
    return 'plugin!!!';
  });

};
