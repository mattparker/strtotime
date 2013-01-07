YUI.add("strtotime-test", function (Y) {

	var Assert       = Y.Assert,
		strtotime    = Y.DataType.Date.strtotime,
	    suite = new Y.Test.Suite("Strtotime");

	suite.add(new Y.Test.Case({
	    name: "General",
		'Timestamp `1364811922`  with change `yesterday` should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('yesterday', 1364811922));
		},

		'Formatted date `2013/04/01` with change `yesterday` should give `1364688000`':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013/04/01 yesterday'));
		},

		'Timestamp `1364811922`  with change `now` should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('now', 1364811922));
		},

		'Formatted date `2013/04/01` with change `now` should give `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 now'));
		},

		'Timestamp `1364811922`  with change `noon` should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('noon', 1364811922));
		},

		'Formatted date `2013/04/01` with change `noon` should give `1364817600`':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013/04/01 noon'));
		},

		'Timestamp `1364811922`  with change `midnight` should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('midnight', 1364811922));
		},

		'Formatted date `2013/04/01` with change `midnight` should give `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 midnight'));
		},

		'Timestamp `1364811922`  with change `today` should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('today', 1364811922));
		},

		'Formatted date `2013/04/01` with change `today` should give `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 today'));
		},

		'Timestamp `1364811922`  with change `tomorrow` should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('tomorrow', 1364811922));
		},

		'Formatted date `2013/04/01` with change `tomorrow` should give `1364860800`':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013/04/01 tomorrow'));
		},

		'Timestamp `1364811922`  with change `first day of` should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('first day of', 1364811922));
		},

		'Formatted date `2013/04/01` with change `first day of` should give `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 first day of'));
		},

		'Timestamp `1364811922`  with change `last day of` should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('last day of', 1364811922));
		},

		'Formatted date `2013/04/01` with change `last day of` should give `1367280000`':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013/04/01 last day of'));
		},

		'strtotime(`first Tuesday of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1364811922'));
		},

		'strtotime(`first Tuesday of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013/04/01'));
		},

		'strtotime(`next Thursday of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1364811922'));
		},

		'strtotime(`next Thursday of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013/04/01'));
		},

		'strtotime(`second Fri of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1364811922'));
		},

		'strtotime(`second Fri of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013/04/01'));
		},

		'strtotime(`third Wednesday of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1364811922'));
		},

		'strtotime(`third Wednesday of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013/04/01'));
		},

		'strtotime(`last Sat of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1364811922'));
		},

		'strtotime(`last Sat of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013/04/01'));
		},

		'strtotime(`fourth Sunday of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1364811922'));
		},

		'strtotime(`fourth Sunday of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013/04/01'));
		},

		'strtotime(`fifth Monday of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1364811922'));
		},

		'strtotime(`fifth Monday of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013/04/01'));
		},

		'strtotime(`sixth Mon of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1364811922'));
		},

		'strtotime(`sixth Mon of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013/04/01'));
		},

		'strtotime(`seventh Tue of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1364811922'));
		},

		'strtotime(`seventh Tue of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013/04/01'));
		},

		'strtotime(`eighth Wed of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1364811922'));
		},

		'strtotime(`eighth Wed of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013/04/01'));
		},

		'strtotime(`ninth Thu of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1364811922'));
		},

		'strtotime(`ninth Thu of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013/04/01'));
		},

		'strtotime(`tenth Sat of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1364811922'));
		},

		'strtotime(`tenth Sat of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013/04/01'));
		},

		'strtotime(`eleventh Friday of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1364811922'));
		},

		'strtotime(`eleventh Friday of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013/04/01'));
		},

		'strtotime(`twelfth Saturday of 1364811922`) (2013-04-01 10:25:22) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1364811922'));
		},

		'strtotime(`twelfth Saturday of 2013/04/01`) (2013-04-01 10:25:22) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013/04/01'));
		},

		'Timestamp `1356998399`  with change `yesterday` should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('yesterday', 1356998399));
		},

		'Formatted date `2012/12/31` with change `yesterday` should give `1356825600`':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012/12/31 yesterday'));
		},

		'Timestamp `1356998399`  with change `now` should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('now', 1356998399));
		},

		'Formatted date `2012/12/31` with change `now` should give `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 now'));
		},

		'Timestamp `1356998399`  with change `noon` should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('noon', 1356998399));
		},

		'Formatted date `2012/12/31` with change `noon` should give `1356955200`':  function () {
			Y.Assert.areSame(1356955200, strtotime('2012/12/31 noon'));
		},

		'Timestamp `1356998399`  with change `midnight` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('midnight', 1356998399));
		},

		'Formatted date `2012/12/31` with change `midnight` should give `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 midnight'));
		},

		'Timestamp `1356998399`  with change `today` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('today', 1356998399));
		},

		'Formatted date `2012/12/31` with change `today` should give `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 today'));
		},

		'Timestamp `1356998399`  with change `tomorrow` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('tomorrow', 1356998399));
		},

		'Formatted date `2012/12/31` with change `tomorrow` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2012/12/31 tomorrow'));
		},

		'Timestamp `1356998399`  with change `first day of` should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('first day of', 1356998399));
		},

		'Formatted date `2012/12/31` with change `first day of` should give `1354320000`':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012/12/31 first day of'));
		},

		'Timestamp `1356998399`  with change `last day of` should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('last day of', 1356998399));
		},

		'Formatted date `2012/12/31` with change `last day of` should give `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 last day of'));
		},

		'strtotime(`first Tuesday of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998399'));
		},

		'strtotime(`first Tuesday of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 2012/12/31'));
		},

		'strtotime(`next Thursday of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998399'));
		},

		'strtotime(`next Thursday of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 2012/12/31'));
		},

		'strtotime(`second Fri of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998399'));
		},

		'strtotime(`second Fri of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 2012/12/31'));
		},

		'strtotime(`third Wednesday of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998399'));
		},

		'strtotime(`third Wednesday of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 2012/12/31'));
		},

		'strtotime(`last Sat of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998399'));
		},

		'strtotime(`last Sat of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 2012/12/31'));
		},

		'strtotime(`fourth Sunday of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998399'));
		},

		'strtotime(`fourth Sunday of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 2012/12/31'));
		},

		'strtotime(`fifth Monday of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998399'));
		},

		'strtotime(`fifth Monday of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 2012/12/31'));
		},

		'strtotime(`sixth Mon of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998399'));
		},

		'strtotime(`sixth Mon of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 2012/12/31'));
		},

		'strtotime(`seventh Tue of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998399'));
		},

		'strtotime(`seventh Tue of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 2012/12/31'));
		},

		'strtotime(`eighth Wed of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998399'));
		},

		'strtotime(`eighth Wed of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 2012/12/31'));
		},

		'strtotime(`ninth Thu of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998399'));
		},

		'strtotime(`ninth Thu of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 2012/12/31'));
		},

		'strtotime(`tenth Sat of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998399'));
		},

		'strtotime(`tenth Sat of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 2012/12/31'));
		},

		'strtotime(`eleventh Friday of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998399'));
		},

		'strtotime(`eleventh Friday of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 2012/12/31'));
		},

		'strtotime(`twelfth Saturday of 1356998399`) (2012-12-31 23:59:59) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998399'));
		},

		'strtotime(`twelfth Saturday of 2012/12/31`) (2012-12-31 23:59:59) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 2012/12/31'));
		},

		'Timestamp `1356998400`  with change `yesterday` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('yesterday', 1356998400));
		},

		'Formatted date `2013/01/01` with change `yesterday` should give `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013/01/01 yesterday'));
		},

		'Timestamp `1356998400`  with change `now` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('now', 1356998400));
		},

		'Formatted date `2013/01/01` with change `now` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 now'));
		},

		'Timestamp `1356998400`  with change `noon` should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('noon', 1356998400));
		},

		'Formatted date `2013/01/01` with change `noon` should give `1357041600`':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013/01/01 noon'));
		},

		'Timestamp `1356998400`  with change `midnight` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('midnight', 1356998400));
		},

		'Formatted date `2013/01/01` with change `midnight` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 midnight'));
		},

		'Timestamp `1356998400`  with change `today` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('today', 1356998400));
		},

		'Formatted date `2013/01/01` with change `today` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 today'));
		},

		'Timestamp `1356998400`  with change `tomorrow` should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('tomorrow', 1356998400));
		},

		'Formatted date `2013/01/01` with change `tomorrow` should give `1357084800`':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013/01/01 tomorrow'));
		},

		'Timestamp `1356998400`  with change `first day of` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first day of', 1356998400));
		},

		'Formatted date `2013/01/01` with change `first day of` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 first day of'));
		},

		'Timestamp `1356998400`  with change `last day of` should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('last day of', 1356998400));
		},

		'Formatted date `2013/01/01` with change `last day of` should give `1359590400`':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013/01/01 last day of'));
		},

		'strtotime(`first Tuesday of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998400'));
		},

		'strtotime(`first Tuesday of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013/01/01'));
		},

		'strtotime(`next Thursday of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998400'));
		},

		'strtotime(`next Thursday of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013/01/01'));
		},

		'strtotime(`second Fri of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998400'));
		},

		'strtotime(`second Fri of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013/01/01'));
		},

		'strtotime(`third Wednesday of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998400'));
		},

		'strtotime(`third Wednesday of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013/01/01'));
		},

		'strtotime(`last Sat of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998400'));
		},

		'strtotime(`last Sat of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013/01/01'));
		},

		'strtotime(`fourth Sunday of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998400'));
		},

		'strtotime(`fourth Sunday of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013/01/01'));
		},

		'strtotime(`fifth Monday of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998400'));
		},

		'strtotime(`fifth Monday of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013/01/01'));
		},

		'strtotime(`sixth Mon of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998400'));
		},

		'strtotime(`sixth Mon of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013/01/01'));
		},

		'strtotime(`seventh Tue of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998400'));
		},

		'strtotime(`seventh Tue of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013/01/01'));
		},

		'strtotime(`eighth Wed of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998400'));
		},

		'strtotime(`eighth Wed of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013/01/01'));
		},

		'strtotime(`ninth Thu of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998400'));
		},

		'strtotime(`ninth Thu of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013/01/01'));
		},

		'strtotime(`tenth Sat of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998400'));
		},

		'strtotime(`tenth Sat of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013/01/01'));
		},

		'strtotime(`eleventh Friday of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998400'));
		},

		'strtotime(`eleventh Friday of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013/01/01'));
		},

		'strtotime(`twelfth Saturday of 1356998400`) (2013-01-01 00:00:00) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998400'));
		},

		'strtotime(`twelfth Saturday of 2013/01/01`) (2013-01-01 00:00:00) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013/01/01'));
		},

		'Timestamp `1356998401`  with change `yesterday` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('yesterday', 1356998401));
		},

		'Formatted date `2013/01/01` with change `yesterday` should give `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013/01/01 yesterday'));
		},

		'Timestamp `1356998401`  with change `now` should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('now', 1356998401));
		},

		'Formatted date `2013/01/01` with change `now` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 now'));
		},

		'Timestamp `1356998401`  with change `noon` should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('noon', 1356998401));
		},

		'Formatted date `2013/01/01` with change `noon` should give `1357041600`':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013/01/01 noon'));
		},

		'Timestamp `1356998401`  with change `midnight` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('midnight', 1356998401));
		},

		'Formatted date `2013/01/01` with change `midnight` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 midnight'));
		},

		'Timestamp `1356998401`  with change `today` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('today', 1356998401));
		},

		'Formatted date `2013/01/01` with change `today` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 today'));
		},

		'Timestamp `1356998401`  with change `tomorrow` should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('tomorrow', 1356998401));
		},

		'Formatted date `2013/01/01` with change `tomorrow` should give `1357084800`':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013/01/01 tomorrow'));
		},

		'Timestamp `1356998401`  with change `first day of` should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first day of', 1356998401));
		},

		'Formatted date `2013/01/01` with change `first day of` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 first day of'));
		},

		'Timestamp `1356998401`  with change `last day of` should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('last day of', 1356998401));
		},

		'Formatted date `2013/01/01` with change `last day of` should give `1359590400`':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013/01/01 last day of'));
		},

		'strtotime(`first Tuesday of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998401'));
		},

		'strtotime(`first Tuesday of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013/01/01'));
		},

		'strtotime(`next Thursday of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998401'));
		},

		'strtotime(`next Thursday of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013/01/01'));
		},

		'strtotime(`second Fri of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998401'));
		},

		'strtotime(`second Fri of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013/01/01'));
		},

		'strtotime(`third Wednesday of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998401'));
		},

		'strtotime(`third Wednesday of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013/01/01'));
		},

		'strtotime(`last Sat of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998401'));
		},

		'strtotime(`last Sat of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013/01/01'));
		},

		'strtotime(`fourth Sunday of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998401'));
		},

		'strtotime(`fourth Sunday of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013/01/01'));
		},

		'strtotime(`fifth Monday of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998401'));
		},

		'strtotime(`fifth Monday of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013/01/01'));
		},

		'strtotime(`sixth Mon of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998401'));
		},

		'strtotime(`sixth Mon of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013/01/01'));
		},

		'strtotime(`seventh Tue of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998401'));
		},

		'strtotime(`seventh Tue of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013/01/01'));
		},

		'strtotime(`eighth Wed of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998401'));
		},

		'strtotime(`eighth Wed of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013/01/01'));
		},

		'strtotime(`ninth Thu of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998401'));
		},

		'strtotime(`ninth Thu of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013/01/01'));
		},

		'strtotime(`tenth Sat of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998401'));
		},

		'strtotime(`tenth Sat of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013/01/01'));
		},

		'strtotime(`eleventh Friday of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998401'));
		},

		'strtotime(`eleventh Friday of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013/01/01'));
		},

		'strtotime(`twelfth Saturday of 1356998401`) (2013-01-01 00:00:01) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998401'));
		},

		'strtotime(`twelfth Saturday of 2013/01/01`) (2013-01-01 00:00:01) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013/01/01'));
		},

		'Timestamp `1330502558`  with change `yesterday` should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('yesterday', 1330502558));
		},

		'Formatted date `2012/02/29` with change `yesterday` should give `1330387200`':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012/02/29 yesterday'));
		},

		'Timestamp `1330502558`  with change `now` should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('now', 1330502558));
		},

		'Formatted date `2012/02/29` with change `now` should give `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 now'));
		},

		'Timestamp `1330502558`  with change `noon` should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('noon', 1330502558));
		},

		'Formatted date `2012/02/29` with change `noon` should give `1330516800`':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012/02/29 noon'));
		},

		'Timestamp `1330502558`  with change `midnight` should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('midnight', 1330502558));
		},

		'Formatted date `2012/02/29` with change `midnight` should give `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 midnight'));
		},

		'Timestamp `1330502558`  with change `today` should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('today', 1330502558));
		},

		'Formatted date `2012/02/29` with change `today` should give `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 today'));
		},

		'Timestamp `1330502558`  with change `tomorrow` should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('tomorrow', 1330502558));
		},

		'Formatted date `2012/02/29` with change `tomorrow` should give `1330560000`':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012/02/29 tomorrow'));
		},

		'Timestamp `1330502558`  with change `first day of` should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('first day of', 1330502558));
		},

		'Formatted date `2012/02/29` with change `first day of` should give `1328054400`':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012/02/29 first day of'));
		},

		'Timestamp `1330502558`  with change `last day of` should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('last day of', 1330502558));
		},

		'Formatted date `2012/02/29` with change `last day of` should give `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 last day of'));
		},

		'strtotime(`first Tuesday of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1330502558'));
		},

		'strtotime(`first Tuesday of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012/02/29'));
		},

		'strtotime(`next Thursday of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1330502558'));
		},

		'strtotime(`next Thursday of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012/02/29'));
		},

		'strtotime(`second Fri of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1330502558'));
		},

		'strtotime(`second Fri of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012/02/29'));
		},

		'strtotime(`third Wednesday of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1330502558'));
		},

		'strtotime(`third Wednesday of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012/02/29'));
		},

		'strtotime(`last Sat of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1330502558'));
		},

		'strtotime(`last Sat of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012/02/29'));
		},

		'strtotime(`fourth Sunday of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1330502558'));
		},

		'strtotime(`fourth Sunday of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012/02/29'));
		},

		'strtotime(`fifth Monday of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1330502558'));
		},

		'strtotime(`fifth Monday of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012/02/29'));
		},

		'strtotime(`sixth Mon of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1330502558'));
		},

		'strtotime(`sixth Mon of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012/02/29'));
		},

		'strtotime(`seventh Tue of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1330502558'));
		},

		'strtotime(`seventh Tue of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012/02/29'));
		},

		'strtotime(`eighth Wed of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1330502558'));
		},

		'strtotime(`eighth Wed of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012/02/29'));
		},

		'strtotime(`ninth Thu of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1330502558'));
		},

		'strtotime(`ninth Thu of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012/02/29'));
		},

		'strtotime(`tenth Sat of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1330502558'));
		},

		'strtotime(`tenth Sat of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012/02/29'));
		},

		'strtotime(`eleventh Friday of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1330502558'));
		},

		'strtotime(`eleventh Friday of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012/02/29'));
		},

		'strtotime(`twelfth Saturday of 1330502558`) (2012-02-29 08:02:38) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1330502558'));
		},

		'strtotime(`twelfth Saturday of 2012/02/29`) (2012-02-29 08:02:38) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012/02/29'));
		},

		'Extras: strtotime("back of 8am", 1360022400) should give `1360052100`':  function () {
			Y.Assert.areSame(1360052100, strtotime('back of 8am', 1360022400));
		},

		'Extras: strtotime("back of 8", 1360022400) should give `1360052100`':  function () {
			Y.Assert.areSame(1360052100, strtotime('back of 8', 1360022400));
		},

		'Extras: strtotime("back of 8pm", 1360022400) should give `1360095300`':  function () {
			Y.Assert.areSame(1360095300, strtotime('back of 8pm', 1360022400));
		},

		'Extras: strtotime("back of 20", 1360022400) should give `1360095300`':  function () {
			Y.Assert.areSame(1360095300, strtotime('back of 20', 1360022400));
		},

		'Extras: strtotime("front of 8am", 1360022400) should give `1360050300`':  function () {
			Y.Assert.areSame(1360050300, strtotime('front of 8am', 1360022400));
		},

		'Extras: strtotime("front of 8", 1360022400) should give `1360050300`':  function () {
			Y.Assert.areSame(1360050300, strtotime('front of 8', 1360022400));
		},

		'Extras: strtotime("front of 8pm", 1360022400) should give `1360093500`':  function () {
			Y.Assert.areSame(1360093500, strtotime('front of 8pm', 1360022400));
		},

		'Extras: strtotime("front of 20", 1360022400) should give `1360093500`':  function () {
			Y.Assert.areSame(1360093500, strtotime('front of 20', 1360022400));
		},

		'Extras: strtotime("first Wednesday of 2012/05/16", 1360022400) should give `1335916800`':  function () {
			Y.Assert.areSame(1335916800, strtotime('first Wednesday of 2012/05/16', 1360022400));
		},

		'Extras: strtotime("@1364811922", 1360022400) should give `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('@1364811922', 1360022400));
		},

		'Extras: strtotime("@1356998399", 1360022400) should give `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('@1356998399', 1360022400));
		},

		'Extras: strtotime("@1356998400", 1360022400) should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('@1356998400', 1360022400));
		},

		'Extras: strtotime("@1356998401", 1360022400) should give `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('@1356998401', 1360022400));
		},

		'Extras: strtotime("@1330502558", 1360022400) should give `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('@1330502558', 1360022400));
		},

		'Extras: strtotime("2am yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('2am yesterday', 1360022400));
		},

		'Extras: strtotime("2am now", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('2am now', 1360022400));
		},

		'Extras: strtotime("2am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('2am noon', 1360022400));
		},

		'Extras: strtotime("2am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2am midnight', 1360022400));
		},

		'Extras: strtotime("2am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2am today', 1360022400));
		},

		'Extras: strtotime("2am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('2am tomorrow', 1360022400));
		},

		'Extras: strtotime("2am first day of", 1360022400) should give `1359684000`':  function () {
			Y.Assert.areSame(1359684000, strtotime('2am first day of', 1360022400));
		},

		'Extras: strtotime("2am last day of", 1360022400) should give `1362016800`':  function () {
			Y.Assert.areSame(1362016800, strtotime('2am last day of', 1360022400));
		},

		'Extras: strtotime("2AM yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('2AM yesterday', 1360022400));
		},

		'Extras: strtotime("2AM now", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('2AM now', 1360022400));
		},

		'Extras: strtotime("2AM noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('2AM noon', 1360022400));
		},

		'Extras: strtotime("2AM midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2AM midnight', 1360022400));
		},

		'Extras: strtotime("2AM today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2AM today', 1360022400));
		},

		'Extras: strtotime("2AM tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('2AM tomorrow', 1360022400));
		},

		'Extras: strtotime("2AM first day of", 1360022400) should give `1359684000`':  function () {
			Y.Assert.areSame(1359684000, strtotime('2AM first day of', 1360022400));
		},

		'Extras: strtotime("2AM last day of", 1360022400) should give `1362016800`':  function () {
			Y.Assert.areSame(1362016800, strtotime('2AM last day of', 1360022400));
		},

		'Extras: strtotime("14.18 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('14.18 yesterday', 1360022400));
		},

		'Extras: strtotime("14.18 now", 1360022400) should give `1360073880`':  function () {
			Y.Assert.areSame(1360073880, strtotime('14.18 now', 1360022400));
		},

		'Extras: strtotime("14.18 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('14.18 noon', 1360022400));
		},

		'Extras: strtotime("14.18 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('14.18 midnight', 1360022400));
		},

		'Extras: strtotime("14.18 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('14.18 today', 1360022400));
		},

		'Extras: strtotime("14.18 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('14.18 tomorrow', 1360022400));
		},

		'Extras: strtotime("14.18 first day of", 1360022400) should give `1359728280`':  function () {
			Y.Assert.areSame(1359728280, strtotime('14.18 first day of', 1360022400));
		},

		'Extras: strtotime("14.18 last day of", 1360022400) should give `1362061080`':  function () {
			Y.Assert.areSame(1362061080, strtotime('14.18 last day of', 1360022400));
		},

		'Extras: strtotime("15:02 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('15:02 yesterday', 1360022400));
		},

		'Extras: strtotime("15:02 now", 1360022400) should give `1360076520`':  function () {
			Y.Assert.areSame(1360076520, strtotime('15:02 now', 1360022400));
		},

		'Extras: strtotime("15:02 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('15:02 noon', 1360022400));
		},

		'Extras: strtotime("15:02 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:02 midnight', 1360022400));
		},

		'Extras: strtotime("15:02 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:02 today', 1360022400));
		},

		'Extras: strtotime("15:02 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('15:02 tomorrow', 1360022400));
		},

		'Extras: strtotime("15:02 first day of", 1360022400) should give `1359730920`':  function () {
			Y.Assert.areSame(1359730920, strtotime('15:02 first day of', 1360022400));
		},

		'Extras: strtotime("15:02 last day of", 1360022400) should give `1362063720`':  function () {
			Y.Assert.areSame(1362063720, strtotime('15:02 last day of', 1360022400));
		},

		'Extras: strtotime("3.29 am yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('3.29 am yesterday', 1360022400));
		},

		'Extras: strtotime("3.29 am now", 1360022400) should give `1360034940`':  function () {
			Y.Assert.areSame(1360034940, strtotime('3.29 am now', 1360022400));
		},

		'Extras: strtotime("3.29 am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('3.29 am noon', 1360022400));
		},

		'Extras: strtotime("3.29 am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3.29 am midnight', 1360022400));
		},

		'Extras: strtotime("3.29 am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3.29 am today', 1360022400));
		},

		'Extras: strtotime("3.29 am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('3.29 am tomorrow', 1360022400));
		},

		'Extras: strtotime("3.29 am first day of", 1360022400) should give `1359689340`':  function () {
			Y.Assert.areSame(1359689340, strtotime('3.29 am first day of', 1360022400));
		},

		'Extras: strtotime("3.29 am last day of", 1360022400) should give `1362022140`':  function () {
			Y.Assert.areSame(1362022140, strtotime('3.29 am last day of', 1360022400));
		},

		'Extras: strtotime("3:53 PM yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('3:53 PM yesterday', 1360022400));
		},

		'Extras: strtotime("3:53 PM now", 1360022400) should give `1360079580`':  function () {
			Y.Assert.areSame(1360079580, strtotime('3:53 PM now', 1360022400));
		},

		'Extras: strtotime("3:53 PM noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('3:53 PM noon', 1360022400));
		},

		'Extras: strtotime("3:53 PM midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:53 PM midnight', 1360022400));
		},

		'Extras: strtotime("3:53 PM today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:53 PM today', 1360022400));
		},

		'Extras: strtotime("3:53 PM tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('3:53 PM tomorrow', 1360022400));
		},

		'Extras: strtotime("3:53 PM first day of", 1360022400) should give `1359733980`':  function () {
			Y.Assert.areSame(1359733980, strtotime('3:53 PM first day of', 1360022400));
		},

		'Extras: strtotime("3:53 PM last day of", 1360022400) should give `1362066780`':  function () {
			Y.Assert.areSame(1362066780, strtotime('3:53 PM last day of', 1360022400));
		},

		'Extras: strtotime("15:45:23 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('15:45:23 yesterday', 1360022400));
		},

		'Extras: strtotime("15:45:23 now", 1360022400) should give `1360079123`':  function () {
			Y.Assert.areSame(1360079123, strtotime('15:45:23 now', 1360022400));
		},

		'Extras: strtotime("15:45:23 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('15:45:23 noon', 1360022400));
		},

		'Extras: strtotime("15:45:23 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:45:23 midnight', 1360022400));
		},

		'Extras: strtotime("15:45:23 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:45:23 today', 1360022400));
		},

		'Extras: strtotime("15:45:23 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('15:45:23 tomorrow', 1360022400));
		},

		'Extras: strtotime("15:45:23 first day of", 1360022400) should give `1359733523`':  function () {
			Y.Assert.areSame(1359733523, strtotime('15:45:23 first day of', 1360022400));
		},

		'Extras: strtotime("15:45:23 last day of", 1360022400) should give `1362066323`':  function () {
			Y.Assert.areSame(1362066323, strtotime('15:45:23 last day of', 1360022400));
		},

		'Extras: strtotime("3:45:23 am yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('3:45:23 am yesterday', 1360022400));
		},

		'Extras: strtotime("3:45:23 am now", 1360022400) should give `1360035923`':  function () {
			Y.Assert.areSame(1360035923, strtotime('3:45:23 am now', 1360022400));
		},

		'Extras: strtotime("3:45:23 am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('3:45:23 am noon', 1360022400));
		},

		'Extras: strtotime("3:45:23 am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:45:23 am midnight', 1360022400));
		},

		'Extras: strtotime("3:45:23 am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:45:23 am today', 1360022400));
		},

		'Extras: strtotime("3:45:23 am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('3:45:23 am tomorrow', 1360022400));
		},

		'Extras: strtotime("3:45:23 am first day of", 1360022400) should give `1359690323`':  function () {
			Y.Assert.areSame(1359690323, strtotime('3:45:23 am first day of', 1360022400));
		},

		'Extras: strtotime("3:45:23 am last day of", 1360022400) should give `1362023123`':  function () {
			Y.Assert.areSame(1362023123, strtotime('3:45:23 am last day of', 1360022400));
		}
	}));

Y.Test.Runner.add(suite);

}, "3.5.0", {
    requires: ["strtotime", "test"]
});
