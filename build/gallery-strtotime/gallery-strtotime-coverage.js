if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-strtotime/gallery-strtotime.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-strtotime/gallery-strtotime.js",
    code: []
};
_yuitest_coverage["build/gallery-strtotime/gallery-strtotime.js"].code=["YUI.add('gallery-strtotime', function (Y, NAME) {","","","\"use strict\";","/**"," * Adds a strtotime method to Y.Date to provide powerful parsing of date/time"," * strings and calculation of relative dates.  Includes Internationalisation"," * support."," *"," * php documentation is at http://php.net/manual/en/function.strtotime.php"," * and the C source that was used is at"," * http://svn.php.net/viewvc/php/php-src/trunk/ext/date/lib/parse_date.re?revision=320481&view=markup"," *"," * @author Matt Parker, Lamplight Database Systems Limited 2013"," * @licence BSD"," *"," *"," * @class Date"," * @static"," *"," */","","","","//////////////////////////////////////////","//////////////////////////////////////////","// Private helper methods and minification","// constants","//","","","","","","var INTL = Y.Intl ? Y.Intl.get(\"datatype-date-format\") : {}, // Use Internationalised stuff if we can","    REGEXP = {}, // Holds component regex strings","    TESTS = [], // Holds regex tests and functions","","","","    // For minification purposes:","    EUROPE = \"Europe/\",","    AMERICA = \"America/\",","    AFRICA = \"Africa/\",","    ANTARCTICA = \"Antarctica/\",","    ASIA = \"Asia/\",","    ATLANTIC = \"Atlantic/\",","    AUSTRALIA = \"Australia\",","    BRAZIL = \"Brazil/\",","    CANADA = \"Canada/\",","    ETC = \"Etc./\",","    INDIAN = \"Indian/\",","    MEXICO = \"Mexico/\",","    PACIFIC = \"Pacific/\",","    US = \"US/\",","    GMT = \"GMT\",","    T0 = \"+00:00\",","    T1 = \"+01:00\",","    T2 = \"+02:00\",","    T3 = \"+03:00\",","    T4 = \"+04:00\",","    T5 = \"+05:00\",","    T6 = \"+06:00\",","    T7 = \"+07:00\",","    T8 = \"+08:00\",","    T9 = \"+09:00\",","    T10 = \"+10:00\",","    T11 = \"+11:00\",","    T12 = \"+12:00\",","    T13 = \"+13:00\",","    T1m = \"-01:00\",","    T2m = \"-02:00\",","    T3m = \"-03:00\",","    T4m = \"-04:00\",","    T5m = \"-05:00\",","    T6m = \"-06:00\",","    T7m = \"-07:00\",","    T8m = \"-08:00\",","    T9m = \"-09:00\",","    T10m = \"-10:00\",","    T11m = \"-11:00\",","    Z,","","","","","    MSECS_IN_FORTNIGHT = 1209600000,","    MSECS_IN_WEEK = 604800000,","    MSECS_IN_DAY = 86400000,","    MSECS_IN_HOUR = 3600000,","    MSECS_IN_MINUTE = 60000,","","","","","    ///////////////////////////////////////////////////////////////////////","    // Utility methods:","","    /**","     * @method _change","	 *","	 * Changes a timestamp by an amount","	 *","	 * @private","     * @param {Int} ts Timestamp","     * @param {Int} d Delta - how much to change","     * @param {String} method Method on Date to use","     * @return {Int} Timestamp","     */","    _change = function (ts, d, method) {","        var tmp = new Date(ts);","        if (tmp[\"set\" + method] === undefined) {","            return ts;","        }","        tmp[\"set\" + method](tmp[\"get\" + method]() + d);","        return tmp.getTime();","    },","","    /**","     * @method _set","	 *","     * Sets a timstamp","	 *","	 * @private","     * @param {Int} ts Timestamp","     * @param {Int} val Value to set to","     * @param {String} methodMethod on Date to use","     * @return {Int} Timestamp","     */","    _set = function (ts, val, method) {","        var tmp = new Date(ts);","        if (tmp[\"set\" + method] === undefined) {","            return ts;","        }","        tmp[\"set\" + method](val);","        return tmp.getTime();","    },","","","    /**","     * @method _findLastDayOf","	 *","     * Finds the last day of (e.g. 30) of a month","	 *","	 * @private","     * @param {Int} ts Timestamp","     * @return {Int} Days in the month","     */","    _findLastDayOf = function (ts) {","        var tmp = new Date(ts),","            mon = tmp.getUTCMonth();","","        // go to the first of the next month and subtract a day","        tmp.setUTCDate(1);","        tmp.setUTCMonth((mon + 1) % 12);","        ts = tmp.getTime() - MSECS_IN_DAY;","        tmp = new Date(ts);","        return tmp.getUTCDate();","    },","","    /**","     * @method _handleMeridian","	 *","     * Deals with am/pm, adding 12 hours if need be.","	 *","     * @private","     * @param {Int|String} hour Hours parsed from a date","     * @param {String} ampm The \"am\" or \"pm\" (or variations) parsed from the string","     * @return {Int} Corrected hours in 24-hour clock","     */","    _handleMeridian = function (hour, ampm) {","","        var c1;","        hour = parseInt(hour, 10);","","        if (ampm === undefined) {","            return hour;","        }","        ampm = ampm.replace(\".\", \"\");","","        c1 = ampm.substring(0, 1).toLowerCase();","","        if (hour < 12 && c1 === \"p\") {","            return hour + 12;","        }","        return hour;","","    },","","","    /**","     * Translates user-defined versions of 'next' to","     * default English so we know what they mean","     *","     * @method _lookupRelTextText","     * @private","     * @param {String} text Translated version of the string","     * @return {String} English version: next|first|previous|last","     *      If not found it will pass text straight back","     */","    _lookupRelTextText = function (text) {","        var i,","            rtt = strtotime.RELTEXTTEXT;","        for (i in rtt) {","            if (rtt.hasOwnProperty(i)) {","                if (rtt[i] === text) {","                    return i;","                }","            }","        }","        return text;","    },","","","    /**","     * Gets a numeric value from a string that's either in","     * RELTEXTEXT or RELTEXTNUMBER to add (or subtract).","     *","     * Note that 'first' always returns +1 - so can't be used","     * in matches like 'first day of March', as first there","     * does not mean +1 day.","     *","     *","     * @method _calculateRelTextValue","     * @param {String} text","     * @return {Int} As a number","     * @private","     */","    _calculateRelTextValue = function (text) {","","        var index;","","        switch (text) {","        case 'this':","            return 0;","","        case 'next':","            return 1;","","        case 'last':","        case 'previous':","            return -1;","","        default:","            index = strtotime.RELTEXTNUMBER.indexOf(text);","            if (index !== -1) {","                return index + 1;","            }","            return text;","","        }","    },","","","    /**","     * Translates user-defined versions of time","     * units (hour, second, minute, year etc)","     * and returns an Enhlish version that","     * we know what it means","     *","     * @method _lookupRelTextUnit","     * @private","     * @param {String} text Parsed unit string","     * @return {String} English version","     */","    _lookupRelTextUnit = function (text) {","        var i,","            rtt = strtotime.RELTEXTUNIT;","        for (i in rtt) {","            if (rtt.hasOwnProperty(i)) {","                if (rtt[i].indexOf(text) !== -1) {","                    return i;","                }","            }","        }","        return text;","    },","","","","    /**","     * Gets a timestamp for the nearest day of the week","     * from that passed, either forward or back","     *","     * @method _setToDay","     * @private","     * @param {Int} ts Timestamp","     * @param {Int} dayIndex Day of the week: Sunday = 0, Monday = 1","     * @param {Int} direction +1 = forward, -1 = last","     * @return {Int} Timestamp","     */","    _setToDay = function (ts, dayIndex, direction) {","        var tmp = new Date(ts);","        while (tmp.getUTCDay() !== dayIndex) {","            tmp = new Date(tmp.getTime() + (direction * MSECS_IN_DAY));","        }","        return tmp.getTime();","    },","","","","    /**","     * Finds the 'third Wednesday' relative to timestamp","     *","     * @method _findWeekdayOf","     * @private","     * @param Int       Timestamp","     * @param {Object}  What to find","     *    @param {Int} dayIndex   Day of week (Sunday = 0) to find","     *    @param {Int} weekIndex  Which week to find (first = 1)","     */","    _findWeekdayOf = function (ts, tofind) {","        var tmp = new Date(ts),","            tmt,","            addWeeks;","","","        if (tofind.weekIndex === undefined) {","            tofind.weekIndex = \"next\";","        } else {","            tofind.weekIndex = _lookupRelTextText(tofind.weekIndex);","        }","","        // 'last' needs handling differently:","        if (tofind.weekIndex === 'last') {","            // this is the hard one:","            // find the last day of the month and do it again","            // backwarods","            /*tmp.setUTCDate(_findLastDayOf(ts));","            while (tmp.getUTCDay() !== tofind.dayIndex) {","                tmp = new Date(tmp.getTime() - 86400000);","            }","            return tmp.getTime();","            */","            tmt = tmp.setUTCDate(_findLastDayOf(ts));","            return _setToDay(tmt, tofind.dayIndex, -1);","        }","","        //thisWeek = Math.floor(new Date(ts).getUTCDate() / 7);","","","","        // now add on the right number of weeks","        switch (tofind.weekIndex) {","        case 'next':","            addWeeks = 0;//thisWeek;","            break;","        case 'previous':","            addWeeks = -1;//thisWeek - 1;","            break;","        case 'first':","            tmp.setUTCDate(1);","            addWeeks = 0;","            break;","        default:","            tmp.setUTCDate(1);","            addWeeks = parseInt(tofind.weekIndex, 10);","            break;","        }","","        // iterate through until we're on the correct day","        /*while (tmp.getUTCDay() !== tofind.dayIndex) {","            tmp = new Date(tmp.getTime() + 86400000);","        }*/","","        tmt = _setToDay(ts, tofind.dayIndex, 1);// tmp.getTime();","        tmt = tmt + (MSECS_IN_WEEK * addWeeks);","        return tmt;","    },","","","","    /**","     * Moves the date first|last|next|previous week","     *","     * @method _findWeekOf","     * @private","     * @param {Int} ts Timestamp","     * @param {String} Change","     * @return {Int} Timestamp","     */","    _findWeekOf = function (ts, change, changeToMonday) {","","        // need to set the day of week to a Monday","        var isMonday = (new Date(ts).getUTCDay() === 1),","            inc = (isMonday && changeToMonday ? MSECS_IN_DAY : 0);","","        change = _lookupRelTextText(change);","","        switch (change) {","        case 'next':","            return _setToDay(ts + inc, 1, 1);","","        case 'last':","        case 'previous':","            ts = ts - MSECS_IN_WEEK; // go back a week","            return _setToDay(ts - inc, 1, -1);","","        case 'this':","            return _setToDay(ts, 1, -1);","","        default:","            // change may be a number","            if (Y.Lang.isNumber(change)) {","                return ts + (change * MSECS_IN_WEEK);","            }","            return false;","","        }","","    },","","    /**","     * Handles two-digit years, turning them into 4 digits","     * If yr < 70 it'll add on 2000","     * Otherwise it'll add on 1900","     *","     * @method _handleShortYear","     * @private","     * @param {Int} yr Year to process","     * @return {int} Four-digit year","     */","    _handleShortYear = function (yr) {","","        var strYr,","            ret;","","        yr = parseInt(yr, 10);","        strYr = String(yr);","","        if (strYr.length >= 4) {","            return yr;","        }","        ret = yr;","        if (yr < 100) {","            if (yr < 70) {","                ret = yr + 2000;","            } else {","                ret = yr + 1900;","            }","        }","        return ret;","    },","","","    /**","     * Handles text month, looking it up in the original arrays","     * to get the (human - 1-based) month number","     *","     * @method _handleMonthText","     * @private","     * @param {String} res Match from regexp","     * @return {int} Month number (in human terms - Jan = 1)","     */","    _handleMonthText = function (res) {","","        var m,","            search = ['MONTHFULL', 'MONTHABBR', 'MONTHROMAN'],","            i = 0;","","        for (i = 0; i < 3; i = i + 1) {","            m = strtotime[search[i]].indexOf(res);","            if (m !== -1) {","                return m;","            }","        }","        return false;","","    },","","","    /**","     * Calculates the day number in the year from the weeknumber","     *","     * http://fossies.org/dox/php-5.3.20-src/date_2lib_2dow_8c_source.html#l00130","     *","     * @method _findDayNrFromWeekNr","     * @private","     * @param {Int} year","     * @param {Int} weekNumber","     * @param {Int} dayNumber","     * @return {Int} Day of the year","     */","    _findDayNrFromWeekNr = function (year, weekNumber, dayNumber) {","        /* Figure out the dayofweek for y-1-1 */","        var date1 = new Date(year, 0, 1),","            dow = date1.getUTCDay(),","            day;","","        if (dow === 0) {","            dow = 7;","        }","        /* then use that to figure out the offset for day 1 of week 1 */","        day = -(dow > 4 ? dow - 7 : dow);","","        /* Add weeks and days */","        return day + ((weekNumber - 1) * 7) + dayNumber + 1;","    },","","","","    /**","     * Hash of periods and the number of milli-seconds in each","     * @private","     * @property _timeList","     * @type {Object}","     * @private","     */","    _timeList = {","        'fortnight': MSECS_IN_FORTNIGHT,","        'week': MSECS_IN_WEEK,","        'day': MSECS_IN_DAY,","        'hour': MSECS_IN_HOUR,","        'minute': MSECS_IN_MINUTE,","        'second': 1000","    },","","","","    /**","     * Makes relative changes to different components of the date","     *","     * @private","     * @property relChange","     * @property relChange.y {Function}","     * @property relChange.m {Function}","     * @property relChange.d {Function}","     * @property relChange.h {Function}","     * @property relChange.i {Function}","     * @property relChange.s {Function}","     *      @param {Int} ts Timestamp to start with","     *      @param {Int} d Amount to change","     *      @return {Int} New timestamp","     */","    relChange = {","        y: function (ts, d) {","            return _change(ts, d, 'UTCFullYear');","        },","        m: function (ts, d) {","            // change the years:","            /*var years = (d === 0 ? 0 : (Math.abs(d)/d) * Math.floor(Math.abs(d) / 12));","            if (years !== 0) {","                ts = _change(ts, years, 'UTCFullYear');","            }*/","            return _change(ts, d, 'UTCMonth');","        },","        d: function (ts, d) {","            return ts + (d * MSECS_IN_DAY); // milliseconds in a day","        },","        h: function (ts, d) {","            return ts + (d * MSECS_IN_HOUR); // milliseconds in an hour","        },","        i: function (ts, d) {","            return ts + (d * MSECS_IN_MINUTE); // milliseconds in a minute","        },","        s: function (ts, d) {","            return ts + (d * 1000);","        }","    },","","","","","    /**","     * Processes any relative changes held in mods.relativeFixedHash","     *","     * @method _processRelativeFixedHash","     * @param {Int} ts Timestampe","     * @param {Object} oChange   Change(s) to make","     * @return {Int} Timestamp","     * @private","     */","    _processRelativeFixedHash = function (ts, oChange, dir) {","","        var num,","            i;","","","        // Work out the 'first Wednesday' type modifiers","        if (oChange.weekdayOf !== undefined) {","            ts = _findWeekdayOf(ts, oChange.weekdayOf);","            return ts;","        }","        // Work out 'last week' type modifier","        if (oChange.week !== undefined) {","            ts = _findWeekOf(ts, oChange.week, true);","            return ts;","        }","","        // tricky ones","        if (oChange.year !== undefined) {","            num = dir * _calculateRelTextValue(oChange.year);","            ts = relChange.y(ts, num);","        }","        if (oChange.month !== undefined) {","            num = dir * _calculateRelTextValue(oChange.month);","            ts = relChange.m(ts, num);","        }","","        if (oChange.weekKeepDay !== undefined) {","            ts = _findWeekOf(ts, dir * oChange.weekKeepDay, false);","        }","","        // days, weeks, hours etc","        for (i in _timeList) {","            if (_timeList.hasOwnProperty(i) && oChange[i] !== undefined) {","                num = dir * _calculateRelTextValue(oChange[i]);","                ts = ts + (num * _timeList[i]);","            }","        }","","        return ts;","    },","","","","    /**","     * Sets different components of the date","     *","     * @private","     * @property absChange","     * @property absChange.y {Function}","     * @property absChange.m {Function}","     * @property absChange.d {Function}","     * @property absChange.h {Function}","     * @property absChange.i {Function}","     * @property absChange.s {Function}","     *      @private","     *      @param {Int} ts Timestamp to start with","     *      @param {Int} val New value","     *      @return {Int} New timestamp","     */","    absChange = {","        y: function (ts, val) {","            return _set(ts, val, 'UTCFullYear');","        },","        m: function (ts, val) {","            return _set(ts, val, 'UTCMonth');","        },","        d: function (ts, val) {","            return _set(ts, val, 'UTCDate');","        },","        h: function (ts, val) {/*","            if (fixTime === true) {","                return false;","            }*/","            return _set(ts, val, 'UTCHours');","        },","        i: function (ts, val) {","            return _set(ts, val, 'UTCMinutes');","        },","        s: function (ts, val) {","            return _set(ts, val, 'UTCSeconds');","        }","    },","","","    /**","     * Alters the timestamp depending on the timezone parsed","     * from the string","     *","     * @method timezoneChange","     * @private","     * @param {Int} ts Timestamp","     * @param {String} tz Timezone string","     * @return {Int} Timestamp","     */","    timezoneChange = function (ts, tz) {","","        // val should be +02:30 format","        var sign = tz.substring(0, 1),","            parts = tz.substring(1).split(\":\"),","            h = parseInt(parts[0], 10),","            i = parseInt(parts[1], 10),","            mult = (sign === \"+\" ? -1 : 1);","        ts = relChange.h(ts, (mult * h));","        return relChange.i(ts, (mult * i));","    },","","","","","    /**","     * Used internally by the function to store changes as they are parsed","     * from the text.  This cannot be instantiated directly: it's created","     * by the strtotime function and passed to the test functions.","     *","     * As the string is parsed by srttotime, any relative (e.g. \"-1 day\")","     * or absolute changes (\"noon\") are held in the Modificator instance.","     * Once parsing is complete, the stored changes are processed","     * in the correct order to calculate the return timestamp.","	 *","	 *","     * @private","     *","     */","    Modificator = function () {","","        /**","         * Whether times are fixed (ie may not be changed by subsequent terms)","         * by a particular statement","         *","         * @property fixTime","         * @type {Boolean}","         * @default False","         * @private","         *","         */","        this.fixTime = false;","        /**","         * Whether dates are fixed (ie may not be changed by subsequent terms)","         * by a particular statement","         *","         * @property fixDate","         * @type {Object}","         * @default {","                    y: false,","                    m: false,","                    d: false","                }","         * @private","         */","        this.fixDate = {","            y: false,","            m: false,","            d: false","        };","","        /**","         * Count of number of times time has been set.","         *","         * @property hasTime","         * @type {Int}","         * @default 0","         * @private","         *","         */","        this.hasTime = 0;","","        /**","         * Increments this.hasTime by 1","         *","         * @method incTime","         * @return {Int} New value of this.hasTime","         * @private","         *","         */","        this.incTime = function () {","            this.hasTime = this.hasTime + 1;","            return this.hasTime;","        };","","        /**","         * Count of number of times date has been set.","         * @property hasDate","         * @type {Int}","         * @default 0","         * @private","         *","         */","        this.hasDate = 0;","","","        /**","         * A list of relative (e.g. \"-1 day\") changes to make,","         * in the order that they are found in the statement.","         * Indexes in the array are the position that the test string","         * was found in the original string passed to strtotime()","         *","         * @property orderedRelChanges","         * @type {Array}","         * @default []","         * @private","         *","         */","        this.orderedRelChanges = [];","        /**","         * A list of absolute (e.g. \"noon\") changes to make,","         * in the order that they are found in the statement.","         * Indexes in the array are the position that the test string","         * was found in the original string passed to strtotime()","         *","         * @property orderedAbsChanges","         * @type {Array}","         * @default []","         * @private","         *","         */","        this.orderedAbsChanges = [];","","","        /**","         * 'Model' storage for relative changes to dates/times","         *","         * @property relativeHash","         * @type {Object}","         * @private","         * @default  {","            y: 0,","            m: 0,","            d: 0,","            h: 0,","            i: 0,","            s: 0","           };","         *","         */","        this.relativeHash = {","            y: 0,","            m: 0,","            d: 0,","            h: 0,","            i: 0,","            s: 0","        };","","        /**","         * Storage for 'weekday of' type statements, that will","         * later on need other changes to be resolved before this","         * can be.","         *","         * @property relativeFixedHash","         * @type {Object}","         * @private","         * @default {weekdayOf: undefined}","         *","         */","        this.relativeFixedHash = {","            weekdayOf: undefined,","            week: undefined","        };","","        /**","         * Processes and stores relative changes to dates or times.","         * This (along with updateAbs()) are the main methods to use","         * in test -passing functions","         *","         * @method updateRel","         * @private","         * @param {Object}   Properties to change","         * @param {Boolean}  Whether to add to existing (true) or set (default).","         *                      In some cases we want to make culmulative changes","         * @param {Int}      Index that the test string was found in the","         *                      original string","         * @return {Object}  Object literal that we've stored","         */","        this.updateRel = function (oChange, addOrSet, index) {","            var i,","                c,","                rH = Y.clone(this.relativeHash);","","            for (i in oChange) {","","                if (oChange.hasOwnProperty(i)) {","","                    if (i === \"weekdayOf\") {","","                        this.relativeFixedHash.weekdayOf = oChange[i];","","                    } else if (i === \"week\") {","","                        this.relativeFixedHash.week = oChange[i];","","                    } else if (i === \"relative\") {","","                        this.relativeFixedHash = Y.merge(this.relativeFixedHash, oChange[i]);","","                    } else {","                        c = parseInt(oChange[i], 10);","                        if (addOrSet === true) {","                            rH[i] += c;","                        } else {","                            rH[i] = c;","                        }","                    }","                }","            }","            this.orderedRelChanges[index] = rH;","            return rH;","        };","","","        /**","         * The direction (in time) relative changes should be made:","         * +1 => into the future, -1 into the past","         *","         * @property relativeDirection","         * @type {Int}","         * @private","         * @default 1","         */","        this.relativeDirection = 1;","","","        /**","         * 'Model' storage for absolute changes to dates/times","         *","         * @property absoluteHash","         * @type {Object}","         * @private","         * @default  {","            y: undefined,","            m: undefined,","            d: undefined,","            h: undefined,","            i: undefined,","            s: undefined,","            z: undefined,","            fixTime: false,","            fixDate: false,","            specialFn: undefined","           };","         *","         */","        this.absoluteHash = {","            y: undefined,","            m: undefined,","            d: undefined,","            h: undefined,","            i: undefined,","            s: undefined,","            z: undefined,","            fixTime: false,","            fixDate: false,","            specialFn: undefined","        };","","        /**","         * Storage for 'last day' type statements, that will","         * later on need other changes to be resolved before this","         * can be.","         *","         * @property absoluteFixedHash","         * @type {Object}","         * @private","         * @default {","            lastDay: undefined,","            firstDay: undefined","           }","         *","         */","        this.absoluteFixedHash = {","            lastDay: undefined,","            firstDay: undefined","        };","","        /**","         * Processes and stores absolute changes to dates or times.","         * This (along with updateRel()) are the main methods to use","         * in test -passing functions","         *","         * @method updateAbs","         * @private","         * @param {Object}   Properties to change","         * @param {Boolean}  Whether to add to existing (true) or set (default).","         *                      In some cases we want to make culmulative changes","         * @param {Int}      Index that the test string was found in the","         *                      original string","         * @return {Object}  Object literal that we've stored","         */","        this.updateAbs = function (oChange, addOrSet, index) {","            var i,","                c,","                aH = Y.clone(this.absoluteHash);","","            for (i in oChange) {","                if (oChange.hasOwnProperty(i)) {","","                    if (i === \"fixTime\" || i === \"fixDate\" || i === \"specialFn\" || i === \"z\") {","                        aH[i] = oChange[i];","                    } else {","","                        c = parseFloat(oChange[i]);","","","                        if (addOrSet === true && aH[i] !== undefined) {","                            aH[i] += c;","                            // need to remember this for next time.","                            this.absoluteHash[i] = true;","                        } else {","                            aH[i] = c;","                        }","                    }","                }","            }","            this.orderedAbsChanges[index] = aH;","            return aH;","        };","","","        /**","         * A list of keys that have matched OK","         *","         * @property matchedKeys","         * @type Array","         * @private","         */","        this.matchedKeys = [];","","","        /**","         * The timezone string parsed from the input string","         *","         * @property timezoneString","         * @private","         * @type {String}","         * @default \"\"","         */","        this.timezoneString = \"\";","","","    },","","","","","","    /**","     *","     * Parses English (or other languages) date-related sentences into","     * a timestamp.  A wide range of formats are supported, as is","     * relative formats.","     *","     * Note that to preserve compatability with php (from which this is ported)","     * timestamps are in seconds, not milliseconds.","     *","     * See http://php.net/manual/en/function.strtotime.php for the php write-up","     *","     * @example","     *  <code>Y.Date.strtotime(\"2012-05-02\"); </code><br/>","     *  <code>Y.Date.strtotime(\"2/5/2012 5.15pm\") </code><br/>","     *  <code>Y.Date.strtotime(\"next Thursday\", 1360022400);</code><br/>","     *  <code>Y.Date.strtotime(\"+3 months and 2 days\", 1360022400);</code><br/>","     *","     * @method strtotime","     * @for Date","     * @static","     * @public","     *","     * @param {String} time Date and/or modifier(s)","     * @param {Int} [baseTimestamp] Timestamp (in seconds)","     * @return {Int}    Parsed timestamp (in seconds) or false if there was an error","     *","     */","    strtotime = function (time, baseTimestamp) {","","","        //// Define variables","        var ms = baseTimestamp * 1000 || new Date().getTime(),","            copyTime,","","            // This stores the changes we want to make","            mods = new Modificator(),","","            // used in the loop","            i = 0,","            j = 0,","            thisChange,","            test,","            ignoreInAbs,","            index,","            reResult;","","","        // Build the regexp and tests if needed","        if (TESTS.length === 0) {","            REGEXP = strtotime.finishRegExp(strtotime.constructRegExp());","            TESTS = strtotime.finishTests(REGEXP, strtotime.constructTests(REGEXP));","        }","","","        time = Y.Lang.trim(time);","","        copyTime = time;","","","        // Go through, looking for the relevant regexps","        // and acting accordingly","        for (i = 0; i < TESTS.length; i = i + 1) {","","            test = TESTS[i];","","            // spaces are added because we put them on the regexs","            // and this is easier than detecting start/end of strings","","            // The same rule may match more than once so we keep going until it's done.","            while ((reResult = test.re.exec(\" \" + copyTime + \" \")) !== null) {","","                index = test.re.exec(\" \" + time + \" \").index;","                test.fn.call(undefined, reResult, index, mods);","","                mods.matchedKeys.push(test.key);","","                // remove the matched string from our copy.","                copyTime = copyTime.replace(Y.Lang.trim(reResult[0]), \"\");","","            }","","            // Are we there yet?","            if (Y.Lang.trim(copyTime) === \"\") {","                break;","            }","","        }","","","        // Error conditions","","        // Unexpected characters left after all our matching?","        // That's an error.","        if (Y.Lang.trim(copyTime) !== '') {","            return false;","        }","","","","        // We'll handle these things separately","        ignoreInAbs = ['specialFn', 'lastDay', 'firstDay', 'fixTime', 'fixDate'];","        // Now apply absolute changes","        for (j = 0; j < mods.orderedAbsChanges.length; j = j + 1) {","","            thisChange = mods.orderedAbsChanges[j];","            if (thisChange !== undefined) {","","                for (i in thisChange) {","","                    if (thisChange.hasOwnProperty(i) && ignoreInAbs.indexOf(i) === -1 && thisChange[i] !== undefined) {","","                        // can't change fixed times","                        if (i === 'h' && mods.fixTime === true) {","                            return false;","                        }","","                        // not an error but we skip over days if they've been fixed","                        if (!(i === 'd' && mods.fixDate.d === true)) {","","                            // Make the actual change","                            ms = absChange[i](ms, thisChange[i]);","","                            // OK, that change did fix the day, so we remember that","                            if (thisChange.fixDate.d === true) {","                                mods.fixDate.d = true;","                            }","","                            // An error occurred","                            if (ms === false) {","                                return false;","                            }","","                        }","","                    }","                }","","","                // If this change has the effect of fixing time (ie it shouldn't be changed again)","                // we need to remember this:","                if (thisChange.fixTime === true) {","                    mods.fixTime = true;","                }","                // specialFn is called after everything else","                if (thisChange.specialFn !== undefined) {","                    ms = thisChange.specialFn(ms, thisChange);","                }","                // an error was detected by specialFn","                if (ms === false) {","                    return false;","                }","            }","        }","","","","        // Now apply relativeHash changes","        for (j = 0; j < mods.orderedRelChanges.length; j = j + 1) {","","            thisChange = mods.orderedRelChanges[j];","","            if (thisChange !== undefined) {","                for (i in thisChange) {","","                    if (thisChange.hasOwnProperty(i) && ['weekdayOf', 'week', 'relative'].indexOf(i) === -1 && thisChange[i] !== 0) {","","                        ms = relChange[i](ms, mods.relativeDirection * thisChange[i]);","","                    }","                }","            }","        }","","","        // More complex changes that need the above to complete first","","        // last/first day:","        if (mods.absoluteFixedHash.lastDay === 1) {","            // find date of last day of this month","            ms = absChange.d(ms, _findLastDayOf(ms));","","        } else if (mods.absoluteFixedHash.firstDay === 1) {","            // set to the first day","            ms = absChange.d(ms, 1);","","        }","","","        // Do any final relative changes:","        ms = _processRelativeFixedHash(ms, mods.relativeFixedHash, mods.relativeDirection);","        if (ms === false) {","            return false;","        }","","","        // Finally do timezone correction","        if (mods.timezoneString !== '') {","            ms = timezoneChange(ms, mods.timezoneString);","        }","","","","        return Math.floor(ms / 1000);","","    };","","","","","","","","","","/**"," * @method strtotime.constructRegExp"," * Builds up a set of strings that will be used in regex constructor in"," * the tests.  This happens once, the first time the strtotime function"," * is used."," * @protected"," * @static"," * @return {Object}"," */","strtotime.constructRegExp = function () {","","    ///////////////////////////////////////////////////////////////////////","    // Regexps are basically copied from","    // http://svn.php.net/viewvc/php/php-src/trunk/ext/date/lib/parse_date.re?revision=320481&view=markup","    // line 875 onwards","    //","    // There's some changes to use Y.Intl, and other minor changes to","    // use existing definitions to save some typing.  There's also extra brackets","    // so we can get the values found and parse them.","    //","    // These are expressed as strings here, as they are composed as we go down,","    // so they're only made into RegExps later.","","    var space = '[ \\t]+',","        frac = '[.]([0-9]+)',","        ago = strtotime.AGO,","        hour24 = '(2[0-4]|[01]?[0-9])',","        hour24lz = '(2[0-4]|[01][0-9])',","        hour12 = '(1[0-2]|0?[1-9])',","        minute = '([0-5]?[0-9])',","        minutelz = '([0-5][0-9])',","        second = '([0-5]?[0-9]|60)',","        secondlz = '([0-5][0-9]|60)',","        // The Internationalised meridian match isn't quite the same, as we can't assume","        // we can mix cases or add full stops.  So it just looks for any of the upper- or lower-","        // case versions in INTL.P and INTL.p","        meridian = strtotime.AMPM, // + space,","        tz = '[A-Za-z]+([_\\\\/-][A-Za-z]+)+|\\\\(? [A-Za-z]{1,6}\\\\)?',","        tzcorrection = 'GMT?([+-]' + hour24 + ':?' + minute + '?)',","","        daysuf = '(' + strtotime.DAYSUFFIXES.join('|') + ')',","","        month = '(1[0-2]|0?[0-9])',","        day = '((3[0-1])|([0-2]?[0-9]))' + daysuf + '?',","        year = '([0-9]{1,4})',","        year2 = '([0-9]{2})',","        year4 = '([0-9]{4})',","        year4withsign = '([+-]?[0-9]{4})',","","        dayofyear = '(00[1-9]|0[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-6])',","        weekofyear = '(0[1-9]|[1-4][0-9]|5[0-3])',","        monthlz = '(0[0-9]|1[0-2])',","        daylz = '(0[0-9]|[1-2][0-9]|3[01])',","","        // Use Internationalisation to get lang pack","        dayfull = strtotime.DAYFULL.join('|'),// : 'sunday|monday|tuesday|wednesday|thursday|friday|saturday',","        dayabbr = strtotime.DAYABBR.join('|'),// : 'sun|mon|tue|wed|thu|fri|sat|sun',","        dayspecial = strtotime.DAYSPECIAL.join('|') || 'weekday|weekdays',  // apparently no INTL version of this","        daytext = '(' + dayfull + '|' + dayabbr + '|' + dayspecial + ')',","","        monthfull = strtotime.MONTHFULL.join('|'),","        monthabbr = strtotime.MONTHABBR.join('|'),","        monthroman = strtotime.MONTHROMAN.join('|'),","        monthtext = '((' + monthfull + ')|(' + monthabbr + ')|(' + monthroman + '))',","","        // Time","        timetiny12 = hour12 + '(' + space + ')?' + meridian,","        timeshort12 = hour12 + '[:.]' + minutelz + '(' + space + ')?' + meridian,","        timelong12 = hour12 + '[:.]' + minute + '[:.]' + secondlz + '(' + space + ')?' + meridian,","","        timeshort24 = '(t)?' + hour24 + '[:.]' + minute,","        timelong24 = timeshort24 + '[:.]' + second,","        iso8601long = timelong24 + frac,","","        iso8601normtz = timeshort24 + '[:.]' + secondlz + '(' + space + ')?' + '(' + tzcorrection + '|' + tz + ')',","","        gnunocolon = '(t)?' + hour24lz + minutelz,","        gnunocolont = 't' + hour24lz + minutelz,","        iso8601nocolon = '(t)?' + hour24lz + minutelz + secondlz,","","        // Dates","        americanshort = month + '\\/' + day,","        american = americanshort + '\\/' + year,","        iso8601dateslash = year4 + '\\/' + monthlz + '\\/' + daylz + '\\/?',","        dateslash = year4 + '\\/' + month + '\\/' + day,","        iso8601date4 = year4withsign + '-' + monthlz + '-' + daylz,","        iso8601date2 = year2 + '-' + monthlz + '-' + daylz,","        gnudateshorter = year4 + '-' + month,","        gnudateshort = year + '-' + month + '-' + day,","        pointeddate4 = day + '[.\\t-]' + month + '[.-]' + year4,","        pointeddate2 = day + '[.\\t-]' + month + '[.]' + year2,","        datefull = day + '([ \\t.-])*' + monthtext + '([ \\t.-])*' + year,","        datenoday = monthtext + '([ \\t.-])*' + year4,","        datenodayrev = year4 + '([ \\t.-])*' + monthtext,","        datetextual = monthtext + '([ \\t.-])*' + day + '[,.stndrh\\t ]+' + year,","        datenoyear = monthtext + '([ \\t.-])*' + day + '[,.stndrh\\t ]*', // why is this one finish with * and above is +","        datenoyearrev = day + '([ \\t.-])*' + monthtext,","        datenocolon = year4 + monthlz + daylz,","","        // Special formats","        soap = year4 + '-' + monthlz + '-' + daylz + 'T' + hour24lz + ':' + minutelz + ':' + secondlz + frac + tzcorrection + '?',","        xmlrpc = year4 + monthlz + daylz + 'T' + hour24 + ':' + minutelz + ':' + secondlz,","        xmlrpcnocolon = year4 + monthlz + daylz + 't' + hour24 + minutelz + secondlz,","        wddx = year4 + '-' + month + '-' + day + 'T' + hour24 + ':' + minute + ':' + second,","        pgydotd = year4 + '.?' + dayofyear,","        pgtextshort = '(' + monthabbr + ')-' + daylz + '-' + year,","        pgtextreverse = year + '-(' + monthabbr + ')-' + daylz,","        mssqltime = hour12 + ':' + minutelz + ':' + secondlz + '[:.]([0-9]+)' + meridian,","        isoweekday = year4 + '-?W' + weekofyear + '-?([0-7])',","        isoweek = year4 + '-?W' + weekofyear,","        exif = year4 + ':' + monthlz + ':' + daylz + ' ' + hour24lz + ':' + minutelz + ':' + secondlz,","        firstdayof = strtotime.FIRSTDAYOF + '?',","        lastdayof = strtotime.LASTDAYOF + '?',","        backof = strtotime.BACKOF + hour24 + '(' + space + ')?' + meridian + '?',","        frontof = strtotime.FRONTOF + hour24 + '(' + space + ')?' + meridian + '?',","","        // common log format","        clf = day + '\\/(' + monthabbr + ')\\/' + year4 + ':' + hour24lz + ':' + minutelz + ':' + secondlz + space + tzcorrection,","","        // timestamp:","        timestamp = \"@(-)?([0-9]+)\",","","        // ? to fix some ambiguities (this is from the C source)","        dateshortwithtimeshort12  = datenoyear + timeshort12,","        dateshortwithtimelong12   = datenoyear + timelong12,","        dateshortwithtimeshort  = datenoyear + timeshort24,","        dateshortwithtimelong   = datenoyear + timelong24,","        dateshortwithtimelongtz = datenoyear + iso8601normtz,","","","        // relative regexps","        reltextnumber = '(' + strtotime.RELTEXTNUMBER.join('|') + ')',","","        // these are a bit ugly because we need to provide translationability","        // of these terms, while still knowing what they mean...","        // All these functions are doing is iterating through the static","        // properties to get (possibly translated) versions of the text into","        // a string to use in the regexps.","        reltexttext = '(' + (function () {","            var i,","                ret = [],","                rtt = strtotime.RELTEXTTEXT;","","            for (i in rtt) {","                if (rtt.hasOwnProperty(i)) {","                    ret.push(rtt[i]);","                }","            }","            return ret.join('|');","        }()) + ')', // strtotime.RELTEXTTEXT.join('|') + ')',","","        reltextunit = '((' + (function () {","            var i,","                ret = [],","                rtt = strtotime.RELTEXTUNIT;","","            for (i in rtt) {","                if (rtt.hasOwnProperty(i)) {","                    ret.push(rtt[i].join('|'));","                }","            }","            return ret.join('|');","        }()) + ')s?)|' + daytext,","        //strtotime.RELTEXTUNIT.join('|') + ')s?)' + '|' + daytext,","        // no 'weeks' currently - need to check why it's separate","","        relnumber = '([+-]*[ \\t]*[0-9]+)',","","        // this is weird too, the week. So I've removed it from here as it appears in reltextunit","        relative = relnumber + '(' + space + ')?(' + reltextunit + ')', // |week)',","        relativetext = '(' + reltextnumber + '|' + reltexttext + ')' + space + reltextunit,","        relativetextweek = reltexttext + space + 'week',","","","        weekdayof = '(' + reltextnumber + '|' + reltexttext + ')' + space + '(' + dayfull + '|' + dayabbr + ')' + space + 'of';","","    return {","        \"space\": space,","        \"frac\": frac,","        \"ago\": ago,","        \"hour24\": hour24,","        \"hour24lz\": hour24lz,","        \"hour12\": hour12,","        \"minute\": minute,","        \"minutelz\": minutelz,","        \"second\": second,","        \"secondlz\": secondlz,","        // The Internationalised meridian match isn't quite the same, as we can't assume","        // we can mix cases or add full stops.  So it just looks for any of the upper- or lower-","        // case versions in INTL.P and INTL.p","        \"meridian\": meridian,","        \"tz\": space + tz + space,","        \"tzcorrection\": space + tzcorrection + space,","","        \"daysuf\": daysuf,","","        \"month\": month,","        \"day\": day,","        \"year\": year,","        \"year2\": year2,","        \"year4\": year4,","        \"year4withsign\": year4withsign,","","        \"dayofyear\": dayofyear,","        \"weekofyear\": weekofyear,","        \"monthlz\": monthlz,","        \"daylz\": daylz,","","        // Use Internationalisation to get lang pack","        \"dayfull\": dayfull,","        \"dayabbr\": dayabbr,","        \"dayspecial\": dayspecial,  // apparently no INTL version of this","        \"daytext\": daytext,","","        \"monthfull\": monthfull,","        \"monthabbr\": monthabbr,","        \"monthroman\": monthroman,","        \"monthtext\": monthtext,","","        // Time","        \"timetiny12\": space + timetiny12 + space,","        \"timeshort12\": space + timeshort12 + space,","        \"timelong12\": space + timelong12 + space,","","        \"timeshort24\": space + timeshort24 + space,","        \"timelong24\": space + timelong24 + space,","        \"iso8601long\": space + iso8601long + space,","","        \"iso8601normtz\": space + iso8601normtz + space,","","        \"gnunocolon\": space + gnunocolon + space,","        \"gnunocolont\": space + gnunocolont + space,","        \"iso8601nocolon\": space + iso8601nocolon + space,","","        // Dates","        \"americanshort\": space + americanshort + space,","        \"american\": space + american + space,","        \"iso8601dateslash\": space + iso8601dateslash + space,","        \"dateslash\": space + dateslash + space,","        \"iso8601date4\": space + iso8601date4 + space,","        \"iso8601date2\": space + iso8601date2 + space,","        \"gnudateshorter\": space + gnudateshorter + space,","        \"gnudateshort\": space + gnudateshort + space,","        \"pointeddate4\": space + pointeddate4 + space,","        \"pointeddate2\": space + pointeddate2 + space,","        \"datefull\": space + datefull + space,","        \"datenoday\": space + datenoday + space,","        \"datenodayrev\": space + datenodayrev + space,","        \"datetextual\": space + datetextual + space,","        \"datenoyear\": space + datenoyear + space, // why is this one finish with * and above is +","        \"datenoyearrev\": space + datenoyearrev + space,","        \"datenocolon\": space + datenocolon + space,","","        // Special formats","        \"soap\": soap,","        \"xmlrpc\": xmlrpc,","        \"xmlrpcnocolon\": xmlrpcnocolon,","        \"wddx\": wddx,","        \"pgydotd\": pgydotd,","        \"pgtextshort\": pgtextshort,","        \"pgtextreverse\": pgtextreverse,","        \"mssqltime\": mssqltime,","        \"isoweekday\": isoweekday,","        \"isoweek\": isoweek,","        \"exif\": exif,","        \"firstdayof\": firstdayof,","        \"lastdayof\": lastdayof,","        \"backof\": backof,","        \"frontof\": frontof,","","        // common log format","        \"clf\": clf,","","        // timestamp:","        \"timestamp\": timestamp,","","        // ? to fix some ambiguities (this is from the C source)","        \"dateshortwithtimeshort12\" : dateshortwithtimeshort12,","        \"dateshortwithtimelong12\"  : dateshortwithtimelong12,","        \"dateshortwithtimeshort\" : dateshortwithtimeshort,","        \"dateshortwithtimelong\"  : dateshortwithtimelong,","        \"dateshortwithtimelongtz\": dateshortwithtimelongtz,","","","        // relative regexps","        \"reltextnumber\": reltextnumber,","        \"reltexttext\": reltexttext,","        \"reltextunit\": reltextunit, // no 'weeks' currently - need to check why it's separate","","        \"relnumber\": relnumber,","        \"relative\": relative, //the week","        \"relativetext\": relativetext,","        \"relativetextweek\": relativetextweek,","","","        \"weekdayof\": weekdayof","","    };","","};","","","","/**"," * @method strtotime.finishRegExp"," * @static"," * User-overridable function that is called after the default regex strings"," * have been constructed, to allow user modification if needed."," *"," * @public"," * @param {Object} oRegEx The strings constructed by strtotime.constructRegExp"," * @return {Object}"," */","strtotime.finishRegExp = function (oRegEx) {","    return oRegEx;","};","","","/**"," * @method strtotime.constructTests"," *"," * Builds an array of tests to carry out, and what to do if they pass"," * - ie if there's a match to the regexp.  Each item in the array"," * is an object with keys `re`, `fn` and `key`:"," *"," *   @param item.re {RegExp} A RegExp object that will be used to test the passed string"," *   @param item.fn {Function} A function that is called if the RegExp returns a result."," *"," *       The function receives the following arguments:"," *       @param {Array} aRes  Array (-like) returned by RegExp.exec()"," *       @param {Int} index Position that the RegExp appeared in the original string."," *           This is different to aRes.index because the RegExp.exec() is in general"," *           called on a substring of the original string passed.  It's important to know"," *           where in the original string the matching regexp string appears as the order"," *           of items is important: \"2am yesterday\" is different to \"yesterday 2am\"."," *           Mostly, index will just be passed through to mods.updateRel() or mods.updateAbs()"," *           where it's used to make sure that the date/time calculations happen in the"," *           correct order"," *       @param {Modificator} mods An instance of Modificator that stores the changes"," *           that need to be made to the timestamp."," *"," *   @param item.key {String} A string that identifies the test, for logging/debugging"," *       purposes mainly"," *"," * @protected"," * @static"," * @param {Object} oRegEx Regex strings built by constructRegExp"," * @return {Array}"," */","strtotime.constructTests = function (oRegEx) {","","    // The tests to carry out, and what happens","    return [","","        // Fixed strings:","        {key: 'yesterday', re: new RegExp('yesterday'), fn: function (aRes, index, mods) {","            mods.updateRel({d: -1}, null, index);","            mods.updateAbs({h: 0, i: 0, s: 0}, true, index);","        }},","","        {key: 'now', re: new RegExp('now'), fn: function () {","        }},","","        {key: 'noon', re: new RegExp('noon'), fn: function (aRes, index, mods) {","            mods.updateAbs({","                h: 12,","                i: 0,","                s: 0,","                fixTime: true,","                specialFn: function (ms) {","                    mods.incTime();","                    return ms;","                }","            }, null, index);","        }},","","        {key: 'midnight|today', re: new RegExp('midnight|today'), fn: function (aRes, index, mods) {","            mods.updateAbs({h: 0, i: 0, s: 0}, null, index);","        }},","","        {key: 'tomorrow', re: new RegExp('tomorrow'), fn: function (aRes, index, mods) {","            mods.updateRel({d: 1}, null, index);","            mods.updateAbs({h: 0, i: 0, s: 0}, null, index);","        }},","","","","        // Unix timestamp","        {key: 'timestamp', re: new RegExp(oRegEx.timestamp), fn: function (aRes, index, mods) {","            var tmp = new Date(parseInt(aRes[2], 10) * 1000);","            mods.updateAbs({","                y: tmp.getUTCFullYear(),","                m: tmp.getUTCMonth(),","                d: tmp.getUTCDate(),","                h: tmp.getUTCHours(),","                i: tmp.getUTCMinutes(),","                s: tmp.getUTCSeconds()","            }, true, index);","            mods.incTime();","        }},","","","","        // Simple relative things","        {key: 'firstdayof', re: new RegExp(oRegEx.firstdayof), fn: function (aRes, index, mods) {","            mods.absoluteFixedHash.firstDay = 1;","        }},","        {key: 'lastdayof', re: new RegExp(oRegEx.lastdayof), fn: function (aRes, index, mods) {","            mods.absoluteFixedHash.lastDay = 1;","        }},","","        {key: 'frontof', re: new RegExp(oRegEx.frontof), fn: function (aRes, index, mods) {","","","            // handle the meridian","            aRes[1] = _handleMeridian(aRes[1], aRes[3]);","","            mods.updateAbs({","                h: aRes[1],","                i: 0,","                s: 0","            }, null, index);","            mods.updateRel({","                i: -15","            }, null, index);","","            mods.incTime();","        }},","        {key: 'backof', re: new RegExp(oRegEx.backof), fn: function (aRes, index, mods) {","","            aRes[1] = _handleMeridian(aRes[1], aRes[3]);","","            mods.updateAbs({","                h: aRes[1],","                i: 0,","                s: 0","            }, null, index);","            mods.updateRel({","                i: 15","            }, null, index);","","            mods.incTime();","        }},","","","        // complex relative things - weekday of","        {key: 'weekdayof', re: new RegExp(oRegEx.weekdayof), fn: function (aRes, index, mods) {","","            var modifier = aRes[1], // first, second or next, last etc","                ind = strtotime.RELTEXTNUMBER.indexOf(modifier),","                dow = aRes[4],","                dowIndex = strtotime.DAYFULL.indexOf(dow) !== -1 ?","                        strtotime.DAYFULL.indexOf(dow) :","                        strtotime.DAYABBR.indexOf(dow);","","","            if (ind !== -1) {","                // something like 'third Wednesday in June'","                mods.updateRel({","                    weekdayOf: {","                        dayIndex: dowIndex,","                        weekIndex: ind","                    }","                }, null, index);","            } else {","                // something like 'last Wednesday in June'","                mods.updateRel({","                    weekdayOf: {","                        dayIndex: dowIndex,","                        weekIndex: aRes[1]","                    }","                }, null, index);","            }","            mods.updateAbs({","                h: 0,","                i: 0,","                s: 0,","                d: 1,","                fixDate: {","                    d: true","                }","            }, null, index);","        }},","","","","        // some times","","        {key: 'mssqltime', re: new RegExp(oRegEx.mssqltime), fn: function (aRes, index, mods) {","","            mods.updateAbs({","                h: _handleMeridian(aRes[1], aRes[5]),","                i: aRes[2],","                s: aRes[3] + '.' + aRes[4]","            }, null, index);","            mods.incTime();","        }},","","        {key: 'times12', re: new RegExp([oRegEx.timelong12, oRegEx.timeshort12, oRegEx.timetiny12].join('|')), fn: function (aRes, index, mods) {","","            var hr,","                mn,","                sc,","                mr,","                newAbs = {};","            // get the times:","            hr = aRes[1] || aRes[6] || aRes[10];","            mn = aRes[2] || aRes[7];","            sc = aRes[3];","            mr = aRes[5] || aRes[9] || aRes[12];","","            if (mr !== undefined) {","                hr = _handleMeridian(hr, mr);","            }","","            newAbs.h = hr;","            if (mn !== undefined) {","                newAbs.i = mn;","            }","            if (sc !== undefined) {","                newAbs.s = sc;","            }","","            mods.updateAbs(newAbs, null, index);","            mods.incTime();","        }},","","        // This is in the wrong place, according to the C source.  It should be further","        // down, with the other dates.  However, if if comes after 'times24'","        // then time24 will match the time part of the exif format","        // and it'll break.","        {key: 'xmlrpcAndFriends',","            re: new RegExp([oRegEx.xmlrpc, oRegEx.xmlrpcnocolon, oRegEx.soap, oRegEx.wddx, oRegEx.exif].join(\"|\")),","            fn: function (aRes, index, mods) {","","","                mods.updateAbs({","                    y: aRes[1] || aRes[7] || aRes[13] || aRes[23] || aRes[32],","                    m: parseInt(aRes[2] || aRes[8] || aRes[14] || aRes[24] || aRes[33], 10) - 1,","                    d: aRes[3] || aRes[9] || aRes[15] || aRes[25] || aRes[34],","                    h: aRes[4] || aRes[10] || aRes[16] || aRes[29] || aRes[35],","                    i: aRes[5] || aRes[11] || aRes[17] || aRes[30] || aRes[36],","                    s: aRes[6] || aRes[12] || aRes[18] || aRes[31] || aRes[37]","                }, true, index);","","                if (aRes[20] !== undefined) {","                    mods.timezoneString = aRes[20];","                }","","            }","            },","","","","        {key: 'times24', re: new RegExp([oRegEx.iso8601long, oRegEx.timelong24, oRegEx.timeshort24].join('|')), fn: function (aRes, index, mods) {","            var hr,","                mn,","                sc,","                fr,","                newAbs = {};","","","            // get the times:","            hr = aRes[2] || aRes[7] || aRes[11];","            mn = aRes[3] || aRes[8] || aRes[12];","            sc = aRes[4] || aRes[9];","            fr = aRes[5];","","            newAbs.h = hr;","            if (mn !== undefined) {","                newAbs.i = mn;","            }","            if (sc !== undefined) {","                newAbs.s = sc;","                if (fr !== undefined) {","                    newAbs.s += '.' + parseInt(fr, 10);","                }","            }","","            mods.updateAbs(newAbs, null, index);","            mods.incTime();","        }},","","","","        {key: 'iso8601nocolon', re: new RegExp(oRegEx.iso8601nocolon), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                h: aRes[2],","                i: aRes[3],","                s: aRes[4]","            }, null, index);","        }},","","","","        // dates","","","        {key: 'american', re: new RegExp(oRegEx.american + '|' + oRegEx.americanshort), fn: function (aRes, index, mods) {","","","            var upd = {","                m: parseInt(aRes[1] || aRes[7], 10) - 1,","                d: aRes[2] || aRes[8],","                h: 0,","                i: 0,","                s: 0","            };","            if (aRes[6] !== undefined) {","                upd.y = _handleShortYear(aRes[6]);","            }","            mods.updateAbs(upd, true, index);","        }},","","        {key: 'iso8601dates', re: new RegExp([oRegEx.iso8601date4, oRegEx.iso8601dateslash, oRegEx.dateslash].join('|')),","            fn: function (aRes, index, mods) {","","","                mods.updateAbs({","                    y: aRes[1] || aRes[4] || aRes[7],","                    m: parseInt(aRes[2] || aRes[5] || aRes[8], 10) - 1,","                    d: aRes[3] || aRes[6] || aRes[9],","                    h: 0,","                    i: 0,","                    s: 0","                }, true, index);","","            }","            },","","        {key: 'iso8601date2', re: new RegExp(oRegEx.iso8601date2), fn: function (aRes, index, mods) {","","","            var y = _handleShortYear(aRes[1]);","","            mods.updateAbs({","                y: y,","                m: parseInt(aRes[2], 10) - 1,","                d: aRes[3],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        {key: 'gnudateshorter', re: new RegExp(oRegEx.gnudateshorter), fn: function (aRes, index, mods) {","","","            var y = _handleShortYear(aRes[1]);","","            mods.updateAbs({","                y: y,","                m: parseInt(aRes[2], 10) - 1,","                d: 1,","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        {key: 'gnudateshort', re: new RegExp(oRegEx.gnudateshort), fn: function (aRes, index, mods) {","","","            var y = _handleShortYear(aRes[1]);","","            mods.updateAbs({","                y: y,","                m: parseInt(aRes[2], 10) - 1,","                d: aRes[3],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","","","        {key: 'datefull', re: new RegExp(oRegEx.datefull), fn: function (aRes, index, mods) {","","","            var m = _handleMonthText(aRes[6]);","","            mods.updateAbs({","                y: aRes[11],","                m: m,","                d: aRes[1],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        {key: 'pointeddate', re: new RegExp(oRegEx.pointeddate4 + '|' + oRegEx.pointeddate2), fn: function (aRes, index, mods) {","","","            var y = _handleShortYear(aRes[6] || aRes[12]);","","            if (y === false) {","                return false;","            }","","            mods.updateAbs({","                y: y,","                m: parseInt(aRes[5] || aRes[11], 10) - 1,","                d: aRes[2] || aRes[3] || aRes[7] || aRes[9],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        {key: 'datenoday', re: new RegExp(oRegEx.datenoday), fn: function (aRes, index, mods) {","","","            var y = _handleShortYear(aRes[6]),","                m = _handleMonthText(aRes[1]);","","            if (y === false) {","                return false;","            }","","            mods.updateAbs({","                y: y,","                m: m,","                d: 1,","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        {key: 'datenodayrev', re: new RegExp(oRegEx.datenodayrev), fn: function (aRes, index, mods) {","","","            var y = _handleShortYear(aRes[1]),","                m = _handleMonthText(aRes[3]);","","            if (y === false) {","                return false;","            }","","            mods.updateAbs({","                y: y,","                m: m,","                d: 1,","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","","        {key: 'datetextual', re: new RegExp(oRegEx.datetextual + '|' + oRegEx.datenoyear), fn: function (aRes, index, mods) {","","","            var y = _handleShortYear(aRes[10]),","                upd = {","                    m: _handleMonthText(aRes[1] || aRes[11]),","                    d: aRes[6] || aRes[16],","                    h: 0,","                    i: 0,","                    s: 0","                };","","            if (y === false) {","                return false;","            } else if (!isNaN(y)) {","                upd.y = y;","            } /*else {","                // it seems that if there's no year and we have 'static' modifiers (e.g. noon)","                // then \"Jan 1st noon\" should return false,","                // but \"noon Jan 1st\" shouldn't.","                // Not sure if this is intended by php or a bug.","                // At the moment this javascript version returns the same value","                // (1st January {currentyear}, 12:00:00)","                //","                // This does cause some tests to fail.","            }*/","","            mods.updateAbs(upd, true, index);","","        }},","","","        {key: 'datenoyearrev', re: new RegExp(oRegEx.datenoyearrev), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                m: _handleMonthText(aRes[6]),","                d: aRes[1],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        {key: 'datenocolon', re: new RegExp(oRegEx.datenocolon), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                y: aRes[1],","                m: parseInt(aRes[2], 10) - 1,","                d: aRes[3],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        // xmlrpcAndFields was here in the original source, but now it's further up","        // (see note above for reason)","","","        {key: 'pgydotd', re: new RegExp(oRegEx.pgydotd), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                y: aRes[1],","                m: 0,","                d: parseInt(aRes[2], 10),","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","","        }},","","","        {key: 'isoweekday', re: new RegExp(oRegEx.isoweekday), fn: function (aRes, index, mods) {","","","            var y = parseInt(aRes[1], 10),","                wk = parseInt(aRes[2], 10),","                dy = parseInt(aRes[3], 10),","                days = _findDayNrFromWeekNr(y, wk, dy);","","            mods.updateAbs({","                y: y,","                m: 0,","                d: days,","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","","        {key: 'pgtextshort', re: new RegExp(oRegEx.pgtextshort), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                y: aRes[3],","                m: _handleMonthText(aRes[1]),","                d: aRes[2],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","        {key: 'pgtextreverse', re: new RegExp(oRegEx.pgtextreverse), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                y: aRes[1],","                m: _handleMonthText(aRes[2]),","                d: aRes[3],","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","","        // For the same reasons as above, this needs to come before times24","        // instead of further down in the dates","        {key: 'clf', re: new RegExp(oRegEx.clf), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                y: aRes[6],","                m: _handleMonthText(aRes[5]),","                d: aRes[1],","                h: aRes[7],","                i: aRes[8],","                s: aRes[9]","            }, true, index);","","            mods.timezoneString = aRes[10];","","        }},","","","","        {key: 'ago', re: new RegExp(oRegEx.ago), fn: function (aRes, index, mods) {","","","            mods.relativeDirection = -1;","","        }},","","","","","","","        {key: 'daytext', re: new RegExp(oRegEx.daytext), fn: function (aRes, index, mods) {","","","            var dow = aRes[0],","                dowIndex = strtotime.DAYFULL.indexOf(dow) !== -1 ?","                        strtotime.DAYFULL.indexOf(dow) :","                        strtotime.DAYABBR.indexOf(dow);","","            mods.updateAbs({","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","            mods.updateRel({","                weekdayOf: {","                    dayIndex: dowIndex","                }","            });","","","        }},","","","        {key: 'relativetextweek', re: new RegExp(oRegEx.relativetextweek), fn: function (aRes, index, mods) {","","","            // (first|last|next|previous) week","","            mods.updateRel({","                week: aRes[1]","            }, null, index);","","        }},","","        {key: 'relativetext', re: new RegExp(oRegEx.relativetext), fn: function (aRes, index, mods) {","","","            // ((first|second|third... )|( next|first|last...))  day|month|year","","            var modifier = aRes[1],","                period = aRes[4],","                enPeriod = _lookupRelTextUnit(period),","                upd = {relative: {}};","","            upd.relative[enPeriod] = modifier;","","            mods.updateRel(upd, null, index);","","","        }},","","","        {key: 'monthfull|monthabbr', re: new RegExp(oRegEx.monthfull + '|' + oRegEx.monthabbr), fn: function (aRes, index, mods) {","","","            var m = _handleMonthText(aRes[0]);","","            mods.updateAbs({","                m: m,","                h: 0,","                i: 0,","                s: 0","            }, true, index);","","        }},","","","        {key: 'dateshortwithtime12', re: new RegExp(oRegEx.dateshortwithtimeshort12 + '|' + oRegEx.dateshortwithtimelong12),","            fn: function () {","","                // I can't see how this is ever triggered - it seems always to get","                // picked up by the component regexes.  So I can't test any implementation!","                //","                // The C source for these mentions 'fix ambiguities'...","                //","","                // Until anyone can get to this point and report it,","                // there's no implementation","                return false;","","            }","            },","","        {key: 'dateshortwithtimelong',","            re: new RegExp(oRegEx.dateshortwithtimeshort + '|' + oRegEx.dateshortwithtimelong + '|' + oRegEx.dateshortwithtimelongtz),","            fn: function () {","","                // I can't see how this is ever triggered - it seems always to get","                // picked up by the component regexes.  So I can't test any implementation!","                //","                // The C source for these mentions 'fix ambiguities'...","                //","","                // Until anyone can get to this point and report it,","                // there's no implementation","                return false;","","            }","            },","","","        {key: \"relative\", re: new RegExp(oRegEx.relative), fn: function (aRes, index, mods) {","","","            var amt = parseInt(aRes[1], 10),","                period = _lookupRelTextUnit(aRes[5]),","                upd = {relative: {}};","","            if (period === \"week\") {","                // we need to treat this slightly differently","                // to 'last week', which sets the day to Monday","                // - with something like \"-2 week\" we don't want","                // to change the day","                period = \"weekKeepDay\";","            }","","            upd.relative[period] = amt;","            mods.updateRel(upd, true, index);","","        }},","","","        // This is an extra one to definitely pick up t0813 as a time","        {key: \"gnunocolont\", re: new RegExp(oRegEx.gnunocolont), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                h: aRes[1],","                i: aRes[2]","            }, true, index);","        }},","","","        {key: 'timezone', re: new RegExp('(' + oRegEx.tzcorrection + ')|(' + oRegEx.tz + ')'), fn : function (aRes, index, mods) {","","","            var tz = aRes[2],","                tzStr = aRes[5];","","            if (tzStr !== undefined) {","                tz = strtotime.TIMEZONEMAP[Y.Lang.trim(tzStr)];","            }","","            if (tz !== undefined) {","","                mods.timezoneString = tz;","","            }","","        }},","","","","","","","        // this appears further up in the C source: possibly a source of error (as gnunocolon)","        {key: 'year4', re: new RegExp(oRegEx.year4), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                y: aRes[1]","            }, true, index);","","        }},","","        // This seems like an error.  In the php C source this is listed","        // after timeshort24.  However, if you do so it matches years","        // that appear as part of longer dates and goes wrong.","        {key: 'gnunocolon', re: new RegExp(oRegEx.gnunocolon), fn: function (aRes, index, mods) {","","","            mods.updateAbs({","                specialFn: function (ms) {","","                    var t = aRes[1];","                    // trying to set the time more than once should return an error","                    // This seems to be checked in the C source","                    // in the gnunocolon (and possibly elsewhere)","                    // but not as a general check","                    switch (mods.hasTime) {","                    case 1:","                        // explicit time and time's already set","                        if (t === \"t\") {","                            return false;","                        }","                        return absChange.y(ms, parseFloat(String(aRes[2] + aRes[3])));","","                    case 0:","                        mods.incTime();","                        ms = absChange.h(ms, aRes[2]);","                        return absChange.i(ms, aRes[3]);","","                    default:","                        // more than once is an error","                        return false;","","                    }","                }","            }, null, index);","","        }}","","    ];","","};","","/**"," * @method strtotime.finishTests"," * @static"," * User-overridable function that is called after the default"," * test builder (constructTests) to allow user modification if"," * needed."," *"," * @public"," * @param {Object} oRegEx Regex strings built earlier"," * @param {Array} aTests  Array of tests built by default process"," * @return {Array}"," */","strtotime.finishTests = function (oRegEx, aTests) {","    return aTests;","};","","","/**"," * Resets the built Regexp object and Test array that are used"," * by strtotime."," *"," * You may need this if you're changing languages on the fly so"," * that you can re-build the regexps (and possibly tests) the"," * next time you use the strtotime function."," *"," * @method strtotime.resetTests"," * @public"," * @static"," *"," */","strtotime.resetTests = function () {","    TESTS = [];","    REGEXP = {};","};","","","","","","","","///////////////////////////////////////////////////////////////////////////","///////////////////////////////////////////////////////////////////////////","//","// Language items used: if Intl is available it will use them","// where it can.  Not all items are included in the default language","// packs (e.g. 'next') for dates: implementers can also overwrite these","// too if they want to.","//","","","/**"," * Array of terms meaning 'weekday'"," *"," * @property strtotime.DAYSPECIAL"," * @static"," *"," * @type {Array}"," * @default ['weekday', 'weekdays']"," */","strtotime.DAYSPECIAL = ['weekday', 'weekdays'];","/**"," * Terms meaning 'first day of'"," *"," * @property strtotime.FIRSTDAYOF"," * @static"," * @type {String}"," * @default 'first day of'"," */","strtotime.FIRSTDAYOF = 'first day of';","/**"," * Term meaning 'last day of'"," *"," * @property strtotime.LASYDAYOF"," * @static"," * @type {String}"," * @default 'last day of'"," */","strtotime.LASTDAYOF = 'last day of';"," /**","  * Term meaning 'back of' (i.e. quarter past)","  *","  * @property strtotime.BACKOF","  * @static","  * @type {String}","  * @default 'back of'","  */","strtotime.BACKOF = 'back of ';","/**"," * Term meaning 'front of' (i.e. quarter to)"," *"," * @property strtotime.FRONTOF"," * @static"," * @type {String}"," * @default 'front of'"," */","strtotime.FRONTOF = 'front of ';","","/**"," * Array of full day names of the week."," * Must be in order: must start with Sunday (as day 0)."," *"," * Will use Intl module day names if available"," *"," * @property strtotime.DAYFULL"," * @static"," * @type {Array}"," */","strtotime.DAYFULL = INTL.A || ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];","/**"," * Array of shortened day names of the week."," * Must be in order: must start with Sun (as day 0)."," *"," * Will use Intl module day names if available"," *"," * @property strtotime.DAYABBR"," * @static"," * @type {Array}"," */","strtotime.DAYABBR = INTL.a || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];","","/**"," * String that will be used in RegExp constructor to identify am / pm."," *"," * By default php can handle full stops and mixed capitalisation: for"," * internationalised versions we can't reliably and generally do this."," *"," * So if you're using the Intl module there is a small incompatibility with"," * php strtotime() as things like \"8 A.m\" won't be matched and processed."," *"," * Over-write this if this matters to you: '([AaPp].?[Mm].?)' will work as"," * php does."," *"," * @property strtotime.AMPM"," * @static"," * @type {String}"," */","strtotime.AMPM = INTL.p || INTL.P ?","        '(' + (INTL.P ? INTL.P.join('|') : '') + (INTL.P && INTL.p ? '|' : '') + (INTL.p ? INTL.p.join('|') : '') + ')' :","        '([AaPp].?[Mm].?)';",""," /**","  * Array of ordinals (first, second, third etc)","  * Must be in order: must start with 'first' in position 0","  *","  * @property strtotime.RELTEXTNUMBER","  * @for Date","  * @static","  * @type {Array}","  */","strtotime.RELTEXTNUMBER = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];",""," /**","  * Object of text terms for 'next', 'last', 'previous', 'this'","  * keys are fixed: substitute other strings if you need","  * translations.  Don't remove keys, or add them.  strtotime","  * won't know what to do with them.","  *","  * @property strtotime.RELTEXTTEXT","  * @static","  * @var {Object}","  */","strtotime.RELTEXTTEXT = {","    next: 'next',","    last: 'last',","    previous: 'previous',","    'this': 'this'","};","",""," /**","  * Object literal of time terms, allowing for translations","  * Each key is the English version used by strtotime internally:","  * don't change or add keys.","  * The value for each must be an array, allowing mulitple","  * words for one meaning.","  *","  * @property strtotime.RELTEXTUNIT","  * @static","  * @var {Object}"," */","strtotime.RELTEXTUNIT = {","    'second': ['second', 'sec'],","    'minute': ['minute', 'min'],","    'hour': ['hour'],","    'day': ['day'],","    'week': ['week'],","    'fortnight': ['fortnight'],","    'month': ['month'],","    'year': ['year']","};","","","/**"," * Array of full length months."," * Must by in order, and start at January"," *"," * @property strtotime.MONTHFULL"," * @static"," * @type {Array}"," * @default ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',","    'September', 'October', 'November', 'December']"," */","strtotime.MONTHFULL = INTL.B || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',","    'September', 'October', 'November', 'December'];","","/**"," * Array of abbreviated length months."," * Must by in order, and start at Jan"," *"," * @property strtotime.MONTHABBR"," * @static"," * @type {Array}"," * @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"," */","strtotime.MONTHABBR = INTL.b || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];","","/**"," * Array of Roman numeral months (or could be anything, actually)."," * Must by in order, and start at Jan"," *"," * @property strtotime.MONTHROMAN"," * @static"," * @type {Array}"," * @default ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']"," */","strtotime.MONTHROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];","","","/**"," * Term meaning 'ago' (ie modifier that makes relative changes go into the past)"," *"," * @property strtotime.AGO"," * @static"," * @type {String}"," * @default 'ago',"," */","strtotime.AGO = 'ago';","","","/**"," * Suffixes that appear after day numbers (e.g. 22nd)",""," * @property strtotime.DAYSUFFIXES"," * @static"," * @type {Array}"," * @default '(st|nd|rd|th)'"," */","strtotime.DAYSUFFIXES = ['st', 'nd', 'rd', 'th'];","","","/**"," * Maps timezone strings to UTC offsets"," *"," * Source: http://en.wikipedia.org/wiki/List_of_tz_database_time_zones"," * retrieved 9th January 2013"," *"," *"," * @property strtotime.TIMEZONEMAP"," * @static"," * @type {Object}"," */","Z = {","    'AKST9AKDT': T9m,","    'Arctic/Longyearbyen': T1,","    'CET': T1,","    'Chile/Continental': T4m,","    'Chile/EasterIsland': T6m,","    'CST6CDT': T6m,","    'Cuba': T5m,","    'EET': T2,","    'Egypt': T2,","    'Eire': T0,","    'EST': T5m,","    'EST5EDT': T5m,","    'GB': T0,","    'GB-Eire': T0,","    'Greenwich': T0,","    'Hong Kong': T8,","    'HST': T10m,","    'Iceland': T0,","    'Iran': '+03:30',","    'Israel': T2,","    'Jamaica': T5m,","    'Japan': T9,","    'JST-9': T9,","    'Kwajalein': T12,","    'Libya': T2,","    'MET': T1,","    'MST': T7m,","    'MST7MDT': T7m,","    'Navajo': T7m,","    'NZ': T12,","    'NZ-CHAT': '+12:45',","    'Poland': T1,","    'Portugal': T0,","    'PRC': T8,","    'PST8PDT': T8m,","    'ROC': T8,","    'ROK': T9,","    'Singapore': T8,","    'Turkey': T2,","    'UCT': T0,","    'Universal': T0,","    'UTC': T0,","    'WET': T0,","    'W-SU': T4,","    'Zulu': T0","};","Z[AFRICA + 'Abidjan'] = T0;","Z[AFRICA + 'Accra'] = T0;","Z[AFRICA + 'Addis_Ababa'] = T3;","Z[AFRICA + 'Algiers'] = T1;","Z[AFRICA + 'Asmara'] = T3;","Z[AFRICA + 'Asmera'] = T3;","Z[AFRICA + 'Bamako'] = T0;","Z[AFRICA + 'Bangui'] = T1;","Z[AFRICA + 'Banjul'] = T0;","Z[AFRICA + 'Bissau'] = T0;","Z[AFRICA + 'Blantyre'] = T2;","Z[AFRICA + 'Brazzaville'] = T1;","Z[AFRICA + 'Bujumbura'] = T2;","Z[AFRICA + 'Cairo'] = T2;","Z[AFRICA + 'Casablanca'] = T0;","Z[AFRICA + 'Ceuta'] = T1;","Z[AFRICA + 'Conakry'] = T0;","Z[AFRICA + 'Dakar'] = T0;","Z[AFRICA + 'Dar_es_Salaam'] = T3;","Z[AFRICA + 'Djibouti'] = T3;","Z[AFRICA + 'Douala'] = T1;","Z[AFRICA + 'El_Aaiun'] = T0;","Z[AFRICA + 'Freetown'] = T0;","Z[AFRICA + 'Gaborone'] = T2;","Z[AFRICA + 'Harare'] = T2;","Z[AFRICA + 'Johannesburg'] = T2;","Z[AFRICA + 'Juba'] = T3;","Z[AFRICA + 'Kampala'] = T3;","Z[AFRICA + 'Khartoum'] = T3;","Z[AFRICA + 'Kigali'] = T2;","Z[AFRICA + 'Kinshasa'] = T1;","Z[AFRICA + 'Lagos'] = T1;","Z[AFRICA + 'Libreville'] = T1;","Z[AFRICA + 'Lome'] = T0;","Z[AFRICA + 'Luanda'] = T1;","Z[AFRICA + 'Lubumbashi'] = T2;","Z[AFRICA + 'Lusaka'] = T2;","Z[AFRICA + 'Malabo'] = T1;","Z[AFRICA + 'Maputo'] = T2;","Z[AFRICA + 'Maseru'] = T2;","Z[AFRICA + 'Mbabane'] = T2;","Z[AFRICA + 'Mogadishu'] = T3;","Z[AFRICA + 'Monrovia'] = T0;","Z[AFRICA + 'Nairobi'] = T3;","Z[AFRICA + 'Ndjamena'] = T1;","Z[AFRICA + 'Niamey'] = T1;","Z[AFRICA + 'Nouakchott'] = T0;","Z[AFRICA + 'Ouagadougou'] = T0;","Z[AFRICA + 'Porto-Novo'] = T1;","Z[AFRICA + 'Sao_Tome'] = T0;","Z[AFRICA + 'Timbuktu'] = T0;","Z[AFRICA + 'Tripoli'] = T2;","Z[AFRICA + 'Tunis'] = T1;","Z[AFRICA + 'Windhoek'] = T1;","Z[AMERICA + 'Adak'] = T10m;","Z[AMERICA + 'Anchorage'] = T9m;","Z[AMERICA + 'Anguilla'] = T4m;","Z[AMERICA + 'Antigua'] = T4m;","Z[AMERICA + 'Araguaina'] = T3m;","Z[AMERICA + 'Argentina/Buenos_Aires'] = T3m;","Z[AMERICA + 'Argentina/Catamarca'] = T3m;","Z[AMERICA + 'Argentina/ComodRivadavia'] = T3m;","Z[AMERICA + 'Argentina/Cordoba'] = T3m;","Z[AMERICA + 'Argentina/Jujuy'] = T3m;","Z[AMERICA + 'Argentina/La_Rioja'] = T3m;","Z[AMERICA + 'Argentina/Mendoza'] = T3m;","Z[AMERICA + 'Argentina/Rio_Gallegos'] = T3m;","Z[AMERICA + 'Argentina/Salta'] = T3m;","Z[AMERICA + 'Argentina/San_Juan'] = T3m;","Z[AMERICA + 'Argentina/San_Luis'] = T3m;","Z[AMERICA + 'Argentina/Tucuman'] = T3m;","Z[AMERICA + 'Argentina/Ushuaia'] = T3m;","Z[AMERICA + 'Aruba'] = T4m;","Z[AMERICA + 'Asuncion'] = T4m;","Z[AMERICA + 'Atikokan'] = T5m;","Z[AMERICA + 'Atka'] = T10m;","Z[AMERICA + 'Bahia'] = T3m;","Z[AMERICA + 'Bahia_Banderas'] = T6m;","Z[AMERICA + 'Barbados'] = T4m;","Z[AMERICA + 'Belem'] = T3m;","Z[AMERICA + 'Belize'] = T6m;","Z[AMERICA + 'Blanc-Sablon'] = T4m;","Z[AMERICA + 'Boa_Vista'] = T4m;","Z[AMERICA + 'Bogota'] = T5m;","Z[AMERICA + 'Boise'] = T7m;","Z[AMERICA + 'Buenos_Aires'] = T3m;","Z[AMERICA + 'Cambridge_Bay'] = T7m;","Z[AMERICA + 'Campo_Grande'] = T4m;","Z[AMERICA + 'Cancun'] = T6m;","Z[AMERICA + 'Caracas'] = '−04:30';","Z[AMERICA + 'Catamarca'] = T3m;","Z[AMERICA + 'Cayenne'] = T3m;","Z[AMERICA + 'Cayman'] = T5m;","Z[AMERICA + 'Chicago'] = T6m;","Z[AMERICA + 'Chihuahua'] = T7m;","Z[AMERICA + 'Coral_Harbour'] = T5m;","Z[AMERICA + 'Cordoba'] = T3m;","Z[AMERICA + 'Costa_Rica'] = T6m;","Z[AMERICA + 'Creston'] = T7m;","Z[AMERICA + 'Cuiaba'] = T4m;","Z[AMERICA + 'Curacao'] = T4m;","Z[AMERICA + 'Danmarkshavn'] = T0;","Z[AMERICA + 'Dawson'] = T8m;","Z[AMERICA + 'Dawson_Creek'] = T7m;","Z[AMERICA + 'Denver'] = T7m;","Z[AMERICA + 'Detroit'] = T5m;","Z[AMERICA + 'Dominica'] = T4m;","Z[AMERICA + 'Edmonton'] = T7m;","Z[AMERICA + 'Eirunepe'] = T4m;","Z[AMERICA + 'El_Salvador'] = T6m;","Z[AMERICA + 'Ensenada'] = T8m;","Z[AMERICA + 'Fort_Wayne'] = T5m;","Z[AMERICA + 'Fortaleza'] = T3m;","Z[AMERICA + 'Glace_Bay'] = T4m;","Z[AMERICA + 'Godthab'] = T3m;","Z[AMERICA + 'Goose_Bay'] = T4m;","Z[AMERICA + 'Grand_Turk'] = T5m;","Z[AMERICA + 'Grenada'] = T4m;","Z[AMERICA + 'Guadeloupe'] = T4m;","Z[AMERICA + 'Guatemala'] = T6m;","Z[AMERICA + 'Guayaquil'] = T5m;","Z[AMERICA + 'Guyana'] = T4m;","Z[AMERICA + 'Halifax'] = T4m;","Z[AMERICA + 'Havana'] = T5m;","Z[AMERICA + 'Hermosillo'] = T7m;","Z[AMERICA + 'Indiana/Indianapolis'] = T5m;","Z[AMERICA + 'Indiana/Knox'] = T6m;","Z[AMERICA + 'Indiana/Marengo'] = T5m;","Z[AMERICA + 'Indiana/Petersburg'] = T5m;","Z[AMERICA + 'Indiana/Tell_City'] = T6m;","Z[AMERICA + 'Indiana/Vevay'] = T5m;","Z[AMERICA + 'Indiana/Vincennes'] = T5m;","Z[AMERICA + 'Indiana/Winamac'] = T5m;","Z[AMERICA + 'Indianapolis'] = T5m;","Z[AMERICA + 'Inuvik'] = T7m;","Z[AMERICA + 'Iqaluit'] = T5m;","Z[AMERICA + 'Jamaica'] = T5m;","Z[AMERICA + 'Jujuy'] = T3m;","Z[AMERICA + 'Juneau'] = T9m;","Z[AMERICA + 'Kentucky/Louisville'] = T5m;","Z[AMERICA + 'Kentucky/Monticello'] = T5m;","Z[AMERICA + 'Knox_IN'] = T6m;","Z[AMERICA + 'Kralendijk'] = T4m;","Z[AMERICA + 'La_Paz'] = T4m;","Z[AMERICA + 'Lima'] = T5m;","Z[AMERICA + 'Los_Angeles'] = T8m;","Z[AMERICA + 'Louisville'] = T5m;","Z[AMERICA + 'Lower_Princes'] = T4m;","Z[AMERICA + 'Maceio'] = T3m;","Z[AMERICA + 'Managua'] = T6m;","Z[AMERICA + 'Manaus'] = T4m;","Z[AMERICA + 'Marigot'] = T4m;","Z[AMERICA + 'Martinique'] = T4m;","Z[AMERICA + 'Matamoros'] = T6m;","Z[AMERICA + 'Mazatlan'] = T7m;","Z[AMERICA + 'Mendoza'] = T3m;","Z[AMERICA + 'Menominee'] = T6m;","Z[AMERICA + 'Merida'] = T6m;","Z[AMERICA + 'Metlakatla'] = T8m;","Z[AMERICA + 'Mexico_City'] = T6m;","Z[AMERICA + 'Miquelon'] = T3m;","Z[AMERICA + 'Moncton'] = T4m;","Z[AMERICA + 'Monterrey'] = T6m;","Z[AMERICA + 'Montevideo'] = T3m;","Z[AMERICA + 'Montreal'] = T5m;","Z[AMERICA + 'Montserrat'] = T4m;","Z[AMERICA + 'Nassau'] = T5m;","Z[AMERICA + 'New_York'] = T5m;","Z[AMERICA + 'Nipigon'] = T5m;","Z[AMERICA + 'Nome'] = T9m;","Z[AMERICA + 'Noronha'] = T2m;","Z[AMERICA + 'North_Dakota/Beulah'] = T6m;","Z[AMERICA + 'North_Dakota/Center'] = T6m;","Z[AMERICA + 'North_Dakota/New_Salem'] = T6m;","Z[AMERICA + 'Ojinaga'] = T7m;","Z[AMERICA + 'Panama'] = T5m;","Z[AMERICA + 'Pangnirtung'] = T5m;","Z[AMERICA + 'Paramaribo'] = T3m;","Z[AMERICA + 'Phoenix'] = T7m;","Z[AMERICA + 'Port_of_Spain'] = T4m;","Z[AMERICA + 'Port-au-Prince'] = T5m;","Z[AMERICA + 'Porto_Acre'] = T4m;","Z[AMERICA + 'Porto_Velho'] = T4m;","Z[AMERICA + 'Puerto_Rico'] = T4m;","Z[AMERICA + 'Rainy_River'] = T6m;","Z[AMERICA + 'Rankin_Inlet'] = T6m;","Z[AMERICA + 'Recife'] = T3m;","Z[AMERICA + 'Regina'] = T6m;","Z[AMERICA + 'Resolute'] = T6m;","Z[AMERICA + 'Rio_Branco'] = T4m;","Z[AMERICA + 'Rosario'] = T3m;","Z[AMERICA + 'Santa_Isabel'] = T8m;","Z[AMERICA + 'Santarem'] = T3m;","Z[AMERICA + 'Santiago'] = T4m;","Z[AMERICA + 'Santo_Domingo'] = T4m;","Z[AMERICA + 'Sao_Paulo'] = T3m;","Z[AMERICA + 'Scoresbysund'] = T1m;","Z[AMERICA + 'Shiprock'] = T7m;","Z[AMERICA + 'Sitka'] = T9m;","Z[AMERICA + 'St_Barthelemy'] = T4m;","Z[AMERICA + 'St_Johns'] = '−03:30';","Z[AMERICA + 'St_Kitts'] = T4m;","Z[AMERICA + 'St_Lucia'] = T4m;","Z[AMERICA + 'St_Thomas'] = T4m;","Z[AMERICA + 'St_Vincent'] = T4m;","Z[AMERICA + 'Swift_Current'] = T6m;","Z[AMERICA + 'Tegucigalpa'] = T6m;","Z[AMERICA + 'Thule'] = T4m;","Z[AMERICA + 'Thunder_Bay'] = T5m;","Z[AMERICA + 'Tijuana'] = T8m;","Z[AMERICA + 'Toronto'] = T5m;","Z[AMERICA + 'Tortola'] = T4m;","Z[AMERICA + 'Vancouver'] = T8m;","Z[AMERICA + 'Virgin'] = T4m;","Z[AMERICA + 'Whitehorse'] = T8m;","Z[AMERICA + 'Winnipeg'] = T6m;","Z[AMERICA + 'Yakutat'] = T9m;","Z[AMERICA + 'Yellowknife'] = T7m;","Z[ANTARCTICA + 'Casey'] = T11;","Z[ANTARCTICA + 'Davis'] = T5;","Z[ANTARCTICA + 'DumontDUrville'] = T10;","Z[ANTARCTICA + 'Macquarie'] = T11;","Z[ANTARCTICA + 'Mawson'] = T5;","Z[ANTARCTICA + 'McMurdo'] = T12;","Z[ANTARCTICA + 'Palmer'] = T4m;","Z[ANTARCTICA + 'Rothera'] = T3m;","Z[ANTARCTICA + 'South_Pole'] = T12;","Z[ANTARCTICA + 'Syowa'] = T3;","Z[ANTARCTICA + 'Vostok'] = T6;","","Z[ASIA + 'Aden'] = T3;","Z[ASIA + 'Almaty'] = T6;","Z[ASIA + 'Amman'] = T2;","Z[ASIA + 'Anadyr'] = T12;","Z[ASIA + 'Aqtau'] = T5;","Z[ASIA + 'Aqtobe'] = T5;","Z[ASIA + 'Ashgabat'] = T5;","Z[ASIA + 'Ashkhabad'] = T5;","Z[ASIA + 'Baghdad'] = T3;","Z[ASIA + 'Bahrain'] = T3;","Z[ASIA + 'Baku'] = T4;","Z[ASIA + 'Bangkok'] = T7;","Z[ASIA + 'Beirut'] = T2;","Z[ASIA + 'Bishkek'] = T6;","Z[ASIA + 'Brunei'] = T8;","Z[ASIA + 'Calcutta'] = '+05:30';","Z[ASIA + 'Choibalsan'] = T8;","Z[ASIA + 'Chongqing'] = T8;","Z[ASIA + 'Chungking'] = T8;","Z[ASIA + 'Colombo'] = '+05:30';","Z[ASIA + 'Dacca'] = T6;","Z[ASIA + 'Damascus'] = T2;","Z[ASIA + 'Dhaka'] = T6;","Z[ASIA + 'Dili'] = T9;","Z[ASIA + 'Dubai'] = T4;","Z[ASIA + 'Dushanbe'] = T5;","Z[ASIA + 'Gaza'] = T2;","Z[ASIA + 'Harbin'] = T8;","Z[ASIA + 'Hebron'] = T2;","Z[ASIA + 'Ho_Chi_Minh'] = T7;","Z[ASIA + 'Hong_Kong'] = T8;","Z[ASIA + 'Hovd'] = T7;","Z[ASIA + 'Irkutsk'] = T9;","Z[ASIA + 'Istanbul'] = T2;","Z[ASIA + 'Jakarta'] = T7;","Z[ASIA + 'Jayapura'] = T9;","Z[ASIA + 'Jerusalem'] = T2;","Z[ASIA + 'Kabul'] = '+04:30';","Z[ASIA + 'Kamchatka'] = T12;","Z[ASIA + 'Karachi'] = T5;","Z[ASIA + 'Kashgar'] = T8;","Z[ASIA + 'Kathmandu'] = '+05:45';","Z[ASIA + 'Katmandu'] = '+05:45';","Z[ASIA + 'Kolkata'] = '+05:30';","Z[ASIA + 'Krasnoyarsk'] = T8;","Z[ASIA + 'Kuala_Lumpur'] = T8;","Z[ASIA + 'Kuching'] = T8;","Z[ASIA + 'Kuwait'] = T3;","Z[ASIA + 'Macao'] = T8;","Z[ASIA + 'Macau'] = T8;","Z[ASIA + 'Magadan'] = T12;","Z[ASIA + 'Makassar'] = T8;","Z[ASIA + 'Manila'] = T8;","Z[ASIA + 'Muscat'] = T4;","Z[ASIA + 'Nicosia'] = T2;","Z[ASIA + 'Novokuznetsk'] = T7;","Z[ASIA + 'Novosibirsk'] = T7;","Z[ASIA + 'Omsk'] = T7;","Z[ASIA + 'Oral'] = T5;","Z[ASIA + 'Phnom_Penh'] = T7;","Z[ASIA + 'Pontianak'] = T7;","Z[ASIA + 'Pyongyang'] = T9;","Z[ASIA + 'Qatar'] = T3;","Z[ASIA + 'Qyzylorda'] = T6;","Z[ASIA + 'Rangoon'] = '+06:30';","Z[ASIA + 'Riyadh'] = T3;","Z[ASIA + 'Saigon'] = T7;","Z[ASIA + 'Sakhalin'] = T11;","Z[ASIA + 'Samarkand'] = T5;","Z[ASIA + 'Seoul'] = T9;","Z[ASIA + 'Shanghai'] = T8;","Z[ASIA + 'Singapore'] = T8;","Z[ASIA + 'Taipei'] = T8;","Z[ASIA + 'Tashkent'] = T5;","Z[ASIA + 'Tbilisi'] = T4;","Z[ASIA + 'Tehran'] = '+03:30';","Z[ASIA + 'Tel_Aviv'] = T2;","Z[ASIA + 'Thimbu'] = T6;","Z[ASIA + 'Thimphu'] = T6;","Z[ASIA + 'Tokyo'] = T9;","Z[ASIA + 'Ujung_Pandang'] = T8;","Z[ASIA + 'Ulaanbaatar'] = T8;","Z[ASIA + 'Ulan_Bator'] = T8;","Z[ASIA + 'Urumqi'] = T8;","Z[ASIA + 'Vientiane'] = T7;","Z[ASIA + 'Vladivostok'] = T11;","Z[ASIA + 'Yakutsk'] = T10;","Z[ASIA + 'Yekaterinburg'] = T6;","Z[ASIA + 'Yerevan'] = T4;","Z[ATLANTIC + 'Azores'] = T1m;","Z[ATLANTIC + 'Bermuda'] = T4m;","Z[ATLANTIC + 'Canary'] = T0;","Z[ATLANTIC + 'Cape_Verde'] = T1m;","Z[ATLANTIC + 'Faeroe'] = T0;","Z[ATLANTIC + 'Faroe'] = T0;","Z[ATLANTIC + 'Jan_Mayen'] = T1;","Z[ATLANTIC + 'Madeira'] = T0;","Z[ATLANTIC + 'Reykjavik'] = T0;","Z[ATLANTIC + 'South_Georgia'] = T2m;","Z[ATLANTIC + 'St_Helena'] = T0;","Z[ATLANTIC + 'Stanley'] = T3m;","Z[AUSTRALIA + 'ACT'] = T10;","Z[AUSTRALIA + 'Adelaide'] = '+09:30';","Z[AUSTRALIA + 'Brisbane'] = T10;","Z[AUSTRALIA + 'Broken_Hill'] = '+09:30';","Z[AUSTRALIA + 'Canberra'] = T10;","Z[AUSTRALIA + 'Currie'] = T10;","Z[AUSTRALIA + 'Darwin'] = '+09:30';","Z[AUSTRALIA + 'Eucla'] = '+08:45';","Z[AUSTRALIA + 'Hobart'] = T10;","Z[AUSTRALIA + 'LHI'] = '+10:30';","Z[AUSTRALIA + 'Lindeman'] = T10;","Z[AUSTRALIA + 'Lord_Howe'] = '+10:30';","Z[AUSTRALIA + 'Melbourne'] = T10;","Z[AUSTRALIA + 'North'] = '+09:30';","Z[AUSTRALIA + 'NSW'] = T10;","Z[AUSTRALIA + 'Perth'] = T8;","Z[AUSTRALIA + 'Queensland'] = T10;","Z[AUSTRALIA + 'South'] = '+09:30';","Z[AUSTRALIA + 'Sydney'] = T10;","Z[AUSTRALIA + 'Tasmania'] = T10;","Z[AUSTRALIA + 'Victoria'] = T10;","Z[AUSTRALIA + 'West'] = T8;","Z[AUSTRALIA + 'Yancowinna'] = '+09:30';","Z[BRAZIL + 'Acre'] = T4m;","Z[BRAZIL + 'DeNoronha'] = T2m;","Z[BRAZIL + 'East'] = T3m;","Z[BRAZIL + 'West'] = T4m;","Z[CANADA + 'Atlantic'] = T4m;","Z[CANADA + 'Central'] = T6m;","Z[CANADA + 'Eastern'] = T5m;","Z[CANADA + 'East-Saskatchewan'] = T6m;","Z[CANADA + 'Mountain'] = T7m;","Z[CANADA + 'Newfoundland'] = '−03:30';","Z[CANADA + 'Pacific'] = T8m;","Z[CANADA + 'Saskatchewan'] = T6m;","Z[CANADA + 'Yukon'] = T8m;","Z[ETC + GMT] = T0;","Z[ETC + GMT + '+0'] = T0;","Z[ETC + 'UCT'] = T0;","Z[ETC + 'Universal'] = T0;","Z[ETC + 'UTC'] = T0;","Z[ETC + 'Zulu'] = T0;","Z[EUROPE + 'Amsterdam'] = T1;","Z[EUROPE + 'Andorra'] = T1;","Z[EUROPE + 'Athens'] = T2;","Z[EUROPE + 'Belfast'] = T0;","Z[EUROPE + 'Belgrade'] = T1;","Z[EUROPE + 'Berlin'] = T1;","Z[EUROPE + 'Bratislava'] = T1;","Z[EUROPE + 'Brussels'] = T1;","Z[EUROPE + 'Bucharest'] = T2;","Z[EUROPE + 'Budapest'] = T1;","Z[EUROPE + 'Chisinau'] = T2;","Z[EUROPE + 'Copenhagen'] = T1;","Z[EUROPE + 'Dublin'] = T0;","Z[EUROPE + 'Gibraltar'] = T1;","Z[EUROPE + 'Guernsey'] = T0;","Z[EUROPE + 'Helsinki'] = T2;","Z[EUROPE + 'Isle_of_Man'] = T0;","Z[EUROPE + 'Istanbul'] = T2;","Z[EUROPE + 'Jersey'] = T0;","Z[EUROPE + 'Kaliningrad'] = T3;","Z[EUROPE + 'Kiev'] = T2;","Z[EUROPE + 'Lisbon'] = T0;","Z[EUROPE + 'Ljubljana'] = T1;","Z[EUROPE + 'London'] = T0;","Z[EUROPE + 'Luxembourg'] = T1;","Z[EUROPE + 'Madrid'] = T1;","Z[EUROPE + 'Malta'] = T1;","Z[EUROPE + 'Mariehamn'] = T2;","Z[EUROPE + 'Minsk'] = T3;","Z[EUROPE + 'Monaco'] = T1;","Z[EUROPE + 'Moscow'] = T4;","Z[EUROPE + 'Nicosia'] = T2;","Z[EUROPE + 'Oslo'] = T1;","Z[EUROPE + 'Paris'] = T1;","Z[EUROPE + 'Podgorica'] = T1;","Z[EUROPE + 'Prague'] = T1;","Z[EUROPE + 'Riga'] = T2;","Z[EUROPE + 'Rome'] = T1;","Z[EUROPE + 'Samara'] = T4;","Z[EUROPE + 'San_Marino'] = T1;","Z[EUROPE + 'Sarajevo'] = T1;","Z[EUROPE + 'Simferopol'] = T2;","Z[EUROPE + 'Skopje'] = T1;","Z[EUROPE + 'Sofia'] = T2;","Z[EUROPE + 'Stockholm'] = T1;","Z[EUROPE + 'Tallinn'] = T2;","Z[EUROPE + 'Tirane'] = T1;","Z[EUROPE + 'Tiraspol'] = T2;","Z[EUROPE + 'Uzhgorod'] = T2;","Z[EUROPE + 'Vaduz'] = T1;","Z[EUROPE + 'Vatican'] = T1;","Z[EUROPE + 'Vienna'] = T1;","Z[EUROPE + 'Vilnius'] = T2;","Z[EUROPE + 'Volgograd'] = T4;","Z[EUROPE + 'Warsaw'] = T1;","Z[EUROPE + 'Zagreb'] = T1;","Z[EUROPE + 'Zaporozhye'] = T2;","Z[EUROPE + 'Zurich'] = T1;","Z[GMT] = T0;","Z[GMT + '+0'] = T0;","Z[GMT + '0'] = T0;","Z[GMT + '-0'] = T0;","Z[INDIAN + 'Antananarivo'] = T3;","Z[INDIAN + 'Chagos'] = T6;","Z[INDIAN + 'Christmas'] = T7;","Z[INDIAN + 'Cocos'] = '+06:30';","Z[INDIAN + 'Comoro'] = T3;","Z[INDIAN + 'Kerguelen'] = T5;","Z[INDIAN + 'Mahe'] = T4;","Z[INDIAN + 'Maldives'] = T5;","Z[INDIAN + 'Mauritius'] = T4;","Z[INDIAN + 'Mayotte'] = T3;","Z[INDIAN + 'Reunion'] = T4;","Z[MEXICO + 'BajaNorte'] = T8m;","Z[MEXICO + 'BajaSur'] = T7m;","Z[MEXICO + 'General'] = T6m;","Z[PACIFIC + 'Apia'] = T13;","Z[PACIFIC + 'Auckland'] = T12;","Z[PACIFIC + 'Chatham'] = '+12:45';","Z[PACIFIC + 'Chuuk'] = T10;","Z[PACIFIC + 'Easter'] = T6m;","Z[PACIFIC + 'Efate'] = T11;","Z[PACIFIC + 'Enderbury'] = T13;","Z[PACIFIC + 'Fakaofo'] = T13;","Z[PACIFIC + 'Fiji'] = T12;","Z[PACIFIC + 'Funafuti'] = T12;","Z[PACIFIC + 'Galapagos'] = T6m;","Z[PACIFIC + 'Gambier'] = T9m;","Z[PACIFIC + 'Guadalcanal'] = T11;","Z[PACIFIC + 'Guam'] = T10;","Z[PACIFIC + 'Honolulu'] = T10m;","Z[PACIFIC + 'Johnston'] = T10m;","Z[PACIFIC + 'Kiritimati'] = '+14:00';","Z[PACIFIC + 'Kosrae'] = T11;","Z[PACIFIC + 'Kwajalein'] = T12;","Z[PACIFIC + 'Majuro'] = T12;","Z[PACIFIC + 'Marquesas'] = '−09:30';","Z[PACIFIC + 'Midway'] = T11m;","Z[PACIFIC + 'Nauru'] = T12;","Z[PACIFIC + 'Niue'] = T11m;","Z[PACIFIC + 'Norfolk'] = '+11:30';","Z[PACIFIC + 'Noumea'] = T11;","Z[PACIFIC + 'Pago_Pago'] = T11m;","Z[PACIFIC + 'Palau'] = T9;","Z[PACIFIC + 'Pitcairn'] = T8m;","Z[PACIFIC + 'Pohnpei'] = T11;","Z[PACIFIC + 'Ponape'] = T11;","Z[PACIFIC + 'Port_Moresby'] = T10;","Z[PACIFIC + 'Rarotonga'] = T10m;","Z[PACIFIC + 'Saipan'] = T10;","Z[PACIFIC + 'Samoa'] = T11m;","Z[PACIFIC + 'Tahiti'] = T10m;","Z[PACIFIC + 'Tarawa'] = T12;","Z[PACIFIC + 'Tongatapu'] = T13;","Z[PACIFIC + 'Truk'] = T10;","Z[PACIFIC + 'Wake'] = T12;","Z[PACIFIC + 'Wallis'] = T12;","Z[PACIFIC + 'Yap'] = T10;","Z[US + 'Alaska'] = T9m;","Z[US + 'Aleutian'] = T10m;","Z[US + 'Arizona'] = T7m;","Z[US + 'Central'] = T6m;","Z[US + 'Eastern'] = T5m;","Z[US + 'East-Indiana'] = T5m;","Z[US + 'Hawaii'] = T10m;","Z[US + 'Indiana-Starke'] = T6m;","Z[US + 'Michigan'] = T5m;","Z[US + 'Mountain'] = T7m;","Z[US + 'Pacific'] = T8m;","Z[US + 'Pacific-New'] = T8m;","Z[US + 'Samoa'] = T11m;","","","strtotime.TIMEZONEMAP = Z;","","// Put in the Date namespace","Y.mix(Y.namespace(\"Date\"), strtotime);","","","","","}, '@VERSION@', {\"requires\": [\"yui-base\"]});"];
_yuitest_coverage["build/gallery-strtotime/gallery-strtotime.js"].lines = {"1":0,"4":0,"35":0,"111":0,"112":0,"113":0,"115":0,"116":0,"131":0,"132":0,"133":0,"135":0,"136":0,"150":0,"154":0,"155":0,"156":0,"157":0,"158":0,"173":0,"174":0,"176":0,"177":0,"179":0,"181":0,"183":0,"184":0,"186":0,"202":0,"204":0,"205":0,"206":0,"207":0,"211":0,"231":0,"233":0,"235":0,"238":0,"242":0,"245":0,"246":0,"247":0,"249":0,"267":0,"269":0,"270":0,"271":0,"272":0,"276":0,"293":0,"294":0,"295":0,"297":0,"313":0,"318":0,"319":0,"321":0,"325":0,"335":0,"336":0,"344":0,"346":0,"347":0,"349":0,"350":0,"352":0,"353":0,"354":0,"356":0,"357":0,"358":0,"366":0,"367":0,"368":0,"385":0,"388":0,"390":0,"392":0,"396":0,"397":0,"400":0,"404":0,"405":0,"407":0,"425":0,"428":0,"429":0,"431":0,"432":0,"434":0,"435":0,"436":0,"437":0,"439":0,"442":0,"457":0,"461":0,"462":0,"463":0,"464":0,"467":0,"486":0,"490":0,"491":0,"494":0,"497":0,"537":0,"545":0,"548":0,"551":0,"554":0,"557":0,"575":0,"580":0,"581":0,"582":0,"585":0,"586":0,"587":0,"591":0,"592":0,"593":0,"595":0,"596":0,"597":0,"600":0,"601":0,"605":0,"606":0,"607":0,"608":0,"612":0,"635":0,"638":0,"641":0,"647":0,"650":0,"653":0,"671":0,"676":0,"677":0,"709":0,"723":0,"738":0,"748":0,"749":0,"750":0,"761":0,"776":0,"789":0,"808":0,"828":0,"847":0,"848":0,"852":0,"854":0,"856":0,"858":0,"860":0,"862":0,"864":0,"866":0,"869":0,"870":0,"871":0,"873":0,"878":0,"879":0,"892":0,"915":0,"942":0,"961":0,"962":0,"966":0,"967":0,"969":0,"970":0,"973":0,"976":0,"977":0,"979":0,"981":0,"986":0,"987":0,"998":0,"1009":0,"1049":0,"1066":0,"1067":0,"1068":0,"1072":0,"1074":0,"1079":0,"1081":0,"1087":0,"1089":0,"1090":0,"1092":0,"1095":0,"1100":0,"1101":0,"1111":0,"1112":0,"1118":0,"1120":0,"1122":0,"1123":0,"1125":0,"1127":0,"1130":0,"1131":0,"1135":0,"1138":0,"1141":0,"1142":0,"1146":0,"1147":0,"1158":0,"1159":0,"1162":0,"1163":0,"1166":0,"1167":0,"1175":0,"1177":0,"1179":0,"1180":0,"1182":0,"1184":0,"1195":0,"1197":0,"1199":0,"1201":0,"1207":0,"1208":0,"1209":0,"1214":0,"1215":0,"1220":0,"1241":0,"1255":0,"1371":0,"1375":0,"1376":0,"1377":0,"1380":0,"1384":0,"1388":0,"1389":0,"1390":0,"1393":0,"1408":0,"1545":0,"1546":0,"1581":0,"1584":0,"1588":0,"1589":0,"1596":0,"1602":0,"1603":0,"1609":0,"1613":0,"1614":0,"1621":0,"1622":0,"1630":0,"1637":0,"1640":0,"1647":0,"1649":0,"1654":0,"1658":0,"1662":0,"1664":0,"1669":0,"1673":0,"1680":0,"1688":0,"1690":0,"1698":0,"1705":0,"1722":0,"1727":0,"1732":0,"1738":0,"1739":0,"1740":0,"1741":0,"1743":0,"1744":0,"1747":0,"1748":0,"1749":0,"1751":0,"1752":0,"1755":0,"1756":0,"1768":0,"1777":0,"1778":0,"1787":0,"1795":0,"1796":0,"1797":0,"1798":0,"1800":0,"1801":0,"1802":0,"1804":0,"1805":0,"1806":0,"1807":0,"1811":0,"1812":0,"1820":0,"1835":0,"1842":0,"1843":0,"1845":0,"1852":0,"1867":0,"1869":0,"1883":0,"1885":0,"1899":0,"1901":0,"1917":0,"1919":0,"1933":0,"1935":0,"1936":0,"1939":0,"1953":0,"1956":0,"1957":0,"1960":0,"1974":0,"1977":0,"1978":0,"1981":0,"1996":0,"2005":0,"2006":0,"2007":0,"2008":0,"2020":0,"2028":0,"2041":0,"2059":0,"2075":0,"2080":0,"2095":0,"2109":0,"2126":0,"2135":0,"2144":0,"2156":0,"2161":0,"2167":0,"2182":0,"2193":0,"2198":0,"2200":0,"2209":0,"2211":0,"2232":0,"2249":0,"2258":0,"2262":0,"2267":0,"2270":0,"2271":0,"2280":0,"2290":0,"2293":0,"2294":0,"2297":0,"2299":0,"2314":0,"2326":0,"2329":0,"2334":0,"2337":0,"2338":0,"2340":0,"2343":0,"2344":0,"2345":0,"2349":0,"2373":0,"2374":0,"2391":0,"2392":0,"2393":0,"2421":0,"2430":0,"2439":0,"2448":0,"2457":0,"2469":0,"2480":0,"2498":0,"2511":0,"2523":0,"2542":0,"2564":0,"2576":0,"2587":0,"2598":0,"2609":0,"2623":0,"2670":0,"2671":0,"2672":0,"2673":0,"2674":0,"2675":0,"2676":0,"2677":0,"2678":0,"2679":0,"2680":0,"2681":0,"2682":0,"2683":0,"2684":0,"2685":0,"2686":0,"2687":0,"2688":0,"2689":0,"2690":0,"2691":0,"2692":0,"2693":0,"2694":0,"2695":0,"2696":0,"2697":0,"2698":0,"2699":0,"2700":0,"2701":0,"2702":0,"2703":0,"2704":0,"2705":0,"2706":0,"2707":0,"2708":0,"2709":0,"2710":0,"2711":0,"2712":0,"2713":0,"2714":0,"2715":0,"2716":0,"2717":0,"2718":0,"2719":0,"2720":0,"2721":0,"2722":0,"2723":0,"2724":0,"2725":0,"2726":0,"2727":0,"2728":0,"2729":0,"2730":0,"2731":0,"2732":0,"2733":0,"2734":0,"2735":0,"2736":0,"2737":0,"2738":0,"2739":0,"2740":0,"2741":0,"2742":0,"2743":0,"2744":0,"2745":0,"2746":0,"2747":0,"2748":0,"2749":0,"2750":0,"2751":0,"2752":0,"2753":0,"2754":0,"2755":0,"2756":0,"2757":0,"2758":0,"2759":0,"2760":0,"2761":0,"2762":0,"2763":0,"2764":0,"2765":0,"2766":0,"2767":0,"2768":0,"2769":0,"2770":0,"2771":0,"2772":0,"2773":0,"2774":0,"2775":0,"2776":0,"2777":0,"2778":0,"2779":0,"2780":0,"2781":0,"2782":0,"2783":0,"2784":0,"2785":0,"2786":0,"2787":0,"2788":0,"2789":0,"2790":0,"2791":0,"2792":0,"2793":0,"2794":0,"2795":0,"2796":0,"2797":0,"2798":0,"2799":0,"2800":0,"2801":0,"2802":0,"2803":0,"2804":0,"2805":0,"2806":0,"2807":0,"2808":0,"2809":0,"2810":0,"2811":0,"2812":0,"2813":0,"2814":0,"2815":0,"2816":0,"2817":0,"2818":0,"2819":0,"2820":0,"2821":0,"2822":0,"2823":0,"2824":0,"2825":0,"2826":0,"2827":0,"2828":0,"2829":0,"2830":0,"2831":0,"2832":0,"2833":0,"2834":0,"2835":0,"2836":0,"2837":0,"2838":0,"2839":0,"2840":0,"2841":0,"2842":0,"2843":0,"2844":0,"2845":0,"2846":0,"2847":0,"2848":0,"2849":0,"2850":0,"2851":0,"2852":0,"2853":0,"2854":0,"2855":0,"2856":0,"2857":0,"2858":0,"2859":0,"2860":0,"2861":0,"2862":0,"2863":0,"2864":0,"2865":0,"2866":0,"2867":0,"2868":0,"2869":0,"2870":0,"2871":0,"2872":0,"2873":0,"2874":0,"2875":0,"2876":0,"2877":0,"2878":0,"2879":0,"2880":0,"2881":0,"2882":0,"2883":0,"2884":0,"2885":0,"2886":0,"2887":0,"2888":0,"2889":0,"2890":0,"2891":0,"2892":0,"2893":0,"2894":0,"2895":0,"2896":0,"2897":0,"2898":0,"2900":0,"2901":0,"2902":0,"2903":0,"2904":0,"2905":0,"2906":0,"2907":0,"2908":0,"2909":0,"2910":0,"2911":0,"2912":0,"2913":0,"2914":0,"2915":0,"2916":0,"2917":0,"2918":0,"2919":0,"2920":0,"2921":0,"2922":0,"2923":0,"2924":0,"2925":0,"2926":0,"2927":0,"2928":0,"2929":0,"2930":0,"2931":0,"2932":0,"2933":0,"2934":0,"2935":0,"2936":0,"2937":0,"2938":0,"2939":0,"2940":0,"2941":0,"2942":0,"2943":0,"2944":0,"2945":0,"2946":0,"2947":0,"2948":0,"2949":0,"2950":0,"2951":0,"2952":0,"2953":0,"2954":0,"2955":0,"2956":0,"2957":0,"2958":0,"2959":0,"2960":0,"2961":0,"2962":0,"2963":0,"2964":0,"2965":0,"2966":0,"2967":0,"2968":0,"2969":0,"2970":0,"2971":0,"2972":0,"2973":0,"2974":0,"2975":0,"2976":0,"2977":0,"2978":0,"2979":0,"2980":0,"2981":0,"2982":0,"2983":0,"2984":0,"2985":0,"2986":0,"2987":0,"2988":0,"2989":0,"2990":0,"2991":0,"2992":0,"2993":0,"2994":0,"2995":0,"2996":0,"2997":0,"2998":0,"2999":0,"3000":0,"3001":0,"3002":0,"3003":0,"3004":0,"3005":0,"3006":0,"3007":0,"3008":0,"3009":0,"3010":0,"3011":0,"3012":0,"3013":0,"3014":0,"3015":0,"3016":0,"3017":0,"3018":0,"3019":0,"3020":0,"3021":0,"3022":0,"3023":0,"3024":0,"3025":0,"3026":0,"3027":0,"3028":0,"3029":0,"3030":0,"3031":0,"3032":0,"3033":0,"3034":0,"3035":0,"3036":0,"3037":0,"3038":0,"3039":0,"3040":0,"3041":0,"3042":0,"3043":0,"3044":0,"3045":0,"3046":0,"3047":0,"3048":0,"3049":0,"3050":0,"3051":0,"3052":0,"3053":0,"3054":0,"3055":0,"3056":0,"3057":0,"3058":0,"3059":0,"3060":0,"3061":0,"3062":0,"3063":0,"3064":0,"3065":0,"3066":0,"3067":0,"3068":0,"3069":0,"3070":0,"3071":0,"3072":0,"3073":0,"3074":0,"3075":0,"3076":0,"3077":0,"3078":0,"3079":0,"3080":0,"3081":0,"3082":0,"3083":0,"3084":0,"3085":0,"3086":0,"3087":0,"3088":0,"3089":0,"3090":0,"3091":0,"3092":0,"3093":0,"3094":0,"3095":0,"3096":0,"3097":0,"3098":0,"3099":0,"3100":0,"3101":0,"3102":0,"3103":0,"3104":0,"3105":0,"3106":0,"3107":0,"3108":0,"3109":0,"3110":0,"3111":0,"3112":0,"3113":0,"3114":0,"3115":0,"3116":0,"3117":0,"3118":0,"3119":0,"3120":0,"3121":0,"3122":0,"3123":0,"3124":0,"3125":0,"3126":0,"3127":0,"3128":0,"3129":0,"3130":0,"3131":0,"3132":0,"3133":0,"3134":0,"3135":0,"3136":0,"3137":0,"3138":0,"3139":0,"3140":0,"3141":0,"3142":0,"3143":0,"3144":0,"3145":0,"3146":0,"3147":0,"3148":0,"3149":0,"3150":0,"3151":0,"3152":0,"3153":0,"3154":0,"3155":0,"3156":0,"3157":0,"3158":0,"3159":0,"3160":0,"3161":0,"3162":0,"3163":0,"3164":0,"3165":0,"3166":0,"3167":0,"3168":0,"3169":0,"3170":0,"3171":0,"3172":0,"3173":0,"3176":0,"3179":0};
_yuitest_coverage["build/gallery-strtotime/gallery-strtotime.js"].functions = {"_change:110":0,"_set:130":0,"_findLastDayOf:149":0,"_handleMeridian:171":0,"_lookupRelTextText:201":0,"_calculateRelTextValue:229":0,"_lookupRelTextUnit:266":0,"_setToDay:292":0,"_findWeekdayOf:312":0,"_findWeekOf:382":0,"_handleShortYear:423":0,"_handleMonthText:455":0,"_findDayNrFromWeekNr:484":0,"y:536":0,"m:539":0,"d:547":0,"h:550":0,"i:553":0,"s:556":0,"_processRelativeFixedHash:573":0,"y:634":0,"m:637":0,"d:640":0,"h:643":0,"i:649":0,"s:652":0,"timezoneChange:668":0,"incTime:748":0,"updateRel:847":0,"updateAbs:961":0,"Modificator:697":0,"strtotime:1045":0,"(anonymous 2):1370":0,"(anonymous 3):1383":0,"constructRegExp:1241":0,"finishRegExp:1545":0,"fn:1587":0,"specialFn:1601":0,"fn:1595":0,"fn:1608":0,"fn:1612":0,"fn:1620":0,"fn:1636":0,"fn:1639":0,"fn:1643":0,"fn:1660":0,"fn:1678":0,"fn:1720":0,"fn:1730":0,"fn:1765":0,"fn:1786":0,"fn:1817":0,"fn:1832":0,"fn:1849":0,"fn:1864":0,"fn:1880":0,"fn:1896":0,"fn:1914":0,"fn:1930":0,"fn:1950":0,"fn:1971":0,"fn:1993":0,"fn:2025":0,"fn:2038":0,"fn:2056":0,"fn:2072":0,"fn:2092":0,"fn:2106":0,"fn:2123":0,"fn:2141":0,"fn:2153":0,"fn:2177":0,"fn:2188":0,"fn:2206":0,"fn:2222":0,"fn:2239":0,"fn:2255":0,"fn:2277":0,"fn:2287":0,"fn:2311":0,"specialFn:2327":0,"fn:2323":0,"constructTests:1581":0,"finishTests:2373":0,"resetTests:2391":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-strtotime/gallery-strtotime.js"].coveredLines = 917;
_yuitest_coverage["build/gallery-strtotime/gallery-strtotime.js"].coveredFunctions = 86;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1);
YUI.add('gallery-strtotime', function (Y, NAME) {


_yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 4);
"use strict";
/**
 * Adds a strtotime method to Y.Date to provide powerful parsing of date/time
 * strings and calculation of relative dates.  Includes Internationalisation
 * support.
 *
 * php documentation is at http://php.net/manual/en/function.strtotime.php
 * and the C source that was used is at
 * http://svn.php.net/viewvc/php/php-src/trunk/ext/date/lib/parse_date.re?revision=320481&view=markup
 *
 * @author Matt Parker, Lamplight Database Systems Limited 2013
 * @licence BSD
 *
 *
 * @class Date
 * @static
 *
 */



//////////////////////////////////////////
//////////////////////////////////////////
// Private helper methods and minification
// constants
//





_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 35);
var INTL = Y.Intl ? Y.Intl.get("datatype-date-format") : {}, // Use Internationalised stuff if we can
    REGEXP = {}, // Holds component regex strings
    TESTS = [], // Holds regex tests and functions



    // For minification purposes:
    EUROPE = "Europe/",
    AMERICA = "America/",
    AFRICA = "Africa/",
    ANTARCTICA = "Antarctica/",
    ASIA = "Asia/",
    ATLANTIC = "Atlantic/",
    AUSTRALIA = "Australia",
    BRAZIL = "Brazil/",
    CANADA = "Canada/",
    ETC = "Etc./",
    INDIAN = "Indian/",
    MEXICO = "Mexico/",
    PACIFIC = "Pacific/",
    US = "US/",
    GMT = "GMT",
    T0 = "+00:00",
    T1 = "+01:00",
    T2 = "+02:00",
    T3 = "+03:00",
    T4 = "+04:00",
    T5 = "+05:00",
    T6 = "+06:00",
    T7 = "+07:00",
    T8 = "+08:00",
    T9 = "+09:00",
    T10 = "+10:00",
    T11 = "+11:00",
    T12 = "+12:00",
    T13 = "+13:00",
    T1m = "-01:00",
    T2m = "-02:00",
    T3m = "-03:00",
    T4m = "-04:00",
    T5m = "-05:00",
    T6m = "-06:00",
    T7m = "-07:00",
    T8m = "-08:00",
    T9m = "-09:00",
    T10m = "-10:00",
    T11m = "-11:00",
    Z,




    MSECS_IN_FORTNIGHT = 1209600000,
    MSECS_IN_WEEK = 604800000,
    MSECS_IN_DAY = 86400000,
    MSECS_IN_HOUR = 3600000,
    MSECS_IN_MINUTE = 60000,




    ///////////////////////////////////////////////////////////////////////
    // Utility methods:

    /**
     * @method _change
	 *
	 * Changes a timestamp by an amount
	 *
	 * @private
     * @param {Int} ts Timestamp
     * @param {Int} d Delta - how much to change
     * @param {String} method Method on Date to use
     * @return {Int} Timestamp
     */
    _change = function (ts, d, method) {
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_change", 110);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 111);
var tmp = new Date(ts);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 112);
if (tmp["set" + method] === undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 113);
return ts;
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 115);
tmp["set" + method](tmp["get" + method]() + d);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 116);
return tmp.getTime();
    },

    /**
     * @method _set
	 *
     * Sets a timstamp
	 *
	 * @private
     * @param {Int} ts Timestamp
     * @param {Int} val Value to set to
     * @param {String} methodMethod on Date to use
     * @return {Int} Timestamp
     */
    _set = function (ts, val, method) {
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_set", 130);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 131);
var tmp = new Date(ts);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 132);
if (tmp["set" + method] === undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 133);
return ts;
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 135);
tmp["set" + method](val);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 136);
return tmp.getTime();
    },


    /**
     * @method _findLastDayOf
	 *
     * Finds the last day of (e.g. 30) of a month
	 *
	 * @private
     * @param {Int} ts Timestamp
     * @return {Int} Days in the month
     */
    _findLastDayOf = function (ts) {
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_findLastDayOf", 149);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 150);
var tmp = new Date(ts),
            mon = tmp.getUTCMonth();

        // go to the first of the next month and subtract a day
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 154);
tmp.setUTCDate(1);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 155);
tmp.setUTCMonth((mon + 1) % 12);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 156);
ts = tmp.getTime() - MSECS_IN_DAY;
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 157);
tmp = new Date(ts);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 158);
return tmp.getUTCDate();
    },

    /**
     * @method _handleMeridian
	 *
     * Deals with am/pm, adding 12 hours if need be.
	 *
     * @private
     * @param {Int|String} hour Hours parsed from a date
     * @param {String} ampm The "am" or "pm" (or variations) parsed from the string
     * @return {Int} Corrected hours in 24-hour clock
     */
    _handleMeridian = function (hour, ampm) {

        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_handleMeridian", 171);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 173);
var c1;
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 174);
hour = parseInt(hour, 10);

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 176);
if (ampm === undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 177);
return hour;
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 179);
ampm = ampm.replace(".", "");

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 181);
c1 = ampm.substring(0, 1).toLowerCase();

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 183);
if (hour < 12 && c1 === "p") {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 184);
return hour + 12;
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 186);
return hour;

    },


    /**
     * Translates user-defined versions of 'next' to
     * default English so we know what they mean
     *
     * @method _lookupRelTextText
     * @private
     * @param {String} text Translated version of the string
     * @return {String} English version: next|first|previous|last
     *      If not found it will pass text straight back
     */
    _lookupRelTextText = function (text) {
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_lookupRelTextText", 201);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 202);
var i,
            rtt = strtotime.RELTEXTTEXT;
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 204);
for (i in rtt) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 205);
if (rtt.hasOwnProperty(i)) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 206);
if (rtt[i] === text) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 207);
return i;
                }
            }
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 211);
return text;
    },


    /**
     * Gets a numeric value from a string that's either in
     * RELTEXTEXT or RELTEXTNUMBER to add (or subtract).
     *
     * Note that 'first' always returns +1 - so can't be used
     * in matches like 'first day of March', as first there
     * does not mean +1 day.
     *
     *
     * @method _calculateRelTextValue
     * @param {String} text
     * @return {Int} As a number
     * @private
     */
    _calculateRelTextValue = function (text) {

        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_calculateRelTextValue", 229);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 231);
var index;

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 233);
switch (text) {
        case 'this':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 235);
return 0;

        case 'next':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 238);
return 1;

        case 'last':
        case 'previous':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 242);
return -1;

        default:
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 245);
index = strtotime.RELTEXTNUMBER.indexOf(text);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 246);
if (index !== -1) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 247);
return index + 1;
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 249);
return text;

        }
    },


    /**
     * Translates user-defined versions of time
     * units (hour, second, minute, year etc)
     * and returns an Enhlish version that
     * we know what it means
     *
     * @method _lookupRelTextUnit
     * @private
     * @param {String} text Parsed unit string
     * @return {String} English version
     */
    _lookupRelTextUnit = function (text) {
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_lookupRelTextUnit", 266);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 267);
var i,
            rtt = strtotime.RELTEXTUNIT;
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 269);
for (i in rtt) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 270);
if (rtt.hasOwnProperty(i)) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 271);
if (rtt[i].indexOf(text) !== -1) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 272);
return i;
                }
            }
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 276);
return text;
    },



    /**
     * Gets a timestamp for the nearest day of the week
     * from that passed, either forward or back
     *
     * @method _setToDay
     * @private
     * @param {Int} ts Timestamp
     * @param {Int} dayIndex Day of the week: Sunday = 0, Monday = 1
     * @param {Int} direction +1 = forward, -1 = last
     * @return {Int} Timestamp
     */
    _setToDay = function (ts, dayIndex, direction) {
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_setToDay", 292);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 293);
var tmp = new Date(ts);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 294);
while (tmp.getUTCDay() !== dayIndex) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 295);
tmp = new Date(tmp.getTime() + (direction * MSECS_IN_DAY));
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 297);
return tmp.getTime();
    },



    /**
     * Finds the 'third Wednesday' relative to timestamp
     *
     * @method _findWeekdayOf
     * @private
     * @param Int       Timestamp
     * @param {Object}  What to find
     *    @param {Int} dayIndex   Day of week (Sunday = 0) to find
     *    @param {Int} weekIndex  Which week to find (first = 1)
     */
    _findWeekdayOf = function (ts, tofind) {
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_findWeekdayOf", 312);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 313);
var tmp = new Date(ts),
            tmt,
            addWeeks;


        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 318);
if (tofind.weekIndex === undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 319);
tofind.weekIndex = "next";
        } else {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 321);
tofind.weekIndex = _lookupRelTextText(tofind.weekIndex);
        }

        // 'last' needs handling differently:
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 325);
if (tofind.weekIndex === 'last') {
            // this is the hard one:
            // find the last day of the month and do it again
            // backwarods
            /*tmp.setUTCDate(_findLastDayOf(ts));
            while (tmp.getUTCDay() !== tofind.dayIndex) {
                tmp = new Date(tmp.getTime() - 86400000);
            }
            return tmp.getTime();
            */
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 335);
tmt = tmp.setUTCDate(_findLastDayOf(ts));
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 336);
return _setToDay(tmt, tofind.dayIndex, -1);
        }

        //thisWeek = Math.floor(new Date(ts).getUTCDate() / 7);



        // now add on the right number of weeks
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 344);
switch (tofind.weekIndex) {
        case 'next':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 346);
addWeeks = 0;//thisWeek;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 347);
break;
        case 'previous':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 349);
addWeeks = -1;//thisWeek - 1;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 350);
break;
        case 'first':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 352);
tmp.setUTCDate(1);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 353);
addWeeks = 0;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 354);
break;
        default:
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 356);
tmp.setUTCDate(1);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 357);
addWeeks = parseInt(tofind.weekIndex, 10);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 358);
break;
        }

        // iterate through until we're on the correct day
        /*while (tmp.getUTCDay() !== tofind.dayIndex) {
            tmp = new Date(tmp.getTime() + 86400000);
        }*/

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 366);
tmt = _setToDay(ts, tofind.dayIndex, 1);// tmp.getTime();
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 367);
tmt = tmt + (MSECS_IN_WEEK * addWeeks);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 368);
return tmt;
    },



    /**
     * Moves the date first|last|next|previous week
     *
     * @method _findWeekOf
     * @private
     * @param {Int} ts Timestamp
     * @param {String} Change
     * @return {Int} Timestamp
     */
    _findWeekOf = function (ts, change, changeToMonday) {

        // need to set the day of week to a Monday
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_findWeekOf", 382);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 385);
var isMonday = (new Date(ts).getUTCDay() === 1),
            inc = (isMonday && changeToMonday ? MSECS_IN_DAY : 0);

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 388);
change = _lookupRelTextText(change);

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 390);
switch (change) {
        case 'next':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 392);
return _setToDay(ts + inc, 1, 1);

        case 'last':
        case 'previous':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 396);
ts = ts - MSECS_IN_WEEK; // go back a week
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 397);
return _setToDay(ts - inc, 1, -1);

        case 'this':
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 400);
return _setToDay(ts, 1, -1);

        default:
            // change may be a number
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 404);
if (Y.Lang.isNumber(change)) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 405);
return ts + (change * MSECS_IN_WEEK);
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 407);
return false;

        }

    },

    /**
     * Handles two-digit years, turning them into 4 digits
     * If yr < 70 it'll add on 2000
     * Otherwise it'll add on 1900
     *
     * @method _handleShortYear
     * @private
     * @param {Int} yr Year to process
     * @return {int} Four-digit year
     */
    _handleShortYear = function (yr) {

        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_handleShortYear", 423);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 425);
var strYr,
            ret;

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 428);
yr = parseInt(yr, 10);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 429);
strYr = String(yr);

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 431);
if (strYr.length >= 4) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 432);
return yr;
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 434);
ret = yr;
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 435);
if (yr < 100) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 436);
if (yr < 70) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 437);
ret = yr + 2000;
            } else {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 439);
ret = yr + 1900;
            }
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 442);
return ret;
    },


    /**
     * Handles text month, looking it up in the original arrays
     * to get the (human - 1-based) month number
     *
     * @method _handleMonthText
     * @private
     * @param {String} res Match from regexp
     * @return {int} Month number (in human terms - Jan = 1)
     */
    _handleMonthText = function (res) {

        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_handleMonthText", 455);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 457);
var m,
            search = ['MONTHFULL', 'MONTHABBR', 'MONTHROMAN'],
            i = 0;

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 461);
for (i = 0; i < 3; i = i + 1) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 462);
m = strtotime[search[i]].indexOf(res);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 463);
if (m !== -1) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 464);
return m;
            }
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 467);
return false;

    },


    /**
     * Calculates the day number in the year from the weeknumber
     *
     * http://fossies.org/dox/php-5.3.20-src/date_2lib_2dow_8c_source.html#l00130
     *
     * @method _findDayNrFromWeekNr
     * @private
     * @param {Int} year
     * @param {Int} weekNumber
     * @param {Int} dayNumber
     * @return {Int} Day of the year
     */
    _findDayNrFromWeekNr = function (year, weekNumber, dayNumber) {
        /* Figure out the dayofweek for y-1-1 */
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_findDayNrFromWeekNr", 484);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 486);
var date1 = new Date(year, 0, 1),
            dow = date1.getUTCDay(),
            day;

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 490);
if (dow === 0) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 491);
dow = 7;
        }
        /* then use that to figure out the offset for day 1 of week 1 */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 494);
day = -(dow > 4 ? dow - 7 : dow);

        /* Add weeks and days */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 497);
return day + ((weekNumber - 1) * 7) + dayNumber + 1;
    },



    /**
     * Hash of periods and the number of milli-seconds in each
     * @private
     * @property _timeList
     * @type {Object}
     * @private
     */
    _timeList = {
        'fortnight': MSECS_IN_FORTNIGHT,
        'week': MSECS_IN_WEEK,
        'day': MSECS_IN_DAY,
        'hour': MSECS_IN_HOUR,
        'minute': MSECS_IN_MINUTE,
        'second': 1000
    },



    /**
     * Makes relative changes to different components of the date
     *
     * @private
     * @property relChange
     * @property relChange.y {Function}
     * @property relChange.m {Function}
     * @property relChange.d {Function}
     * @property relChange.h {Function}
     * @property relChange.i {Function}
     * @property relChange.s {Function}
     *      @param {Int} ts Timestamp to start with
     *      @param {Int} d Amount to change
     *      @return {Int} New timestamp
     */
    relChange = {
        y: function (ts, d) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "y", 536);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 537);
return _change(ts, d, 'UTCFullYear');
        },
        m: function (ts, d) {
            // change the years:
            /*var years = (d === 0 ? 0 : (Math.abs(d)/d) * Math.floor(Math.abs(d) / 12));
            if (years !== 0) {
                ts = _change(ts, years, 'UTCFullYear');
            }*/
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "m", 539);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 545);
return _change(ts, d, 'UTCMonth');
        },
        d: function (ts, d) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "d", 547);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 548);
return ts + (d * MSECS_IN_DAY); // milliseconds in a day
        },
        h: function (ts, d) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "h", 550);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 551);
return ts + (d * MSECS_IN_HOUR); // milliseconds in an hour
        },
        i: function (ts, d) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "i", 553);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 554);
return ts + (d * MSECS_IN_MINUTE); // milliseconds in a minute
        },
        s: function (ts, d) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "s", 556);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 557);
return ts + (d * 1000);
        }
    },




    /**
     * Processes any relative changes held in mods.relativeFixedHash
     *
     * @method _processRelativeFixedHash
     * @param {Int} ts Timestampe
     * @param {Object} oChange   Change(s) to make
     * @return {Int} Timestamp
     * @private
     */
    _processRelativeFixedHash = function (ts, oChange, dir) {

        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "_processRelativeFixedHash", 573);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 575);
var num,
            i;


        // Work out the 'first Wednesday' type modifiers
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 580);
if (oChange.weekdayOf !== undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 581);
ts = _findWeekdayOf(ts, oChange.weekdayOf);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 582);
return ts;
        }
        // Work out 'last week' type modifier
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 585);
if (oChange.week !== undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 586);
ts = _findWeekOf(ts, oChange.week, true);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 587);
return ts;
        }

        // tricky ones
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 591);
if (oChange.year !== undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 592);
num = dir * _calculateRelTextValue(oChange.year);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 593);
ts = relChange.y(ts, num);
        }
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 595);
if (oChange.month !== undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 596);
num = dir * _calculateRelTextValue(oChange.month);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 597);
ts = relChange.m(ts, num);
        }

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 600);
if (oChange.weekKeepDay !== undefined) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 601);
ts = _findWeekOf(ts, dir * oChange.weekKeepDay, false);
        }

        // days, weeks, hours etc
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 605);
for (i in _timeList) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 606);
if (_timeList.hasOwnProperty(i) && oChange[i] !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 607);
num = dir * _calculateRelTextValue(oChange[i]);
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 608);
ts = ts + (num * _timeList[i]);
            }
        }

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 612);
return ts;
    },



    /**
     * Sets different components of the date
     *
     * @private
     * @property absChange
     * @property absChange.y {Function}
     * @property absChange.m {Function}
     * @property absChange.d {Function}
     * @property absChange.h {Function}
     * @property absChange.i {Function}
     * @property absChange.s {Function}
     *      @private
     *      @param {Int} ts Timestamp to start with
     *      @param {Int} val New value
     *      @return {Int} New timestamp
     */
    absChange = {
        y: function (ts, val) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "y", 634);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 635);
return _set(ts, val, 'UTCFullYear');
        },
        m: function (ts, val) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "m", 637);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 638);
return _set(ts, val, 'UTCMonth');
        },
        d: function (ts, val) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "d", 640);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 641);
return _set(ts, val, 'UTCDate');
        },
        h: function (ts, val) {/*
            if (fixTime === true) {
                return false;
            }*/
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "h", 643);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 647);
return _set(ts, val, 'UTCHours');
        },
        i: function (ts, val) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "i", 649);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 650);
return _set(ts, val, 'UTCMinutes');
        },
        s: function (ts, val) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "s", 652);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 653);
return _set(ts, val, 'UTCSeconds');
        }
    },


    /**
     * Alters the timestamp depending on the timezone parsed
     * from the string
     *
     * @method timezoneChange
     * @private
     * @param {Int} ts Timestamp
     * @param {String} tz Timezone string
     * @return {Int} Timestamp
     */
    timezoneChange = function (ts, tz) {

        // val should be +02:30 format
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "timezoneChange", 668);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 671);
var sign = tz.substring(0, 1),
            parts = tz.substring(1).split(":"),
            h = parseInt(parts[0], 10),
            i = parseInt(parts[1], 10),
            mult = (sign === "+" ? -1 : 1);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 676);
ts = relChange.h(ts, (mult * h));
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 677);
return relChange.i(ts, (mult * i));
    },




    /**
     * Used internally by the function to store changes as they are parsed
     * from the text.  This cannot be instantiated directly: it's created
     * by the strtotime function and passed to the test functions.
     *
     * As the string is parsed by srttotime, any relative (e.g. "-1 day")
     * or absolute changes ("noon") are held in the Modificator instance.
     * Once parsing is complete, the stored changes are processed
     * in the correct order to calculate the return timestamp.
	 *
	 *
     * @private
     *
     */
    Modificator = function () {

        /**
         * Whether times are fixed (ie may not be changed by subsequent terms)
         * by a particular statement
         *
         * @property fixTime
         * @type {Boolean}
         * @default False
         * @private
         *
         */
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "Modificator", 697);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 709);
this.fixTime = false;
        /**
         * Whether dates are fixed (ie may not be changed by subsequent terms)
         * by a particular statement
         *
         * @property fixDate
         * @type {Object}
         * @default {
                    y: false,
                    m: false,
                    d: false
                }
         * @private
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 723);
this.fixDate = {
            y: false,
            m: false,
            d: false
        };

        /**
         * Count of number of times time has been set.
         *
         * @property hasTime
         * @type {Int}
         * @default 0
         * @private
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 738);
this.hasTime = 0;

        /**
         * Increments this.hasTime by 1
         *
         * @method incTime
         * @return {Int} New value of this.hasTime
         * @private
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 748);
this.incTime = function () {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "incTime", 748);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 749);
this.hasTime = this.hasTime + 1;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 750);
return this.hasTime;
        };

        /**
         * Count of number of times date has been set.
         * @property hasDate
         * @type {Int}
         * @default 0
         * @private
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 761);
this.hasDate = 0;


        /**
         * A list of relative (e.g. "-1 day") changes to make,
         * in the order that they are found in the statement.
         * Indexes in the array are the position that the test string
         * was found in the original string passed to strtotime()
         *
         * @property orderedRelChanges
         * @type {Array}
         * @default []
         * @private
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 776);
this.orderedRelChanges = [];
        /**
         * A list of absolute (e.g. "noon") changes to make,
         * in the order that they are found in the statement.
         * Indexes in the array are the position that the test string
         * was found in the original string passed to strtotime()
         *
         * @property orderedAbsChanges
         * @type {Array}
         * @default []
         * @private
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 789);
this.orderedAbsChanges = [];


        /**
         * 'Model' storage for relative changes to dates/times
         *
         * @property relativeHash
         * @type {Object}
         * @private
         * @default  {
            y: 0,
            m: 0,
            d: 0,
            h: 0,
            i: 0,
            s: 0
           };
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 808);
this.relativeHash = {
            y: 0,
            m: 0,
            d: 0,
            h: 0,
            i: 0,
            s: 0
        };

        /**
         * Storage for 'weekday of' type statements, that will
         * later on need other changes to be resolved before this
         * can be.
         *
         * @property relativeFixedHash
         * @type {Object}
         * @private
         * @default {weekdayOf: undefined}
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 828);
this.relativeFixedHash = {
            weekdayOf: undefined,
            week: undefined
        };

        /**
         * Processes and stores relative changes to dates or times.
         * This (along with updateAbs()) are the main methods to use
         * in test -passing functions
         *
         * @method updateRel
         * @private
         * @param {Object}   Properties to change
         * @param {Boolean}  Whether to add to existing (true) or set (default).
         *                      In some cases we want to make culmulative changes
         * @param {Int}      Index that the test string was found in the
         *                      original string
         * @return {Object}  Object literal that we've stored
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 847);
this.updateRel = function (oChange, addOrSet, index) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "updateRel", 847);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 848);
var i,
                c,
                rH = Y.clone(this.relativeHash);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 852);
for (i in oChange) {

                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 854);
if (oChange.hasOwnProperty(i)) {

                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 856);
if (i === "weekdayOf") {

                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 858);
this.relativeFixedHash.weekdayOf = oChange[i];

                    } else {_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 860);
if (i === "week") {

                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 862);
this.relativeFixedHash.week = oChange[i];

                    } else {_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 864);
if (i === "relative") {

                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 866);
this.relativeFixedHash = Y.merge(this.relativeFixedHash, oChange[i]);

                    } else {
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 869);
c = parseInt(oChange[i], 10);
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 870);
if (addOrSet === true) {
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 871);
rH[i] += c;
                        } else {
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 873);
rH[i] = c;
                        }
                    }}}
                }
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 878);
this.orderedRelChanges[index] = rH;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 879);
return rH;
        };


        /**
         * The direction (in time) relative changes should be made:
         * +1 => into the future, -1 into the past
         *
         * @property relativeDirection
         * @type {Int}
         * @private
         * @default 1
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 892);
this.relativeDirection = 1;


        /**
         * 'Model' storage for absolute changes to dates/times
         *
         * @property absoluteHash
         * @type {Object}
         * @private
         * @default  {
            y: undefined,
            m: undefined,
            d: undefined,
            h: undefined,
            i: undefined,
            s: undefined,
            z: undefined,
            fixTime: false,
            fixDate: false,
            specialFn: undefined
           };
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 915);
this.absoluteHash = {
            y: undefined,
            m: undefined,
            d: undefined,
            h: undefined,
            i: undefined,
            s: undefined,
            z: undefined,
            fixTime: false,
            fixDate: false,
            specialFn: undefined
        };

        /**
         * Storage for 'last day' type statements, that will
         * later on need other changes to be resolved before this
         * can be.
         *
         * @property absoluteFixedHash
         * @type {Object}
         * @private
         * @default {
            lastDay: undefined,
            firstDay: undefined
           }
         *
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 942);
this.absoluteFixedHash = {
            lastDay: undefined,
            firstDay: undefined
        };

        /**
         * Processes and stores absolute changes to dates or times.
         * This (along with updateRel()) are the main methods to use
         * in test -passing functions
         *
         * @method updateAbs
         * @private
         * @param {Object}   Properties to change
         * @param {Boolean}  Whether to add to existing (true) or set (default).
         *                      In some cases we want to make culmulative changes
         * @param {Int}      Index that the test string was found in the
         *                      original string
         * @return {Object}  Object literal that we've stored
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 961);
this.updateAbs = function (oChange, addOrSet, index) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "updateAbs", 961);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 962);
var i,
                c,
                aH = Y.clone(this.absoluteHash);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 966);
for (i in oChange) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 967);
if (oChange.hasOwnProperty(i)) {

                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 969);
if (i === "fixTime" || i === "fixDate" || i === "specialFn" || i === "z") {
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 970);
aH[i] = oChange[i];
                    } else {

                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 973);
c = parseFloat(oChange[i]);


                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 976);
if (addOrSet === true && aH[i] !== undefined) {
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 977);
aH[i] += c;
                            // need to remember this for next time.
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 979);
this.absoluteHash[i] = true;
                        } else {
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 981);
aH[i] = c;
                        }
                    }
                }
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 986);
this.orderedAbsChanges[index] = aH;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 987);
return aH;
        };


        /**
         * A list of keys that have matched OK
         *
         * @property matchedKeys
         * @type Array
         * @private
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 998);
this.matchedKeys = [];


        /**
         * The timezone string parsed from the input string
         *
         * @property timezoneString
         * @private
         * @type {String}
         * @default ""
         */
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1009);
this.timezoneString = "";


    },





    /**
     *
     * Parses English (or other languages) date-related sentences into
     * a timestamp.  A wide range of formats are supported, as is
     * relative formats.
     *
     * Note that to preserve compatability with php (from which this is ported)
     * timestamps are in seconds, not milliseconds.
     *
     * See http://php.net/manual/en/function.strtotime.php for the php write-up
     *
     * @example
     *  <code>Y.Date.strtotime("2012-05-02"); </code><br/>
     *  <code>Y.Date.strtotime("2/5/2012 5.15pm") </code><br/>
     *  <code>Y.Date.strtotime("next Thursday", 1360022400);</code><br/>
     *  <code>Y.Date.strtotime("+3 months and 2 days", 1360022400);</code><br/>
     *
     * @method strtotime
     * @for Date
     * @static
     * @public
     *
     * @param {String} time Date and/or modifier(s)
     * @param {Int} [baseTimestamp] Timestamp (in seconds)
     * @return {Int}    Parsed timestamp (in seconds) or false if there was an error
     *
     */
    strtotime = function (time, baseTimestamp) {


        //// Define variables
        _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "strtotime", 1045);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1049);
var ms = baseTimestamp * 1000 || new Date().getTime(),
            copyTime,

            // This stores the changes we want to make
            mods = new Modificator(),

            // used in the loop
            i = 0,
            j = 0,
            thisChange,
            test,
            ignoreInAbs,
            index,
            reResult;


        // Build the regexp and tests if needed
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1066);
if (TESTS.length === 0) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1067);
REGEXP = strtotime.finishRegExp(strtotime.constructRegExp());
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1068);
TESTS = strtotime.finishTests(REGEXP, strtotime.constructTests(REGEXP));
        }


        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1072);
time = Y.Lang.trim(time);

        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1074);
copyTime = time;


        // Go through, looking for the relevant regexps
        // and acting accordingly
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1079);
for (i = 0; i < TESTS.length; i = i + 1) {

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1081);
test = TESTS[i];

            // spaces are added because we put them on the regexs
            // and this is easier than detecting start/end of strings

            // The same rule may match more than once so we keep going until it's done.
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1087);
while ((reResult = test.re.exec(" " + copyTime + " ")) !== null) {

                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1089);
index = test.re.exec(" " + time + " ").index;
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1090);
test.fn.call(undefined, reResult, index, mods);

                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1092);
mods.matchedKeys.push(test.key);

                // remove the matched string from our copy.
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1095);
copyTime = copyTime.replace(Y.Lang.trim(reResult[0]), "");

            }

            // Are we there yet?
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1100);
if (Y.Lang.trim(copyTime) === "") {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1101);
break;
            }

        }


        // Error conditions

        // Unexpected characters left after all our matching?
        // That's an error.
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1111);
if (Y.Lang.trim(copyTime) !== '') {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1112);
return false;
        }



        // We'll handle these things separately
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1118);
ignoreInAbs = ['specialFn', 'lastDay', 'firstDay', 'fixTime', 'fixDate'];
        // Now apply absolute changes
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1120);
for (j = 0; j < mods.orderedAbsChanges.length; j = j + 1) {

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1122);
thisChange = mods.orderedAbsChanges[j];
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1123);
if (thisChange !== undefined) {

                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1125);
for (i in thisChange) {

                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1127);
if (thisChange.hasOwnProperty(i) && ignoreInAbs.indexOf(i) === -1 && thisChange[i] !== undefined) {

                        // can't change fixed times
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1130);
if (i === 'h' && mods.fixTime === true) {
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1131);
return false;
                        }

                        // not an error but we skip over days if they've been fixed
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1135);
if (!(i === 'd' && mods.fixDate.d === true)) {

                            // Make the actual change
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1138);
ms = absChange[i](ms, thisChange[i]);

                            // OK, that change did fix the day, so we remember that
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1141);
if (thisChange.fixDate.d === true) {
                                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1142);
mods.fixDate.d = true;
                            }

                            // An error occurred
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1146);
if (ms === false) {
                                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1147);
return false;
                            }

                        }

                    }
                }


                // If this change has the effect of fixing time (ie it shouldn't be changed again)
                // we need to remember this:
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1158);
if (thisChange.fixTime === true) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1159);
mods.fixTime = true;
                }
                // specialFn is called after everything else
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1162);
if (thisChange.specialFn !== undefined) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1163);
ms = thisChange.specialFn(ms, thisChange);
                }
                // an error was detected by specialFn
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1166);
if (ms === false) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1167);
return false;
                }
            }
        }



        // Now apply relativeHash changes
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1175);
for (j = 0; j < mods.orderedRelChanges.length; j = j + 1) {

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1177);
thisChange = mods.orderedRelChanges[j];

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1179);
if (thisChange !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1180);
for (i in thisChange) {

                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1182);
if (thisChange.hasOwnProperty(i) && ['weekdayOf', 'week', 'relative'].indexOf(i) === -1 && thisChange[i] !== 0) {

                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1184);
ms = relChange[i](ms, mods.relativeDirection * thisChange[i]);

                    }
                }
            }
        }


        // More complex changes that need the above to complete first

        // last/first day:
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1195);
if (mods.absoluteFixedHash.lastDay === 1) {
            // find date of last day of this month
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1197);
ms = absChange.d(ms, _findLastDayOf(ms));

        } else {_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1199);
if (mods.absoluteFixedHash.firstDay === 1) {
            // set to the first day
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1201);
ms = absChange.d(ms, 1);

        }}


        // Do any final relative changes:
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1207);
ms = _processRelativeFixedHash(ms, mods.relativeFixedHash, mods.relativeDirection);
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1208);
if (ms === false) {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1209);
return false;
        }


        // Finally do timezone correction
        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1214);
if (mods.timezoneString !== '') {
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1215);
ms = timezoneChange(ms, mods.timezoneString);
        }



        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1220);
return Math.floor(ms / 1000);

    };









/**
 * @method strtotime.constructRegExp
 * Builds up a set of strings that will be used in regex constructor in
 * the tests.  This happens once, the first time the strtotime function
 * is used.
 * @protected
 * @static
 * @return {Object}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1241);
strtotime.constructRegExp = function () {

    ///////////////////////////////////////////////////////////////////////
    // Regexps are basically copied from
    // http://svn.php.net/viewvc/php/php-src/trunk/ext/date/lib/parse_date.re?revision=320481&view=markup
    // line 875 onwards
    //
    // There's some changes to use Y.Intl, and other minor changes to
    // use existing definitions to save some typing.  There's also extra brackets
    // so we can get the values found and parse them.
    //
    // These are expressed as strings here, as they are composed as we go down,
    // so they're only made into RegExps later.

    _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "constructRegExp", 1241);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1255);
var space = '[ \t]+',
        frac = '[.]([0-9]+)',
        ago = strtotime.AGO,
        hour24 = '(2[0-4]|[01]?[0-9])',
        hour24lz = '(2[0-4]|[01][0-9])',
        hour12 = '(1[0-2]|0?[1-9])',
        minute = '([0-5]?[0-9])',
        minutelz = '([0-5][0-9])',
        second = '([0-5]?[0-9]|60)',
        secondlz = '([0-5][0-9]|60)',
        // The Internationalised meridian match isn't quite the same, as we can't assume
        // we can mix cases or add full stops.  So it just looks for any of the upper- or lower-
        // case versions in INTL.P and INTL.p
        meridian = strtotime.AMPM, // + space,
        tz = '[A-Za-z]+([_\\/-][A-Za-z]+)+|\\(? [A-Za-z]{1,6}\\)?',
        tzcorrection = 'GMT?([+-]' + hour24 + ':?' + minute + '?)',

        daysuf = '(' + strtotime.DAYSUFFIXES.join('|') + ')',

        month = '(1[0-2]|0?[0-9])',
        day = '((3[0-1])|([0-2]?[0-9]))' + daysuf + '?',
        year = '([0-9]{1,4})',
        year2 = '([0-9]{2})',
        year4 = '([0-9]{4})',
        year4withsign = '([+-]?[0-9]{4})',

        dayofyear = '(00[1-9]|0[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-6])',
        weekofyear = '(0[1-9]|[1-4][0-9]|5[0-3])',
        monthlz = '(0[0-9]|1[0-2])',
        daylz = '(0[0-9]|[1-2][0-9]|3[01])',

        // Use Internationalisation to get lang pack
        dayfull = strtotime.DAYFULL.join('|'),// : 'sunday|monday|tuesday|wednesday|thursday|friday|saturday',
        dayabbr = strtotime.DAYABBR.join('|'),// : 'sun|mon|tue|wed|thu|fri|sat|sun',
        dayspecial = strtotime.DAYSPECIAL.join('|') || 'weekday|weekdays',  // apparently no INTL version of this
        daytext = '(' + dayfull + '|' + dayabbr + '|' + dayspecial + ')',

        monthfull = strtotime.MONTHFULL.join('|'),
        monthabbr = strtotime.MONTHABBR.join('|'),
        monthroman = strtotime.MONTHROMAN.join('|'),
        monthtext = '((' + monthfull + ')|(' + monthabbr + ')|(' + monthroman + '))',

        // Time
        timetiny12 = hour12 + '(' + space + ')?' + meridian,
        timeshort12 = hour12 + '[:.]' + minutelz + '(' + space + ')?' + meridian,
        timelong12 = hour12 + '[:.]' + minute + '[:.]' + secondlz + '(' + space + ')?' + meridian,

        timeshort24 = '(t)?' + hour24 + '[:.]' + minute,
        timelong24 = timeshort24 + '[:.]' + second,
        iso8601long = timelong24 + frac,

        iso8601normtz = timeshort24 + '[:.]' + secondlz + '(' + space + ')?' + '(' + tzcorrection + '|' + tz + ')',

        gnunocolon = '(t)?' + hour24lz + minutelz,
        gnunocolont = 't' + hour24lz + minutelz,
        iso8601nocolon = '(t)?' + hour24lz + minutelz + secondlz,

        // Dates
        americanshort = month + '\/' + day,
        american = americanshort + '\/' + year,
        iso8601dateslash = year4 + '\/' + monthlz + '\/' + daylz + '\/?',
        dateslash = year4 + '\/' + month + '\/' + day,
        iso8601date4 = year4withsign + '-' + monthlz + '-' + daylz,
        iso8601date2 = year2 + '-' + monthlz + '-' + daylz,
        gnudateshorter = year4 + '-' + month,
        gnudateshort = year + '-' + month + '-' + day,
        pointeddate4 = day + '[.\t-]' + month + '[.-]' + year4,
        pointeddate2 = day + '[.\t-]' + month + '[.]' + year2,
        datefull = day + '([ \t.-])*' + monthtext + '([ \t.-])*' + year,
        datenoday = monthtext + '([ \t.-])*' + year4,
        datenodayrev = year4 + '([ \t.-])*' + monthtext,
        datetextual = monthtext + '([ \t.-])*' + day + '[,.stndrh\t ]+' + year,
        datenoyear = monthtext + '([ \t.-])*' + day + '[,.stndrh\t ]*', // why is this one finish with * and above is +
        datenoyearrev = day + '([ \t.-])*' + monthtext,
        datenocolon = year4 + monthlz + daylz,

        // Special formats
        soap = year4 + '-' + monthlz + '-' + daylz + 'T' + hour24lz + ':' + minutelz + ':' + secondlz + frac + tzcorrection + '?',
        xmlrpc = year4 + monthlz + daylz + 'T' + hour24 + ':' + minutelz + ':' + secondlz,
        xmlrpcnocolon = year4 + monthlz + daylz + 't' + hour24 + minutelz + secondlz,
        wddx = year4 + '-' + month + '-' + day + 'T' + hour24 + ':' + minute + ':' + second,
        pgydotd = year4 + '.?' + dayofyear,
        pgtextshort = '(' + monthabbr + ')-' + daylz + '-' + year,
        pgtextreverse = year + '-(' + monthabbr + ')-' + daylz,
        mssqltime = hour12 + ':' + minutelz + ':' + secondlz + '[:.]([0-9]+)' + meridian,
        isoweekday = year4 + '-?W' + weekofyear + '-?([0-7])',
        isoweek = year4 + '-?W' + weekofyear,
        exif = year4 + ':' + monthlz + ':' + daylz + ' ' + hour24lz + ':' + minutelz + ':' + secondlz,
        firstdayof = strtotime.FIRSTDAYOF + '?',
        lastdayof = strtotime.LASTDAYOF + '?',
        backof = strtotime.BACKOF + hour24 + '(' + space + ')?' + meridian + '?',
        frontof = strtotime.FRONTOF + hour24 + '(' + space + ')?' + meridian + '?',

        // common log format
        clf = day + '\/(' + monthabbr + ')\/' + year4 + ':' + hour24lz + ':' + minutelz + ':' + secondlz + space + tzcorrection,

        // timestamp:
        timestamp = "@(-)?([0-9]+)",

        // ? to fix some ambiguities (this is from the C source)
        dateshortwithtimeshort12  = datenoyear + timeshort12,
        dateshortwithtimelong12   = datenoyear + timelong12,
        dateshortwithtimeshort  = datenoyear + timeshort24,
        dateshortwithtimelong   = datenoyear + timelong24,
        dateshortwithtimelongtz = datenoyear + iso8601normtz,


        // relative regexps
        reltextnumber = '(' + strtotime.RELTEXTNUMBER.join('|') + ')',

        // these are a bit ugly because we need to provide translationability
        // of these terms, while still knowing what they mean...
        // All these functions are doing is iterating through the static
        // properties to get (possibly translated) versions of the text into
        // a string to use in the regexps.
        reltexttext = '(' + (function () {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "(anonymous 2)", 1370);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1371);
var i,
                ret = [],
                rtt = strtotime.RELTEXTTEXT;

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1375);
for (i in rtt) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1376);
if (rtt.hasOwnProperty(i)) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1377);
ret.push(rtt[i]);
                }
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1380);
return ret.join('|');
        }()) + ')', // strtotime.RELTEXTTEXT.join('|') + ')',

        reltextunit = '((' + (function () {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "(anonymous 3)", 1383);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1384);
var i,
                ret = [],
                rtt = strtotime.RELTEXTUNIT;

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1388);
for (i in rtt) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1389);
if (rtt.hasOwnProperty(i)) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1390);
ret.push(rtt[i].join('|'));
                }
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1393);
return ret.join('|');
        }()) + ')s?)|' + daytext,
        //strtotime.RELTEXTUNIT.join('|') + ')s?)' + '|' + daytext,
        // no 'weeks' currently - need to check why it's separate

        relnumber = '([+-]*[ \t]*[0-9]+)',

        // this is weird too, the week. So I've removed it from here as it appears in reltextunit
        relative = relnumber + '(' + space + ')?(' + reltextunit + ')', // |week)',
        relativetext = '(' + reltextnumber + '|' + reltexttext + ')' + space + reltextunit,
        relativetextweek = reltexttext + space + 'week',


        weekdayof = '(' + reltextnumber + '|' + reltexttext + ')' + space + '(' + dayfull + '|' + dayabbr + ')' + space + 'of';

    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1408);
return {
        "space": space,
        "frac": frac,
        "ago": ago,
        "hour24": hour24,
        "hour24lz": hour24lz,
        "hour12": hour12,
        "minute": minute,
        "minutelz": minutelz,
        "second": second,
        "secondlz": secondlz,
        // The Internationalised meridian match isn't quite the same, as we can't assume
        // we can mix cases or add full stops.  So it just looks for any of the upper- or lower-
        // case versions in INTL.P and INTL.p
        "meridian": meridian,
        "tz": space + tz + space,
        "tzcorrection": space + tzcorrection + space,

        "daysuf": daysuf,

        "month": month,
        "day": day,
        "year": year,
        "year2": year2,
        "year4": year4,
        "year4withsign": year4withsign,

        "dayofyear": dayofyear,
        "weekofyear": weekofyear,
        "monthlz": monthlz,
        "daylz": daylz,

        // Use Internationalisation to get lang pack
        "dayfull": dayfull,
        "dayabbr": dayabbr,
        "dayspecial": dayspecial,  // apparently no INTL version of this
        "daytext": daytext,

        "monthfull": monthfull,
        "monthabbr": monthabbr,
        "monthroman": monthroman,
        "monthtext": monthtext,

        // Time
        "timetiny12": space + timetiny12 + space,
        "timeshort12": space + timeshort12 + space,
        "timelong12": space + timelong12 + space,

        "timeshort24": space + timeshort24 + space,
        "timelong24": space + timelong24 + space,
        "iso8601long": space + iso8601long + space,

        "iso8601normtz": space + iso8601normtz + space,

        "gnunocolon": space + gnunocolon + space,
        "gnunocolont": space + gnunocolont + space,
        "iso8601nocolon": space + iso8601nocolon + space,

        // Dates
        "americanshort": space + americanshort + space,
        "american": space + american + space,
        "iso8601dateslash": space + iso8601dateslash + space,
        "dateslash": space + dateslash + space,
        "iso8601date4": space + iso8601date4 + space,
        "iso8601date2": space + iso8601date2 + space,
        "gnudateshorter": space + gnudateshorter + space,
        "gnudateshort": space + gnudateshort + space,
        "pointeddate4": space + pointeddate4 + space,
        "pointeddate2": space + pointeddate2 + space,
        "datefull": space + datefull + space,
        "datenoday": space + datenoday + space,
        "datenodayrev": space + datenodayrev + space,
        "datetextual": space + datetextual + space,
        "datenoyear": space + datenoyear + space, // why is this one finish with * and above is +
        "datenoyearrev": space + datenoyearrev + space,
        "datenocolon": space + datenocolon + space,

        // Special formats
        "soap": soap,
        "xmlrpc": xmlrpc,
        "xmlrpcnocolon": xmlrpcnocolon,
        "wddx": wddx,
        "pgydotd": pgydotd,
        "pgtextshort": pgtextshort,
        "pgtextreverse": pgtextreverse,
        "mssqltime": mssqltime,
        "isoweekday": isoweekday,
        "isoweek": isoweek,
        "exif": exif,
        "firstdayof": firstdayof,
        "lastdayof": lastdayof,
        "backof": backof,
        "frontof": frontof,

        // common log format
        "clf": clf,

        // timestamp:
        "timestamp": timestamp,

        // ? to fix some ambiguities (this is from the C source)
        "dateshortwithtimeshort12" : dateshortwithtimeshort12,
        "dateshortwithtimelong12"  : dateshortwithtimelong12,
        "dateshortwithtimeshort" : dateshortwithtimeshort,
        "dateshortwithtimelong"  : dateshortwithtimelong,
        "dateshortwithtimelongtz": dateshortwithtimelongtz,


        // relative regexps
        "reltextnumber": reltextnumber,
        "reltexttext": reltexttext,
        "reltextunit": reltextunit, // no 'weeks' currently - need to check why it's separate

        "relnumber": relnumber,
        "relative": relative, //the week
        "relativetext": relativetext,
        "relativetextweek": relativetextweek,


        "weekdayof": weekdayof

    };

};



/**
 * @method strtotime.finishRegExp
 * @static
 * User-overridable function that is called after the default regex strings
 * have been constructed, to allow user modification if needed.
 *
 * @public
 * @param {Object} oRegEx The strings constructed by strtotime.constructRegExp
 * @return {Object}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1545);
strtotime.finishRegExp = function (oRegEx) {
    _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "finishRegExp", 1545);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1546);
return oRegEx;
};


/**
 * @method strtotime.constructTests
 *
 * Builds an array of tests to carry out, and what to do if they pass
 * - ie if there's a match to the regexp.  Each item in the array
 * is an object with keys `re`, `fn` and `key`:
 *
 *   @param item.re {RegExp} A RegExp object that will be used to test the passed string
 *   @param item.fn {Function} A function that is called if the RegExp returns a result.
 *
 *       The function receives the following arguments:
 *       @param {Array} aRes  Array (-like) returned by RegExp.exec()
 *       @param {Int} index Position that the RegExp appeared in the original string.
 *           This is different to aRes.index because the RegExp.exec() is in general
 *           called on a substring of the original string passed.  It's important to know
 *           where in the original string the matching regexp string appears as the order
 *           of items is important: "2am yesterday" is different to "yesterday 2am".
 *           Mostly, index will just be passed through to mods.updateRel() or mods.updateAbs()
 *           where it's used to make sure that the date/time calculations happen in the
 *           correct order
 *       @param {Modificator} mods An instance of Modificator that stores the changes
 *           that need to be made to the timestamp.
 *
 *   @param item.key {String} A string that identifies the test, for logging/debugging
 *       purposes mainly
 *
 * @protected
 * @static
 * @param {Object} oRegEx Regex strings built by constructRegExp
 * @return {Array}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1581);
strtotime.constructTests = function (oRegEx) {

    // The tests to carry out, and what happens
    _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "constructTests", 1581);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1584);
return [

        // Fixed strings:
        {key: 'yesterday', re: new RegExp('yesterday'), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1587);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1588);
mods.updateRel({d: -1}, null, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1589);
mods.updateAbs({h: 0, i: 0, s: 0}, true, index);
        }},

        {key: 'now', re: new RegExp('now'), fn: function () {
        }},

        {key: 'noon', re: new RegExp('noon'), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1595);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1596);
mods.updateAbs({
                h: 12,
                i: 0,
                s: 0,
                fixTime: true,
                specialFn: function (ms) {
                    _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "specialFn", 1601);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1602);
mods.incTime();
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1603);
return ms;
                }
            }, null, index);
        }},

        {key: 'midnight|today', re: new RegExp('midnight|today'), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1608);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1609);
mods.updateAbs({h: 0, i: 0, s: 0}, null, index);
        }},

        {key: 'tomorrow', re: new RegExp('tomorrow'), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1612);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1613);
mods.updateRel({d: 1}, null, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1614);
mods.updateAbs({h: 0, i: 0, s: 0}, null, index);
        }},



        // Unix timestamp
        {key: 'timestamp', re: new RegExp(oRegEx.timestamp), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1620);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1621);
var tmp = new Date(parseInt(aRes[2], 10) * 1000);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1622);
mods.updateAbs({
                y: tmp.getUTCFullYear(),
                m: tmp.getUTCMonth(),
                d: tmp.getUTCDate(),
                h: tmp.getUTCHours(),
                i: tmp.getUTCMinutes(),
                s: tmp.getUTCSeconds()
            }, true, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1630);
mods.incTime();
        }},



        // Simple relative things
        {key: 'firstdayof', re: new RegExp(oRegEx.firstdayof), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1636);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1637);
mods.absoluteFixedHash.firstDay = 1;
        }},
        {key: 'lastdayof', re: new RegExp(oRegEx.lastdayof), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1639);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1640);
mods.absoluteFixedHash.lastDay = 1;
        }},

        {key: 'frontof', re: new RegExp(oRegEx.frontof), fn: function (aRes, index, mods) {


            // handle the meridian
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1643);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1647);
aRes[1] = _handleMeridian(aRes[1], aRes[3]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1649);
mods.updateAbs({
                h: aRes[1],
                i: 0,
                s: 0
            }, null, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1654);
mods.updateRel({
                i: -15
            }, null, index);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1658);
mods.incTime();
        }},
        {key: 'backof', re: new RegExp(oRegEx.backof), fn: function (aRes, index, mods) {

            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1660);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1662);
aRes[1] = _handleMeridian(aRes[1], aRes[3]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1664);
mods.updateAbs({
                h: aRes[1],
                i: 0,
                s: 0
            }, null, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1669);
mods.updateRel({
                i: 15
            }, null, index);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1673);
mods.incTime();
        }},


        // complex relative things - weekday of
        {key: 'weekdayof', re: new RegExp(oRegEx.weekdayof), fn: function (aRes, index, mods) {

            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1678);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1680);
var modifier = aRes[1], // first, second or next, last etc
                ind = strtotime.RELTEXTNUMBER.indexOf(modifier),
                dow = aRes[4],
                dowIndex = strtotime.DAYFULL.indexOf(dow) !== -1 ?
                        strtotime.DAYFULL.indexOf(dow) :
                        strtotime.DAYABBR.indexOf(dow);


            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1688);
if (ind !== -1) {
                // something like 'third Wednesday in June'
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1690);
mods.updateRel({
                    weekdayOf: {
                        dayIndex: dowIndex,
                        weekIndex: ind
                    }
                }, null, index);
            } else {
                // something like 'last Wednesday in June'
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1698);
mods.updateRel({
                    weekdayOf: {
                        dayIndex: dowIndex,
                        weekIndex: aRes[1]
                    }
                }, null, index);
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1705);
mods.updateAbs({
                h: 0,
                i: 0,
                s: 0,
                d: 1,
                fixDate: {
                    d: true
                }
            }, null, index);
        }},



        // some times

        {key: 'mssqltime', re: new RegExp(oRegEx.mssqltime), fn: function (aRes, index, mods) {

            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1720);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1722);
mods.updateAbs({
                h: _handleMeridian(aRes[1], aRes[5]),
                i: aRes[2],
                s: aRes[3] + '.' + aRes[4]
            }, null, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1727);
mods.incTime();
        }},

        {key: 'times12', re: new RegExp([oRegEx.timelong12, oRegEx.timeshort12, oRegEx.timetiny12].join('|')), fn: function (aRes, index, mods) {

            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1730);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1732);
var hr,
                mn,
                sc,
                mr,
                newAbs = {};
            // get the times:
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1738);
hr = aRes[1] || aRes[6] || aRes[10];
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1739);
mn = aRes[2] || aRes[7];
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1740);
sc = aRes[3];
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1741);
mr = aRes[5] || aRes[9] || aRes[12];

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1743);
if (mr !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1744);
hr = _handleMeridian(hr, mr);
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1747);
newAbs.h = hr;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1748);
if (mn !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1749);
newAbs.i = mn;
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1751);
if (sc !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1752);
newAbs.s = sc;
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1755);
mods.updateAbs(newAbs, null, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1756);
mods.incTime();
        }},

        // This is in the wrong place, according to the C source.  It should be further
        // down, with the other dates.  However, if if comes after 'times24'
        // then time24 will match the time part of the exif format
        // and it'll break.
        {key: 'xmlrpcAndFriends',
            re: new RegExp([oRegEx.xmlrpc, oRegEx.xmlrpcnocolon, oRegEx.soap, oRegEx.wddx, oRegEx.exif].join("|")),
            fn: function (aRes, index, mods) {


                _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1765);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1768);
mods.updateAbs({
                    y: aRes[1] || aRes[7] || aRes[13] || aRes[23] || aRes[32],
                    m: parseInt(aRes[2] || aRes[8] || aRes[14] || aRes[24] || aRes[33], 10) - 1,
                    d: aRes[3] || aRes[9] || aRes[15] || aRes[25] || aRes[34],
                    h: aRes[4] || aRes[10] || aRes[16] || aRes[29] || aRes[35],
                    i: aRes[5] || aRes[11] || aRes[17] || aRes[30] || aRes[36],
                    s: aRes[6] || aRes[12] || aRes[18] || aRes[31] || aRes[37]
                }, true, index);

                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1777);
if (aRes[20] !== undefined) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1778);
mods.timezoneString = aRes[20];
                }

            }
            },



        {key: 'times24', re: new RegExp([oRegEx.iso8601long, oRegEx.timelong24, oRegEx.timeshort24].join('|')), fn: function (aRes, index, mods) {
            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1786);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1787);
var hr,
                mn,
                sc,
                fr,
                newAbs = {};


            // get the times:
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1795);
hr = aRes[2] || aRes[7] || aRes[11];
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1796);
mn = aRes[3] || aRes[8] || aRes[12];
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1797);
sc = aRes[4] || aRes[9];
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1798);
fr = aRes[5];

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1800);
newAbs.h = hr;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1801);
if (mn !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1802);
newAbs.i = mn;
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1804);
if (sc !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1805);
newAbs.s = sc;
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1806);
if (fr !== undefined) {
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1807);
newAbs.s += '.' + parseInt(fr, 10);
                }
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1811);
mods.updateAbs(newAbs, null, index);
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1812);
mods.incTime();
        }},



        {key: 'iso8601nocolon', re: new RegExp(oRegEx.iso8601nocolon), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1817);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1820);
mods.updateAbs({
                h: aRes[2],
                i: aRes[3],
                s: aRes[4]
            }, null, index);
        }},



        // dates


        {key: 'american', re: new RegExp(oRegEx.american + '|' + oRegEx.americanshort), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1832);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1835);
var upd = {
                m: parseInt(aRes[1] || aRes[7], 10) - 1,
                d: aRes[2] || aRes[8],
                h: 0,
                i: 0,
                s: 0
            };
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1842);
if (aRes[6] !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1843);
upd.y = _handleShortYear(aRes[6]);
            }
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1845);
mods.updateAbs(upd, true, index);
        }},

        {key: 'iso8601dates', re: new RegExp([oRegEx.iso8601date4, oRegEx.iso8601dateslash, oRegEx.dateslash].join('|')),
            fn: function (aRes, index, mods) {


                _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1849);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1852);
mods.updateAbs({
                    y: aRes[1] || aRes[4] || aRes[7],
                    m: parseInt(aRes[2] || aRes[5] || aRes[8], 10) - 1,
                    d: aRes[3] || aRes[6] || aRes[9],
                    h: 0,
                    i: 0,
                    s: 0
                }, true, index);

            }
            },

        {key: 'iso8601date2', re: new RegExp(oRegEx.iso8601date2), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1864);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1867);
var y = _handleShortYear(aRes[1]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1869);
mods.updateAbs({
                y: y,
                m: parseInt(aRes[2], 10) - 1,
                d: aRes[3],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        {key: 'gnudateshorter', re: new RegExp(oRegEx.gnudateshorter), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1880);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1883);
var y = _handleShortYear(aRes[1]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1885);
mods.updateAbs({
                y: y,
                m: parseInt(aRes[2], 10) - 1,
                d: 1,
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        {key: 'gnudateshort', re: new RegExp(oRegEx.gnudateshort), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1896);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1899);
var y = _handleShortYear(aRes[1]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1901);
mods.updateAbs({
                y: y,
                m: parseInt(aRes[2], 10) - 1,
                d: aRes[3],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},



        {key: 'datefull', re: new RegExp(oRegEx.datefull), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1914);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1917);
var m = _handleMonthText(aRes[6]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1919);
mods.updateAbs({
                y: aRes[11],
                m: m,
                d: aRes[1],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        {key: 'pointeddate', re: new RegExp(oRegEx.pointeddate4 + '|' + oRegEx.pointeddate2), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1930);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1933);
var y = _handleShortYear(aRes[6] || aRes[12]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1935);
if (y === false) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1936);
return false;
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1939);
mods.updateAbs({
                y: y,
                m: parseInt(aRes[5] || aRes[11], 10) - 1,
                d: aRes[2] || aRes[3] || aRes[7] || aRes[9],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        {key: 'datenoday', re: new RegExp(oRegEx.datenoday), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1950);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1953);
var y = _handleShortYear(aRes[6]),
                m = _handleMonthText(aRes[1]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1956);
if (y === false) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1957);
return false;
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1960);
mods.updateAbs({
                y: y,
                m: m,
                d: 1,
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        {key: 'datenodayrev', re: new RegExp(oRegEx.datenodayrev), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1971);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1974);
var y = _handleShortYear(aRes[1]),
                m = _handleMonthText(aRes[3]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1977);
if (y === false) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1978);
return false;
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1981);
mods.updateAbs({
                y: y,
                m: m,
                d: 1,
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},


        {key: 'datetextual', re: new RegExp(oRegEx.datetextual + '|' + oRegEx.datenoyear), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 1993);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 1996);
var y = _handleShortYear(aRes[10]),
                upd = {
                    m: _handleMonthText(aRes[1] || aRes[11]),
                    d: aRes[6] || aRes[16],
                    h: 0,
                    i: 0,
                    s: 0
                };

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2005);
if (y === false) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2006);
return false;
            } else {_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2007);
if (!isNaN(y)) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2008);
upd.y = y;
            }} /*else {
                // it seems that if there's no year and we have 'static' modifiers (e.g. noon)
                // then "Jan 1st noon" should return false,
                // but "noon Jan 1st" shouldn't.
                // Not sure if this is intended by php or a bug.
                // At the moment this javascript version returns the same value
                // (1st January {currentyear}, 12:00:00)
                //
                // This does cause some tests to fail.
            }*/

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2020);
mods.updateAbs(upd, true, index);

        }},


        {key: 'datenoyearrev', re: new RegExp(oRegEx.datenoyearrev), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2025);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2028);
mods.updateAbs({
                m: _handleMonthText(aRes[6]),
                d: aRes[1],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        {key: 'datenocolon', re: new RegExp(oRegEx.datenocolon), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2038);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2041);
mods.updateAbs({
                y: aRes[1],
                m: parseInt(aRes[2], 10) - 1,
                d: aRes[3],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        // xmlrpcAndFields was here in the original source, but now it's further up
        // (see note above for reason)


        {key: 'pgydotd', re: new RegExp(oRegEx.pgydotd), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2056);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2059);
mods.updateAbs({
                y: aRes[1],
                m: 0,
                d: parseInt(aRes[2], 10),
                h: 0,
                i: 0,
                s: 0
            }, true, index);


        }},


        {key: 'isoweekday', re: new RegExp(oRegEx.isoweekday), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2072);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2075);
var y = parseInt(aRes[1], 10),
                wk = parseInt(aRes[2], 10),
                dy = parseInt(aRes[3], 10),
                days = _findDayNrFromWeekNr(y, wk, dy);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2080);
mods.updateAbs({
                y: y,
                m: 0,
                d: days,
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},


        {key: 'pgtextshort', re: new RegExp(oRegEx.pgtextshort), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2092);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2095);
mods.updateAbs({
                y: aRes[3],
                m: _handleMonthText(aRes[1]),
                d: aRes[2],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},

        {key: 'pgtextreverse', re: new RegExp(oRegEx.pgtextreverse), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2106);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2109);
mods.updateAbs({
                y: aRes[1],
                m: _handleMonthText(aRes[2]),
                d: aRes[3],
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},


        // For the same reasons as above, this needs to come before times24
        // instead of further down in the dates
        {key: 'clf', re: new RegExp(oRegEx.clf), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2123);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2126);
mods.updateAbs({
                y: aRes[6],
                m: _handleMonthText(aRes[5]),
                d: aRes[1],
                h: aRes[7],
                i: aRes[8],
                s: aRes[9]
            }, true, index);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2135);
mods.timezoneString = aRes[10];

        }},



        {key: 'ago', re: new RegExp(oRegEx.ago), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2141);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2144);
mods.relativeDirection = -1;

        }},






        {key: 'daytext', re: new RegExp(oRegEx.daytext), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2153);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2156);
var dow = aRes[0],
                dowIndex = strtotime.DAYFULL.indexOf(dow) !== -1 ?
                        strtotime.DAYFULL.indexOf(dow) :
                        strtotime.DAYABBR.indexOf(dow);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2161);
mods.updateAbs({
                h: 0,
                i: 0,
                s: 0
            }, true, index);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2167);
mods.updateRel({
                weekdayOf: {
                    dayIndex: dowIndex
                }
            });


        }},


        {key: 'relativetextweek', re: new RegExp(oRegEx.relativetextweek), fn: function (aRes, index, mods) {


            // (first|last|next|previous) week

            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2177);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2182);
mods.updateRel({
                week: aRes[1]
            }, null, index);

        }},

        {key: 'relativetext', re: new RegExp(oRegEx.relativetext), fn: function (aRes, index, mods) {


            // ((first|second|third... )|( next|first|last...))  day|month|year

            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2188);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2193);
var modifier = aRes[1],
                period = aRes[4],
                enPeriod = _lookupRelTextUnit(period),
                upd = {relative: {}};

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2198);
upd.relative[enPeriod] = modifier;

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2200);
mods.updateRel(upd, null, index);


        }},


        {key: 'monthfull|monthabbr', re: new RegExp(oRegEx.monthfull + '|' + oRegEx.monthabbr), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2206);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2209);
var m = _handleMonthText(aRes[0]);

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2211);
mods.updateAbs({
                m: m,
                h: 0,
                i: 0,
                s: 0
            }, true, index);

        }},


        {key: 'dateshortwithtime12', re: new RegExp(oRegEx.dateshortwithtimeshort12 + '|' + oRegEx.dateshortwithtimelong12),
            fn: function () {

                // I can't see how this is ever triggered - it seems always to get
                // picked up by the component regexes.  So I can't test any implementation!
                //
                // The C source for these mentions 'fix ambiguities'...
                //

                // Until anyone can get to this point and report it,
                // there's no implementation
                _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2222);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2232);
return false;

            }
            },

        {key: 'dateshortwithtimelong',
            re: new RegExp(oRegEx.dateshortwithtimeshort + '|' + oRegEx.dateshortwithtimelong + '|' + oRegEx.dateshortwithtimelongtz),
            fn: function () {

                // I can't see how this is ever triggered - it seems always to get
                // picked up by the component regexes.  So I can't test any implementation!
                //
                // The C source for these mentions 'fix ambiguities'...
                //

                // Until anyone can get to this point and report it,
                // there's no implementation
                _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2239);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2249);
return false;

            }
            },


        {key: "relative", re: new RegExp(oRegEx.relative), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2255);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2258);
var amt = parseInt(aRes[1], 10),
                period = _lookupRelTextUnit(aRes[5]),
                upd = {relative: {}};

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2262);
if (period === "week") {
                // we need to treat this slightly differently
                // to 'last week', which sets the day to Monday
                // - with something like "-2 week" we don't want
                // to change the day
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2267);
period = "weekKeepDay";
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2270);
upd.relative[period] = amt;
            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2271);
mods.updateRel(upd, true, index);

        }},


        // This is an extra one to definitely pick up t0813 as a time
        {key: "gnunocolont", re: new RegExp(oRegEx.gnunocolont), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2277);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2280);
mods.updateAbs({
                h: aRes[1],
                i: aRes[2]
            }, true, index);
        }},


        {key: 'timezone', re: new RegExp('(' + oRegEx.tzcorrection + ')|(' + oRegEx.tz + ')'), fn : function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2287);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2290);
var tz = aRes[2],
                tzStr = aRes[5];

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2293);
if (tzStr !== undefined) {
                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2294);
tz = strtotime.TIMEZONEMAP[Y.Lang.trim(tzStr)];
            }

            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2297);
if (tz !== undefined) {

                _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2299);
mods.timezoneString = tz;

            }

        }},






        // this appears further up in the C source: possibly a source of error (as gnunocolon)
        {key: 'year4', re: new RegExp(oRegEx.year4), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2311);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2314);
mods.updateAbs({
                y: aRes[1]
            }, true, index);

        }},

        // This seems like an error.  In the php C source this is listed
        // after timeshort24.  However, if you do so it matches years
        // that appear as part of longer dates and goes wrong.
        {key: 'gnunocolon', re: new RegExp(oRegEx.gnunocolon), fn: function (aRes, index, mods) {


            _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "fn", 2323);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2326);
mods.updateAbs({
                specialFn: function (ms) {

                    _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "specialFn", 2327);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2329);
var t = aRes[1];
                    // trying to set the time more than once should return an error
                    // This seems to be checked in the C source
                    // in the gnunocolon (and possibly elsewhere)
                    // but not as a general check
                    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2334);
switch (mods.hasTime) {
                    case 1:
                        // explicit time and time's already set
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2337);
if (t === "t") {
                            _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2338);
return false;
                        }
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2340);
return absChange.y(ms, parseFloat(String(aRes[2] + aRes[3])));

                    case 0:
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2343);
mods.incTime();
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2344);
ms = absChange.h(ms, aRes[2]);
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2345);
return absChange.i(ms, aRes[3]);

                    default:
                        // more than once is an error
                        _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2349);
return false;

                    }
                }
            }, null, index);

        }}

    ];

};

/**
 * @method strtotime.finishTests
 * @static
 * User-overridable function that is called after the default
 * test builder (constructTests) to allow user modification if
 * needed.
 *
 * @public
 * @param {Object} oRegEx Regex strings built earlier
 * @param {Array} aTests  Array of tests built by default process
 * @return {Array}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2373);
strtotime.finishTests = function (oRegEx, aTests) {
    _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "finishTests", 2373);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2374);
return aTests;
};


/**
 * Resets the built Regexp object and Test array that are used
 * by strtotime.
 *
 * You may need this if you're changing languages on the fly so
 * that you can re-build the regexps (and possibly tests) the
 * next time you use the strtotime function.
 *
 * @method strtotime.resetTests
 * @public
 * @static
 *
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2391);
strtotime.resetTests = function () {
    _yuitest_coverfunc("build/gallery-strtotime/gallery-strtotime.js", "resetTests", 2391);
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2392);
TESTS = [];
    _yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2393);
REGEXP = {};
};







///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//
// Language items used: if Intl is available it will use them
// where it can.  Not all items are included in the default language
// packs (e.g. 'next') for dates: implementers can also overwrite these
// too if they want to.
//


/**
 * Array of terms meaning 'weekday'
 *
 * @property strtotime.DAYSPECIAL
 * @static
 *
 * @type {Array}
 * @default ['weekday', 'weekdays']
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2421);
strtotime.DAYSPECIAL = ['weekday', 'weekdays'];
/**
 * Terms meaning 'first day of'
 *
 * @property strtotime.FIRSTDAYOF
 * @static
 * @type {String}
 * @default 'first day of'
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2430);
strtotime.FIRSTDAYOF = 'first day of';
/**
 * Term meaning 'last day of'
 *
 * @property strtotime.LASYDAYOF
 * @static
 * @type {String}
 * @default 'last day of'
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2439);
strtotime.LASTDAYOF = 'last day of';
 /**
  * Term meaning 'back of' (i.e. quarter past)
  *
  * @property strtotime.BACKOF
  * @static
  * @type {String}
  * @default 'back of'
  */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2448);
strtotime.BACKOF = 'back of ';
/**
 * Term meaning 'front of' (i.e. quarter to)
 *
 * @property strtotime.FRONTOF
 * @static
 * @type {String}
 * @default 'front of'
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2457);
strtotime.FRONTOF = 'front of ';

/**
 * Array of full day names of the week.
 * Must be in order: must start with Sunday (as day 0).
 *
 * Will use Intl module day names if available
 *
 * @property strtotime.DAYFULL
 * @static
 * @type {Array}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2469);
strtotime.DAYFULL = INTL.A || ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
/**
 * Array of shortened day names of the week.
 * Must be in order: must start with Sun (as day 0).
 *
 * Will use Intl module day names if available
 *
 * @property strtotime.DAYABBR
 * @static
 * @type {Array}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2480);
strtotime.DAYABBR = INTL.a || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * String that will be used in RegExp constructor to identify am / pm.
 *
 * By default php can handle full stops and mixed capitalisation: for
 * internationalised versions we can't reliably and generally do this.
 *
 * So if you're using the Intl module there is a small incompatibility with
 * php strtotime() as things like "8 A.m" won't be matched and processed.
 *
 * Over-write this if this matters to you: '([AaPp].?[Mm].?)' will work as
 * php does.
 *
 * @property strtotime.AMPM
 * @static
 * @type {String}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2498);
strtotime.AMPM = INTL.p || INTL.P ?
        '(' + (INTL.P ? INTL.P.join('|') : '') + (INTL.P && INTL.p ? '|' : '') + (INTL.p ? INTL.p.join('|') : '') + ')' :
        '([AaPp].?[Mm].?)';

 /**
  * Array of ordinals (first, second, third etc)
  * Must be in order: must start with 'first' in position 0
  *
  * @property strtotime.RELTEXTNUMBER
  * @for Date
  * @static
  * @type {Array}
  */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2511);
strtotime.RELTEXTNUMBER = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

 /**
  * Object of text terms for 'next', 'last', 'previous', 'this'
  * keys are fixed: substitute other strings if you need
  * translations.  Don't remove keys, or add them.  strtotime
  * won't know what to do with them.
  *
  * @property strtotime.RELTEXTTEXT
  * @static
  * @var {Object}
  */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2523);
strtotime.RELTEXTTEXT = {
    next: 'next',
    last: 'last',
    previous: 'previous',
    'this': 'this'
};


 /**
  * Object literal of time terms, allowing for translations
  * Each key is the English version used by strtotime internally:
  * don't change or add keys.
  * The value for each must be an array, allowing mulitple
  * words for one meaning.
  *
  * @property strtotime.RELTEXTUNIT
  * @static
  * @var {Object}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2542);
strtotime.RELTEXTUNIT = {
    'second': ['second', 'sec'],
    'minute': ['minute', 'min'],
    'hour': ['hour'],
    'day': ['day'],
    'week': ['week'],
    'fortnight': ['fortnight'],
    'month': ['month'],
    'year': ['year']
};


/**
 * Array of full length months.
 * Must by in order, and start at January
 *
 * @property strtotime.MONTHFULL
 * @static
 * @type {Array}
 * @default ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2564);
strtotime.MONTHFULL = INTL.B || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

/**
 * Array of abbreviated length months.
 * Must by in order, and start at Jan
 *
 * @property strtotime.MONTHABBR
 * @static
 * @type {Array}
 * @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2576);
strtotime.MONTHABBR = INTL.b || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Array of Roman numeral months (or could be anything, actually).
 * Must by in order, and start at Jan
 *
 * @property strtotime.MONTHROMAN
 * @static
 * @type {Array}
 * @default ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2587);
strtotime.MONTHROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];


/**
 * Term meaning 'ago' (ie modifier that makes relative changes go into the past)
 *
 * @property strtotime.AGO
 * @static
 * @type {String}
 * @default 'ago',
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2598);
strtotime.AGO = 'ago';


/**
 * Suffixes that appear after day numbers (e.g. 22nd)

 * @property strtotime.DAYSUFFIXES
 * @static
 * @type {Array}
 * @default '(st|nd|rd|th)'
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2609);
strtotime.DAYSUFFIXES = ['st', 'nd', 'rd', 'th'];


/**
 * Maps timezone strings to UTC offsets
 *
 * Source: http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * retrieved 9th January 2013
 *
 *
 * @property strtotime.TIMEZONEMAP
 * @static
 * @type {Object}
 */
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2623);
Z = {
    'AKST9AKDT': T9m,
    'Arctic/Longyearbyen': T1,
    'CET': T1,
    'Chile/Continental': T4m,
    'Chile/EasterIsland': T6m,
    'CST6CDT': T6m,
    'Cuba': T5m,
    'EET': T2,
    'Egypt': T2,
    'Eire': T0,
    'EST': T5m,
    'EST5EDT': T5m,
    'GB': T0,
    'GB-Eire': T0,
    'Greenwich': T0,
    'Hong Kong': T8,
    'HST': T10m,
    'Iceland': T0,
    'Iran': '+03:30',
    'Israel': T2,
    'Jamaica': T5m,
    'Japan': T9,
    'JST-9': T9,
    'Kwajalein': T12,
    'Libya': T2,
    'MET': T1,
    'MST': T7m,
    'MST7MDT': T7m,
    'Navajo': T7m,
    'NZ': T12,
    'NZ-CHAT': '+12:45',
    'Poland': T1,
    'Portugal': T0,
    'PRC': T8,
    'PST8PDT': T8m,
    'ROC': T8,
    'ROK': T9,
    'Singapore': T8,
    'Turkey': T2,
    'UCT': T0,
    'Universal': T0,
    'UTC': T0,
    'WET': T0,
    'W-SU': T4,
    'Zulu': T0
};
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2670);
Z[AFRICA + 'Abidjan'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2671);
Z[AFRICA + 'Accra'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2672);
Z[AFRICA + 'Addis_Ababa'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2673);
Z[AFRICA + 'Algiers'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2674);
Z[AFRICA + 'Asmara'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2675);
Z[AFRICA + 'Asmera'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2676);
Z[AFRICA + 'Bamako'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2677);
Z[AFRICA + 'Bangui'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2678);
Z[AFRICA + 'Banjul'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2679);
Z[AFRICA + 'Bissau'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2680);
Z[AFRICA + 'Blantyre'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2681);
Z[AFRICA + 'Brazzaville'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2682);
Z[AFRICA + 'Bujumbura'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2683);
Z[AFRICA + 'Cairo'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2684);
Z[AFRICA + 'Casablanca'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2685);
Z[AFRICA + 'Ceuta'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2686);
Z[AFRICA + 'Conakry'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2687);
Z[AFRICA + 'Dakar'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2688);
Z[AFRICA + 'Dar_es_Salaam'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2689);
Z[AFRICA + 'Djibouti'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2690);
Z[AFRICA + 'Douala'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2691);
Z[AFRICA + 'El_Aaiun'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2692);
Z[AFRICA + 'Freetown'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2693);
Z[AFRICA + 'Gaborone'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2694);
Z[AFRICA + 'Harare'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2695);
Z[AFRICA + 'Johannesburg'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2696);
Z[AFRICA + 'Juba'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2697);
Z[AFRICA + 'Kampala'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2698);
Z[AFRICA + 'Khartoum'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2699);
Z[AFRICA + 'Kigali'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2700);
Z[AFRICA + 'Kinshasa'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2701);
Z[AFRICA + 'Lagos'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2702);
Z[AFRICA + 'Libreville'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2703);
Z[AFRICA + 'Lome'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2704);
Z[AFRICA + 'Luanda'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2705);
Z[AFRICA + 'Lubumbashi'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2706);
Z[AFRICA + 'Lusaka'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2707);
Z[AFRICA + 'Malabo'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2708);
Z[AFRICA + 'Maputo'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2709);
Z[AFRICA + 'Maseru'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2710);
Z[AFRICA + 'Mbabane'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2711);
Z[AFRICA + 'Mogadishu'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2712);
Z[AFRICA + 'Monrovia'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2713);
Z[AFRICA + 'Nairobi'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2714);
Z[AFRICA + 'Ndjamena'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2715);
Z[AFRICA + 'Niamey'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2716);
Z[AFRICA + 'Nouakchott'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2717);
Z[AFRICA + 'Ouagadougou'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2718);
Z[AFRICA + 'Porto-Novo'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2719);
Z[AFRICA + 'Sao_Tome'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2720);
Z[AFRICA + 'Timbuktu'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2721);
Z[AFRICA + 'Tripoli'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2722);
Z[AFRICA + 'Tunis'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2723);
Z[AFRICA + 'Windhoek'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2724);
Z[AMERICA + 'Adak'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2725);
Z[AMERICA + 'Anchorage'] = T9m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2726);
Z[AMERICA + 'Anguilla'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2727);
Z[AMERICA + 'Antigua'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2728);
Z[AMERICA + 'Araguaina'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2729);
Z[AMERICA + 'Argentina/Buenos_Aires'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2730);
Z[AMERICA + 'Argentina/Catamarca'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2731);
Z[AMERICA + 'Argentina/ComodRivadavia'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2732);
Z[AMERICA + 'Argentina/Cordoba'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2733);
Z[AMERICA + 'Argentina/Jujuy'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2734);
Z[AMERICA + 'Argentina/La_Rioja'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2735);
Z[AMERICA + 'Argentina/Mendoza'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2736);
Z[AMERICA + 'Argentina/Rio_Gallegos'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2737);
Z[AMERICA + 'Argentina/Salta'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2738);
Z[AMERICA + 'Argentina/San_Juan'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2739);
Z[AMERICA + 'Argentina/San_Luis'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2740);
Z[AMERICA + 'Argentina/Tucuman'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2741);
Z[AMERICA + 'Argentina/Ushuaia'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2742);
Z[AMERICA + 'Aruba'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2743);
Z[AMERICA + 'Asuncion'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2744);
Z[AMERICA + 'Atikokan'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2745);
Z[AMERICA + 'Atka'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2746);
Z[AMERICA + 'Bahia'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2747);
Z[AMERICA + 'Bahia_Banderas'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2748);
Z[AMERICA + 'Barbados'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2749);
Z[AMERICA + 'Belem'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2750);
Z[AMERICA + 'Belize'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2751);
Z[AMERICA + 'Blanc-Sablon'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2752);
Z[AMERICA + 'Boa_Vista'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2753);
Z[AMERICA + 'Bogota'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2754);
Z[AMERICA + 'Boise'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2755);
Z[AMERICA + 'Buenos_Aires'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2756);
Z[AMERICA + 'Cambridge_Bay'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2757);
Z[AMERICA + 'Campo_Grande'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2758);
Z[AMERICA + 'Cancun'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2759);
Z[AMERICA + 'Caracas'] = '−04:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2760);
Z[AMERICA + 'Catamarca'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2761);
Z[AMERICA + 'Cayenne'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2762);
Z[AMERICA + 'Cayman'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2763);
Z[AMERICA + 'Chicago'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2764);
Z[AMERICA + 'Chihuahua'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2765);
Z[AMERICA + 'Coral_Harbour'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2766);
Z[AMERICA + 'Cordoba'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2767);
Z[AMERICA + 'Costa_Rica'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2768);
Z[AMERICA + 'Creston'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2769);
Z[AMERICA + 'Cuiaba'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2770);
Z[AMERICA + 'Curacao'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2771);
Z[AMERICA + 'Danmarkshavn'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2772);
Z[AMERICA + 'Dawson'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2773);
Z[AMERICA + 'Dawson_Creek'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2774);
Z[AMERICA + 'Denver'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2775);
Z[AMERICA + 'Detroit'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2776);
Z[AMERICA + 'Dominica'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2777);
Z[AMERICA + 'Edmonton'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2778);
Z[AMERICA + 'Eirunepe'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2779);
Z[AMERICA + 'El_Salvador'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2780);
Z[AMERICA + 'Ensenada'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2781);
Z[AMERICA + 'Fort_Wayne'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2782);
Z[AMERICA + 'Fortaleza'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2783);
Z[AMERICA + 'Glace_Bay'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2784);
Z[AMERICA + 'Godthab'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2785);
Z[AMERICA + 'Goose_Bay'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2786);
Z[AMERICA + 'Grand_Turk'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2787);
Z[AMERICA + 'Grenada'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2788);
Z[AMERICA + 'Guadeloupe'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2789);
Z[AMERICA + 'Guatemala'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2790);
Z[AMERICA + 'Guayaquil'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2791);
Z[AMERICA + 'Guyana'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2792);
Z[AMERICA + 'Halifax'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2793);
Z[AMERICA + 'Havana'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2794);
Z[AMERICA + 'Hermosillo'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2795);
Z[AMERICA + 'Indiana/Indianapolis'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2796);
Z[AMERICA + 'Indiana/Knox'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2797);
Z[AMERICA + 'Indiana/Marengo'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2798);
Z[AMERICA + 'Indiana/Petersburg'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2799);
Z[AMERICA + 'Indiana/Tell_City'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2800);
Z[AMERICA + 'Indiana/Vevay'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2801);
Z[AMERICA + 'Indiana/Vincennes'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2802);
Z[AMERICA + 'Indiana/Winamac'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2803);
Z[AMERICA + 'Indianapolis'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2804);
Z[AMERICA + 'Inuvik'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2805);
Z[AMERICA + 'Iqaluit'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2806);
Z[AMERICA + 'Jamaica'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2807);
Z[AMERICA + 'Jujuy'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2808);
Z[AMERICA + 'Juneau'] = T9m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2809);
Z[AMERICA + 'Kentucky/Louisville'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2810);
Z[AMERICA + 'Kentucky/Monticello'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2811);
Z[AMERICA + 'Knox_IN'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2812);
Z[AMERICA + 'Kralendijk'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2813);
Z[AMERICA + 'La_Paz'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2814);
Z[AMERICA + 'Lima'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2815);
Z[AMERICA + 'Los_Angeles'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2816);
Z[AMERICA + 'Louisville'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2817);
Z[AMERICA + 'Lower_Princes'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2818);
Z[AMERICA + 'Maceio'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2819);
Z[AMERICA + 'Managua'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2820);
Z[AMERICA + 'Manaus'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2821);
Z[AMERICA + 'Marigot'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2822);
Z[AMERICA + 'Martinique'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2823);
Z[AMERICA + 'Matamoros'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2824);
Z[AMERICA + 'Mazatlan'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2825);
Z[AMERICA + 'Mendoza'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2826);
Z[AMERICA + 'Menominee'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2827);
Z[AMERICA + 'Merida'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2828);
Z[AMERICA + 'Metlakatla'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2829);
Z[AMERICA + 'Mexico_City'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2830);
Z[AMERICA + 'Miquelon'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2831);
Z[AMERICA + 'Moncton'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2832);
Z[AMERICA + 'Monterrey'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2833);
Z[AMERICA + 'Montevideo'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2834);
Z[AMERICA + 'Montreal'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2835);
Z[AMERICA + 'Montserrat'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2836);
Z[AMERICA + 'Nassau'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2837);
Z[AMERICA + 'New_York'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2838);
Z[AMERICA + 'Nipigon'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2839);
Z[AMERICA + 'Nome'] = T9m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2840);
Z[AMERICA + 'Noronha'] = T2m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2841);
Z[AMERICA + 'North_Dakota/Beulah'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2842);
Z[AMERICA + 'North_Dakota/Center'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2843);
Z[AMERICA + 'North_Dakota/New_Salem'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2844);
Z[AMERICA + 'Ojinaga'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2845);
Z[AMERICA + 'Panama'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2846);
Z[AMERICA + 'Pangnirtung'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2847);
Z[AMERICA + 'Paramaribo'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2848);
Z[AMERICA + 'Phoenix'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2849);
Z[AMERICA + 'Port_of_Spain'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2850);
Z[AMERICA + 'Port-au-Prince'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2851);
Z[AMERICA + 'Porto_Acre'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2852);
Z[AMERICA + 'Porto_Velho'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2853);
Z[AMERICA + 'Puerto_Rico'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2854);
Z[AMERICA + 'Rainy_River'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2855);
Z[AMERICA + 'Rankin_Inlet'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2856);
Z[AMERICA + 'Recife'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2857);
Z[AMERICA + 'Regina'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2858);
Z[AMERICA + 'Resolute'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2859);
Z[AMERICA + 'Rio_Branco'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2860);
Z[AMERICA + 'Rosario'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2861);
Z[AMERICA + 'Santa_Isabel'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2862);
Z[AMERICA + 'Santarem'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2863);
Z[AMERICA + 'Santiago'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2864);
Z[AMERICA + 'Santo_Domingo'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2865);
Z[AMERICA + 'Sao_Paulo'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2866);
Z[AMERICA + 'Scoresbysund'] = T1m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2867);
Z[AMERICA + 'Shiprock'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2868);
Z[AMERICA + 'Sitka'] = T9m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2869);
Z[AMERICA + 'St_Barthelemy'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2870);
Z[AMERICA + 'St_Johns'] = '−03:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2871);
Z[AMERICA + 'St_Kitts'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2872);
Z[AMERICA + 'St_Lucia'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2873);
Z[AMERICA + 'St_Thomas'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2874);
Z[AMERICA + 'St_Vincent'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2875);
Z[AMERICA + 'Swift_Current'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2876);
Z[AMERICA + 'Tegucigalpa'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2877);
Z[AMERICA + 'Thule'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2878);
Z[AMERICA + 'Thunder_Bay'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2879);
Z[AMERICA + 'Tijuana'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2880);
Z[AMERICA + 'Toronto'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2881);
Z[AMERICA + 'Tortola'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2882);
Z[AMERICA + 'Vancouver'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2883);
Z[AMERICA + 'Virgin'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2884);
Z[AMERICA + 'Whitehorse'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2885);
Z[AMERICA + 'Winnipeg'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2886);
Z[AMERICA + 'Yakutat'] = T9m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2887);
Z[AMERICA + 'Yellowknife'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2888);
Z[ANTARCTICA + 'Casey'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2889);
Z[ANTARCTICA + 'Davis'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2890);
Z[ANTARCTICA + 'DumontDUrville'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2891);
Z[ANTARCTICA + 'Macquarie'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2892);
Z[ANTARCTICA + 'Mawson'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2893);
Z[ANTARCTICA + 'McMurdo'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2894);
Z[ANTARCTICA + 'Palmer'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2895);
Z[ANTARCTICA + 'Rothera'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2896);
Z[ANTARCTICA + 'South_Pole'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2897);
Z[ANTARCTICA + 'Syowa'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2898);
Z[ANTARCTICA + 'Vostok'] = T6;

_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2900);
Z[ASIA + 'Aden'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2901);
Z[ASIA + 'Almaty'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2902);
Z[ASIA + 'Amman'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2903);
Z[ASIA + 'Anadyr'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2904);
Z[ASIA + 'Aqtau'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2905);
Z[ASIA + 'Aqtobe'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2906);
Z[ASIA + 'Ashgabat'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2907);
Z[ASIA + 'Ashkhabad'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2908);
Z[ASIA + 'Baghdad'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2909);
Z[ASIA + 'Bahrain'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2910);
Z[ASIA + 'Baku'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2911);
Z[ASIA + 'Bangkok'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2912);
Z[ASIA + 'Beirut'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2913);
Z[ASIA + 'Bishkek'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2914);
Z[ASIA + 'Brunei'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2915);
Z[ASIA + 'Calcutta'] = '+05:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2916);
Z[ASIA + 'Choibalsan'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2917);
Z[ASIA + 'Chongqing'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2918);
Z[ASIA + 'Chungking'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2919);
Z[ASIA + 'Colombo'] = '+05:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2920);
Z[ASIA + 'Dacca'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2921);
Z[ASIA + 'Damascus'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2922);
Z[ASIA + 'Dhaka'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2923);
Z[ASIA + 'Dili'] = T9;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2924);
Z[ASIA + 'Dubai'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2925);
Z[ASIA + 'Dushanbe'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2926);
Z[ASIA + 'Gaza'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2927);
Z[ASIA + 'Harbin'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2928);
Z[ASIA + 'Hebron'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2929);
Z[ASIA + 'Ho_Chi_Minh'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2930);
Z[ASIA + 'Hong_Kong'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2931);
Z[ASIA + 'Hovd'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2932);
Z[ASIA + 'Irkutsk'] = T9;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2933);
Z[ASIA + 'Istanbul'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2934);
Z[ASIA + 'Jakarta'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2935);
Z[ASIA + 'Jayapura'] = T9;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2936);
Z[ASIA + 'Jerusalem'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2937);
Z[ASIA + 'Kabul'] = '+04:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2938);
Z[ASIA + 'Kamchatka'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2939);
Z[ASIA + 'Karachi'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2940);
Z[ASIA + 'Kashgar'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2941);
Z[ASIA + 'Kathmandu'] = '+05:45';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2942);
Z[ASIA + 'Katmandu'] = '+05:45';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2943);
Z[ASIA + 'Kolkata'] = '+05:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2944);
Z[ASIA + 'Krasnoyarsk'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2945);
Z[ASIA + 'Kuala_Lumpur'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2946);
Z[ASIA + 'Kuching'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2947);
Z[ASIA + 'Kuwait'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2948);
Z[ASIA + 'Macao'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2949);
Z[ASIA + 'Macau'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2950);
Z[ASIA + 'Magadan'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2951);
Z[ASIA + 'Makassar'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2952);
Z[ASIA + 'Manila'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2953);
Z[ASIA + 'Muscat'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2954);
Z[ASIA + 'Nicosia'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2955);
Z[ASIA + 'Novokuznetsk'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2956);
Z[ASIA + 'Novosibirsk'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2957);
Z[ASIA + 'Omsk'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2958);
Z[ASIA + 'Oral'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2959);
Z[ASIA + 'Phnom_Penh'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2960);
Z[ASIA + 'Pontianak'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2961);
Z[ASIA + 'Pyongyang'] = T9;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2962);
Z[ASIA + 'Qatar'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2963);
Z[ASIA + 'Qyzylorda'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2964);
Z[ASIA + 'Rangoon'] = '+06:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2965);
Z[ASIA + 'Riyadh'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2966);
Z[ASIA + 'Saigon'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2967);
Z[ASIA + 'Sakhalin'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2968);
Z[ASIA + 'Samarkand'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2969);
Z[ASIA + 'Seoul'] = T9;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2970);
Z[ASIA + 'Shanghai'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2971);
Z[ASIA + 'Singapore'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2972);
Z[ASIA + 'Taipei'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2973);
Z[ASIA + 'Tashkent'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2974);
Z[ASIA + 'Tbilisi'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2975);
Z[ASIA + 'Tehran'] = '+03:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2976);
Z[ASIA + 'Tel_Aviv'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2977);
Z[ASIA + 'Thimbu'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2978);
Z[ASIA + 'Thimphu'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2979);
Z[ASIA + 'Tokyo'] = T9;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2980);
Z[ASIA + 'Ujung_Pandang'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2981);
Z[ASIA + 'Ulaanbaatar'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2982);
Z[ASIA + 'Ulan_Bator'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2983);
Z[ASIA + 'Urumqi'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2984);
Z[ASIA + 'Vientiane'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2985);
Z[ASIA + 'Vladivostok'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2986);
Z[ASIA + 'Yakutsk'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2987);
Z[ASIA + 'Yekaterinburg'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2988);
Z[ASIA + 'Yerevan'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2989);
Z[ATLANTIC + 'Azores'] = T1m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2990);
Z[ATLANTIC + 'Bermuda'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2991);
Z[ATLANTIC + 'Canary'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2992);
Z[ATLANTIC + 'Cape_Verde'] = T1m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2993);
Z[ATLANTIC + 'Faeroe'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2994);
Z[ATLANTIC + 'Faroe'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2995);
Z[ATLANTIC + 'Jan_Mayen'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2996);
Z[ATLANTIC + 'Madeira'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2997);
Z[ATLANTIC + 'Reykjavik'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2998);
Z[ATLANTIC + 'South_Georgia'] = T2m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 2999);
Z[ATLANTIC + 'St_Helena'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3000);
Z[ATLANTIC + 'Stanley'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3001);
Z[AUSTRALIA + 'ACT'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3002);
Z[AUSTRALIA + 'Adelaide'] = '+09:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3003);
Z[AUSTRALIA + 'Brisbane'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3004);
Z[AUSTRALIA + 'Broken_Hill'] = '+09:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3005);
Z[AUSTRALIA + 'Canberra'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3006);
Z[AUSTRALIA + 'Currie'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3007);
Z[AUSTRALIA + 'Darwin'] = '+09:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3008);
Z[AUSTRALIA + 'Eucla'] = '+08:45';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3009);
Z[AUSTRALIA + 'Hobart'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3010);
Z[AUSTRALIA + 'LHI'] = '+10:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3011);
Z[AUSTRALIA + 'Lindeman'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3012);
Z[AUSTRALIA + 'Lord_Howe'] = '+10:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3013);
Z[AUSTRALIA + 'Melbourne'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3014);
Z[AUSTRALIA + 'North'] = '+09:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3015);
Z[AUSTRALIA + 'NSW'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3016);
Z[AUSTRALIA + 'Perth'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3017);
Z[AUSTRALIA + 'Queensland'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3018);
Z[AUSTRALIA + 'South'] = '+09:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3019);
Z[AUSTRALIA + 'Sydney'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3020);
Z[AUSTRALIA + 'Tasmania'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3021);
Z[AUSTRALIA + 'Victoria'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3022);
Z[AUSTRALIA + 'West'] = T8;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3023);
Z[AUSTRALIA + 'Yancowinna'] = '+09:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3024);
Z[BRAZIL + 'Acre'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3025);
Z[BRAZIL + 'DeNoronha'] = T2m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3026);
Z[BRAZIL + 'East'] = T3m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3027);
Z[BRAZIL + 'West'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3028);
Z[CANADA + 'Atlantic'] = T4m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3029);
Z[CANADA + 'Central'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3030);
Z[CANADA + 'Eastern'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3031);
Z[CANADA + 'East-Saskatchewan'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3032);
Z[CANADA + 'Mountain'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3033);
Z[CANADA + 'Newfoundland'] = '−03:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3034);
Z[CANADA + 'Pacific'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3035);
Z[CANADA + 'Saskatchewan'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3036);
Z[CANADA + 'Yukon'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3037);
Z[ETC + GMT] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3038);
Z[ETC + GMT + '+0'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3039);
Z[ETC + 'UCT'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3040);
Z[ETC + 'Universal'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3041);
Z[ETC + 'UTC'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3042);
Z[ETC + 'Zulu'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3043);
Z[EUROPE + 'Amsterdam'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3044);
Z[EUROPE + 'Andorra'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3045);
Z[EUROPE + 'Athens'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3046);
Z[EUROPE + 'Belfast'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3047);
Z[EUROPE + 'Belgrade'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3048);
Z[EUROPE + 'Berlin'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3049);
Z[EUROPE + 'Bratislava'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3050);
Z[EUROPE + 'Brussels'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3051);
Z[EUROPE + 'Bucharest'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3052);
Z[EUROPE + 'Budapest'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3053);
Z[EUROPE + 'Chisinau'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3054);
Z[EUROPE + 'Copenhagen'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3055);
Z[EUROPE + 'Dublin'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3056);
Z[EUROPE + 'Gibraltar'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3057);
Z[EUROPE + 'Guernsey'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3058);
Z[EUROPE + 'Helsinki'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3059);
Z[EUROPE + 'Isle_of_Man'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3060);
Z[EUROPE + 'Istanbul'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3061);
Z[EUROPE + 'Jersey'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3062);
Z[EUROPE + 'Kaliningrad'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3063);
Z[EUROPE + 'Kiev'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3064);
Z[EUROPE + 'Lisbon'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3065);
Z[EUROPE + 'Ljubljana'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3066);
Z[EUROPE + 'London'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3067);
Z[EUROPE + 'Luxembourg'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3068);
Z[EUROPE + 'Madrid'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3069);
Z[EUROPE + 'Malta'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3070);
Z[EUROPE + 'Mariehamn'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3071);
Z[EUROPE + 'Minsk'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3072);
Z[EUROPE + 'Monaco'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3073);
Z[EUROPE + 'Moscow'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3074);
Z[EUROPE + 'Nicosia'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3075);
Z[EUROPE + 'Oslo'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3076);
Z[EUROPE + 'Paris'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3077);
Z[EUROPE + 'Podgorica'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3078);
Z[EUROPE + 'Prague'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3079);
Z[EUROPE + 'Riga'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3080);
Z[EUROPE + 'Rome'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3081);
Z[EUROPE + 'Samara'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3082);
Z[EUROPE + 'San_Marino'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3083);
Z[EUROPE + 'Sarajevo'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3084);
Z[EUROPE + 'Simferopol'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3085);
Z[EUROPE + 'Skopje'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3086);
Z[EUROPE + 'Sofia'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3087);
Z[EUROPE + 'Stockholm'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3088);
Z[EUROPE + 'Tallinn'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3089);
Z[EUROPE + 'Tirane'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3090);
Z[EUROPE + 'Tiraspol'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3091);
Z[EUROPE + 'Uzhgorod'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3092);
Z[EUROPE + 'Vaduz'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3093);
Z[EUROPE + 'Vatican'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3094);
Z[EUROPE + 'Vienna'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3095);
Z[EUROPE + 'Vilnius'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3096);
Z[EUROPE + 'Volgograd'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3097);
Z[EUROPE + 'Warsaw'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3098);
Z[EUROPE + 'Zagreb'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3099);
Z[EUROPE + 'Zaporozhye'] = T2;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3100);
Z[EUROPE + 'Zurich'] = T1;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3101);
Z[GMT] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3102);
Z[GMT + '+0'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3103);
Z[GMT + '0'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3104);
Z[GMT + '-0'] = T0;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3105);
Z[INDIAN + 'Antananarivo'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3106);
Z[INDIAN + 'Chagos'] = T6;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3107);
Z[INDIAN + 'Christmas'] = T7;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3108);
Z[INDIAN + 'Cocos'] = '+06:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3109);
Z[INDIAN + 'Comoro'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3110);
Z[INDIAN + 'Kerguelen'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3111);
Z[INDIAN + 'Mahe'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3112);
Z[INDIAN + 'Maldives'] = T5;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3113);
Z[INDIAN + 'Mauritius'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3114);
Z[INDIAN + 'Mayotte'] = T3;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3115);
Z[INDIAN + 'Reunion'] = T4;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3116);
Z[MEXICO + 'BajaNorte'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3117);
Z[MEXICO + 'BajaSur'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3118);
Z[MEXICO + 'General'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3119);
Z[PACIFIC + 'Apia'] = T13;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3120);
Z[PACIFIC + 'Auckland'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3121);
Z[PACIFIC + 'Chatham'] = '+12:45';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3122);
Z[PACIFIC + 'Chuuk'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3123);
Z[PACIFIC + 'Easter'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3124);
Z[PACIFIC + 'Efate'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3125);
Z[PACIFIC + 'Enderbury'] = T13;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3126);
Z[PACIFIC + 'Fakaofo'] = T13;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3127);
Z[PACIFIC + 'Fiji'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3128);
Z[PACIFIC + 'Funafuti'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3129);
Z[PACIFIC + 'Galapagos'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3130);
Z[PACIFIC + 'Gambier'] = T9m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3131);
Z[PACIFIC + 'Guadalcanal'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3132);
Z[PACIFIC + 'Guam'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3133);
Z[PACIFIC + 'Honolulu'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3134);
Z[PACIFIC + 'Johnston'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3135);
Z[PACIFIC + 'Kiritimati'] = '+14:00';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3136);
Z[PACIFIC + 'Kosrae'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3137);
Z[PACIFIC + 'Kwajalein'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3138);
Z[PACIFIC + 'Majuro'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3139);
Z[PACIFIC + 'Marquesas'] = '−09:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3140);
Z[PACIFIC + 'Midway'] = T11m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3141);
Z[PACIFIC + 'Nauru'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3142);
Z[PACIFIC + 'Niue'] = T11m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3143);
Z[PACIFIC + 'Norfolk'] = '+11:30';
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3144);
Z[PACIFIC + 'Noumea'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3145);
Z[PACIFIC + 'Pago_Pago'] = T11m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3146);
Z[PACIFIC + 'Palau'] = T9;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3147);
Z[PACIFIC + 'Pitcairn'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3148);
Z[PACIFIC + 'Pohnpei'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3149);
Z[PACIFIC + 'Ponape'] = T11;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3150);
Z[PACIFIC + 'Port_Moresby'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3151);
Z[PACIFIC + 'Rarotonga'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3152);
Z[PACIFIC + 'Saipan'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3153);
Z[PACIFIC + 'Samoa'] = T11m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3154);
Z[PACIFIC + 'Tahiti'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3155);
Z[PACIFIC + 'Tarawa'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3156);
Z[PACIFIC + 'Tongatapu'] = T13;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3157);
Z[PACIFIC + 'Truk'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3158);
Z[PACIFIC + 'Wake'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3159);
Z[PACIFIC + 'Wallis'] = T12;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3160);
Z[PACIFIC + 'Yap'] = T10;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3161);
Z[US + 'Alaska'] = T9m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3162);
Z[US + 'Aleutian'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3163);
Z[US + 'Arizona'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3164);
Z[US + 'Central'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3165);
Z[US + 'Eastern'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3166);
Z[US + 'East-Indiana'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3167);
Z[US + 'Hawaii'] = T10m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3168);
Z[US + 'Indiana-Starke'] = T6m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3169);
Z[US + 'Michigan'] = T5m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3170);
Z[US + 'Mountain'] = T7m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3171);
Z[US + 'Pacific'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3172);
Z[US + 'Pacific-New'] = T8m;
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3173);
Z[US + 'Samoa'] = T11m;


_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3176);
strtotime.TIMEZONEMAP = Z;

// Put in the Date namespace
_yuitest_coverline("build/gallery-strtotime/gallery-strtotime.js", 3179);
Y.mix(Y.namespace("Date"), strtotime);




}, '@VERSION@', {"requires": ["yui-base"]});
