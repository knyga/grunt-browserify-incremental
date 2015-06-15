module.exports = function (grunt) {
    grunt.initConfig({
        browserifyinc: {
            basic: {
                src: ['app/**/*.js'],
                dest: 'dist/app.js'
            }
        }
    });

    grunt.loadTasks('../../tasks');
    grunt.registerTask('default', ['browserifyinc:basic']);

};