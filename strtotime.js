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

            // 'last' needs handling differently:
            if (tofind.weekIndex === 'last') {
                // this is the hard one:
                // find the last day of the month and do it again 
                // backwarods
                tmp.setUTCDate(_findLastDayOf(ts));
                while (tmp.getUTCDay() !== tofind.dayIndex) {
                    tmp = new Date(tmp.getTime() - 86400000);
                }
                return tmp.getTime();
            }

            //thisWeek = Math.floor(new Date(ts).getUTCDate() / 7);

            tmp.setUTCDate(1);
            
            // now add on the right number of weeks
            switch (tofind.weekIndex) {
                case 'next':
                    addWeeks = 0;//thisWeek;
                    break;
                case 'previous':
                    addWeeks = -1;//thisWeek - 1;
                    break;
                case 'first':
                    addWeeks = 0;
                    break;
                default:
                    addWeeks = parseInt(tofind.weekIndex, 10);
                    break;
            }

            // iterate through until we're on the correct day
            while (tmp.getUTCDay() !== tofind.dayIndex) {
                tmp = new Date(tmp.getTime() + 86400000);
            }

            tmt = tmp.getTime();
            tmt = tmt + (604800000 * addWeeks);
            return tmt;
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
                var years = Math.floor(d / 12);
                if (years !== 0) {
                    ts = _change(ts, years, 'UTCFullYear');
                }
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
                weekdayOf: undefined
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

                        if (i === "fixTime" || i === "fixDate" || i === "specialFn") {
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

                if (reResult) {
                    index = test.re.exec(" " + time + " ").index;
                    test.fn.call(undefined, reResult, index, mods);
                    // remove the matched string from our copy.
                    copyTime = copyTime.replace(Y.Lang.trim(reResult[0]), "");
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
                        if (thisChange.hasOwnProperty(i), 'weekdayOf' && thisChange[i] !== 0) {
                            ms = relChange[i](ms, thisChange[i]);
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


            // Work out the 'first Wednesday' type modifiers
            if (mods.relativeFixedHash.weekdayOf !== undefined) {
                ms = _findWeekdayOf(ms, mods.relativeFixedHash.weekdayOf);
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
                ago = 'ago',
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
                tz = '\(? [A-Za-z]{1,6}\)?|[A-Za-z]+([_\/\-][A-Za-z]+)+',
                tzcorrection = 'GMT?[+-]' + hour24 + ':?' + minute + '?',

                daysuf = '(st|nd|rd|th)',

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
                pgtextshort = monthabbr + '-' + daylz + '-' + year,
                pgtextreverse = year + '-' + monthabbr + '-' + daylz,
                mssqltime = hour12 + ':' + minutelz + ':' + secondlz + '[:\.]([0-9]+)' + meridian,
                isoweekday = year4 + '-?W' + weekofyear + '\-?[0-7]',
                isoweek = year4 + '-?W' + weekofyear,
                exif = year4 + ':' + monthlz + ':' + daylz + ' ' + hour24lz + ':' + minutelz + ':' + secondlz,
                firstdayof = strtotime.FIRSTDAYOF + '?',
                lastdayof = strtotime.LASTDAYOF + '?',
                backof = strtotime.BACKOF + hour24 + '(' + space + ')?' + meridian + '?',
                frontof = strtotime.FRONTOF + hour24 + '(' + space + ')?' + meridian + '?',

                // common log format
                clf = day + '\/' + monthabbr + '\/' + year4 + ':' + hour24lz + ':' + minutelz + ':' + secondlz + space + tzcorrection,

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
                reltexttext = '(' + strtotime.RELTEXTTEXT.join('|') + ')',
                reltextunit = '((' + strtotime.RELTEXTUNIT.join('|') + ')s?)' + '|' + daytext, // no 'weeks' currently - need to check why it's separate

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
      * Array of text terms for 'next', 'last', 'previous', 'this'
      * Must be in order: must start with 'next' in position 0
      * 
      * @property RELTEXTTEXT
      * @static
      * @var {Array}
      */
    strtotime.RELTEXTTEXT = ['next','last','previous','this'];

     /**
      * Array of time terms
     

     @property RELTEXTUNIT
     @static
     @var {Array}
     */
    strtotime.RELTEXTUNIT = ['sec','second','min','minute','hour','day','fortnight','forthnight','month','year'];// 's'?) , 'weeks' , daytext;

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



    // Put in the DataType.Date namespace
    Y.DataType.Date.strtotime = strtotime;

}, '0.1', {
    requires: ["intl", "datatype-date-format"]
});
