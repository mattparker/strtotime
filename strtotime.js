YUI.add('strtotime', function (Y) {
    "use strict";
    /**
     * Implementation of php strtotime function
     *
     * http://php.net/manual/en/function.strtotime.php
     * http://svn.php.net/viewvc/php/php-src/trunk/ext/date/lib/parse_date.re?revision=320481&view=markup
     *
     * @method strtotime
     * @param {String} time          a date/time string, including relative formats
     * @param {Int}* baseTimestamp   timestamp to use as case for date calculation

     * Copyright Matt Parker, Lamplight Database Systems Limited 2013
     * @licence BSD
     */


    // Use Internationalised stuff if we can
    var INTL = {}, //Y.Intl ? Y.Intl.get("datatype-date-format") : {},
        REGEXP = {},
        TESTS = [],





        ///////////////////////////////////////////////////////////////////////
        // Utility methods:

        /**
         @method _change

         Changes a timestamp by an amount

         @param {Int} ts Timestamp
         @param {Int} d Delta - how much to change
         @param {String} method Method on Date to use
         @return {Int} Timestamp
         */
        _change = function (ts, d, method) {
            var tmp = new Date(ts);
            if (tmp["set" + method] === undefined) {
                return ts;
            }                    
            tmp["set" + method](tmp["get" + method]() + d);
            return tmp.getTime();
        },

        /**
         @method _set

         Sets a timstamp
         
         @param {Int} ts Timestamp
         @param {Int} val Value to set to
         @param {String} methodMethod on Date to use
         @return {Int} Timestamp
         */
        _set = function (ts, val, method) {
            var tmp = new Date(ts);
            if (tmp["set" + method] === undefined) {
                return ts;
            }
            tmp["set" + method](val);
            return tmp.getTime();
        },


        /**
         @method _findLastDayOf

         Finds the last day of (e.g. 30) of a month

         @param {Int} ts Timestamp
         @return {Int} Days in the month
         */
        _findLastDayOf = function (ts) {
            var tmp = new Date(ts),
                mon = tmp.getUTCMonth();

            // go to the first of the next month and subtract a day
            tmp.setUTCDate(1); 
            tmp.setUTCMonth((mon + 1) % 12);
            ts = tmp.getTime() - 86400000;
            tmp = new Date(ts);
            return tmp.getUTCDate();
        },

        /**
         @method _handleMeridian

         Deals with am/pm, adding 12 hours if need be.

         @param {Int|String} hour Hours parsed from a date
         @param {String} ampm The "am" or "pm" (or variations) parsed from the string
         @return {Int} Corrected hours in 24-hour clock
         */
        _handleMeridian = function (hour, ampm) {

            var c1;
            hour = parseInt(hour, 10);

            if (ampm === undefined) {
                return hour;
            }
            ampm = ampm.replace(".", "");

            c1 = ampm.substring(0, 1).toLowerCase();
            
            if (hour < 12 && c1 === "p") {
                return hour + 12;
            }
            return hour;

        },


        /**
         * Translates user-defined versions of 'next' to 
         * default English so we know what they mean
         *
         * @method _lookupRelTextText
         * @param {String} text Translated version of the string
         * @return {String} English version: next|first|previous|last
         *      If not found it will pass text straight back
         */
        _lookupRelTextText = function (text) {
            var i,
                rtt = strtotime.RELTEXTTEXT;
            for (i in rtt) {
                if (rtt.hasOwnProperty(i)) {
                    if (rtt[i] === text) {
                        return i;
                    }
                }
            }
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

            var index;

            switch (text) {
                case 'this':
                    return 0;
                    break;
                case 'next':
                    return 1;
                    break;
                case 'last':
                case 'previous':
                    return -1;
                    break;
                default:
                    index = strtotime.RELTEXTNUMBER.indexOf(text);
                    if (index !== -1) {
                        return index + 1;
                    }
                    return text;
                    break;

            }
        },


        /**
         * Translates user-defined versions of time
         * units (hour, second, minute, year etc)
         * and returns an Enhlish version that
         * we know what it means
         *
         * @method _lookupRelTextUnit
         * @param {String} text Parsed unit string
         * @return {String} English version
         */
        _lookupRelTextUnit = function (text) {
            var i,
                rtt = strtotime.RELTEXTUNIT;
            for (i in rtt) {
                if (rtt.hasOwnProperty(i)) {
                    if (rtt[i].indexOf(text) !== -1) {
                        return i;
                    }
                }
            }
            return text;
        },

        /**
         * Finds the 'third Wednesday' relative to timestamp
         * @param Int       Timestamp
         * @param {Object}  What to find
         *    @param {Int} dayIndex   Day of week (Sunday = 0) to find
         *    @param {Int} weekIndex  Which week to find (first = 1)
         */
        _findWeekdayOf = function (ts, tofind) {
            var tmp = new Date(ts),
                tmt,
                thisWeek,
                addWeeks;


            if (tofind.weekIndex === undefined) {
                tofind.weekIndex = "next";
            } else {
                tofind.weekIndex = _lookupRelTextText(tofind.weekIndex);
            }

            // 'last' needs handling differently:
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
                tmt = tmp.setUTCDate(_findLastDayOf(ts));
                return _setToDay(tmt, tofind.dayIndex, -1);
            }

            //thisWeek = Math.floor(new Date(ts).getUTCDate() / 7);

            
            
            // now add on the right number of weeks
            switch (tofind.weekIndex) {
                case 'next':
                    addWeeks = 0;//thisWeek;
                    break;
                case 'previous':
                    addWeeks = -1;//thisWeek - 1;
                    break;
                case 'first':
                    tmp.setUTCDate(1);
                    addWeeks = 0;
                    break;
                default:
                    tmp.setUTCDate(1);
                    addWeeks = parseInt(tofind.weekIndex, 10);
                    break;
            }

            // iterate through until we're on the correct day
            /*while (tmp.getUTCDay() !== tofind.dayIndex) {
                tmp = new Date(tmp.getTime() + 86400000);
            }*/

            tmt = _setToDay(ts, tofind.dayIndex, 1);// tmp.getTime();
            tmt = tmt + (604800000 * addWeeks);
            return tmt;
        },


        /**
         * Gets a timestamp for the nearest day of the week
         * from that passed, either forward or back
         *
         * @method _setToDay
         * @param {Int} ts Timestamp
         * @param {Int} dayIndex Day of the week: Sunday = 0, Monday = 1
         * @param {Int} direction +1 = forward, -1 = last
         * @return {Int} Timestamp
         */
        _setToDay = function (ts, dayIndex, direction) {
            var tmp = new Date(ts);
            while(tmp.getUTCDay() !== dayIndex) {
                tmp = new Date(tmp.getTime() + (direction * 86400000));
            }
            return tmp.getTime();
        },


        /**
         * Moves the date first|last|next|previous week
         * 
         * @method _findWeekOf
         * @param {Int} ts Timestamp
         * @param {String} Change
         * @return {Int} Timestamp
         */
        _findWeekOf = function (ts, change) {

            // need to set the day of week to a Monday
            var isMonday = (new Date(ts).getUTCDay() === 1),
                inc = (isMonday ? 86400000 : 0);

            change = _lookupRelTextText(change);

            switch (change) {
                case 'next':
                    return _setToDay(ts + inc, 1, 1);
                    break;
                case 'last':
                case 'previous':
                    ts = ts - 604800000; // go back a week
                    return _setToDay(ts - inc, 1, -1);
                    break;
                case 'this':
                    return _setToDay(ts, 1, -1);
                    break;
                default:
                    return false;
            }

        },

        /**
         * Handles two-digit years, turning them into 4 digits
         * If yr < 70 it'll add on 2000
         * Otherwise it'll add on 1900
         *
         * @method _handleShortYear
         * @param {Int} yr Year to process
         * @return {int} Four-digit year
         */
        _handleShortYear = function (yr) {
            
            var strYr;

            yr = parseInt(yr, 10);
            strYr = yr + "";
            
            if (strYr.length >= 4) {
                return yr;
            }
            if (yr < 100) {
                if (yr < 70) {
                    return yr + 2000;
                } else {
                    return yr + 1900;
                }
            }
            return yr;
        },


        /**
         * Handles text month, looking it up in the original arrays
         * to get the (human - 1-based) month number
         *
         * @method _handleMonthText
         * @param {String} res Match from regexp
         * @return {int} Month number (in human terms - Jan = 1)
         */
        _handleMonthText = function (res) {

            var m, 
                search = ['MONTHFULL', 'MONTHABBR', 'MONTHROMAN'],
                i = 0;

            for (i = 0; i < 3; i = i + 1) {
                m = strtotime[search[i]].indexOf(res);
                if (m !== -1) {
                    return m;
                }
            }
            return false;

        },


        /**
         * Calculates the day number in the year from the weeknumber
         * 
         * http://fossies.org/dox/php-5.3.20-src/date_2lib_2dow_8c_source.html#l00130
         *
         * @method _findDayNrFromWeekNr
         * @param {Int} year 
         * @param {Int} weekNumber
         * @param {Int} dayNumber
         * @return {Int} Day of the year
         */
        _findDayNrFromWeekNr = function (year, weekNumber, dayNumber) {
            /* Figure out the dayofweek for y-1-1 */
            var date1 = new Date(year, 0, 1),
                dow = date1.getUTCDay(),
                day;

            if (dow === 0) {
                dow = 7
            }
            /* then use that to figure out the offset for day 1 of week 1 */
            day = 0 - (dow > 4 ? dow - 7 : dow);

            /* Add weeks and days */
            return day + ((weekNumber - 1) * 7) + dayNumber + 1;
        },



        /**
         * Hash of periods and the number of seconds in each
         * @property _timeList
         * @type {Object}
         * @private
         */
        _timeList = {
            'fortnight': 1209600,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
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
        _processRelativeFixedHash = function (ts, oChange) {

            var num,
                tmp,
                i;


            // Work out the 'first Wednesday' type modifiers
            if (oChange.weekdayOf !== undefined) {
                ts = _findWeekdayOf(ts, oChange.weekdayOf);
                return ts;
            }
            // Work out 'last week' type modifier
            if (oChange.week !== undefined) {
                ts = _findWeekOf(ts, oChange.week);
                return ts;
            }

            // tricky ones
            if (oChange.year !== undefined) {
                num = _calculateRelTextValue(oChange.year);
                ts = relChange.y(ts, num);
            }            
            if (oChange.month !== undefined) {
                num = _calculateRelTextValue(oChange.month);
                ts = relChange.m(ts, num);
            }

            // days, weeks, hours etc
            for (i in _timeList) {
                if (_timeList.hasOwnProperty(i) && oChange[i] !== undefined) {
                    num = _calculateRelTextValue(oChange[i]);
                    ts = ts + (num * _timeList[i] * 1000);
                }
            }

            return ts;
        },

        /**
         * Makes relative changes to different components of the date
         * 
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
                return _change(ts, d, 'UTCFullYear');
            },
            m: function (ts, d) {
                // change the years:
                /*var years = (d === 0 ? 0 : (Math.abs(d)/d) * Math.floor(Math.abs(d) / 12));
                if (years !== 0) {
                    ts = _change(ts, years, 'UTCFullYear');
                }*/
                return _change(ts, d, 'UTCMonth');
            },
            d: function (ts, d) {
                return ts + (d * 86400000); // milliseconds in a day
            },
            h: function (ts, d) {
                return ts + (d * 3600000); // milliseconds in an hour
            },
            i: function (ts, d) {
                return ts + (d * 60000); // milliseconds in a minute
            },
            s: function (ts, d) {
                return ts + (d * 1000);
            }
        },

        /**
         * Sets different components of the date
         * 
         * @property absChange.y {Function}
         * @property absChange.m {Function}
         * @property absChange.d {Function}
         * @property absChange.h {Function}
         * @property absChange.i {Function}
         * @property absChange.s {Function}
         *      @param {Int} ts Timestamp to start with
         *      @param {Int} val New value
         *      @return {Int} New timestamp
         */
        absChange = {
            y: function (ts, val) {
                return _set(ts, val, 'UTCFullYear');
            },
            m: function (ts, val) {
                return _set(ts, val, 'UTCMonth');
            },
            d: function (ts, val) {
                return _set(ts, val, 'UTCDate');
            },
            h: function (ts, val) {/*
                if (fixTime === true) {
                    return false;
                }*/
                return _set(ts, val, 'UTCHours');
            },
            i: function (ts, val) {
                return _set(ts, val, 'UTCMinutes');
            },
            s: function (ts, val) {
                return _set(ts, val, 'UTCSeconds');
            }
        },


        /**
         * Alters the timestamp depending on the timezone parsed 
         * from the string
         * 
         * @method timezoneChange
         * @param {Int} ts Timestamp
         * @param {String} tz Timezone string
         * @return {Int} Timestamp
         */
        timezoneChange = function (ts, tz) {
            
            // val should be +02:30 format
            var sign = tz.substring(0, 1),
                parts = tz.substring(1).split(":"),
                h = parseInt(parts[0], 10),
                i = parseInt(parts[1], 10),
                mult = (sign === "+" ? -1 : 1);
            ts = relChange.h(ts, (mult * h));
            return relChange.i(ts, (mult * i));
        },


        /**
         @method resetTime

         Resets the h, i, s of a timestamp to 0, 0, 0
         @param {Int} ts Timestamp
         @return {Int} Timestamp
         */
        _resetTime = function (ts) {
            ts = _set(ts, 0, 'UTCHours');
            ts = _set(ts, 0, 'UTCMinutes');
            return _set(ts, 0, 'UTCSeconds');
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

         * @constructor 
         * @class Modificator
         *
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
             * @public
             *
             */
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
             * @public
             */
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
             * @public
             *
             */
            this.hasTime = 0;

            /**
             * Increments this.hasTime by 1
             *
             * @method incTime
             * @return {Int} New value of this.hasTime
             * @public
             *
             */
            this.incTime = function () {
                this.hasTime = this.hasTime + 1;
                return this.hasTime;
            };

            /**
             * Count of number of times date has been set.
             * @property hasDate
             * @type {Int}
             * @default 0
             * @public
             *
             */
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
             * @protected
             *
             */
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
             * @protected
             *
             */            
            this.orderedAbsChanges = [];


            /**
             * 'Model' storage for relative changes to dates/times
             *
             * @property relativeHash
             * @type {Object}
             * @protected
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
             * @protected
             * @default {weekdayOf: undefined}
             *
             */
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
             * @public
             * @param {Object}   Properties to change
             * @param {Boolean}  Whether to add to existing (true) or set (default).
             *                      In some cases we want to make culmulative changes
             * @param {Int}      Index that the test string was found in the 
             *                      original string
             * @return {Object}  Object literal that we've stored
             */
            this.updateRel = function (oChange, addOrSet, index) {
                var i,
                    c, 
                    rH = Y.clone(this.relativeHash);

                for (i in oChange) {

                    if (oChange.hasOwnProperty(i)) {

                        if (i === "weekdayOf") {

                            this.relativeFixedHash.weekdayOf = oChange[i];

                        } else if (i === "week") {

                            this.relativeFixedHash.week = oChange[i];

                        } else if (i === "relative") {

                            this.relativeFixedHash = oChange[i];
                            
                        } else {
                            c = parseInt(oChange[i], 10);
                            if (addOrSet === true) {
                                rH[i] += c;
                            } else {
                                rH[i] = c;
                            }
                        }
                    }
                }
                this.orderedRelChanges[index] = rH;
                return rH;
            };


            /**
             * The direction (in time) relative changes should be made:
             * +1 => into the future, -1 into the past
             *
             * @property relativeDirection
             * @type {Int}
             * @protected 
             * @default 1
             */
            this.relativeDirection = 1;


            /**
             * 'Model' storage for absolute changes to dates/times
             *
             * @property absoluteHash
             * @type {Object}
             * @protected
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
             * @protected
             * @default {
                lastDay: undefined,
                firstDay: undefined
               }
             *
             */
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
             * @public
             * @param {Object}   Properties to change
             * @param {Boolean}  Whether to add to existing (true) or set (default).
             *                      In some cases we want to make culmulative changes
             * @param {Int}      Index that the test string was found in the 
             *                      original string
             * @return {Object}  Object literal that we've stored
             */
            this.updateAbs = function (oChange, addOrSet, index) {
                var i,
                    c,
                    aH = Y.clone(this.absoluteHash);

                for (i in oChange) {
                    if (oChange.hasOwnProperty(i)) {

                        if (i === "fixTime" || i === "fixDate" || i === "specialFn" || i === "z") {
                            aH[i] = oChange[i];
                        } else {

                            c = parseFloat(oChange[i]);


                            if (addOrSet === true && aH[i] !== undefined) {                                                   
                                aH[i] += c;
                                // need to remember this for next time.
                                this.absoluteHash[i] = true;
                            } else {
                                aH[i] = c;
                            }
                        }
                    }
                }
                this.orderedAbsChanges[index] = aH;
                return aH;
            };


            /**
             * A list of keys that have matched OK
             *
             * @property matchedKeys
             * @type Array
             * @public
             */
            this.matchedKeys = [];


            /**
             * The timezone string parsed from the input string
             *
             * @property timezoneString
             * @type {String}
             * @default ""
             */
            this.timezoneString = "";


        },
        



        /**
         * @method strtotime
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
         * Examples:
         *  Y.DataType.Date.strtotime("2012-05-02")  // returns
         *  Y.DataType.Date.strtotime("2/5/2012 5.15pm") // returns
         *  Y.DataType.Date.strtotime("next Thursday", 1360022400)  // returns
         *  Y.DataType.Date.strtotime("+3 months and 2 days", 1360022400) // returns
         *
         *
         * @static
         * @public
         *
         * @param {String} time Date and/or modifier(s)
         * @param {Int}* baseTimestamp Timestamp (in seconds)
         * @return {Int}    Parsed timestamp (in seconds) or false if there was an error
         *
         */
        strtotime = function (time, baseTimestamp) {


            //// Define variables
            var ms = baseTimestamp * 1000 || new Date().getTime(),
                parsedDate,
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
            if (TESTS.length === 0) {
                REGEXP = strtotime.finishRegExp(strtotime.constructRegExp());
                TESTS = strtotime.finishTests(REGEXP, strtotime.constructTests(REGEXP))
            }


            time = Y.Lang.trim(time);
            
            copyTime = time;


            // Go through, looking for the relevant regexps 
            // and acting accordingly
            for (i = 0; i < TESTS.length; i = i + 1) {

                test = TESTS[i];

                // spaces are added because we put them on the regexs
                // and this is easier than detecting start/end of strings
                reResult = test.re.exec(" " + copyTime + " ");

                while (reResult) {
                    index = test.re.exec(" " + time + " ").index;
                    test.fn.call(undefined, reResult, index, mods);

                    mods.matchedKeys.push(test.key);

                    // remove the matched string from our copy.
                    copyTime = copyTime.replace(Y.Lang.trim(reResult[0]), "");

                    // try the same one again:
                    reResult = test.re.exec(" " + copyTime + " ");
                }

            }


            // Error conditions

            // Unexpected characters left after all our matching?
            // That's an error.
            if (Y.Lang.trim(copyTime) !== '') {
                return false;
            }



            // We'll handle these things separately
            ignoreInAbs = ['specialFn', 'lastDay', 'firstDay', 'fixTime', 'fixDate'];
            // Now apply absolute changes
            for (j = 0; j < mods.orderedAbsChanges.length; j = j + 1) {

                thisChange = mods.orderedAbsChanges[j];
                if (thisChange !== undefined) {

                    for (i in thisChange) {
                    
                        if (thisChange.hasOwnProperty(i) && ignoreInAbs.indexOf(i) === -1 && thisChange[i] !== undefined) {
                            
                            // can't change fixed times
                            if (i === 'h' && mods.fixTime === true) {
                                return false;
                            }

                            // not an error but we skip over days if they've been fixed
                            if (i === 'd' && mods.fixDate.d === true) {
                                continue;
                            }

                            // Make the actual change
                            ms = absChange[i](ms, thisChange[i]);

                            // OK, that change did fix the day, so we remember that
                            if (thisChange.fixDate.d === true) {
                                mods.fixDate.d = true;
                            }

                            // An error occurred
                            if (ms === false) {
                                return false;
                            }

                        }
                    }


                    // If this change has the effect of fixing time (ie it shouldn't be changed again)
                    // we need to remember this:
                    if (thisChange.fixTime === true) {
                        mods.fixTime = true;
                    }
                    // specialFn is called after everything else
                    if (thisChange.specialFn !== undefined) {
                        ms = thisChange.specialFn(ms, thisChange);
                    }
                    // an error was detected by specialFn
                    if (ms === false) {
                        return false;
                    }
                }
            }



            // Now apply relativeHash changes
            for (j = 0; j < mods.orderedRelChanges.length; j = j + 1) {

                thisChange = mods.orderedRelChanges[j];

                if (thisChange !== undefined) {
                    for (i in thisChange) {
                
                        if (thisChange.hasOwnProperty(i) && ['weekdayOf', 'week', 'relative'].indexOf(i) === -1 && thisChange[i] !== 0) {

                            ms = relChange[i](ms, mods.relativeDirection * thisChange[i]);

                        }
                    }
                }
            }


            // More complex changes that need the above to complete first

            // last/first day:
            if (mods.absoluteFixedHash.lastDay === 1) {
                // find date of last day of this month
                ms = absChange.d(ms, _findLastDayOf(ms));

            } else if (mods.absoluteFixedHash.firstDay === 1) {
                // set to the first day
                ms = absChange.d(ms, 1);

            }


            // Do any final relative changes:
            ms = _processRelativeFixedHash(ms, mods.relativeFixedHash);
            if (ms === false) {
                return false;
            }


            // Finally do timezone correction
            if (mods.timezoneString !== '') {
                ms = timezoneChange(ms, mods.timezoneString);
            }



            return Math.floor(ms / 1000);

        };




        /**
         * @method constructRegExp
         * Builds up a set of strings that will be used in regex constructor in 
         * the tests.  This happens once, the first time the strtotime function
         * is used.
         * @protected
         * @static
         * @return {Object}
         */
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

            var ret = {},

                space = '[ \t]+', 
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
                tz = '\\(? [A-Za-z]{1,6}\\)?|[A-Za-z]+([_/-][A-Za-z]+)+',
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
                datefull = day + '([ \t\.\-])*' + monthtext + '([ \t\.\-])*' + year,
                datenoday = monthtext + '([ \t\.\-])*' + year4,
                datenodayrev = year4 + '([ \t\.\-])*' + monthtext,
                datetextual = monthtext + '([ \t\.\-])*' + day + '[\,\.stndrh\t ]+' + year,
                datenoyear = monthtext + '([ \t\.\-])*' + day + '[\,\.stndrh\t ]*', // why is this one finish with * and above is +
                datenoyearrev = day + '([ \t\.\-])*' + monthtext,
                datenocolon = year4 + monthlz + daylz,

                // Special formats
                soap = year4 + '-' + monthlz + '-' + daylz + 'T' + hour24lz + ':' + minutelz + ':' + secondlz + frac + tzcorrection + '?',
                xmlrpc = year4 + monthlz + daylz + 'T' + hour24 + ':' + minutelz + ':' + secondlz,
                xmlrpcnocolon = year4 + monthlz + daylz + 't' + hour24 + minutelz + secondlz,
                wddx = year4 + '-' + month + '-' + day + 'T' + hour24 + ':' + minute + ':' + second,
                pgydotd = year4 + '\.?' + dayofyear,
                pgtextshort = '(' + monthabbr + ')-' + daylz + '-' + year,
                pgtextreverse = year + '-(' + monthabbr + ')-' + daylz,
                mssqltime = hour12 + ':' + minutelz + ':' + secondlz + '[:\.]([0-9]+)' + meridian,
                isoweekday = year4 + '-?W' + weekofyear + '\-?([0-7])',
                isoweek = year4 + '-?W' + weekofyear,
                exif = year4 + ':' + monthlz + ':' + daylz + ' ' + hour24lz + ':' + minutelz + ':' + secondlz,
                firstdayof = strtotime.FIRSTDAYOF + '?',
                lastdayof = strtotime.LASTDAYOF + '?',
                backof = strtotime.BACKOF + hour24 + '(' + space + ')?' + meridian + '?',
                frontof = strtotime.FRONTOF + hour24 + '(' + space + ')?' + meridian + '?',

                // common log format
                clf = day + '\/(' + monthabbr + ')\/' + year4 + ':' + hour24lz + ':' + minutelz + ':' + secondlz + space + tzcorrection,

                // timestamp:
                timestamp = "@(\-)?([0-9]+)",

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
                        var i,
                            ret = [],
                            rtt = strtotime.RELTEXTTEXT;

                        for (i in rtt) {
                            if (rtt.hasOwnProperty(i)) {
                                ret.push(rtt[i]);
                            }
                        }
                        return ret.join('|');
                    }()) + ')', // strtotime.RELTEXTTEXT.join('|') + ')',
                
                reltextunit = '((' + (function () {
                        var i,
                            ret = [],
                            rtt = strtotime.RELTEXTUNIT;

                        for (i in rtt) {
                            if (rtt.hasOwnProperty(i)) {
                                ret.push(rtt[i].join('|'));
                            }
                        }
                        return ret.join('|');
                    }()) + ')s?)|' + daytext, //strtotime.RELTEXTUNIT.join('|') + ')s?)' + '|' + daytext, // no 'weeks' currently - need to check why it's separate

                relnumber = '([+\-]*[ \t]*[0-9]+)',
                relative = relnumber + '(' + space + ')?(' + reltextunit + '|week)', // this is weird too, the week
                relativetext = '(' + reltextnumber + '|' + reltexttext + ')' + space + reltextunit,
                relativetextweek = reltexttext + space + 'week',


                weekdayof = '(' + reltextnumber + '|' + reltexttext + ')' + space + '(' + dayfull + '|' + dayabbr + ')' + space + 'of';

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
                "tz": tz,
                "tzcorrection": tzcorrection,

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
         * @method finishRegExp
         * @static
         * User-overridable function that is called after the default regex strings
         * have been constructed, to allow user modification if needed.
         *
         * @public
         * @param {Object}  The strings constructed by strtotime.constructRegExp
         * @return {Object}
         */
        strtotime.finishRegExp = function (oRegEx) {
            return oRegEx;
        }


        /**
         * @method constructTests
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
         * @param {Object}  Regex strings built by constructRegExp
         * @return {Array}
         */
        strtotime.constructTests = function (oRegEx) {

            // The tests to carry out, and what happens
            return [

                // Fixed strings:
                {key: 'yesterday', re: new RegExp('yesterday'), fn: function (aRes, index, mods) {
                    Y.log('strtotime: Matched yesterday');
                    mods.updateRel({d: -1}, null, index);
                    mods.updateAbs({h: 0, i: 0, s: 0}, true, index);
                }},

                {key: 'now', re: new RegExp('now'), fn: function (aRes, index, mods) {
                    Y.log('strtotime: Matched now');
                }},

                {key: 'noon', re: new RegExp('noon'), fn: function (aRes, index, mods) {
                    Y.log('strtotime: Matched noon');
                    mods.updateAbs({
                        h: 12, 
                        i: 0, 
                        s: 0, 
                        fixTime: true, 
                        specialFn: function (ms, oChange) {
                            mods.incTime(); 
                            return ms;
                        }
                    }, null, index);
                }},

                {key: 'midnight|today', re: new RegExp('midnight|today'), fn: function (aRes, index, mods) {
                    Y.log('strtotime: Matched midnight|today');
                    mods.updateAbs({h: 0, i: 0, s:0}, null, index);
                }},

                {key: 'tomorrow', re: new RegExp('tomorrow'), fn: function (aRes, index, mods) {
                    Y.log('strtotime: Matched tomorrow');
                    mods.updateRel({d: 1}, null, index);                        
                    mods.updateAbs({h: 0, i: 0, s: 0}, null, index);                    
                }},



                // Unix timestamp
                {key: 'timestamp', re: new RegExp(oRegEx.timestamp), fn: function (aRes, index, mods) {
                    var tmp = new Date(parseInt(aRes[2], 10) * 1000);
                    Y.log('strtotime: Matched timestamp');
                    mods.updateAbs({
                        y: tmp.getUTCFullYear(),
                        m: tmp.getUTCMonth(),
                        d: tmp.getUTCDate(),
                        h: tmp.getUTCHours(),
                        i: tmp.getUTCMinutes(),
                        s: tmp.getUTCSeconds()
                    }, true, index);
                    mods.incTime();
                }},



                // Simple relative things
                {key: 'firstdayof', re: new RegExp(oRegEx.firstdayof), fn: function (aRes, index, mods) {
                    Y.log('strtotime: Matched firstdayof');
                    mods.absoluteFixedHash.firstDay = 1;
                }},
                {key: 'lastdayof', re: new RegExp(oRegEx.lastdayof), fn: function (aRes, index, mods) {
                    Y.log('strtotime: Matched lastdayof');
                    mods.absoluteFixedHash.lastDay = 1;
                }},

                {key: 'frontof', re: new RegExp(oRegEx.frontof), fn: function (aRes, index, mods) {
                    
                    Y.log('strtotime: Matched frontof');
                    
                    // handle the meridian
                    aRes[1] = _handleMeridian(aRes[1], aRes[3]);

                    mods.updateAbs({
                        h: aRes[1],
                        i: 0,
                        s: 0
                    }, null, index);
                    mods.updateRel({
                        i: -15
                    }, null, index);

                    mods.incTime();
                }},
                {key: 'backof', re: new RegExp(oRegEx.backof), fn: function (aRes, index, mods) {
                    
                    Y.log('strtotime: Matched backof');
                    aRes[1] = _handleMeridian(aRes[1], aRes[3]);

                    mods.updateAbs({
                        h: aRes[1],
                        i: 0,
                        s: 0
                    }, null, index);                        
                    mods.updateRel({
                        i: 15
                    }, null, index);

                    mods.incTime();                        
                }},


                // complex relative things - weekday of
                {key: 'weekdayof', re: new RegExp(oRegEx.weekdayof), fn: function (aRes, index, mods) {
                    
                    var modifier = aRes[1], // first, second or next, last etc
                        ind = strtotime.RELTEXTNUMBER.indexOf(modifier),
                        dow = aRes[4],
                        dowIndex = strtotime.DAYFULL.indexOf(dow) !== -1 ?
                            strtotime.DAYFULL.indexOf(dow) :
                            strtotime.DAYABBR.indexOf(dow);

                    Y.log('strtotime: Matched weekdayof');

                    if (ind !== -1) {
                        // something like 'third Wednesday in June'
                        mods.updateRel({
                            weekdayOf: {
                                dayIndex: dowIndex,
                                weekIndex: ind
                            }
                        }, null, index);
                    } else {
                        // something like 'last Wednesday in June'
                        mods.updateRel({
                            weekdayOf: {
                                dayIndex: dowIndex,
                                weekIndex: aRes[1]
                            }
                        }, null, index);                        
                    }
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

                    Y.log('strtotime: Matched mssqltime');
                    mods.updateAbs({
                        h: _handleMeridian(aRes[1], aRes[5]),
                        i: aRes[2],
                        s: aRes[3] + '.' + aRes[4]
                    }, null, index);
                    mods.incTime();
                }},

                {key: 'times12', re: new RegExp([oRegEx.timelong12, oRegEx.timeshort12, oRegEx.timetiny12].join('|')), fn: function (aRes, index, mods) {

                    var hr,
                        mn,
                        sc,
                        mr,
                        newAbs = {};
                    Y.log('strtotime: Matched timelong12|timeshort12|timetiny12');
                    // get the times:
                    hr = aRes[1] || aRes[6] || aRes[10];
                    mn = aRes[2] || aRes[7];
                    sc = aRes[3];
                    mr = aRes[5] || aRes[9] || aRes[12];

                    if (mr !== undefined) {
                        hr = _handleMeridian(hr, mr);
                    }

                    newAbs.h = hr;
                    if (mn !== undefined) {
                        newAbs.i = mn;
                    }
                    if (sc !== undefined) {
                        newAbs.s = sc;
                    }

                    mods.updateAbs(newAbs, null, index);
                    mods.incTime();
                }},

                // This is in the wrong place, according to the C source.  It should be further
                // down, with the other dates.  However, if if comes after 'times24' 
                // then time24 will match the time part of the exif format
                // and it'll break.
                {key: 'xmlrpcAndFriends', 
                    re: new RegExp([oRegEx.xmlrpc, oRegEx.xmlrpcnocolon, oRegEx.soap, oRegEx.wddx, oRegEx.exif].join("|")), 
                    fn: function (aRes, index, mods) {

                        Y.log('strtotime: Matched xmlrpc|xmlrpcnocolon|soap|wddx|exif');

                        mods.updateAbs({
                            y: aRes[1] || aRes[7] || aRes[13] || aRes[23] || aRes[32],
                            m: parseInt(aRes[2] || aRes[8] || aRes[14] || aRes[24] || aRes[33], 10) - 1,
                            d: aRes[3] || aRes[9] || aRes[15] || aRes[25] || aRes[34],
                            h: aRes[4] || aRes[10] || aRes[16] || aRes[29] || aRes[35],
                            i: aRes[5] || aRes[11] || aRes[17] || aRes[30] || aRes[36],
                            s: aRes[6] || aRes[12] || aRes[18] || aRes[31] || aRes[37]
                        }, true, index);

                        if (aRes[20] !== undefined) {
                            mods.timezoneString = aRes[20];
                        }

                    }
                },



                {key: 'times24', re: new RegExp([oRegEx.iso8601long, oRegEx.timelong24, oRegEx.timeshort24].join('|')), fn: function (aRes, index, mods) {
                    var hr,
                        mn,
                        sc,
                        fr,
                        newAbs = {};

                    Y.log('strtotime: Matched iso8601long|timelong24|timeshort24');

                    // get the times:
                    hr = aRes[2] || aRes[7] || aRes[11];
                    mn = aRes[3] || aRes[8] || aRes[12];
                    sc = aRes[4] || aRes[9];
                    fr = aRes[5];

                    newAbs.h = hr;
                    if (mn !== undefined) {
                        newAbs.i = mn;
                    }
                    if (sc !== undefined) {
                        newAbs.s = sc;
                        if (fr !== undefined) {
                            newAbs.s += '.' + parseInt(fr);
                        }
                    } 

                    mods.updateAbs(newAbs, null, index);
                    mods.incTime();
                }},



                {key: 'iso8601nocolon', re: new RegExp(oRegEx.iso8601nocolon), fn: function (aRes, index, mods) {

                    Y.log('strtotime: Matched iso8601nocolon');

                    mods.updateAbs({
                        h: aRes[2],
                        i: aRes[3],
                        s: aRes[4]
                    }, null, index);
                }},



                // dates


                {key: 'american', re: new RegExp(oRegEx.american + '|' + oRegEx.americanshort), fn: function (aRes, index, mods) {
                    
                    Y.log('strtotime: Matched american');

                    var upd = {
                        m: parseInt(aRes[1] || aRes[7], 10) - 1,
                        d: aRes[2] || aRes[8],
                        h: 0,
                        i: 0,
                        s: 0
                    };
                    if (aRes[6] !== undefined) {
                        upd.y = _handleShortYear(aRes[6]);
                    }
                    mods.updateAbs(upd, true, index);
                }},

                {key: 'iso8601dates', re: new RegExp([oRegEx.iso8601date4, oRegEx.iso8601dateslash, oRegEx.dateslash].join('|')),
                    fn: function (aRes, index, mods) {

                        Y.log('strtotime: Matched iso8601dates');

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

                    Y.log('strtotime: matched iso8601date2');

                    var y = _handleShortYear(aRes[1]);

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

                    Y.log('strtotime: matched gnudateshorter');

                    var y = _handleShortYear(aRes[1]);

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

                    Y.log('strtotime: matched gnudateshort');

                    var y = _handleShortYear(aRes[1]);

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

                    Y.log('strtotime: matched datefull');

                    var m = _handleMonthText(aRes[6]);

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

                    Y.log('strtotime: matched pointeddate');

                    var y = _handleShortYear(aRes[6] || aRes[12]);

                    if (y === false) {
                        return false;
                    }

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

                    Y.log('strtotime: matched datenoday');

                    var y = _handleShortYear(aRes[6]),
                        m = _handleMonthText(aRes[1]);

                    if (y === false) {
                        return false;
                    }

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

                    Y.log('strtotime: matched datenodayrev');

                    var y = _handleShortYear(aRes[1]),
                        m = _handleMonthText(aRes[3]);

                    if (y === false) {
                        return false;
                    }

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

                    Y.log('strtotime: matched datetextual');

                    var y = _handleShortYear(aRes[10]),
                        upd = {
                            m: _handleMonthText(aRes[1] || aRes[11]),
                            d: aRes[6] || aRes[16],
                            h: 0,
                            i: 0,
                            s: 0
                        };

                    if (y === false) {
                        return false;
                    } else if (!isNaN(y)) {
                        upd.y = y;
                    } else {
                        // it seems that if there's no year and we have 'static' modifiers (e.g. noon)
                        // then "Jan 1st noon" should return false,
                        // but "noon Jan 1st" shouldn't.
                        // Not sure if this is intended by php or a bug.
                        // At the moment this javascript version returns the same value
                        // (1st January {currentyear}, 12:00:00)
                        // 
                        // This does cause some tests to fail.
                    }

                    mods.updateAbs(upd, true, index);

                }},


                {key: 'datenoyearrev', re: new RegExp(oRegEx.datenoyearrev), fn: function (aRes, index, mods) {

                    Y.log('strtotime: matched datenoyearrev');

                    mods.updateAbs({
                        m: _handleMonthText(aRes[6]),
                        d: aRes[1],
                        h: 0,
                        i: 0,
                        s: 0
                    }, true, index);

                }},

                {key: 'datenocolon', re: new RegExp(oRegEx.datenocolon), fn: function (aRes, index, mods) {

                    Y.log('strtotime: matched datenocolon');

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

                    Y.log('strtotime: matched pgydotd');

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

                    Y.log('strtotime: matched isoweekday');

                    var y = parseInt(aRes[1], 10),
                        wk = parseInt(aRes[2], 10),
                        dy = parseInt(aRes[3], 10),
                        days = days = _findDayNrFromWeekNr(y, wk, dy);

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

                    Y.log('strtotime: matched pgtextshort');

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

                    Y.log('strtotime: matched pgtextreverse');

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

                    Y.log('strtotime: matched clf');

                    mods.updateAbs({
                        y: aRes[6],
                        m: _handleMonthText(aRes[5]),
                        d: aRes[1],
                        h: aRes[7],
                        i: aRes[8],
                        s: aRes[9]
                    }, true, index);

                    mods.timezoneString = aRes[10];

                }},



                {key: 'ago', re: new RegExp(oRegEx.ago), fn: function (aRes, index, mods) {

                    Y.log('strtotime: matched ago');

                    mods.relativeDirection = -1;

                }},






                {key: 'daytext', re: new RegExp(oRegEx.daytext), fn: function (aRes, index, mods) {

                    Y.log('strtotime: Matched daytext');

                    var dow = aRes[0],
                        dowIndex = strtotime.DAYFULL.indexOf(dow) !== -1 ?
                            strtotime.DAYFULL.indexOf(dow) :
                            strtotime.DAYABBR.indexOf(dow);

                    mods.updateAbs({
                        h: 0,
                        i: 0,
                        s: 0
                    }, true, index);

                    mods.updateRel({
                        weekdayOf: {
                            dayIndex: dowIndex
                        }
                    });


                }},


                {key: 'relativetextweek', re: new RegExp(oRegEx.relativetextweek), fn: function (aRes, index, mods) {

                    Y.log('strtotime: Matched relativetextweek');

                    // (first|last|next|previous) week

                    mods.updateRel({
                        week: aRes[1]
                    }, null, index);

                }},

                {key: 'relativetext', re: new RegExp(oRegEx.relativetext), fn: function (aRes, index, mods) {

                    Y.log('strtotime: Matched relativetext');

                    // ((first|second|third... )|( next|first|last...))  day|month|year

                    var modifier = aRes[1],
                        period = aRes[4],
                        enPeriod = _lookupRelTextUnit(period),
                        upd = {relative:{}};

                    upd.relative[enPeriod] = modifier;

                    mods.updateRel(upd, null, index);


                }},


                {key: 'monthfull|monthabbr', re: new RegExp(oRegEx.monthfull + '|' + oRegEx.monthabbr), fn: function (aRes, index, mods) {

                    Y.log('strtotime: Matched monthfull|monthabbr');

                    var m = _handleMonthText(aRes[0]);

                    mods.updateAbs({
                        m: m,
                        h: 0,
                        i: 0,
                        s: 0
                    }, true, index);

                }},


                {key: "relative", re: new RegExp(oRegEx.relative), fn: function (aRes, index, mods) {

                    Y.log('strtotime: matched relative');

                    var amt = parseInt(aRes[1], 10),
                        period = _lookupRelTextUnit(aRes[5]),
                        upd = {relative: {}};

                    upd.relative[period] = amt;
                    mods.updateRel(upd, true, index);

                }},


                // This is an extra one to definitely pick up t0813 as a time
                {key: "gnunocolont", re: new RegExp(oRegEx.gnunocolont), fn: function (aRes, index, mods) {
                    
                    Y.log('strtotime: matched gnunocolont');

                    mods.updateAbs({
                        h: aRes[1],
                        i: aRes[2]
                    }, true, index);
                }},


                {key: 'timezone', re: new RegExp('(' + oRegEx.tzcorrection + ')|(' + oRegEx.tz + ')'), fn : function (aRes, index, mods) {

                    Y.log('strtotime: Matched timezone');

                    var tz = aRes[1],
                        tzStr = aRes[5];

                    if (tzStr !== undefined) {
                        tz = strtotime.TIMEZONEMAP[Y.Lang.trim(tzStr)];
                    }

                    if (tz !== undefined) {

                        mods.timezoneString = tz;

                    }

                }},






                // this appears further up in the C source: possibly a source of error (as gnunocolon)
                {key: 'year4', re: new RegExp(oRegEx.year4), fn: function (aRes, index, mods) {

                    Y.log('strtotime: matched year4');

                    mods.updateAbs({
                        y: aRes[1]
                    }, true, index);

                }},

                // This seems like an error.  In the php C source this is listed 
                // after timeshort24.  However, if you do so it matches years
                // that appear as part of longer dates and goes wrong.
                {key: 'gnunocolon', re: new RegExp(oRegEx.gnunocolon), fn: function (aRes, index, mods) {

                    Y.log('strtotime: Matched gnunocolon');

                    mods.updateAbs({
                        specialFn: function (ms, oChange) {

                            var t = aRes[1];
                            // trying to set the time more than once should return an error
                            // This seems to be checked in the C source
                            // in the gnunocolon (and possibly elsewhere)
                            // but not as a general check
                            switch (mods.hasTime) {
                                case 1:
                                    // explicit time and time's already set
                                    if (t === "t") {
                                        return false;
                                    }
                                    return absChange.y(ms, parseFloat("" + aRes[2] + aRes[3]));
                                    break

                                case 0:
                                    mods.incTime();
                                    ms = absChange.h(ms, aRes[2]);
                                    return absChange.i(ms, aRes[3]);
                                    break;

                                default:
                                    // more than once is an error
                                    return false;
                                    break;
                            }
                        }
                    }, null, index);

                }}              

            ];

        };

        /**
         * @method finishTests
         * @static
         * User-overridable function that is called after the default
         * test builder (constructTests) to allow user modification if 
         * needed.
         *
         * @public
         * @param {Object}  Regex strings built earlier
         * @param {Array}   Array of tests built by default process
         * @return {Array}
         */
        strtotime.finishTests = function (oRegEx, aTests) {
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
         * @method resetTests
         * @public
         * @static
         *
         */ 
        strtotime.resetTests = function () {
            TESTS = [];
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
     * @property DAYSPECIAL
     * @static
     * 
     * @type {Array}
     * @default ['weekday', 'weekdays']
     */
    strtotime.DAYSPECIAL = ['weekday', 'weekdays'];
    /**
     * Terms meaning 'first day of'
     * 
     * @property FIRSTDAYOF
     * @static
     * @type {String}
     * @default 'first day of'
     */
    strtotime.FIRSTDAYOF = 'first day of';
    /**
     * Term meaning 'last day of'
     *
     * @property LASYDAYOF
     * @static
     * @type {String}
     * @default 'last day of'
     */
    strtotime.LASTDAYOF = 'last day of';
     /**
      * Term meaning 'back of' (i.e. quarter past)
      *
      * @property BACKOF
      * @static
      * @type {String}
      * @default 'back of'
      */
    strtotime.BACKOF = 'back of ';
    /**
     * Term meaning 'front of' (i.e. quarter to)
     *
     * @property FRONTOF
     * @static
     * @type {String}
     * @default 'front of'
     */    
    strtotime.FRONTOF = 'front of ';

    /**
     * Array of full day names of the week.
     * Must be in order: must start with Sunday (as day 0).
     *
     * Will use Intl module day names if available
     *
     * @property DAYFULL
     * @static
     * @type {Array}
     */
    strtotime.DAYFULL = INTL.A ? INTL.A : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    /**
     * Array of shortened day names of the week.
     * Must be in order: must start with Sun (as day 0).
     *
     * Will use Intl module day names if available
     *
     * @property DAYABBR
     * @static
     * @type {Array}
     */
    strtotime.DAYABBR = INTL.a ? INTL.a : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
     * @property DAYABBR
     * @static
     * @type {String}
     */
    strtotime.AMPM = INTL.p || INTL.P ? 
        '(' + (INTL.P ? INTL.P.join('|') : '') + (INTL.P && INTL.p ? '|' : '') + (INTL.p ? INTL.p.join('|') : '') + ')' :
        '([AaPp].?[Mm].?)';

     /**
      * Array of ordinals (first, second, third etc)
      * Must be in order: must start with 'first' in position 0
      *
      * @property RELTEXTNUMBER
      * @static
      * @type {Array}
      */
    strtotime.RELTEXTNUMBER = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth'];

     /**
      * Object of text terms for 'next', 'last', 'previous', 'this'
      * keys are fixed: substitute other strings if you need
      * translations.  Don't remove keys, or add them.  strtotime
      * won't know what to do with them.
      * 
      * @property RELTEXTTEXT
      * @static
      * @var {Object}
      */
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
      * @property RELTEXTUNIT
      * @static
      * @var {Object}
     */
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
     * @property MONTHFULL
     * @static
     * @type {Array}
     * @default ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December']
     */
    strtotime.MONTHFULL = INTL.B ? INT.B : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'];

    /**
     * Array of abbreviated length months.
     * Must by in order, and start at Jan
     *
     * @property MONTHABBR
     * @static
     * @type {Array}
     * @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     */
    strtotime.MONTHABBR = INTL.b ? INTL.b : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    /**
     * Array of Roman numeral months (or could be anything, actually).
     * Must by in order, and start at Jan
     *
     * @property MONTHROMAN
     * @static
     * @type {Array}
     * @default ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
     */
    strtotime.MONTHROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];


    /**
     * Term meaning 'ago' (ie modifier that makes relative changes go into the past)
     *
     * @property AGO
     * @static
     * @type {String}
     * @default 'ago',
     */
    strtotime.AGO = 'ago';


    /**
     * Suffixes that appear after day numbers (e.g. 22nd)

     * @property DAYSUFFIXES
     * @static
     * @type {Array}
     * @default '(st|nd|rd|th)'
     */
    strtotime.DAYSUFFIXES = ['st', 'nd', 'rd', 'th'];


    /**
     * Maps timezone strings to UTC offsets
     *
     * Source: http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     * retrieved 9th January 2013
     *
     *
     * @property TIMEZONEMAP
     * @type {Object}
     */
    strtotime.TIMEZONEMAP = {
        'Africa/Abidjan':'+00:00',
        'Africa/Accra':'+00:00',
        'Africa/Addis_Ababa':'+03:00',
        'Africa/Algiers':'+01:00',
        'Africa/Asmara':'+03:00',
        'Africa/Asmera':'+03:00',
        'Africa/Bamako':'+00:00',
        'Africa/Bangui':'+01:00',
        'Africa/Banjul':'+00:00',
        'Africa/Bissau':'+00:00',
        'Africa/Blantyre':'+02:00',
        'Africa/Brazzaville':'+01:00',
        'Africa/Bujumbura':'+02:00',
        'Africa/Cairo':'+02:00',
        'Africa/Casablanca':'+00:00',
        'Africa/Ceuta':'+01:00',
        'Africa/Conakry':'+00:00',
        'Africa/Dakar':'+00:00',
        'Africa/Dar_es_Salaam':'+03:00',
        'Africa/Djibouti':'+03:00',
        'Africa/Douala':'+01:00',
        'Africa/El_Aaiun':'+00:00',
        'Africa/Freetown':'+00:00',
        'Africa/Gaborone':'+02:00',
        'Africa/Harare':'+02:00',
        'Africa/Johannesburg':'+02:00',
        'Africa/Juba':'+03:00',
        'Africa/Kampala':'+03:00',
        'Africa/Khartoum':'+03:00',
        'Africa/Kigali':'+02:00',
        'Africa/Kinshasa':'+01:00',
        'Africa/Lagos':'+01:00',
        'Africa/Libreville':'+01:00',
        'Africa/Lome':'+00:00',
        'Africa/Luanda':'+01:00',
        'Africa/Lubumbashi':'+02:00',
        'Africa/Lusaka':'+02:00',
        'Africa/Malabo':'+01:00',
        'Africa/Maputo':'+02:00',
        'Africa/Maseru':'+02:00',
        'Africa/Mbabane':'+02:00',
        'Africa/Mogadishu':'+03:00',
        'Africa/Monrovia':'+00:00',
        'Africa/Nairobi':'+03:00',
        'Africa/Ndjamena':'+01:00',
        'Africa/Niamey':'+01:00',
        'Africa/Nouakchott':'+00:00',
        'Africa/Ouagadougou':'+00:00',
        'Africa/Porto-Novo':'+01:00',
        'Africa/Sao_Tome':'+00:00',
        'Africa/Timbuktu':'+00:00',
        'Africa/Tripoli':'+02:00',
        'Africa/Tunis':'+01:00',
        'Africa/Windhoek':'+01:00',
        'AKST9AKDT':'−09:00',
        'America/Adak':'−10:00',
        'America/Anchorage':'−09:00',
        'America/Anguilla':'−04:00',
        'America/Antigua':'−04:00',
        'America/Araguaina':'−03:00',
        'America/Argentina/Buenos_Aires':'−03:00',
        'America/Argentina/Catamarca':'−03:00',
        'America/Argentina/ComodRivadavia':'−03:00',
        'America/Argentina/Cordoba':'−03:00',
        'America/Argentina/Jujuy':'−03:00',
        'America/Argentina/La_Rioja':'−03:00',
        'America/Argentina/Mendoza':'−03:00',
        'America/Argentina/Rio_Gallegos':'−03:00',
        'America/Argentina/Salta':'−03:00',
        'America/Argentina/San_Juan':'−03:00',
        'America/Argentina/San_Luis':'−03:00',
        'America/Argentina/Tucuman':'−03:00',
        'America/Argentina/Ushuaia':'−03:00',
        'America/Aruba':'−04:00',
        'America/Asuncion':'−04:00',
        'America/Atikokan':'−05:00',
        'America/Atka':'−10:00',
        'America/Bahia':'−03:00',
        'America/Bahia_Banderas':'−06:00',
        'America/Barbados':'−04:00',
        'America/Belem':'−03:00',
        'America/Belize':'−06:00',
        'America/Blanc-Sablon':'−04:00',
        'America/Boa_Vista':'−04:00',
        'America/Bogota':'−05:00',
        'America/Boise':'−07:00',
        'America/Buenos_Aires':'−03:00',
        'America/Cambridge_Bay':'−07:00',
        'America/Campo_Grande':'−04:00',
        'America/Cancun':'−06:00',
        'America/Caracas':'−04:30',
        'America/Catamarca':'−03:00',
        'America/Cayenne':'−03:00',
        'America/Cayman':'−05:00',
        'America/Chicago':'−06:00',
        'America/Chihuahua':'−07:00',
        'America/Coral_Harbour':'−05:00',
        'America/Cordoba':'−03:00',
        'America/Costa_Rica':'−06:00',
        'America/Creston':'−07:00',
        'America/Cuiaba':'−04:00',
        'America/Curacao':'−04:00',
        'America/Danmarkshavn':'+00:00',
        'America/Dawson':'−08:00',
        'America/Dawson_Creek':'−07:00',
        'America/Denver':'−07:00',
        'America/Detroit':'−05:00',
        'America/Dominica':'−04:00',
        'America/Edmonton':'−07:00',
        'America/Eirunepe':'−04:00',
        'America/El_Salvador':'−06:00',
        'America/Ensenada':'−08:00',
        'America/Fort_Wayne':'−05:00',
        'America/Fortaleza':'−03:00',
        'America/Glace_Bay':'−04:00',
        'America/Godthab':'−03:00',
        'America/Goose_Bay':'−04:00',
        'America/Grand_Turk':'−05:00',
        'America/Grenada':'−04:00',
        'America/Guadeloupe':'−04:00',
        'America/Guatemala':'−06:00',
        'America/Guayaquil':'−05:00',
        'America/Guyana':'−04:00',
        'America/Halifax':'−04:00',
        'America/Havana':'−05:00',
        'America/Hermosillo':'−07:00',
        'America/Indiana/Indianapolis':'−05:00',
        'America/Indiana/Knox':'−06:00',
        'America/Indiana/Marengo':'−05:00',
        'America/Indiana/Petersburg':'−05:00',
        'America/Indiana/Tell_City':'−06:00',
        'America/Indiana/Vevay':'−05:00',
        'America/Indiana/Vincennes':'−05:00',
        'America/Indiana/Winamac':'−05:00',
        'America/Indianapolis':'−05:00',
        'America/Inuvik':'−07:00',
        'America/Iqaluit':'−05:00',
        'America/Jamaica':'−05:00',
        'America/Jujuy':'−03:00',
        'America/Juneau':'−09:00',
        'America/Kentucky/Louisville':'−05:00',
        'America/Kentucky/Monticello':'−05:00',
        'America/Knox_IN':'−06:00',
        'America/Kralendijk':'−04:00',
        'America/La_Paz':'−04:00',
        'America/Lima':'−05:00',
        'America/Los_Angeles':'−08:00',
        'America/Louisville':'−05:00',
        'America/Lower_Princes':'−04:00',
        'America/Maceio':'−03:00',
        'America/Managua':'−06:00',
        'America/Manaus':'−04:00',
        'America/Marigot':'−04:00',
        'America/Martinique':'−04:00',
        'America/Matamoros':'−06:00',
        'America/Mazatlan':'−07:00',
        'America/Mendoza':'−03:00',
        'America/Menominee':'−06:00',
        'America/Merida':'−06:00',
        'America/Metlakatla':'−08:00',
        'America/Mexico_City':'−06:00',
        'America/Miquelon':'−03:00',
        'America/Moncton':'−04:00',
        'America/Monterrey':'−06:00',
        'America/Montevideo':'−03:00',
        'America/Montreal':'−05:00',
        'America/Montserrat':'−04:00',
        'America/Nassau':'−05:00',
        'America/New_York':'−05:00',
        'America/Nipigon':'−05:00',
        'America/Nome':'−09:00',
        'America/Noronha':'−02:00',
        'America/North_Dakota/Beulah':'−06:00',
        'America/North_Dakota/Center':'−06:00',
        'America/North_Dakota/New_Salem':'−06:00',
        'America/Ojinaga':'−07:00',
        'America/Panama':'−05:00',
        'America/Pangnirtung':'−05:00',
        'America/Paramaribo':'−03:00',
        'America/Phoenix':'−07:00',
        'America/Port_of_Spain':'−04:00',
        'America/Port-au-Prince':'−05:00',
        'America/Porto_Acre':'−04:00',
        'America/Porto_Velho':'−04:00',
        'America/Puerto_Rico':'−04:00',
        'America/Rainy_River':'−06:00',
        'America/Rankin_Inlet':'−06:00',
        'America/Recife':'−03:00',
        'America/Regina':'−06:00',
        'America/Resolute':'−06:00',
        'America/Rio_Branco':'−04:00',
        'America/Rosario':'−03:00',
        'America/Santa_Isabel':'−08:00',
        'America/Santarem':'−03:00',
        'America/Santiago':'−04:00',
        'America/Santo_Domingo':'−04:00',
        'America/Sao_Paulo':'−03:00',
        'America/Scoresbysund':'−01:00',
        'America/Shiprock':'−07:00',
        'America/Sitka':'−09:00',
        'America/St_Barthelemy':'−04:00',
        'America/St_Johns':'−03:30',
        'America/St_Kitts':'−04:00',
        'America/St_Lucia':'−04:00',
        'America/St_Thomas':'−04:00',
        'America/St_Vincent':'−04:00',
        'America/Swift_Current':'−06:00',
        'America/Tegucigalpa':'−06:00',
        'America/Thule':'−04:00',
        'America/Thunder_Bay':'−05:00',
        'America/Tijuana':'−08:00',
        'America/Toronto':'−05:00',
        'America/Tortola':'−04:00',
        'America/Vancouver':'−08:00',
        'America/Virgin':'−04:00',
        'America/Whitehorse':'−08:00',
        'America/Winnipeg':'−06:00',
        'America/Yakutat':'−09:00',
        'America/Yellowknife':'−07:00',
        'Antarctica/Casey':'+11:00',
        'Antarctica/Davis':'+05:00',
        'Antarctica/DumontDUrville':'+10:00',
        'Antarctica/Macquarie':'+11:00',
        'Antarctica/Mawson':'+05:00',
        'Antarctica/McMurdo':'+12:00',
        'Antarctica/Palmer':'−04:00',
        'Antarctica/Rothera':'−03:00',
        'Antarctica/South_Pole':'+12:00',
        'Antarctica/Syowa':'+03:00',
        'Antarctica/Vostok':'+06:00',
        'Arctic/Longyearbyen':'+01:00',
        'Asia/Aden':'+03:00',
        'Asia/Almaty':'+06:00',
        'Asia/Amman':'+02:00',
        'Asia/Anadyr':'+12:00',
        'Asia/Aqtau':'+05:00',
        'Asia/Aqtobe':'+05:00',
        'Asia/Ashgabat':'+05:00',
        'Asia/Ashkhabad':'+05:00',
        'Asia/Baghdad':'+03:00',
        'Asia/Bahrain':'+03:00',
        'Asia/Baku':'+04:00',
        'Asia/Bangkok':'+07:00',
        'Asia/Beirut':'+02:00',
        'Asia/Bishkek':'+06:00',
        'Asia/Brunei':'+08:00',
        'Asia/Calcutta':'+05:30',
        'Asia/Choibalsan':'+08:00',
        'Asia/Chongqing':'+08:00',
        'Asia/Chungking':'+08:00',
        'Asia/Colombo':'+05:30',
        'Asia/Dacca':'+06:00',
        'Asia/Damascus':'+02:00',
        'Asia/Dhaka':'+06:00',
        'Asia/Dili':'+09:00',
        'Asia/Dubai':'+04:00',
        'Asia/Dushanbe':'+05:00',
        'Asia/Gaza':'+02:00',
        'Asia/Harbin':'+08:00',
        'Asia/Hebron':'+02:00',
        'Asia/Ho_Chi_Minh':'+07:00',
        'Asia/Hong_Kong':'+08:00',
        'Asia/Hovd':'+07:00',
        'Asia/Irkutsk':'+09:00',
        'Asia/Istanbul':'+02:00',
        'Asia/Jakarta':'+07:00',
        'Asia/Jayapura':'+09:00',
        'Asia/Jerusalem':'+02:00',
        'Asia/Kabul':'+04:30',
        'Asia/Kamchatka':'+12:00',
        'Asia/Karachi':'+05:00',
        'Asia/Kashgar':'+08:00',
        'Asia/Kathmandu':'+05:45',
        'Asia/Katmandu':'+05:45',
        'Asia/Kolkata':'+05:30',
        'Asia/Krasnoyarsk':'+08:00',
        'Asia/Kuala_Lumpur':'+08:00',
        'Asia/Kuching':'+08:00',
        'Asia/Kuwait':'+03:00',
        'Asia/Macao':'+08:00',
        'Asia/Macau':'+08:00',
        'Asia/Magadan':'+12:00',
        'Asia/Makassar':'+08:00',
        'Asia/Manila':'+08:00',
        'Asia/Muscat':'+04:00',
        'Asia/Nicosia':'+02:00',
        'Asia/Novokuznetsk':'+07:00',
        'Asia/Novosibirsk':'+07:00',
        'Asia/Omsk':'+07:00',
        'Asia/Oral':'+05:00',
        'Asia/Phnom_Penh':'+07:00',
        'Asia/Pontianak':'+07:00',
        'Asia/Pyongyang':'+09:00',
        'Asia/Qatar':'+03:00',
        'Asia/Qyzylorda':'+06:00',
        'Asia/Rangoon':'+06:30',
        'Asia/Riyadh':'+03:00',
        'Asia/Saigon':'+07:00',
        'Asia/Sakhalin':'+11:00',
        'Asia/Samarkand':'+05:00',
        'Asia/Seoul':'+09:00',
        'Asia/Shanghai':'+08:00',
        'Asia/Singapore':'+08:00',
        'Asia/Taipei':'+08:00',
        'Asia/Tashkent':'+05:00',
        'Asia/Tbilisi':'+04:00',
        'Asia/Tehran':'+03:30',
        'Asia/Tel_Aviv':'+02:00',
        'Asia/Thimbu':'+06:00',
        'Asia/Thimphu':'+06:00',
        'Asia/Tokyo':'+09:00',
        'Asia/Ujung_Pandang':'+08:00',
        'Asia/Ulaanbaatar':'+08:00',
        'Asia/Ulan_Bator':'+08:00',
        'Asia/Urumqi':'+08:00',
        'Asia/Vientiane':'+07:00',
        'Asia/Vladivostok':'+11:00',
        'Asia/Yakutsk':'+10:00',
        'Asia/Yekaterinburg':'+06:00',
        'Asia/Yerevan':'+04:00',
        'Atlantic/Azores':'−01:00',
        'Atlantic/Bermuda':'−04:00',
        'Atlantic/Canary':'+00:00',
        'Atlantic/Cape_Verde':'−01:00',
        'Atlantic/Faeroe':'+00:00',
        'Atlantic/Faroe':'+00:00',
        'Atlantic/Jan_Mayen':'+01:00',
        'Atlantic/Madeira':'+00:00',
        'Atlantic/Reykjavik':'+00:00',
        'Atlantic/South_Georgia':'−02:00',
        'Atlantic/St_Helena':'+00:00',
        'Atlantic/Stanley':'−03:00',
        'Australia/ACT':'+10:00',
        'Australia/Adelaide':'+09:30',
        'Australia/Brisbane':'+10:00',
        'Australia/Broken_Hill':'+09:30',
        'Australia/Canberra':'+10:00',
        'Australia/Currie':'+10:00',
        'Australia/Darwin':'+09:30',
        'Australia/Eucla':'+08:45',
        'Australia/Hobart':'+10:00',
        'Australia/LHI':'+10:30',
        'Australia/Lindeman':'+10:00',
        'Australia/Lord_Howe':'+10:30',
        'Australia/Melbourne':'+10:00',
        'Australia/North':'+09:30',
        'Australia/NSW':'+10:00',
        'Australia/Perth':'+08:00',
        'Australia/Queensland':'+10:00',
        'Australia/South':'+09:30',
        'Australia/Sydney':'+10:00',
        'Australia/Tasmania':'+10:00',
        'Australia/Victoria':'+10:00',
        'Australia/West':'+08:00',
        'Australia/Yancowinna':'+09:30',
        'Brazil/Acre':'−04:00',
        'Brazil/DeNoronha':'−02:00',
        'Brazil/East':'−03:00',
        'Brazil/West':'−04:00',
        'Canada/Atlantic':'−04:00',
        'Canada/Central':'−06:00',
        'Canada/Eastern':'−05:00',
        'Canada/East-Saskatchewan':'−06:00',
        'Canada/Mountain':'−07:00',
        'Canada/Newfoundland':'−03:30',
        'Canada/Pacific':'−08:00',
        'Canada/Saskatchewan':'−06:00',
        'Canada/Yukon':'−08:00',
        'CET':'+01:00',
        'Chile/Continental':'−04:00',
        'Chile/EasterIsland':'−06:00',
        'CST6CDT':'−06:00',
        'Cuba':'−05:00',
        'EET':'+02:00',
        'Egypt':'+02:00',
        'Eire':'+00:00',
        'EST':'−05:00',
        'EST5EDT':'−05:00',
        'Etc./GMT':'+00:00',
        'Etc./GMT+0':'+00:00',
        'Etc./UCT':'+00:00',
        'Etc./Universal':'+00:00',
        'Etc./UTC':'+00:00',
        'Etc./Zulu':'+00:00',
        'Europe/Amsterdam':'+01:00',
        'Europe/Andorra':'+01:00',
        'Europe/Athens':'+02:00',
        'Europe/Belfast':'+00:00',
        'Europe/Belgrade':'+01:00',
        'Europe/Berlin':'+01:00',
        'Europe/Bratislava':'+01:00',
        'Europe/Brussels':'+01:00',
        'Europe/Bucharest':'+02:00',
        'Europe/Budapest':'+01:00',
        'Europe/Chisinau':'+02:00',
        'Europe/Copenhagen':'+01:00',
        'Europe/Dublin':'+00:00',
        'Europe/Gibraltar':'+01:00',
        'Europe/Guernsey':'+00:00',
        'Europe/Helsinki':'+02:00',
        'Europe/Isle_of_Man':'+00:00',
        'Europe/Istanbul':'+02:00',
        'Europe/Jersey':'+00:00',
        'Europe/Kaliningrad':'+03:00',
        'Europe/Kiev':'+02:00',
        'Europe/Lisbon':'+00:00',
        'Europe/Ljubljana':'+01:00',
        'Europe/London':'+00:00',
        'Europe/Luxembourg':'+01:00',
        'Europe/Madrid':'+01:00',
        'Europe/Malta':'+01:00',
        'Europe/Mariehamn':'+02:00',
        'Europe/Minsk':'+03:00',
        'Europe/Monaco':'+01:00',
        'Europe/Moscow':'+04:00',
        'Europe/Nicosia':'+02:00',
        'Europe/Oslo':'+01:00',
        'Europe/Paris':'+01:00',
        'Europe/Podgorica':'+01:00',
        'Europe/Prague':'+01:00',
        'Europe/Riga':'+02:00',
        'Europe/Rome':'+01:00',
        'Europe/Samara':'+04:00',
        'Europe/San_Marino':'+01:00',
        'Europe/Sarajevo':'+01:00',
        'Europe/Simferopol':'+02:00',
        'Europe/Skopje':'+01:00',
        'Europe/Sofia':'+02:00',
        'Europe/Stockholm':'+01:00',
        'Europe/Tallinn':'+02:00',
        'Europe/Tirane':'+01:00',
        'Europe/Tiraspol':'+02:00',
        'Europe/Uzhgorod':'+02:00',
        'Europe/Vaduz':'+01:00',
        'Europe/Vatican':'+01:00',
        'Europe/Vienna':'+01:00',
        'Europe/Vilnius':'+02:00',
        'Europe/Volgograd':'+04:00',
        'Europe/Warsaw':'+01:00',
        'Europe/Zagreb':'+01:00',
        'Europe/Zaporozhye':'+02:00',
        'Europe/Zurich':'+01:00',
        'GB':'+00:00',
        'GB-Eire':'+00:00',
        'GMT':'+00:00',
        'GMT+0':'+00:00',
        'GMT0':'+00:00',
        'GMT-0':'+00:00',
        'Greenwich':'+00:00',
        'Hong Kong':'+08:00',
        'HST':'−10:00',
        'Iceland':'+00:00',
        'Indian/Antananarivo':'+03:00',
        'Indian/Chagos':'+06:00',
        'Indian/Christmas':'+07:00',
        'Indian/Cocos':'+06:30',
        'Indian/Comoro':'+03:00',
        'Indian/Kerguelen':'+05:00',
        'Indian/Mahe':'+04:00',
        'Indian/Maldives':'+05:00',
        'Indian/Mauritius':'+04:00',
        'Indian/Mayotte':'+03:00',
        'Indian/Reunion':'+04:00',
        'Iran':'+03:30',
        'Israel':'+02:00',
        'Jamaica':'−05:00',
        'Japan':'+09:00',
        'JST-9':'+09:00',
        'Kwajalein':'+12:00',
        'Libya':'+02:00',
        'MET':'+01:00',
        'Mexico/BajaNorte':'−08:00',
        'Mexico/BajaSur':'−07:00',
        'Mexico/General':'−06:00',
        'MST':'−07:00',
        'MST7MDT':'−07:00',
        'Navajo':'−07:00',
        'NZ':'+12:00',
        'NZ-CHAT':'+12:45',
        'Pacific/Apia':'+13:00',
        'Pacific/Auckland':'+12:00',
        'Pacific/Chatham':'+12:45',
        'Pacific/Chuuk':'+10:00',
        'Pacific/Easter':'−06:00',
        'Pacific/Efate':'+11:00',
        'Pacific/Enderbury':'+13:00',
        'Pacific/Fakaofo':'+13:00',
        'Pacific/Fiji':'+12:00',
        'Pacific/Funafuti':'+12:00',
        'Pacific/Galapagos':'−06:00',
        'Pacific/Gambier':'−09:00',
        'Pacific/Guadalcanal':'+11:00',
        'Pacific/Guam':'+10:00',
        'Pacific/Honolulu':'−10:00',
        'Pacific/Johnston':'−10:00',
        'Pacific/Kiritimati':'+14:00',
        'Pacific/Kosrae':'+11:00',
        'Pacific/Kwajalein':'+12:00',
        'Pacific/Majuro':'+12:00',
        'Pacific/Marquesas':'−09:30',
        'Pacific/Midway':'−11:00',
        'Pacific/Nauru':'+12:00',
        'Pacific/Niue':'−11:00',
        'Pacific/Norfolk':'+11:30',
        'Pacific/Noumea':'+11:00',
        'Pacific/Pago_Pago':'−11:00',
        'Pacific/Palau':'+09:00',
        'Pacific/Pitcairn':'−08:00',
        'Pacific/Pohnpei':'+11:00',
        'Pacific/Ponape':'+11:00',
        'Pacific/Port_Moresby':'+10:00',
        'Pacific/Rarotonga':'−10:00',
        'Pacific/Saipan':'+10:00',
        'Pacific/Samoa':'−11:00',
        'Pacific/Tahiti':'−10:00',
        'Pacific/Tarawa':'+12:00',
        'Pacific/Tongatapu':'+13:00',
        'Pacific/Truk':'+10:00',
        'Pacific/Wake':'+12:00',
        'Pacific/Wallis':'+12:00',
        'Pacific/Yap':'+10:00',
        'Poland':'+01:00',
        'Portugal':'+00:00',
        'PRC':'+08:00',
        'PST8PDT':'−08:00',
        'ROC':'+08:00',
        'ROK':'+09:00',
        'Singapore':'+08:00',
        'Turkey':'+02:00',
        'UCT':'+00:00',
        'Universal':'+00:00',
        'US/Alaska':'−09:00',
        'US/Aleutian':'−10:00',
        'US/Arizona':'−07:00',
        'US/Central':'−06:00',
        'US/Eastern':'−05:00',
        'US/East-Indiana':'−05:00',
        'US/Hawaii':'−10:00',
        'US/Indiana-Starke':'−06:00',
        'US/Michigan':'−05:00',
        'US/Mountain':'−07:00',
        'US/Pacific':'−08:00',
        'US/Pacific-New':'−08:00',
        'US/Samoa':'−11:00',
        'UTC':'+00:00',
        'WET':'+00:00',
        'W-SU':'+04:00',
        'Zulu':'+00:00'

    }

    // Put in the DataType.Date namespace
    Y.DataType.Date.strtotime = strtotime;

}, '0.1', {
    requires: ["intl", "datatype-date-format"]
});
