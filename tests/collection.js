var chai = require('chai');
var assert = chai.assert;
var Collection = require(__dirname + '/../collection');
var c;

suite('Collection class', function () {
    setup(function () {
        c = new Collection(1, 2, 3);
    });

    suite('#length', function () {
        test('equals zero when collection empty', function () {
            c = new Collection;
            assert.equal(0, c.length);
        });

        test('greater than zero when collection not empty', function () {
            assert.operator(c.length, '>', 0);
        });
    });

    suite('#indexOf()', function () {
        test('equals -1 when item 4 not found', function () {
            assert.equal(-1, c.indexOf(4));
        });

        test('does not equal -1 when item 3 is found', function () {
            assert.equal(c.length - 1, c.indexOf(3));
        });
    });

    suite('#push', function () {
        test('equals 5 when item 5 is added to collection', function () {
            assert.equal(5, c.push(5));
        });

        test('equals 6 when item 6 is added to collection', function () {
            assert.equal(6, c.push(6));
        });

        test('equals 6 when items 5 and 6 are added to collection', function () {
            assert.equal(6, c.push(5, 6));
        });

        test('equals 8 when items 7 and 8 are added to collection', function () {
            assert.equal(8, c.push(7, 8));
        });
    });

    suite('#pop', function () {
        test('removes last item and returns 3', function () {
            assert.equal(3, c.pop());
        });

        test('removes last item and returns 5', function () {
            c.push(4, 5);
            assert.equal(5, c.pop());
            assert.equal(4, c.items[c.length - 1]);
        });
    });
});
