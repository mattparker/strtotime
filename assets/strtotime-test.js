YUI.add("strtotime-test", function (Y) {

	var Assert       = Y.Assert,
		strtotime    = Y.DataType.Date.strtotime,
	    suite = new Y.Test.Suite("Strtotime");

	suite.add(new Y.Test.Case({
	    name: "General",
		'Date `2013/04/01` (originally `2013-04-01 10:25:22`) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01'));
		},

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

		'strtotime(`first Tuesday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1364811922'));
		},

		'strtotime(`next Thursday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1364811922'));
		},

		'strtotime(`second Fri of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1364811922'));
		},

		'strtotime(`third Wednesday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1364811922'));
		},

		'strtotime(`last Sat of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1364811922'));
		},

		'strtotime(`fourth Sunday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1364811922'));
		},

		'strtotime(`fifth Monday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1364811922'));
		},

		'strtotime(`sixth Mon of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1364811922'));
		},

		'strtotime(`seventh Tue of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1364811922'));
		},

		'strtotime(`eighth Wed of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1364811922'));
		},

		'strtotime(`ninth Thu of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1364811922'));
		},

		'strtotime(`tenth Sat of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1364811922'));
		},

		'strtotime(`eleventh Friday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1364811922'));
		},

		'strtotime(`twelfth Saturday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1364811922'));
		},

		'Date `@1364811922` (originally `2013-04-01 10:25:22`) should give timestamp `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('@1364811922'));
		},

		'Timestamp `1364811922`  with change `yesterday` should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('yesterday', 1364811922));
		},

		'Formatted date `@1364811922` with change `yesterday` should give `1364725522`':  function () {
			Y.Assert.areSame(1364725522, strtotime('@1364811922 yesterday'));
		},

		'Timestamp `1364811922`  with change `now` should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('now', 1364811922));
		},

		'Formatted date `@1364811922` with change `now` should give `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('@1364811922 now'));
		},

		'Timestamp `1364811922`  with change `noon` should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('noon', 1364811922));
		},

		'Formatted date `@1364811922` with change `noon` should give `1364855122`':  function () {
			Y.Assert.areSame(1364855122, strtotime('@1364811922 noon'));
		},

		'Timestamp `1364811922`  with change `midnight` should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('midnight', 1364811922));
		},

		'Formatted date `@1364811922` with change `midnight` should give `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('@1364811922 midnight'));
		},

		'Timestamp `1364811922`  with change `today` should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('today', 1364811922));
		},

		'Formatted date `@1364811922` with change `today` should give `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('@1364811922 today'));
		},

		'Timestamp `1364811922`  with change `tomorrow` should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('tomorrow', 1364811922));
		},

		'Formatted date `@1364811922` with change `tomorrow` should give `1364898322`':  function () {
			Y.Assert.areSame(1364898322, strtotime('@1364811922 tomorrow'));
		},

		'Timestamp `1364811922`  with change `first day of` should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('first day of', 1364811922));
		},

		'Formatted date `@1364811922` with change `first day of` should give `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('@1364811922 first day of'));
		},

		'Timestamp `1364811922`  with change `last day of` should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('last day of', 1364811922));
		},

		'Formatted date `@1364811922` with change `last day of` should give `1367403922`':  function () {
			Y.Assert.areSame(1367403922, strtotime('@1364811922 last day of'));
		},

		'strtotime(`first Tuesday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1364811922'));
		},

		'strtotime(`next Thursday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1364811922'));
		},

		'strtotime(`second Fri of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1364811922'));
		},

		'strtotime(`third Wednesday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1364811922'));
		},

		'strtotime(`last Sat of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1364811922'));
		},

		'strtotime(`fourth Sunday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1364811922'));
		},

		'strtotime(`fifth Monday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1364811922'));
		},

		'strtotime(`sixth Mon of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1364811922'));
		},

		'strtotime(`seventh Tue of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1364811922'));
		},

		'strtotime(`eighth Wed of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1364811922'));
		},

		'strtotime(`ninth Thu of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1364811922'));
		},

		'strtotime(`tenth Sat of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1364811922'));
		},

		'strtotime(`eleventh Friday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1364811922'));
		},

		'strtotime(`twelfth Saturday of 1364811922`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1364811922'));
		},

		'Date `2012/12/31` (originally `2012-12-31 23:59:59`) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31'));
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

		'strtotime(`first Tuesday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998399'));
		},

		'strtotime(`next Thursday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998399'));
		},

		'strtotime(`second Fri of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998399'));
		},

		'strtotime(`third Wednesday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998399'));
		},

		'strtotime(`last Sat of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998399'));
		},

		'strtotime(`fourth Sunday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998399'));
		},

		'strtotime(`fifth Monday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998399'));
		},

		'strtotime(`sixth Mon of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998399'));
		},

		'strtotime(`seventh Tue of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998399'));
		},

		'strtotime(`eighth Wed of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998399'));
		},

		'strtotime(`ninth Thu of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998399'));
		},

		'strtotime(`tenth Sat of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998399'));
		},

		'strtotime(`eleventh Friday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998399'));
		},

		'strtotime(`twelfth Saturday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998399'));
		},

		'Date `@1356998399` (originally `2012-12-31 23:59:59`) should give timestamp `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('@1356998399'));
		},

		'Timestamp `1356998399`  with change `yesterday` should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('yesterday', 1356998399));
		},

		'Formatted date `@1356998399` with change `yesterday` should give `1356911999`':  function () {
			Y.Assert.areSame(1356911999, strtotime('@1356998399 yesterday'));
		},

		'Timestamp `1356998399`  with change `now` should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('now', 1356998399));
		},

		'Formatted date `@1356998399` with change `now` should give `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('@1356998399 now'));
		},

		'Timestamp `1356998399`  with change `noon` should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('noon', 1356998399));
		},

		'Formatted date `@1356998399` with change `noon` should give `1357041599`':  function () {
			Y.Assert.areSame(1357041599, strtotime('@1356998399 noon'));
		},

		'Timestamp `1356998399`  with change `midnight` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('midnight', 1356998399));
		},

		'Formatted date `@1356998399` with change `midnight` should give `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('@1356998399 midnight'));
		},

		'Timestamp `1356998399`  with change `today` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('today', 1356998399));
		},

		'Formatted date `@1356998399` with change `today` should give `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('@1356998399 today'));
		},

		'Timestamp `1356998399`  with change `tomorrow` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('tomorrow', 1356998399));
		},

		'Formatted date `@1356998399` with change `tomorrow` should give `1357084799`':  function () {
			Y.Assert.areSame(1357084799, strtotime('@1356998399 tomorrow'));
		},

		'Timestamp `1356998399`  with change `first day of` should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('first day of', 1356998399));
		},

		'Formatted date `@1356998399` with change `first day of` should give `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('@1356998399 first day of'));
		},

		'Timestamp `1356998399`  with change `last day of` should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('last day of', 1356998399));
		},

		'Formatted date `@1356998399` with change `last day of` should give `1359590399`':  function () {
			Y.Assert.areSame(1359590399, strtotime('@1356998399 last day of'));
		},

		'strtotime(`first Tuesday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998399'));
		},

		'strtotime(`next Thursday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998399'));
		},

		'strtotime(`second Fri of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998399'));
		},

		'strtotime(`third Wednesday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998399'));
		},

		'strtotime(`last Sat of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998399'));
		},

		'strtotime(`fourth Sunday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998399'));
		},

		'strtotime(`fifth Monday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998399'));
		},

		'strtotime(`sixth Mon of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998399'));
		},

		'strtotime(`seventh Tue of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998399'));
		},

		'strtotime(`eighth Wed of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998399'));
		},

		'strtotime(`ninth Thu of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998399'));
		},

		'strtotime(`tenth Sat of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998399'));
		},

		'strtotime(`eleventh Friday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998399'));
		},

		'strtotime(`twelfth Saturday of 1356998399`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998399'));
		},

		'Date `2013/01/01` (originally `2013-01-01 00:00:00`) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01'));
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

		'strtotime(`first Tuesday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998400'));
		},

		'strtotime(`next Thursday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998400'));
		},

		'strtotime(`second Fri of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998400'));
		},

		'strtotime(`third Wednesday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998400'));
		},

		'strtotime(`last Sat of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998400'));
		},

		'strtotime(`fourth Sunday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998400'));
		},

		'strtotime(`fifth Monday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998400'));
		},

		'strtotime(`sixth Mon of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998400'));
		},

		'strtotime(`seventh Tue of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998400'));
		},

		'strtotime(`eighth Wed of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998400'));
		},

		'strtotime(`ninth Thu of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998400'));
		},

		'strtotime(`tenth Sat of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998400'));
		},

		'strtotime(`eleventh Friday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998400'));
		},

		'strtotime(`twelfth Saturday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998400'));
		},

		'Date `@1356998400` (originally `2013-01-01 00:00:00`) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('@1356998400'));
		},

		'Timestamp `1356998400`  with change `yesterday` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('yesterday', 1356998400));
		},

		'Formatted date `@1356998400` with change `yesterday` should give `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('@1356998400 yesterday'));
		},

		'Timestamp `1356998400`  with change `now` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('now', 1356998400));
		},

		'Formatted date `@1356998400` with change `now` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('@1356998400 now'));
		},

		'Timestamp `1356998400`  with change `noon` should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('noon', 1356998400));
		},

		'Formatted date `@1356998400` with change `noon` should give `1357041600`':  function () {
			Y.Assert.areSame(1357041600, strtotime('@1356998400 noon'));
		},

		'Timestamp `1356998400`  with change `midnight` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('midnight', 1356998400));
		},

		'Formatted date `@1356998400` with change `midnight` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('@1356998400 midnight'));
		},

		'Timestamp `1356998400`  with change `today` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('today', 1356998400));
		},

		'Formatted date `@1356998400` with change `today` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('@1356998400 today'));
		},

		'Timestamp `1356998400`  with change `tomorrow` should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('tomorrow', 1356998400));
		},

		'Formatted date `@1356998400` with change `tomorrow` should give `1357084800`':  function () {
			Y.Assert.areSame(1357084800, strtotime('@1356998400 tomorrow'));
		},

		'Timestamp `1356998400`  with change `first day of` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first day of', 1356998400));
		},

		'Formatted date `@1356998400` with change `first day of` should give `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('@1356998400 first day of'));
		},

		'Timestamp `1356998400`  with change `last day of` should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('last day of', 1356998400));
		},

		'Formatted date `@1356998400` with change `last day of` should give `1359590400`':  function () {
			Y.Assert.areSame(1359590400, strtotime('@1356998400 last day of'));
		},

		'strtotime(`first Tuesday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998400'));
		},

		'strtotime(`next Thursday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998400'));
		},

		'strtotime(`second Fri of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998400'));
		},

		'strtotime(`third Wednesday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998400'));
		},

		'strtotime(`last Sat of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998400'));
		},

		'strtotime(`fourth Sunday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998400'));
		},

		'strtotime(`fifth Monday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998400'));
		},

		'strtotime(`sixth Mon of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998400'));
		},

		'strtotime(`seventh Tue of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998400'));
		},

		'strtotime(`eighth Wed of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998400'));
		},

		'strtotime(`ninth Thu of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998400'));
		},

		'strtotime(`tenth Sat of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998400'));
		},

		'strtotime(`eleventh Friday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998400'));
		},

		'strtotime(`twelfth Saturday of 1356998400`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998400'));
		},

		'Date `2013/01/01` (originally `2013-01-01 00:00:01`) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01'));
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

		'strtotime(`first Tuesday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998401'));
		},

		'strtotime(`next Thursday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998401'));
		},

		'strtotime(`second Fri of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998401'));
		},

		'strtotime(`third Wednesday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998401'));
		},

		'strtotime(`last Sat of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998401'));
		},

		'strtotime(`fourth Sunday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998401'));
		},

		'strtotime(`fifth Monday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998401'));
		},

		'strtotime(`sixth Mon of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998401'));
		},

		'strtotime(`seventh Tue of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998401'));
		},

		'strtotime(`eighth Wed of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998401'));
		},

		'strtotime(`ninth Thu of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998401'));
		},

		'strtotime(`tenth Sat of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998401'));
		},

		'strtotime(`eleventh Friday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998401'));
		},

		'strtotime(`twelfth Saturday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998401'));
		},

		'Date `@1356998401` (originally `2013-01-01 00:00:01`) should give timestamp `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('@1356998401'));
		},

		'Timestamp `1356998401`  with change `yesterday` should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('yesterday', 1356998401));
		},

		'Formatted date `@1356998401` with change `yesterday` should give `1356912001`':  function () {
			Y.Assert.areSame(1356912001, strtotime('@1356998401 yesterday'));
		},

		'Timestamp `1356998401`  with change `now` should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('now', 1356998401));
		},

		'Formatted date `@1356998401` with change `now` should give `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('@1356998401 now'));
		},

		'Timestamp `1356998401`  with change `noon` should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('noon', 1356998401));
		},

		'Formatted date `@1356998401` with change `noon` should give `1357041601`':  function () {
			Y.Assert.areSame(1357041601, strtotime('@1356998401 noon'));
		},

		'Timestamp `1356998401`  with change `midnight` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('midnight', 1356998401));
		},

		'Formatted date `@1356998401` with change `midnight` should give `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('@1356998401 midnight'));
		},

		'Timestamp `1356998401`  with change `today` should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('today', 1356998401));
		},

		'Formatted date `@1356998401` with change `today` should give `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('@1356998401 today'));
		},

		'Timestamp `1356998401`  with change `tomorrow` should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('tomorrow', 1356998401));
		},

		'Formatted date `@1356998401` with change `tomorrow` should give `1357084801`':  function () {
			Y.Assert.areSame(1357084801, strtotime('@1356998401 tomorrow'));
		},

		'Timestamp `1356998401`  with change `first day of` should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first day of', 1356998401));
		},

		'Formatted date `@1356998401` with change `first day of` should give `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('@1356998401 first day of'));
		},

		'Timestamp `1356998401`  with change `last day of` should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('last day of', 1356998401));
		},

		'Formatted date `@1356998401` with change `last day of` should give `1359590401`':  function () {
			Y.Assert.areSame(1359590401, strtotime('@1356998401 last day of'));
		},

		'strtotime(`first Tuesday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998401'));
		},

		'strtotime(`next Thursday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998401'));
		},

		'strtotime(`second Fri of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998401'));
		},

		'strtotime(`third Wednesday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998401'));
		},

		'strtotime(`last Sat of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998401'));
		},

		'strtotime(`fourth Sunday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998401'));
		},

		'strtotime(`fifth Monday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998401'));
		},

		'strtotime(`sixth Mon of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998401'));
		},

		'strtotime(`seventh Tue of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998401'));
		},

		'strtotime(`eighth Wed of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998401'));
		},

		'strtotime(`ninth Thu of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998401'));
		},

		'strtotime(`tenth Sat of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998401'));
		},

		'strtotime(`eleventh Friday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998401'));
		},

		'strtotime(`twelfth Saturday of 1356998401`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998401'));
		},

		'Date `2012/02/29` (originally `2012-02-29 08:02:38`) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29'));
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

		'strtotime(`first Tuesday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1330502558'));
		},

		'strtotime(`next Thursday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1330502558'));
		},

		'strtotime(`second Fri of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1330502558'));
		},

		'strtotime(`third Wednesday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1330502558'));
		},

		'strtotime(`last Sat of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1330502558'));
		},

		'strtotime(`fourth Sunday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1330502558'));
		},

		'strtotime(`fifth Monday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1330502558'));
		},

		'strtotime(`sixth Mon of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1330502558'));
		},

		'strtotime(`seventh Tue of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1330502558'));
		},

		'strtotime(`eighth Wed of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1330502558'));
		},

		'strtotime(`ninth Thu of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1330502558'));
		},

		'strtotime(`tenth Sat of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1330502558'));
		},

		'strtotime(`eleventh Friday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1330502558'));
		},

		'strtotime(`twelfth Saturday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1330502558'));
		},

		'Date `@1330502558` (originally `2012-02-29 08:02:38`) should give timestamp `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('@1330502558'));
		},

		'Timestamp `1330502558`  with change `yesterday` should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('yesterday', 1330502558));
		},

		'Formatted date `@1330502558` with change `yesterday` should give `1330416158`':  function () {
			Y.Assert.areSame(1330416158, strtotime('@1330502558 yesterday'));
		},

		'Timestamp `1330502558`  with change `now` should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('now', 1330502558));
		},

		'Formatted date `@1330502558` with change `now` should give `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('@1330502558 now'));
		},

		'Timestamp `1330502558`  with change `noon` should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('noon', 1330502558));
		},

		'Formatted date `@1330502558` with change `noon` should give `1330545758`':  function () {
			Y.Assert.areSame(1330545758, strtotime('@1330502558 noon'));
		},

		'Timestamp `1330502558`  with change `midnight` should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('midnight', 1330502558));
		},

		'Formatted date `@1330502558` with change `midnight` should give `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('@1330502558 midnight'));
		},

		'Timestamp `1330502558`  with change `today` should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('today', 1330502558));
		},

		'Formatted date `@1330502558` with change `today` should give `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('@1330502558 today'));
		},

		'Timestamp `1330502558`  with change `tomorrow` should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('tomorrow', 1330502558));
		},

		'Formatted date `@1330502558` with change `tomorrow` should give `1330588958`':  function () {
			Y.Assert.areSame(1330588958, strtotime('@1330502558 tomorrow'));
		},

		'Timestamp `1330502558`  with change `first day of` should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('first day of', 1330502558));
		},

		'Formatted date `@1330502558` with change `first day of` should give `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('@1330502558 first day of'));
		},

		'Timestamp `1330502558`  with change `last day of` should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('last day of', 1330502558));
		},

		'Formatted date `@1330502558` with change `last day of` should give `1333094558`':  function () {
			Y.Assert.areSame(1333094558, strtotime('@1330502558 last day of'));
		},

		'strtotime(`first Tuesday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1330502558'));
		},

		'strtotime(`next Thursday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1330502558'));
		},

		'strtotime(`second Fri of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1330502558'));
		},

		'strtotime(`third Wednesday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1330502558'));
		},

		'strtotime(`last Sat of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1330502558'));
		},

		'strtotime(`fourth Sunday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1330502558'));
		},

		'strtotime(`fifth Monday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1330502558'));
		},

		'strtotime(`sixth Mon of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1330502558'));
		},

		'strtotime(`seventh Tue of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1330502558'));
		},

		'strtotime(`eighth Wed of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1330502558'));
		},

		'strtotime(`ninth Thu of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1330502558'));
		},

		'strtotime(`tenth Sat of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1330502558'));
		},

		'strtotime(`eleventh Friday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1330502558'));
		},

		'strtotime(`twelfth Saturday of 1330502558`) (2013-01-06 16:01:40) should give `false` (2013-01-06 16:01:40)':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1330502558'));
		},

		'Extras: strtotime("back of 8am") should give `1357460100`':  function () {
			Y.Assert.areSame(1357460100, strtotime('back of 8am'));
		},

		'Extras: strtotime("back of 8") should give `1357460100`':  function () {
			Y.Assert.areSame(1357460100, strtotime('back of 8'));
		},

		'Extras: strtotime("back of 8pm") should give `1357503300`':  function () {
			Y.Assert.areSame(1357503300, strtotime('back of 8pm'));
		},

		'Extras: strtotime("back of 20") should give `1357503300`':  function () {
			Y.Assert.areSame(1357503300, strtotime('back of 20'));
		},

		'Extras: strtotime("front of 8am") should give `1357458300`':  function () {
			Y.Assert.areSame(1357458300, strtotime('front of 8am'));
		},

		'Extras: strtotime("front of 8") should give `1357458300`':  function () {
			Y.Assert.areSame(1357458300, strtotime('front of 8'));
		},

		'Extras: strtotime("front of 8pm") should give `1357501500`':  function () {
			Y.Assert.areSame(1357501500, strtotime('front of 8pm'));
		},

		'Extras: strtotime("front of 20") should give `1357501500`':  function () {
			Y.Assert.areSame(1357501500, strtotime('front of 20'));
		},

		'Extras: strtotime("first Wednesday of 2012/05/16") should give `1335916800`':  function () {
			Y.Assert.areSame(1335916800, strtotime('first Wednesday of 2012/05/16'));
		}
	}));

Y.Test.Runner.add(suite);

}, "3.5.0", {
    requires: ["strtotime", "test"]
});
