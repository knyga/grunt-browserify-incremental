module.exports = function() {
    var a = require('./mod-a');
    var b = require('./mod-b');
    return a + "_" + b;
};