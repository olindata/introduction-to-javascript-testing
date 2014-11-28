var fs = require('fs');

describe('fs module', function () {
    it('should return file contents when reading a file', function (done) {
        fs.readFile('./callback.js', 'utf8', function (err, content) {
            if (err) {
                done(err);
                return;
            }

            console.log(content);
            // assertions go here
            done();
        });
    });
});
