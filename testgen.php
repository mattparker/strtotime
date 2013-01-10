<?php

// builds javascript tests using php
//


// Dates are used twice: 
//  - firstly, as the only argument to strtotime(date)
//  - secondly, converted to a timestamp as the second argument to strtotime, 
//		with the first argument being each value from the changes array below
$dates = array(
	"2013-04-01 10:25:22",
	"2012-12-31 23:59:59",
	"2013-01-01 00:00:00",
	"2013-01-01 00:00:01",
	"2012-02-29 08:02:38"
);

$dateFormats = array(
	// iso8601dateslash
	"Y/m/d" => "iso8601dateslash",
	// timestamp
	// don as extras

	// american short
	"m/d" => "american short",
	// american
	"m/d/Y" => "american",
	// dateslash
	"Y/n/d" => "dateslash",
	// iso8601date4
	"Y/m/j" => "iso8601date4",
	// iso8601date2
	"y-m-d" => "iso8601date2",
	// gnudateshorter
	"Y-m" => "gnudateshorter",
	// gnudateshort
	"Y-m-d" => "gnudateshort",
	// date full (no date format for roman numerals!)
	"d F Y" => "date full",
	"dS M. Y" => "date full2",
	// pointed date
	"j.m.Y" => "pointed date",
	"d-n-Y" => "pointed date2",
	"j.m.y" => "pointed date3",
	// datenoday
	"F Y" => "datenoday",
	"M Y" => "datenoday2",
	// datenodayrev
	"Y F" => "datenodayrev",
	"Y M" => "datenodayrev2",
	// datetextual
	"F d Y" => "datetextual",
	"M dS" => "datetextual2",
	// datenoyearrev
	"d F" => "datenoyearrev",
	"dS M" => "datenoyearrev2",
	// datenocolon
	"Ymd" => "datenocolon",
	// soap
	"Y-m-d\TH:i:s.u\G\M\TP" => "soap",
	"Y-m-d\TH:i:s.u\G\M\T-2:30" => "soap2",
	"Y-m-d\TH:i:s.u\G\M\T+5:00" => "soap3",
	//xmlrpc
	"Ymd\TH:i:s" => "xmlrpc",
	// xmlrpcnocolon
	"Ymd\tHis" => "xmlrpcnocolon",
	// wddf
	"Y-m-d\TH:i:s" => "wddf",
	//exif
	"Y:m:d H:i:s" => "exif",
	// pgydotd
	"Y.z" => "pgydotd",
	// isoweekday
	"Y\WW-w" => "isoweekday",
	// pgtextshort
	"M-d-Y" => "pgtextshort",
	// pgtextreverse
	"Y-M-d" => "pgtextreverse",
	// clf
	"d/M/Y:H:i:s \G\M\T3:30" => "clf",
	// a couple of timezones:
	"Y-m-d H:i:s Europe/Vaduz",
	"Y/m/d H:i:s Australia/Lord_Howe",








);
// these ones need a timestamp as second argument 
// so that tests don't need to be run on the day
// they were created.
$timeFormats = array(
	"2am",
	"2AM",
	"14.18",
	"15:02",
	"3.29 am",
	"3:53 PM",
	"15:45:23",
	"3:45:23 am",

	// mssqltime
	"8:45:22.44am",
	"12:59:13.01P.M",
	"4:08:39:12313am",

	// timeshort24
	"t18:45",
	"13:47",
	"4.41",
	// timelong24
	"t18:45:22",
	"13:47.41",
	"14.41.00",
	// iso8601long
	"08:15:09.1234",
	"t00.01.00.9876",
	// gnunocolon
	"t0813",
	"1979",
	// iso8601nocolon
	"t081345",
	"191222",

	// year4
	"2011"
	/*"Y-m-d H:i:s",
	"m/d",
	"Y/m/d"
	*/
);


// Each change is applied to each of the dates above
$changes = array(
	"yesterday",
	"now",
	"noon",
	"midnight",
	"today",
	"tomorrow",
	"first day of",
	"last day of",

);

$appendChanges = array(
	"first Tuesday of",
	"next Thursday of",
	"second Fri of",
	"third Wednesday of",
	"last Sat of",
	"fourth Sunday of",
	"fifth Monday of",
	"sixth Mon of",
	"seventh Tue of",
	"eighth Wed of",
	"ninth Thu of",
	"tenth Sat of",
	"eleventh Friday of",
	"twelfth Saturday of"
);

// Construct the 'extra' tests
// 
$extras = array(
	"back of 8am",
	"back of 8",
	"back of 8pm",
	"back of 20",
	"front of 8am",
	"front of 8",
	"front of 8pm",
	"front of 20",

	//"first Wednesday of June 2013",
	"first Wednesday of 2012/05/16",

	"Mon",
	"Tue", 
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",

	'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December',
    'Jan', 'Feb', 'Mar', 'Apr',  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',

);
foreach (array("next", "last", "previous", "this", "first", "second", 
	"third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth") as $c) {
	foreach (array("second", "sec", "minute", "min", "hour", "day", "week", "fortnight", "month", "year") as $t) {
		$extras[] = $c . " " . $t;
	}
}

// relative:
foreach (array("+1", "-2", "14", "-4") as $c) {
	foreach (array("second", "sec", "minute", "min", "hour", "day", "week", "fortnight", "month", "year") as $t) {
			$extras[] = $c . " " . $t;
	}
}
$extras[] = "3 months -4 days";
$extras[] = "2 years 5 months 18 days -4 hours 20 minutes -12 seconds";

//"first", "second", "third", "last", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"

// Some tests fail because of suspected php bugs.
// Until these are reported and either confirmed as bugs, or
// confirmed that they're not, we'll register the tests
// that fail for this reason and expect them to.
//
//
// So, in these cases, the behaviour of js strtotime
// diverges from php strtotime: but for a good reason
// (I think php is wrong!).  Although to be fair these cases
// are 1. moderately esoteric use cases, and 2. a question
// of interpretation of what strtotime ought to do.
$testsThatFailFromSuspectedPhpBugs = array(

	// These return false in php, but what you'd expect
	// in javascript - strtotime("January 12th noon")
	// gives timestamp for 12th January [current year] 12:00:00
	"M dS now",
	"M dS noon",
	"M dS today",
	"M dS tomorrow",
	"M dS yesterday",

	// in php these return the comparison from the first day 
	// of the year.  So strtotime("2013W14-1 yesterday") in php
	// gives 31/12/2012, and in javascript it gives 31/3/2013
	// I think the js is correct: 2013W14-1 is 1st April 2013
	//
	// Unfortunately that on particular dates (ie near the start of 
	// the year, they happen to be correct)
	"Y\WW-w yesterday",
	"Y\WW-w tomorrow",
	"Y\WW-w first day of",
	"Y\WW-w last day of",
	
	// Similar to above, php doesn't seem to cope with 
	// thif format
	// so in php, strtotime("third Wednesday of 2012W01-1") returns timestamp
	// for 5th Jan 2012,
	// but in js, strtotime("third Wednesday of 2012W01-1") returns timestamp
	// for 18th Jan 2012
	// Again the js seems correct
	"first Tuesday of Y\WW-w",
	"next Thursday of Y\WW-w",
	"second Fri of Y\WW-w",
	"third Wednesday of Y\WW-w",
	"last Sat of Y\WW-w",
	"fourth Sunday of Y\WW-w",
	"fifth Monday of Y\WW-w",
	"sixth Mon of Y\WW-w",
	"seventh Tue of Y\WW-w",
	"eighth Wed of Y\WW-w",
	"ninth Thu of Y\WW-w",
	"tenth Sat of Y\WW-w",
	"eleventh Friday of Y\WW-w",
	"twelfth Saturday of Y\WW-w",
	
	// year4 seems to be failing too.
	// in php, strtotime("2011") is interpreted as a time
	// but it looks from the source like it ought to recognise
	// it as a year (as the js currently does)
	//
	// (and becuase these are extras they use 2011 as actual date)
	// instead of the date format Y
	"2011 yesterday",
	"2011 tomorrow",
	"2011 first day of",
	"2011 last day of",
	"2011 now",
	"2011 midnight",
	"2011 noon",
	"2011 today",
	"noon 2011",
	"today 2011",
	"yesterday 2011",
	"tomorrow 2011",
	"first day of 2011",
	"last day of 2011",
	"now 2011",
	"midnight 2011",


);





// add the timstamps here
foreach ($dates as $d) {
	$extras[] = date("@U", strtotime($d));
}

// time-based ones that need a fixed timestamp to make sense
foreach ($timeFormats as $t) {
	foreach ($changes as $c) {
		$extras[] = $t . " " . $c;
		$extras[] = $c . " " . $t;
	}
}

// All the tests
$plainFormatTests = array();
$modifierTests = array();
$extraTests = array();



// Build the javascript for the tests
foreach ($dates as $d) {

	$orig_ts = strtotime($d);



	foreach ($dateFormats as $f => $formatName) {

		$fd = date($f, $orig_ts);
		$res0 = strtotime($fd);

		if ($res0 === false) {
			$res0 = 'false';
		}

		$plainFormatTests[$fd] = "\n\t\t'strtotime(\"" . $fd . "\") (originally `" . $d . "` " . $formatName . ") should give timestamp `" . $res0 . "`': "
			. " function () {\n"
			. "\t\t\tY.Assert.areSame(" . $res0 . ", strtotime('" . $fd . "'));\n"
			. "\t\t}";
		


		foreach ($changes as $c) {
			
			$res = strtotime($c, $orig_ts);

			if ($res === false) {
				$res = 'false';
			}

			$modifierTests[$orig_ts . $c] = "\n\t\t'strtotime(\"" . $c . "\", " . $orig_ts . ")  (originally `" . $d . "` " . $formatName . ")  should give `" . $res 
					. ($res !== 'false' ? "` (ie " . date("Y-m-d H:i:s", $res) . ")" : "") . "': "
				. " function () {\n"
				. "\t\t\tY.Assert.areSame(" . $res . ", strtotime('" . $c . "', " . $orig_ts . "));\n"
				. "\t\t}";




			$res2 = strtotime($fd . " " . $c);

			if ($res2 === false) {
				$res2 = 'false';
			}

			if (in_array($f . ' ' . $c, $testsThatFailFromSuspectedPhpBugs)) {
				$assert = 'areNotSame';
				$msg = 'This is a suspected php bug.';
			} else {
				$assert = 'areSame';
				$msg = '';
			}

			$modifierTests[$fd . $c] = "\n\t\t'strtotime(\"" . $fd . " " . $c . "\")  (" . $formatName . ") should give `" . $res2 
				. ($res2 !== 'false' ? "` (ie " . date("Y-m-d H:i:s", $res2) . ")" : "") . "': "
				. " function () {\n"
				. "\t\t\tY.Assert." . $assert . "(" . $res2 . ", strtotime('" . $fd . " " . $c . "'), '" . $msg . "');\n"
				. "\t\t}";

		}

		foreach ($appendChanges as $c) {

			$res3 = strtotime($c . " " . $orig_ts);
			if ($res3 === false) {
				$res3 = 'false';
			}
			$modifierTests[$orig_ts . $c] = "\n\t\t'strtotime(`" . $c . " " . $orig_ts . "`) (" . date("Y-m-d H:i:s", $orig_ts) 
				. "  " . $formatName . ") should give `" . $res3 . "`" . ( $res3 !== 'false' ? " (" . date("Y-m-d H:i:s", $res3) . ")" : "" ) . "': "
				. " function () {\n"
				. "\t\t\tY.Assert.areSame(" . $res3 . ", strtotime('" . $c . " " . $orig_ts . "'));\n"
				. "\t\t}";
			


			$res3 = strtotime($c . " " . $fd);
			if ($res3 === false) {
				$res3 = 'false';
			}
			if (in_array($c . ' ' . $f, $testsThatFailFromSuspectedPhpBugs)) {
				$assert = 'areNotSame';
				$msg = 'This is a suspected php bug.';
			} else {
				$assert = 'areSame';
				$msg = '';
			}


			if ($fd !== $orig_ts) {
				$modifierTests[$fd . $c] = "\n\t\t'strtotime(`" . $c . " " . $fd . "`) (" . date("Y-m-d H:i:s", $orig_ts) 
					. "  " . $formatName . ") should give `" . ( $res3 !== 'false' ? " (" . date("Y-m-d H:i:s", $res3) . ")" : "" ) . "': "
					. " function () {\n"
					. "\t\t\tY.Assert." . $assert . "(" . $res3 . ", strtotime('" . $c . " " . $fd . "'));\n"
					. "\t\t}";
			}

		}

	}
}



foreach ($extras as $e) {

	$res2 = strtotime($e, 1360022400);
	if ($res2 === false) {
		$res2 = 'false';
	}
	if (in_array($e, $testsThatFailFromSuspectedPhpBugs)) {
		$assert = 'areNotSame';
		$msg = 'This is a suspected php bug.';
	} else {
		$assert = 'areSame';
		$msg = '';
	}

	$extraTests[] = "\n\t\t'Extras: strtotime(\"" . $e . "\", 1360022400) should give `" . $res2 . "`': "
		. " function () {\n"
		. "\t\t\tY.Assert." . $assert . "(" . $res2 . ", strtotime('" . $e . "', 1360022400));\n"
		. "\t\t}";		
}


// Build the Test module:
$h = 'YUI.add("strtotime-test", function (Y) {

	"use strict";

	var Assert       = Y.Assert,
		strtotime    = Y.DataType.Date.strtotime,
	    suite = new Y.Test.Suite("Strtotime");

	suite.add(new Y.Test.Case({
	    name: "Y.DataType.Date.strtotime php generated tests: plain formatting",' . "\n\n"

	    . implode(",\n", $plainFormatTests)

	    . '
	}));

	suite.add(new Y.Test.Case({
	    name: "Y.DataType.Date.strtotime php generated tests: modify dates",' . "\n\n"

	    . implode(",\n", $modifierTests)

	    . '
	}));

	suite.add(new Y.Test.Case({
	    name: "Y.DataType.Date.strtotime php generated tests: extra tests",' . "\n\n"

	    . implode(",\n", $extraTests)

	    . '
	}));

Y.Test.Runner.add(suite);

}, "3.5.0", {
    requires: ["strtotime", "test"]
});
';



// Html to run the tests:
$html = '<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Test Page</title>
</head>
<body class="yui3-skin-sam">

<div id="log"></div>

<button id="rerun">Run tests</button>
<!--<button id="wait">Pause tests</button>-->

<script src="http://yui.yahooapis.com/3.8.0/build/yui/yui.js"></script>

<script>
var Y = YUI({
    coverage: ["strtotime"],
    filter: (window.location.search.match(/[?&]filter=([^&]+)/) || [])[1] || "raw",
    modules: {
    	"strtotime": {
    		fullpath: "http://localhost/yui3contrib/strtotime/strtotime.js",
    		requires: ["intl", "datatype-date-format"]
    	},
        "strtotime-test": {
            fullpath: "http://localhost/yui3contrib/strtotime/assets/strtotime-test.js",
            requires: [
                "strtotime", "test"
            ]
        }
    }
}).use("strtotime-test", "test-console", "node", function (Y) {

	var console = new Y.Test.Console().render("#log");
		runner = Y.Test.Runner;

	var runTest = function () {
    	console.clearConsole();
    	runner.run();
    };
    Y.one("#rerun").on("click", runTest);
    //Y.one("#wait").on("click", function () { runner.wait();});
});
</script>

</body>
</html>
';



// Write the files:
file_put_contents('n:\wamp\yui3contrib\strtotime\assets\strtotime-test.js', $h);
file_put_contents('n:\wamp\yui3contrib\strtotime\tests\unit\strtotime-test.html', $html);


echo "\r\nFile created.  " . count($plainFormatTests) . " plain format tests added; " . count($modifierTests) . " modifier tests added; "
	. count($extraTests) . " extra tests added: " . (count($plainFormatTests) + count($modifierTests) + count($extraTests)) . " in total.";