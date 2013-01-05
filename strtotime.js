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
     */


    // Use Internationalised stuff if we can
    var INTL = Y.Intl ? Y.Intl.get("datatype-date-format") : {},
        

        strtotime = function (time, baseTimestamp) {


            //// Define variables
            var ms = baseTimestamp * 1000 || new Date().getTime(),
                parsedDate,
                copyTime = time,

                // whether we've managed to parse a time/date from the time string given
                hasTime = false,
                hasDate = false,
                requiresTime = false,
                requiresDate = false,

                // stores changes to dates/times
                relativeHash = {
                    y: 0,
                    m: 0,
                    d: 0,
                    h: 0,
                    i: 0,
                    s: 0,
                    weekdayOf: undefined
                },

                /**
                 * @param {Object}   Properties to change
                 * @param {Boolean}  Whether to add to existing (true) or set (default)
                 */
                updateRel = function (oChange, addOrSet) {
                    var i,
                        c;

                    for (i in oChange) {

                        if (oChange.hasOwnProperty(i)) {

                            if (i === "weekdayOf") {
                                
                                relativeHash[i] = oChange[i];

                            } else {
                                c = parseInt(oChange[i], 10);
                                if (addOrSet === true) {
                                    relativeHash[i] += c;
                                } else {
                                    relativeHash[i] = c;
                                }
                            }
                        }
                    }
                },

                // stores absolute dates/times set
                absoluteHash = {
                    y: undefined,
                    m: undefined,
                    d: undefined,
                    h: undefined,
                    i: undefined,
                    s: undefined,
                    lastDay: undefined,
                    firstDay: undefined
                },

                updateAbs = function (oChange, addOrSet) {
                    var i,
                        c;
                    for (i in oChange) {
                        if (oChange.hasOwnProperty(i)) {

                            c = parseInt(oChange[i], 10);

                            if (addOrSet === true && absoluteHash[i] !== undefined) {                                                   
                                absoluteHash[i] += c;
                            } else {
                                absoluteHash[i] = c;
                            }
                        }
                    }
                },

                // utility fn for changing/setting dates
                _change = function (ts, d, method) {
                    var tmp = new Date(ts);
                    tmp["set" + method](tmp["get" + method]() + d);
                    return tmp.getTime();
                },
                _set = function (ts, val, method) {
                    var tmp = new Date(ts);
                    tmp["set" + method](val);
                    return tmp.getTime();
                },

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

                _handleMeridian = function (hour, ampm) {

                    var c1;
                    hour = parseInt(hour, 10);

                    if (ampm === undefined) {
                        return hour;
                    }
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
                        addWeeks;

                    tmp.setUTCDate(1);
                    // iterate through until we're on the correct day
                    while (tmp.getUTCDay() < tofind.dayIndex) {
                        tmp = new Date(tmp.getTime() + 86400000);
                    }

                    // now add on the right number of weeks
                    switch (tofind.weekIndex) {
                        case 'next':
                            addWeeks = 1;
                            break;
                        case 'previous':
                            addWeeks = -1;
                            break;
                        case 'first':
                            addWeeks = 0;
                        case 'last':
                            // this is the hard one:
                            break;

                        default:
                            addWeeks = parseInt(tofind.weekIndex, 10);
                            break;
                    }

                    tmt = tmp.getTime();
                    tmt = tmt + (604800000 * addWeeks);
                    return tmt;
                },



                // Functions that do the relative changes
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
                    h: function (ts, val) {
                        return _set(ts, val, 'UTCHours');
                    },
                    i: function (ts, val) {
                        return _set(ts, val, 'UTCMinutes');
                    },
                    s: function (ts, val) {
                        return _set(ts, val, 'UTCSeconds');
                    }
                },


                resetTime = false,
                _resetTime = function (ts) {
                    ts = _set(ts, 0, 'UTCHours');
                    ts = _set(ts, 0, 'UTCMinutes');
                    return _set(ts, 0, 'UTCSeconds');
                },




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

                space = '[ \t]+',
                frac = '\.[0-9]+',
                ago = 'ago',
                hour24 = '(2[0-4]|[01]?[0-9])',
                hour24lz = '(2[0-4]|[01][09])',
                hour12 = '(1[0-2]|0?[1-9])',
                minute = '([0-5]?[0-9])',
                minutelz = '([05][0-9])',
                second = '([0-5]?[0-9]|60)',
                secondlz = '([05][0-9]|60)',
                // The Internationalised meridian match isn't quite the same, as we can't assume 
                // we can mix cases or add full stops.  So it just looks for any of the upper- or lower-
                // case versions in INTL.P and INTL.p
                meridian = INTL.P || INTL.p ?
                        '(' + (INTL.P ? INTL.P.join('|') + '|' : '') + (INTL.p ? INTL.p.join('|') : '') + ')' :
                        '([AaPp]\.?[Mm]\.?)' + space,
                tz = '\(? [A-Za-z]{1,6}\)?|[A-Za-z]+([_\/\-][A-Za-z]+)+',
                tzcorrection = 'GMT?[+-]' + hour24 + ':?' + minute + '?',

                daysuf = '(st|nd|rd|th)',

                month = '(0?[0-9]|1[0-2])',
                day = '(([0-2]?[0-9])|(3[01]))' + daysuf + '?',
                year = '([0-9]{1,4})',
                year2 = '([0-9]{2})',
                year4 = '([0-9]{4})',
                year4withsign = '([+-]? [0-9]{4})',

                dayofyear = '(00[1-9]|0[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|36[0-6])',
                weekofyear = '(0[1-9]|[1-4][0-9]|5[0-3])',
                monthlz = '(0[0-9]|1[0-2])',
                daylz = '(0[0-9]|[1-2][0-9]|3[01])',

                // Use Internationalisation to get lang pack
                dayfull = INTL.A ? INTL.A.join('|') : 'sunday|monday|tuesday|wednesday|thursday|friday|saturday',
                dayabbr = INTL.a ? INTL.a.join('|') : 'sun|mon|tue|wed|thu|fri|sat|sun',
                dayspecial = strtotime.DAYSPECIAL.join('|') || 'weekday|weekdays',  // apparently no INTL version of this
                daytext = '(' + dayfull + '|' + dayabbr + '|' + dayspecial + ')',

                monthfull = INTL.B ? INTL.B.join('|') : 'january|february|march|april|may|june|july|august|september|october|november|december',
                monthabbr = INTL.b ? INTL.b.join('|') : 'jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec',
                monthroman = 'I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII',
                monthtext = '(' + monthfull + '|' + monthabbr + '|' + monthroman + ')',

                // Time
                timetiny12 = hour12 + '(' + space + ')?' + meridian,
                timeshort12 = hour12 + '[:\.]' + minutelz + '(' + space + ')?' + meridian,
                timelong12 = hour12 + '[:\.]' + minute + '[:\.]' + secondlz + '(' + space + ')?' + meridian,

                timeshort24 = 't?' + hour24 + '[:\.]' + minute,
                timelong24 = timeshort24 +'[:\.]' + second,
                iso8601long = timelong24 + frac,

                iso8601normtz = timeshort24 + '[:\.]' + secondlz + '(' + space + ')?' + '(' + tzcorrection + '|' + tz + ')',

                gnunocolon = 't?' + hour24lz + minutelz,
                iso8601nocolon = 't?' + hour24lz + minutelz + secondlz,

                // Dates
                americanshort = month + '\/' + day,
                american = americanshort + '\/' + year,
                iso8601dateslash = year4 + '\/' + monthlz + '\/' + daylz + '\/?',
                dateslash = year4 + '\/' + month + '\/' + day,
                iso8601date4 = year4withsign + '-' + monthlz + '-' + daylz,
                iso8601date2 = year2 + '-' + monthlz + '-' + daylz,
                gnudateshorter = year4 + '-' + month,
                gnudateshort = year + '-' + month + '-' + day,
                pointeddate4 = day + '[\.t\-]' + month + '[\.\-]' + year4,
                pointeddate2 = day + '[\.t\-]' + month + '[\.]' + year2,
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
                mssqltime = hour12 + ':' + minutelz + ':' + secondlz + '[:\.][0-9]+' + meridian,
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


                weekdayof = '(' + reltextnumber + '|' + reltexttext + ')' + space + '(' + dayfull + '|' + dayabbr + ')' + space + 'of',






                // The tests to carry out, and what happens
                tests = [


                    // Fixed strings:
                    {re: new RegExp('yesterday'), fn: function (aRes) {
                        updateRel({d: -1}); 
                        updateAbs({h: 0, i: 0, s: 0}, true);
                    }},

                    {re: new RegExp('now'), fn: function (aRes) {
                    }},

                    {re: new RegExp('noon'), fn: function (aRes) {
                        updateAbs({h: 12, i: 0, s: 0});
                    }},

                    {re: new RegExp('midnight|today'), fn: function (aRes) {
                        updateAbs({h: 0, i: 0, s:0});
                    }},

                    {re: new RegExp('tomorrow'), fn: function (aRes) {
                        updateRel({d: 1});
                        updateAbs({h: 0, i: 0, s: 0});
                    }},



                    // Unix timestamp
                    {re: new RegExp(timestamp), fn: function (aRes) {
                        var tmp = new Date(parseInt(aRes[2], 10) * 1000);
                        updateAbs({
                            y: tmp.getUTCFullYear(),
                            m: tmp.getUTCMonth(),
                            d: tmp.getUTCDate(),
                            h: tmp.getUTCHours(),
                            i: tmp.getUTCMinutes(),
                            s: tmp.getUTCSeconds()
                        }, true);
                        hasDate = true;
                        hasTime = false;

                    }},



                    // Simple relative things
                    {re: new RegExp(firstdayof), fn: function (aRes) {
                        updateAbs({
                            firstDay: 1
                        });
                        requiresDate = true;
                    }},
                    {re: new RegExp(lastdayof), fn: function (aRes) {
                        updateAbs({
                            lastDay: 1
                        });
                        requiresDate = true;
                    }},

                    {re: new RegExp(frontof), fn: function (aRes) {
                        // handle the meridian

                        aRes[1] = _handleMeridian(aRes[1], aRes[3]);

                        updateAbs({
                            h: aRes[1],
                            i: 0,
                            s: 0
                        });
                        updateRel({
                            i: -15
                        });
                    }},
                    {re: new RegExp(backof), fn: function (aRes) {
                        
                        aRes[1] = _handleMeridian(aRes[1], aRes[3]);

                        updateAbs({
                            h: aRes[1],
                            i: 0,
                            s: 0
                        });
                        updateRel({
                            i: 15
                        });
                    }},


                    // complex relative things - weekday of
                    {re: new RegExp(weekdayof), fn: function (aRes) {
                        
                        var modifier = aRes[1], // first, second or next, last etc
                            ind = strtotime.RELTEXTNUMBER.indexOf(modifier),
                            dow = aRes[4],
                            dowIndex = strtotime.DAYFULL.indexOf(dow) !== -1 ?
                                strtotime.DAYFULL.indexOf(dow) :
                                strtotime.DAYABBR.indexOf(dow);


                        if (ind !== -1) {
                            // something like 'third Wednesday in June'
                            updateRel({
                                weekdayOf: {
                                    dayIndex: dowIndex,
                                    weekIndex: ind
                                }
                            });

                        } else {
                            // something like 'last Wednesday in June'
                            updateRel({
                                weekdayOf: {
                                    dayIndex: dowIndex,
                                    weekIndex: aRes[1]
                                }
                            })
                        }
                    }},



                    // dates
                    {re: new RegExp(iso8601dateslash), fn: function (aRes) {
                        updateAbs({
                            y: aRes[1],
                            m: parseInt(aRes[2], 10) - 1,
                            d: aRes[3],
                            h: 0,
                            i: 0,
                            s: 0
                        }, true);
                        hasTime = false;
                        hasDate = true;
                    }}

                ],


                // in the loop
                i = 0,
                test,
                reResult;



            time = Y.Lang.trim(time);


            // Go through, looking for the relevant regexps 
            // and acting accordingly
            for (i = 0; i < tests.length; i = i + 1) {

                test = tests[i];

                reResult = test.re.exec(time);

                if (reResult) {
                    test.fn.call(undefined, reResult);
                    // remove the matched string from our copy.
                    copyTime = copyTime.replace(reResult[0], "");
                }

            }


            // Unexpected characters left after all our matching?
            // That's an error.
            if (Y.Lang.trim(copyTime) !== '') {
                return false;
            }



            // There are some things that are required.  For example,
            // if you use 'front of' you also need to supply a time
            /*
            if (hasDate === true || hasTime === true) {
                if (requiresTime === true && hasTime === false) {
                    return false;
                }
                if (requiresDate === true && hasDate === false) {
                    return false;
                }
            }
            */

            // Now apply absolute changes
            for (i in absoluteHash) {
                if (absoluteHash.hasOwnProperty(i) && i !== 'lastDay' && i !== 'firstDay' && absoluteHash[i] !== undefined) {
                    ms = absChange[i](ms, absoluteHash[i]);
                }
            }


            // Now apply relativeHash changes
            for (i in relativeHash) {
                if (relativeHash.hasOwnProperty(i) && i !== 'weekdayOf' && relativeHash[i] !== 0) {
                    ms = relChange[i](ms, relativeHash[i]);
                }
            }


            // More complex changes that need the above to complete first
            if (absoluteHash.lastDay === 1) {
                // find date of last day of this month
                ms = absChange.d(ms, _findLastDayOf(ms));

            } else if (absoluteHash.firstDay === 1) {
                // set to the first day
                ms = absChange.d(ms, 1);

            }


            // Work out the 'first Wednesday' type modifiers
            if (relativeHash.weekdayOf !== undefined) {
                ms = _findWeekdayOf(ms, relativeHash.weekdayOf);
            }



            return Math.floor(ms / 1000);

        };



    // This may be changed for Internationalised versions:
    strtotime.DAYSPECIAL = ['weekday', 'weekdays'];
    strtotime.FIRSTDAYOF = 'first day of';
    strtotime.LASTDAYOF = 'last day of';
    strtotime.BACKOF = 'back of ';
    strtotime.FRONTOF = 'front of ';

            
    strtotime.DAYFULL = INTL.A ? INTL.A : ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    strtotime.DAYABBR = INTL.a ? INTL.a : ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    // Note the 1-based array
    strtotime.RELTEXTNUMBER = ['first','second','third','fourth','fifth','sixth','seventh','eight','eighth','ninth','tenth','eleventh','twelfth'];
    strtotime.RELTEXTTEXT = ['next','last','previous','this'];
    strtotime.RELTEXTUNIT = ['sec','second','min','minute','hour','day','fortnight','forthnight','month','year'];// 's'?) , 'weeks' , daytext;


    Y.DataType.Date.strtotime = strtotime;

}, '0.1', {
    requires: ["intl", "datatype-date-format"]
});
