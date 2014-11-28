var chai = require('chai');
var assert = chai.assert;
var Collection = require(__dirname + '/../collection');
var c;

describe('Collection class', function () {
    beforeEach(function () {
        c = new Collection(1, 2, 3);
    });

    describe('#length', function () {
        it('should equal zero when the collection is empty', function () {
            c = new Collection;
            assert.equal(0, c.length);
        });

        it('should be greater than zero when the collection is not empty', function () {
            assert.operator(c.length, '>', 0);
        });
    });

    describe('#indexOf()', function () {
        it('should equal -1 when item 4 is not found', function () {
            assert.equal(-1, c.indexOf(4));
        });

        it('should not equal -1 when item 3 is not found', function () {
            assert.equal(c.length - 1, c.indexOf(3));
        });
    });

    describe('#push', function () {
        it('should equal 5 when item 5 is added to the collection', function () {
            assert.equal(5, c.push(5));
        });

        it('equals 6 when item 6 is added to collection', function () {
            assert.equal(6, c.push(6));
        });

        it('equals 6 when items 5 and 6 are added to collection', function () {
            assert.equal(6, c.push(5, 6));
        });

        it('equals 8 when items 7 and 8 are added to collection', function () {
            assert.equal(8, c.push(7, 8));
        });
    });

    describe('#pop', function () {
        it('removes last item and returns 3', function () {
            assert.equal(3, c.pop());
        });

        it('removes last item and returns 5', function () {
            c.push(4, 5);
            assert.equal(5, c.pop());
            assert.equal(4, c.items[c.length - 1]);
        });
    });
});
