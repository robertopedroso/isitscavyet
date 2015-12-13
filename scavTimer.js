// returns the start time (Wednesday @ midnight) for a given year
function getStart(year) {
    var date = getMothersDay(year);
    date.setDate(date.getDate() - 3);
    return getCDTDate(date);
}

// returns the end time (Sunday @ 3pm) for a given year
function getEnd(year) {
    var date = getMothersDay(year);
    date.setHours(15)
    return getCDTDate(date);
}

// returns the date of mothers day for a given year
function getMothersDay(year) {
    var date = new Date(year, 4, 7);
    date.setDate(7 + (7 - date.getDay()));
    return date;
}

// converts UTC time to CDT
function getCDTDate(date) {
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset() - 180);
    return date;
}

// true if during scav, false otherwise
function isScav(date) {
    var start = getStart(date.getFullYear());
    var end = getEnd(date.getFullYear());
    return (date.getTime() > start.getTime())
        && (date.getTime() < end.getTime());
}

// true if day before scav, false otherwise
function isAlmostScav(date) {
    var start = getStart(date.getFullYear());
    var almost = getMothersDay(date.getFullYear());
    almost.setDate(almost.getDate() - 4);
    return (date.getTime() > almost.getTime())
        && (date.getTime() < start.getTime());
}

// nodejs exports for testing with mocha
if(typeof exports !== 'undefined') {
    exports.getStart = getStart;
    exports.getEnd = getEnd;
    exports.isScav = isScav;
    exports.isAlmostScav = isAlmostScav;
}
