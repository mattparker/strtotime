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
	"Y/m/d",
	// timestamp
	// don as extras


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
	"1979"

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
	"last day of"
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
$tests = array();



// Build the javascript for the tests
foreach ($dates as $d) {

	$orig_ts = strtotime($d);



	foreach ($dateFormats as $f) {

		$fd = date($f, $orig_ts);
		/*$res0 = strtotime($fd);

		if ($res0 === false) {
			$res0 = 'false';
		}

		$tests[] = "\n\t\t'Date `" . $fd . "` (originally `" . $d . "`) should give timestamp `" . $res0 . "`': "
			. " function () {\n"
			. "\t\t\tY.Assert.areSame(" . $res0 . ", strtotime('" . $fd . "'));\n"
			. "\t\t}";
		*/


		foreach ($changes as $c) {
			
			$res = strtotime($c, $orig_ts);

			if ($res === false) {
				$res = 'false';
			}

			$tests[] = "\n\t\t'Timestamp `" . $orig_ts . "`  with change `" . $c . "` should give `" . $res 
					. ($res !== 'false' ? "` (ie " . date("Y-m-d H:i:s", $res) . ")" : "") . "': "
				. " function () {\n"
				. "\t\t\tY.Assert.areSame(" . $res . ", strtotime('" . $c . "', " . $orig_ts . "));\n"
				. "\t\t}";




			$res2 = strtotime($fd . " " . $c);

			if ($res2 === false) {
				$res2 = 'false';
			}

			$tests[] = "\n\t\t'Formatted date `" . $fd . "` with change `" . $c . "` should give `" . $res2 . "`': "
				. " function () {\n"
				. "\t\t\tY.Assert.areSame(" . $res2 . ", strtotime('" . $fd . " " . $c . "'));\n"
				. "\t\t}";

		}

		foreach ($appendChanges as $c) {

			$res3 = strtotime($c . " " . $orig_ts);
			if ($res3 === false) {
				$res3 = 'false';
			}
			$tests[] = "\n\t\t'strtotime(`" . $c . " " . $orig_ts . "`) (" . date("Y-m-d H:i:s", $orig_ts) 
				. ") should give `" . $res3 . "`" . ( $res3 !== 'false' ? " (" . date("Y-m-d H:i:s", $res3) . ")" : "" ) . "': "
				. " function () {\n"
				. "\t\t\tY.Assert.areSame(" . $res3 . ", strtotime('" . $c . " " . $orig_ts . "'));\n"
				. "\t\t}";
			
			$res3 = strtotime($c . " " . $fd);
			if ($res3 === false) {
				$res3 = 'false';
			}
			$tests[] = "\n\t\t'strtotime(`" . $c . " " . $fd . "`) (" . date("Y-m-d H:i:s", $orig_ts) 
				. ") should give `" . ( $res3 !== 'false' ? " (" . date("Y-m-d H:i:s", $res3) . ")" : "" ) . "': "
				. " function () {\n"
				. "\t\t\tY.Assert.areSame(" . $res3 . ", strtotime('" . $c . " " . $fd . "'));\n"
				. "\t\t}";

		}

	}
}



foreach ($extras as $e) {

	$res2 = strtotime($e, 1360022400);
	if ($res2 === false) {
		$res2 = 'false';
	}
	$tests[] = "\n\t\t'Extras: strtotime(\"" . $e . "\", 1360022400) should give `" . $res2 . "`': "
		. " function () {\n"
		. "\t\t\tY.Assert.areSame(" . $res2 . ", strtotime('" . $e . "', 1360022400));\n"
		. "\t\t}";		
}


// Build the Test module:
$h = 'YUI.add("strtotime-test", function (Y) {

	var Assert       = Y.Assert,
		strtotime    = Y.DataType.Date.strtotime,
	    suite = new Y.Test.Suite("Strtotime");

	suite.add(new Y.Test.Case({
	    name: "General",'

	    . implode(",\n", $tests)

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

<script src="http://yui.yahooapis.com/3.8.0/build/yui/yui.js"></script>

<script>
YUI({
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
}).use("strtotime-test", "test-console", function (Y) {
    new Y.Test.Console().render("#log");
    Y.Test.Runner.run();
});
</script>

</body>
</html>
';



// Write the files:
file_put_contents('n:\wamp\yui3contrib\strtotime\assets\strtotime-test.js', $h);
file_put_contents('n:\wamp\yui3contrib\strtotime\tests\unit\strtotime-test.html', $html);
