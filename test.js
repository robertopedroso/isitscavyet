var assert = require('chai').assert;
var scavTimer = require('./scavTimer');

describe('getStart', function() {
    it('should return the correct start date', function() {
        var actual = scavTimer.getStart('2015');
        var expected = new Date(Date.parse("May 7, 2015 00:00:00 CDT"));
        assert.equal(actual.getTime(), expected.getTime());
    });
});

describe('getEnd', function() {
    it('should return the correct end date', function() {
        var actual = scavTimer.getEnd('2015');
        var expected = new Date(Date.parse("May 10, 2015 15:00:00 CDT"));
        assert.equal(actual.getTime(), expected.getTime());
    });
});

describe('isScav', function() {
    it('should return true during scav', function() {
        var date = new Date(Date.parse("May 8, 2015 00:00:00 CDT"));
        assert.isTrue(scavTimer.isScav(date));
    });

    it('should return false before scav', function() {
        var date = new Date(Date.parse("May 6, 2015 12:00:00 CDT"));
        assert.isFalse(scavTimer.isScav(date));
    });

    it('should return false after scav', function() {
        var date = new Date(Date.parse("May 10, 2015 16:00:00 CDT"));
        assert.isFalse(scavTimer.isScav(date));
    });
});

describe('isAlmostScav', function() {
    it('should return true when almost scav', function() {
        var date = new Date(Date.parse("May 6, 2015 11:30:00 CDT"));
        assert.isTrue(scavTimer.isAlmostScav(date));
    });

    it('should return false more than 1 day before scav', function() {
        var date = new Date(Date.parse("May 5, 2015 22:00:00 CDT"));
        assert.isFalse(scavTimer.isAlmostScav(date));
    });

    it('should return false after scav', function() {
        var date = new Date(Date.parse("May 11, 2015 00:00:00 CDT"));
        assert.isFalse(scavTimer.isAlmostScav(date));
    });

    it('should return false during scav', function() {
        var date = new Date(Date.parse("May 8, 2015 00:00:00 CDT"));
        assert.isFalse(scavTimer.isAlmostScav(date));
    });
});
