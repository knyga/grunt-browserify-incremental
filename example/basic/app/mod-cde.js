module.exports = function() {
    var c = require('./mod-c');
    var d = require('./mod-d');
    var e = require('./mod-e');
    return c + "_" + d + "_" + e;
};