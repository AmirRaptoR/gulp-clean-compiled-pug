var through = require('through2');
var del = require('del');

function gulpCleanCompiledPug() {
    return through.obj(function(file, encoding, callback) {
        var regex = /.(pug|jade)$/;

        if (regex.test(file.path)) {
            var compiledFile = file.path.replace(regex, '.html');

            del.sync([compiledFile]);
        }

        callback();
    });
}

module.exports = gulpCleanCompiledPug;
