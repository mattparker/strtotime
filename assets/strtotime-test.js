YUI.add("strtotime-test", function (Y) {

	"use strict";

	var Assert       = Y.Assert,
		strtotime    = Y.DataType.Date.strtotime,
	    suite = new Y.Test.Suite("Strtotime");

	suite.add(new Y.Test.Case({
	    name: "Y.DataType.Date.strtotime php generated tests: plain formatting",


		'strtotime("2013/04/01") (originally `2013-04-01 10:25:22` iso8601dateslash) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01'));
		},

		'strtotime("04/01") (originally `2013-04-01 10:25:22` american short) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01'));
		},

		'strtotime("04/01/2013") (originally `2013-04-01 10:25:22` american) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01/2013'));
		},

		'strtotime("2013/4/01") (originally `2013-04-01 10:25:22` dateslash) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/4/01'));
		},

		'strtotime("2013/04/1") (originally `2013-04-01 10:25:22` iso8601date4) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/1'));
		},

		'strtotime("13-04-01") (originally `2013-04-01 10:25:22` iso8601date2) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('13-04-01'));
		},

		'strtotime("2013-04") (originally `2013-04-01 10:25:22` gnudateshorter) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04'));
		},

		'strtotime("2013-04-01") (originally `2013-04-01 10:25:22` gnudateshort) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01'));
		},

		'strtotime("01 April 2013") (originally `2013-04-01 10:25:22` date full) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April 2013'));
		},

		'strtotime("01st Apr. 2013") (originally `2013-04-01 10:25:22` date full2) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr. 2013'));
		},

		'strtotime("1.04.2013") (originally `2013-04-01 10:25:22` pointed date) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('1.04.2013'));
		},

		'strtotime("01-4-2013") (originally `2013-04-01 10:25:22` pointed date2) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('01-4-2013'));
		},

		'strtotime("1.04.13") (originally `2013-04-01 10:25:22` pointed date3) should give timestamp `1357779853`':  function () {
			Y.Assert.areSame(1357779853, strtotime('1.04.13'));
		},

		'strtotime("April 2013") (originally `2013-04-01 10:25:22` datenoday) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 2013'));
		},

		'strtotime("Apr 2013") (originally `2013-04-01 10:25:22` datenoday2) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 2013'));
		},

		'strtotime("2013 April") (originally `2013-04-01 10:25:22` datenodayrev) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 April'));
		},

		'strtotime("2013 Apr") (originally `2013-04-01 10:25:22` datenodayrev2) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 Apr'));
		},

		'strtotime("April 01 2013") (originally `2013-04-01 10:25:22` datetextual) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 01 2013'));
		},

		'strtotime("Apr 01st") (originally `2013-04-01 10:25:22` datetextual2) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 01st'));
		},

		'strtotime("01 April") (originally `2013-04-01 10:25:22` datenoyearrev) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April'));
		},

		'strtotime("01st Apr") (originally `2013-04-01 10:25:22` datenoyearrev2) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr'));
		},

		'strtotime("20130401") (originally `2013-04-01 10:25:22` datenocolon) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401'));
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00") (originally `2013-04-01 10:25:22` soap) should give timestamp `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30") (originally `2013-04-01 10:25:22` soap2) should give timestamp `1364820922`':  function () {
			Y.Assert.areSame(1364820922, strtotime('2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00") (originally `2013-04-01 10:25:22` soap3) should give timestamp `1364793922`':  function () {
			Y.Assert.areSame(1364793922, strtotime('2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime("20130401T10:25:22") (originally `2013-04-01 10:25:22` xmlrpc) should give timestamp `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('20130401T10:25:22'));
		},

		'strtotime("20130401	102522") (originally `2013-04-01 10:25:22` xmlrpcnocolon) should give timestamp `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('20130401	102522'));
		},

		'strtotime("2013-04-01T10:25:22") (originally `2013-04-01 10:25:22` wddf) should give timestamp `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013-04-01T10:25:22'));
		},

		'strtotime("2013:04:01 10:25:22") (originally `2013-04-01 10:25:22` exif) should give timestamp `1364811922`':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013:04:01 10:25:22'));
		},

		'strtotime("2013.90") (originally `2013-04-01 10:25:22` pgydotd) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('2013.90'));
		},

		'strtotime("2013W14-1") (originally `2013-04-01 10:25:22` isoweekday) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013W14-1'));
		},

		'strtotime("Apr-01-2013") (originally `2013-04-01 10:25:22` pgtextshort) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr-01-2013'));
		},

		'strtotime("2013-Apr-01") (originally `2013-04-01 10:25:22` pgtextreverse) should give timestamp `1364774400`':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-Apr-01'));
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30") (originally `2013-04-01 10:25:22` clf) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime("0") (originally `2012-02-29 08:02:38` Y-m-d H:i:s Europe/Vaduz) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('0'));
		},

		'strtotime("1") (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('1'));
		},

		'strtotime("2012/12/31") (originally `2012-12-31 23:59:59` iso8601date4) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31'));
		},

		'strtotime("12/31") (originally `2012-12-31 23:59:59` american short) should give timestamp `1388448000`':  function () {
			Y.Assert.areSame(1388448000, strtotime('12/31'));
		},

		'strtotime("12/31/2012") (originally `2012-12-31 23:59:59` american) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('12/31/2012'));
		},

		'strtotime("12-12-31") (originally `2012-12-31 23:59:59` iso8601date2) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('12-12-31'));
		},

		'strtotime("2012-12") (originally `2012-12-31 23:59:59` gnudateshorter) should give timestamp `1354320000`':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012-12'));
		},

		'strtotime("2012-12-31") (originally `2012-12-31 23:59:59` gnudateshort) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31'));
		},

		'strtotime("31 December 2012") (originally `2012-12-31 23:59:59` date full) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('31 December 2012'));
		},

		'strtotime("31st Dec. 2012") (originally `2012-12-31 23:59:59` date full2) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('31st Dec. 2012'));
		},

		'strtotime("31.12.2012") (originally `2012-12-31 23:59:59` pointed date) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.2012'));
		},

		'strtotime("31-12-2012") (originally `2012-12-31 23:59:59` pointed date2) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('31-12-2012'));
		},

		'strtotime("31.12.12") (originally `2012-12-31 23:59:59` pointed date3) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.12'));
		},

		'strtotime("December 2012") (originally `2012-12-31 23:59:59` datenoday) should give timestamp `1354320000`':  function () {
			Y.Assert.areSame(1354320000, strtotime('December 2012'));
		},

		'strtotime("Dec 2012") (originally `2012-12-31 23:59:59` datenoday2) should give timestamp `1354320000`':  function () {
			Y.Assert.areSame(1354320000, strtotime('Dec 2012'));
		},

		'strtotime("2012 December") (originally `2012-12-31 23:59:59` datenodayrev) should give timestamp `1354320000`':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 December'));
		},

		'strtotime("2012 Dec") (originally `2012-12-31 23:59:59` datenodayrev2) should give timestamp `1354320000`':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 Dec'));
		},

		'strtotime("December 31 2012") (originally `2012-12-31 23:59:59` datetextual) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('December 31 2012'));
		},

		'strtotime("Dec 31st") (originally `2012-12-31 23:59:59` datetextual2) should give timestamp `1388448000`':  function () {
			Y.Assert.areSame(1388448000, strtotime('Dec 31st'));
		},

		'strtotime("31 December") (originally `2012-12-31 23:59:59` datenoyearrev) should give timestamp `1388448000`':  function () {
			Y.Assert.areSame(1388448000, strtotime('31 December'));
		},

		'strtotime("31st Dec") (originally `2012-12-31 23:59:59` datenoyearrev2) should give timestamp `1388448000`':  function () {
			Y.Assert.areSame(1388448000, strtotime('31st Dec'));
		},

		'strtotime("20121231") (originally `2012-12-31 23:59:59` datenocolon) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231'));
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00") (originally `2012-12-31 23:59:59` soap) should give timestamp `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30") (originally `2012-12-31 23:59:59` soap2) should give timestamp `1357007399`':  function () {
			Y.Assert.areSame(1357007399, strtotime('2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00") (originally `2012-12-31 23:59:59` soap3) should give timestamp `1356980399`':  function () {
			Y.Assert.areSame(1356980399, strtotime('2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime("20121231T23:59:59") (originally `2012-12-31 23:59:59` xmlrpc) should give timestamp `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('20121231T23:59:59'));
		},

		'strtotime("20121231	235959") (originally `2012-12-31 23:59:59` xmlrpcnocolon) should give timestamp `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('20121231	235959'));
		},

		'strtotime("2012-12-31T23:59:59") (originally `2012-12-31 23:59:59` wddf) should give timestamp `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012-12-31T23:59:59'));
		},

		'strtotime("2012:12:31 23:59:59") (originally `2012-12-31 23:59:59` exif) should give timestamp `1356998399`':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012:12:31 23:59:59'));
		},

		'strtotime("2012.365") (originally `2012-12-31 23:59:59` pgydotd) should give timestamp `1356825600`':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012.365'));
		},

		'strtotime("2012W01-1") (originally `2012-12-31 23:59:59` isoweekday) should give timestamp `1325462400`':  function () {
			Y.Assert.areSame(1325462400, strtotime('2012W01-1'));
		},

		'strtotime("Dec-31-2012") (originally `2012-12-31 23:59:59` pgtextshort) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('Dec-31-2012'));
		},

		'strtotime("2012-Dec-31") (originally `2012-12-31 23:59:59` pgtextreverse) should give timestamp `1356912000`':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-Dec-31'));
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30") (originally `2012-12-31 23:59:59` clf) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime("2013/01/01") (originally `2013-01-01 00:00:01` iso8601dateslash) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01'));
		},

		'strtotime("01/01") (originally `2013-01-01 00:00:01` american short) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01'));
		},

		'strtotime("01/01/2013") (originally `2013-01-01 00:00:01` american) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01/2013'));
		},

		'strtotime("2013/1/01") (originally `2013-01-01 00:00:01` dateslash) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/1/01'));
		},

		'strtotime("2013/01/1") (originally `2013-01-01 00:00:01` iso8601date4) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/1'));
		},

		'strtotime("13-01-01") (originally `2013-01-01 00:00:01` iso8601date2) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('13-01-01'));
		},

		'strtotime("2013-01") (originally `2013-01-01 00:00:01` gnudateshorter) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01'));
		},

		'strtotime("2013-01-01") (originally `2013-01-01 00:00:01` gnudateshort) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01'));
		},

		'strtotime("01 January 2013") (originally `2013-01-01 00:00:01` date full) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January 2013'));
		},

		'strtotime("01st Jan. 2013") (originally `2013-01-01 00:00:01` date full2) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan. 2013'));
		},

		'strtotime("1.01.2013") (originally `2013-01-01 00:00:01` pointed date) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('1.01.2013'));
		},

		'strtotime("01-1-2013") (originally `2013-01-01 00:00:01` pointed date2) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('01-1-2013'));
		},

		'strtotime("1.01.13") (originally `2013-01-01 00:00:01` pointed date3) should give timestamp `1357779673`':  function () {
			Y.Assert.areSame(1357779673, strtotime('1.01.13'));
		},

		'strtotime("January 2013") (originally `2013-01-01 00:00:01` datenoday) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 2013'));
		},

		'strtotime("Jan 2013") (originally `2013-01-01 00:00:01` datenoday2) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 2013'));
		},

		'strtotime("2013 January") (originally `2013-01-01 00:00:01` datenodayrev) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 January'));
		},

		'strtotime("2013 Jan") (originally `2013-01-01 00:00:01` datenodayrev2) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 Jan'));
		},

		'strtotime("January 01 2013") (originally `2013-01-01 00:00:01` datetextual) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 01 2013'));
		},

		'strtotime("Jan 01st") (originally `2013-01-01 00:00:01` datetextual2) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 01st'));
		},

		'strtotime("01 January") (originally `2013-01-01 00:00:01` datenoyearrev) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January'));
		},

		'strtotime("01st Jan") (originally `2013-01-01 00:00:01` datenoyearrev2) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan'));
		},

		'strtotime("20130101") (originally `2013-01-01 00:00:01` datenocolon) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101'));
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00") (originally `2013-01-01 00:00:00` soap) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30") (originally `2013-01-01 00:00:00` soap2) should give timestamp `1357007400`':  function () {
			Y.Assert.areSame(1357007400, strtotime('2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00") (originally `2013-01-01 00:00:00` soap3) should give timestamp `1356980400`':  function () {
			Y.Assert.areSame(1356980400, strtotime('2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime("20130101T00:00:00") (originally `2013-01-01 00:00:00` xmlrpc) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101T00:00:00'));
		},

		'strtotime("20130101	000000") (originally `2013-01-01 00:00:00` xmlrpcnocolon) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101	000000'));
		},

		'strtotime("2013-01-01T00:00:00") (originally `2013-01-01 00:00:00` wddf) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00'));
		},

		'strtotime("2013:01:01 00:00:00") (originally `2013-01-01 00:00:00` exif) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013:01:01 00:00:00'));
		},

		'strtotime("2013.0") (originally `2013-01-01 00:00:01` pgydotd) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('2013.0'));
		},

		'strtotime("2013W01-2") (originally `2013-01-01 00:00:01` isoweekday) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013W01-2'));
		},

		'strtotime("Jan-01-2013") (originally `2013-01-01 00:00:01` pgtextshort) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan-01-2013'));
		},

		'strtotime("2013-Jan-01") (originally `2013-01-01 00:00:01` pgtextreverse) should give timestamp `1356998400`':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-Jan-01'));
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30") (originally `2013-01-01 00:00:00` clf) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00") (originally `2013-01-01 00:00:01` soap) should give timestamp `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30") (originally `2013-01-01 00:00:01` soap2) should give timestamp `1357007401`':  function () {
			Y.Assert.areSame(1357007401, strtotime('2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00") (originally `2013-01-01 00:00:01` soap3) should give timestamp `1356980401`':  function () {
			Y.Assert.areSame(1356980401, strtotime('2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime("20130101T00:00:01") (originally `2013-01-01 00:00:01` xmlrpc) should give timestamp `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('20130101T00:00:01'));
		},

		'strtotime("20130101	000001") (originally `2013-01-01 00:00:01` xmlrpcnocolon) should give timestamp `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('20130101	000001'));
		},

		'strtotime("2013-01-01T00:00:01") (originally `2013-01-01 00:00:01` wddf) should give timestamp `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013-01-01T00:00:01'));
		},

		'strtotime("2013:01:01 00:00:01") (originally `2013-01-01 00:00:01` exif) should give timestamp `1356998401`':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013:01:01 00:00:01'));
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30") (originally `2013-01-01 00:00:01` clf) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime("2012/02/29") (originally `2012-02-29 08:02:38` iso8601date4) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29'));
		},

		'strtotime("02/29") (originally `2012-02-29 08:02:38` american short) should give timestamp `1362096000`':  function () {
			Y.Assert.areSame(1362096000, strtotime('02/29'));
		},

		'strtotime("02/29/2012") (originally `2012-02-29 08:02:38` american) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('02/29/2012'));
		},

		'strtotime("2012/2/29") (originally `2012-02-29 08:02:38` dateslash) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/2/29'));
		},

		'strtotime("12-02-29") (originally `2012-02-29 08:02:38` iso8601date2) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('12-02-29'));
		},

		'strtotime("2012-02") (originally `2012-02-29 08:02:38` gnudateshorter) should give timestamp `1328054400`':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012-02'));
		},

		'strtotime("2012-02-29") (originally `2012-02-29 08:02:38` gnudateshort) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29'));
		},

		'strtotime("29 February 2012") (originally `2012-02-29 08:02:38` date full) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('29 February 2012'));
		},

		'strtotime("29th Feb. 2012") (originally `2012-02-29 08:02:38` date full2) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('29th Feb. 2012'));
		},

		'strtotime("29.02.2012") (originally `2012-02-29 08:02:38` pointed date) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.2012'));
		},

		'strtotime("29-2-2012") (originally `2012-02-29 08:02:38` pointed date2) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('29-2-2012'));
		},

		'strtotime("29.02.12") (originally `2012-02-29 08:02:38` pointed date3) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.12'));
		},

		'strtotime("February 2012") (originally `2012-02-29 08:02:38` datenoday) should give timestamp `1328054400`':  function () {
			Y.Assert.areSame(1328054400, strtotime('February 2012'));
		},

		'strtotime("Feb 2012") (originally `2012-02-29 08:02:38` datenoday2) should give timestamp `1328054400`':  function () {
			Y.Assert.areSame(1328054400, strtotime('Feb 2012'));
		},

		'strtotime("2012 February") (originally `2012-02-29 08:02:38` datenodayrev) should give timestamp `1328054400`':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 February'));
		},

		'strtotime("2012 Feb") (originally `2012-02-29 08:02:38` datenodayrev2) should give timestamp `1328054400`':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 Feb'));
		},

		'strtotime("February 29 2012") (originally `2012-02-29 08:02:38` datetextual) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('February 29 2012'));
		},

		'strtotime("Feb 29th") (originally `2012-02-29 08:02:38` datetextual2) should give timestamp `1362096000`':  function () {
			Y.Assert.areSame(1362096000, strtotime('Feb 29th'));
		},

		'strtotime("29 February") (originally `2012-02-29 08:02:38` datenoyearrev) should give timestamp `1362096000`':  function () {
			Y.Assert.areSame(1362096000, strtotime('29 February'));
		},

		'strtotime("29th Feb") (originally `2012-02-29 08:02:38` datenoyearrev2) should give timestamp `1362096000`':  function () {
			Y.Assert.areSame(1362096000, strtotime('29th Feb'));
		},

		'strtotime("20120229") (originally `2012-02-29 08:02:38` datenocolon) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229'));
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00") (originally `2012-02-29 08:02:38` soap) should give timestamp `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30") (originally `2012-02-29 08:02:38` soap2) should give timestamp `1330511558`':  function () {
			Y.Assert.areSame(1330511558, strtotime('2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00") (originally `2012-02-29 08:02:38` soap3) should give timestamp `1330484558`':  function () {
			Y.Assert.areSame(1330484558, strtotime('2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime("20120229T08:02:38") (originally `2012-02-29 08:02:38` xmlrpc) should give timestamp `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('20120229T08:02:38'));
		},

		'strtotime("20120229	080238") (originally `2012-02-29 08:02:38` xmlrpcnocolon) should give timestamp `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('20120229	080238'));
		},

		'strtotime("2012-02-29T08:02:38") (originally `2012-02-29 08:02:38` wddf) should give timestamp `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012-02-29T08:02:38'));
		},

		'strtotime("2012:02:29 08:02:38") (originally `2012-02-29 08:02:38` exif) should give timestamp `1330502558`':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012:02:29 08:02:38'));
		},

		'strtotime("2012.59") (originally `2012-02-29 08:02:38` pgydotd) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('2012.59'));
		},

		'strtotime("2012W09-3") (originally `2012-02-29 08:02:38` isoweekday) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012W09-3'));
		},

		'strtotime("Feb-29-2012") (originally `2012-02-29 08:02:38` pgtextshort) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('Feb-29-2012'));
		},

		'strtotime("2012-Feb-29") (originally `2012-02-29 08:02:38` pgtextreverse) should give timestamp `1330473600`':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-Feb-29'));
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30") (originally `2012-02-29 08:02:38` clf) should give timestamp `false`':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30'));
		}
	}));

	suite.add(new Y.Test.Case({
	    name: "Y.DataType.Date.strtotime php generated tests: modify dates",


		'strtotime("yesterday", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('yesterday', 1364811922));
		},

		'strtotime("2013/04/01 yesterday")  (iso8601dateslash) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013/04/01 yesterday'), '');
		},

		'strtotime("now", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('now', 1364811922));
		},

		'strtotime("2013/04/01 now")  (iso8601dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 now'), '');
		},

		'strtotime("noon", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('noon', 1364811922));
		},

		'strtotime("2013/04/01 noon")  (iso8601dateslash) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013/04/01 noon'), '');
		},

		'strtotime("midnight", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('midnight', 1364811922));
		},

		'strtotime("2013/04/01 midnight")  (iso8601dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 midnight'), '');
		},

		'strtotime("today", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('today', 1364811922));
		},

		'strtotime("2013/04/01 today")  (iso8601dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 today'), '');
		},

		'strtotime("tomorrow", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('tomorrow', 1364811922));
		},

		'strtotime("2013/04/01 tomorrow")  (iso8601dateslash) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013/04/01 tomorrow'), '');
		},

		'strtotime("first day of", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('first day of', 1364811922));
		},

		'strtotime("2013/04/01 first day of")  (iso8601dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/01 first day of'), '');
		},

		'strtotime("last day of", 1364811922)  (originally `2013-04-01 10:25:22` Y/m/d H:i:s Australia/Lord_Howe)  should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('last day of', 1364811922));
		},

		'strtotime("2013/04/01 last day of")  (iso8601dateslash) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013/04/01 last day of'), '');
		},

		'strtotime(`first Tuesday of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1364811922'));
		},

		'strtotime(`first Tuesday of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013/04/01'));
		},

		'strtotime(`next Thursday of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1364811922'));
		},

		'strtotime(`next Thursday of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013/04/01'));
		},

		'strtotime(`second Fri of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1364811922'));
		},

		'strtotime(`second Fri of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013/04/01'));
		},

		'strtotime(`third Wednesday of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1364811922'));
		},

		'strtotime(`third Wednesday of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013/04/01'));
		},

		'strtotime(`last Sat of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1364811922'));
		},

		'strtotime(`last Sat of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013/04/01'));
		},

		'strtotime(`fourth Sunday of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1364811922'));
		},

		'strtotime(`fourth Sunday of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013/04/01'));
		},

		'strtotime(`fifth Monday of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1364811922'));
		},

		'strtotime(`fifth Monday of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013/04/01'));
		},

		'strtotime(`sixth Mon of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1364811922'));
		},

		'strtotime(`sixth Mon of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013/04/01'));
		},

		'strtotime(`seventh Tue of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1364811922'));
		},

		'strtotime(`seventh Tue of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013/04/01'));
		},

		'strtotime(`eighth Wed of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1364811922'));
		},

		'strtotime(`eighth Wed of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013/04/01'));
		},

		'strtotime(`ninth Thu of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1364811922'));
		},

		'strtotime(`ninth Thu of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013/04/01'));
		},

		'strtotime(`tenth Sat of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1364811922'));
		},

		'strtotime(`tenth Sat of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013/04/01'));
		},

		'strtotime(`eleventh Friday of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1364811922'));
		},

		'strtotime(`eleventh Friday of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013/04/01'));
		},

		'strtotime(`twelfth Saturday of 1364811922`) (2013-04-01 10:25:22  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1364811922'));
		},

		'strtotime(`twelfth Saturday of 2013/04/01`) (2013-04-01 10:25:22  iso8601dateslash) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013/04/01'));
		},

		'strtotime("04/01 yesterday")  (american short) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('04/01 yesterday'), '');
		},

		'strtotime("04/01 now")  (american short) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01 now'), '');
		},

		'strtotime("04/01 noon")  (american short) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('04/01 noon'), '');
		},

		'strtotime("04/01 midnight")  (american short) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01 midnight'), '');
		},

		'strtotime("04/01 today")  (american short) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01 today'), '');
		},

		'strtotime("04/01 tomorrow")  (american short) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('04/01 tomorrow'), '');
		},

		'strtotime("04/01 first day of")  (american short) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01 first day of'), '');
		},

		'strtotime("04/01 last day of")  (american short) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('04/01 last day of'), '');
		},

		'strtotime(`first Tuesday of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 04/01'));
		},

		'strtotime(`next Thursday of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 04/01'));
		},

		'strtotime(`second Fri of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 04/01'));
		},

		'strtotime(`third Wednesday of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 04/01'));
		},

		'strtotime(`last Sat of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 04/01'));
		},

		'strtotime(`fourth Sunday of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 04/01'));
		},

		'strtotime(`fifth Monday of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 04/01'));
		},

		'strtotime(`sixth Mon of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 04/01'));
		},

		'strtotime(`seventh Tue of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 04/01'));
		},

		'strtotime(`eighth Wed of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 04/01'));
		},

		'strtotime(`ninth Thu of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 04/01'));
		},

		'strtotime(`tenth Sat of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 04/01'));
		},

		'strtotime(`eleventh Friday of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 04/01'));
		},

		'strtotime(`twelfth Saturday of 04/01`) (2013-04-01 10:25:22  american short) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 04/01'));
		},

		'strtotime("04/01/2013 yesterday")  (american) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('04/01/2013 yesterday'), '');
		},

		'strtotime("04/01/2013 now")  (american) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01/2013 now'), '');
		},

		'strtotime("04/01/2013 noon")  (american) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('04/01/2013 noon'), '');
		},

		'strtotime("04/01/2013 midnight")  (american) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01/2013 midnight'), '');
		},

		'strtotime("04/01/2013 today")  (american) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01/2013 today'), '');
		},

		'strtotime("04/01/2013 tomorrow")  (american) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('04/01/2013 tomorrow'), '');
		},

		'strtotime("04/01/2013 first day of")  (american) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('04/01/2013 first day of'), '');
		},

		'strtotime("04/01/2013 last day of")  (american) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('04/01/2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 04/01/2013'));
		},

		'strtotime(`next Thursday of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 04/01/2013'));
		},

		'strtotime(`second Fri of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 04/01/2013'));
		},

		'strtotime(`third Wednesday of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 04/01/2013'));
		},

		'strtotime(`last Sat of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 04/01/2013'));
		},

		'strtotime(`fourth Sunday of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 04/01/2013'));
		},

		'strtotime(`fifth Monday of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 04/01/2013'));
		},

		'strtotime(`sixth Mon of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 04/01/2013'));
		},

		'strtotime(`seventh Tue of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 04/01/2013'));
		},

		'strtotime(`eighth Wed of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 04/01/2013'));
		},

		'strtotime(`ninth Thu of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 04/01/2013'));
		},

		'strtotime(`tenth Sat of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 04/01/2013'));
		},

		'strtotime(`eleventh Friday of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 04/01/2013'));
		},

		'strtotime(`twelfth Saturday of 04/01/2013`) (2013-04-01 10:25:22  american) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 04/01/2013'));
		},

		'strtotime("2013/4/01 yesterday")  (dateslash) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013/4/01 yesterday'), '');
		},

		'strtotime("2013/4/01 now")  (dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/4/01 now'), '');
		},

		'strtotime("2013/4/01 noon")  (dateslash) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013/4/01 noon'), '');
		},

		'strtotime("2013/4/01 midnight")  (dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/4/01 midnight'), '');
		},

		'strtotime("2013/4/01 today")  (dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/4/01 today'), '');
		},

		'strtotime("2013/4/01 tomorrow")  (dateslash) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013/4/01 tomorrow'), '');
		},

		'strtotime("2013/4/01 first day of")  (dateslash) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/4/01 first day of'), '');
		},

		'strtotime("2013/4/01 last day of")  (dateslash) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013/4/01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013/4/01'));
		},

		'strtotime(`next Thursday of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013/4/01'));
		},

		'strtotime(`second Fri of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013/4/01'));
		},

		'strtotime(`third Wednesday of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013/4/01'));
		},

		'strtotime(`last Sat of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013/4/01'));
		},

		'strtotime(`fourth Sunday of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013/4/01'));
		},

		'strtotime(`fifth Monday of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013/4/01'));
		},

		'strtotime(`sixth Mon of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013/4/01'));
		},

		'strtotime(`seventh Tue of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013/4/01'));
		},

		'strtotime(`eighth Wed of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013/4/01'));
		},

		'strtotime(`ninth Thu of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013/4/01'));
		},

		'strtotime(`tenth Sat of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013/4/01'));
		},

		'strtotime(`eleventh Friday of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013/4/01'));
		},

		'strtotime(`twelfth Saturday of 2013/4/01`) (2013-04-01 10:25:22  dateslash) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013/4/01'));
		},

		'strtotime("2013/04/1 yesterday")  (iso8601date4) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013/04/1 yesterday'), '');
		},

		'strtotime("2013/04/1 now")  (iso8601date4) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/1 now'), '');
		},

		'strtotime("2013/04/1 noon")  (iso8601date4) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013/04/1 noon'), '');
		},

		'strtotime("2013/04/1 midnight")  (iso8601date4) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/1 midnight'), '');
		},

		'strtotime("2013/04/1 today")  (iso8601date4) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/1 today'), '');
		},

		'strtotime("2013/04/1 tomorrow")  (iso8601date4) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013/04/1 tomorrow'), '');
		},

		'strtotime("2013/04/1 first day of")  (iso8601date4) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013/04/1 first day of'), '');
		},

		'strtotime("2013/04/1 last day of")  (iso8601date4) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013/04/1 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013/04/1'));
		},

		'strtotime(`next Thursday of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013/04/1'));
		},

		'strtotime(`second Fri of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013/04/1'));
		},

		'strtotime(`third Wednesday of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013/04/1'));
		},

		'strtotime(`last Sat of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013/04/1'));
		},

		'strtotime(`fourth Sunday of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013/04/1'));
		},

		'strtotime(`fifth Monday of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013/04/1'));
		},

		'strtotime(`sixth Mon of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013/04/1'));
		},

		'strtotime(`seventh Tue of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013/04/1'));
		},

		'strtotime(`eighth Wed of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013/04/1'));
		},

		'strtotime(`ninth Thu of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013/04/1'));
		},

		'strtotime(`tenth Sat of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013/04/1'));
		},

		'strtotime(`eleventh Friday of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013/04/1'));
		},

		'strtotime(`twelfth Saturday of 2013/04/1`) (2013-04-01 10:25:22  iso8601date4) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013/04/1'));
		},

		'strtotime("13-04-01 yesterday")  (iso8601date2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('13-04-01 yesterday'), '');
		},

		'strtotime("13-04-01 now")  (iso8601date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('13-04-01 now'), '');
		},

		'strtotime("13-04-01 noon")  (iso8601date2) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('13-04-01 noon'), '');
		},

		'strtotime("13-04-01 midnight")  (iso8601date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('13-04-01 midnight'), '');
		},

		'strtotime("13-04-01 today")  (iso8601date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('13-04-01 today'), '');
		},

		'strtotime("13-04-01 tomorrow")  (iso8601date2) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('13-04-01 tomorrow'), '');
		},

		'strtotime("13-04-01 first day of")  (iso8601date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('13-04-01 first day of'), '');
		},

		'strtotime("13-04-01 last day of")  (iso8601date2) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('13-04-01 last day of'), '');
		},

		'strtotime(`first Tuesday of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 13-04-01'));
		},

		'strtotime(`next Thursday of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 13-04-01'));
		},

		'strtotime(`second Fri of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 13-04-01'));
		},

		'strtotime(`third Wednesday of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 13-04-01'));
		},

		'strtotime(`last Sat of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 13-04-01'));
		},

		'strtotime(`fourth Sunday of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 13-04-01'));
		},

		'strtotime(`fifth Monday of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 13-04-01'));
		},

		'strtotime(`sixth Mon of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 13-04-01'));
		},

		'strtotime(`seventh Tue of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 13-04-01'));
		},

		'strtotime(`eighth Wed of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 13-04-01'));
		},

		'strtotime(`ninth Thu of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 13-04-01'));
		},

		'strtotime(`tenth Sat of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 13-04-01'));
		},

		'strtotime(`eleventh Friday of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 13-04-01'));
		},

		'strtotime(`twelfth Saturday of 13-04-01`) (2013-04-01 10:25:22  iso8601date2) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 13-04-01'));
		},

		'strtotime("2013-04 yesterday")  (gnudateshorter) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013-04 yesterday'), '');
		},

		'strtotime("2013-04 now")  (gnudateshorter) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04 now'), '');
		},

		'strtotime("2013-04 noon")  (gnudateshorter) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013-04 noon'), '');
		},

		'strtotime("2013-04 midnight")  (gnudateshorter) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04 midnight'), '');
		},

		'strtotime("2013-04 today")  (gnudateshorter) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04 today'), '');
		},

		'strtotime("2013-04 tomorrow")  (gnudateshorter) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013-04 tomorrow'), '');
		},

		'strtotime("2013-04 first day of")  (gnudateshorter) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04 first day of'), '');
		},

		'strtotime("2013-04 last day of")  (gnudateshorter) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013-04 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013-04'));
		},

		'strtotime(`next Thursday of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013-04'));
		},

		'strtotime(`second Fri of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013-04'));
		},

		'strtotime(`third Wednesday of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013-04'));
		},

		'strtotime(`last Sat of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013-04'));
		},

		'strtotime(`fourth Sunday of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013-04'));
		},

		'strtotime(`fifth Monday of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013-04'));
		},

		'strtotime(`sixth Mon of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013-04'));
		},

		'strtotime(`seventh Tue of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013-04'));
		},

		'strtotime(`eighth Wed of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013-04'));
		},

		'strtotime(`ninth Thu of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013-04'));
		},

		'strtotime(`tenth Sat of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013-04'));
		},

		'strtotime(`eleventh Friday of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013-04'));
		},

		'strtotime(`twelfth Saturday of 2013-04`) (2013-04-01 10:25:22  gnudateshorter) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013-04'));
		},

		'strtotime("2013-04-01 yesterday")  (gnudateshort) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013-04-01 yesterday'), '');
		},

		'strtotime("2013-04-01 now")  (gnudateshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01 now'), '');
		},

		'strtotime("2013-04-01 noon")  (gnudateshort) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013-04-01 noon'), '');
		},

		'strtotime("2013-04-01 midnight")  (gnudateshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01 midnight'), '');
		},

		'strtotime("2013-04-01 today")  (gnudateshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01 today'), '');
		},

		'strtotime("2013-04-01 tomorrow")  (gnudateshort) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013-04-01 tomorrow'), '');
		},

		'strtotime("2013-04-01 first day of")  (gnudateshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01 first day of'), '');
		},

		'strtotime("2013-04-01 last day of")  (gnudateshort) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013-04-01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013-04-01'));
		},

		'strtotime(`next Thursday of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013-04-01'));
		},

		'strtotime(`second Fri of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013-04-01'));
		},

		'strtotime(`third Wednesday of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013-04-01'));
		},

		'strtotime(`last Sat of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013-04-01'));
		},

		'strtotime(`fourth Sunday of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013-04-01'));
		},

		'strtotime(`fifth Monday of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013-04-01'));
		},

		'strtotime(`sixth Mon of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013-04-01'));
		},

		'strtotime(`seventh Tue of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013-04-01'));
		},

		'strtotime(`eighth Wed of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013-04-01'));
		},

		'strtotime(`ninth Thu of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013-04-01'));
		},

		'strtotime(`tenth Sat of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013-04-01'));
		},

		'strtotime(`eleventh Friday of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013-04-01'));
		},

		'strtotime(`twelfth Saturday of 2013-04-01`) (2013-04-01 10:25:22  gnudateshort) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013-04-01'));
		},

		'strtotime("01 April 2013 yesterday")  (date full) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('01 April 2013 yesterday'), '');
		},

		'strtotime("01 April 2013 now")  (date full) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April 2013 now'), '');
		},

		'strtotime("01 April 2013 noon")  (date full) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('01 April 2013 noon'), '');
		},

		'strtotime("01 April 2013 midnight")  (date full) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April 2013 midnight'), '');
		},

		'strtotime("01 April 2013 today")  (date full) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April 2013 today'), '');
		},

		'strtotime("01 April 2013 tomorrow")  (date full) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('01 April 2013 tomorrow'), '');
		},

		'strtotime("01 April 2013 first day of")  (date full) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April 2013 first day of'), '');
		},

		'strtotime("01 April 2013 last day of")  (date full) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('01 April 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 01 April 2013'));
		},

		'strtotime(`next Thursday of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 01 April 2013'));
		},

		'strtotime(`second Fri of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 01 April 2013'));
		},

		'strtotime(`third Wednesday of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 01 April 2013'));
		},

		'strtotime(`last Sat of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 01 April 2013'));
		},

		'strtotime(`fourth Sunday of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 01 April 2013'));
		},

		'strtotime(`fifth Monday of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 01 April 2013'));
		},

		'strtotime(`sixth Mon of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 01 April 2013'));
		},

		'strtotime(`seventh Tue of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 01 April 2013'));
		},

		'strtotime(`eighth Wed of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 01 April 2013'));
		},

		'strtotime(`ninth Thu of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 01 April 2013'));
		},

		'strtotime(`tenth Sat of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 01 April 2013'));
		},

		'strtotime(`eleventh Friday of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 01 April 2013'));
		},

		'strtotime(`twelfth Saturday of 01 April 2013`) (2013-04-01 10:25:22  date full) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 01 April 2013'));
		},

		'strtotime("01st Apr. 2013 yesterday")  (date full2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('01st Apr. 2013 yesterday'), '');
		},

		'strtotime("01st Apr. 2013 now")  (date full2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr. 2013 now'), '');
		},

		'strtotime("01st Apr. 2013 noon")  (date full2) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('01st Apr. 2013 noon'), '');
		},

		'strtotime("01st Apr. 2013 midnight")  (date full2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr. 2013 midnight'), '');
		},

		'strtotime("01st Apr. 2013 today")  (date full2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr. 2013 today'), '');
		},

		'strtotime("01st Apr. 2013 tomorrow")  (date full2) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('01st Apr. 2013 tomorrow'), '');
		},

		'strtotime("01st Apr. 2013 first day of")  (date full2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr. 2013 first day of'), '');
		},

		'strtotime("01st Apr. 2013 last day of")  (date full2) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('01st Apr. 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 01st Apr. 2013'));
		},

		'strtotime(`next Thursday of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 01st Apr. 2013'));
		},

		'strtotime(`second Fri of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 01st Apr. 2013'));
		},

		'strtotime(`third Wednesday of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 01st Apr. 2013'));
		},

		'strtotime(`last Sat of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 01st Apr. 2013'));
		},

		'strtotime(`fourth Sunday of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 01st Apr. 2013'));
		},

		'strtotime(`fifth Monday of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 01st Apr. 2013'));
		},

		'strtotime(`sixth Mon of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 01st Apr. 2013'));
		},

		'strtotime(`seventh Tue of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 01st Apr. 2013'));
		},

		'strtotime(`eighth Wed of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 01st Apr. 2013'));
		},

		'strtotime(`ninth Thu of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 01st Apr. 2013'));
		},

		'strtotime(`tenth Sat of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 01st Apr. 2013'));
		},

		'strtotime(`eleventh Friday of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 01st Apr. 2013'));
		},

		'strtotime(`twelfth Saturday of 01st Apr. 2013`) (2013-04-01 10:25:22  date full2) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 01st Apr. 2013'));
		},

		'strtotime("1.04.2013 yesterday")  (pointed date) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('1.04.2013 yesterday'), '');
		},

		'strtotime("1.04.2013 now")  (pointed date) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('1.04.2013 now'), '');
		},

		'strtotime("1.04.2013 noon")  (pointed date) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('1.04.2013 noon'), '');
		},

		'strtotime("1.04.2013 midnight")  (pointed date) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('1.04.2013 midnight'), '');
		},

		'strtotime("1.04.2013 today")  (pointed date) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('1.04.2013 today'), '');
		},

		'strtotime("1.04.2013 tomorrow")  (pointed date) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('1.04.2013 tomorrow'), '');
		},

		'strtotime("1.04.2013 first day of")  (pointed date) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('1.04.2013 first day of'), '');
		},

		'strtotime("1.04.2013 last day of")  (pointed date) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('1.04.2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 1.04.2013'));
		},

		'strtotime(`next Thursday of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 1.04.2013'));
		},

		'strtotime(`second Fri of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 1.04.2013'));
		},

		'strtotime(`third Wednesday of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 1.04.2013'));
		},

		'strtotime(`last Sat of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 1.04.2013'));
		},

		'strtotime(`fourth Sunday of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 1.04.2013'));
		},

		'strtotime(`fifth Monday of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 1.04.2013'));
		},

		'strtotime(`sixth Mon of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 1.04.2013'));
		},

		'strtotime(`seventh Tue of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 1.04.2013'));
		},

		'strtotime(`eighth Wed of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 1.04.2013'));
		},

		'strtotime(`ninth Thu of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 1.04.2013'));
		},

		'strtotime(`tenth Sat of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 1.04.2013'));
		},

		'strtotime(`eleventh Friday of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 1.04.2013'));
		},

		'strtotime(`twelfth Saturday of 1.04.2013`) (2013-04-01 10:25:22  pointed date) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 1.04.2013'));
		},

		'strtotime("01-4-2013 yesterday")  (pointed date2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('01-4-2013 yesterday'), '');
		},

		'strtotime("01-4-2013 now")  (pointed date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01-4-2013 now'), '');
		},

		'strtotime("01-4-2013 noon")  (pointed date2) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('01-4-2013 noon'), '');
		},

		'strtotime("01-4-2013 midnight")  (pointed date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01-4-2013 midnight'), '');
		},

		'strtotime("01-4-2013 today")  (pointed date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01-4-2013 today'), '');
		},

		'strtotime("01-4-2013 tomorrow")  (pointed date2) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('01-4-2013 tomorrow'), '');
		},

		'strtotime("01-4-2013 first day of")  (pointed date2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01-4-2013 first day of'), '');
		},

		'strtotime("01-4-2013 last day of")  (pointed date2) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('01-4-2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 01-4-2013'));
		},

		'strtotime(`next Thursday of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 01-4-2013'));
		},

		'strtotime(`second Fri of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 01-4-2013'));
		},

		'strtotime(`third Wednesday of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 01-4-2013'));
		},

		'strtotime(`last Sat of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 01-4-2013'));
		},

		'strtotime(`fourth Sunday of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 01-4-2013'));
		},

		'strtotime(`fifth Monday of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 01-4-2013'));
		},

		'strtotime(`sixth Mon of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 01-4-2013'));
		},

		'strtotime(`seventh Tue of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 01-4-2013'));
		},

		'strtotime(`eighth Wed of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 01-4-2013'));
		},

		'strtotime(`ninth Thu of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 01-4-2013'));
		},

		'strtotime(`tenth Sat of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 01-4-2013'));
		},

		'strtotime(`eleventh Friday of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 01-4-2013'));
		},

		'strtotime(`twelfth Saturday of 01-4-2013`) (2013-04-01 10:25:22  pointed date2) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 01-4-2013'));
		},

		'strtotime("1.04.13 yesterday")  (pointed date3) should give `1357689600` (ie 2013-01-09 00:00:00)':  function () {
			Y.Assert.areSame(1357689600, strtotime('1.04.13 yesterday'), '');
		},

		'strtotime("1.04.13 now")  (pointed date3) should give `1357779853` (ie 2013-01-10 01:04:13)':  function () {
			Y.Assert.areSame(1357779853, strtotime('1.04.13 now'), '');
		},

		'strtotime("1.04.13 noon")  (pointed date3) should give `1357819200` (ie 2013-01-10 12:00:00)':  function () {
			Y.Assert.areSame(1357819200, strtotime('1.04.13 noon'), '');
		},

		'strtotime("1.04.13 midnight")  (pointed date3) should give `1357776000` (ie 2013-01-10 00:00:00)':  function () {
			Y.Assert.areSame(1357776000, strtotime('1.04.13 midnight'), '');
		},

		'strtotime("1.04.13 today")  (pointed date3) should give `1357776000` (ie 2013-01-10 00:00:00)':  function () {
			Y.Assert.areSame(1357776000, strtotime('1.04.13 today'), '');
		},

		'strtotime("1.04.13 tomorrow")  (pointed date3) should give `1357862400` (ie 2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('1.04.13 tomorrow'), '');
		},

		'strtotime("1.04.13 first day of")  (pointed date3) should give `1357002253` (ie 2013-01-01 01:04:13)':  function () {
			Y.Assert.areSame(1357002253, strtotime('1.04.13 first day of'), '');
		},

		'strtotime("1.04.13 last day of")  (pointed date3) should give `1359594253` (ie 2013-01-31 01:04:13)':  function () {
			Y.Assert.areSame(1359594253, strtotime('1.04.13 last day of'), '');
		},

		'strtotime(`first Tuesday of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-01-01 01:04:13)':  function () {
			Y.Assert.areSame(1357002253, strtotime('first Tuesday of 1.04.13'));
		},

		'strtotime(`next Thursday of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-01-03 01:04:13)':  function () {
			Y.Assert.areSame(1357175053, strtotime('next Thursday of 1.04.13'));
		},

		'strtotime(`second Fri of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-01-11 01:04:13)':  function () {
			Y.Assert.areSame(1357866253, strtotime('second Fri of 1.04.13'));
		},

		'strtotime(`third Wednesday of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-01-16 01:04:13)':  function () {
			Y.Assert.areSame(1358298253, strtotime('third Wednesday of 1.04.13'));
		},

		'strtotime(`last Sat of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-01-26 01:04:13)':  function () {
			Y.Assert.areSame(1359162253, strtotime('last Sat of 1.04.13'));
		},

		'strtotime(`fourth Sunday of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-01-27 01:04:13)':  function () {
			Y.Assert.areSame(1359248653, strtotime('fourth Sunday of 1.04.13'));
		},

		'strtotime(`fifth Monday of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-02-04 01:04:13)':  function () {
			Y.Assert.areSame(1359939853, strtotime('fifth Monday of 1.04.13'));
		},

		'strtotime(`sixth Mon of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-02-11 01:04:13)':  function () {
			Y.Assert.areSame(1360544653, strtotime('sixth Mon of 1.04.13'));
		},

		'strtotime(`seventh Tue of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-02-12 01:04:13)':  function () {
			Y.Assert.areSame(1360631053, strtotime('seventh Tue of 1.04.13'));
		},

		'strtotime(`eighth Wed of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-02-20 01:04:13)':  function () {
			Y.Assert.areSame(1361322253, strtotime('eighth Wed of 1.04.13'));
		},

		'strtotime(`ninth Thu of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-02-28 01:04:13)':  function () {
			Y.Assert.areSame(1362013453, strtotime('ninth Thu of 1.04.13'));
		},

		'strtotime(`tenth Sat of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-03-09 01:04:13)':  function () {
			Y.Assert.areSame(1362791053, strtotime('tenth Sat of 1.04.13'));
		},

		'strtotime(`eleventh Friday of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-03-15 01:04:13)':  function () {
			Y.Assert.areSame(1363309453, strtotime('eleventh Friday of 1.04.13'));
		},

		'strtotime(`twelfth Saturday of 1.04.13`) (2013-04-01 10:25:22  pointed date3) should give ` (2013-03-23 01:04:13)':  function () {
			Y.Assert.areSame(1364000653, strtotime('twelfth Saturday of 1.04.13'));
		},

		'strtotime("April 2013 yesterday")  (datenoday) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('April 2013 yesterday'), '');
		},

		'strtotime("April 2013 now")  (datenoday) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 2013 now'), '');
		},

		'strtotime("April 2013 noon")  (datenoday) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('April 2013 noon'), '');
		},

		'strtotime("April 2013 midnight")  (datenoday) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 2013 midnight'), '');
		},

		'strtotime("April 2013 today")  (datenoday) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 2013 today'), '');
		},

		'strtotime("April 2013 tomorrow")  (datenoday) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('April 2013 tomorrow'), '');
		},

		'strtotime("April 2013 first day of")  (datenoday) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 2013 first day of'), '');
		},

		'strtotime("April 2013 last day of")  (datenoday) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('April 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of April 2013'));
		},

		'strtotime(`next Thursday of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of April 2013'));
		},

		'strtotime(`second Fri of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of April 2013'));
		},

		'strtotime(`third Wednesday of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of April 2013'));
		},

		'strtotime(`last Sat of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of April 2013'));
		},

		'strtotime(`fourth Sunday of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of April 2013'));
		},

		'strtotime(`fifth Monday of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of April 2013'));
		},

		'strtotime(`sixth Mon of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of April 2013'));
		},

		'strtotime(`seventh Tue of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of April 2013'));
		},

		'strtotime(`eighth Wed of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of April 2013'));
		},

		'strtotime(`ninth Thu of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of April 2013'));
		},

		'strtotime(`tenth Sat of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of April 2013'));
		},

		'strtotime(`eleventh Friday of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of April 2013'));
		},

		'strtotime(`twelfth Saturday of April 2013`) (2013-04-01 10:25:22  datenoday) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of April 2013'));
		},

		'strtotime("Apr 2013 yesterday")  (datenoday2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('Apr 2013 yesterday'), '');
		},

		'strtotime("Apr 2013 now")  (datenoday2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 2013 now'), '');
		},

		'strtotime("Apr 2013 noon")  (datenoday2) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('Apr 2013 noon'), '');
		},

		'strtotime("Apr 2013 midnight")  (datenoday2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 2013 midnight'), '');
		},

		'strtotime("Apr 2013 today")  (datenoday2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 2013 today'), '');
		},

		'strtotime("Apr 2013 tomorrow")  (datenoday2) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('Apr 2013 tomorrow'), '');
		},

		'strtotime("Apr 2013 first day of")  (datenoday2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 2013 first day of'), '');
		},

		'strtotime("Apr 2013 last day of")  (datenoday2) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('Apr 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of Apr 2013'));
		},

		'strtotime(`next Thursday of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of Apr 2013'));
		},

		'strtotime(`second Fri of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of Apr 2013'));
		},

		'strtotime(`third Wednesday of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of Apr 2013'));
		},

		'strtotime(`last Sat of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of Apr 2013'));
		},

		'strtotime(`fourth Sunday of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of Apr 2013'));
		},

		'strtotime(`fifth Monday of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of Apr 2013'));
		},

		'strtotime(`sixth Mon of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of Apr 2013'));
		},

		'strtotime(`seventh Tue of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of Apr 2013'));
		},

		'strtotime(`eighth Wed of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of Apr 2013'));
		},

		'strtotime(`ninth Thu of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of Apr 2013'));
		},

		'strtotime(`tenth Sat of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of Apr 2013'));
		},

		'strtotime(`eleventh Friday of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of Apr 2013'));
		},

		'strtotime(`twelfth Saturday of Apr 2013`) (2013-04-01 10:25:22  datenoday2) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of Apr 2013'));
		},

		'strtotime("2013 April yesterday")  (datenodayrev) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013 April yesterday'), '');
		},

		'strtotime("2013 April now")  (datenodayrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 April now'), '');
		},

		'strtotime("2013 April noon")  (datenodayrev) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013 April noon'), '');
		},

		'strtotime("2013 April midnight")  (datenodayrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 April midnight'), '');
		},

		'strtotime("2013 April today")  (datenodayrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 April today'), '');
		},

		'strtotime("2013 April tomorrow")  (datenodayrev) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013 April tomorrow'), '');
		},

		'strtotime("2013 April first day of")  (datenodayrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 April first day of'), '');
		},

		'strtotime("2013 April last day of")  (datenodayrev) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013 April last day of'), '');
		},

		'strtotime(`first Tuesday of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013 April'));
		},

		'strtotime(`next Thursday of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013 April'));
		},

		'strtotime(`second Fri of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013 April'));
		},

		'strtotime(`third Wednesday of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013 April'));
		},

		'strtotime(`last Sat of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013 April'));
		},

		'strtotime(`fourth Sunday of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013 April'));
		},

		'strtotime(`fifth Monday of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013 April'));
		},

		'strtotime(`sixth Mon of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013 April'));
		},

		'strtotime(`seventh Tue of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013 April'));
		},

		'strtotime(`eighth Wed of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013 April'));
		},

		'strtotime(`ninth Thu of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013 April'));
		},

		'strtotime(`tenth Sat of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013 April'));
		},

		'strtotime(`eleventh Friday of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013 April'));
		},

		'strtotime(`twelfth Saturday of 2013 April`) (2013-04-01 10:25:22  datenodayrev) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013 April'));
		},

		'strtotime("2013 Apr yesterday")  (datenodayrev2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013 Apr yesterday'), '');
		},

		'strtotime("2013 Apr now")  (datenodayrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 Apr now'), '');
		},

		'strtotime("2013 Apr noon")  (datenodayrev2) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013 Apr noon'), '');
		},

		'strtotime("2013 Apr midnight")  (datenodayrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 Apr midnight'), '');
		},

		'strtotime("2013 Apr today")  (datenodayrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 Apr today'), '');
		},

		'strtotime("2013 Apr tomorrow")  (datenodayrev2) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013 Apr tomorrow'), '');
		},

		'strtotime("2013 Apr first day of")  (datenodayrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013 Apr first day of'), '');
		},

		'strtotime("2013 Apr last day of")  (datenodayrev2) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013 Apr last day of'), '');
		},

		'strtotime(`first Tuesday of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013 Apr'));
		},

		'strtotime(`next Thursday of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013 Apr'));
		},

		'strtotime(`second Fri of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013 Apr'));
		},

		'strtotime(`third Wednesday of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013 Apr'));
		},

		'strtotime(`last Sat of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013 Apr'));
		},

		'strtotime(`fourth Sunday of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013 Apr'));
		},

		'strtotime(`fifth Monday of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013 Apr'));
		},

		'strtotime(`sixth Mon of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013 Apr'));
		},

		'strtotime(`seventh Tue of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013 Apr'));
		},

		'strtotime(`eighth Wed of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013 Apr'));
		},

		'strtotime(`ninth Thu of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013 Apr'));
		},

		'strtotime(`tenth Sat of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013 Apr'));
		},

		'strtotime(`eleventh Friday of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013 Apr'));
		},

		'strtotime(`twelfth Saturday of 2013 Apr`) (2013-04-01 10:25:22  datenodayrev2) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013 Apr'));
		},

		'strtotime("April 01 2013 yesterday")  (datetextual) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('April 01 2013 yesterday'), '');
		},

		'strtotime("April 01 2013 now")  (datetextual) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 01 2013 now'), '');
		},

		'strtotime("April 01 2013 noon")  (datetextual) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('April 01 2013 noon'), '');
		},

		'strtotime("April 01 2013 midnight")  (datetextual) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 01 2013 midnight'), '');
		},

		'strtotime("April 01 2013 today")  (datetextual) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 01 2013 today'), '');
		},

		'strtotime("April 01 2013 tomorrow")  (datetextual) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('April 01 2013 tomorrow'), '');
		},

		'strtotime("April 01 2013 first day of")  (datetextual) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('April 01 2013 first day of'), '');
		},

		'strtotime("April 01 2013 last day of")  (datetextual) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('April 01 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of April 01 2013'));
		},

		'strtotime(`next Thursday of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of April 01 2013'));
		},

		'strtotime(`second Fri of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of April 01 2013'));
		},

		'strtotime(`third Wednesday of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of April 01 2013'));
		},

		'strtotime(`last Sat of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of April 01 2013'));
		},

		'strtotime(`fourth Sunday of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of April 01 2013'));
		},

		'strtotime(`fifth Monday of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of April 01 2013'));
		},

		'strtotime(`sixth Mon of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of April 01 2013'));
		},

		'strtotime(`seventh Tue of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of April 01 2013'));
		},

		'strtotime(`eighth Wed of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of April 01 2013'));
		},

		'strtotime(`ninth Thu of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of April 01 2013'));
		},

		'strtotime(`tenth Sat of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of April 01 2013'));
		},

		'strtotime(`eleventh Friday of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of April 01 2013'));
		},

		'strtotime(`twelfth Saturday of April 01 2013`) (2013-04-01 10:25:22  datetextual) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of April 01 2013'));
		},

		'strtotime("Apr 01st yesterday")  (datetextual2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1364688000, strtotime('Apr 01st yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("Apr 01st now")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Apr 01st now'), 'This is a suspected php bug.');
		},

		'strtotime("Apr 01st noon")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Apr 01st noon'), 'This is a suspected php bug.');
		},

		'strtotime("Apr 01st midnight")  (datetextual2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 01st midnight'), '');
		},

		'strtotime("Apr 01st today")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Apr 01st today'), 'This is a suspected php bug.');
		},

		'strtotime("Apr 01st tomorrow")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Apr 01st tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("Apr 01st first day of")  (datetextual2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr 01st first day of'), '');
		},

		'strtotime("Apr 01st last day of")  (datetextual2) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('Apr 01st last day of'), '');
		},

		'strtotime(`first Tuesday of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of Apr 01st'));
		},

		'strtotime(`next Thursday of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of Apr 01st'));
		},

		'strtotime(`second Fri of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of Apr 01st'));
		},

		'strtotime(`third Wednesday of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of Apr 01st'));
		},

		'strtotime(`last Sat of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of Apr 01st'));
		},

		'strtotime(`fourth Sunday of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of Apr 01st'));
		},

		'strtotime(`fifth Monday of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of Apr 01st'));
		},

		'strtotime(`sixth Mon of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of Apr 01st'));
		},

		'strtotime(`seventh Tue of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of Apr 01st'));
		},

		'strtotime(`eighth Wed of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of Apr 01st'));
		},

		'strtotime(`ninth Thu of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of Apr 01st'));
		},

		'strtotime(`tenth Sat of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of Apr 01st'));
		},

		'strtotime(`eleventh Friday of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of Apr 01st'));
		},

		'strtotime(`twelfth Saturday of Apr 01st`) (2013-04-01 10:25:22  datetextual2) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of Apr 01st'));
		},

		'strtotime("01 April yesterday")  (datenoyearrev) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('01 April yesterday'), '');
		},

		'strtotime("01 April now")  (datenoyearrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April now'), '');
		},

		'strtotime("01 April noon")  (datenoyearrev) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('01 April noon'), '');
		},

		'strtotime("01 April midnight")  (datenoyearrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April midnight'), '');
		},

		'strtotime("01 April today")  (datenoyearrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April today'), '');
		},

		'strtotime("01 April tomorrow")  (datenoyearrev) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('01 April tomorrow'), '');
		},

		'strtotime("01 April first day of")  (datenoyearrev) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01 April first day of'), '');
		},

		'strtotime("01 April last day of")  (datenoyearrev) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('01 April last day of'), '');
		},

		'strtotime(`first Tuesday of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 01 April'));
		},

		'strtotime(`next Thursday of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 01 April'));
		},

		'strtotime(`second Fri of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 01 April'));
		},

		'strtotime(`third Wednesday of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 01 April'));
		},

		'strtotime(`last Sat of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 01 April'));
		},

		'strtotime(`fourth Sunday of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 01 April'));
		},

		'strtotime(`fifth Monday of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 01 April'));
		},

		'strtotime(`sixth Mon of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 01 April'));
		},

		'strtotime(`seventh Tue of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 01 April'));
		},

		'strtotime(`eighth Wed of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 01 April'));
		},

		'strtotime(`ninth Thu of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 01 April'));
		},

		'strtotime(`tenth Sat of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 01 April'));
		},

		'strtotime(`eleventh Friday of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 01 April'));
		},

		'strtotime(`twelfth Saturday of 01 April`) (2013-04-01 10:25:22  datenoyearrev) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 01 April'));
		},

		'strtotime("01st Apr yesterday")  (datenoyearrev2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('01st Apr yesterday'), '');
		},

		'strtotime("01st Apr now")  (datenoyearrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr now'), '');
		},

		'strtotime("01st Apr noon")  (datenoyearrev2) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('01st Apr noon'), '');
		},

		'strtotime("01st Apr midnight")  (datenoyearrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr midnight'), '');
		},

		'strtotime("01st Apr today")  (datenoyearrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr today'), '');
		},

		'strtotime("01st Apr tomorrow")  (datenoyearrev2) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('01st Apr tomorrow'), '');
		},

		'strtotime("01st Apr first day of")  (datenoyearrev2) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('01st Apr first day of'), '');
		},

		'strtotime("01st Apr last day of")  (datenoyearrev2) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('01st Apr last day of'), '');
		},

		'strtotime(`first Tuesday of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 01st Apr'));
		},

		'strtotime(`next Thursday of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 01st Apr'));
		},

		'strtotime(`second Fri of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 01st Apr'));
		},

		'strtotime(`third Wednesday of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 01st Apr'));
		},

		'strtotime(`last Sat of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 01st Apr'));
		},

		'strtotime(`fourth Sunday of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 01st Apr'));
		},

		'strtotime(`fifth Monday of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 01st Apr'));
		},

		'strtotime(`sixth Mon of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 01st Apr'));
		},

		'strtotime(`seventh Tue of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 01st Apr'));
		},

		'strtotime(`eighth Wed of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 01st Apr'));
		},

		'strtotime(`ninth Thu of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 01st Apr'));
		},

		'strtotime(`tenth Sat of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 01st Apr'));
		},

		'strtotime(`eleventh Friday of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 01st Apr'));
		},

		'strtotime(`twelfth Saturday of 01st Apr`) (2013-04-01 10:25:22  datenoyearrev2) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 01st Apr'));
		},

		'strtotime("20130401 yesterday")  (datenocolon) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('20130401 yesterday'), '');
		},

		'strtotime("20130401 now")  (datenocolon) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401 now'), '');
		},

		'strtotime("20130401 noon")  (datenocolon) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('20130401 noon'), '');
		},

		'strtotime("20130401 midnight")  (datenocolon) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401 midnight'), '');
		},

		'strtotime("20130401 today")  (datenocolon) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401 today'), '');
		},

		'strtotime("20130401 tomorrow")  (datenocolon) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('20130401 tomorrow'), '');
		},

		'strtotime("20130401 first day of")  (datenocolon) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401 first day of'), '');
		},

		'strtotime("20130401 last day of")  (datenocolon) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('20130401 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 20130401'));
		},

		'strtotime(`next Thursday of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 20130401'));
		},

		'strtotime(`second Fri of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 20130401'));
		},

		'strtotime(`third Wednesday of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 20130401'));
		},

		'strtotime(`last Sat of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 20130401'));
		},

		'strtotime(`fourth Sunday of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 20130401'));
		},

		'strtotime(`fifth Monday of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 20130401'));
		},

		'strtotime(`sixth Mon of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 20130401'));
		},

		'strtotime(`seventh Tue of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 20130401'));
		},

		'strtotime(`eighth Wed of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 20130401'));
		},

		'strtotime(`ninth Thu of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 20130401'));
		},

		'strtotime(`tenth Sat of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 20130401'));
		},

		'strtotime(`eleventh Friday of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 20130401'));
		},

		'strtotime(`twelfth Saturday of 20130401`) (2013-04-01 10:25:22  datenocolon) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 20130401'));
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 yesterday")  (soap) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013-04-01T10:25:22.000000GMT+00:00 yesterday'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 now")  (soap) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013-04-01T10:25:22.000000GMT+00:00 now'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 noon")  (soap) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013-04-01T10:25:22.000000GMT+00:00 noon'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 midnight")  (soap) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01T10:25:22.000000GMT+00:00 midnight'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 today")  (soap) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01T10:25:22.000000GMT+00:00 today'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 tomorrow")  (soap) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013-04-01T10:25:22.000000GMT+00:00 tomorrow'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 first day of")  (soap) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013-04-01T10:25:22.000000GMT+00:00 first day of'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+00:00 last day of")  (soap) should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('2013-04-01T10:25:22.000000GMT+00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-04-02 10:25:22)':  function () {
			Y.Assert.areSame(1364898322, strtotime('first Tuesday of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`next Thursday of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-04-04 10:25:22)':  function () {
			Y.Assert.areSame(1365071122, strtotime('next Thursday of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`second Fri of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-04-12 10:25:22)':  function () {
			Y.Assert.areSame(1365762322, strtotime('second Fri of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`third Wednesday of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-04-17 10:25:22)':  function () {
			Y.Assert.areSame(1366194322, strtotime('third Wednesday of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`last Sat of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-04-27 10:25:22)':  function () {
			Y.Assert.areSame(1367058322, strtotime('last Sat of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`fourth Sunday of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-04-28 10:25:22)':  function () {
			Y.Assert.areSame(1367144722, strtotime('fourth Sunday of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`fifth Monday of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-04-29 10:25:22)':  function () {
			Y.Assert.areSame(1367231122, strtotime('fifth Monday of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`sixth Mon of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-05-06 10:25:22)':  function () {
			Y.Assert.areSame(1367835922, strtotime('sixth Mon of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`seventh Tue of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-05-14 10:25:22)':  function () {
			Y.Assert.areSame(1368527122, strtotime('seventh Tue of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`eighth Wed of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-05-22 10:25:22)':  function () {
			Y.Assert.areSame(1369218322, strtotime('eighth Wed of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`ninth Thu of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-05-30 10:25:22)':  function () {
			Y.Assert.areSame(1369909522, strtotime('ninth Thu of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`tenth Sat of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-06-08 10:25:22)':  function () {
			Y.Assert.areSame(1370687122, strtotime('tenth Sat of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`eleventh Friday of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-06-14 10:25:22)':  function () {
			Y.Assert.areSame(1371205522, strtotime('eleventh Friday of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime(`twelfth Saturday of 2013-04-01T10:25:22.000000GMT+00:00`) (2013-04-01 10:25:22  soap) should give ` (2013-06-22 10:25:22)':  function () {
			Y.Assert.areSame(1371896722, strtotime('twelfth Saturday of 2013-04-01T10:25:22.000000GMT+00:00'));
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 yesterday")  (soap2) should give `1364697000` (ie 2013-03-31 02:30:00)':  function () {
			Y.Assert.areSame(1364697000, strtotime('2013-04-01T10:25:22.000000GMT-2:30 yesterday'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 now")  (soap2) should give `1364820922` (ie 2013-04-01 12:55:22)':  function () {
			Y.Assert.areSame(1364820922, strtotime('2013-04-01T10:25:22.000000GMT-2:30 now'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 noon")  (soap2) should give `1364826600` (ie 2013-04-01 14:30:00)':  function () {
			Y.Assert.areSame(1364826600, strtotime('2013-04-01T10:25:22.000000GMT-2:30 noon'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 midnight")  (soap2) should give `1364783400` (ie 2013-04-01 02:30:00)':  function () {
			Y.Assert.areSame(1364783400, strtotime('2013-04-01T10:25:22.000000GMT-2:30 midnight'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 today")  (soap2) should give `1364783400` (ie 2013-04-01 02:30:00)':  function () {
			Y.Assert.areSame(1364783400, strtotime('2013-04-01T10:25:22.000000GMT-2:30 today'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 tomorrow")  (soap2) should give `1364869800` (ie 2013-04-02 02:30:00)':  function () {
			Y.Assert.areSame(1364869800, strtotime('2013-04-01T10:25:22.000000GMT-2:30 tomorrow'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 first day of")  (soap2) should give `1364820922` (ie 2013-04-01 12:55:22)':  function () {
			Y.Assert.areSame(1364820922, strtotime('2013-04-01T10:25:22.000000GMT-2:30 first day of'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT-2:30 last day of")  (soap2) should give `1367326522` (ie 2013-04-30 12:55:22)':  function () {
			Y.Assert.areSame(1367326522, strtotime('2013-04-01T10:25:22.000000GMT-2:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-04-02 12:55:22)':  function () {
			Y.Assert.areSame(1364907322, strtotime('first Tuesday of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`next Thursday of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-04-04 12:55:22)':  function () {
			Y.Assert.areSame(1365080122, strtotime('next Thursday of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`second Fri of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-04-12 12:55:22)':  function () {
			Y.Assert.areSame(1365771322, strtotime('second Fri of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`third Wednesday of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-04-17 12:55:22)':  function () {
			Y.Assert.areSame(1366203322, strtotime('third Wednesday of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`last Sat of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-04-27 12:55:22)':  function () {
			Y.Assert.areSame(1367067322, strtotime('last Sat of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`fourth Sunday of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-04-28 12:55:22)':  function () {
			Y.Assert.areSame(1367153722, strtotime('fourth Sunday of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`fifth Monday of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-04-29 12:55:22)':  function () {
			Y.Assert.areSame(1367240122, strtotime('fifth Monday of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`sixth Mon of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-05-06 12:55:22)':  function () {
			Y.Assert.areSame(1367844922, strtotime('sixth Mon of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`seventh Tue of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-05-14 12:55:22)':  function () {
			Y.Assert.areSame(1368536122, strtotime('seventh Tue of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`eighth Wed of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-05-22 12:55:22)':  function () {
			Y.Assert.areSame(1369227322, strtotime('eighth Wed of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`ninth Thu of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-05-30 12:55:22)':  function () {
			Y.Assert.areSame(1369918522, strtotime('ninth Thu of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`tenth Sat of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-06-08 12:55:22)':  function () {
			Y.Assert.areSame(1370696122, strtotime('tenth Sat of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`eleventh Friday of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-06-14 12:55:22)':  function () {
			Y.Assert.areSame(1371214522, strtotime('eleventh Friday of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime(`twelfth Saturday of 2013-04-01T10:25:22.000000GMT-2:30`) (2013-04-01 10:25:22  soap2) should give ` (2013-06-22 12:55:22)':  function () {
			Y.Assert.areSame(1371905722, strtotime('twelfth Saturday of 2013-04-01T10:25:22.000000GMT-2:30'));
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 yesterday")  (soap3) should give `1364670000` (ie 2013-03-30 19:00:00)':  function () {
			Y.Assert.areSame(1364670000, strtotime('2013-04-01T10:25:22.000000GMT+5:00 yesterday'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 now")  (soap3) should give `1364793922` (ie 2013-04-01 05:25:22)':  function () {
			Y.Assert.areSame(1364793922, strtotime('2013-04-01T10:25:22.000000GMT+5:00 now'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 noon")  (soap3) should give `1364799600` (ie 2013-04-01 07:00:00)':  function () {
			Y.Assert.areSame(1364799600, strtotime('2013-04-01T10:25:22.000000GMT+5:00 noon'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 midnight")  (soap3) should give `1364756400` (ie 2013-03-31 19:00:00)':  function () {
			Y.Assert.areSame(1364756400, strtotime('2013-04-01T10:25:22.000000GMT+5:00 midnight'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 today")  (soap3) should give `1364756400` (ie 2013-03-31 19:00:00)':  function () {
			Y.Assert.areSame(1364756400, strtotime('2013-04-01T10:25:22.000000GMT+5:00 today'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 tomorrow")  (soap3) should give `1364842800` (ie 2013-04-01 19:00:00)':  function () {
			Y.Assert.areSame(1364842800, strtotime('2013-04-01T10:25:22.000000GMT+5:00 tomorrow'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 first day of")  (soap3) should give `1364793922` (ie 2013-04-01 05:25:22)':  function () {
			Y.Assert.areSame(1364793922, strtotime('2013-04-01T10:25:22.000000GMT+5:00 first day of'), '');
		},

		'strtotime("2013-04-01T10:25:22.000000GMT+5:00 last day of")  (soap3) should give `1367299522` (ie 2013-04-30 05:25:22)':  function () {
			Y.Assert.areSame(1367299522, strtotime('2013-04-01T10:25:22.000000GMT+5:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-04-02 05:25:22)':  function () {
			Y.Assert.areSame(1364880322, strtotime('first Tuesday of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`next Thursday of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-04-04 05:25:22)':  function () {
			Y.Assert.areSame(1365053122, strtotime('next Thursday of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`second Fri of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-04-12 05:25:22)':  function () {
			Y.Assert.areSame(1365744322, strtotime('second Fri of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`third Wednesday of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-04-17 05:25:22)':  function () {
			Y.Assert.areSame(1366176322, strtotime('third Wednesday of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`last Sat of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-04-27 05:25:22)':  function () {
			Y.Assert.areSame(1367040322, strtotime('last Sat of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`fourth Sunday of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-04-28 05:25:22)':  function () {
			Y.Assert.areSame(1367126722, strtotime('fourth Sunday of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`fifth Monday of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-04-29 05:25:22)':  function () {
			Y.Assert.areSame(1367213122, strtotime('fifth Monday of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`sixth Mon of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-05-06 05:25:22)':  function () {
			Y.Assert.areSame(1367817922, strtotime('sixth Mon of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`seventh Tue of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-05-14 05:25:22)':  function () {
			Y.Assert.areSame(1368509122, strtotime('seventh Tue of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`eighth Wed of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-05-22 05:25:22)':  function () {
			Y.Assert.areSame(1369200322, strtotime('eighth Wed of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`ninth Thu of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-05-30 05:25:22)':  function () {
			Y.Assert.areSame(1369891522, strtotime('ninth Thu of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`tenth Sat of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-06-08 05:25:22)':  function () {
			Y.Assert.areSame(1370669122, strtotime('tenth Sat of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`eleventh Friday of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-06-14 05:25:22)':  function () {
			Y.Assert.areSame(1371187522, strtotime('eleventh Friday of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime(`twelfth Saturday of 2013-04-01T10:25:22.000000GMT+5:00`) (2013-04-01 10:25:22  soap3) should give ` (2013-06-22 05:25:22)':  function () {
			Y.Assert.areSame(1371878722, strtotime('twelfth Saturday of 2013-04-01T10:25:22.000000GMT+5:00'));
		},

		'strtotime("20130401T10:25:22 yesterday")  (xmlrpc) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('20130401T10:25:22 yesterday'), '');
		},

		'strtotime("20130401T10:25:22 now")  (xmlrpc) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('20130401T10:25:22 now'), '');
		},

		'strtotime("20130401T10:25:22 noon")  (xmlrpc) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('20130401T10:25:22 noon'), '');
		},

		'strtotime("20130401T10:25:22 midnight")  (xmlrpc) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401T10:25:22 midnight'), '');
		},

		'strtotime("20130401T10:25:22 today")  (xmlrpc) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401T10:25:22 today'), '');
		},

		'strtotime("20130401T10:25:22 tomorrow")  (xmlrpc) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('20130401T10:25:22 tomorrow'), '');
		},

		'strtotime("20130401T10:25:22 first day of")  (xmlrpc) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('20130401T10:25:22 first day of'), '');
		},

		'strtotime("20130401T10:25:22 last day of")  (xmlrpc) should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('20130401T10:25:22 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-04-02 10:25:22)':  function () {
			Y.Assert.areSame(1364898322, strtotime('first Tuesday of 20130401T10:25:22'));
		},

		'strtotime(`next Thursday of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-04-04 10:25:22)':  function () {
			Y.Assert.areSame(1365071122, strtotime('next Thursday of 20130401T10:25:22'));
		},

		'strtotime(`second Fri of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-04-12 10:25:22)':  function () {
			Y.Assert.areSame(1365762322, strtotime('second Fri of 20130401T10:25:22'));
		},

		'strtotime(`third Wednesday of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-04-17 10:25:22)':  function () {
			Y.Assert.areSame(1366194322, strtotime('third Wednesday of 20130401T10:25:22'));
		},

		'strtotime(`last Sat of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-04-27 10:25:22)':  function () {
			Y.Assert.areSame(1367058322, strtotime('last Sat of 20130401T10:25:22'));
		},

		'strtotime(`fourth Sunday of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-04-28 10:25:22)':  function () {
			Y.Assert.areSame(1367144722, strtotime('fourth Sunday of 20130401T10:25:22'));
		},

		'strtotime(`fifth Monday of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-04-29 10:25:22)':  function () {
			Y.Assert.areSame(1367231122, strtotime('fifth Monday of 20130401T10:25:22'));
		},

		'strtotime(`sixth Mon of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-05-06 10:25:22)':  function () {
			Y.Assert.areSame(1367835922, strtotime('sixth Mon of 20130401T10:25:22'));
		},

		'strtotime(`seventh Tue of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-05-14 10:25:22)':  function () {
			Y.Assert.areSame(1368527122, strtotime('seventh Tue of 20130401T10:25:22'));
		},

		'strtotime(`eighth Wed of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-05-22 10:25:22)':  function () {
			Y.Assert.areSame(1369218322, strtotime('eighth Wed of 20130401T10:25:22'));
		},

		'strtotime(`ninth Thu of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-05-30 10:25:22)':  function () {
			Y.Assert.areSame(1369909522, strtotime('ninth Thu of 20130401T10:25:22'));
		},

		'strtotime(`tenth Sat of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-06-08 10:25:22)':  function () {
			Y.Assert.areSame(1370687122, strtotime('tenth Sat of 20130401T10:25:22'));
		},

		'strtotime(`eleventh Friday of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-06-14 10:25:22)':  function () {
			Y.Assert.areSame(1371205522, strtotime('eleventh Friday of 20130401T10:25:22'));
		},

		'strtotime(`twelfth Saturday of 20130401T10:25:22`) (2013-04-01 10:25:22  xmlrpc) should give ` (2013-06-22 10:25:22)':  function () {
			Y.Assert.areSame(1371896722, strtotime('twelfth Saturday of 20130401T10:25:22'));
		},

		'strtotime("20130401	102522 yesterday")  (xmlrpcnocolon) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('20130401	102522 yesterday'), '');
		},

		'strtotime("20130401	102522 now")  (xmlrpcnocolon) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('20130401	102522 now'), '');
		},

		'strtotime("20130401	102522 noon")  (xmlrpcnocolon) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('20130401	102522 noon'), '');
		},

		'strtotime("20130401	102522 midnight")  (xmlrpcnocolon) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401	102522 midnight'), '');
		},

		'strtotime("20130401	102522 today")  (xmlrpcnocolon) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('20130401	102522 today'), '');
		},

		'strtotime("20130401	102522 tomorrow")  (xmlrpcnocolon) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('20130401	102522 tomorrow'), '');
		},

		'strtotime("20130401	102522 first day of")  (xmlrpcnocolon) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('20130401	102522 first day of'), '');
		},

		'strtotime("20130401	102522 last day of")  (xmlrpcnocolon) should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('20130401	102522 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-04-02 10:25:22)':  function () {
			Y.Assert.areSame(1364898322, strtotime('first Tuesday of 20130401	102522'));
		},

		'strtotime(`next Thursday of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-04-04 10:25:22)':  function () {
			Y.Assert.areSame(1365071122, strtotime('next Thursday of 20130401	102522'));
		},

		'strtotime(`second Fri of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-04-12 10:25:22)':  function () {
			Y.Assert.areSame(1365762322, strtotime('second Fri of 20130401	102522'));
		},

		'strtotime(`third Wednesday of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-04-17 10:25:22)':  function () {
			Y.Assert.areSame(1366194322, strtotime('third Wednesday of 20130401	102522'));
		},

		'strtotime(`last Sat of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-04-27 10:25:22)':  function () {
			Y.Assert.areSame(1367058322, strtotime('last Sat of 20130401	102522'));
		},

		'strtotime(`fourth Sunday of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-04-28 10:25:22)':  function () {
			Y.Assert.areSame(1367144722, strtotime('fourth Sunday of 20130401	102522'));
		},

		'strtotime(`fifth Monday of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-04-29 10:25:22)':  function () {
			Y.Assert.areSame(1367231122, strtotime('fifth Monday of 20130401	102522'));
		},

		'strtotime(`sixth Mon of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-05-06 10:25:22)':  function () {
			Y.Assert.areSame(1367835922, strtotime('sixth Mon of 20130401	102522'));
		},

		'strtotime(`seventh Tue of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-05-14 10:25:22)':  function () {
			Y.Assert.areSame(1368527122, strtotime('seventh Tue of 20130401	102522'));
		},

		'strtotime(`eighth Wed of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-05-22 10:25:22)':  function () {
			Y.Assert.areSame(1369218322, strtotime('eighth Wed of 20130401	102522'));
		},

		'strtotime(`ninth Thu of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-05-30 10:25:22)':  function () {
			Y.Assert.areSame(1369909522, strtotime('ninth Thu of 20130401	102522'));
		},

		'strtotime(`tenth Sat of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-06-08 10:25:22)':  function () {
			Y.Assert.areSame(1370687122, strtotime('tenth Sat of 20130401	102522'));
		},

		'strtotime(`eleventh Friday of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-06-14 10:25:22)':  function () {
			Y.Assert.areSame(1371205522, strtotime('eleventh Friday of 20130401	102522'));
		},

		'strtotime(`twelfth Saturday of 20130401	102522`) (2013-04-01 10:25:22  xmlrpcnocolon) should give ` (2013-06-22 10:25:22)':  function () {
			Y.Assert.areSame(1371896722, strtotime('twelfth Saturday of 20130401	102522'));
		},

		'strtotime("2013-04-01T10:25:22 yesterday")  (wddf) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013-04-01T10:25:22 yesterday'), '');
		},

		'strtotime("2013-04-01T10:25:22 now")  (wddf) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013-04-01T10:25:22 now'), '');
		},

		'strtotime("2013-04-01T10:25:22 noon")  (wddf) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013-04-01T10:25:22 noon'), '');
		},

		'strtotime("2013-04-01T10:25:22 midnight")  (wddf) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01T10:25:22 midnight'), '');
		},

		'strtotime("2013-04-01T10:25:22 today")  (wddf) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-04-01T10:25:22 today'), '');
		},

		'strtotime("2013-04-01T10:25:22 tomorrow")  (wddf) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013-04-01T10:25:22 tomorrow'), '');
		},

		'strtotime("2013-04-01T10:25:22 first day of")  (wddf) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013-04-01T10:25:22 first day of'), '');
		},

		'strtotime("2013-04-01T10:25:22 last day of")  (wddf) should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('2013-04-01T10:25:22 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-04-02 10:25:22)':  function () {
			Y.Assert.areSame(1364898322, strtotime('first Tuesday of 2013-04-01T10:25:22'));
		},

		'strtotime(`next Thursday of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-04-04 10:25:22)':  function () {
			Y.Assert.areSame(1365071122, strtotime('next Thursday of 2013-04-01T10:25:22'));
		},

		'strtotime(`second Fri of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-04-12 10:25:22)':  function () {
			Y.Assert.areSame(1365762322, strtotime('second Fri of 2013-04-01T10:25:22'));
		},

		'strtotime(`third Wednesday of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-04-17 10:25:22)':  function () {
			Y.Assert.areSame(1366194322, strtotime('third Wednesday of 2013-04-01T10:25:22'));
		},

		'strtotime(`last Sat of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-04-27 10:25:22)':  function () {
			Y.Assert.areSame(1367058322, strtotime('last Sat of 2013-04-01T10:25:22'));
		},

		'strtotime(`fourth Sunday of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-04-28 10:25:22)':  function () {
			Y.Assert.areSame(1367144722, strtotime('fourth Sunday of 2013-04-01T10:25:22'));
		},

		'strtotime(`fifth Monday of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-04-29 10:25:22)':  function () {
			Y.Assert.areSame(1367231122, strtotime('fifth Monday of 2013-04-01T10:25:22'));
		},

		'strtotime(`sixth Mon of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-05-06 10:25:22)':  function () {
			Y.Assert.areSame(1367835922, strtotime('sixth Mon of 2013-04-01T10:25:22'));
		},

		'strtotime(`seventh Tue of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-05-14 10:25:22)':  function () {
			Y.Assert.areSame(1368527122, strtotime('seventh Tue of 2013-04-01T10:25:22'));
		},

		'strtotime(`eighth Wed of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-05-22 10:25:22)':  function () {
			Y.Assert.areSame(1369218322, strtotime('eighth Wed of 2013-04-01T10:25:22'));
		},

		'strtotime(`ninth Thu of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-05-30 10:25:22)':  function () {
			Y.Assert.areSame(1369909522, strtotime('ninth Thu of 2013-04-01T10:25:22'));
		},

		'strtotime(`tenth Sat of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-06-08 10:25:22)':  function () {
			Y.Assert.areSame(1370687122, strtotime('tenth Sat of 2013-04-01T10:25:22'));
		},

		'strtotime(`eleventh Friday of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-06-14 10:25:22)':  function () {
			Y.Assert.areSame(1371205522, strtotime('eleventh Friday of 2013-04-01T10:25:22'));
		},

		'strtotime(`twelfth Saturday of 2013-04-01T10:25:22`) (2013-04-01 10:25:22  wddf) should give ` (2013-06-22 10:25:22)':  function () {
			Y.Assert.areSame(1371896722, strtotime('twelfth Saturday of 2013-04-01T10:25:22'));
		},

		'strtotime("2013:04:01 10:25:22 yesterday")  (exif) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013:04:01 10:25:22 yesterday'), '');
		},

		'strtotime("2013:04:01 10:25:22 now")  (exif) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013:04:01 10:25:22 now'), '');
		},

		'strtotime("2013:04:01 10:25:22 noon")  (exif) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013:04:01 10:25:22 noon'), '');
		},

		'strtotime("2013:04:01 10:25:22 midnight")  (exif) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013:04:01 10:25:22 midnight'), '');
		},

		'strtotime("2013:04:01 10:25:22 today")  (exif) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013:04:01 10:25:22 today'), '');
		},

		'strtotime("2013:04:01 10:25:22 tomorrow")  (exif) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013:04:01 10:25:22 tomorrow'), '');
		},

		'strtotime("2013:04:01 10:25:22 first day of")  (exif) should give `1364811922` (ie 2013-04-01 10:25:22)':  function () {
			Y.Assert.areSame(1364811922, strtotime('2013:04:01 10:25:22 first day of'), '');
		},

		'strtotime("2013:04:01 10:25:22 last day of")  (exif) should give `1367317522` (ie 2013-04-30 10:25:22)':  function () {
			Y.Assert.areSame(1367317522, strtotime('2013:04:01 10:25:22 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-04-02 10:25:22)':  function () {
			Y.Assert.areSame(1364898322, strtotime('first Tuesday of 2013:04:01 10:25:22'));
		},

		'strtotime(`next Thursday of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-04-04 10:25:22)':  function () {
			Y.Assert.areSame(1365071122, strtotime('next Thursday of 2013:04:01 10:25:22'));
		},

		'strtotime(`second Fri of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-04-12 10:25:22)':  function () {
			Y.Assert.areSame(1365762322, strtotime('second Fri of 2013:04:01 10:25:22'));
		},

		'strtotime(`third Wednesday of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-04-17 10:25:22)':  function () {
			Y.Assert.areSame(1366194322, strtotime('third Wednesday of 2013:04:01 10:25:22'));
		},

		'strtotime(`last Sat of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-04-27 10:25:22)':  function () {
			Y.Assert.areSame(1367058322, strtotime('last Sat of 2013:04:01 10:25:22'));
		},

		'strtotime(`fourth Sunday of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-04-28 10:25:22)':  function () {
			Y.Assert.areSame(1367144722, strtotime('fourth Sunday of 2013:04:01 10:25:22'));
		},

		'strtotime(`fifth Monday of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-04-29 10:25:22)':  function () {
			Y.Assert.areSame(1367231122, strtotime('fifth Monday of 2013:04:01 10:25:22'));
		},

		'strtotime(`sixth Mon of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-05-06 10:25:22)':  function () {
			Y.Assert.areSame(1367835922, strtotime('sixth Mon of 2013:04:01 10:25:22'));
		},

		'strtotime(`seventh Tue of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-05-14 10:25:22)':  function () {
			Y.Assert.areSame(1368527122, strtotime('seventh Tue of 2013:04:01 10:25:22'));
		},

		'strtotime(`eighth Wed of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-05-22 10:25:22)':  function () {
			Y.Assert.areSame(1369218322, strtotime('eighth Wed of 2013:04:01 10:25:22'));
		},

		'strtotime(`ninth Thu of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-05-30 10:25:22)':  function () {
			Y.Assert.areSame(1369909522, strtotime('ninth Thu of 2013:04:01 10:25:22'));
		},

		'strtotime(`tenth Sat of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-06-08 10:25:22)':  function () {
			Y.Assert.areSame(1370687122, strtotime('tenth Sat of 2013:04:01 10:25:22'));
		},

		'strtotime(`eleventh Friday of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-06-14 10:25:22)':  function () {
			Y.Assert.areSame(1371205522, strtotime('eleventh Friday of 2013:04:01 10:25:22'));
		},

		'strtotime(`twelfth Saturday of 2013:04:01 10:25:22`) (2013-04-01 10:25:22  exif) should give ` (2013-06-22 10:25:22)':  function () {
			Y.Assert.areSame(1371896722, strtotime('twelfth Saturday of 2013:04:01 10:25:22'));
		},

		'strtotime("2013.90 yesterday")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 yesterday'), '');
		},

		'strtotime("2013.90 now")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 now'), '');
		},

		'strtotime("2013.90 noon")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 noon'), '');
		},

		'strtotime("2013.90 midnight")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 midnight'), '');
		},

		'strtotime("2013.90 today")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 today'), '');
		},

		'strtotime("2013.90 tomorrow")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 tomorrow'), '');
		},

		'strtotime("2013.90 first day of")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 first day of'), '');
		},

		'strtotime("2013.90 last day of")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.90 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 2013.90'));
		},

		'strtotime(`next Thursday of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 2013.90'));
		},

		'strtotime(`second Fri of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 2013.90'));
		},

		'strtotime(`third Wednesday of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 2013.90'));
		},

		'strtotime(`last Sat of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 2013.90'));
		},

		'strtotime(`fourth Sunday of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 2013.90'));
		},

		'strtotime(`fifth Monday of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 2013.90'));
		},

		'strtotime(`sixth Mon of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 2013.90'));
		},

		'strtotime(`seventh Tue of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 2013.90'));
		},

		'strtotime(`eighth Wed of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 2013.90'));
		},

		'strtotime(`ninth Thu of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 2013.90'));
		},

		'strtotime(`tenth Sat of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 2013.90'));
		},

		'strtotime(`eleventh Friday of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 2013.90'));
		},

		'strtotime(`twelfth Saturday of 2013.90`) (2013-04-01 10:25:22  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 2013.90'));
		},

		'strtotime("2013W14-1 yesterday")  (isoweekday) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1356912000, strtotime('2013W14-1 yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("2013W14-1 now")  (isoweekday) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013W14-1 now'), '');
		},

		'strtotime("2013W14-1 noon")  (isoweekday) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013W14-1 noon'), '');
		},

		'strtotime("2013W14-1 midnight")  (isoweekday) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013W14-1 midnight'), '');
		},

		'strtotime("2013W14-1 today")  (isoweekday) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013W14-1 today'), '');
		},

		'strtotime("2013W14-1 tomorrow")  (isoweekday) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1357084800, strtotime('2013W14-1 tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("2013W14-1 first day of")  (isoweekday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1356998400, strtotime('2013W14-1 first day of'), 'This is a suspected php bug.');
		},

		'strtotime("2013W14-1 last day of")  (isoweekday) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1359590400, strtotime('2013W14-1 last day of'), 'This is a suspected php bug.');
		},

		'strtotime(`first Tuesday of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1364774400, strtotime('first Tuesday of 2013W14-1'));
		},

		'strtotime(`next Thursday of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1364947200, strtotime('next Thursday of 2013W14-1'));
		},

		'strtotime(`second Fri of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1365033600, strtotime('second Fri of 2013W14-1'));
		},

		'strtotime(`third Wednesday of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1364860800, strtotime('third Wednesday of 2013W14-1'));
		},

		'strtotime(`last Sat of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-05-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1367539200, strtotime('last Sat of 2013W14-1'));
		},

		'strtotime(`fourth Sunday of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-06 00:00:00)':  function () {
			Y.Assert.areNotSame(1365206400, strtotime('fourth Sunday of 2013W14-1'));
		},

		'strtotime(`fifth Monday of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-07 00:00:00)':  function () {
			Y.Assert.areNotSame(1365292800, strtotime('fifth Monday of 2013W14-1'));
		},

		'strtotime(`sixth Mon of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-07 00:00:00)':  function () {
			Y.Assert.areNotSame(1365292800, strtotime('sixth Mon of 2013W14-1'));
		},

		'strtotime(`seventh Tue of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1364774400, strtotime('seventh Tue of 2013W14-1'));
		},

		'strtotime(`eighth Wed of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1364860800, strtotime('eighth Wed of 2013W14-1'));
		},

		'strtotime(`ninth Thu of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1364947200, strtotime('ninth Thu of 2013W14-1'));
		},

		'strtotime(`tenth Sat of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1365120000, strtotime('tenth Sat of 2013W14-1'));
		},

		'strtotime(`eleventh Friday of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1365033600, strtotime('eleventh Friday of 2013W14-1'));
		},

		'strtotime(`twelfth Saturday of 2013W14-1`) (2013-04-01 10:25:22  isoweekday) should give ` (2013-04-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1365120000, strtotime('twelfth Saturday of 2013W14-1'));
		},

		'strtotime("Apr-01-2013 yesterday")  (pgtextshort) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('Apr-01-2013 yesterday'), '');
		},

		'strtotime("Apr-01-2013 now")  (pgtextshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr-01-2013 now'), '');
		},

		'strtotime("Apr-01-2013 noon")  (pgtextshort) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('Apr-01-2013 noon'), '');
		},

		'strtotime("Apr-01-2013 midnight")  (pgtextshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr-01-2013 midnight'), '');
		},

		'strtotime("Apr-01-2013 today")  (pgtextshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr-01-2013 today'), '');
		},

		'strtotime("Apr-01-2013 tomorrow")  (pgtextshort) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('Apr-01-2013 tomorrow'), '');
		},

		'strtotime("Apr-01-2013 first day of")  (pgtextshort) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('Apr-01-2013 first day of'), '');
		},

		'strtotime("Apr-01-2013 last day of")  (pgtextshort) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('Apr-01-2013 last day of'), '');
		},

		'strtotime(`first Tuesday of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of Apr-01-2013'));
		},

		'strtotime(`next Thursday of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of Apr-01-2013'));
		},

		'strtotime(`second Fri of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of Apr-01-2013'));
		},

		'strtotime(`third Wednesday of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of Apr-01-2013'));
		},

		'strtotime(`last Sat of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of Apr-01-2013'));
		},

		'strtotime(`fourth Sunday of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of Apr-01-2013'));
		},

		'strtotime(`fifth Monday of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of Apr-01-2013'));
		},

		'strtotime(`sixth Mon of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of Apr-01-2013'));
		},

		'strtotime(`seventh Tue of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of Apr-01-2013'));
		},

		'strtotime(`eighth Wed of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of Apr-01-2013'));
		},

		'strtotime(`ninth Thu of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of Apr-01-2013'));
		},

		'strtotime(`tenth Sat of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of Apr-01-2013'));
		},

		'strtotime(`eleventh Friday of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of Apr-01-2013'));
		},

		'strtotime(`twelfth Saturday of Apr-01-2013`) (2013-04-01 10:25:22  pgtextshort) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of Apr-01-2013'));
		},

		'strtotime("2013-Apr-01 yesterday")  (pgtextreverse) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('2013-Apr-01 yesterday'), '');
		},

		'strtotime("2013-Apr-01 now")  (pgtextreverse) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-Apr-01 now'), '');
		},

		'strtotime("2013-Apr-01 noon")  (pgtextreverse) should give `1364817600` (ie 2013-04-01 12:00:00)':  function () {
			Y.Assert.areSame(1364817600, strtotime('2013-Apr-01 noon'), '');
		},

		'strtotime("2013-Apr-01 midnight")  (pgtextreverse) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-Apr-01 midnight'), '');
		},

		'strtotime("2013-Apr-01 today")  (pgtextreverse) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-Apr-01 today'), '');
		},

		'strtotime("2013-Apr-01 tomorrow")  (pgtextreverse) should give `1364860800` (ie 2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('2013-Apr-01 tomorrow'), '');
		},

		'strtotime("2013-Apr-01 first day of")  (pgtextreverse) should give `1364774400` (ie 2013-04-01 00:00:00)':  function () {
			Y.Assert.areSame(1364774400, strtotime('2013-Apr-01 first day of'), '');
		},

		'strtotime("2013-Apr-01 last day of")  (pgtextreverse) should give `1367280000` (ie 2013-04-30 00:00:00)':  function () {
			Y.Assert.areSame(1367280000, strtotime('2013-Apr-01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-04-02 00:00:00)':  function () {
			Y.Assert.areSame(1364860800, strtotime('first Tuesday of 2013-Apr-01'));
		},

		'strtotime(`next Thursday of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('next Thursday of 2013-Apr-01'));
		},

		'strtotime(`second Fri of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('second Fri of 2013-Apr-01'));
		},

		'strtotime(`third Wednesday of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-04-17 00:00:00)':  function () {
			Y.Assert.areSame(1366156800, strtotime('third Wednesday of 2013-Apr-01'));
		},

		'strtotime(`last Sat of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-04-27 00:00:00)':  function () {
			Y.Assert.areSame(1367020800, strtotime('last Sat of 2013-Apr-01'));
		},

		'strtotime(`fourth Sunday of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-04-28 00:00:00)':  function () {
			Y.Assert.areSame(1367107200, strtotime('fourth Sunday of 2013-Apr-01'));
		},

		'strtotime(`fifth Monday of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-04-29 00:00:00)':  function () {
			Y.Assert.areSame(1367193600, strtotime('fifth Monday of 2013-Apr-01'));
		},

		'strtotime(`sixth Mon of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-05-06 00:00:00)':  function () {
			Y.Assert.areSame(1367798400, strtotime('sixth Mon of 2013-Apr-01'));
		},

		'strtotime(`seventh Tue of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-05-14 00:00:00)':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh Tue of 2013-Apr-01'));
		},

		'strtotime(`eighth Wed of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-05-22 00:00:00)':  function () {
			Y.Assert.areSame(1369180800, strtotime('eighth Wed of 2013-Apr-01'));
		},

		'strtotime(`ninth Thu of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-05-30 00:00:00)':  function () {
			Y.Assert.areSame(1369872000, strtotime('ninth Thu of 2013-Apr-01'));
		},

		'strtotime(`tenth Sat of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-06-08 00:00:00)':  function () {
			Y.Assert.areSame(1370649600, strtotime('tenth Sat of 2013-Apr-01'));
		},

		'strtotime(`eleventh Friday of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-06-14 00:00:00)':  function () {
			Y.Assert.areSame(1371168000, strtotime('eleventh Friday of 2013-Apr-01'));
		},

		'strtotime(`twelfth Saturday of 2013-Apr-01`) (2013-04-01 10:25:22  pgtextreverse) should give ` (2013-06-22 00:00:00)':  function () {
			Y.Assert.areSame(1371859200, strtotime('twelfth Saturday of 2013-Apr-01'));
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 yesterday")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 yesterday'), '');
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 now")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 now'), '');
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 noon")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 noon'), '');
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 midnight")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 midnight'), '');
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 today")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 today'), '');
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 tomorrow")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 tomorrow'), '');
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 first day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 first day of'), '');
		},

		'strtotime("01/Apr/2013:10:25:22 GMT3:30 last day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Apr/2013:10:25:22 GMT3:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`next Thursday of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`second Fri of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`third Wednesday of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`last Sat of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`fourth Sunday of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`fifth Monday of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`sixth Mon of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`seventh Tue of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`eighth Wed of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`ninth Thu of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`tenth Sat of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`eleventh Friday of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime(`twelfth Saturday of 01/Apr/2013:10:25:22 GMT3:30`) (2013-04-01 10:25:22  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 01/Apr/2013:10:25:22 GMT3:30'));
		},

		'strtotime("0 yesterday")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 yesterday'), '');
		},

		'strtotime("0 now")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 now'), '');
		},

		'strtotime("0 noon")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 noon'), '');
		},

		'strtotime("0 midnight")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 midnight'), '');
		},

		'strtotime("0 today")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 today'), '');
		},

		'strtotime("0 tomorrow")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 tomorrow'), '');
		},

		'strtotime("0 first day of")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 first day of'), '');
		},

		'strtotime("0 last day of")  (Y-m-d H:i:s Europe/Vaduz) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('0 last day of'), '');
		},

		'strtotime(`first Tuesday of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 0'));
		},

		'strtotime(`next Thursday of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 0'));
		},

		'strtotime(`second Fri of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 0'));
		},

		'strtotime(`third Wednesday of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 0'));
		},

		'strtotime(`last Sat of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 0'));
		},

		'strtotime(`fourth Sunday of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 0'));
		},

		'strtotime(`fifth Monday of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 0'));
		},

		'strtotime(`sixth Mon of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 0'));
		},

		'strtotime(`seventh Tue of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 0'));
		},

		'strtotime(`eighth Wed of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 0'));
		},

		'strtotime(`ninth Thu of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 0'));
		},

		'strtotime(`tenth Sat of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 0'));
		},

		'strtotime(`eleventh Friday of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 0'));
		},

		'strtotime(`twelfth Saturday of 0`) (2012-02-29 08:02:38  Y-m-d H:i:s Europe/Vaduz) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 0'));
		},

		'strtotime("1 yesterday")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 yesterday'), '');
		},

		'strtotime("1 now")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 now'), '');
		},

		'strtotime("1 noon")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 noon'), '');
		},

		'strtotime("1 midnight")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 midnight'), '');
		},

		'strtotime("1 today")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 today'), '');
		},

		'strtotime("1 tomorrow")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 tomorrow'), '');
		},

		'strtotime("1 first day of")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 first day of'), '');
		},

		'strtotime("1 last day of")  (Y/m/d H:i:s Australia/Lord_Howe) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('1 last day of'), '');
		},

		'strtotime(`first Tuesday of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1'));
		},

		'strtotime(`next Thursday of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1'));
		},

		'strtotime(`second Fri of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1'));
		},

		'strtotime(`third Wednesday of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1'));
		},

		'strtotime(`last Sat of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1'));
		},

		'strtotime(`fourth Sunday of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1'));
		},

		'strtotime(`fifth Monday of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1'));
		},

		'strtotime(`sixth Mon of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1'));
		},

		'strtotime(`seventh Tue of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1'));
		},

		'strtotime(`eighth Wed of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1'));
		},

		'strtotime(`ninth Thu of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1'));
		},

		'strtotime(`tenth Sat of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1'));
		},

		'strtotime(`eleventh Friday of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1'));
		},

		'strtotime(`twelfth Saturday of 1`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1'));
		},

		'strtotime("yesterday", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('yesterday', 1356998399));
		},

		'strtotime("2012/12/31 yesterday")  (iso8601date4) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012/12/31 yesterday'), '');
		},

		'strtotime("now", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('now', 1356998399));
		},

		'strtotime("2012/12/31 now")  (iso8601date4) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 now'), '');
		},

		'strtotime("noon", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('noon', 1356998399));
		},

		'strtotime("2012/12/31 noon")  (iso8601date4) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('2012/12/31 noon'), '');
		},

		'strtotime("midnight", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('midnight', 1356998399));
		},

		'strtotime("2012/12/31 midnight")  (iso8601date4) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 midnight'), '');
		},

		'strtotime("today", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('today', 1356998399));
		},

		'strtotime("2012/12/31 today")  (iso8601date4) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 today'), '');
		},

		'strtotime("tomorrow", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('tomorrow', 1356998399));
		},

		'strtotime("2012/12/31 tomorrow")  (iso8601date4) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2012/12/31 tomorrow'), '');
		},

		'strtotime("first day of", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('first day of', 1356998399));
		},

		'strtotime("2012/12/31 first day of")  (iso8601date4) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012/12/31 first day of'), '');
		},

		'strtotime("last day of", 1356998399)  (originally `2012-12-31 23:59:59` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('last day of', 1356998399));
		},

		'strtotime("2012/12/31 last day of")  (iso8601date4) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012/12/31 last day of'), '');
		},

		'strtotime(`first Tuesday of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998399'));
		},

		'strtotime(`first Tuesday of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 2012/12/31'));
		},

		'strtotime(`next Thursday of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998399'));
		},

		'strtotime(`next Thursday of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 2012/12/31'));
		},

		'strtotime(`second Fri of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998399'));
		},

		'strtotime(`second Fri of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 2012/12/31'));
		},

		'strtotime(`third Wednesday of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998399'));
		},

		'strtotime(`third Wednesday of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 2012/12/31'));
		},

		'strtotime(`last Sat of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998399'));
		},

		'strtotime(`last Sat of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 2012/12/31'));
		},

		'strtotime(`fourth Sunday of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998399'));
		},

		'strtotime(`fourth Sunday of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 2012/12/31'));
		},

		'strtotime(`fifth Monday of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998399'));
		},

		'strtotime(`fifth Monday of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 2012/12/31'));
		},

		'strtotime(`sixth Mon of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998399'));
		},

		'strtotime(`sixth Mon of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 2012/12/31'));
		},

		'strtotime(`seventh Tue of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998399'));
		},

		'strtotime(`seventh Tue of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 2012/12/31'));
		},

		'strtotime(`eighth Wed of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998399'));
		},

		'strtotime(`eighth Wed of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 2012/12/31'));
		},

		'strtotime(`ninth Thu of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998399'));
		},

		'strtotime(`ninth Thu of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 2012/12/31'));
		},

		'strtotime(`tenth Sat of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998399'));
		},

		'strtotime(`tenth Sat of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 2012/12/31'));
		},

		'strtotime(`eleventh Friday of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998399'));
		},

		'strtotime(`eleventh Friday of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 2012/12/31'));
		},

		'strtotime(`twelfth Saturday of 1356998399`) (2012-12-31 23:59:59  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998399'));
		},

		'strtotime(`twelfth Saturday of 2012/12/31`) (2012-12-31 23:59:59  iso8601date4) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 2012/12/31'));
		},

		'strtotime("12/31 yesterday")  (american short) should give `1388361600` (ie 2013-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1388361600, strtotime('12/31 yesterday'), '');
		},

		'strtotime("12/31 now")  (american short) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('12/31 now'), '');
		},

		'strtotime("12/31 noon")  (american short) should give `1388491200` (ie 2013-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1388491200, strtotime('12/31 noon'), '');
		},

		'strtotime("12/31 midnight")  (american short) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('12/31 midnight'), '');
		},

		'strtotime("12/31 today")  (american short) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('12/31 today'), '');
		},

		'strtotime("12/31 tomorrow")  (american short) should give `1388534400` (ie 2014-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1388534400, strtotime('12/31 tomorrow'), '');
		},

		'strtotime("12/31 first day of")  (american short) should give `1385856000` (ie 2013-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1385856000, strtotime('12/31 first day of'), '');
		},

		'strtotime("12/31 last day of")  (american short) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('12/31 last day of'), '');
		},

		'strtotime(`first Tuesday of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2013-12-03 00:00:00)':  function () {
			Y.Assert.areSame(1386028800, strtotime('first Tuesday of 12/31'));
		},

		'strtotime(`next Thursday of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2013-12-05 00:00:00)':  function () {
			Y.Assert.areSame(1386201600, strtotime('next Thursday of 12/31'));
		},

		'strtotime(`second Fri of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2013-12-13 00:00:00)':  function () {
			Y.Assert.areSame(1386892800, strtotime('second Fri of 12/31'));
		},

		'strtotime(`third Wednesday of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2013-12-18 00:00:00)':  function () {
			Y.Assert.areSame(1387324800, strtotime('third Wednesday of 12/31'));
		},

		'strtotime(`last Sat of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2013-12-28 00:00:00)':  function () {
			Y.Assert.areSame(1388188800, strtotime('last Sat of 12/31'));
		},

		'strtotime(`fourth Sunday of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2013-12-22 00:00:00)':  function () {
			Y.Assert.areSame(1387670400, strtotime('fourth Sunday of 12/31'));
		},

		'strtotime(`fifth Monday of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2013-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1388361600, strtotime('fifth Monday of 12/31'));
		},

		'strtotime(`sixth Mon of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2014-01-06 00:00:00)':  function () {
			Y.Assert.areSame(1388966400, strtotime('sixth Mon of 12/31'));
		},

		'strtotime(`seventh Tue of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2014-01-14 00:00:00)':  function () {
			Y.Assert.areSame(1389657600, strtotime('seventh Tue of 12/31'));
		},

		'strtotime(`eighth Wed of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2014-01-22 00:00:00)':  function () {
			Y.Assert.areSame(1390348800, strtotime('eighth Wed of 12/31'));
		},

		'strtotime(`ninth Thu of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2014-01-30 00:00:00)':  function () {
			Y.Assert.areSame(1391040000, strtotime('ninth Thu of 12/31'));
		},

		'strtotime(`tenth Sat of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2014-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1391817600, strtotime('tenth Sat of 12/31'));
		},

		'strtotime(`eleventh Friday of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2014-02-14 00:00:00)':  function () {
			Y.Assert.areSame(1392336000, strtotime('eleventh Friday of 12/31'));
		},

		'strtotime(`twelfth Saturday of 12/31`) (2012-12-31 23:59:59  american short) should give ` (2014-02-22 00:00:00)':  function () {
			Y.Assert.areSame(1393027200, strtotime('twelfth Saturday of 12/31'));
		},

		'strtotime("12/31/2012 yesterday")  (american) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('12/31/2012 yesterday'), '');
		},

		'strtotime("12/31/2012 now")  (american) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12/31/2012 now'), '');
		},

		'strtotime("12/31/2012 noon")  (american) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('12/31/2012 noon'), '');
		},

		'strtotime("12/31/2012 midnight")  (american) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12/31/2012 midnight'), '');
		},

		'strtotime("12/31/2012 today")  (american) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12/31/2012 today'), '');
		},

		'strtotime("12/31/2012 tomorrow")  (american) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('12/31/2012 tomorrow'), '');
		},

		'strtotime("12/31/2012 first day of")  (american) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('12/31/2012 first day of'), '');
		},

		'strtotime("12/31/2012 last day of")  (american) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12/31/2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 12/31/2012'));
		},

		'strtotime(`next Thursday of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 12/31/2012'));
		},

		'strtotime(`second Fri of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 12/31/2012'));
		},

		'strtotime(`third Wednesday of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 12/31/2012'));
		},

		'strtotime(`last Sat of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 12/31/2012'));
		},

		'strtotime(`fourth Sunday of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 12/31/2012'));
		},

		'strtotime(`fifth Monday of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 12/31/2012'));
		},

		'strtotime(`sixth Mon of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 12/31/2012'));
		},

		'strtotime(`seventh Tue of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 12/31/2012'));
		},

		'strtotime(`eighth Wed of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 12/31/2012'));
		},

		'strtotime(`ninth Thu of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 12/31/2012'));
		},

		'strtotime(`tenth Sat of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 12/31/2012'));
		},

		'strtotime(`eleventh Friday of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 12/31/2012'));
		},

		'strtotime(`twelfth Saturday of 12/31/2012`) (2012-12-31 23:59:59  american) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 12/31/2012'));
		},

		'strtotime("12-12-31 yesterday")  (iso8601date2) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('12-12-31 yesterday'), '');
		},

		'strtotime("12-12-31 now")  (iso8601date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12-12-31 now'), '');
		},

		'strtotime("12-12-31 noon")  (iso8601date2) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('12-12-31 noon'), '');
		},

		'strtotime("12-12-31 midnight")  (iso8601date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12-12-31 midnight'), '');
		},

		'strtotime("12-12-31 today")  (iso8601date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12-12-31 today'), '');
		},

		'strtotime("12-12-31 tomorrow")  (iso8601date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('12-12-31 tomorrow'), '');
		},

		'strtotime("12-12-31 first day of")  (iso8601date2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('12-12-31 first day of'), '');
		},

		'strtotime("12-12-31 last day of")  (iso8601date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('12-12-31 last day of'), '');
		},

		'strtotime(`first Tuesday of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 12-12-31'));
		},

		'strtotime(`next Thursday of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 12-12-31'));
		},

		'strtotime(`second Fri of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 12-12-31'));
		},

		'strtotime(`third Wednesday of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 12-12-31'));
		},

		'strtotime(`last Sat of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 12-12-31'));
		},

		'strtotime(`fourth Sunday of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 12-12-31'));
		},

		'strtotime(`fifth Monday of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 12-12-31'));
		},

		'strtotime(`sixth Mon of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 12-12-31'));
		},

		'strtotime(`seventh Tue of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 12-12-31'));
		},

		'strtotime(`eighth Wed of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 12-12-31'));
		},

		'strtotime(`ninth Thu of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 12-12-31'));
		},

		'strtotime(`tenth Sat of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 12-12-31'));
		},

		'strtotime(`eleventh Friday of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 12-12-31'));
		},

		'strtotime(`twelfth Saturday of 12-12-31`) (2012-12-31 23:59:59  iso8601date2) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 12-12-31'));
		},

		'strtotime("2012-12 yesterday")  (gnudateshorter) should give `1354233600` (ie 2012-11-30 00:00:00)':  function () {
			Y.Assert.areSame(1354233600, strtotime('2012-12 yesterday'), '');
		},

		'strtotime("2012-12 now")  (gnudateshorter) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012-12 now'), '');
		},

		'strtotime("2012-12 noon")  (gnudateshorter) should give `1354363200` (ie 2012-12-01 12:00:00)':  function () {
			Y.Assert.areSame(1354363200, strtotime('2012-12 noon'), '');
		},

		'strtotime("2012-12 midnight")  (gnudateshorter) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012-12 midnight'), '');
		},

		'strtotime("2012-12 today")  (gnudateshorter) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012-12 today'), '');
		},

		'strtotime("2012-12 tomorrow")  (gnudateshorter) should give `1354406400` (ie 2012-12-02 00:00:00)':  function () {
			Y.Assert.areSame(1354406400, strtotime('2012-12 tomorrow'), '');
		},

		'strtotime("2012-12 first day of")  (gnudateshorter) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012-12 first day of'), '');
		},

		'strtotime("2012-12 last day of")  (gnudateshorter) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 2012-12'));
		},

		'strtotime(`next Thursday of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 2012-12'));
		},

		'strtotime(`second Fri of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 2012-12'));
		},

		'strtotime(`third Wednesday of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 2012-12'));
		},

		'strtotime(`last Sat of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 2012-12'));
		},

		'strtotime(`fourth Sunday of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 2012-12'));
		},

		'strtotime(`fifth Monday of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 2012-12'));
		},

		'strtotime(`sixth Mon of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 2012-12'));
		},

		'strtotime(`seventh Tue of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 2012-12'));
		},

		'strtotime(`eighth Wed of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 2012-12'));
		},

		'strtotime(`ninth Thu of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 2012-12'));
		},

		'strtotime(`tenth Sat of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 2012-12'));
		},

		'strtotime(`eleventh Friday of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 2012-12'));
		},

		'strtotime(`twelfth Saturday of 2012-12`) (2012-12-31 23:59:59  gnudateshorter) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 2012-12'));
		},

		'strtotime("2012-12-31 yesterday")  (gnudateshort) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012-12-31 yesterday'), '');
		},

		'strtotime("2012-12-31 now")  (gnudateshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31 now'), '');
		},

		'strtotime("2012-12-31 noon")  (gnudateshort) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('2012-12-31 noon'), '');
		},

		'strtotime("2012-12-31 midnight")  (gnudateshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31 midnight'), '');
		},

		'strtotime("2012-12-31 today")  (gnudateshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31 today'), '');
		},

		'strtotime("2012-12-31 tomorrow")  (gnudateshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2012-12-31 tomorrow'), '');
		},

		'strtotime("2012-12-31 first day of")  (gnudateshort) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012-12-31 first day of'), '');
		},

		'strtotime("2012-12-31 last day of")  (gnudateshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 2012-12-31'));
		},

		'strtotime(`next Thursday of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 2012-12-31'));
		},

		'strtotime(`second Fri of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 2012-12-31'));
		},

		'strtotime(`third Wednesday of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 2012-12-31'));
		},

		'strtotime(`last Sat of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 2012-12-31'));
		},

		'strtotime(`fourth Sunday of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 2012-12-31'));
		},

		'strtotime(`fifth Monday of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 2012-12-31'));
		},

		'strtotime(`sixth Mon of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 2012-12-31'));
		},

		'strtotime(`seventh Tue of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 2012-12-31'));
		},

		'strtotime(`eighth Wed of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 2012-12-31'));
		},

		'strtotime(`ninth Thu of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 2012-12-31'));
		},

		'strtotime(`tenth Sat of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 2012-12-31'));
		},

		'strtotime(`eleventh Friday of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 2012-12-31'));
		},

		'strtotime(`twelfth Saturday of 2012-12-31`) (2012-12-31 23:59:59  gnudateshort) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 2012-12-31'));
		},

		'strtotime("31 December 2012 yesterday")  (date full) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('31 December 2012 yesterday'), '');
		},

		'strtotime("31 December 2012 now")  (date full) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31 December 2012 now'), '');
		},

		'strtotime("31 December 2012 noon")  (date full) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('31 December 2012 noon'), '');
		},

		'strtotime("31 December 2012 midnight")  (date full) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31 December 2012 midnight'), '');
		},

		'strtotime("31 December 2012 today")  (date full) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31 December 2012 today'), '');
		},

		'strtotime("31 December 2012 tomorrow")  (date full) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('31 December 2012 tomorrow'), '');
		},

		'strtotime("31 December 2012 first day of")  (date full) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('31 December 2012 first day of'), '');
		},

		'strtotime("31 December 2012 last day of")  (date full) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31 December 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 31 December 2012'));
		},

		'strtotime(`next Thursday of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 31 December 2012'));
		},

		'strtotime(`second Fri of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 31 December 2012'));
		},

		'strtotime(`third Wednesday of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 31 December 2012'));
		},

		'strtotime(`last Sat of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 31 December 2012'));
		},

		'strtotime(`fourth Sunday of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 31 December 2012'));
		},

		'strtotime(`fifth Monday of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 31 December 2012'));
		},

		'strtotime(`sixth Mon of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 31 December 2012'));
		},

		'strtotime(`seventh Tue of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 31 December 2012'));
		},

		'strtotime(`eighth Wed of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 31 December 2012'));
		},

		'strtotime(`ninth Thu of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 31 December 2012'));
		},

		'strtotime(`tenth Sat of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 31 December 2012'));
		},

		'strtotime(`eleventh Friday of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 31 December 2012'));
		},

		'strtotime(`twelfth Saturday of 31 December 2012`) (2012-12-31 23:59:59  date full) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 31 December 2012'));
		},

		'strtotime("31st Dec. 2012 yesterday")  (date full2) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('31st Dec. 2012 yesterday'), '');
		},

		'strtotime("31st Dec. 2012 now")  (date full2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31st Dec. 2012 now'), '');
		},

		'strtotime("31st Dec. 2012 noon")  (date full2) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('31st Dec. 2012 noon'), '');
		},

		'strtotime("31st Dec. 2012 midnight")  (date full2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31st Dec. 2012 midnight'), '');
		},

		'strtotime("31st Dec. 2012 today")  (date full2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31st Dec. 2012 today'), '');
		},

		'strtotime("31st Dec. 2012 tomorrow")  (date full2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('31st Dec. 2012 tomorrow'), '');
		},

		'strtotime("31st Dec. 2012 first day of")  (date full2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('31st Dec. 2012 first day of'), '');
		},

		'strtotime("31st Dec. 2012 last day of")  (date full2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31st Dec. 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 31st Dec. 2012'));
		},

		'strtotime(`next Thursday of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 31st Dec. 2012'));
		},

		'strtotime(`second Fri of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 31st Dec. 2012'));
		},

		'strtotime(`third Wednesday of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 31st Dec. 2012'));
		},

		'strtotime(`last Sat of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 31st Dec. 2012'));
		},

		'strtotime(`fourth Sunday of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 31st Dec. 2012'));
		},

		'strtotime(`fifth Monday of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 31st Dec. 2012'));
		},

		'strtotime(`sixth Mon of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 31st Dec. 2012'));
		},

		'strtotime(`seventh Tue of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 31st Dec. 2012'));
		},

		'strtotime(`eighth Wed of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 31st Dec. 2012'));
		},

		'strtotime(`ninth Thu of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 31st Dec. 2012'));
		},

		'strtotime(`tenth Sat of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 31st Dec. 2012'));
		},

		'strtotime(`eleventh Friday of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 31st Dec. 2012'));
		},

		'strtotime(`twelfth Saturday of 31st Dec. 2012`) (2012-12-31 23:59:59  date full2) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 31st Dec. 2012'));
		},

		'strtotime("31.12.2012 yesterday")  (pointed date) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('31.12.2012 yesterday'), '');
		},

		'strtotime("31.12.2012 now")  (pointed date) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.2012 now'), '');
		},

		'strtotime("31.12.2012 noon")  (pointed date) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('31.12.2012 noon'), '');
		},

		'strtotime("31.12.2012 midnight")  (pointed date) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.2012 midnight'), '');
		},

		'strtotime("31.12.2012 today")  (pointed date) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.2012 today'), '');
		},

		'strtotime("31.12.2012 tomorrow")  (pointed date) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('31.12.2012 tomorrow'), '');
		},

		'strtotime("31.12.2012 first day of")  (pointed date) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('31.12.2012 first day of'), '');
		},

		'strtotime("31.12.2012 last day of")  (pointed date) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 31.12.2012'));
		},

		'strtotime(`next Thursday of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 31.12.2012'));
		},

		'strtotime(`second Fri of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 31.12.2012'));
		},

		'strtotime(`third Wednesday of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 31.12.2012'));
		},

		'strtotime(`last Sat of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 31.12.2012'));
		},

		'strtotime(`fourth Sunday of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 31.12.2012'));
		},

		'strtotime(`fifth Monday of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 31.12.2012'));
		},

		'strtotime(`sixth Mon of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 31.12.2012'));
		},

		'strtotime(`seventh Tue of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 31.12.2012'));
		},

		'strtotime(`eighth Wed of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 31.12.2012'));
		},

		'strtotime(`ninth Thu of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 31.12.2012'));
		},

		'strtotime(`tenth Sat of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 31.12.2012'));
		},

		'strtotime(`eleventh Friday of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 31.12.2012'));
		},

		'strtotime(`twelfth Saturday of 31.12.2012`) (2012-12-31 23:59:59  pointed date) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 31.12.2012'));
		},

		'strtotime("31-12-2012 yesterday")  (pointed date2) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('31-12-2012 yesterday'), '');
		},

		'strtotime("31-12-2012 now")  (pointed date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31-12-2012 now'), '');
		},

		'strtotime("31-12-2012 noon")  (pointed date2) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('31-12-2012 noon'), '');
		},

		'strtotime("31-12-2012 midnight")  (pointed date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31-12-2012 midnight'), '');
		},

		'strtotime("31-12-2012 today")  (pointed date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31-12-2012 today'), '');
		},

		'strtotime("31-12-2012 tomorrow")  (pointed date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('31-12-2012 tomorrow'), '');
		},

		'strtotime("31-12-2012 first day of")  (pointed date2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('31-12-2012 first day of'), '');
		},

		'strtotime("31-12-2012 last day of")  (pointed date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31-12-2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 31-12-2012'));
		},

		'strtotime(`next Thursday of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 31-12-2012'));
		},

		'strtotime(`second Fri of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 31-12-2012'));
		},

		'strtotime(`third Wednesday of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 31-12-2012'));
		},

		'strtotime(`last Sat of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 31-12-2012'));
		},

		'strtotime(`fourth Sunday of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 31-12-2012'));
		},

		'strtotime(`fifth Monday of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 31-12-2012'));
		},

		'strtotime(`sixth Mon of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 31-12-2012'));
		},

		'strtotime(`seventh Tue of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 31-12-2012'));
		},

		'strtotime(`eighth Wed of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 31-12-2012'));
		},

		'strtotime(`ninth Thu of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 31-12-2012'));
		},

		'strtotime(`tenth Sat of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 31-12-2012'));
		},

		'strtotime(`eleventh Friday of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 31-12-2012'));
		},

		'strtotime(`twelfth Saturday of 31-12-2012`) (2012-12-31 23:59:59  pointed date2) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 31-12-2012'));
		},

		'strtotime("31.12.12 yesterday")  (pointed date3) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('31.12.12 yesterday'), '');
		},

		'strtotime("31.12.12 now")  (pointed date3) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.12 now'), '');
		},

		'strtotime("31.12.12 noon")  (pointed date3) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('31.12.12 noon'), '');
		},

		'strtotime("31.12.12 midnight")  (pointed date3) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.12 midnight'), '');
		},

		'strtotime("31.12.12 today")  (pointed date3) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.12 today'), '');
		},

		'strtotime("31.12.12 tomorrow")  (pointed date3) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('31.12.12 tomorrow'), '');
		},

		'strtotime("31.12.12 first day of")  (pointed date3) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('31.12.12 first day of'), '');
		},

		'strtotime("31.12.12 last day of")  (pointed date3) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('31.12.12 last day of'), '');
		},

		'strtotime(`first Tuesday of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 31.12.12'));
		},

		'strtotime(`next Thursday of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 31.12.12'));
		},

		'strtotime(`second Fri of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 31.12.12'));
		},

		'strtotime(`third Wednesday of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 31.12.12'));
		},

		'strtotime(`last Sat of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 31.12.12'));
		},

		'strtotime(`fourth Sunday of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 31.12.12'));
		},

		'strtotime(`fifth Monday of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 31.12.12'));
		},

		'strtotime(`sixth Mon of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 31.12.12'));
		},

		'strtotime(`seventh Tue of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 31.12.12'));
		},

		'strtotime(`eighth Wed of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 31.12.12'));
		},

		'strtotime(`ninth Thu of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 31.12.12'));
		},

		'strtotime(`tenth Sat of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 31.12.12'));
		},

		'strtotime(`eleventh Friday of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 31.12.12'));
		},

		'strtotime(`twelfth Saturday of 31.12.12`) (2012-12-31 23:59:59  pointed date3) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 31.12.12'));
		},

		'strtotime("December 2012 yesterday")  (datenoday) should give `1354233600` (ie 2012-11-30 00:00:00)':  function () {
			Y.Assert.areSame(1354233600, strtotime('December 2012 yesterday'), '');
		},

		'strtotime("December 2012 now")  (datenoday) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('December 2012 now'), '');
		},

		'strtotime("December 2012 noon")  (datenoday) should give `1354363200` (ie 2012-12-01 12:00:00)':  function () {
			Y.Assert.areSame(1354363200, strtotime('December 2012 noon'), '');
		},

		'strtotime("December 2012 midnight")  (datenoday) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('December 2012 midnight'), '');
		},

		'strtotime("December 2012 today")  (datenoday) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('December 2012 today'), '');
		},

		'strtotime("December 2012 tomorrow")  (datenoday) should give `1354406400` (ie 2012-12-02 00:00:00)':  function () {
			Y.Assert.areSame(1354406400, strtotime('December 2012 tomorrow'), '');
		},

		'strtotime("December 2012 first day of")  (datenoday) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('December 2012 first day of'), '');
		},

		'strtotime("December 2012 last day of")  (datenoday) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('December 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of December 2012'));
		},

		'strtotime(`next Thursday of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of December 2012'));
		},

		'strtotime(`second Fri of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of December 2012'));
		},

		'strtotime(`third Wednesday of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of December 2012'));
		},

		'strtotime(`last Sat of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of December 2012'));
		},

		'strtotime(`fourth Sunday of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of December 2012'));
		},

		'strtotime(`fifth Monday of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of December 2012'));
		},

		'strtotime(`sixth Mon of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of December 2012'));
		},

		'strtotime(`seventh Tue of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of December 2012'));
		},

		'strtotime(`eighth Wed of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of December 2012'));
		},

		'strtotime(`ninth Thu of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of December 2012'));
		},

		'strtotime(`tenth Sat of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of December 2012'));
		},

		'strtotime(`eleventh Friday of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of December 2012'));
		},

		'strtotime(`twelfth Saturday of December 2012`) (2012-12-31 23:59:59  datenoday) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of December 2012'));
		},

		'strtotime("Dec 2012 yesterday")  (datenoday2) should give `1354233600` (ie 2012-11-30 00:00:00)':  function () {
			Y.Assert.areSame(1354233600, strtotime('Dec 2012 yesterday'), '');
		},

		'strtotime("Dec 2012 now")  (datenoday2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('Dec 2012 now'), '');
		},

		'strtotime("Dec 2012 noon")  (datenoday2) should give `1354363200` (ie 2012-12-01 12:00:00)':  function () {
			Y.Assert.areSame(1354363200, strtotime('Dec 2012 noon'), '');
		},

		'strtotime("Dec 2012 midnight")  (datenoday2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('Dec 2012 midnight'), '');
		},

		'strtotime("Dec 2012 today")  (datenoday2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('Dec 2012 today'), '');
		},

		'strtotime("Dec 2012 tomorrow")  (datenoday2) should give `1354406400` (ie 2012-12-02 00:00:00)':  function () {
			Y.Assert.areSame(1354406400, strtotime('Dec 2012 tomorrow'), '');
		},

		'strtotime("Dec 2012 first day of")  (datenoday2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('Dec 2012 first day of'), '');
		},

		'strtotime("Dec 2012 last day of")  (datenoday2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('Dec 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of Dec 2012'));
		},

		'strtotime(`next Thursday of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of Dec 2012'));
		},

		'strtotime(`second Fri of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of Dec 2012'));
		},

		'strtotime(`third Wednesday of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of Dec 2012'));
		},

		'strtotime(`last Sat of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of Dec 2012'));
		},

		'strtotime(`fourth Sunday of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of Dec 2012'));
		},

		'strtotime(`fifth Monday of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of Dec 2012'));
		},

		'strtotime(`sixth Mon of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of Dec 2012'));
		},

		'strtotime(`seventh Tue of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of Dec 2012'));
		},

		'strtotime(`eighth Wed of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of Dec 2012'));
		},

		'strtotime(`ninth Thu of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of Dec 2012'));
		},

		'strtotime(`tenth Sat of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of Dec 2012'));
		},

		'strtotime(`eleventh Friday of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of Dec 2012'));
		},

		'strtotime(`twelfth Saturday of Dec 2012`) (2012-12-31 23:59:59  datenoday2) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of Dec 2012'));
		},

		'strtotime("2012 December yesterday")  (datenodayrev) should give `1354233600` (ie 2012-11-30 00:00:00)':  function () {
			Y.Assert.areSame(1354233600, strtotime('2012 December yesterday'), '');
		},

		'strtotime("2012 December now")  (datenodayrev) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 December now'), '');
		},

		'strtotime("2012 December noon")  (datenodayrev) should give `1354363200` (ie 2012-12-01 12:00:00)':  function () {
			Y.Assert.areSame(1354363200, strtotime('2012 December noon'), '');
		},

		'strtotime("2012 December midnight")  (datenodayrev) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 December midnight'), '');
		},

		'strtotime("2012 December today")  (datenodayrev) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 December today'), '');
		},

		'strtotime("2012 December tomorrow")  (datenodayrev) should give `1354406400` (ie 2012-12-02 00:00:00)':  function () {
			Y.Assert.areSame(1354406400, strtotime('2012 December tomorrow'), '');
		},

		'strtotime("2012 December first day of")  (datenodayrev) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 December first day of'), '');
		},

		'strtotime("2012 December last day of")  (datenodayrev) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012 December last day of'), '');
		},

		'strtotime(`first Tuesday of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 2012 December'));
		},

		'strtotime(`next Thursday of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 2012 December'));
		},

		'strtotime(`second Fri of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 2012 December'));
		},

		'strtotime(`third Wednesday of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 2012 December'));
		},

		'strtotime(`last Sat of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 2012 December'));
		},

		'strtotime(`fourth Sunday of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 2012 December'));
		},

		'strtotime(`fifth Monday of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 2012 December'));
		},

		'strtotime(`sixth Mon of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 2012 December'));
		},

		'strtotime(`seventh Tue of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 2012 December'));
		},

		'strtotime(`eighth Wed of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 2012 December'));
		},

		'strtotime(`ninth Thu of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 2012 December'));
		},

		'strtotime(`tenth Sat of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 2012 December'));
		},

		'strtotime(`eleventh Friday of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 2012 December'));
		},

		'strtotime(`twelfth Saturday of 2012 December`) (2012-12-31 23:59:59  datenodayrev) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 2012 December'));
		},

		'strtotime("2012 Dec yesterday")  (datenodayrev2) should give `1354233600` (ie 2012-11-30 00:00:00)':  function () {
			Y.Assert.areSame(1354233600, strtotime('2012 Dec yesterday'), '');
		},

		'strtotime("2012 Dec now")  (datenodayrev2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 Dec now'), '');
		},

		'strtotime("2012 Dec noon")  (datenodayrev2) should give `1354363200` (ie 2012-12-01 12:00:00)':  function () {
			Y.Assert.areSame(1354363200, strtotime('2012 Dec noon'), '');
		},

		'strtotime("2012 Dec midnight")  (datenodayrev2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 Dec midnight'), '');
		},

		'strtotime("2012 Dec today")  (datenodayrev2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 Dec today'), '');
		},

		'strtotime("2012 Dec tomorrow")  (datenodayrev2) should give `1354406400` (ie 2012-12-02 00:00:00)':  function () {
			Y.Assert.areSame(1354406400, strtotime('2012 Dec tomorrow'), '');
		},

		'strtotime("2012 Dec first day of")  (datenodayrev2) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012 Dec first day of'), '');
		},

		'strtotime("2012 Dec last day of")  (datenodayrev2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012 Dec last day of'), '');
		},

		'strtotime(`first Tuesday of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 2012 Dec'));
		},

		'strtotime(`next Thursday of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 2012 Dec'));
		},

		'strtotime(`second Fri of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 2012 Dec'));
		},

		'strtotime(`third Wednesday of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 2012 Dec'));
		},

		'strtotime(`last Sat of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 2012 Dec'));
		},

		'strtotime(`fourth Sunday of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 2012 Dec'));
		},

		'strtotime(`fifth Monday of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 2012 Dec'));
		},

		'strtotime(`sixth Mon of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 2012 Dec'));
		},

		'strtotime(`seventh Tue of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 2012 Dec'));
		},

		'strtotime(`eighth Wed of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 2012 Dec'));
		},

		'strtotime(`ninth Thu of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 2012 Dec'));
		},

		'strtotime(`tenth Sat of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 2012 Dec'));
		},

		'strtotime(`eleventh Friday of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 2012 Dec'));
		},

		'strtotime(`twelfth Saturday of 2012 Dec`) (2012-12-31 23:59:59  datenodayrev2) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 2012 Dec'));
		},

		'strtotime("December 31 2012 yesterday")  (datetextual) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('December 31 2012 yesterday'), '');
		},

		'strtotime("December 31 2012 now")  (datetextual) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('December 31 2012 now'), '');
		},

		'strtotime("December 31 2012 noon")  (datetextual) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('December 31 2012 noon'), '');
		},

		'strtotime("December 31 2012 midnight")  (datetextual) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('December 31 2012 midnight'), '');
		},

		'strtotime("December 31 2012 today")  (datetextual) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('December 31 2012 today'), '');
		},

		'strtotime("December 31 2012 tomorrow")  (datetextual) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('December 31 2012 tomorrow'), '');
		},

		'strtotime("December 31 2012 first day of")  (datetextual) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('December 31 2012 first day of'), '');
		},

		'strtotime("December 31 2012 last day of")  (datetextual) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('December 31 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of December 31 2012'));
		},

		'strtotime(`next Thursday of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of December 31 2012'));
		},

		'strtotime(`second Fri of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of December 31 2012'));
		},

		'strtotime(`third Wednesday of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of December 31 2012'));
		},

		'strtotime(`last Sat of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of December 31 2012'));
		},

		'strtotime(`fourth Sunday of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of December 31 2012'));
		},

		'strtotime(`fifth Monday of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of December 31 2012'));
		},

		'strtotime(`sixth Mon of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of December 31 2012'));
		},

		'strtotime(`seventh Tue of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of December 31 2012'));
		},

		'strtotime(`eighth Wed of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of December 31 2012'));
		},

		'strtotime(`ninth Thu of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of December 31 2012'));
		},

		'strtotime(`tenth Sat of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of December 31 2012'));
		},

		'strtotime(`eleventh Friday of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of December 31 2012'));
		},

		'strtotime(`twelfth Saturday of December 31 2012`) (2012-12-31 23:59:59  datetextual) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of December 31 2012'));
		},

		'strtotime("Dec 31st yesterday")  (datetextual2) should give `1388361600` (ie 2013-12-30 00:00:00)':  function () {
			Y.Assert.areNotSame(1388361600, strtotime('Dec 31st yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("Dec 31st now")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Dec 31st now'), 'This is a suspected php bug.');
		},

		'strtotime("Dec 31st noon")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Dec 31st noon'), 'This is a suspected php bug.');
		},

		'strtotime("Dec 31st midnight")  (datetextual2) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('Dec 31st midnight'), '');
		},

		'strtotime("Dec 31st today")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Dec 31st today'), 'This is a suspected php bug.');
		},

		'strtotime("Dec 31st tomorrow")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Dec 31st tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("Dec 31st first day of")  (datetextual2) should give `1385856000` (ie 2013-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1385856000, strtotime('Dec 31st first day of'), '');
		},

		'strtotime("Dec 31st last day of")  (datetextual2) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('Dec 31st last day of'), '');
		},

		'strtotime(`first Tuesday of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2013-12-03 00:00:00)':  function () {
			Y.Assert.areSame(1386028800, strtotime('first Tuesday of Dec 31st'));
		},

		'strtotime(`next Thursday of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2013-12-05 00:00:00)':  function () {
			Y.Assert.areSame(1386201600, strtotime('next Thursday of Dec 31st'));
		},

		'strtotime(`second Fri of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2013-12-13 00:00:00)':  function () {
			Y.Assert.areSame(1386892800, strtotime('second Fri of Dec 31st'));
		},

		'strtotime(`third Wednesday of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2013-12-18 00:00:00)':  function () {
			Y.Assert.areSame(1387324800, strtotime('third Wednesday of Dec 31st'));
		},

		'strtotime(`last Sat of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2013-12-28 00:00:00)':  function () {
			Y.Assert.areSame(1388188800, strtotime('last Sat of Dec 31st'));
		},

		'strtotime(`fourth Sunday of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2013-12-22 00:00:00)':  function () {
			Y.Assert.areSame(1387670400, strtotime('fourth Sunday of Dec 31st'));
		},

		'strtotime(`fifth Monday of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2013-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1388361600, strtotime('fifth Monday of Dec 31st'));
		},

		'strtotime(`sixth Mon of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2014-01-06 00:00:00)':  function () {
			Y.Assert.areSame(1388966400, strtotime('sixth Mon of Dec 31st'));
		},

		'strtotime(`seventh Tue of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2014-01-14 00:00:00)':  function () {
			Y.Assert.areSame(1389657600, strtotime('seventh Tue of Dec 31st'));
		},

		'strtotime(`eighth Wed of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2014-01-22 00:00:00)':  function () {
			Y.Assert.areSame(1390348800, strtotime('eighth Wed of Dec 31st'));
		},

		'strtotime(`ninth Thu of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2014-01-30 00:00:00)':  function () {
			Y.Assert.areSame(1391040000, strtotime('ninth Thu of Dec 31st'));
		},

		'strtotime(`tenth Sat of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2014-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1391817600, strtotime('tenth Sat of Dec 31st'));
		},

		'strtotime(`eleventh Friday of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2014-02-14 00:00:00)':  function () {
			Y.Assert.areSame(1392336000, strtotime('eleventh Friday of Dec 31st'));
		},

		'strtotime(`twelfth Saturday of Dec 31st`) (2012-12-31 23:59:59  datetextual2) should give ` (2014-02-22 00:00:00)':  function () {
			Y.Assert.areSame(1393027200, strtotime('twelfth Saturday of Dec 31st'));
		},

		'strtotime("31 December yesterday")  (datenoyearrev) should give `1388361600` (ie 2013-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1388361600, strtotime('31 December yesterday'), '');
		},

		'strtotime("31 December now")  (datenoyearrev) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31 December now'), '');
		},

		'strtotime("31 December noon")  (datenoyearrev) should give `1388491200` (ie 2013-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1388491200, strtotime('31 December noon'), '');
		},

		'strtotime("31 December midnight")  (datenoyearrev) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31 December midnight'), '');
		},

		'strtotime("31 December today")  (datenoyearrev) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31 December today'), '');
		},

		'strtotime("31 December tomorrow")  (datenoyearrev) should give `1388534400` (ie 2014-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1388534400, strtotime('31 December tomorrow'), '');
		},

		'strtotime("31 December first day of")  (datenoyearrev) should give `1385856000` (ie 2013-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1385856000, strtotime('31 December first day of'), '');
		},

		'strtotime("31 December last day of")  (datenoyearrev) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31 December last day of'), '');
		},

		'strtotime(`first Tuesday of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2013-12-03 00:00:00)':  function () {
			Y.Assert.areSame(1386028800, strtotime('first Tuesday of 31 December'));
		},

		'strtotime(`next Thursday of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2013-12-05 00:00:00)':  function () {
			Y.Assert.areSame(1386201600, strtotime('next Thursday of 31 December'));
		},

		'strtotime(`second Fri of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2013-12-13 00:00:00)':  function () {
			Y.Assert.areSame(1386892800, strtotime('second Fri of 31 December'));
		},

		'strtotime(`third Wednesday of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2013-12-18 00:00:00)':  function () {
			Y.Assert.areSame(1387324800, strtotime('third Wednesday of 31 December'));
		},

		'strtotime(`last Sat of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2013-12-28 00:00:00)':  function () {
			Y.Assert.areSame(1388188800, strtotime('last Sat of 31 December'));
		},

		'strtotime(`fourth Sunday of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2013-12-22 00:00:00)':  function () {
			Y.Assert.areSame(1387670400, strtotime('fourth Sunday of 31 December'));
		},

		'strtotime(`fifth Monday of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2013-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1388361600, strtotime('fifth Monday of 31 December'));
		},

		'strtotime(`sixth Mon of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2014-01-06 00:00:00)':  function () {
			Y.Assert.areSame(1388966400, strtotime('sixth Mon of 31 December'));
		},

		'strtotime(`seventh Tue of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2014-01-14 00:00:00)':  function () {
			Y.Assert.areSame(1389657600, strtotime('seventh Tue of 31 December'));
		},

		'strtotime(`eighth Wed of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2014-01-22 00:00:00)':  function () {
			Y.Assert.areSame(1390348800, strtotime('eighth Wed of 31 December'));
		},

		'strtotime(`ninth Thu of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2014-01-30 00:00:00)':  function () {
			Y.Assert.areSame(1391040000, strtotime('ninth Thu of 31 December'));
		},

		'strtotime(`tenth Sat of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2014-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1391817600, strtotime('tenth Sat of 31 December'));
		},

		'strtotime(`eleventh Friday of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2014-02-14 00:00:00)':  function () {
			Y.Assert.areSame(1392336000, strtotime('eleventh Friday of 31 December'));
		},

		'strtotime(`twelfth Saturday of 31 December`) (2012-12-31 23:59:59  datenoyearrev) should give ` (2014-02-22 00:00:00)':  function () {
			Y.Assert.areSame(1393027200, strtotime('twelfth Saturday of 31 December'));
		},

		'strtotime("31st Dec yesterday")  (datenoyearrev2) should give `1388361600` (ie 2013-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1388361600, strtotime('31st Dec yesterday'), '');
		},

		'strtotime("31st Dec now")  (datenoyearrev2) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31st Dec now'), '');
		},

		'strtotime("31st Dec noon")  (datenoyearrev2) should give `1388491200` (ie 2013-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1388491200, strtotime('31st Dec noon'), '');
		},

		'strtotime("31st Dec midnight")  (datenoyearrev2) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31st Dec midnight'), '');
		},

		'strtotime("31st Dec today")  (datenoyearrev2) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31st Dec today'), '');
		},

		'strtotime("31st Dec tomorrow")  (datenoyearrev2) should give `1388534400` (ie 2014-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1388534400, strtotime('31st Dec tomorrow'), '');
		},

		'strtotime("31st Dec first day of")  (datenoyearrev2) should give `1385856000` (ie 2013-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1385856000, strtotime('31st Dec first day of'), '');
		},

		'strtotime("31st Dec last day of")  (datenoyearrev2) should give `1388448000` (ie 2013-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1388448000, strtotime('31st Dec last day of'), '');
		},

		'strtotime(`first Tuesday of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2013-12-03 00:00:00)':  function () {
			Y.Assert.areSame(1386028800, strtotime('first Tuesday of 31st Dec'));
		},

		'strtotime(`next Thursday of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2013-12-05 00:00:00)':  function () {
			Y.Assert.areSame(1386201600, strtotime('next Thursday of 31st Dec'));
		},

		'strtotime(`second Fri of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2013-12-13 00:00:00)':  function () {
			Y.Assert.areSame(1386892800, strtotime('second Fri of 31st Dec'));
		},

		'strtotime(`third Wednesday of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2013-12-18 00:00:00)':  function () {
			Y.Assert.areSame(1387324800, strtotime('third Wednesday of 31st Dec'));
		},

		'strtotime(`last Sat of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2013-12-28 00:00:00)':  function () {
			Y.Assert.areSame(1388188800, strtotime('last Sat of 31st Dec'));
		},

		'strtotime(`fourth Sunday of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2013-12-22 00:00:00)':  function () {
			Y.Assert.areSame(1387670400, strtotime('fourth Sunday of 31st Dec'));
		},

		'strtotime(`fifth Monday of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2013-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1388361600, strtotime('fifth Monday of 31st Dec'));
		},

		'strtotime(`sixth Mon of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2014-01-06 00:00:00)':  function () {
			Y.Assert.areSame(1388966400, strtotime('sixth Mon of 31st Dec'));
		},

		'strtotime(`seventh Tue of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2014-01-14 00:00:00)':  function () {
			Y.Assert.areSame(1389657600, strtotime('seventh Tue of 31st Dec'));
		},

		'strtotime(`eighth Wed of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2014-01-22 00:00:00)':  function () {
			Y.Assert.areSame(1390348800, strtotime('eighth Wed of 31st Dec'));
		},

		'strtotime(`ninth Thu of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2014-01-30 00:00:00)':  function () {
			Y.Assert.areSame(1391040000, strtotime('ninth Thu of 31st Dec'));
		},

		'strtotime(`tenth Sat of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2014-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1391817600, strtotime('tenth Sat of 31st Dec'));
		},

		'strtotime(`eleventh Friday of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2014-02-14 00:00:00)':  function () {
			Y.Assert.areSame(1392336000, strtotime('eleventh Friday of 31st Dec'));
		},

		'strtotime(`twelfth Saturday of 31st Dec`) (2012-12-31 23:59:59  datenoyearrev2) should give ` (2014-02-22 00:00:00)':  function () {
			Y.Assert.areSame(1393027200, strtotime('twelfth Saturday of 31st Dec'));
		},

		'strtotime("20121231 yesterday")  (datenocolon) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('20121231 yesterday'), '');
		},

		'strtotime("20121231 now")  (datenocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231 now'), '');
		},

		'strtotime("20121231 noon")  (datenocolon) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('20121231 noon'), '');
		},

		'strtotime("20121231 midnight")  (datenocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231 midnight'), '');
		},

		'strtotime("20121231 today")  (datenocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231 today'), '');
		},

		'strtotime("20121231 tomorrow")  (datenocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20121231 tomorrow'), '');
		},

		'strtotime("20121231 first day of")  (datenocolon) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('20121231 first day of'), '');
		},

		'strtotime("20121231 last day of")  (datenocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231 last day of'), '');
		},

		'strtotime(`first Tuesday of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 20121231'));
		},

		'strtotime(`next Thursday of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 20121231'));
		},

		'strtotime(`second Fri of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 20121231'));
		},

		'strtotime(`third Wednesday of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 20121231'));
		},

		'strtotime(`last Sat of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 20121231'));
		},

		'strtotime(`fourth Sunday of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 20121231'));
		},

		'strtotime(`fifth Monday of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 20121231'));
		},

		'strtotime(`sixth Mon of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 20121231'));
		},

		'strtotime(`seventh Tue of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 20121231'));
		},

		'strtotime(`eighth Wed of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 20121231'));
		},

		'strtotime(`ninth Thu of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 20121231'));
		},

		'strtotime(`tenth Sat of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 20121231'));
		},

		'strtotime(`eleventh Friday of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 20121231'));
		},

		'strtotime(`twelfth Saturday of 20121231`) (2012-12-31 23:59:59  datenocolon) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 20121231'));
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 yesterday")  (soap) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012-12-31T23:59:59.000000GMT+00:00 yesterday'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 now")  (soap) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012-12-31T23:59:59.000000GMT+00:00 now'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 noon")  (soap) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('2012-12-31T23:59:59.000000GMT+00:00 noon'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 midnight")  (soap) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31T23:59:59.000000GMT+00:00 midnight'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 today")  (soap) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31T23:59:59.000000GMT+00:00 today'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 tomorrow")  (soap) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2012-12-31T23:59:59.000000GMT+00:00 tomorrow'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 first day of")  (soap) should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('2012-12-31T23:59:59.000000GMT+00:00 first day of'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+00:00 last day of")  (soap) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012-12-31T23:59:59.000000GMT+00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2012-12-04 23:59:59)':  function () {
			Y.Assert.areSame(1354665599, strtotime('first Tuesday of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`next Thursday of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2012-12-06 23:59:59)':  function () {
			Y.Assert.areSame(1354838399, strtotime('next Thursday of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`second Fri of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2012-12-14 23:59:59)':  function () {
			Y.Assert.areSame(1355529599, strtotime('second Fri of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`third Wednesday of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2012-12-19 23:59:59)':  function () {
			Y.Assert.areSame(1355961599, strtotime('third Wednesday of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`last Sat of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2012-12-29 23:59:59)':  function () {
			Y.Assert.areSame(1356825599, strtotime('last Sat of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`fourth Sunday of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2012-12-23 23:59:59)':  function () {
			Y.Assert.areSame(1356307199, strtotime('fourth Sunday of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`fifth Monday of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('fifth Monday of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`sixth Mon of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2013-01-07 23:59:59)':  function () {
			Y.Assert.areSame(1357603199, strtotime('sixth Mon of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`seventh Tue of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2013-01-15 23:59:59)':  function () {
			Y.Assert.areSame(1358294399, strtotime('seventh Tue of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`eighth Wed of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2013-01-23 23:59:59)':  function () {
			Y.Assert.areSame(1358985599, strtotime('eighth Wed of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`ninth Thu of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2013-01-31 23:59:59)':  function () {
			Y.Assert.areSame(1359676799, strtotime('ninth Thu of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`tenth Sat of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2013-02-02 23:59:59)':  function () {
			Y.Assert.areSame(1359849599, strtotime('tenth Sat of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`eleventh Friday of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2013-02-15 23:59:59)':  function () {
			Y.Assert.areSame(1360972799, strtotime('eleventh Friday of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime(`twelfth Saturday of 2012-12-31T23:59:59.000000GMT+00:00`) (2012-12-31 23:59:59  soap) should give ` (2013-02-16 23:59:59)':  function () {
			Y.Assert.areSame(1361059199, strtotime('twelfth Saturday of 2012-12-31T23:59:59.000000GMT+00:00'));
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 yesterday")  (soap2) should give `1356834600` (ie 2012-12-30 02:30:00)':  function () {
			Y.Assert.areSame(1356834600, strtotime('2012-12-31T23:59:59.000000GMT-2:30 yesterday'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 now")  (soap2) should give `1357007399` (ie 2013-01-01 02:29:59)':  function () {
			Y.Assert.areSame(1357007399, strtotime('2012-12-31T23:59:59.000000GMT-2:30 now'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 noon")  (soap2) should give `1356964200` (ie 2012-12-31 14:30:00)':  function () {
			Y.Assert.areSame(1356964200, strtotime('2012-12-31T23:59:59.000000GMT-2:30 noon'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 midnight")  (soap2) should give `1356921000` (ie 2012-12-31 02:30:00)':  function () {
			Y.Assert.areSame(1356921000, strtotime('2012-12-31T23:59:59.000000GMT-2:30 midnight'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 today")  (soap2) should give `1356921000` (ie 2012-12-31 02:30:00)':  function () {
			Y.Assert.areSame(1356921000, strtotime('2012-12-31T23:59:59.000000GMT-2:30 today'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 tomorrow")  (soap2) should give `1357007400` (ie 2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('2012-12-31T23:59:59.000000GMT-2:30 tomorrow'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 first day of")  (soap2) should give `1354415399` (ie 2012-12-02 02:29:59)':  function () {
			Y.Assert.areSame(1354415399, strtotime('2012-12-31T23:59:59.000000GMT-2:30 first day of'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT-2:30 last day of")  (soap2) should give `1357007399` (ie 2013-01-01 02:29:59)':  function () {
			Y.Assert.areSame(1357007399, strtotime('2012-12-31T23:59:59.000000GMT-2:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2012-12-05 02:29:59)':  function () {
			Y.Assert.areSame(1354674599, strtotime('first Tuesday of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`next Thursday of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2012-12-07 02:29:59)':  function () {
			Y.Assert.areSame(1354847399, strtotime('next Thursday of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`second Fri of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2012-12-15 02:29:59)':  function () {
			Y.Assert.areSame(1355538599, strtotime('second Fri of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`third Wednesday of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2012-12-20 02:29:59)':  function () {
			Y.Assert.areSame(1355970599, strtotime('third Wednesday of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`last Sat of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2012-12-30 02:29:59)':  function () {
			Y.Assert.areSame(1356834599, strtotime('last Sat of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`fourth Sunday of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2012-12-24 02:29:59)':  function () {
			Y.Assert.areSame(1356316199, strtotime('fourth Sunday of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`fifth Monday of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-01-01 02:29:59)':  function () {
			Y.Assert.areSame(1357007399, strtotime('fifth Monday of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`sixth Mon of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-01-08 02:29:59)':  function () {
			Y.Assert.areSame(1357612199, strtotime('sixth Mon of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`seventh Tue of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-01-16 02:29:59)':  function () {
			Y.Assert.areSame(1358303399, strtotime('seventh Tue of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`eighth Wed of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-01-24 02:29:59)':  function () {
			Y.Assert.areSame(1358994599, strtotime('eighth Wed of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`ninth Thu of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-02-01 02:29:59)':  function () {
			Y.Assert.areSame(1359685799, strtotime('ninth Thu of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`tenth Sat of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-02-03 02:29:59)':  function () {
			Y.Assert.areSame(1359858599, strtotime('tenth Sat of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`eleventh Friday of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-02-16 02:29:59)':  function () {
			Y.Assert.areSame(1360981799, strtotime('eleventh Friday of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime(`twelfth Saturday of 2012-12-31T23:59:59.000000GMT-2:30`) (2012-12-31 23:59:59  soap2) should give ` (2013-02-17 02:29:59)':  function () {
			Y.Assert.areSame(1361068199, strtotime('twelfth Saturday of 2012-12-31T23:59:59.000000GMT-2:30'));
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 yesterday")  (soap3) should give `1356807600` (ie 2012-12-29 19:00:00)':  function () {
			Y.Assert.areSame(1356807600, strtotime('2012-12-31T23:59:59.000000GMT+5:00 yesterday'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 now")  (soap3) should give `1356980399` (ie 2012-12-31 18:59:59)':  function () {
			Y.Assert.areSame(1356980399, strtotime('2012-12-31T23:59:59.000000GMT+5:00 now'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 noon")  (soap3) should give `1356937200` (ie 2012-12-31 07:00:00)':  function () {
			Y.Assert.areSame(1356937200, strtotime('2012-12-31T23:59:59.000000GMT+5:00 noon'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 midnight")  (soap3) should give `1356894000` (ie 2012-12-30 19:00:00)':  function () {
			Y.Assert.areSame(1356894000, strtotime('2012-12-31T23:59:59.000000GMT+5:00 midnight'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 today")  (soap3) should give `1356894000` (ie 2012-12-30 19:00:00)':  function () {
			Y.Assert.areSame(1356894000, strtotime('2012-12-31T23:59:59.000000GMT+5:00 today'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 tomorrow")  (soap3) should give `1356980400` (ie 2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('2012-12-31T23:59:59.000000GMT+5:00 tomorrow'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 first day of")  (soap3) should give `1354388399` (ie 2012-12-01 18:59:59)':  function () {
			Y.Assert.areSame(1354388399, strtotime('2012-12-31T23:59:59.000000GMT+5:00 first day of'), '');
		},

		'strtotime("2012-12-31T23:59:59.000000GMT+5:00 last day of")  (soap3) should give `1356980399` (ie 2012-12-31 18:59:59)':  function () {
			Y.Assert.areSame(1356980399, strtotime('2012-12-31T23:59:59.000000GMT+5:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2012-12-04 18:59:59)':  function () {
			Y.Assert.areSame(1354647599, strtotime('first Tuesday of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`next Thursday of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2012-12-06 18:59:59)':  function () {
			Y.Assert.areSame(1354820399, strtotime('next Thursday of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`second Fri of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2012-12-14 18:59:59)':  function () {
			Y.Assert.areSame(1355511599, strtotime('second Fri of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`third Wednesday of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2012-12-19 18:59:59)':  function () {
			Y.Assert.areSame(1355943599, strtotime('third Wednesday of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`last Sat of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2012-12-29 18:59:59)':  function () {
			Y.Assert.areSame(1356807599, strtotime('last Sat of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`fourth Sunday of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2012-12-23 18:59:59)':  function () {
			Y.Assert.areSame(1356289199, strtotime('fourth Sunday of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`fifth Monday of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2012-12-31 18:59:59)':  function () {
			Y.Assert.areSame(1356980399, strtotime('fifth Monday of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`sixth Mon of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2013-01-07 18:59:59)':  function () {
			Y.Assert.areSame(1357585199, strtotime('sixth Mon of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`seventh Tue of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2013-01-15 18:59:59)':  function () {
			Y.Assert.areSame(1358276399, strtotime('seventh Tue of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`eighth Wed of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2013-01-23 18:59:59)':  function () {
			Y.Assert.areSame(1358967599, strtotime('eighth Wed of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`ninth Thu of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2013-01-31 18:59:59)':  function () {
			Y.Assert.areSame(1359658799, strtotime('ninth Thu of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`tenth Sat of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2013-02-02 18:59:59)':  function () {
			Y.Assert.areSame(1359831599, strtotime('tenth Sat of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`eleventh Friday of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2013-02-15 18:59:59)':  function () {
			Y.Assert.areSame(1360954799, strtotime('eleventh Friday of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime(`twelfth Saturday of 2012-12-31T23:59:59.000000GMT+5:00`) (2012-12-31 23:59:59  soap3) should give ` (2013-02-16 18:59:59)':  function () {
			Y.Assert.areSame(1361041199, strtotime('twelfth Saturday of 2012-12-31T23:59:59.000000GMT+5:00'));
		},

		'strtotime("20121231T23:59:59 yesterday")  (xmlrpc) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('20121231T23:59:59 yesterday'), '');
		},

		'strtotime("20121231T23:59:59 now")  (xmlrpc) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('20121231T23:59:59 now'), '');
		},

		'strtotime("20121231T23:59:59 noon")  (xmlrpc) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('20121231T23:59:59 noon'), '');
		},

		'strtotime("20121231T23:59:59 midnight")  (xmlrpc) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231T23:59:59 midnight'), '');
		},

		'strtotime("20121231T23:59:59 today")  (xmlrpc) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231T23:59:59 today'), '');
		},

		'strtotime("20121231T23:59:59 tomorrow")  (xmlrpc) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20121231T23:59:59 tomorrow'), '');
		},

		'strtotime("20121231T23:59:59 first day of")  (xmlrpc) should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('20121231T23:59:59 first day of'), '');
		},

		'strtotime("20121231T23:59:59 last day of")  (xmlrpc) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('20121231T23:59:59 last day of'), '');
		},

		'strtotime(`first Tuesday of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2012-12-04 23:59:59)':  function () {
			Y.Assert.areSame(1354665599, strtotime('first Tuesday of 20121231T23:59:59'));
		},

		'strtotime(`next Thursday of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2012-12-06 23:59:59)':  function () {
			Y.Assert.areSame(1354838399, strtotime('next Thursday of 20121231T23:59:59'));
		},

		'strtotime(`second Fri of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2012-12-14 23:59:59)':  function () {
			Y.Assert.areSame(1355529599, strtotime('second Fri of 20121231T23:59:59'));
		},

		'strtotime(`third Wednesday of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2012-12-19 23:59:59)':  function () {
			Y.Assert.areSame(1355961599, strtotime('third Wednesday of 20121231T23:59:59'));
		},

		'strtotime(`last Sat of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2012-12-29 23:59:59)':  function () {
			Y.Assert.areSame(1356825599, strtotime('last Sat of 20121231T23:59:59'));
		},

		'strtotime(`fourth Sunday of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2012-12-23 23:59:59)':  function () {
			Y.Assert.areSame(1356307199, strtotime('fourth Sunday of 20121231T23:59:59'));
		},

		'strtotime(`fifth Monday of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('fifth Monday of 20121231T23:59:59'));
		},

		'strtotime(`sixth Mon of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2013-01-07 23:59:59)':  function () {
			Y.Assert.areSame(1357603199, strtotime('sixth Mon of 20121231T23:59:59'));
		},

		'strtotime(`seventh Tue of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2013-01-15 23:59:59)':  function () {
			Y.Assert.areSame(1358294399, strtotime('seventh Tue of 20121231T23:59:59'));
		},

		'strtotime(`eighth Wed of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2013-01-23 23:59:59)':  function () {
			Y.Assert.areSame(1358985599, strtotime('eighth Wed of 20121231T23:59:59'));
		},

		'strtotime(`ninth Thu of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2013-01-31 23:59:59)':  function () {
			Y.Assert.areSame(1359676799, strtotime('ninth Thu of 20121231T23:59:59'));
		},

		'strtotime(`tenth Sat of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2013-02-02 23:59:59)':  function () {
			Y.Assert.areSame(1359849599, strtotime('tenth Sat of 20121231T23:59:59'));
		},

		'strtotime(`eleventh Friday of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2013-02-15 23:59:59)':  function () {
			Y.Assert.areSame(1360972799, strtotime('eleventh Friday of 20121231T23:59:59'));
		},

		'strtotime(`twelfth Saturday of 20121231T23:59:59`) (2012-12-31 23:59:59  xmlrpc) should give ` (2013-02-16 23:59:59)':  function () {
			Y.Assert.areSame(1361059199, strtotime('twelfth Saturday of 20121231T23:59:59'));
		},

		'strtotime("20121231	235959 yesterday")  (xmlrpcnocolon) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('20121231	235959 yesterday'), '');
		},

		'strtotime("20121231	235959 now")  (xmlrpcnocolon) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('20121231	235959 now'), '');
		},

		'strtotime("20121231	235959 noon")  (xmlrpcnocolon) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('20121231	235959 noon'), '');
		},

		'strtotime("20121231	235959 midnight")  (xmlrpcnocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231	235959 midnight'), '');
		},

		'strtotime("20121231	235959 today")  (xmlrpcnocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20121231	235959 today'), '');
		},

		'strtotime("20121231	235959 tomorrow")  (xmlrpcnocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20121231	235959 tomorrow'), '');
		},

		'strtotime("20121231	235959 first day of")  (xmlrpcnocolon) should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('20121231	235959 first day of'), '');
		},

		'strtotime("20121231	235959 last day of")  (xmlrpcnocolon) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('20121231	235959 last day of'), '');
		},

		'strtotime(`first Tuesday of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2012-12-04 23:59:59)':  function () {
			Y.Assert.areSame(1354665599, strtotime('first Tuesday of 20121231	235959'));
		},

		'strtotime(`next Thursday of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2012-12-06 23:59:59)':  function () {
			Y.Assert.areSame(1354838399, strtotime('next Thursday of 20121231	235959'));
		},

		'strtotime(`second Fri of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2012-12-14 23:59:59)':  function () {
			Y.Assert.areSame(1355529599, strtotime('second Fri of 20121231	235959'));
		},

		'strtotime(`third Wednesday of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2012-12-19 23:59:59)':  function () {
			Y.Assert.areSame(1355961599, strtotime('third Wednesday of 20121231	235959'));
		},

		'strtotime(`last Sat of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2012-12-29 23:59:59)':  function () {
			Y.Assert.areSame(1356825599, strtotime('last Sat of 20121231	235959'));
		},

		'strtotime(`fourth Sunday of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2012-12-23 23:59:59)':  function () {
			Y.Assert.areSame(1356307199, strtotime('fourth Sunday of 20121231	235959'));
		},

		'strtotime(`fifth Monday of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('fifth Monday of 20121231	235959'));
		},

		'strtotime(`sixth Mon of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2013-01-07 23:59:59)':  function () {
			Y.Assert.areSame(1357603199, strtotime('sixth Mon of 20121231	235959'));
		},

		'strtotime(`seventh Tue of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2013-01-15 23:59:59)':  function () {
			Y.Assert.areSame(1358294399, strtotime('seventh Tue of 20121231	235959'));
		},

		'strtotime(`eighth Wed of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2013-01-23 23:59:59)':  function () {
			Y.Assert.areSame(1358985599, strtotime('eighth Wed of 20121231	235959'));
		},

		'strtotime(`ninth Thu of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2013-01-31 23:59:59)':  function () {
			Y.Assert.areSame(1359676799, strtotime('ninth Thu of 20121231	235959'));
		},

		'strtotime(`tenth Sat of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2013-02-02 23:59:59)':  function () {
			Y.Assert.areSame(1359849599, strtotime('tenth Sat of 20121231	235959'));
		},

		'strtotime(`eleventh Friday of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2013-02-15 23:59:59)':  function () {
			Y.Assert.areSame(1360972799, strtotime('eleventh Friday of 20121231	235959'));
		},

		'strtotime(`twelfth Saturday of 20121231	235959`) (2012-12-31 23:59:59  xmlrpcnocolon) should give ` (2013-02-16 23:59:59)':  function () {
			Y.Assert.areSame(1361059199, strtotime('twelfth Saturday of 20121231	235959'));
		},

		'strtotime("2012-12-31T23:59:59 yesterday")  (wddf) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012-12-31T23:59:59 yesterday'), '');
		},

		'strtotime("2012-12-31T23:59:59 now")  (wddf) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012-12-31T23:59:59 now'), '');
		},

		'strtotime("2012-12-31T23:59:59 noon")  (wddf) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('2012-12-31T23:59:59 noon'), '');
		},

		'strtotime("2012-12-31T23:59:59 midnight")  (wddf) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31T23:59:59 midnight'), '');
		},

		'strtotime("2012-12-31T23:59:59 today")  (wddf) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-12-31T23:59:59 today'), '');
		},

		'strtotime("2012-12-31T23:59:59 tomorrow")  (wddf) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2012-12-31T23:59:59 tomorrow'), '');
		},

		'strtotime("2012-12-31T23:59:59 first day of")  (wddf) should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('2012-12-31T23:59:59 first day of'), '');
		},

		'strtotime("2012-12-31T23:59:59 last day of")  (wddf) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012-12-31T23:59:59 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2012-12-04 23:59:59)':  function () {
			Y.Assert.areSame(1354665599, strtotime('first Tuesday of 2012-12-31T23:59:59'));
		},

		'strtotime(`next Thursday of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2012-12-06 23:59:59)':  function () {
			Y.Assert.areSame(1354838399, strtotime('next Thursday of 2012-12-31T23:59:59'));
		},

		'strtotime(`second Fri of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2012-12-14 23:59:59)':  function () {
			Y.Assert.areSame(1355529599, strtotime('second Fri of 2012-12-31T23:59:59'));
		},

		'strtotime(`third Wednesday of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2012-12-19 23:59:59)':  function () {
			Y.Assert.areSame(1355961599, strtotime('third Wednesday of 2012-12-31T23:59:59'));
		},

		'strtotime(`last Sat of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2012-12-29 23:59:59)':  function () {
			Y.Assert.areSame(1356825599, strtotime('last Sat of 2012-12-31T23:59:59'));
		},

		'strtotime(`fourth Sunday of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2012-12-23 23:59:59)':  function () {
			Y.Assert.areSame(1356307199, strtotime('fourth Sunday of 2012-12-31T23:59:59'));
		},

		'strtotime(`fifth Monday of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('fifth Monday of 2012-12-31T23:59:59'));
		},

		'strtotime(`sixth Mon of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2013-01-07 23:59:59)':  function () {
			Y.Assert.areSame(1357603199, strtotime('sixth Mon of 2012-12-31T23:59:59'));
		},

		'strtotime(`seventh Tue of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2013-01-15 23:59:59)':  function () {
			Y.Assert.areSame(1358294399, strtotime('seventh Tue of 2012-12-31T23:59:59'));
		},

		'strtotime(`eighth Wed of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2013-01-23 23:59:59)':  function () {
			Y.Assert.areSame(1358985599, strtotime('eighth Wed of 2012-12-31T23:59:59'));
		},

		'strtotime(`ninth Thu of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2013-01-31 23:59:59)':  function () {
			Y.Assert.areSame(1359676799, strtotime('ninth Thu of 2012-12-31T23:59:59'));
		},

		'strtotime(`tenth Sat of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2013-02-02 23:59:59)':  function () {
			Y.Assert.areSame(1359849599, strtotime('tenth Sat of 2012-12-31T23:59:59'));
		},

		'strtotime(`eleventh Friday of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2013-02-15 23:59:59)':  function () {
			Y.Assert.areSame(1360972799, strtotime('eleventh Friday of 2012-12-31T23:59:59'));
		},

		'strtotime(`twelfth Saturday of 2012-12-31T23:59:59`) (2012-12-31 23:59:59  wddf) should give ` (2013-02-16 23:59:59)':  function () {
			Y.Assert.areSame(1361059199, strtotime('twelfth Saturday of 2012-12-31T23:59:59'));
		},

		'strtotime("2012:12:31 23:59:59 yesterday")  (exif) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012:12:31 23:59:59 yesterday'), '');
		},

		'strtotime("2012:12:31 23:59:59 now")  (exif) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012:12:31 23:59:59 now'), '');
		},

		'strtotime("2012:12:31 23:59:59 noon")  (exif) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('2012:12:31 23:59:59 noon'), '');
		},

		'strtotime("2012:12:31 23:59:59 midnight")  (exif) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012:12:31 23:59:59 midnight'), '');
		},

		'strtotime("2012:12:31 23:59:59 today")  (exif) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012:12:31 23:59:59 today'), '');
		},

		'strtotime("2012:12:31 23:59:59 tomorrow")  (exif) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2012:12:31 23:59:59 tomorrow'), '');
		},

		'strtotime("2012:12:31 23:59:59 first day of")  (exif) should give `1354406399` (ie 2012-12-01 23:59:59)':  function () {
			Y.Assert.areSame(1354406399, strtotime('2012:12:31 23:59:59 first day of'), '');
		},

		'strtotime("2012:12:31 23:59:59 last day of")  (exif) should give `1356998399` (ie 2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('2012:12:31 23:59:59 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2012-12-04 23:59:59)':  function () {
			Y.Assert.areSame(1354665599, strtotime('first Tuesday of 2012:12:31 23:59:59'));
		},

		'strtotime(`next Thursday of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2012-12-06 23:59:59)':  function () {
			Y.Assert.areSame(1354838399, strtotime('next Thursday of 2012:12:31 23:59:59'));
		},

		'strtotime(`second Fri of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2012-12-14 23:59:59)':  function () {
			Y.Assert.areSame(1355529599, strtotime('second Fri of 2012:12:31 23:59:59'));
		},

		'strtotime(`third Wednesday of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2012-12-19 23:59:59)':  function () {
			Y.Assert.areSame(1355961599, strtotime('third Wednesday of 2012:12:31 23:59:59'));
		},

		'strtotime(`last Sat of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2012-12-29 23:59:59)':  function () {
			Y.Assert.areSame(1356825599, strtotime('last Sat of 2012:12:31 23:59:59'));
		},

		'strtotime(`fourth Sunday of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2012-12-23 23:59:59)':  function () {
			Y.Assert.areSame(1356307199, strtotime('fourth Sunday of 2012:12:31 23:59:59'));
		},

		'strtotime(`fifth Monday of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2012-12-31 23:59:59)':  function () {
			Y.Assert.areSame(1356998399, strtotime('fifth Monday of 2012:12:31 23:59:59'));
		},

		'strtotime(`sixth Mon of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2013-01-07 23:59:59)':  function () {
			Y.Assert.areSame(1357603199, strtotime('sixth Mon of 2012:12:31 23:59:59'));
		},

		'strtotime(`seventh Tue of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2013-01-15 23:59:59)':  function () {
			Y.Assert.areSame(1358294399, strtotime('seventh Tue of 2012:12:31 23:59:59'));
		},

		'strtotime(`eighth Wed of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2013-01-23 23:59:59)':  function () {
			Y.Assert.areSame(1358985599, strtotime('eighth Wed of 2012:12:31 23:59:59'));
		},

		'strtotime(`ninth Thu of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2013-01-31 23:59:59)':  function () {
			Y.Assert.areSame(1359676799, strtotime('ninth Thu of 2012:12:31 23:59:59'));
		},

		'strtotime(`tenth Sat of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2013-02-02 23:59:59)':  function () {
			Y.Assert.areSame(1359849599, strtotime('tenth Sat of 2012:12:31 23:59:59'));
		},

		'strtotime(`eleventh Friday of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2013-02-15 23:59:59)':  function () {
			Y.Assert.areSame(1360972799, strtotime('eleventh Friday of 2012:12:31 23:59:59'));
		},

		'strtotime(`twelfth Saturday of 2012:12:31 23:59:59`) (2012-12-31 23:59:59  exif) should give ` (2013-02-16 23:59:59)':  function () {
			Y.Assert.areSame(1361059199, strtotime('twelfth Saturday of 2012:12:31 23:59:59'));
		},

		'strtotime("2012.365 yesterday")  (pgydotd) should give `1356739200` (ie 2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('2012.365 yesterday'), '');
		},

		'strtotime("2012.365 now")  (pgydotd) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012.365 now'), '');
		},

		'strtotime("2012.365 noon")  (pgydotd) should give `1356868800` (ie 2012-12-30 12:00:00)':  function () {
			Y.Assert.areSame(1356868800, strtotime('2012.365 noon'), '');
		},

		'strtotime("2012.365 midnight")  (pgydotd) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012.365 midnight'), '');
		},

		'strtotime("2012.365 today")  (pgydotd) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012.365 today'), '');
		},

		'strtotime("2012.365 tomorrow")  (pgydotd) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012.365 tomorrow'), '');
		},

		'strtotime("2012.365 first day of")  (pgydotd) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012.365 first day of'), '');
		},

		'strtotime("2012.365 last day of")  (pgydotd) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012.365 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1325548800, strtotime('first Tuesday of 2012.365'));
		},

		'strtotime(`next Thursday of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-01-05 00:00:00)':  function () {
			Y.Assert.areSame(1325721600, strtotime('next Thursday of 2012.365'));
		},

		'strtotime(`second Fri of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-01-13 00:00:00)':  function () {
			Y.Assert.areSame(1326412800, strtotime('second Fri of 2012.365'));
		},

		'strtotime(`third Wednesday of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-01-18 00:00:00)':  function () {
			Y.Assert.areSame(1326844800, strtotime('third Wednesday of 2012.365'));
		},

		'strtotime(`last Sat of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-01-28 00:00:00)':  function () {
			Y.Assert.areSame(1327708800, strtotime('last Sat of 2012.365'));
		},

		'strtotime(`fourth Sunday of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-01-22 00:00:00)':  function () {
			Y.Assert.areSame(1327190400, strtotime('fourth Sunday of 2012.365'));
		},

		'strtotime(`fifth Monday of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-01-30 00:00:00)':  function () {
			Y.Assert.areSame(1327881600, strtotime('fifth Monday of 2012.365'));
		},

		'strtotime(`sixth Mon of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-02-06 00:00:00)':  function () {
			Y.Assert.areSame(1328486400, strtotime('sixth Mon of 2012.365'));
		},

		'strtotime(`seventh Tue of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-02-14 00:00:00)':  function () {
			Y.Assert.areSame(1329177600, strtotime('seventh Tue of 2012.365'));
		},

		'strtotime(`eighth Wed of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-02-22 00:00:00)':  function () {
			Y.Assert.areSame(1329868800, strtotime('eighth Wed of 2012.365'));
		},

		'strtotime(`ninth Thu of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('ninth Thu of 2012.365'));
		},

		'strtotime(`tenth Sat of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-03-10 00:00:00)':  function () {
			Y.Assert.areSame(1331337600, strtotime('tenth Sat of 2012.365'));
		},

		'strtotime(`eleventh Friday of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-03-16 00:00:00)':  function () {
			Y.Assert.areSame(1331856000, strtotime('eleventh Friday of 2012.365'));
		},

		'strtotime(`twelfth Saturday of 2012.365`) (2012-12-31 23:59:59  pgydotd) should give ` (2012-03-24 00:00:00)':  function () {
			Y.Assert.areSame(1332547200, strtotime('twelfth Saturday of 2012.365'));
		},

		'strtotime("2012W01-1 yesterday")  (isoweekday) should give `1325289600` (ie 2011-12-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1325289600, strtotime('2012W01-1 yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("2012W01-1 now")  (isoweekday) should give `1325462400` (ie 2012-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1325462400, strtotime('2012W01-1 now'), '');
		},

		'strtotime("2012W01-1 noon")  (isoweekday) should give `1325505600` (ie 2012-01-02 12:00:00)':  function () {
			Y.Assert.areSame(1325505600, strtotime('2012W01-1 noon'), '');
		},

		'strtotime("2012W01-1 midnight")  (isoweekday) should give `1325462400` (ie 2012-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1325462400, strtotime('2012W01-1 midnight'), '');
		},

		'strtotime("2012W01-1 today")  (isoweekday) should give `1325462400` (ie 2012-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1325462400, strtotime('2012W01-1 today'), '');
		},

		'strtotime("2012W01-1 tomorrow")  (isoweekday) should give `1325462400` (ie 2012-01-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1325462400, strtotime('2012W01-1 tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("2012W01-1 first day of")  (isoweekday) should give `1325376000` (ie 2012-01-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1325376000, strtotime('2012W01-1 first day of'), 'This is a suspected php bug.');
		},

		'strtotime("2012W01-1 last day of")  (isoweekday) should give `1327968000` (ie 2012-01-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1327968000, strtotime('2012W01-1 last day of'), 'This is a suspected php bug.');
		},

		'strtotime(`first Tuesday of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1325635200, strtotime('first Tuesday of 2012W01-1'));
		},

		'strtotime(`next Thursday of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-06 00:00:00)':  function () {
			Y.Assert.areNotSame(1325808000, strtotime('next Thursday of 2012W01-1'));
		},

		'strtotime(`second Fri of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-07 00:00:00)':  function () {
			Y.Assert.areNotSame(1325894400, strtotime('second Fri of 2012W01-1'));
		},

		'strtotime(`third Wednesday of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1325721600, strtotime('third Wednesday of 2012W01-1'));
		},

		'strtotime(`last Sat of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-02-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1328400000, strtotime('last Sat of 2012W01-1'));
		},

		'strtotime(`fourth Sunday of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1325462400, strtotime('fourth Sunday of 2012W01-1'));
		},

		'strtotime(`fifth Monday of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1325548800, strtotime('fifth Monday of 2012W01-1'));
		},

		'strtotime(`sixth Mon of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1325548800, strtotime('sixth Mon of 2012W01-1'));
		},

		'strtotime(`seventh Tue of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1325635200, strtotime('seventh Tue of 2012W01-1'));
		},

		'strtotime(`eighth Wed of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1325721600, strtotime('eighth Wed of 2012W01-1'));
		},

		'strtotime(`ninth Thu of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-06 00:00:00)':  function () {
			Y.Assert.areNotSame(1325808000, strtotime('ninth Thu of 2012W01-1'));
		},

		'strtotime(`tenth Sat of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-08 00:00:00)':  function () {
			Y.Assert.areNotSame(1325980800, strtotime('tenth Sat of 2012W01-1'));
		},

		'strtotime(`eleventh Friday of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-07 00:00:00)':  function () {
			Y.Assert.areNotSame(1325894400, strtotime('eleventh Friday of 2012W01-1'));
		},

		'strtotime(`twelfth Saturday of 2012W01-1`) (2012-12-31 23:59:59  isoweekday) should give ` (2012-01-08 00:00:00)':  function () {
			Y.Assert.areNotSame(1325980800, strtotime('twelfth Saturday of 2012W01-1'));
		},

		'strtotime("Dec-31-2012 yesterday")  (pgtextshort) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('Dec-31-2012 yesterday'), '');
		},

		'strtotime("Dec-31-2012 now")  (pgtextshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('Dec-31-2012 now'), '');
		},

		'strtotime("Dec-31-2012 noon")  (pgtextshort) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('Dec-31-2012 noon'), '');
		},

		'strtotime("Dec-31-2012 midnight")  (pgtextshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('Dec-31-2012 midnight'), '');
		},

		'strtotime("Dec-31-2012 today")  (pgtextshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('Dec-31-2012 today'), '');
		},

		'strtotime("Dec-31-2012 tomorrow")  (pgtextshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Dec-31-2012 tomorrow'), '');
		},

		'strtotime("Dec-31-2012 first day of")  (pgtextshort) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('Dec-31-2012 first day of'), '');
		},

		'strtotime("Dec-31-2012 last day of")  (pgtextshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('Dec-31-2012 last day of'), '');
		},

		'strtotime(`first Tuesday of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of Dec-31-2012'));
		},

		'strtotime(`next Thursday of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of Dec-31-2012'));
		},

		'strtotime(`second Fri of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of Dec-31-2012'));
		},

		'strtotime(`third Wednesday of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of Dec-31-2012'));
		},

		'strtotime(`last Sat of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of Dec-31-2012'));
		},

		'strtotime(`fourth Sunday of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of Dec-31-2012'));
		},

		'strtotime(`fifth Monday of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of Dec-31-2012'));
		},

		'strtotime(`sixth Mon of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of Dec-31-2012'));
		},

		'strtotime(`seventh Tue of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of Dec-31-2012'));
		},

		'strtotime(`eighth Wed of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of Dec-31-2012'));
		},

		'strtotime(`ninth Thu of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of Dec-31-2012'));
		},

		'strtotime(`tenth Sat of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of Dec-31-2012'));
		},

		'strtotime(`eleventh Friday of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of Dec-31-2012'));
		},

		'strtotime(`twelfth Saturday of Dec-31-2012`) (2012-12-31 23:59:59  pgtextshort) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of Dec-31-2012'));
		},

		'strtotime("2012-Dec-31 yesterday")  (pgtextreverse) should give `1356825600` (ie 2012-12-30 00:00:00)':  function () {
			Y.Assert.areSame(1356825600, strtotime('2012-Dec-31 yesterday'), '');
		},

		'strtotime("2012-Dec-31 now")  (pgtextreverse) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-Dec-31 now'), '');
		},

		'strtotime("2012-Dec-31 noon")  (pgtextreverse) should give `1356955200` (ie 2012-12-31 12:00:00)':  function () {
			Y.Assert.areSame(1356955200, strtotime('2012-Dec-31 noon'), '');
		},

		'strtotime("2012-Dec-31 midnight")  (pgtextreverse) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-Dec-31 midnight'), '');
		},

		'strtotime("2012-Dec-31 today")  (pgtextreverse) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-Dec-31 today'), '');
		},

		'strtotime("2012-Dec-31 tomorrow")  (pgtextreverse) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2012-Dec-31 tomorrow'), '');
		},

		'strtotime("2012-Dec-31 first day of")  (pgtextreverse) should give `1354320000` (ie 2012-12-01 00:00:00)':  function () {
			Y.Assert.areSame(1354320000, strtotime('2012-Dec-31 first day of'), '');
		},

		'strtotime("2012-Dec-31 last day of")  (pgtextreverse) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2012-Dec-31 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2012-12-04 00:00:00)':  function () {
			Y.Assert.areSame(1354579200, strtotime('first Tuesday of 2012-Dec-31'));
		},

		'strtotime(`next Thursday of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2012-12-06 00:00:00)':  function () {
			Y.Assert.areSame(1354752000, strtotime('next Thursday of 2012-Dec-31'));
		},

		'strtotime(`second Fri of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2012-12-14 00:00:00)':  function () {
			Y.Assert.areSame(1355443200, strtotime('second Fri of 2012-Dec-31'));
		},

		'strtotime(`third Wednesday of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2012-12-19 00:00:00)':  function () {
			Y.Assert.areSame(1355875200, strtotime('third Wednesday of 2012-Dec-31'));
		},

		'strtotime(`last Sat of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2012-12-29 00:00:00)':  function () {
			Y.Assert.areSame(1356739200, strtotime('last Sat of 2012-Dec-31'));
		},

		'strtotime(`fourth Sunday of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2012-12-23 00:00:00)':  function () {
			Y.Assert.areSame(1356220800, strtotime('fourth Sunday of 2012-Dec-31'));
		},

		'strtotime(`fifth Monday of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('fifth Monday of 2012-Dec-31'));
		},

		'strtotime(`sixth Mon of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areSame(1357516800, strtotime('sixth Mon of 2012-Dec-31'));
		},

		'strtotime(`seventh Tue of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2013-01-15 00:00:00)':  function () {
			Y.Assert.areSame(1358208000, strtotime('seventh Tue of 2012-Dec-31'));
		},

		'strtotime(`eighth Wed of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2013-01-23 00:00:00)':  function () {
			Y.Assert.areSame(1358899200, strtotime('eighth Wed of 2012-Dec-31'));
		},

		'strtotime(`ninth Thu of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('ninth Thu of 2012-Dec-31'));
		},

		'strtotime(`tenth Sat of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1359763200, strtotime('tenth Sat of 2012-Dec-31'));
		},

		'strtotime(`eleventh Friday of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2013-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1360886400, strtotime('eleventh Friday of 2012-Dec-31'));
		},

		'strtotime(`twelfth Saturday of 2012-Dec-31`) (2012-12-31 23:59:59  pgtextreverse) should give ` (2013-02-16 00:00:00)':  function () {
			Y.Assert.areSame(1360972800, strtotime('twelfth Saturday of 2012-Dec-31'));
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 yesterday")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 yesterday'), '');
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 now")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 now'), '');
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 noon")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 noon'), '');
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 midnight")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 midnight'), '');
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 today")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 today'), '');
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 tomorrow")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 tomorrow'), '');
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 first day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 first day of'), '');
		},

		'strtotime("31/Dec/2012:23:59:59 GMT3:30 last day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('31/Dec/2012:23:59:59 GMT3:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`next Thursday of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`second Fri of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`third Wednesday of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`last Sat of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`fourth Sunday of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`fifth Monday of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`sixth Mon of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`seventh Tue of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`eighth Wed of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`ninth Thu of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`tenth Sat of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`eleventh Friday of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime(`twelfth Saturday of 31/Dec/2012:23:59:59 GMT3:30`) (2012-12-31 23:59:59  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 31/Dec/2012:23:59:59 GMT3:30'));
		},

		'strtotime("yesterday", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('yesterday', 1356998400));
		},

		'strtotime("2013/01/01 yesterday")  (iso8601dateslash) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013/01/01 yesterday'), '');
		},

		'strtotime("now", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('now', 1356998400));
		},

		'strtotime("2013/01/01 now")  (iso8601dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 now'), '');
		},

		'strtotime("noon", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('noon', 1356998400));
		},

		'strtotime("2013/01/01 noon")  (iso8601dateslash) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013/01/01 noon'), '');
		},

		'strtotime("midnight", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('midnight', 1356998400));
		},

		'strtotime("2013/01/01 midnight")  (iso8601dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 midnight'), '');
		},

		'strtotime("today", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('today', 1356998400));
		},

		'strtotime("2013/01/01 today")  (iso8601dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 today'), '');
		},

		'strtotime("tomorrow", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('tomorrow', 1356998400));
		},

		'strtotime("2013/01/01 tomorrow")  (iso8601dateslash) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013/01/01 tomorrow'), '');
		},

		'strtotime("first day of", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first day of', 1356998400));
		},

		'strtotime("2013/01/01 first day of")  (iso8601dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/01 first day of'), '');
		},

		'strtotime("last day of", 1356998400)  (originally `2013-01-01 00:00:00` Y/m/d H:i:s Australia/Lord_Howe)  should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('last day of', 1356998400));
		},

		'strtotime("2013/01/01 last day of")  (iso8601dateslash) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013/01/01 last day of'), '');
		},

		'strtotime(`first Tuesday of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998400'));
		},

		'strtotime(`first Tuesday of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013/01/01'));
		},

		'strtotime(`next Thursday of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998400'));
		},

		'strtotime(`next Thursday of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013/01/01'));
		},

		'strtotime(`second Fri of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998400'));
		},

		'strtotime(`second Fri of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013/01/01'));
		},

		'strtotime(`third Wednesday of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998400'));
		},

		'strtotime(`third Wednesday of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013/01/01'));
		},

		'strtotime(`last Sat of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998400'));
		},

		'strtotime(`last Sat of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013/01/01'));
		},

		'strtotime(`fourth Sunday of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998400'));
		},

		'strtotime(`fourth Sunday of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013/01/01'));
		},

		'strtotime(`fifth Monday of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998400'));
		},

		'strtotime(`fifth Monday of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013/01/01'));
		},

		'strtotime(`sixth Mon of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998400'));
		},

		'strtotime(`sixth Mon of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013/01/01'));
		},

		'strtotime(`seventh Tue of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998400'));
		},

		'strtotime(`seventh Tue of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013/01/01'));
		},

		'strtotime(`eighth Wed of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998400'));
		},

		'strtotime(`eighth Wed of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013/01/01'));
		},

		'strtotime(`ninth Thu of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998400'));
		},

		'strtotime(`ninth Thu of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013/01/01'));
		},

		'strtotime(`tenth Sat of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998400'));
		},

		'strtotime(`tenth Sat of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013/01/01'));
		},

		'strtotime(`eleventh Friday of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998400'));
		},

		'strtotime(`eleventh Friday of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013/01/01'));
		},

		'strtotime(`twelfth Saturday of 1356998400`) (2013-01-01 00:00:00  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998400'));
		},

		'strtotime(`twelfth Saturday of 2013/01/01`) (2013-01-01 00:00:01  iso8601dateslash) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013/01/01'));
		},

		'strtotime("01/01 yesterday")  (american short) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('01/01 yesterday'), '');
		},

		'strtotime("01/01 now")  (american short) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01 now'), '');
		},

		'strtotime("01/01 noon")  (american short) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('01/01 noon'), '');
		},

		'strtotime("01/01 midnight")  (american short) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01 midnight'), '');
		},

		'strtotime("01/01 today")  (american short) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01 today'), '');
		},

		'strtotime("01/01 tomorrow")  (american short) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('01/01 tomorrow'), '');
		},

		'strtotime("01/01 first day of")  (american short) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01 first day of'), '');
		},

		'strtotime("01/01 last day of")  (american short) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('01/01 last day of'), '');
		},

		'strtotime(`first Tuesday of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 01/01'));
		},

		'strtotime(`next Thursday of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 01/01'));
		},

		'strtotime(`second Fri of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 01/01'));
		},

		'strtotime(`third Wednesday of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 01/01'));
		},

		'strtotime(`last Sat of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 01/01'));
		},

		'strtotime(`fourth Sunday of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 01/01'));
		},

		'strtotime(`fifth Monday of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 01/01'));
		},

		'strtotime(`sixth Mon of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 01/01'));
		},

		'strtotime(`seventh Tue of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 01/01'));
		},

		'strtotime(`eighth Wed of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 01/01'));
		},

		'strtotime(`ninth Thu of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 01/01'));
		},

		'strtotime(`tenth Sat of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 01/01'));
		},

		'strtotime(`eleventh Friday of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 01/01'));
		},

		'strtotime(`twelfth Saturday of 01/01`) (2013-01-01 00:00:01  american short) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 01/01'));
		},

		'strtotime("01/01/2013 yesterday")  (american) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('01/01/2013 yesterday'), '');
		},

		'strtotime("01/01/2013 now")  (american) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01/2013 now'), '');
		},

		'strtotime("01/01/2013 noon")  (american) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('01/01/2013 noon'), '');
		},

		'strtotime("01/01/2013 midnight")  (american) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01/2013 midnight'), '');
		},

		'strtotime("01/01/2013 today")  (american) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01/2013 today'), '');
		},

		'strtotime("01/01/2013 tomorrow")  (american) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('01/01/2013 tomorrow'), '');
		},

		'strtotime("01/01/2013 first day of")  (american) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01/01/2013 first day of'), '');
		},

		'strtotime("01/01/2013 last day of")  (american) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('01/01/2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 01/01/2013'));
		},

		'strtotime(`next Thursday of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 01/01/2013'));
		},

		'strtotime(`second Fri of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 01/01/2013'));
		},

		'strtotime(`third Wednesday of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 01/01/2013'));
		},

		'strtotime(`last Sat of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 01/01/2013'));
		},

		'strtotime(`fourth Sunday of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 01/01/2013'));
		},

		'strtotime(`fifth Monday of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 01/01/2013'));
		},

		'strtotime(`sixth Mon of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 01/01/2013'));
		},

		'strtotime(`seventh Tue of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 01/01/2013'));
		},

		'strtotime(`eighth Wed of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 01/01/2013'));
		},

		'strtotime(`ninth Thu of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 01/01/2013'));
		},

		'strtotime(`tenth Sat of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 01/01/2013'));
		},

		'strtotime(`eleventh Friday of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 01/01/2013'));
		},

		'strtotime(`twelfth Saturday of 01/01/2013`) (2013-01-01 00:00:01  american) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 01/01/2013'));
		},

		'strtotime("2013/1/01 yesterday")  (dateslash) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013/1/01 yesterday'), '');
		},

		'strtotime("2013/1/01 now")  (dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/1/01 now'), '');
		},

		'strtotime("2013/1/01 noon")  (dateslash) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013/1/01 noon'), '');
		},

		'strtotime("2013/1/01 midnight")  (dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/1/01 midnight'), '');
		},

		'strtotime("2013/1/01 today")  (dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/1/01 today'), '');
		},

		'strtotime("2013/1/01 tomorrow")  (dateslash) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013/1/01 tomorrow'), '');
		},

		'strtotime("2013/1/01 first day of")  (dateslash) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/1/01 first day of'), '');
		},

		'strtotime("2013/1/01 last day of")  (dateslash) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013/1/01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013/1/01'));
		},

		'strtotime(`next Thursday of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013/1/01'));
		},

		'strtotime(`second Fri of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013/1/01'));
		},

		'strtotime(`third Wednesday of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013/1/01'));
		},

		'strtotime(`last Sat of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013/1/01'));
		},

		'strtotime(`fourth Sunday of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013/1/01'));
		},

		'strtotime(`fifth Monday of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013/1/01'));
		},

		'strtotime(`sixth Mon of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013/1/01'));
		},

		'strtotime(`seventh Tue of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013/1/01'));
		},

		'strtotime(`eighth Wed of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013/1/01'));
		},

		'strtotime(`ninth Thu of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013/1/01'));
		},

		'strtotime(`tenth Sat of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013/1/01'));
		},

		'strtotime(`eleventh Friday of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013/1/01'));
		},

		'strtotime(`twelfth Saturday of 2013/1/01`) (2013-01-01 00:00:01  dateslash) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013/1/01'));
		},

		'strtotime("2013/01/1 yesterday")  (iso8601date4) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013/01/1 yesterday'), '');
		},

		'strtotime("2013/01/1 now")  (iso8601date4) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/1 now'), '');
		},

		'strtotime("2013/01/1 noon")  (iso8601date4) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013/01/1 noon'), '');
		},

		'strtotime("2013/01/1 midnight")  (iso8601date4) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/1 midnight'), '');
		},

		'strtotime("2013/01/1 today")  (iso8601date4) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/1 today'), '');
		},

		'strtotime("2013/01/1 tomorrow")  (iso8601date4) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013/01/1 tomorrow'), '');
		},

		'strtotime("2013/01/1 first day of")  (iso8601date4) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013/01/1 first day of'), '');
		},

		'strtotime("2013/01/1 last day of")  (iso8601date4) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013/01/1 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013/01/1'));
		},

		'strtotime(`next Thursday of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013/01/1'));
		},

		'strtotime(`second Fri of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013/01/1'));
		},

		'strtotime(`third Wednesday of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013/01/1'));
		},

		'strtotime(`last Sat of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013/01/1'));
		},

		'strtotime(`fourth Sunday of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013/01/1'));
		},

		'strtotime(`fifth Monday of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013/01/1'));
		},

		'strtotime(`sixth Mon of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013/01/1'));
		},

		'strtotime(`seventh Tue of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013/01/1'));
		},

		'strtotime(`eighth Wed of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013/01/1'));
		},

		'strtotime(`ninth Thu of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013/01/1'));
		},

		'strtotime(`tenth Sat of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013/01/1'));
		},

		'strtotime(`eleventh Friday of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013/01/1'));
		},

		'strtotime(`twelfth Saturday of 2013/01/1`) (2013-01-01 00:00:01  iso8601date4) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013/01/1'));
		},

		'strtotime("13-01-01 yesterday")  (iso8601date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('13-01-01 yesterday'), '');
		},

		'strtotime("13-01-01 now")  (iso8601date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('13-01-01 now'), '');
		},

		'strtotime("13-01-01 noon")  (iso8601date2) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('13-01-01 noon'), '');
		},

		'strtotime("13-01-01 midnight")  (iso8601date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('13-01-01 midnight'), '');
		},

		'strtotime("13-01-01 today")  (iso8601date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('13-01-01 today'), '');
		},

		'strtotime("13-01-01 tomorrow")  (iso8601date2) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('13-01-01 tomorrow'), '');
		},

		'strtotime("13-01-01 first day of")  (iso8601date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('13-01-01 first day of'), '');
		},

		'strtotime("13-01-01 last day of")  (iso8601date2) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('13-01-01 last day of'), '');
		},

		'strtotime(`first Tuesday of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 13-01-01'));
		},

		'strtotime(`next Thursday of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 13-01-01'));
		},

		'strtotime(`second Fri of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 13-01-01'));
		},

		'strtotime(`third Wednesday of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 13-01-01'));
		},

		'strtotime(`last Sat of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 13-01-01'));
		},

		'strtotime(`fourth Sunday of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 13-01-01'));
		},

		'strtotime(`fifth Monday of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 13-01-01'));
		},

		'strtotime(`sixth Mon of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 13-01-01'));
		},

		'strtotime(`seventh Tue of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 13-01-01'));
		},

		'strtotime(`eighth Wed of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 13-01-01'));
		},

		'strtotime(`ninth Thu of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 13-01-01'));
		},

		'strtotime(`tenth Sat of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 13-01-01'));
		},

		'strtotime(`eleventh Friday of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 13-01-01'));
		},

		'strtotime(`twelfth Saturday of 13-01-01`) (2013-01-01 00:00:01  iso8601date2) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 13-01-01'));
		},

		'strtotime("2013-01 yesterday")  (gnudateshorter) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013-01 yesterday'), '');
		},

		'strtotime("2013-01 now")  (gnudateshorter) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01 now'), '');
		},

		'strtotime("2013-01 noon")  (gnudateshorter) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013-01 noon'), '');
		},

		'strtotime("2013-01 midnight")  (gnudateshorter) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01 midnight'), '');
		},

		'strtotime("2013-01 today")  (gnudateshorter) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01 today'), '');
		},

		'strtotime("2013-01 tomorrow")  (gnudateshorter) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013-01 tomorrow'), '');
		},

		'strtotime("2013-01 first day of")  (gnudateshorter) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01 first day of'), '');
		},

		'strtotime("2013-01 last day of")  (gnudateshorter) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013-01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013-01'));
		},

		'strtotime(`next Thursday of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013-01'));
		},

		'strtotime(`second Fri of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013-01'));
		},

		'strtotime(`third Wednesday of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013-01'));
		},

		'strtotime(`last Sat of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013-01'));
		},

		'strtotime(`fourth Sunday of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013-01'));
		},

		'strtotime(`fifth Monday of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013-01'));
		},

		'strtotime(`sixth Mon of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013-01'));
		},

		'strtotime(`seventh Tue of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013-01'));
		},

		'strtotime(`eighth Wed of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013-01'));
		},

		'strtotime(`ninth Thu of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013-01'));
		},

		'strtotime(`tenth Sat of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013-01'));
		},

		'strtotime(`eleventh Friday of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013-01'));
		},

		'strtotime(`twelfth Saturday of 2013-01`) (2013-01-01 00:00:01  gnudateshorter) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013-01'));
		},

		'strtotime("2013-01-01 yesterday")  (gnudateshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013-01-01 yesterday'), '');
		},

		'strtotime("2013-01-01 now")  (gnudateshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01 now'), '');
		},

		'strtotime("2013-01-01 noon")  (gnudateshort) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013-01-01 noon'), '');
		},

		'strtotime("2013-01-01 midnight")  (gnudateshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01 midnight'), '');
		},

		'strtotime("2013-01-01 today")  (gnudateshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01 today'), '');
		},

		'strtotime("2013-01-01 tomorrow")  (gnudateshort) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013-01-01 tomorrow'), '');
		},

		'strtotime("2013-01-01 first day of")  (gnudateshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01 first day of'), '');
		},

		'strtotime("2013-01-01 last day of")  (gnudateshort) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013-01-01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013-01-01'));
		},

		'strtotime(`next Thursday of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013-01-01'));
		},

		'strtotime(`second Fri of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013-01-01'));
		},

		'strtotime(`third Wednesday of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013-01-01'));
		},

		'strtotime(`last Sat of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013-01-01'));
		},

		'strtotime(`fourth Sunday of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013-01-01'));
		},

		'strtotime(`fifth Monday of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013-01-01'));
		},

		'strtotime(`sixth Mon of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013-01-01'));
		},

		'strtotime(`seventh Tue of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013-01-01'));
		},

		'strtotime(`eighth Wed of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013-01-01'));
		},

		'strtotime(`ninth Thu of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013-01-01'));
		},

		'strtotime(`tenth Sat of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013-01-01'));
		},

		'strtotime(`eleventh Friday of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013-01-01'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01`) (2013-01-01 00:00:01  gnudateshort) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013-01-01'));
		},

		'strtotime("01 January 2013 yesterday")  (date full) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('01 January 2013 yesterday'), '');
		},

		'strtotime("01 January 2013 now")  (date full) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January 2013 now'), '');
		},

		'strtotime("01 January 2013 noon")  (date full) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('01 January 2013 noon'), '');
		},

		'strtotime("01 January 2013 midnight")  (date full) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January 2013 midnight'), '');
		},

		'strtotime("01 January 2013 today")  (date full) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January 2013 today'), '');
		},

		'strtotime("01 January 2013 tomorrow")  (date full) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('01 January 2013 tomorrow'), '');
		},

		'strtotime("01 January 2013 first day of")  (date full) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January 2013 first day of'), '');
		},

		'strtotime("01 January 2013 last day of")  (date full) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('01 January 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 01 January 2013'));
		},

		'strtotime(`next Thursday of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 01 January 2013'));
		},

		'strtotime(`second Fri of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 01 January 2013'));
		},

		'strtotime(`third Wednesday of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 01 January 2013'));
		},

		'strtotime(`last Sat of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 01 January 2013'));
		},

		'strtotime(`fourth Sunday of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 01 January 2013'));
		},

		'strtotime(`fifth Monday of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 01 January 2013'));
		},

		'strtotime(`sixth Mon of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 01 January 2013'));
		},

		'strtotime(`seventh Tue of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 01 January 2013'));
		},

		'strtotime(`eighth Wed of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 01 January 2013'));
		},

		'strtotime(`ninth Thu of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 01 January 2013'));
		},

		'strtotime(`tenth Sat of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 01 January 2013'));
		},

		'strtotime(`eleventh Friday of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 01 January 2013'));
		},

		'strtotime(`twelfth Saturday of 01 January 2013`) (2013-01-01 00:00:01  date full) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 01 January 2013'));
		},

		'strtotime("01st Jan. 2013 yesterday")  (date full2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('01st Jan. 2013 yesterday'), '');
		},

		'strtotime("01st Jan. 2013 now")  (date full2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan. 2013 now'), '');
		},

		'strtotime("01st Jan. 2013 noon")  (date full2) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('01st Jan. 2013 noon'), '');
		},

		'strtotime("01st Jan. 2013 midnight")  (date full2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan. 2013 midnight'), '');
		},

		'strtotime("01st Jan. 2013 today")  (date full2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan. 2013 today'), '');
		},

		'strtotime("01st Jan. 2013 tomorrow")  (date full2) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('01st Jan. 2013 tomorrow'), '');
		},

		'strtotime("01st Jan. 2013 first day of")  (date full2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan. 2013 first day of'), '');
		},

		'strtotime("01st Jan. 2013 last day of")  (date full2) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('01st Jan. 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 01st Jan. 2013'));
		},

		'strtotime(`next Thursday of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 01st Jan. 2013'));
		},

		'strtotime(`second Fri of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 01st Jan. 2013'));
		},

		'strtotime(`third Wednesday of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 01st Jan. 2013'));
		},

		'strtotime(`last Sat of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 01st Jan. 2013'));
		},

		'strtotime(`fourth Sunday of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 01st Jan. 2013'));
		},

		'strtotime(`fifth Monday of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 01st Jan. 2013'));
		},

		'strtotime(`sixth Mon of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 01st Jan. 2013'));
		},

		'strtotime(`seventh Tue of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 01st Jan. 2013'));
		},

		'strtotime(`eighth Wed of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 01st Jan. 2013'));
		},

		'strtotime(`ninth Thu of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 01st Jan. 2013'));
		},

		'strtotime(`tenth Sat of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 01st Jan. 2013'));
		},

		'strtotime(`eleventh Friday of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 01st Jan. 2013'));
		},

		'strtotime(`twelfth Saturday of 01st Jan. 2013`) (2013-01-01 00:00:01  date full2) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 01st Jan. 2013'));
		},

		'strtotime("1.01.2013 yesterday")  (pointed date) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('1.01.2013 yesterday'), '');
		},

		'strtotime("1.01.2013 now")  (pointed date) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('1.01.2013 now'), '');
		},

		'strtotime("1.01.2013 noon")  (pointed date) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('1.01.2013 noon'), '');
		},

		'strtotime("1.01.2013 midnight")  (pointed date) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('1.01.2013 midnight'), '');
		},

		'strtotime("1.01.2013 today")  (pointed date) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('1.01.2013 today'), '');
		},

		'strtotime("1.01.2013 tomorrow")  (pointed date) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('1.01.2013 tomorrow'), '');
		},

		'strtotime("1.01.2013 first day of")  (pointed date) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('1.01.2013 first day of'), '');
		},

		'strtotime("1.01.2013 last day of")  (pointed date) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('1.01.2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 1.01.2013'));
		},

		'strtotime(`next Thursday of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 1.01.2013'));
		},

		'strtotime(`second Fri of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 1.01.2013'));
		},

		'strtotime(`third Wednesday of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 1.01.2013'));
		},

		'strtotime(`last Sat of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 1.01.2013'));
		},

		'strtotime(`fourth Sunday of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 1.01.2013'));
		},

		'strtotime(`fifth Monday of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 1.01.2013'));
		},

		'strtotime(`sixth Mon of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 1.01.2013'));
		},

		'strtotime(`seventh Tue of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 1.01.2013'));
		},

		'strtotime(`eighth Wed of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 1.01.2013'));
		},

		'strtotime(`ninth Thu of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 1.01.2013'));
		},

		'strtotime(`tenth Sat of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 1.01.2013'));
		},

		'strtotime(`eleventh Friday of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 1.01.2013'));
		},

		'strtotime(`twelfth Saturday of 1.01.2013`) (2013-01-01 00:00:01  pointed date) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 1.01.2013'));
		},

		'strtotime("01-1-2013 yesterday")  (pointed date2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('01-1-2013 yesterday'), '');
		},

		'strtotime("01-1-2013 now")  (pointed date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01-1-2013 now'), '');
		},

		'strtotime("01-1-2013 noon")  (pointed date2) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('01-1-2013 noon'), '');
		},

		'strtotime("01-1-2013 midnight")  (pointed date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01-1-2013 midnight'), '');
		},

		'strtotime("01-1-2013 today")  (pointed date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01-1-2013 today'), '');
		},

		'strtotime("01-1-2013 tomorrow")  (pointed date2) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('01-1-2013 tomorrow'), '');
		},

		'strtotime("01-1-2013 first day of")  (pointed date2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01-1-2013 first day of'), '');
		},

		'strtotime("01-1-2013 last day of")  (pointed date2) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('01-1-2013 last day of'), '');
		},

		'strtotime(`first Tuesday of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 01-1-2013'));
		},

		'strtotime(`next Thursday of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 01-1-2013'));
		},

		'strtotime(`second Fri of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 01-1-2013'));
		},

		'strtotime(`third Wednesday of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 01-1-2013'));
		},

		'strtotime(`last Sat of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 01-1-2013'));
		},

		'strtotime(`fourth Sunday of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 01-1-2013'));
		},

		'strtotime(`fifth Monday of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 01-1-2013'));
		},

		'strtotime(`sixth Mon of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 01-1-2013'));
		},

		'strtotime(`seventh Tue of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 01-1-2013'));
		},

		'strtotime(`eighth Wed of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 01-1-2013'));
		},

		'strtotime(`ninth Thu of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 01-1-2013'));
		},

		'strtotime(`tenth Sat of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 01-1-2013'));
		},

		'strtotime(`eleventh Friday of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 01-1-2013'));
		},

		'strtotime(`twelfth Saturday of 01-1-2013`) (2013-01-01 00:00:01  pointed date2) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 01-1-2013'));
		},

		'strtotime("1.01.13 yesterday")  (pointed date3) should give `1357689600` (ie 2013-01-09 00:00:00)':  function () {
			Y.Assert.areSame(1357689600, strtotime('1.01.13 yesterday'), '');
		},

		'strtotime("1.01.13 now")  (pointed date3) should give `1357779673` (ie 2013-01-10 01:01:13)':  function () {
			Y.Assert.areSame(1357779673, strtotime('1.01.13 now'), '');
		},

		'strtotime("1.01.13 noon")  (pointed date3) should give `1357819200` (ie 2013-01-10 12:00:00)':  function () {
			Y.Assert.areSame(1357819200, strtotime('1.01.13 noon'), '');
		},

		'strtotime("1.01.13 midnight")  (pointed date3) should give `1357776000` (ie 2013-01-10 00:00:00)':  function () {
			Y.Assert.areSame(1357776000, strtotime('1.01.13 midnight'), '');
		},

		'strtotime("1.01.13 today")  (pointed date3) should give `1357776000` (ie 2013-01-10 00:00:00)':  function () {
			Y.Assert.areSame(1357776000, strtotime('1.01.13 today'), '');
		},

		'strtotime("1.01.13 tomorrow")  (pointed date3) should give `1357862400` (ie 2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('1.01.13 tomorrow'), '');
		},

		'strtotime("1.01.13 first day of")  (pointed date3) should give `1357002073` (ie 2013-01-01 01:01:13)':  function () {
			Y.Assert.areSame(1357002073, strtotime('1.01.13 first day of'), '');
		},

		'strtotime("1.01.13 last day of")  (pointed date3) should give `1359594073` (ie 2013-01-31 01:01:13)':  function () {
			Y.Assert.areSame(1359594073, strtotime('1.01.13 last day of'), '');
		},

		'strtotime(`first Tuesday of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-01-01 01:01:13)':  function () {
			Y.Assert.areSame(1357002073, strtotime('first Tuesday of 1.01.13'));
		},

		'strtotime(`next Thursday of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-01-03 01:01:13)':  function () {
			Y.Assert.areSame(1357174873, strtotime('next Thursday of 1.01.13'));
		},

		'strtotime(`second Fri of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-01-11 01:01:13)':  function () {
			Y.Assert.areSame(1357866073, strtotime('second Fri of 1.01.13'));
		},

		'strtotime(`third Wednesday of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-01-16 01:01:13)':  function () {
			Y.Assert.areSame(1358298073, strtotime('third Wednesday of 1.01.13'));
		},

		'strtotime(`last Sat of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-01-26 01:01:13)':  function () {
			Y.Assert.areSame(1359162073, strtotime('last Sat of 1.01.13'));
		},

		'strtotime(`fourth Sunday of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-01-27 01:01:13)':  function () {
			Y.Assert.areSame(1359248473, strtotime('fourth Sunday of 1.01.13'));
		},

		'strtotime(`fifth Monday of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-02-04 01:01:13)':  function () {
			Y.Assert.areSame(1359939673, strtotime('fifth Monday of 1.01.13'));
		},

		'strtotime(`sixth Mon of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-02-11 01:01:13)':  function () {
			Y.Assert.areSame(1360544473, strtotime('sixth Mon of 1.01.13'));
		},

		'strtotime(`seventh Tue of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-02-12 01:01:13)':  function () {
			Y.Assert.areSame(1360630873, strtotime('seventh Tue of 1.01.13'));
		},

		'strtotime(`eighth Wed of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-02-20 01:01:13)':  function () {
			Y.Assert.areSame(1361322073, strtotime('eighth Wed of 1.01.13'));
		},

		'strtotime(`ninth Thu of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-02-28 01:01:13)':  function () {
			Y.Assert.areSame(1362013273, strtotime('ninth Thu of 1.01.13'));
		},

		'strtotime(`tenth Sat of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-03-09 01:01:13)':  function () {
			Y.Assert.areSame(1362790873, strtotime('tenth Sat of 1.01.13'));
		},

		'strtotime(`eleventh Friday of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-03-15 01:01:13)':  function () {
			Y.Assert.areSame(1363309273, strtotime('eleventh Friday of 1.01.13'));
		},

		'strtotime(`twelfth Saturday of 1.01.13`) (2013-01-01 00:00:01  pointed date3) should give ` (2013-03-23 01:01:13)':  function () {
			Y.Assert.areSame(1364000473, strtotime('twelfth Saturday of 1.01.13'));
		},

		'strtotime("January 2013 yesterday")  (datenoday) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('January 2013 yesterday'), '');
		},

		'strtotime("January 2013 now")  (datenoday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 2013 now'), '');
		},

		'strtotime("January 2013 noon")  (datenoday) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('January 2013 noon'), '');
		},

		'strtotime("January 2013 midnight")  (datenoday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 2013 midnight'), '');
		},

		'strtotime("January 2013 today")  (datenoday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 2013 today'), '');
		},

		'strtotime("January 2013 tomorrow")  (datenoday) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('January 2013 tomorrow'), '');
		},

		'strtotime("January 2013 first day of")  (datenoday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 2013 first day of'), '');
		},

		'strtotime("January 2013 last day of")  (datenoday) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('January 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of January 2013'));
		},

		'strtotime(`next Thursday of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of January 2013'));
		},

		'strtotime(`second Fri of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of January 2013'));
		},

		'strtotime(`third Wednesday of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of January 2013'));
		},

		'strtotime(`last Sat of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of January 2013'));
		},

		'strtotime(`fourth Sunday of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of January 2013'));
		},

		'strtotime(`fifth Monday of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of January 2013'));
		},

		'strtotime(`sixth Mon of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of January 2013'));
		},

		'strtotime(`seventh Tue of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of January 2013'));
		},

		'strtotime(`eighth Wed of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of January 2013'));
		},

		'strtotime(`ninth Thu of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of January 2013'));
		},

		'strtotime(`tenth Sat of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of January 2013'));
		},

		'strtotime(`eleventh Friday of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of January 2013'));
		},

		'strtotime(`twelfth Saturday of January 2013`) (2013-01-01 00:00:01  datenoday) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of January 2013'));
		},

		'strtotime("Jan 2013 yesterday")  (datenoday2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('Jan 2013 yesterday'), '');
		},

		'strtotime("Jan 2013 now")  (datenoday2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 2013 now'), '');
		},

		'strtotime("Jan 2013 noon")  (datenoday2) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('Jan 2013 noon'), '');
		},

		'strtotime("Jan 2013 midnight")  (datenoday2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 2013 midnight'), '');
		},

		'strtotime("Jan 2013 today")  (datenoday2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 2013 today'), '');
		},

		'strtotime("Jan 2013 tomorrow")  (datenoday2) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('Jan 2013 tomorrow'), '');
		},

		'strtotime("Jan 2013 first day of")  (datenoday2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 2013 first day of'), '');
		},

		'strtotime("Jan 2013 last day of")  (datenoday2) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('Jan 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of Jan 2013'));
		},

		'strtotime(`next Thursday of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of Jan 2013'));
		},

		'strtotime(`second Fri of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of Jan 2013'));
		},

		'strtotime(`third Wednesday of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of Jan 2013'));
		},

		'strtotime(`last Sat of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of Jan 2013'));
		},

		'strtotime(`fourth Sunday of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of Jan 2013'));
		},

		'strtotime(`fifth Monday of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of Jan 2013'));
		},

		'strtotime(`sixth Mon of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of Jan 2013'));
		},

		'strtotime(`seventh Tue of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of Jan 2013'));
		},

		'strtotime(`eighth Wed of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of Jan 2013'));
		},

		'strtotime(`ninth Thu of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of Jan 2013'));
		},

		'strtotime(`tenth Sat of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of Jan 2013'));
		},

		'strtotime(`eleventh Friday of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of Jan 2013'));
		},

		'strtotime(`twelfth Saturday of Jan 2013`) (2013-01-01 00:00:01  datenoday2) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of Jan 2013'));
		},

		'strtotime("2013 January yesterday")  (datenodayrev) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013 January yesterday'), '');
		},

		'strtotime("2013 January now")  (datenodayrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 January now'), '');
		},

		'strtotime("2013 January noon")  (datenodayrev) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013 January noon'), '');
		},

		'strtotime("2013 January midnight")  (datenodayrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 January midnight'), '');
		},

		'strtotime("2013 January today")  (datenodayrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 January today'), '');
		},

		'strtotime("2013 January tomorrow")  (datenodayrev) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013 January tomorrow'), '');
		},

		'strtotime("2013 January first day of")  (datenodayrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 January first day of'), '');
		},

		'strtotime("2013 January last day of")  (datenodayrev) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013 January last day of'), '');
		},

		'strtotime(`first Tuesday of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013 January'));
		},

		'strtotime(`next Thursday of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013 January'));
		},

		'strtotime(`second Fri of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013 January'));
		},

		'strtotime(`third Wednesday of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013 January'));
		},

		'strtotime(`last Sat of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013 January'));
		},

		'strtotime(`fourth Sunday of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013 January'));
		},

		'strtotime(`fifth Monday of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013 January'));
		},

		'strtotime(`sixth Mon of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013 January'));
		},

		'strtotime(`seventh Tue of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013 January'));
		},

		'strtotime(`eighth Wed of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013 January'));
		},

		'strtotime(`ninth Thu of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013 January'));
		},

		'strtotime(`tenth Sat of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013 January'));
		},

		'strtotime(`eleventh Friday of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013 January'));
		},

		'strtotime(`twelfth Saturday of 2013 January`) (2013-01-01 00:00:01  datenodayrev) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013 January'));
		},

		'strtotime("2013 Jan yesterday")  (datenodayrev2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013 Jan yesterday'), '');
		},

		'strtotime("2013 Jan now")  (datenodayrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 Jan now'), '');
		},

		'strtotime("2013 Jan noon")  (datenodayrev2) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013 Jan noon'), '');
		},

		'strtotime("2013 Jan midnight")  (datenodayrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 Jan midnight'), '');
		},

		'strtotime("2013 Jan today")  (datenodayrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 Jan today'), '');
		},

		'strtotime("2013 Jan tomorrow")  (datenodayrev2) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013 Jan tomorrow'), '');
		},

		'strtotime("2013 Jan first day of")  (datenodayrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013 Jan first day of'), '');
		},

		'strtotime("2013 Jan last day of")  (datenodayrev2) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013 Jan last day of'), '');
		},

		'strtotime(`first Tuesday of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013 Jan'));
		},

		'strtotime(`next Thursday of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013 Jan'));
		},

		'strtotime(`second Fri of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013 Jan'));
		},

		'strtotime(`third Wednesday of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013 Jan'));
		},

		'strtotime(`last Sat of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013 Jan'));
		},

		'strtotime(`fourth Sunday of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013 Jan'));
		},

		'strtotime(`fifth Monday of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013 Jan'));
		},

		'strtotime(`sixth Mon of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013 Jan'));
		},

		'strtotime(`seventh Tue of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013 Jan'));
		},

		'strtotime(`eighth Wed of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013 Jan'));
		},

		'strtotime(`ninth Thu of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013 Jan'));
		},

		'strtotime(`tenth Sat of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013 Jan'));
		},

		'strtotime(`eleventh Friday of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013 Jan'));
		},

		'strtotime(`twelfth Saturday of 2013 Jan`) (2013-01-01 00:00:01  datenodayrev2) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013 Jan'));
		},

		'strtotime("January 01 2013 yesterday")  (datetextual) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('January 01 2013 yesterday'), '');
		},

		'strtotime("January 01 2013 now")  (datetextual) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 01 2013 now'), '');
		},

		'strtotime("January 01 2013 noon")  (datetextual) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('January 01 2013 noon'), '');
		},

		'strtotime("January 01 2013 midnight")  (datetextual) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 01 2013 midnight'), '');
		},

		'strtotime("January 01 2013 today")  (datetextual) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 01 2013 today'), '');
		},

		'strtotime("January 01 2013 tomorrow")  (datetextual) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('January 01 2013 tomorrow'), '');
		},

		'strtotime("January 01 2013 first day of")  (datetextual) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('January 01 2013 first day of'), '');
		},

		'strtotime("January 01 2013 last day of")  (datetextual) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('January 01 2013 last day of'), '');
		},

		'strtotime(`first Tuesday of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of January 01 2013'));
		},

		'strtotime(`next Thursday of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of January 01 2013'));
		},

		'strtotime(`second Fri of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of January 01 2013'));
		},

		'strtotime(`third Wednesday of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of January 01 2013'));
		},

		'strtotime(`last Sat of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of January 01 2013'));
		},

		'strtotime(`fourth Sunday of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of January 01 2013'));
		},

		'strtotime(`fifth Monday of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of January 01 2013'));
		},

		'strtotime(`sixth Mon of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of January 01 2013'));
		},

		'strtotime(`seventh Tue of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of January 01 2013'));
		},

		'strtotime(`eighth Wed of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of January 01 2013'));
		},

		'strtotime(`ninth Thu of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of January 01 2013'));
		},

		'strtotime(`tenth Sat of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of January 01 2013'));
		},

		'strtotime(`eleventh Friday of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of January 01 2013'));
		},

		'strtotime(`twelfth Saturday of January 01 2013`) (2013-01-01 00:00:01  datetextual) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of January 01 2013'));
		},

		'strtotime("Jan 01st yesterday")  (datetextual2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1356912000, strtotime('Jan 01st yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("Jan 01st now")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Jan 01st now'), 'This is a suspected php bug.');
		},

		'strtotime("Jan 01st noon")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Jan 01st noon'), 'This is a suspected php bug.');
		},

		'strtotime("Jan 01st midnight")  (datetextual2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 01st midnight'), '');
		},

		'strtotime("Jan 01st today")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Jan 01st today'), 'This is a suspected php bug.');
		},

		'strtotime("Jan 01st tomorrow")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Jan 01st tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("Jan 01st first day of")  (datetextual2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan 01st first day of'), '');
		},

		'strtotime("Jan 01st last day of")  (datetextual2) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('Jan 01st last day of'), '');
		},

		'strtotime(`first Tuesday of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of Jan 01st'));
		},

		'strtotime(`next Thursday of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of Jan 01st'));
		},

		'strtotime(`second Fri of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of Jan 01st'));
		},

		'strtotime(`third Wednesday of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of Jan 01st'));
		},

		'strtotime(`last Sat of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of Jan 01st'));
		},

		'strtotime(`fourth Sunday of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of Jan 01st'));
		},

		'strtotime(`fifth Monday of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of Jan 01st'));
		},

		'strtotime(`sixth Mon of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of Jan 01st'));
		},

		'strtotime(`seventh Tue of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of Jan 01st'));
		},

		'strtotime(`eighth Wed of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of Jan 01st'));
		},

		'strtotime(`ninth Thu of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of Jan 01st'));
		},

		'strtotime(`tenth Sat of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of Jan 01st'));
		},

		'strtotime(`eleventh Friday of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of Jan 01st'));
		},

		'strtotime(`twelfth Saturday of Jan 01st`) (2013-01-01 00:00:01  datetextual2) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of Jan 01st'));
		},

		'strtotime("01 January yesterday")  (datenoyearrev) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('01 January yesterday'), '');
		},

		'strtotime("01 January now")  (datenoyearrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January now'), '');
		},

		'strtotime("01 January noon")  (datenoyearrev) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('01 January noon'), '');
		},

		'strtotime("01 January midnight")  (datenoyearrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January midnight'), '');
		},

		'strtotime("01 January today")  (datenoyearrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January today'), '');
		},

		'strtotime("01 January tomorrow")  (datenoyearrev) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('01 January tomorrow'), '');
		},

		'strtotime("01 January first day of")  (datenoyearrev) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01 January first day of'), '');
		},

		'strtotime("01 January last day of")  (datenoyearrev) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('01 January last day of'), '');
		},

		'strtotime(`first Tuesday of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 01 January'));
		},

		'strtotime(`next Thursday of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 01 January'));
		},

		'strtotime(`second Fri of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 01 January'));
		},

		'strtotime(`third Wednesday of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 01 January'));
		},

		'strtotime(`last Sat of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 01 January'));
		},

		'strtotime(`fourth Sunday of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 01 January'));
		},

		'strtotime(`fifth Monday of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 01 January'));
		},

		'strtotime(`sixth Mon of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 01 January'));
		},

		'strtotime(`seventh Tue of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 01 January'));
		},

		'strtotime(`eighth Wed of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 01 January'));
		},

		'strtotime(`ninth Thu of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 01 January'));
		},

		'strtotime(`tenth Sat of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 01 January'));
		},

		'strtotime(`eleventh Friday of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 01 January'));
		},

		'strtotime(`twelfth Saturday of 01 January`) (2013-01-01 00:00:01  datenoyearrev) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 01 January'));
		},

		'strtotime("01st Jan yesterday")  (datenoyearrev2) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('01st Jan yesterday'), '');
		},

		'strtotime("01st Jan now")  (datenoyearrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan now'), '');
		},

		'strtotime("01st Jan noon")  (datenoyearrev2) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('01st Jan noon'), '');
		},

		'strtotime("01st Jan midnight")  (datenoyearrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan midnight'), '');
		},

		'strtotime("01st Jan today")  (datenoyearrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan today'), '');
		},

		'strtotime("01st Jan tomorrow")  (datenoyearrev2) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('01st Jan tomorrow'), '');
		},

		'strtotime("01st Jan first day of")  (datenoyearrev2) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('01st Jan first day of'), '');
		},

		'strtotime("01st Jan last day of")  (datenoyearrev2) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('01st Jan last day of'), '');
		},

		'strtotime(`first Tuesday of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 01st Jan'));
		},

		'strtotime(`next Thursday of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 01st Jan'));
		},

		'strtotime(`second Fri of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 01st Jan'));
		},

		'strtotime(`third Wednesday of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 01st Jan'));
		},

		'strtotime(`last Sat of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 01st Jan'));
		},

		'strtotime(`fourth Sunday of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 01st Jan'));
		},

		'strtotime(`fifth Monday of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 01st Jan'));
		},

		'strtotime(`sixth Mon of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 01st Jan'));
		},

		'strtotime(`seventh Tue of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 01st Jan'));
		},

		'strtotime(`eighth Wed of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 01st Jan'));
		},

		'strtotime(`ninth Thu of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 01st Jan'));
		},

		'strtotime(`tenth Sat of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 01st Jan'));
		},

		'strtotime(`eleventh Friday of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 01st Jan'));
		},

		'strtotime(`twelfth Saturday of 01st Jan`) (2013-01-01 00:00:01  datenoyearrev2) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 01st Jan'));
		},

		'strtotime("20130101 yesterday")  (datenocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20130101 yesterday'), '');
		},

		'strtotime("20130101 now")  (datenocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101 now'), '');
		},

		'strtotime("20130101 noon")  (datenocolon) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('20130101 noon'), '');
		},

		'strtotime("20130101 midnight")  (datenocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101 midnight'), '');
		},

		'strtotime("20130101 today")  (datenocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101 today'), '');
		},

		'strtotime("20130101 tomorrow")  (datenocolon) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('20130101 tomorrow'), '');
		},

		'strtotime("20130101 first day of")  (datenocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101 first day of'), '');
		},

		'strtotime("20130101 last day of")  (datenocolon) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('20130101 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 20130101'));
		},

		'strtotime(`next Thursday of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 20130101'));
		},

		'strtotime(`second Fri of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 20130101'));
		},

		'strtotime(`third Wednesday of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 20130101'));
		},

		'strtotime(`last Sat of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 20130101'));
		},

		'strtotime(`fourth Sunday of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 20130101'));
		},

		'strtotime(`fifth Monday of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 20130101'));
		},

		'strtotime(`sixth Mon of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 20130101'));
		},

		'strtotime(`seventh Tue of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 20130101'));
		},

		'strtotime(`eighth Wed of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 20130101'));
		},

		'strtotime(`ninth Thu of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 20130101'));
		},

		'strtotime(`tenth Sat of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 20130101'));
		},

		'strtotime(`eleventh Friday of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 20130101'));
		},

		'strtotime(`twelfth Saturday of 20130101`) (2013-01-01 00:00:01  datenocolon) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 20130101'));
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 yesterday")  (soap) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013-01-01T00:00:00.000000GMT+00:00 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 now")  (soap) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00.000000GMT+00:00 now'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 noon")  (soap) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013-01-01T00:00:00.000000GMT+00:00 noon'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 midnight")  (soap) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00.000000GMT+00:00 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 today")  (soap) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00.000000GMT+00:00 today'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 tomorrow")  (soap) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013-01-01T00:00:00.000000GMT+00:00 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 first day of")  (soap) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00.000000GMT+00:00 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+00:00 last day of")  (soap) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013-01-01T00:00:00.000000GMT+00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:00.000000GMT+00:00`) (2013-01-01 00:00:00  soap) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013-01-01T00:00:00.000000GMT+00:00'));
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 yesterday")  (soap2) should give `1356921000` (ie 2012-12-31 02:30:00)':  function () {
			Y.Assert.areSame(1356921000, strtotime('2013-01-01T00:00:00.000000GMT-2:30 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 now")  (soap2) should give `1357007400` (ie 2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('2013-01-01T00:00:00.000000GMT-2:30 now'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 noon")  (soap2) should give `1357050600` (ie 2013-01-01 14:30:00)':  function () {
			Y.Assert.areSame(1357050600, strtotime('2013-01-01T00:00:00.000000GMT-2:30 noon'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 midnight")  (soap2) should give `1357007400` (ie 2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('2013-01-01T00:00:00.000000GMT-2:30 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 today")  (soap2) should give `1357007400` (ie 2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('2013-01-01T00:00:00.000000GMT-2:30 today'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 tomorrow")  (soap2) should give `1357093800` (ie 2013-01-02 02:30:00)':  function () {
			Y.Assert.areSame(1357093800, strtotime('2013-01-01T00:00:00.000000GMT-2:30 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 first day of")  (soap2) should give `1357007400` (ie 2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('2013-01-01T00:00:00.000000GMT-2:30 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT-2:30 last day of")  (soap2) should give `1359599400` (ie 2013-01-31 02:30:00)':  function () {
			Y.Assert.areSame(1359599400, strtotime('2013-01-01T00:00:00.000000GMT-2:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('first Tuesday of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-01-03 02:30:00)':  function () {
			Y.Assert.areSame(1357180200, strtotime('next Thursday of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-01-11 02:30:00)':  function () {
			Y.Assert.areSame(1357871400, strtotime('second Fri of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-01-16 02:30:00)':  function () {
			Y.Assert.areSame(1358303400, strtotime('third Wednesday of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-01-26 02:30:00)':  function () {
			Y.Assert.areSame(1359167400, strtotime('last Sat of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-01-27 02:30:00)':  function () {
			Y.Assert.areSame(1359253800, strtotime('fourth Sunday of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-02-04 02:30:00)':  function () {
			Y.Assert.areSame(1359945000, strtotime('fifth Monday of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-02-11 02:30:00)':  function () {
			Y.Assert.areSame(1360549800, strtotime('sixth Mon of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-02-12 02:30:00)':  function () {
			Y.Assert.areSame(1360636200, strtotime('seventh Tue of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-02-20 02:30:00)':  function () {
			Y.Assert.areSame(1361327400, strtotime('eighth Wed of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-02-28 02:30:00)':  function () {
			Y.Assert.areSame(1362018600, strtotime('ninth Thu of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-03-09 02:30:00)':  function () {
			Y.Assert.areSame(1362796200, strtotime('tenth Sat of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-03-15 02:30:00)':  function () {
			Y.Assert.areSame(1363314600, strtotime('eleventh Friday of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:00.000000GMT-2:30`) (2013-01-01 00:00:00  soap2) should give ` (2013-03-23 02:30:00)':  function () {
			Y.Assert.areSame(1364005800, strtotime('twelfth Saturday of 2013-01-01T00:00:00.000000GMT-2:30'));
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 yesterday")  (soap3) should give `1356894000` (ie 2012-12-30 19:00:00)':  function () {
			Y.Assert.areSame(1356894000, strtotime('2013-01-01T00:00:00.000000GMT+5:00 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 now")  (soap3) should give `1356980400` (ie 2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('2013-01-01T00:00:00.000000GMT+5:00 now'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 noon")  (soap3) should give `1357023600` (ie 2013-01-01 07:00:00)':  function () {
			Y.Assert.areSame(1357023600, strtotime('2013-01-01T00:00:00.000000GMT+5:00 noon'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 midnight")  (soap3) should give `1356980400` (ie 2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('2013-01-01T00:00:00.000000GMT+5:00 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 today")  (soap3) should give `1356980400` (ie 2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('2013-01-01T00:00:00.000000GMT+5:00 today'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 tomorrow")  (soap3) should give `1357066800` (ie 2013-01-01 19:00:00)':  function () {
			Y.Assert.areSame(1357066800, strtotime('2013-01-01T00:00:00.000000GMT+5:00 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 first day of")  (soap3) should give `1356980400` (ie 2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('2013-01-01T00:00:00.000000GMT+5:00 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:00.000000GMT+5:00 last day of")  (soap3) should give `1359572400` (ie 2013-01-30 19:00:00)':  function () {
			Y.Assert.areSame(1359572400, strtotime('2013-01-01T00:00:00.000000GMT+5:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('first Tuesday of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-01-02 19:00:00)':  function () {
			Y.Assert.areSame(1357153200, strtotime('next Thursday of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-01-10 19:00:00)':  function () {
			Y.Assert.areSame(1357844400, strtotime('second Fri of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-01-15 19:00:00)':  function () {
			Y.Assert.areSame(1358276400, strtotime('third Wednesday of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-01-25 19:00:00)':  function () {
			Y.Assert.areSame(1359140400, strtotime('last Sat of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-01-26 19:00:00)':  function () {
			Y.Assert.areSame(1359226800, strtotime('fourth Sunday of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-02-03 19:00:00)':  function () {
			Y.Assert.areSame(1359918000, strtotime('fifth Monday of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-02-10 19:00:00)':  function () {
			Y.Assert.areSame(1360522800, strtotime('sixth Mon of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-02-11 19:00:00)':  function () {
			Y.Assert.areSame(1360609200, strtotime('seventh Tue of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-02-19 19:00:00)':  function () {
			Y.Assert.areSame(1361300400, strtotime('eighth Wed of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-02-27 19:00:00)':  function () {
			Y.Assert.areSame(1361991600, strtotime('ninth Thu of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-03-08 19:00:00)':  function () {
			Y.Assert.areSame(1362769200, strtotime('tenth Sat of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-03-14 19:00:00)':  function () {
			Y.Assert.areSame(1363287600, strtotime('eleventh Friday of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:00.000000GMT+5:00`) (2013-01-01 00:00:00  soap3) should give ` (2013-03-22 19:00:00)':  function () {
			Y.Assert.areSame(1363978800, strtotime('twelfth Saturday of 2013-01-01T00:00:00.000000GMT+5:00'));
		},

		'strtotime("20130101T00:00:00 yesterday")  (xmlrpc) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20130101T00:00:00 yesterday'), '');
		},

		'strtotime("20130101T00:00:00 now")  (xmlrpc) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101T00:00:00 now'), '');
		},

		'strtotime("20130101T00:00:00 noon")  (xmlrpc) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('20130101T00:00:00 noon'), '');
		},

		'strtotime("20130101T00:00:00 midnight")  (xmlrpc) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101T00:00:00 midnight'), '');
		},

		'strtotime("20130101T00:00:00 today")  (xmlrpc) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101T00:00:00 today'), '');
		},

		'strtotime("20130101T00:00:00 tomorrow")  (xmlrpc) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('20130101T00:00:00 tomorrow'), '');
		},

		'strtotime("20130101T00:00:00 first day of")  (xmlrpc) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101T00:00:00 first day of'), '');
		},

		'strtotime("20130101T00:00:00 last day of")  (xmlrpc) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('20130101T00:00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 20130101T00:00:00'));
		},

		'strtotime(`next Thursday of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 20130101T00:00:00'));
		},

		'strtotime(`second Fri of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 20130101T00:00:00'));
		},

		'strtotime(`third Wednesday of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 20130101T00:00:00'));
		},

		'strtotime(`last Sat of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 20130101T00:00:00'));
		},

		'strtotime(`fourth Sunday of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 20130101T00:00:00'));
		},

		'strtotime(`fifth Monday of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 20130101T00:00:00'));
		},

		'strtotime(`sixth Mon of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 20130101T00:00:00'));
		},

		'strtotime(`seventh Tue of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 20130101T00:00:00'));
		},

		'strtotime(`eighth Wed of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 20130101T00:00:00'));
		},

		'strtotime(`ninth Thu of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 20130101T00:00:00'));
		},

		'strtotime(`tenth Sat of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 20130101T00:00:00'));
		},

		'strtotime(`eleventh Friday of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 20130101T00:00:00'));
		},

		'strtotime(`twelfth Saturday of 20130101T00:00:00`) (2013-01-01 00:00:00  xmlrpc) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 20130101T00:00:00'));
		},

		'strtotime("20130101	000000 yesterday")  (xmlrpcnocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20130101	000000 yesterday'), '');
		},

		'strtotime("20130101	000000 now")  (xmlrpcnocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101	000000 now'), '');
		},

		'strtotime("20130101	000000 noon")  (xmlrpcnocolon) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('20130101	000000 noon'), '');
		},

		'strtotime("20130101	000000 midnight")  (xmlrpcnocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101	000000 midnight'), '');
		},

		'strtotime("20130101	000000 today")  (xmlrpcnocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101	000000 today'), '');
		},

		'strtotime("20130101	000000 tomorrow")  (xmlrpcnocolon) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('20130101	000000 tomorrow'), '');
		},

		'strtotime("20130101	000000 first day of")  (xmlrpcnocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101	000000 first day of'), '');
		},

		'strtotime("20130101	000000 last day of")  (xmlrpcnocolon) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('20130101	000000 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 20130101	000000'));
		},

		'strtotime(`next Thursday of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 20130101	000000'));
		},

		'strtotime(`second Fri of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 20130101	000000'));
		},

		'strtotime(`third Wednesday of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 20130101	000000'));
		},

		'strtotime(`last Sat of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 20130101	000000'));
		},

		'strtotime(`fourth Sunday of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 20130101	000000'));
		},

		'strtotime(`fifth Monday of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 20130101	000000'));
		},

		'strtotime(`sixth Mon of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 20130101	000000'));
		},

		'strtotime(`seventh Tue of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 20130101	000000'));
		},

		'strtotime(`eighth Wed of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 20130101	000000'));
		},

		'strtotime(`ninth Thu of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 20130101	000000'));
		},

		'strtotime(`tenth Sat of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 20130101	000000'));
		},

		'strtotime(`eleventh Friday of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 20130101	000000'));
		},

		'strtotime(`twelfth Saturday of 20130101	000000`) (2013-01-01 00:00:00  xmlrpcnocolon) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 20130101	000000'));
		},

		'strtotime("2013-01-01T00:00:00 yesterday")  (wddf) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013-01-01T00:00:00 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:00 now")  (wddf) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00 now'), '');
		},

		'strtotime("2013-01-01T00:00:00 noon")  (wddf) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013-01-01T00:00:00 noon'), '');
		},

		'strtotime("2013-01-01T00:00:00 midnight")  (wddf) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:00 today")  (wddf) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00 today'), '');
		},

		'strtotime("2013-01-01T00:00:00 tomorrow")  (wddf) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013-01-01T00:00:00 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:00 first day of")  (wddf) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:00 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:00 last day of")  (wddf) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013-01-01T00:00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013-01-01T00:00:00'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013-01-01T00:00:00'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013-01-01T00:00:00'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013-01-01T00:00:00'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013-01-01T00:00:00'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013-01-01T00:00:00'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013-01-01T00:00:00'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013-01-01T00:00:00'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013-01-01T00:00:00'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013-01-01T00:00:00'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013-01-01T00:00:00'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013-01-01T00:00:00'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013-01-01T00:00:00'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:00`) (2013-01-01 00:00:00  wddf) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013-01-01T00:00:00'));
		},

		'strtotime("2013:01:01 00:00:00 yesterday")  (exif) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013:01:01 00:00:00 yesterday'), '');
		},

		'strtotime("2013:01:01 00:00:00 now")  (exif) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013:01:01 00:00:00 now'), '');
		},

		'strtotime("2013:01:01 00:00:00 noon")  (exif) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013:01:01 00:00:00 noon'), '');
		},

		'strtotime("2013:01:01 00:00:00 midnight")  (exif) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013:01:01 00:00:00 midnight'), '');
		},

		'strtotime("2013:01:01 00:00:00 today")  (exif) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013:01:01 00:00:00 today'), '');
		},

		'strtotime("2013:01:01 00:00:00 tomorrow")  (exif) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013:01:01 00:00:00 tomorrow'), '');
		},

		'strtotime("2013:01:01 00:00:00 first day of")  (exif) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013:01:01 00:00:00 first day of'), '');
		},

		'strtotime("2013:01:01 00:00:00 last day of")  (exif) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013:01:01 00:00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013:01:01 00:00:00'));
		},

		'strtotime(`next Thursday of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013:01:01 00:00:00'));
		},

		'strtotime(`second Fri of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013:01:01 00:00:00'));
		},

		'strtotime(`third Wednesday of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013:01:01 00:00:00'));
		},

		'strtotime(`last Sat of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013:01:01 00:00:00'));
		},

		'strtotime(`fourth Sunday of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013:01:01 00:00:00'));
		},

		'strtotime(`fifth Monday of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013:01:01 00:00:00'));
		},

		'strtotime(`sixth Mon of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013:01:01 00:00:00'));
		},

		'strtotime(`seventh Tue of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013:01:01 00:00:00'));
		},

		'strtotime(`eighth Wed of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013:01:01 00:00:00'));
		},

		'strtotime(`ninth Thu of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013:01:01 00:00:00'));
		},

		'strtotime(`tenth Sat of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013:01:01 00:00:00'));
		},

		'strtotime(`eleventh Friday of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013:01:01 00:00:00'));
		},

		'strtotime(`twelfth Saturday of 2013:01:01 00:00:00`) (2013-01-01 00:00:00  exif) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013:01:01 00:00:00'));
		},

		'strtotime("2013.0 yesterday")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 yesterday'), '');
		},

		'strtotime("2013.0 now")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 now'), '');
		},

		'strtotime("2013.0 noon")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 noon'), '');
		},

		'strtotime("2013.0 midnight")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 midnight'), '');
		},

		'strtotime("2013.0 today")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 today'), '');
		},

		'strtotime("2013.0 tomorrow")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 tomorrow'), '');
		},

		'strtotime("2013.0 first day of")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 first day of'), '');
		},

		'strtotime("2013.0 last day of")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2013.0 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 2013.0'));
		},

		'strtotime(`next Thursday of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 2013.0'));
		},

		'strtotime(`second Fri of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 2013.0'));
		},

		'strtotime(`third Wednesday of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 2013.0'));
		},

		'strtotime(`last Sat of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 2013.0'));
		},

		'strtotime(`fourth Sunday of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 2013.0'));
		},

		'strtotime(`fifth Monday of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 2013.0'));
		},

		'strtotime(`sixth Mon of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 2013.0'));
		},

		'strtotime(`seventh Tue of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 2013.0'));
		},

		'strtotime(`eighth Wed of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 2013.0'));
		},

		'strtotime(`ninth Thu of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 2013.0'));
		},

		'strtotime(`tenth Sat of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 2013.0'));
		},

		'strtotime(`eleventh Friday of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 2013.0'));
		},

		'strtotime(`twelfth Saturday of 2013.0`) (2013-01-01 00:00:01  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 2013.0'));
		},

		'strtotime("2013W01-2 yesterday")  (isoweekday) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1356912000, strtotime('2013W01-2 yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("2013W01-2 now")  (isoweekday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013W01-2 now'), '');
		},

		'strtotime("2013W01-2 noon")  (isoweekday) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013W01-2 noon'), '');
		},

		'strtotime("2013W01-2 midnight")  (isoweekday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013W01-2 midnight'), '');
		},

		'strtotime("2013W01-2 today")  (isoweekday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013W01-2 today'), '');
		},

		'strtotime("2013W01-2 tomorrow")  (isoweekday) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1357084800, strtotime('2013W01-2 tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("2013W01-2 first day of")  (isoweekday) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1356998400, strtotime('2013W01-2 first day of'), 'This is a suspected php bug.');
		},

		'strtotime("2013W01-2 last day of")  (isoweekday) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1359590400, strtotime('2013W01-2 last day of'), 'This is a suspected php bug.');
		},

		'strtotime(`first Tuesday of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1356998400, strtotime('first Tuesday of 2013W01-2'));
		},

		'strtotime(`next Thursday of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1357171200, strtotime('next Thursday of 2013W01-2'));
		},

		'strtotime(`second Fri of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1357257600, strtotime('second Fri of 2013W01-2'));
		},

		'strtotime(`third Wednesday of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1357084800, strtotime('third Wednesday of 2013W01-2'));
		},

		'strtotime(`last Sat of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-02-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1359763200, strtotime('last Sat of 2013W01-2'));
		},

		'strtotime(`fourth Sunday of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-06 00:00:00)':  function () {
			Y.Assert.areNotSame(1357430400, strtotime('fourth Sunday of 2013W01-2'));
		},

		'strtotime(`fifth Monday of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areNotSame(1357516800, strtotime('fifth Monday of 2013W01-2'));
		},

		'strtotime(`sixth Mon of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-07 00:00:00)':  function () {
			Y.Assert.areNotSame(1357516800, strtotime('sixth Mon of 2013W01-2'));
		},

		'strtotime(`seventh Tue of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1356998400, strtotime('seventh Tue of 2013W01-2'));
		},

		'strtotime(`eighth Wed of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1357084800, strtotime('eighth Wed of 2013W01-2'));
		},

		'strtotime(`ninth Thu of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1357171200, strtotime('ninth Thu of 2013W01-2'));
		},

		'strtotime(`tenth Sat of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1357344000, strtotime('tenth Sat of 2013W01-2'));
		},

		'strtotime(`eleventh Friday of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1357257600, strtotime('eleventh Friday of 2013W01-2'));
		},

		'strtotime(`twelfth Saturday of 2013W01-2`) (2013-01-01 00:00:01  isoweekday) should give ` (2013-01-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1357344000, strtotime('twelfth Saturday of 2013W01-2'));
		},

		'strtotime("Jan-01-2013 yesterday")  (pgtextshort) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('Jan-01-2013 yesterday'), '');
		},

		'strtotime("Jan-01-2013 now")  (pgtextshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan-01-2013 now'), '');
		},

		'strtotime("Jan-01-2013 noon")  (pgtextshort) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('Jan-01-2013 noon'), '');
		},

		'strtotime("Jan-01-2013 midnight")  (pgtextshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan-01-2013 midnight'), '');
		},

		'strtotime("Jan-01-2013 today")  (pgtextshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan-01-2013 today'), '');
		},

		'strtotime("Jan-01-2013 tomorrow")  (pgtextshort) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('Jan-01-2013 tomorrow'), '');
		},

		'strtotime("Jan-01-2013 first day of")  (pgtextshort) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('Jan-01-2013 first day of'), '');
		},

		'strtotime("Jan-01-2013 last day of")  (pgtextshort) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('Jan-01-2013 last day of'), '');
		},

		'strtotime(`first Tuesday of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of Jan-01-2013'));
		},

		'strtotime(`next Thursday of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of Jan-01-2013'));
		},

		'strtotime(`second Fri of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of Jan-01-2013'));
		},

		'strtotime(`third Wednesday of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of Jan-01-2013'));
		},

		'strtotime(`last Sat of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of Jan-01-2013'));
		},

		'strtotime(`fourth Sunday of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of Jan-01-2013'));
		},

		'strtotime(`fifth Monday of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of Jan-01-2013'));
		},

		'strtotime(`sixth Mon of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of Jan-01-2013'));
		},

		'strtotime(`seventh Tue of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of Jan-01-2013'));
		},

		'strtotime(`eighth Wed of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of Jan-01-2013'));
		},

		'strtotime(`ninth Thu of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of Jan-01-2013'));
		},

		'strtotime(`tenth Sat of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of Jan-01-2013'));
		},

		'strtotime(`eleventh Friday of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of Jan-01-2013'));
		},

		'strtotime(`twelfth Saturday of Jan-01-2013`) (2013-01-01 00:00:01  pgtextshort) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of Jan-01-2013'));
		},

		'strtotime("2013-Jan-01 yesterday")  (pgtextreverse) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013-Jan-01 yesterday'), '');
		},

		'strtotime("2013-Jan-01 now")  (pgtextreverse) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-Jan-01 now'), '');
		},

		'strtotime("2013-Jan-01 noon")  (pgtextreverse) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013-Jan-01 noon'), '');
		},

		'strtotime("2013-Jan-01 midnight")  (pgtextreverse) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-Jan-01 midnight'), '');
		},

		'strtotime("2013-Jan-01 today")  (pgtextreverse) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-Jan-01 today'), '');
		},

		'strtotime("2013-Jan-01 tomorrow")  (pgtextreverse) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013-Jan-01 tomorrow'), '');
		},

		'strtotime("2013-Jan-01 first day of")  (pgtextreverse) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-Jan-01 first day of'), '');
		},

		'strtotime("2013-Jan-01 last day of")  (pgtextreverse) should give `1359590400` (ie 2013-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1359590400, strtotime('2013-Jan-01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('first Tuesday of 2013-Jan-01'));
		},

		'strtotime(`next Thursday of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-01-03 00:00:00)':  function () {
			Y.Assert.areSame(1357171200, strtotime('next Thursday of 2013-Jan-01'));
		},

		'strtotime(`second Fri of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-01-11 00:00:00)':  function () {
			Y.Assert.areSame(1357862400, strtotime('second Fri of 2013-Jan-01'));
		},

		'strtotime(`third Wednesday of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-01-16 00:00:00)':  function () {
			Y.Assert.areSame(1358294400, strtotime('third Wednesday of 2013-Jan-01'));
		},

		'strtotime(`last Sat of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-01-26 00:00:00)':  function () {
			Y.Assert.areSame(1359158400, strtotime('last Sat of 2013-Jan-01'));
		},

		'strtotime(`fourth Sunday of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-01-27 00:00:00)':  function () {
			Y.Assert.areSame(1359244800, strtotime('fourth Sunday of 2013-Jan-01'));
		},

		'strtotime(`fifth Monday of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-02-04 00:00:00)':  function () {
			Y.Assert.areSame(1359936000, strtotime('fifth Monday of 2013-Jan-01'));
		},

		'strtotime(`sixth Mon of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-02-11 00:00:00)':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth Mon of 2013-Jan-01'));
		},

		'strtotime(`seventh Tue of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-02-12 00:00:00)':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh Tue of 2013-Jan-01'));
		},

		'strtotime(`eighth Wed of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('eighth Wed of 2013-Jan-01'));
		},

		'strtotime(`ninth Thu of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('ninth Thu of 2013-Jan-01'));
		},

		'strtotime(`tenth Sat of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-03-09 00:00:00)':  function () {
			Y.Assert.areSame(1362787200, strtotime('tenth Sat of 2013-Jan-01'));
		},

		'strtotime(`eleventh Friday of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-03-15 00:00:00)':  function () {
			Y.Assert.areSame(1363305600, strtotime('eleventh Friday of 2013-Jan-01'));
		},

		'strtotime(`twelfth Saturday of 2013-Jan-01`) (2013-01-01 00:00:01  pgtextreverse) should give ` (2013-03-23 00:00:00)':  function () {
			Y.Assert.areSame(1363996800, strtotime('twelfth Saturday of 2013-Jan-01'));
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 yesterday")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 yesterday'), '');
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 now")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 now'), '');
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 noon")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 noon'), '');
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 midnight")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 midnight'), '');
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 today")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 today'), '');
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 tomorrow")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 tomorrow'), '');
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 first day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 first day of'), '');
		},

		'strtotime("01/Jan/2013:00:00:00 GMT3:30 last day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:00 GMT3:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`next Thursday of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`second Fri of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`third Wednesday of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`last Sat of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`fourth Sunday of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`fifth Monday of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`sixth Mon of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`seventh Tue of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`eighth Wed of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`ninth Thu of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`tenth Sat of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`eleventh Friday of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime(`twelfth Saturday of 01/Jan/2013:00:00:00 GMT3:30`) (2013-01-01 00:00:00  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 01/Jan/2013:00:00:00 GMT3:30'));
		},

		'strtotime("yesterday", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('yesterday', 1356998401));
		},

		'strtotime("now", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('now', 1356998401));
		},

		'strtotime("noon", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('noon', 1356998401));
		},

		'strtotime("midnight", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('midnight', 1356998401));
		},

		'strtotime("today", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('today', 1356998401));
		},

		'strtotime("tomorrow", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('tomorrow', 1356998401));
		},

		'strtotime("first day of", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first day of', 1356998401));
		},

		'strtotime("last day of", 1356998401)  (originally `2013-01-01 00:00:01` Y/m/d H:i:s Australia/Lord_Howe)  should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('last day of', 1356998401));
		},

		'strtotime(`first Tuesday of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1356998401'));
		},

		'strtotime(`next Thursday of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1356998401'));
		},

		'strtotime(`second Fri of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1356998401'));
		},

		'strtotime(`third Wednesday of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1356998401'));
		},

		'strtotime(`last Sat of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1356998401'));
		},

		'strtotime(`fourth Sunday of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1356998401'));
		},

		'strtotime(`fifth Monday of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1356998401'));
		},

		'strtotime(`sixth Mon of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1356998401'));
		},

		'strtotime(`seventh Tue of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1356998401'));
		},

		'strtotime(`eighth Wed of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1356998401'));
		},

		'strtotime(`ninth Thu of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1356998401'));
		},

		'strtotime(`tenth Sat of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1356998401'));
		},

		'strtotime(`eleventh Friday of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1356998401'));
		},

		'strtotime(`twelfth Saturday of 1356998401`) (2013-01-01 00:00:01  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1356998401'));
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 yesterday")  (soap) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013-01-01T00:00:01.000000GMT+00:00 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 now")  (soap) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013-01-01T00:00:01.000000GMT+00:00 now'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 noon")  (soap) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013-01-01T00:00:01.000000GMT+00:00 noon'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 midnight")  (soap) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:01.000000GMT+00:00 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 today")  (soap) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:01.000000GMT+00:00 today'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 tomorrow")  (soap) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013-01-01T00:00:01.000000GMT+00:00 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 first day of")  (soap) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013-01-01T00:00:01.000000GMT+00:00 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+00:00 last day of")  (soap) should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('2013-01-01T00:00:01.000000GMT+00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first Tuesday of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-01-03 00:00:01)':  function () {
			Y.Assert.areSame(1357171201, strtotime('next Thursday of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-01-11 00:00:01)':  function () {
			Y.Assert.areSame(1357862401, strtotime('second Fri of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-01-16 00:00:01)':  function () {
			Y.Assert.areSame(1358294401, strtotime('third Wednesday of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-01-26 00:00:01)':  function () {
			Y.Assert.areSame(1359158401, strtotime('last Sat of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-01-27 00:00:01)':  function () {
			Y.Assert.areSame(1359244801, strtotime('fourth Sunday of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-02-04 00:00:01)':  function () {
			Y.Assert.areSame(1359936001, strtotime('fifth Monday of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-02-11 00:00:01)':  function () {
			Y.Assert.areSame(1360540801, strtotime('sixth Mon of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-02-12 00:00:01)':  function () {
			Y.Assert.areSame(1360627201, strtotime('seventh Tue of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-02-20 00:00:01)':  function () {
			Y.Assert.areSame(1361318401, strtotime('eighth Wed of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-02-28 00:00:01)':  function () {
			Y.Assert.areSame(1362009601, strtotime('ninth Thu of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-03-09 00:00:01)':  function () {
			Y.Assert.areSame(1362787201, strtotime('tenth Sat of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-03-15 00:00:01)':  function () {
			Y.Assert.areSame(1363305601, strtotime('eleventh Friday of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:01.000000GMT+00:00`) (2013-01-01 00:00:01  soap) should give ` (2013-03-23 00:00:01)':  function () {
			Y.Assert.areSame(1363996801, strtotime('twelfth Saturday of 2013-01-01T00:00:01.000000GMT+00:00'));
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 yesterday")  (soap2) should give `1356921000` (ie 2012-12-31 02:30:00)':  function () {
			Y.Assert.areSame(1356921000, strtotime('2013-01-01T00:00:01.000000GMT-2:30 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 now")  (soap2) should give `1357007401` (ie 2013-01-01 02:30:01)':  function () {
			Y.Assert.areSame(1357007401, strtotime('2013-01-01T00:00:01.000000GMT-2:30 now'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 noon")  (soap2) should give `1357050600` (ie 2013-01-01 14:30:00)':  function () {
			Y.Assert.areSame(1357050600, strtotime('2013-01-01T00:00:01.000000GMT-2:30 noon'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 midnight")  (soap2) should give `1357007400` (ie 2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('2013-01-01T00:00:01.000000GMT-2:30 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 today")  (soap2) should give `1357007400` (ie 2013-01-01 02:30:00)':  function () {
			Y.Assert.areSame(1357007400, strtotime('2013-01-01T00:00:01.000000GMT-2:30 today'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 tomorrow")  (soap2) should give `1357093800` (ie 2013-01-02 02:30:00)':  function () {
			Y.Assert.areSame(1357093800, strtotime('2013-01-01T00:00:01.000000GMT-2:30 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 first day of")  (soap2) should give `1357007401` (ie 2013-01-01 02:30:01)':  function () {
			Y.Assert.areSame(1357007401, strtotime('2013-01-01T00:00:01.000000GMT-2:30 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT-2:30 last day of")  (soap2) should give `1359599401` (ie 2013-01-31 02:30:01)':  function () {
			Y.Assert.areSame(1359599401, strtotime('2013-01-01T00:00:01.000000GMT-2:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-01-01 02:30:01)':  function () {
			Y.Assert.areSame(1357007401, strtotime('first Tuesday of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-01-03 02:30:01)':  function () {
			Y.Assert.areSame(1357180201, strtotime('next Thursday of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-01-11 02:30:01)':  function () {
			Y.Assert.areSame(1357871401, strtotime('second Fri of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-01-16 02:30:01)':  function () {
			Y.Assert.areSame(1358303401, strtotime('third Wednesday of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-01-26 02:30:01)':  function () {
			Y.Assert.areSame(1359167401, strtotime('last Sat of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-01-27 02:30:01)':  function () {
			Y.Assert.areSame(1359253801, strtotime('fourth Sunday of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-02-04 02:30:01)':  function () {
			Y.Assert.areSame(1359945001, strtotime('fifth Monday of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-02-11 02:30:01)':  function () {
			Y.Assert.areSame(1360549801, strtotime('sixth Mon of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-02-12 02:30:01)':  function () {
			Y.Assert.areSame(1360636201, strtotime('seventh Tue of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-02-20 02:30:01)':  function () {
			Y.Assert.areSame(1361327401, strtotime('eighth Wed of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-02-28 02:30:01)':  function () {
			Y.Assert.areSame(1362018601, strtotime('ninth Thu of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-03-09 02:30:01)':  function () {
			Y.Assert.areSame(1362796201, strtotime('tenth Sat of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-03-15 02:30:01)':  function () {
			Y.Assert.areSame(1363314601, strtotime('eleventh Friday of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:01.000000GMT-2:30`) (2013-01-01 00:00:01  soap2) should give ` (2013-03-23 02:30:01)':  function () {
			Y.Assert.areSame(1364005801, strtotime('twelfth Saturday of 2013-01-01T00:00:01.000000GMT-2:30'));
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 yesterday")  (soap3) should give `1356894000` (ie 2012-12-30 19:00:00)':  function () {
			Y.Assert.areSame(1356894000, strtotime('2013-01-01T00:00:01.000000GMT+5:00 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 now")  (soap3) should give `1356980401` (ie 2012-12-31 19:00:01)':  function () {
			Y.Assert.areSame(1356980401, strtotime('2013-01-01T00:00:01.000000GMT+5:00 now'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 noon")  (soap3) should give `1357023600` (ie 2013-01-01 07:00:00)':  function () {
			Y.Assert.areSame(1357023600, strtotime('2013-01-01T00:00:01.000000GMT+5:00 noon'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 midnight")  (soap3) should give `1356980400` (ie 2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('2013-01-01T00:00:01.000000GMT+5:00 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 today")  (soap3) should give `1356980400` (ie 2012-12-31 19:00:00)':  function () {
			Y.Assert.areSame(1356980400, strtotime('2013-01-01T00:00:01.000000GMT+5:00 today'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 tomorrow")  (soap3) should give `1357066800` (ie 2013-01-01 19:00:00)':  function () {
			Y.Assert.areSame(1357066800, strtotime('2013-01-01T00:00:01.000000GMT+5:00 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 first day of")  (soap3) should give `1356980401` (ie 2012-12-31 19:00:01)':  function () {
			Y.Assert.areSame(1356980401, strtotime('2013-01-01T00:00:01.000000GMT+5:00 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:01.000000GMT+5:00 last day of")  (soap3) should give `1359572401` (ie 2013-01-30 19:00:01)':  function () {
			Y.Assert.areSame(1359572401, strtotime('2013-01-01T00:00:01.000000GMT+5:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2012-12-31 19:00:01)':  function () {
			Y.Assert.areSame(1356980401, strtotime('first Tuesday of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-01-02 19:00:01)':  function () {
			Y.Assert.areSame(1357153201, strtotime('next Thursday of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-01-10 19:00:01)':  function () {
			Y.Assert.areSame(1357844401, strtotime('second Fri of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-01-15 19:00:01)':  function () {
			Y.Assert.areSame(1358276401, strtotime('third Wednesday of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-01-25 19:00:01)':  function () {
			Y.Assert.areSame(1359140401, strtotime('last Sat of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-01-26 19:00:01)':  function () {
			Y.Assert.areSame(1359226801, strtotime('fourth Sunday of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-02-03 19:00:01)':  function () {
			Y.Assert.areSame(1359918001, strtotime('fifth Monday of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-02-10 19:00:01)':  function () {
			Y.Assert.areSame(1360522801, strtotime('sixth Mon of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-02-11 19:00:01)':  function () {
			Y.Assert.areSame(1360609201, strtotime('seventh Tue of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-02-19 19:00:01)':  function () {
			Y.Assert.areSame(1361300401, strtotime('eighth Wed of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-02-27 19:00:01)':  function () {
			Y.Assert.areSame(1361991601, strtotime('ninth Thu of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-03-08 19:00:01)':  function () {
			Y.Assert.areSame(1362769201, strtotime('tenth Sat of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-03-14 19:00:01)':  function () {
			Y.Assert.areSame(1363287601, strtotime('eleventh Friday of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:01.000000GMT+5:00`) (2013-01-01 00:00:01  soap3) should give ` (2013-03-22 19:00:01)':  function () {
			Y.Assert.areSame(1363978801, strtotime('twelfth Saturday of 2013-01-01T00:00:01.000000GMT+5:00'));
		},

		'strtotime("20130101T00:00:01 yesterday")  (xmlrpc) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20130101T00:00:01 yesterday'), '');
		},

		'strtotime("20130101T00:00:01 now")  (xmlrpc) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('20130101T00:00:01 now'), '');
		},

		'strtotime("20130101T00:00:01 noon")  (xmlrpc) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('20130101T00:00:01 noon'), '');
		},

		'strtotime("20130101T00:00:01 midnight")  (xmlrpc) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101T00:00:01 midnight'), '');
		},

		'strtotime("20130101T00:00:01 today")  (xmlrpc) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101T00:00:01 today'), '');
		},

		'strtotime("20130101T00:00:01 tomorrow")  (xmlrpc) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('20130101T00:00:01 tomorrow'), '');
		},

		'strtotime("20130101T00:00:01 first day of")  (xmlrpc) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('20130101T00:00:01 first day of'), '');
		},

		'strtotime("20130101T00:00:01 last day of")  (xmlrpc) should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('20130101T00:00:01 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first Tuesday of 20130101T00:00:01'));
		},

		'strtotime(`next Thursday of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-01-03 00:00:01)':  function () {
			Y.Assert.areSame(1357171201, strtotime('next Thursday of 20130101T00:00:01'));
		},

		'strtotime(`second Fri of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-01-11 00:00:01)':  function () {
			Y.Assert.areSame(1357862401, strtotime('second Fri of 20130101T00:00:01'));
		},

		'strtotime(`third Wednesday of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-01-16 00:00:01)':  function () {
			Y.Assert.areSame(1358294401, strtotime('third Wednesday of 20130101T00:00:01'));
		},

		'strtotime(`last Sat of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-01-26 00:00:01)':  function () {
			Y.Assert.areSame(1359158401, strtotime('last Sat of 20130101T00:00:01'));
		},

		'strtotime(`fourth Sunday of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-01-27 00:00:01)':  function () {
			Y.Assert.areSame(1359244801, strtotime('fourth Sunday of 20130101T00:00:01'));
		},

		'strtotime(`fifth Monday of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-02-04 00:00:01)':  function () {
			Y.Assert.areSame(1359936001, strtotime('fifth Monday of 20130101T00:00:01'));
		},

		'strtotime(`sixth Mon of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-02-11 00:00:01)':  function () {
			Y.Assert.areSame(1360540801, strtotime('sixth Mon of 20130101T00:00:01'));
		},

		'strtotime(`seventh Tue of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-02-12 00:00:01)':  function () {
			Y.Assert.areSame(1360627201, strtotime('seventh Tue of 20130101T00:00:01'));
		},

		'strtotime(`eighth Wed of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-02-20 00:00:01)':  function () {
			Y.Assert.areSame(1361318401, strtotime('eighth Wed of 20130101T00:00:01'));
		},

		'strtotime(`ninth Thu of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-02-28 00:00:01)':  function () {
			Y.Assert.areSame(1362009601, strtotime('ninth Thu of 20130101T00:00:01'));
		},

		'strtotime(`tenth Sat of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-03-09 00:00:01)':  function () {
			Y.Assert.areSame(1362787201, strtotime('tenth Sat of 20130101T00:00:01'));
		},

		'strtotime(`eleventh Friday of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-03-15 00:00:01)':  function () {
			Y.Assert.areSame(1363305601, strtotime('eleventh Friday of 20130101T00:00:01'));
		},

		'strtotime(`twelfth Saturday of 20130101T00:00:01`) (2013-01-01 00:00:01  xmlrpc) should give ` (2013-03-23 00:00:01)':  function () {
			Y.Assert.areSame(1363996801, strtotime('twelfth Saturday of 20130101T00:00:01'));
		},

		'strtotime("20130101	000001 yesterday")  (xmlrpcnocolon) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('20130101	000001 yesterday'), '');
		},

		'strtotime("20130101	000001 now")  (xmlrpcnocolon) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('20130101	000001 now'), '');
		},

		'strtotime("20130101	000001 noon")  (xmlrpcnocolon) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('20130101	000001 noon'), '');
		},

		'strtotime("20130101	000001 midnight")  (xmlrpcnocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101	000001 midnight'), '');
		},

		'strtotime("20130101	000001 today")  (xmlrpcnocolon) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('20130101	000001 today'), '');
		},

		'strtotime("20130101	000001 tomorrow")  (xmlrpcnocolon) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('20130101	000001 tomorrow'), '');
		},

		'strtotime("20130101	000001 first day of")  (xmlrpcnocolon) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('20130101	000001 first day of'), '');
		},

		'strtotime("20130101	000001 last day of")  (xmlrpcnocolon) should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('20130101	000001 last day of'), '');
		},

		'strtotime(`first Tuesday of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first Tuesday of 20130101	000001'));
		},

		'strtotime(`next Thursday of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-01-03 00:00:01)':  function () {
			Y.Assert.areSame(1357171201, strtotime('next Thursday of 20130101	000001'));
		},

		'strtotime(`second Fri of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-01-11 00:00:01)':  function () {
			Y.Assert.areSame(1357862401, strtotime('second Fri of 20130101	000001'));
		},

		'strtotime(`third Wednesday of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-01-16 00:00:01)':  function () {
			Y.Assert.areSame(1358294401, strtotime('third Wednesday of 20130101	000001'));
		},

		'strtotime(`last Sat of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-01-26 00:00:01)':  function () {
			Y.Assert.areSame(1359158401, strtotime('last Sat of 20130101	000001'));
		},

		'strtotime(`fourth Sunday of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-01-27 00:00:01)':  function () {
			Y.Assert.areSame(1359244801, strtotime('fourth Sunday of 20130101	000001'));
		},

		'strtotime(`fifth Monday of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-02-04 00:00:01)':  function () {
			Y.Assert.areSame(1359936001, strtotime('fifth Monday of 20130101	000001'));
		},

		'strtotime(`sixth Mon of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-02-11 00:00:01)':  function () {
			Y.Assert.areSame(1360540801, strtotime('sixth Mon of 20130101	000001'));
		},

		'strtotime(`seventh Tue of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-02-12 00:00:01)':  function () {
			Y.Assert.areSame(1360627201, strtotime('seventh Tue of 20130101	000001'));
		},

		'strtotime(`eighth Wed of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-02-20 00:00:01)':  function () {
			Y.Assert.areSame(1361318401, strtotime('eighth Wed of 20130101	000001'));
		},

		'strtotime(`ninth Thu of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-02-28 00:00:01)':  function () {
			Y.Assert.areSame(1362009601, strtotime('ninth Thu of 20130101	000001'));
		},

		'strtotime(`tenth Sat of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-03-09 00:00:01)':  function () {
			Y.Assert.areSame(1362787201, strtotime('tenth Sat of 20130101	000001'));
		},

		'strtotime(`eleventh Friday of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-03-15 00:00:01)':  function () {
			Y.Assert.areSame(1363305601, strtotime('eleventh Friday of 20130101	000001'));
		},

		'strtotime(`twelfth Saturday of 20130101	000001`) (2013-01-01 00:00:01  xmlrpcnocolon) should give ` (2013-03-23 00:00:01)':  function () {
			Y.Assert.areSame(1363996801, strtotime('twelfth Saturday of 20130101	000001'));
		},

		'strtotime("2013-01-01T00:00:01 yesterday")  (wddf) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013-01-01T00:00:01 yesterday'), '');
		},

		'strtotime("2013-01-01T00:00:01 now")  (wddf) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013-01-01T00:00:01 now'), '');
		},

		'strtotime("2013-01-01T00:00:01 noon")  (wddf) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013-01-01T00:00:01 noon'), '');
		},

		'strtotime("2013-01-01T00:00:01 midnight")  (wddf) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:01 midnight'), '');
		},

		'strtotime("2013-01-01T00:00:01 today")  (wddf) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013-01-01T00:00:01 today'), '');
		},

		'strtotime("2013-01-01T00:00:01 tomorrow")  (wddf) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013-01-01T00:00:01 tomorrow'), '');
		},

		'strtotime("2013-01-01T00:00:01 first day of")  (wddf) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013-01-01T00:00:01 first day of'), '');
		},

		'strtotime("2013-01-01T00:00:01 last day of")  (wddf) should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('2013-01-01T00:00:01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first Tuesday of 2013-01-01T00:00:01'));
		},

		'strtotime(`next Thursday of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-01-03 00:00:01)':  function () {
			Y.Assert.areSame(1357171201, strtotime('next Thursday of 2013-01-01T00:00:01'));
		},

		'strtotime(`second Fri of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-01-11 00:00:01)':  function () {
			Y.Assert.areSame(1357862401, strtotime('second Fri of 2013-01-01T00:00:01'));
		},

		'strtotime(`third Wednesday of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-01-16 00:00:01)':  function () {
			Y.Assert.areSame(1358294401, strtotime('third Wednesday of 2013-01-01T00:00:01'));
		},

		'strtotime(`last Sat of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-01-26 00:00:01)':  function () {
			Y.Assert.areSame(1359158401, strtotime('last Sat of 2013-01-01T00:00:01'));
		},

		'strtotime(`fourth Sunday of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-01-27 00:00:01)':  function () {
			Y.Assert.areSame(1359244801, strtotime('fourth Sunday of 2013-01-01T00:00:01'));
		},

		'strtotime(`fifth Monday of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-02-04 00:00:01)':  function () {
			Y.Assert.areSame(1359936001, strtotime('fifth Monday of 2013-01-01T00:00:01'));
		},

		'strtotime(`sixth Mon of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-02-11 00:00:01)':  function () {
			Y.Assert.areSame(1360540801, strtotime('sixth Mon of 2013-01-01T00:00:01'));
		},

		'strtotime(`seventh Tue of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-02-12 00:00:01)':  function () {
			Y.Assert.areSame(1360627201, strtotime('seventh Tue of 2013-01-01T00:00:01'));
		},

		'strtotime(`eighth Wed of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-02-20 00:00:01)':  function () {
			Y.Assert.areSame(1361318401, strtotime('eighth Wed of 2013-01-01T00:00:01'));
		},

		'strtotime(`ninth Thu of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-02-28 00:00:01)':  function () {
			Y.Assert.areSame(1362009601, strtotime('ninth Thu of 2013-01-01T00:00:01'));
		},

		'strtotime(`tenth Sat of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-03-09 00:00:01)':  function () {
			Y.Assert.areSame(1362787201, strtotime('tenth Sat of 2013-01-01T00:00:01'));
		},

		'strtotime(`eleventh Friday of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-03-15 00:00:01)':  function () {
			Y.Assert.areSame(1363305601, strtotime('eleventh Friday of 2013-01-01T00:00:01'));
		},

		'strtotime(`twelfth Saturday of 2013-01-01T00:00:01`) (2013-01-01 00:00:01  wddf) should give ` (2013-03-23 00:00:01)':  function () {
			Y.Assert.areSame(1363996801, strtotime('twelfth Saturday of 2013-01-01T00:00:01'));
		},

		'strtotime("2013:01:01 00:00:01 yesterday")  (exif) should give `1356912000` (ie 2012-12-31 00:00:00)':  function () {
			Y.Assert.areSame(1356912000, strtotime('2013:01:01 00:00:01 yesterday'), '');
		},

		'strtotime("2013:01:01 00:00:01 now")  (exif) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013:01:01 00:00:01 now'), '');
		},

		'strtotime("2013:01:01 00:00:01 noon")  (exif) should give `1357041600` (ie 2013-01-01 12:00:00)':  function () {
			Y.Assert.areSame(1357041600, strtotime('2013:01:01 00:00:01 noon'), '');
		},

		'strtotime("2013:01:01 00:00:01 midnight")  (exif) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013:01:01 00:00:01 midnight'), '');
		},

		'strtotime("2013:01:01 00:00:01 today")  (exif) should give `1356998400` (ie 2013-01-01 00:00:00)':  function () {
			Y.Assert.areSame(1356998400, strtotime('2013:01:01 00:00:01 today'), '');
		},

		'strtotime("2013:01:01 00:00:01 tomorrow")  (exif) should give `1357084800` (ie 2013-01-02 00:00:00)':  function () {
			Y.Assert.areSame(1357084800, strtotime('2013:01:01 00:00:01 tomorrow'), '');
		},

		'strtotime("2013:01:01 00:00:01 first day of")  (exif) should give `1356998401` (ie 2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('2013:01:01 00:00:01 first day of'), '');
		},

		'strtotime("2013:01:01 00:00:01 last day of")  (exif) should give `1359590401` (ie 2013-01-31 00:00:01)':  function () {
			Y.Assert.areSame(1359590401, strtotime('2013:01:01 00:00:01 last day of'), '');
		},

		'strtotime(`first Tuesday of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-01-01 00:00:01)':  function () {
			Y.Assert.areSame(1356998401, strtotime('first Tuesday of 2013:01:01 00:00:01'));
		},

		'strtotime(`next Thursday of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-01-03 00:00:01)':  function () {
			Y.Assert.areSame(1357171201, strtotime('next Thursday of 2013:01:01 00:00:01'));
		},

		'strtotime(`second Fri of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-01-11 00:00:01)':  function () {
			Y.Assert.areSame(1357862401, strtotime('second Fri of 2013:01:01 00:00:01'));
		},

		'strtotime(`third Wednesday of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-01-16 00:00:01)':  function () {
			Y.Assert.areSame(1358294401, strtotime('third Wednesday of 2013:01:01 00:00:01'));
		},

		'strtotime(`last Sat of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-01-26 00:00:01)':  function () {
			Y.Assert.areSame(1359158401, strtotime('last Sat of 2013:01:01 00:00:01'));
		},

		'strtotime(`fourth Sunday of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-01-27 00:00:01)':  function () {
			Y.Assert.areSame(1359244801, strtotime('fourth Sunday of 2013:01:01 00:00:01'));
		},

		'strtotime(`fifth Monday of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-02-04 00:00:01)':  function () {
			Y.Assert.areSame(1359936001, strtotime('fifth Monday of 2013:01:01 00:00:01'));
		},

		'strtotime(`sixth Mon of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-02-11 00:00:01)':  function () {
			Y.Assert.areSame(1360540801, strtotime('sixth Mon of 2013:01:01 00:00:01'));
		},

		'strtotime(`seventh Tue of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-02-12 00:00:01)':  function () {
			Y.Assert.areSame(1360627201, strtotime('seventh Tue of 2013:01:01 00:00:01'));
		},

		'strtotime(`eighth Wed of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-02-20 00:00:01)':  function () {
			Y.Assert.areSame(1361318401, strtotime('eighth Wed of 2013:01:01 00:00:01'));
		},

		'strtotime(`ninth Thu of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-02-28 00:00:01)':  function () {
			Y.Assert.areSame(1362009601, strtotime('ninth Thu of 2013:01:01 00:00:01'));
		},

		'strtotime(`tenth Sat of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-03-09 00:00:01)':  function () {
			Y.Assert.areSame(1362787201, strtotime('tenth Sat of 2013:01:01 00:00:01'));
		},

		'strtotime(`eleventh Friday of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-03-15 00:00:01)':  function () {
			Y.Assert.areSame(1363305601, strtotime('eleventh Friday of 2013:01:01 00:00:01'));
		},

		'strtotime(`twelfth Saturday of 2013:01:01 00:00:01`) (2013-01-01 00:00:01  exif) should give ` (2013-03-23 00:00:01)':  function () {
			Y.Assert.areSame(1363996801, strtotime('twelfth Saturday of 2013:01:01 00:00:01'));
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 yesterday")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 yesterday'), '');
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 now")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 now'), '');
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 noon")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 noon'), '');
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 midnight")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 midnight'), '');
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 today")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 today'), '');
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 tomorrow")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 tomorrow'), '');
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 first day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 first day of'), '');
		},

		'strtotime("01/Jan/2013:00:00:01 GMT3:30 last day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('01/Jan/2013:00:00:01 GMT3:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`next Thursday of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`second Fri of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`third Wednesday of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`last Sat of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`fourth Sunday of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`fifth Monday of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`sixth Mon of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`seventh Tue of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`eighth Wed of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`ninth Thu of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`tenth Sat of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`eleventh Friday of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime(`twelfth Saturday of 01/Jan/2013:00:00:01 GMT3:30`) (2013-01-01 00:00:01  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 01/Jan/2013:00:00:01 GMT3:30'));
		},

		'strtotime("yesterday", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('yesterday', 1330502558));
		},

		'strtotime("2012/02/29 yesterday")  (iso8601date4) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012/02/29 yesterday'), '');
		},

		'strtotime("now", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('now', 1330502558));
		},

		'strtotime("2012/02/29 now")  (iso8601date4) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 now'), '');
		},

		'strtotime("noon", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('noon', 1330502558));
		},

		'strtotime("2012/02/29 noon")  (iso8601date4) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012/02/29 noon'), '');
		},

		'strtotime("midnight", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('midnight', 1330502558));
		},

		'strtotime("2012/02/29 midnight")  (iso8601date4) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 midnight'), '');
		},

		'strtotime("today", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('today', 1330502558));
		},

		'strtotime("2012/02/29 today")  (iso8601date4) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 today'), '');
		},

		'strtotime("tomorrow", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('tomorrow', 1330502558));
		},

		'strtotime("2012/02/29 tomorrow")  (iso8601date4) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012/02/29 tomorrow'), '');
		},

		'strtotime("first day of", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('first day of', 1330502558));
		},

		'strtotime("2012/02/29 first day of")  (iso8601date4) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012/02/29 first day of'), '');
		},

		'strtotime("last day of", 1330502558)  (originally `2012-02-29 08:02:38` Y/m/d H:i:s Australia/Lord_Howe)  should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('last day of', 1330502558));
		},

		'strtotime("2012/02/29 last day of")  (iso8601date4) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/02/29 last day of'), '');
		},

		'strtotime(`first Tuesday of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 1330502558'));
		},

		'strtotime(`first Tuesday of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012/02/29'));
		},

		'strtotime(`next Thursday of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 1330502558'));
		},

		'strtotime(`next Thursday of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012/02/29'));
		},

		'strtotime(`second Fri of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 1330502558'));
		},

		'strtotime(`second Fri of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012/02/29'));
		},

		'strtotime(`third Wednesday of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 1330502558'));
		},

		'strtotime(`third Wednesday of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012/02/29'));
		},

		'strtotime(`last Sat of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 1330502558'));
		},

		'strtotime(`last Sat of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012/02/29'));
		},

		'strtotime(`fourth Sunday of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 1330502558'));
		},

		'strtotime(`fourth Sunday of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012/02/29'));
		},

		'strtotime(`fifth Monday of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 1330502558'));
		},

		'strtotime(`fifth Monday of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012/02/29'));
		},

		'strtotime(`sixth Mon of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 1330502558'));
		},

		'strtotime(`sixth Mon of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012/02/29'));
		},

		'strtotime(`seventh Tue of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 1330502558'));
		},

		'strtotime(`seventh Tue of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012/02/29'));
		},

		'strtotime(`eighth Wed of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 1330502558'));
		},

		'strtotime(`eighth Wed of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012/02/29'));
		},

		'strtotime(`ninth Thu of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 1330502558'));
		},

		'strtotime(`ninth Thu of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012/02/29'));
		},

		'strtotime(`tenth Sat of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 1330502558'));
		},

		'strtotime(`tenth Sat of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012/02/29'));
		},

		'strtotime(`eleventh Friday of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 1330502558'));
		},

		'strtotime(`eleventh Friday of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012/02/29'));
		},

		'strtotime(`twelfth Saturday of 1330502558`) (2012-02-29 08:02:38  Y/m/d H:i:s Australia/Lord_Howe) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 1330502558'));
		},

		'strtotime(`twelfth Saturday of 2012/02/29`) (2012-02-29 08:02:38  iso8601date4) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012/02/29'));
		},

		'strtotime("02/29 yesterday")  (american short) should give `1362009600` (ie 2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('02/29 yesterday'), '');
		},

		'strtotime("02/29 now")  (american short) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('02/29 now'), '');
		},

		'strtotime("02/29 noon")  (american short) should give `1362139200` (ie 2013-03-01 12:00:00)':  function () {
			Y.Assert.areSame(1362139200, strtotime('02/29 noon'), '');
		},

		'strtotime("02/29 midnight")  (american short) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('02/29 midnight'), '');
		},

		'strtotime("02/29 today")  (american short) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('02/29 today'), '');
		},

		'strtotime("02/29 tomorrow")  (american short) should give `1362182400` (ie 2013-03-02 00:00:00)':  function () {
			Y.Assert.areSame(1362182400, strtotime('02/29 tomorrow'), '');
		},

		'strtotime("02/29 first day of")  (american short) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('02/29 first day of'), '');
		},

		'strtotime("02/29 last day of")  (american short) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('02/29 last day of'), '');
		},

		'strtotime(`first Tuesday of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-02-05 00:00:00)':  function () {
			Y.Assert.areSame(1360022400, strtotime('first Tuesday of 02/29'));
		},

		'strtotime(`next Thursday of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1360195200, strtotime('next Thursday of 02/29'));
		},

		'strtotime(`second Fri of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1360281600, strtotime('second Fri of 02/29'));
		},

		'strtotime(`third Wednesday of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('third Wednesday of 02/29'));
		},

		'strtotime(`last Sat of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-02-23 00:00:00)':  function () {
			Y.Assert.areSame(1361577600, strtotime('last Sat of 02/29'));
		},

		'strtotime(`fourth Sunday of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-02-24 00:00:00)':  function () {
			Y.Assert.areSame(1361664000, strtotime('fourth Sunday of 02/29'));
		},

		'strtotime(`fifth Monday of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-03-04 00:00:00)':  function () {
			Y.Assert.areSame(1362355200, strtotime('fifth Monday of 02/29'));
		},

		'strtotime(`sixth Mon of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-03-11 00:00:00)':  function () {
			Y.Assert.areSame(1362960000, strtotime('sixth Mon of 02/29'));
		},

		'strtotime(`seventh Tue of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-03-19 00:00:00)':  function () {
			Y.Assert.areSame(1363651200, strtotime('seventh Tue of 02/29'));
		},

		'strtotime(`eighth Wed of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-03-27 00:00:00)':  function () {
			Y.Assert.areSame(1364342400, strtotime('eighth Wed of 02/29'));
		},

		'strtotime(`ninth Thu of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('ninth Thu of 02/29'));
		},

		'strtotime(`tenth Sat of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-04-06 00:00:00)':  function () {
			Y.Assert.areSame(1365206400, strtotime('tenth Sat of 02/29'));
		},

		'strtotime(`eleventh Friday of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('eleventh Friday of 02/29'));
		},

		'strtotime(`twelfth Saturday of 02/29`) (2012-02-29 08:02:38  american short) should give ` (2013-04-20 00:00:00)':  function () {
			Y.Assert.areSame(1366416000, strtotime('twelfth Saturday of 02/29'));
		},

		'strtotime("02/29/2012 yesterday")  (american) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('02/29/2012 yesterday'), '');
		},

		'strtotime("02/29/2012 now")  (american) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('02/29/2012 now'), '');
		},

		'strtotime("02/29/2012 noon")  (american) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('02/29/2012 noon'), '');
		},

		'strtotime("02/29/2012 midnight")  (american) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('02/29/2012 midnight'), '');
		},

		'strtotime("02/29/2012 today")  (american) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('02/29/2012 today'), '');
		},

		'strtotime("02/29/2012 tomorrow")  (american) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('02/29/2012 tomorrow'), '');
		},

		'strtotime("02/29/2012 first day of")  (american) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('02/29/2012 first day of'), '');
		},

		'strtotime("02/29/2012 last day of")  (american) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('02/29/2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 02/29/2012'));
		},

		'strtotime(`next Thursday of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 02/29/2012'));
		},

		'strtotime(`second Fri of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 02/29/2012'));
		},

		'strtotime(`third Wednesday of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 02/29/2012'));
		},

		'strtotime(`last Sat of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 02/29/2012'));
		},

		'strtotime(`fourth Sunday of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 02/29/2012'));
		},

		'strtotime(`fifth Monday of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 02/29/2012'));
		},

		'strtotime(`sixth Mon of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 02/29/2012'));
		},

		'strtotime(`seventh Tue of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 02/29/2012'));
		},

		'strtotime(`eighth Wed of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 02/29/2012'));
		},

		'strtotime(`ninth Thu of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 02/29/2012'));
		},

		'strtotime(`tenth Sat of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 02/29/2012'));
		},

		'strtotime(`eleventh Friday of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 02/29/2012'));
		},

		'strtotime(`twelfth Saturday of 02/29/2012`) (2012-02-29 08:02:38  american) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 02/29/2012'));
		},

		'strtotime("2012/2/29 yesterday")  (dateslash) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012/2/29 yesterday'), '');
		},

		'strtotime("2012/2/29 now")  (dateslash) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/2/29 now'), '');
		},

		'strtotime("2012/2/29 noon")  (dateslash) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012/2/29 noon'), '');
		},

		'strtotime("2012/2/29 midnight")  (dateslash) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/2/29 midnight'), '');
		},

		'strtotime("2012/2/29 today")  (dateslash) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/2/29 today'), '');
		},

		'strtotime("2012/2/29 tomorrow")  (dateslash) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012/2/29 tomorrow'), '');
		},

		'strtotime("2012/2/29 first day of")  (dateslash) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012/2/29 first day of'), '');
		},

		'strtotime("2012/2/29 last day of")  (dateslash) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012/2/29 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012/2/29'));
		},

		'strtotime(`next Thursday of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012/2/29'));
		},

		'strtotime(`second Fri of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012/2/29'));
		},

		'strtotime(`third Wednesday of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012/2/29'));
		},

		'strtotime(`last Sat of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012/2/29'));
		},

		'strtotime(`fourth Sunday of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012/2/29'));
		},

		'strtotime(`fifth Monday of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012/2/29'));
		},

		'strtotime(`sixth Mon of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012/2/29'));
		},

		'strtotime(`seventh Tue of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012/2/29'));
		},

		'strtotime(`eighth Wed of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012/2/29'));
		},

		'strtotime(`ninth Thu of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012/2/29'));
		},

		'strtotime(`tenth Sat of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012/2/29'));
		},

		'strtotime(`eleventh Friday of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012/2/29'));
		},

		'strtotime(`twelfth Saturday of 2012/2/29`) (2012-02-29 08:02:38  dateslash) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012/2/29'));
		},

		'strtotime("12-02-29 yesterday")  (iso8601date2) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('12-02-29 yesterday'), '');
		},

		'strtotime("12-02-29 now")  (iso8601date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('12-02-29 now'), '');
		},

		'strtotime("12-02-29 noon")  (iso8601date2) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('12-02-29 noon'), '');
		},

		'strtotime("12-02-29 midnight")  (iso8601date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('12-02-29 midnight'), '');
		},

		'strtotime("12-02-29 today")  (iso8601date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('12-02-29 today'), '');
		},

		'strtotime("12-02-29 tomorrow")  (iso8601date2) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('12-02-29 tomorrow'), '');
		},

		'strtotime("12-02-29 first day of")  (iso8601date2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('12-02-29 first day of'), '');
		},

		'strtotime("12-02-29 last day of")  (iso8601date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('12-02-29 last day of'), '');
		},

		'strtotime(`first Tuesday of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 12-02-29'));
		},

		'strtotime(`next Thursday of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 12-02-29'));
		},

		'strtotime(`second Fri of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 12-02-29'));
		},

		'strtotime(`third Wednesday of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 12-02-29'));
		},

		'strtotime(`last Sat of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 12-02-29'));
		},

		'strtotime(`fourth Sunday of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 12-02-29'));
		},

		'strtotime(`fifth Monday of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 12-02-29'));
		},

		'strtotime(`sixth Mon of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 12-02-29'));
		},

		'strtotime(`seventh Tue of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 12-02-29'));
		},

		'strtotime(`eighth Wed of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 12-02-29'));
		},

		'strtotime(`ninth Thu of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 12-02-29'));
		},

		'strtotime(`tenth Sat of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 12-02-29'));
		},

		'strtotime(`eleventh Friday of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 12-02-29'));
		},

		'strtotime(`twelfth Saturday of 12-02-29`) (2012-02-29 08:02:38  iso8601date2) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 12-02-29'));
		},

		'strtotime("2012-02 yesterday")  (gnudateshorter) should give `1327968000` (ie 2012-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1327968000, strtotime('2012-02 yesterday'), '');
		},

		'strtotime("2012-02 now")  (gnudateshorter) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012-02 now'), '');
		},

		'strtotime("2012-02 noon")  (gnudateshorter) should give `1328097600` (ie 2012-02-01 12:00:00)':  function () {
			Y.Assert.areSame(1328097600, strtotime('2012-02 noon'), '');
		},

		'strtotime("2012-02 midnight")  (gnudateshorter) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012-02 midnight'), '');
		},

		'strtotime("2012-02 today")  (gnudateshorter) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012-02 today'), '');
		},

		'strtotime("2012-02 tomorrow")  (gnudateshorter) should give `1328140800` (ie 2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('2012-02 tomorrow'), '');
		},

		'strtotime("2012-02 first day of")  (gnudateshorter) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012-02 first day of'), '');
		},

		'strtotime("2012-02 last day of")  (gnudateshorter) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012-02'));
		},

		'strtotime(`next Thursday of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012-02'));
		},

		'strtotime(`second Fri of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012-02'));
		},

		'strtotime(`third Wednesday of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012-02'));
		},

		'strtotime(`last Sat of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012-02'));
		},

		'strtotime(`fourth Sunday of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012-02'));
		},

		'strtotime(`fifth Monday of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012-02'));
		},

		'strtotime(`sixth Mon of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012-02'));
		},

		'strtotime(`seventh Tue of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012-02'));
		},

		'strtotime(`eighth Wed of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012-02'));
		},

		'strtotime(`ninth Thu of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012-02'));
		},

		'strtotime(`tenth Sat of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012-02'));
		},

		'strtotime(`eleventh Friday of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012-02'));
		},

		'strtotime(`twelfth Saturday of 2012-02`) (2012-02-29 08:02:38  gnudateshorter) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012-02'));
		},

		'strtotime("2012-02-29 yesterday")  (gnudateshort) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012-02-29 yesterday'), '');
		},

		'strtotime("2012-02-29 now")  (gnudateshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29 now'), '');
		},

		'strtotime("2012-02-29 noon")  (gnudateshort) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012-02-29 noon'), '');
		},

		'strtotime("2012-02-29 midnight")  (gnudateshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29 midnight'), '');
		},

		'strtotime("2012-02-29 today")  (gnudateshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29 today'), '');
		},

		'strtotime("2012-02-29 tomorrow")  (gnudateshort) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012-02-29 tomorrow'), '');
		},

		'strtotime("2012-02-29 first day of")  (gnudateshort) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012-02-29 first day of'), '');
		},

		'strtotime("2012-02-29 last day of")  (gnudateshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012-02-29'));
		},

		'strtotime(`next Thursday of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012-02-29'));
		},

		'strtotime(`second Fri of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012-02-29'));
		},

		'strtotime(`third Wednesday of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012-02-29'));
		},

		'strtotime(`last Sat of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012-02-29'));
		},

		'strtotime(`fourth Sunday of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012-02-29'));
		},

		'strtotime(`fifth Monday of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012-02-29'));
		},

		'strtotime(`sixth Mon of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012-02-29'));
		},

		'strtotime(`seventh Tue of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012-02-29'));
		},

		'strtotime(`eighth Wed of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012-02-29'));
		},

		'strtotime(`ninth Thu of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012-02-29'));
		},

		'strtotime(`tenth Sat of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012-02-29'));
		},

		'strtotime(`eleventh Friday of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012-02-29'));
		},

		'strtotime(`twelfth Saturday of 2012-02-29`) (2012-02-29 08:02:38  gnudateshort) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012-02-29'));
		},

		'strtotime("29 February 2012 yesterday")  (date full) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('29 February 2012 yesterday'), '');
		},

		'strtotime("29 February 2012 now")  (date full) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29 February 2012 now'), '');
		},

		'strtotime("29 February 2012 noon")  (date full) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('29 February 2012 noon'), '');
		},

		'strtotime("29 February 2012 midnight")  (date full) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29 February 2012 midnight'), '');
		},

		'strtotime("29 February 2012 today")  (date full) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29 February 2012 today'), '');
		},

		'strtotime("29 February 2012 tomorrow")  (date full) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('29 February 2012 tomorrow'), '');
		},

		'strtotime("29 February 2012 first day of")  (date full) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('29 February 2012 first day of'), '');
		},

		'strtotime("29 February 2012 last day of")  (date full) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29 February 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 29 February 2012'));
		},

		'strtotime(`next Thursday of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 29 February 2012'));
		},

		'strtotime(`second Fri of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 29 February 2012'));
		},

		'strtotime(`third Wednesday of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 29 February 2012'));
		},

		'strtotime(`last Sat of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 29 February 2012'));
		},

		'strtotime(`fourth Sunday of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 29 February 2012'));
		},

		'strtotime(`fifth Monday of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 29 February 2012'));
		},

		'strtotime(`sixth Mon of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 29 February 2012'));
		},

		'strtotime(`seventh Tue of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 29 February 2012'));
		},

		'strtotime(`eighth Wed of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 29 February 2012'));
		},

		'strtotime(`ninth Thu of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 29 February 2012'));
		},

		'strtotime(`tenth Sat of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 29 February 2012'));
		},

		'strtotime(`eleventh Friday of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 29 February 2012'));
		},

		'strtotime(`twelfth Saturday of 29 February 2012`) (2012-02-29 08:02:38  date full) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 29 February 2012'));
		},

		'strtotime("29th Feb. 2012 yesterday")  (date full2) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('29th Feb. 2012 yesterday'), '');
		},

		'strtotime("29th Feb. 2012 now")  (date full2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29th Feb. 2012 now'), '');
		},

		'strtotime("29th Feb. 2012 noon")  (date full2) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('29th Feb. 2012 noon'), '');
		},

		'strtotime("29th Feb. 2012 midnight")  (date full2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29th Feb. 2012 midnight'), '');
		},

		'strtotime("29th Feb. 2012 today")  (date full2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29th Feb. 2012 today'), '');
		},

		'strtotime("29th Feb. 2012 tomorrow")  (date full2) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('29th Feb. 2012 tomorrow'), '');
		},

		'strtotime("29th Feb. 2012 first day of")  (date full2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('29th Feb. 2012 first day of'), '');
		},

		'strtotime("29th Feb. 2012 last day of")  (date full2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29th Feb. 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 29th Feb. 2012'));
		},

		'strtotime(`next Thursday of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 29th Feb. 2012'));
		},

		'strtotime(`second Fri of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 29th Feb. 2012'));
		},

		'strtotime(`third Wednesday of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 29th Feb. 2012'));
		},

		'strtotime(`last Sat of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 29th Feb. 2012'));
		},

		'strtotime(`fourth Sunday of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 29th Feb. 2012'));
		},

		'strtotime(`fifth Monday of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 29th Feb. 2012'));
		},

		'strtotime(`sixth Mon of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 29th Feb. 2012'));
		},

		'strtotime(`seventh Tue of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 29th Feb. 2012'));
		},

		'strtotime(`eighth Wed of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 29th Feb. 2012'));
		},

		'strtotime(`ninth Thu of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 29th Feb. 2012'));
		},

		'strtotime(`tenth Sat of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 29th Feb. 2012'));
		},

		'strtotime(`eleventh Friday of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 29th Feb. 2012'));
		},

		'strtotime(`twelfth Saturday of 29th Feb. 2012`) (2012-02-29 08:02:38  date full2) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 29th Feb. 2012'));
		},

		'strtotime("29.02.2012 yesterday")  (pointed date) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('29.02.2012 yesterday'), '');
		},

		'strtotime("29.02.2012 now")  (pointed date) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.2012 now'), '');
		},

		'strtotime("29.02.2012 noon")  (pointed date) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('29.02.2012 noon'), '');
		},

		'strtotime("29.02.2012 midnight")  (pointed date) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.2012 midnight'), '');
		},

		'strtotime("29.02.2012 today")  (pointed date) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.2012 today'), '');
		},

		'strtotime("29.02.2012 tomorrow")  (pointed date) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('29.02.2012 tomorrow'), '');
		},

		'strtotime("29.02.2012 first day of")  (pointed date) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('29.02.2012 first day of'), '');
		},

		'strtotime("29.02.2012 last day of")  (pointed date) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 29.02.2012'));
		},

		'strtotime(`next Thursday of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 29.02.2012'));
		},

		'strtotime(`second Fri of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 29.02.2012'));
		},

		'strtotime(`third Wednesday of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 29.02.2012'));
		},

		'strtotime(`last Sat of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 29.02.2012'));
		},

		'strtotime(`fourth Sunday of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 29.02.2012'));
		},

		'strtotime(`fifth Monday of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 29.02.2012'));
		},

		'strtotime(`sixth Mon of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 29.02.2012'));
		},

		'strtotime(`seventh Tue of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 29.02.2012'));
		},

		'strtotime(`eighth Wed of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 29.02.2012'));
		},

		'strtotime(`ninth Thu of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 29.02.2012'));
		},

		'strtotime(`tenth Sat of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 29.02.2012'));
		},

		'strtotime(`eleventh Friday of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 29.02.2012'));
		},

		'strtotime(`twelfth Saturday of 29.02.2012`) (2012-02-29 08:02:38  pointed date) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 29.02.2012'));
		},

		'strtotime("29-2-2012 yesterday")  (pointed date2) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('29-2-2012 yesterday'), '');
		},

		'strtotime("29-2-2012 now")  (pointed date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29-2-2012 now'), '');
		},

		'strtotime("29-2-2012 noon")  (pointed date2) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('29-2-2012 noon'), '');
		},

		'strtotime("29-2-2012 midnight")  (pointed date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29-2-2012 midnight'), '');
		},

		'strtotime("29-2-2012 today")  (pointed date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29-2-2012 today'), '');
		},

		'strtotime("29-2-2012 tomorrow")  (pointed date2) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('29-2-2012 tomorrow'), '');
		},

		'strtotime("29-2-2012 first day of")  (pointed date2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('29-2-2012 first day of'), '');
		},

		'strtotime("29-2-2012 last day of")  (pointed date2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29-2-2012 last day of'), '');
		},

		'strtotime(`first Tuesday of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 29-2-2012'));
		},

		'strtotime(`next Thursday of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 29-2-2012'));
		},

		'strtotime(`second Fri of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 29-2-2012'));
		},

		'strtotime(`third Wednesday of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 29-2-2012'));
		},

		'strtotime(`last Sat of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 29-2-2012'));
		},

		'strtotime(`fourth Sunday of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 29-2-2012'));
		},

		'strtotime(`fifth Monday of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 29-2-2012'));
		},

		'strtotime(`sixth Mon of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 29-2-2012'));
		},

		'strtotime(`seventh Tue of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 29-2-2012'));
		},

		'strtotime(`eighth Wed of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 29-2-2012'));
		},

		'strtotime(`ninth Thu of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 29-2-2012'));
		},

		'strtotime(`tenth Sat of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 29-2-2012'));
		},

		'strtotime(`eleventh Friday of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 29-2-2012'));
		},

		'strtotime(`twelfth Saturday of 29-2-2012`) (2012-02-29 08:02:38  pointed date2) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 29-2-2012'));
		},

		'strtotime("29.02.12 yesterday")  (pointed date3) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('29.02.12 yesterday'), '');
		},

		'strtotime("29.02.12 now")  (pointed date3) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.12 now'), '');
		},

		'strtotime("29.02.12 noon")  (pointed date3) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('29.02.12 noon'), '');
		},

		'strtotime("29.02.12 midnight")  (pointed date3) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.12 midnight'), '');
		},

		'strtotime("29.02.12 today")  (pointed date3) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.12 today'), '');
		},

		'strtotime("29.02.12 tomorrow")  (pointed date3) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('29.02.12 tomorrow'), '');
		},

		'strtotime("29.02.12 first day of")  (pointed date3) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('29.02.12 first day of'), '');
		},

		'strtotime("29.02.12 last day of")  (pointed date3) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('29.02.12 last day of'), '');
		},

		'strtotime(`first Tuesday of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 29.02.12'));
		},

		'strtotime(`next Thursday of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 29.02.12'));
		},

		'strtotime(`second Fri of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 29.02.12'));
		},

		'strtotime(`third Wednesday of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 29.02.12'));
		},

		'strtotime(`last Sat of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 29.02.12'));
		},

		'strtotime(`fourth Sunday of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 29.02.12'));
		},

		'strtotime(`fifth Monday of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 29.02.12'));
		},

		'strtotime(`sixth Mon of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 29.02.12'));
		},

		'strtotime(`seventh Tue of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 29.02.12'));
		},

		'strtotime(`eighth Wed of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 29.02.12'));
		},

		'strtotime(`ninth Thu of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 29.02.12'));
		},

		'strtotime(`tenth Sat of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 29.02.12'));
		},

		'strtotime(`eleventh Friday of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 29.02.12'));
		},

		'strtotime(`twelfth Saturday of 29.02.12`) (2012-02-29 08:02:38  pointed date3) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 29.02.12'));
		},

		'strtotime("February 2012 yesterday")  (datenoday) should give `1327968000` (ie 2012-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1327968000, strtotime('February 2012 yesterday'), '');
		},

		'strtotime("February 2012 now")  (datenoday) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('February 2012 now'), '');
		},

		'strtotime("February 2012 noon")  (datenoday) should give `1328097600` (ie 2012-02-01 12:00:00)':  function () {
			Y.Assert.areSame(1328097600, strtotime('February 2012 noon'), '');
		},

		'strtotime("February 2012 midnight")  (datenoday) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('February 2012 midnight'), '');
		},

		'strtotime("February 2012 today")  (datenoday) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('February 2012 today'), '');
		},

		'strtotime("February 2012 tomorrow")  (datenoday) should give `1328140800` (ie 2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('February 2012 tomorrow'), '');
		},

		'strtotime("February 2012 first day of")  (datenoday) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('February 2012 first day of'), '');
		},

		'strtotime("February 2012 last day of")  (datenoday) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('February 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of February 2012'));
		},

		'strtotime(`next Thursday of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of February 2012'));
		},

		'strtotime(`second Fri of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of February 2012'));
		},

		'strtotime(`third Wednesday of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of February 2012'));
		},

		'strtotime(`last Sat of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of February 2012'));
		},

		'strtotime(`fourth Sunday of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of February 2012'));
		},

		'strtotime(`fifth Monday of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of February 2012'));
		},

		'strtotime(`sixth Mon of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of February 2012'));
		},

		'strtotime(`seventh Tue of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of February 2012'));
		},

		'strtotime(`eighth Wed of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of February 2012'));
		},

		'strtotime(`ninth Thu of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of February 2012'));
		},

		'strtotime(`tenth Sat of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of February 2012'));
		},

		'strtotime(`eleventh Friday of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of February 2012'));
		},

		'strtotime(`twelfth Saturday of February 2012`) (2012-02-29 08:02:38  datenoday) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of February 2012'));
		},

		'strtotime("Feb 2012 yesterday")  (datenoday2) should give `1327968000` (ie 2012-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1327968000, strtotime('Feb 2012 yesterday'), '');
		},

		'strtotime("Feb 2012 now")  (datenoday2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('Feb 2012 now'), '');
		},

		'strtotime("Feb 2012 noon")  (datenoday2) should give `1328097600` (ie 2012-02-01 12:00:00)':  function () {
			Y.Assert.areSame(1328097600, strtotime('Feb 2012 noon'), '');
		},

		'strtotime("Feb 2012 midnight")  (datenoday2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('Feb 2012 midnight'), '');
		},

		'strtotime("Feb 2012 today")  (datenoday2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('Feb 2012 today'), '');
		},

		'strtotime("Feb 2012 tomorrow")  (datenoday2) should give `1328140800` (ie 2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('Feb 2012 tomorrow'), '');
		},

		'strtotime("Feb 2012 first day of")  (datenoday2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('Feb 2012 first day of'), '');
		},

		'strtotime("Feb 2012 last day of")  (datenoday2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('Feb 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of Feb 2012'));
		},

		'strtotime(`next Thursday of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of Feb 2012'));
		},

		'strtotime(`second Fri of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of Feb 2012'));
		},

		'strtotime(`third Wednesday of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of Feb 2012'));
		},

		'strtotime(`last Sat of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of Feb 2012'));
		},

		'strtotime(`fourth Sunday of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of Feb 2012'));
		},

		'strtotime(`fifth Monday of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of Feb 2012'));
		},

		'strtotime(`sixth Mon of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of Feb 2012'));
		},

		'strtotime(`seventh Tue of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of Feb 2012'));
		},

		'strtotime(`eighth Wed of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of Feb 2012'));
		},

		'strtotime(`ninth Thu of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of Feb 2012'));
		},

		'strtotime(`tenth Sat of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of Feb 2012'));
		},

		'strtotime(`eleventh Friday of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of Feb 2012'));
		},

		'strtotime(`twelfth Saturday of Feb 2012`) (2012-02-29 08:02:38  datenoday2) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of Feb 2012'));
		},

		'strtotime("2012 February yesterday")  (datenodayrev) should give `1327968000` (ie 2012-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1327968000, strtotime('2012 February yesterday'), '');
		},

		'strtotime("2012 February now")  (datenodayrev) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 February now'), '');
		},

		'strtotime("2012 February noon")  (datenodayrev) should give `1328097600` (ie 2012-02-01 12:00:00)':  function () {
			Y.Assert.areSame(1328097600, strtotime('2012 February noon'), '');
		},

		'strtotime("2012 February midnight")  (datenodayrev) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 February midnight'), '');
		},

		'strtotime("2012 February today")  (datenodayrev) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 February today'), '');
		},

		'strtotime("2012 February tomorrow")  (datenodayrev) should give `1328140800` (ie 2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('2012 February tomorrow'), '');
		},

		'strtotime("2012 February first day of")  (datenodayrev) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 February first day of'), '');
		},

		'strtotime("2012 February last day of")  (datenodayrev) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012 February last day of'), '');
		},

		'strtotime(`first Tuesday of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012 February'));
		},

		'strtotime(`next Thursday of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012 February'));
		},

		'strtotime(`second Fri of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012 February'));
		},

		'strtotime(`third Wednesday of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012 February'));
		},

		'strtotime(`last Sat of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012 February'));
		},

		'strtotime(`fourth Sunday of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012 February'));
		},

		'strtotime(`fifth Monday of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012 February'));
		},

		'strtotime(`sixth Mon of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012 February'));
		},

		'strtotime(`seventh Tue of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012 February'));
		},

		'strtotime(`eighth Wed of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012 February'));
		},

		'strtotime(`ninth Thu of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012 February'));
		},

		'strtotime(`tenth Sat of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012 February'));
		},

		'strtotime(`eleventh Friday of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012 February'));
		},

		'strtotime(`twelfth Saturday of 2012 February`) (2012-02-29 08:02:38  datenodayrev) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012 February'));
		},

		'strtotime("2012 Feb yesterday")  (datenodayrev2) should give `1327968000` (ie 2012-01-31 00:00:00)':  function () {
			Y.Assert.areSame(1327968000, strtotime('2012 Feb yesterday'), '');
		},

		'strtotime("2012 Feb now")  (datenodayrev2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 Feb now'), '');
		},

		'strtotime("2012 Feb noon")  (datenodayrev2) should give `1328097600` (ie 2012-02-01 12:00:00)':  function () {
			Y.Assert.areSame(1328097600, strtotime('2012 Feb noon'), '');
		},

		'strtotime("2012 Feb midnight")  (datenodayrev2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 Feb midnight'), '');
		},

		'strtotime("2012 Feb today")  (datenodayrev2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 Feb today'), '');
		},

		'strtotime("2012 Feb tomorrow")  (datenodayrev2) should give `1328140800` (ie 2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('2012 Feb tomorrow'), '');
		},

		'strtotime("2012 Feb first day of")  (datenodayrev2) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012 Feb first day of'), '');
		},

		'strtotime("2012 Feb last day of")  (datenodayrev2) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012 Feb last day of'), '');
		},

		'strtotime(`first Tuesday of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012 Feb'));
		},

		'strtotime(`next Thursday of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012 Feb'));
		},

		'strtotime(`second Fri of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012 Feb'));
		},

		'strtotime(`third Wednesday of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012 Feb'));
		},

		'strtotime(`last Sat of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012 Feb'));
		},

		'strtotime(`fourth Sunday of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012 Feb'));
		},

		'strtotime(`fifth Monday of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012 Feb'));
		},

		'strtotime(`sixth Mon of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012 Feb'));
		},

		'strtotime(`seventh Tue of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012 Feb'));
		},

		'strtotime(`eighth Wed of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012 Feb'));
		},

		'strtotime(`ninth Thu of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012 Feb'));
		},

		'strtotime(`tenth Sat of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012 Feb'));
		},

		'strtotime(`eleventh Friday of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012 Feb'));
		},

		'strtotime(`twelfth Saturday of 2012 Feb`) (2012-02-29 08:02:38  datenodayrev2) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012 Feb'));
		},

		'strtotime("February 29 2012 yesterday")  (datetextual) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('February 29 2012 yesterday'), '');
		},

		'strtotime("February 29 2012 now")  (datetextual) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('February 29 2012 now'), '');
		},

		'strtotime("February 29 2012 noon")  (datetextual) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('February 29 2012 noon'), '');
		},

		'strtotime("February 29 2012 midnight")  (datetextual) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('February 29 2012 midnight'), '');
		},

		'strtotime("February 29 2012 today")  (datetextual) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('February 29 2012 today'), '');
		},

		'strtotime("February 29 2012 tomorrow")  (datetextual) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('February 29 2012 tomorrow'), '');
		},

		'strtotime("February 29 2012 first day of")  (datetextual) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('February 29 2012 first day of'), '');
		},

		'strtotime("February 29 2012 last day of")  (datetextual) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('February 29 2012 last day of'), '');
		},

		'strtotime(`first Tuesday of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of February 29 2012'));
		},

		'strtotime(`next Thursday of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of February 29 2012'));
		},

		'strtotime(`second Fri of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of February 29 2012'));
		},

		'strtotime(`third Wednesday of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of February 29 2012'));
		},

		'strtotime(`last Sat of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of February 29 2012'));
		},

		'strtotime(`fourth Sunday of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of February 29 2012'));
		},

		'strtotime(`fifth Monday of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of February 29 2012'));
		},

		'strtotime(`sixth Mon of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of February 29 2012'));
		},

		'strtotime(`seventh Tue of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of February 29 2012'));
		},

		'strtotime(`eighth Wed of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of February 29 2012'));
		},

		'strtotime(`ninth Thu of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of February 29 2012'));
		},

		'strtotime(`tenth Sat of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of February 29 2012'));
		},

		'strtotime(`eleventh Friday of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of February 29 2012'));
		},

		'strtotime(`twelfth Saturday of February 29 2012`) (2012-02-29 08:02:38  datetextual) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of February 29 2012'));
		},

		'strtotime("Feb 29th yesterday")  (datetextual2) should give `1362009600` (ie 2013-02-28 00:00:00)':  function () {
			Y.Assert.areNotSame(1362009600, strtotime('Feb 29th yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("Feb 29th now")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Feb 29th now'), 'This is a suspected php bug.');
		},

		'strtotime("Feb 29th noon")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Feb 29th noon'), 'This is a suspected php bug.');
		},

		'strtotime("Feb 29th midnight")  (datetextual2) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('Feb 29th midnight'), '');
		},

		'strtotime("Feb 29th today")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Feb 29th today'), 'This is a suspected php bug.');
		},

		'strtotime("Feb 29th tomorrow")  (datetextual2) should give `false':  function () {
			Y.Assert.areNotSame(false, strtotime('Feb 29th tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("Feb 29th first day of")  (datetextual2) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('Feb 29th first day of'), '');
		},

		'strtotime("Feb 29th last day of")  (datetextual2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('Feb 29th last day of'), '');
		},

		'strtotime(`first Tuesday of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-02-05 00:00:00)':  function () {
			Y.Assert.areSame(1360022400, strtotime('first Tuesday of Feb 29th'));
		},

		'strtotime(`next Thursday of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1360195200, strtotime('next Thursday of Feb 29th'));
		},

		'strtotime(`second Fri of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1360281600, strtotime('second Fri of Feb 29th'));
		},

		'strtotime(`third Wednesday of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('third Wednesday of Feb 29th'));
		},

		'strtotime(`last Sat of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-02-23 00:00:00)':  function () {
			Y.Assert.areSame(1361577600, strtotime('last Sat of Feb 29th'));
		},

		'strtotime(`fourth Sunday of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-02-24 00:00:00)':  function () {
			Y.Assert.areSame(1361664000, strtotime('fourth Sunday of Feb 29th'));
		},

		'strtotime(`fifth Monday of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-03-04 00:00:00)':  function () {
			Y.Assert.areSame(1362355200, strtotime('fifth Monday of Feb 29th'));
		},

		'strtotime(`sixth Mon of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-03-11 00:00:00)':  function () {
			Y.Assert.areSame(1362960000, strtotime('sixth Mon of Feb 29th'));
		},

		'strtotime(`seventh Tue of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-03-19 00:00:00)':  function () {
			Y.Assert.areSame(1363651200, strtotime('seventh Tue of Feb 29th'));
		},

		'strtotime(`eighth Wed of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-03-27 00:00:00)':  function () {
			Y.Assert.areSame(1364342400, strtotime('eighth Wed of Feb 29th'));
		},

		'strtotime(`ninth Thu of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('ninth Thu of Feb 29th'));
		},

		'strtotime(`tenth Sat of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-04-06 00:00:00)':  function () {
			Y.Assert.areSame(1365206400, strtotime('tenth Sat of Feb 29th'));
		},

		'strtotime(`eleventh Friday of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('eleventh Friday of Feb 29th'));
		},

		'strtotime(`twelfth Saturday of Feb 29th`) (2012-02-29 08:02:38  datetextual2) should give ` (2013-04-20 00:00:00)':  function () {
			Y.Assert.areSame(1366416000, strtotime('twelfth Saturday of Feb 29th'));
		},

		'strtotime("29 February yesterday")  (datenoyearrev) should give `1362009600` (ie 2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('29 February yesterday'), '');
		},

		'strtotime("29 February now")  (datenoyearrev) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29 February now'), '');
		},

		'strtotime("29 February noon")  (datenoyearrev) should give `1362139200` (ie 2013-03-01 12:00:00)':  function () {
			Y.Assert.areSame(1362139200, strtotime('29 February noon'), '');
		},

		'strtotime("29 February midnight")  (datenoyearrev) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29 February midnight'), '');
		},

		'strtotime("29 February today")  (datenoyearrev) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29 February today'), '');
		},

		'strtotime("29 February tomorrow")  (datenoyearrev) should give `1362182400` (ie 2013-03-02 00:00:00)':  function () {
			Y.Assert.areSame(1362182400, strtotime('29 February tomorrow'), '');
		},

		'strtotime("29 February first day of")  (datenoyearrev) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29 February first day of'), '');
		},

		'strtotime("29 February last day of")  (datenoyearrev) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('29 February last day of'), '');
		},

		'strtotime(`first Tuesday of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-02-05 00:00:00)':  function () {
			Y.Assert.areSame(1360022400, strtotime('first Tuesday of 29 February'));
		},

		'strtotime(`next Thursday of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1360195200, strtotime('next Thursday of 29 February'));
		},

		'strtotime(`second Fri of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1360281600, strtotime('second Fri of 29 February'));
		},

		'strtotime(`third Wednesday of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('third Wednesday of 29 February'));
		},

		'strtotime(`last Sat of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-02-23 00:00:00)':  function () {
			Y.Assert.areSame(1361577600, strtotime('last Sat of 29 February'));
		},

		'strtotime(`fourth Sunday of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-02-24 00:00:00)':  function () {
			Y.Assert.areSame(1361664000, strtotime('fourth Sunday of 29 February'));
		},

		'strtotime(`fifth Monday of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-03-04 00:00:00)':  function () {
			Y.Assert.areSame(1362355200, strtotime('fifth Monday of 29 February'));
		},

		'strtotime(`sixth Mon of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-03-11 00:00:00)':  function () {
			Y.Assert.areSame(1362960000, strtotime('sixth Mon of 29 February'));
		},

		'strtotime(`seventh Tue of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-03-19 00:00:00)':  function () {
			Y.Assert.areSame(1363651200, strtotime('seventh Tue of 29 February'));
		},

		'strtotime(`eighth Wed of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-03-27 00:00:00)':  function () {
			Y.Assert.areSame(1364342400, strtotime('eighth Wed of 29 February'));
		},

		'strtotime(`ninth Thu of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('ninth Thu of 29 February'));
		},

		'strtotime(`tenth Sat of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-04-06 00:00:00)':  function () {
			Y.Assert.areSame(1365206400, strtotime('tenth Sat of 29 February'));
		},

		'strtotime(`eleventh Friday of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('eleventh Friday of 29 February'));
		},

		'strtotime(`twelfth Saturday of 29 February`) (2012-02-29 08:02:38  datenoyearrev) should give ` (2013-04-20 00:00:00)':  function () {
			Y.Assert.areSame(1366416000, strtotime('twelfth Saturday of 29 February'));
		},

		'strtotime("29th Feb yesterday")  (datenoyearrev2) should give `1362009600` (ie 2013-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1362009600, strtotime('29th Feb yesterday'), '');
		},

		'strtotime("29th Feb now")  (datenoyearrev2) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29th Feb now'), '');
		},

		'strtotime("29th Feb noon")  (datenoyearrev2) should give `1362139200` (ie 2013-03-01 12:00:00)':  function () {
			Y.Assert.areSame(1362139200, strtotime('29th Feb noon'), '');
		},

		'strtotime("29th Feb midnight")  (datenoyearrev2) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29th Feb midnight'), '');
		},

		'strtotime("29th Feb today")  (datenoyearrev2) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29th Feb today'), '');
		},

		'strtotime("29th Feb tomorrow")  (datenoyearrev2) should give `1362182400` (ie 2013-03-02 00:00:00)':  function () {
			Y.Assert.areSame(1362182400, strtotime('29th Feb tomorrow'), '');
		},

		'strtotime("29th Feb first day of")  (datenoyearrev2) should give `1362096000` (ie 2013-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1362096000, strtotime('29th Feb first day of'), '');
		},

		'strtotime("29th Feb last day of")  (datenoyearrev2) should give `1364688000` (ie 2013-03-31 00:00:00)':  function () {
			Y.Assert.areSame(1364688000, strtotime('29th Feb last day of'), '');
		},

		'strtotime(`first Tuesday of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-02-05 00:00:00)':  function () {
			Y.Assert.areSame(1360022400, strtotime('first Tuesday of 29th Feb'));
		},

		'strtotime(`next Thursday of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1360195200, strtotime('next Thursday of 29th Feb'));
		},

		'strtotime(`second Fri of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-02-08 00:00:00)':  function () {
			Y.Assert.areSame(1360281600, strtotime('second Fri of 29th Feb'));
		},

		'strtotime(`third Wednesday of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-02-20 00:00:00)':  function () {
			Y.Assert.areSame(1361318400, strtotime('third Wednesday of 29th Feb'));
		},

		'strtotime(`last Sat of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-02-23 00:00:00)':  function () {
			Y.Assert.areSame(1361577600, strtotime('last Sat of 29th Feb'));
		},

		'strtotime(`fourth Sunday of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-02-24 00:00:00)':  function () {
			Y.Assert.areSame(1361664000, strtotime('fourth Sunday of 29th Feb'));
		},

		'strtotime(`fifth Monday of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-03-04 00:00:00)':  function () {
			Y.Assert.areSame(1362355200, strtotime('fifth Monday of 29th Feb'));
		},

		'strtotime(`sixth Mon of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-03-11 00:00:00)':  function () {
			Y.Assert.areSame(1362960000, strtotime('sixth Mon of 29th Feb'));
		},

		'strtotime(`seventh Tue of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-03-19 00:00:00)':  function () {
			Y.Assert.areSame(1363651200, strtotime('seventh Tue of 29th Feb'));
		},

		'strtotime(`eighth Wed of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-03-27 00:00:00)':  function () {
			Y.Assert.areSame(1364342400, strtotime('eighth Wed of 29th Feb'));
		},

		'strtotime(`ninth Thu of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-04-04 00:00:00)':  function () {
			Y.Assert.areSame(1365033600, strtotime('ninth Thu of 29th Feb'));
		},

		'strtotime(`tenth Sat of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-04-06 00:00:00)':  function () {
			Y.Assert.areSame(1365206400, strtotime('tenth Sat of 29th Feb'));
		},

		'strtotime(`eleventh Friday of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-04-12 00:00:00)':  function () {
			Y.Assert.areSame(1365724800, strtotime('eleventh Friday of 29th Feb'));
		},

		'strtotime(`twelfth Saturday of 29th Feb`) (2012-02-29 08:02:38  datenoyearrev2) should give ` (2013-04-20 00:00:00)':  function () {
			Y.Assert.areSame(1366416000, strtotime('twelfth Saturday of 29th Feb'));
		},

		'strtotime("20120229 yesterday")  (datenocolon) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('20120229 yesterday'), '');
		},

		'strtotime("20120229 now")  (datenocolon) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229 now'), '');
		},

		'strtotime("20120229 noon")  (datenocolon) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('20120229 noon'), '');
		},

		'strtotime("20120229 midnight")  (datenocolon) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229 midnight'), '');
		},

		'strtotime("20120229 today")  (datenocolon) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229 today'), '');
		},

		'strtotime("20120229 tomorrow")  (datenocolon) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('20120229 tomorrow'), '');
		},

		'strtotime("20120229 first day of")  (datenocolon) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('20120229 first day of'), '');
		},

		'strtotime("20120229 last day of")  (datenocolon) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229 last day of'), '');
		},

		'strtotime(`first Tuesday of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 20120229'));
		},

		'strtotime(`next Thursday of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 20120229'));
		},

		'strtotime(`second Fri of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 20120229'));
		},

		'strtotime(`third Wednesday of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 20120229'));
		},

		'strtotime(`last Sat of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 20120229'));
		},

		'strtotime(`fourth Sunday of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 20120229'));
		},

		'strtotime(`fifth Monday of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 20120229'));
		},

		'strtotime(`sixth Mon of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 20120229'));
		},

		'strtotime(`seventh Tue of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 20120229'));
		},

		'strtotime(`eighth Wed of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 20120229'));
		},

		'strtotime(`ninth Thu of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 20120229'));
		},

		'strtotime(`tenth Sat of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 20120229'));
		},

		'strtotime(`eleventh Friday of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 20120229'));
		},

		'strtotime(`twelfth Saturday of 20120229`) (2012-02-29 08:02:38  datenocolon) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 20120229'));
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 yesterday")  (soap) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012-02-29T08:02:38.000000GMT+00:00 yesterday'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 now")  (soap) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012-02-29T08:02:38.000000GMT+00:00 now'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 noon")  (soap) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012-02-29T08:02:38.000000GMT+00:00 noon'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 midnight")  (soap) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29T08:02:38.000000GMT+00:00 midnight'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 today")  (soap) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29T08:02:38.000000GMT+00:00 today'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 tomorrow")  (soap) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012-02-29T08:02:38.000000GMT+00:00 tomorrow'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 first day of")  (soap) should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('2012-02-29T08:02:38.000000GMT+00:00 first day of'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+00:00 last day of")  (soap) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012-02-29T08:02:38.000000GMT+00:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-02-07 08:02:38)':  function () {
			Y.Assert.areSame(1328601758, strtotime('first Tuesday of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`next Thursday of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-02-02 08:02:38)':  function () {
			Y.Assert.areSame(1328169758, strtotime('next Thursday of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`second Fri of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-02-10 08:02:38)':  function () {
			Y.Assert.areSame(1328860958, strtotime('second Fri of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`third Wednesday of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-02-15 08:02:38)':  function () {
			Y.Assert.areSame(1329292958, strtotime('third Wednesday of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`last Sat of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-02-25 08:02:38)':  function () {
			Y.Assert.areSame(1330156958, strtotime('last Sat of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`fourth Sunday of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-02-26 08:02:38)':  function () {
			Y.Assert.areSame(1330243358, strtotime('fourth Sunday of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`fifth Monday of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-03-05 08:02:38)':  function () {
			Y.Assert.areSame(1330934558, strtotime('fifth Monday of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`sixth Mon of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-03-12 08:02:38)':  function () {
			Y.Assert.areSame(1331539358, strtotime('sixth Mon of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`seventh Tue of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-03-20 08:02:38)':  function () {
			Y.Assert.areSame(1332230558, strtotime('seventh Tue of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`eighth Wed of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-03-21 08:02:38)':  function () {
			Y.Assert.areSame(1332316958, strtotime('eighth Wed of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`ninth Thu of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-03-29 08:02:38)':  function () {
			Y.Assert.areSame(1333008158, strtotime('ninth Thu of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`tenth Sat of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-04-07 08:02:38)':  function () {
			Y.Assert.areSame(1333785758, strtotime('tenth Sat of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`eleventh Friday of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-04-13 08:02:38)':  function () {
			Y.Assert.areSame(1334304158, strtotime('eleventh Friday of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime(`twelfth Saturday of 2012-02-29T08:02:38.000000GMT+00:00`) (2012-02-29 08:02:38  soap) should give ` (2012-04-21 08:02:38)':  function () {
			Y.Assert.areSame(1334995358, strtotime('twelfth Saturday of 2012-02-29T08:02:38.000000GMT+00:00'));
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 yesterday")  (soap2) should give `1330396200` (ie 2012-02-28 02:30:00)':  function () {
			Y.Assert.areSame(1330396200, strtotime('2012-02-29T08:02:38.000000GMT-2:30 yesterday'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 now")  (soap2) should give `1330511558` (ie 2012-02-29 10:32:38)':  function () {
			Y.Assert.areSame(1330511558, strtotime('2012-02-29T08:02:38.000000GMT-2:30 now'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 noon")  (soap2) should give `1330525800` (ie 2012-02-29 14:30:00)':  function () {
			Y.Assert.areSame(1330525800, strtotime('2012-02-29T08:02:38.000000GMT-2:30 noon'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 midnight")  (soap2) should give `1330482600` (ie 2012-02-29 02:30:00)':  function () {
			Y.Assert.areSame(1330482600, strtotime('2012-02-29T08:02:38.000000GMT-2:30 midnight'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 today")  (soap2) should give `1330482600` (ie 2012-02-29 02:30:00)':  function () {
			Y.Assert.areSame(1330482600, strtotime('2012-02-29T08:02:38.000000GMT-2:30 today'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 tomorrow")  (soap2) should give `1330569000` (ie 2012-03-01 02:30:00)':  function () {
			Y.Assert.areSame(1330569000, strtotime('2012-02-29T08:02:38.000000GMT-2:30 tomorrow'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 first day of")  (soap2) should give `1328092358` (ie 2012-02-01 10:32:38)':  function () {
			Y.Assert.areSame(1328092358, strtotime('2012-02-29T08:02:38.000000GMT-2:30 first day of'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT-2:30 last day of")  (soap2) should give `1330511558` (ie 2012-02-29 10:32:38)':  function () {
			Y.Assert.areSame(1330511558, strtotime('2012-02-29T08:02:38.000000GMT-2:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-02-07 10:32:38)':  function () {
			Y.Assert.areSame(1328610758, strtotime('first Tuesday of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`next Thursday of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-02-02 10:32:38)':  function () {
			Y.Assert.areSame(1328178758, strtotime('next Thursday of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`second Fri of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-02-10 10:32:38)':  function () {
			Y.Assert.areSame(1328869958, strtotime('second Fri of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`third Wednesday of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-02-15 10:32:38)':  function () {
			Y.Assert.areSame(1329301958, strtotime('third Wednesday of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`last Sat of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-02-25 10:32:38)':  function () {
			Y.Assert.areSame(1330165958, strtotime('last Sat of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`fourth Sunday of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-02-26 10:32:38)':  function () {
			Y.Assert.areSame(1330252358, strtotime('fourth Sunday of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`fifth Monday of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-03-05 10:32:38)':  function () {
			Y.Assert.areSame(1330943558, strtotime('fifth Monday of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`sixth Mon of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-03-12 10:32:38)':  function () {
			Y.Assert.areSame(1331548358, strtotime('sixth Mon of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`seventh Tue of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-03-20 10:32:38)':  function () {
			Y.Assert.areSame(1332239558, strtotime('seventh Tue of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`eighth Wed of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-03-21 10:32:38)':  function () {
			Y.Assert.areSame(1332325958, strtotime('eighth Wed of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`ninth Thu of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-03-29 10:32:38)':  function () {
			Y.Assert.areSame(1333017158, strtotime('ninth Thu of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`tenth Sat of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-04-07 10:32:38)':  function () {
			Y.Assert.areSame(1333794758, strtotime('tenth Sat of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`eleventh Friday of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-04-13 10:32:38)':  function () {
			Y.Assert.areSame(1334313158, strtotime('eleventh Friday of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime(`twelfth Saturday of 2012-02-29T08:02:38.000000GMT-2:30`) (2012-02-29 08:02:38  soap2) should give ` (2012-04-21 10:32:38)':  function () {
			Y.Assert.areSame(1335004358, strtotime('twelfth Saturday of 2012-02-29T08:02:38.000000GMT-2:30'));
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 yesterday")  (soap3) should give `1330369200` (ie 2012-02-27 19:00:00)':  function () {
			Y.Assert.areSame(1330369200, strtotime('2012-02-29T08:02:38.000000GMT+5:00 yesterday'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 now")  (soap3) should give `1330484558` (ie 2012-02-29 03:02:38)':  function () {
			Y.Assert.areSame(1330484558, strtotime('2012-02-29T08:02:38.000000GMT+5:00 now'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 noon")  (soap3) should give `1330498800` (ie 2012-02-29 07:00:00)':  function () {
			Y.Assert.areSame(1330498800, strtotime('2012-02-29T08:02:38.000000GMT+5:00 noon'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 midnight")  (soap3) should give `1330455600` (ie 2012-02-28 19:00:00)':  function () {
			Y.Assert.areSame(1330455600, strtotime('2012-02-29T08:02:38.000000GMT+5:00 midnight'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 today")  (soap3) should give `1330455600` (ie 2012-02-28 19:00:00)':  function () {
			Y.Assert.areSame(1330455600, strtotime('2012-02-29T08:02:38.000000GMT+5:00 today'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 tomorrow")  (soap3) should give `1330542000` (ie 2012-02-29 19:00:00)':  function () {
			Y.Assert.areSame(1330542000, strtotime('2012-02-29T08:02:38.000000GMT+5:00 tomorrow'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 first day of")  (soap3) should give `1328065358` (ie 2012-02-01 03:02:38)':  function () {
			Y.Assert.areSame(1328065358, strtotime('2012-02-29T08:02:38.000000GMT+5:00 first day of'), '');
		},

		'strtotime("2012-02-29T08:02:38.000000GMT+5:00 last day of")  (soap3) should give `1330484558` (ie 2012-02-29 03:02:38)':  function () {
			Y.Assert.areSame(1330484558, strtotime('2012-02-29T08:02:38.000000GMT+5:00 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-02-07 03:02:38)':  function () {
			Y.Assert.areSame(1328583758, strtotime('first Tuesday of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`next Thursday of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-02-02 03:02:38)':  function () {
			Y.Assert.areSame(1328151758, strtotime('next Thursday of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`second Fri of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-02-10 03:02:38)':  function () {
			Y.Assert.areSame(1328842958, strtotime('second Fri of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`third Wednesday of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-02-15 03:02:38)':  function () {
			Y.Assert.areSame(1329274958, strtotime('third Wednesday of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`last Sat of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-02-25 03:02:38)':  function () {
			Y.Assert.areSame(1330138958, strtotime('last Sat of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`fourth Sunday of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-02-26 03:02:38)':  function () {
			Y.Assert.areSame(1330225358, strtotime('fourth Sunday of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`fifth Monday of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-03-05 03:02:38)':  function () {
			Y.Assert.areSame(1330916558, strtotime('fifth Monday of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`sixth Mon of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-03-12 03:02:38)':  function () {
			Y.Assert.areSame(1331521358, strtotime('sixth Mon of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`seventh Tue of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-03-20 03:02:38)':  function () {
			Y.Assert.areSame(1332212558, strtotime('seventh Tue of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`eighth Wed of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-03-21 03:02:38)':  function () {
			Y.Assert.areSame(1332298958, strtotime('eighth Wed of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`ninth Thu of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-03-29 03:02:38)':  function () {
			Y.Assert.areSame(1332990158, strtotime('ninth Thu of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`tenth Sat of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-04-07 03:02:38)':  function () {
			Y.Assert.areSame(1333767758, strtotime('tenth Sat of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`eleventh Friday of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-04-13 03:02:38)':  function () {
			Y.Assert.areSame(1334286158, strtotime('eleventh Friday of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime(`twelfth Saturday of 2012-02-29T08:02:38.000000GMT+5:00`) (2012-02-29 08:02:38  soap3) should give ` (2012-04-21 03:02:38)':  function () {
			Y.Assert.areSame(1334977358, strtotime('twelfth Saturday of 2012-02-29T08:02:38.000000GMT+5:00'));
		},

		'strtotime("20120229T08:02:38 yesterday")  (xmlrpc) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('20120229T08:02:38 yesterday'), '');
		},

		'strtotime("20120229T08:02:38 now")  (xmlrpc) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('20120229T08:02:38 now'), '');
		},

		'strtotime("20120229T08:02:38 noon")  (xmlrpc) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('20120229T08:02:38 noon'), '');
		},

		'strtotime("20120229T08:02:38 midnight")  (xmlrpc) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229T08:02:38 midnight'), '');
		},

		'strtotime("20120229T08:02:38 today")  (xmlrpc) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229T08:02:38 today'), '');
		},

		'strtotime("20120229T08:02:38 tomorrow")  (xmlrpc) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('20120229T08:02:38 tomorrow'), '');
		},

		'strtotime("20120229T08:02:38 first day of")  (xmlrpc) should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('20120229T08:02:38 first day of'), '');
		},

		'strtotime("20120229T08:02:38 last day of")  (xmlrpc) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('20120229T08:02:38 last day of'), '');
		},

		'strtotime(`first Tuesday of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-02-07 08:02:38)':  function () {
			Y.Assert.areSame(1328601758, strtotime('first Tuesday of 20120229T08:02:38'));
		},

		'strtotime(`next Thursday of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-02-02 08:02:38)':  function () {
			Y.Assert.areSame(1328169758, strtotime('next Thursday of 20120229T08:02:38'));
		},

		'strtotime(`second Fri of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-02-10 08:02:38)':  function () {
			Y.Assert.areSame(1328860958, strtotime('second Fri of 20120229T08:02:38'));
		},

		'strtotime(`third Wednesday of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-02-15 08:02:38)':  function () {
			Y.Assert.areSame(1329292958, strtotime('third Wednesday of 20120229T08:02:38'));
		},

		'strtotime(`last Sat of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-02-25 08:02:38)':  function () {
			Y.Assert.areSame(1330156958, strtotime('last Sat of 20120229T08:02:38'));
		},

		'strtotime(`fourth Sunday of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-02-26 08:02:38)':  function () {
			Y.Assert.areSame(1330243358, strtotime('fourth Sunday of 20120229T08:02:38'));
		},

		'strtotime(`fifth Monday of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-03-05 08:02:38)':  function () {
			Y.Assert.areSame(1330934558, strtotime('fifth Monday of 20120229T08:02:38'));
		},

		'strtotime(`sixth Mon of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-03-12 08:02:38)':  function () {
			Y.Assert.areSame(1331539358, strtotime('sixth Mon of 20120229T08:02:38'));
		},

		'strtotime(`seventh Tue of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-03-20 08:02:38)':  function () {
			Y.Assert.areSame(1332230558, strtotime('seventh Tue of 20120229T08:02:38'));
		},

		'strtotime(`eighth Wed of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-03-21 08:02:38)':  function () {
			Y.Assert.areSame(1332316958, strtotime('eighth Wed of 20120229T08:02:38'));
		},

		'strtotime(`ninth Thu of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-03-29 08:02:38)':  function () {
			Y.Assert.areSame(1333008158, strtotime('ninth Thu of 20120229T08:02:38'));
		},

		'strtotime(`tenth Sat of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-04-07 08:02:38)':  function () {
			Y.Assert.areSame(1333785758, strtotime('tenth Sat of 20120229T08:02:38'));
		},

		'strtotime(`eleventh Friday of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-04-13 08:02:38)':  function () {
			Y.Assert.areSame(1334304158, strtotime('eleventh Friday of 20120229T08:02:38'));
		},

		'strtotime(`twelfth Saturday of 20120229T08:02:38`) (2012-02-29 08:02:38  xmlrpc) should give ` (2012-04-21 08:02:38)':  function () {
			Y.Assert.areSame(1334995358, strtotime('twelfth Saturday of 20120229T08:02:38'));
		},

		'strtotime("20120229	080238 yesterday")  (xmlrpcnocolon) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('20120229	080238 yesterday'), '');
		},

		'strtotime("20120229	080238 now")  (xmlrpcnocolon) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('20120229	080238 now'), '');
		},

		'strtotime("20120229	080238 noon")  (xmlrpcnocolon) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('20120229	080238 noon'), '');
		},

		'strtotime("20120229	080238 midnight")  (xmlrpcnocolon) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229	080238 midnight'), '');
		},

		'strtotime("20120229	080238 today")  (xmlrpcnocolon) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('20120229	080238 today'), '');
		},

		'strtotime("20120229	080238 tomorrow")  (xmlrpcnocolon) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('20120229	080238 tomorrow'), '');
		},

		'strtotime("20120229	080238 first day of")  (xmlrpcnocolon) should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('20120229	080238 first day of'), '');
		},

		'strtotime("20120229	080238 last day of")  (xmlrpcnocolon) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('20120229	080238 last day of'), '');
		},

		'strtotime(`first Tuesday of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-02-07 08:02:38)':  function () {
			Y.Assert.areSame(1328601758, strtotime('first Tuesday of 20120229	080238'));
		},

		'strtotime(`next Thursday of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-02-02 08:02:38)':  function () {
			Y.Assert.areSame(1328169758, strtotime('next Thursday of 20120229	080238'));
		},

		'strtotime(`second Fri of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-02-10 08:02:38)':  function () {
			Y.Assert.areSame(1328860958, strtotime('second Fri of 20120229	080238'));
		},

		'strtotime(`third Wednesday of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-02-15 08:02:38)':  function () {
			Y.Assert.areSame(1329292958, strtotime('third Wednesday of 20120229	080238'));
		},

		'strtotime(`last Sat of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-02-25 08:02:38)':  function () {
			Y.Assert.areSame(1330156958, strtotime('last Sat of 20120229	080238'));
		},

		'strtotime(`fourth Sunday of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-02-26 08:02:38)':  function () {
			Y.Assert.areSame(1330243358, strtotime('fourth Sunday of 20120229	080238'));
		},

		'strtotime(`fifth Monday of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-03-05 08:02:38)':  function () {
			Y.Assert.areSame(1330934558, strtotime('fifth Monday of 20120229	080238'));
		},

		'strtotime(`sixth Mon of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-03-12 08:02:38)':  function () {
			Y.Assert.areSame(1331539358, strtotime('sixth Mon of 20120229	080238'));
		},

		'strtotime(`seventh Tue of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-03-20 08:02:38)':  function () {
			Y.Assert.areSame(1332230558, strtotime('seventh Tue of 20120229	080238'));
		},

		'strtotime(`eighth Wed of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-03-21 08:02:38)':  function () {
			Y.Assert.areSame(1332316958, strtotime('eighth Wed of 20120229	080238'));
		},

		'strtotime(`ninth Thu of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-03-29 08:02:38)':  function () {
			Y.Assert.areSame(1333008158, strtotime('ninth Thu of 20120229	080238'));
		},

		'strtotime(`tenth Sat of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-04-07 08:02:38)':  function () {
			Y.Assert.areSame(1333785758, strtotime('tenth Sat of 20120229	080238'));
		},

		'strtotime(`eleventh Friday of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-04-13 08:02:38)':  function () {
			Y.Assert.areSame(1334304158, strtotime('eleventh Friday of 20120229	080238'));
		},

		'strtotime(`twelfth Saturday of 20120229	080238`) (2012-02-29 08:02:38  xmlrpcnocolon) should give ` (2012-04-21 08:02:38)':  function () {
			Y.Assert.areSame(1334995358, strtotime('twelfth Saturday of 20120229	080238'));
		},

		'strtotime("2012-02-29T08:02:38 yesterday")  (wddf) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012-02-29T08:02:38 yesterday'), '');
		},

		'strtotime("2012-02-29T08:02:38 now")  (wddf) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012-02-29T08:02:38 now'), '');
		},

		'strtotime("2012-02-29T08:02:38 noon")  (wddf) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012-02-29T08:02:38 noon'), '');
		},

		'strtotime("2012-02-29T08:02:38 midnight")  (wddf) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29T08:02:38 midnight'), '');
		},

		'strtotime("2012-02-29T08:02:38 today")  (wddf) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-02-29T08:02:38 today'), '');
		},

		'strtotime("2012-02-29T08:02:38 tomorrow")  (wddf) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012-02-29T08:02:38 tomorrow'), '');
		},

		'strtotime("2012-02-29T08:02:38 first day of")  (wddf) should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('2012-02-29T08:02:38 first day of'), '');
		},

		'strtotime("2012-02-29T08:02:38 last day of")  (wddf) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012-02-29T08:02:38 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-02-07 08:02:38)':  function () {
			Y.Assert.areSame(1328601758, strtotime('first Tuesday of 2012-02-29T08:02:38'));
		},

		'strtotime(`next Thursday of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-02-02 08:02:38)':  function () {
			Y.Assert.areSame(1328169758, strtotime('next Thursday of 2012-02-29T08:02:38'));
		},

		'strtotime(`second Fri of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-02-10 08:02:38)':  function () {
			Y.Assert.areSame(1328860958, strtotime('second Fri of 2012-02-29T08:02:38'));
		},

		'strtotime(`third Wednesday of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-02-15 08:02:38)':  function () {
			Y.Assert.areSame(1329292958, strtotime('third Wednesday of 2012-02-29T08:02:38'));
		},

		'strtotime(`last Sat of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-02-25 08:02:38)':  function () {
			Y.Assert.areSame(1330156958, strtotime('last Sat of 2012-02-29T08:02:38'));
		},

		'strtotime(`fourth Sunday of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-02-26 08:02:38)':  function () {
			Y.Assert.areSame(1330243358, strtotime('fourth Sunday of 2012-02-29T08:02:38'));
		},

		'strtotime(`fifth Monday of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-03-05 08:02:38)':  function () {
			Y.Assert.areSame(1330934558, strtotime('fifth Monday of 2012-02-29T08:02:38'));
		},

		'strtotime(`sixth Mon of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-03-12 08:02:38)':  function () {
			Y.Assert.areSame(1331539358, strtotime('sixth Mon of 2012-02-29T08:02:38'));
		},

		'strtotime(`seventh Tue of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-03-20 08:02:38)':  function () {
			Y.Assert.areSame(1332230558, strtotime('seventh Tue of 2012-02-29T08:02:38'));
		},

		'strtotime(`eighth Wed of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-03-21 08:02:38)':  function () {
			Y.Assert.areSame(1332316958, strtotime('eighth Wed of 2012-02-29T08:02:38'));
		},

		'strtotime(`ninth Thu of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-03-29 08:02:38)':  function () {
			Y.Assert.areSame(1333008158, strtotime('ninth Thu of 2012-02-29T08:02:38'));
		},

		'strtotime(`tenth Sat of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-04-07 08:02:38)':  function () {
			Y.Assert.areSame(1333785758, strtotime('tenth Sat of 2012-02-29T08:02:38'));
		},

		'strtotime(`eleventh Friday of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-04-13 08:02:38)':  function () {
			Y.Assert.areSame(1334304158, strtotime('eleventh Friday of 2012-02-29T08:02:38'));
		},

		'strtotime(`twelfth Saturday of 2012-02-29T08:02:38`) (2012-02-29 08:02:38  wddf) should give ` (2012-04-21 08:02:38)':  function () {
			Y.Assert.areSame(1334995358, strtotime('twelfth Saturday of 2012-02-29T08:02:38'));
		},

		'strtotime("2012:02:29 08:02:38 yesterday")  (exif) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012:02:29 08:02:38 yesterday'), '');
		},

		'strtotime("2012:02:29 08:02:38 now")  (exif) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012:02:29 08:02:38 now'), '');
		},

		'strtotime("2012:02:29 08:02:38 noon")  (exif) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012:02:29 08:02:38 noon'), '');
		},

		'strtotime("2012:02:29 08:02:38 midnight")  (exif) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012:02:29 08:02:38 midnight'), '');
		},

		'strtotime("2012:02:29 08:02:38 today")  (exif) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012:02:29 08:02:38 today'), '');
		},

		'strtotime("2012:02:29 08:02:38 tomorrow")  (exif) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012:02:29 08:02:38 tomorrow'), '');
		},

		'strtotime("2012:02:29 08:02:38 first day of")  (exif) should give `1328083358` (ie 2012-02-01 08:02:38)':  function () {
			Y.Assert.areSame(1328083358, strtotime('2012:02:29 08:02:38 first day of'), '');
		},

		'strtotime("2012:02:29 08:02:38 last day of")  (exif) should give `1330502558` (ie 2012-02-29 08:02:38)':  function () {
			Y.Assert.areSame(1330502558, strtotime('2012:02:29 08:02:38 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-02-07 08:02:38)':  function () {
			Y.Assert.areSame(1328601758, strtotime('first Tuesday of 2012:02:29 08:02:38'));
		},

		'strtotime(`next Thursday of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-02-02 08:02:38)':  function () {
			Y.Assert.areSame(1328169758, strtotime('next Thursday of 2012:02:29 08:02:38'));
		},

		'strtotime(`second Fri of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-02-10 08:02:38)':  function () {
			Y.Assert.areSame(1328860958, strtotime('second Fri of 2012:02:29 08:02:38'));
		},

		'strtotime(`third Wednesday of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-02-15 08:02:38)':  function () {
			Y.Assert.areSame(1329292958, strtotime('third Wednesday of 2012:02:29 08:02:38'));
		},

		'strtotime(`last Sat of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-02-25 08:02:38)':  function () {
			Y.Assert.areSame(1330156958, strtotime('last Sat of 2012:02:29 08:02:38'));
		},

		'strtotime(`fourth Sunday of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-02-26 08:02:38)':  function () {
			Y.Assert.areSame(1330243358, strtotime('fourth Sunday of 2012:02:29 08:02:38'));
		},

		'strtotime(`fifth Monday of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-03-05 08:02:38)':  function () {
			Y.Assert.areSame(1330934558, strtotime('fifth Monday of 2012:02:29 08:02:38'));
		},

		'strtotime(`sixth Mon of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-03-12 08:02:38)':  function () {
			Y.Assert.areSame(1331539358, strtotime('sixth Mon of 2012:02:29 08:02:38'));
		},

		'strtotime(`seventh Tue of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-03-20 08:02:38)':  function () {
			Y.Assert.areSame(1332230558, strtotime('seventh Tue of 2012:02:29 08:02:38'));
		},

		'strtotime(`eighth Wed of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-03-21 08:02:38)':  function () {
			Y.Assert.areSame(1332316958, strtotime('eighth Wed of 2012:02:29 08:02:38'));
		},

		'strtotime(`ninth Thu of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-03-29 08:02:38)':  function () {
			Y.Assert.areSame(1333008158, strtotime('ninth Thu of 2012:02:29 08:02:38'));
		},

		'strtotime(`tenth Sat of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-04-07 08:02:38)':  function () {
			Y.Assert.areSame(1333785758, strtotime('tenth Sat of 2012:02:29 08:02:38'));
		},

		'strtotime(`eleventh Friday of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-04-13 08:02:38)':  function () {
			Y.Assert.areSame(1334304158, strtotime('eleventh Friday of 2012:02:29 08:02:38'));
		},

		'strtotime(`twelfth Saturday of 2012:02:29 08:02:38`) (2012-02-29 08:02:38  exif) should give ` (2012-04-21 08:02:38)':  function () {
			Y.Assert.areSame(1334995358, strtotime('twelfth Saturday of 2012:02:29 08:02:38'));
		},

		'strtotime("2012.59 yesterday")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 yesterday'), '');
		},

		'strtotime("2012.59 now")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 now'), '');
		},

		'strtotime("2012.59 noon")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 noon'), '');
		},

		'strtotime("2012.59 midnight")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 midnight'), '');
		},

		'strtotime("2012.59 today")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 today'), '');
		},

		'strtotime("2012.59 tomorrow")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 tomorrow'), '');
		},

		'strtotime("2012.59 first day of")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 first day of'), '');
		},

		'strtotime("2012.59 last day of")  (pgydotd) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('2012.59 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 2012.59'));
		},

		'strtotime(`next Thursday of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 2012.59'));
		},

		'strtotime(`second Fri of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 2012.59'));
		},

		'strtotime(`third Wednesday of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 2012.59'));
		},

		'strtotime(`last Sat of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 2012.59'));
		},

		'strtotime(`fourth Sunday of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 2012.59'));
		},

		'strtotime(`fifth Monday of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 2012.59'));
		},

		'strtotime(`sixth Mon of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 2012.59'));
		},

		'strtotime(`seventh Tue of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 2012.59'));
		},

		'strtotime(`eighth Wed of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 2012.59'));
		},

		'strtotime(`ninth Thu of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 2012.59'));
		},

		'strtotime(`tenth Sat of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 2012.59'));
		},

		'strtotime(`eleventh Friday of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 2012.59'));
		},

		'strtotime(`twelfth Saturday of 2012.59`) (2012-02-29 08:02:38  pgydotd) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 2012.59'));
		},

		'strtotime("2012W09-3 yesterday")  (isoweekday) should give `1325289600` (ie 2011-12-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1325289600, strtotime('2012W09-3 yesterday'), 'This is a suspected php bug.');
		},

		'strtotime("2012W09-3 now")  (isoweekday) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012W09-3 now'), '');
		},

		'strtotime("2012W09-3 noon")  (isoweekday) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012W09-3 noon'), '');
		},

		'strtotime("2012W09-3 midnight")  (isoweekday) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012W09-3 midnight'), '');
		},

		'strtotime("2012W09-3 today")  (isoweekday) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012W09-3 today'), '');
		},

		'strtotime("2012W09-3 tomorrow")  (isoweekday) should give `1325462400` (ie 2012-01-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1325462400, strtotime('2012W09-3 tomorrow'), 'This is a suspected php bug.');
		},

		'strtotime("2012W09-3 first day of")  (isoweekday) should give `1325376000` (ie 2012-01-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1325376000, strtotime('2012W09-3 first day of'), 'This is a suspected php bug.');
		},

		'strtotime("2012W09-3 last day of")  (isoweekday) should give `1327968000` (ie 2012-01-31 00:00:00)':  function () {
			Y.Assert.areNotSame(1327968000, strtotime('2012W09-3 last day of'), 'This is a suspected php bug.');
		},

		'strtotime(`first Tuesday of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1330646400, strtotime('first Tuesday of 2012W09-3'));
		},

		'strtotime(`next Thursday of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1330819200, strtotime('next Thursday of 2012W09-3'));
		},

		'strtotime(`second Fri of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1330905600, strtotime('second Fri of 2012W09-3'));
		},

		'strtotime(`third Wednesday of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1330732800, strtotime('third Wednesday of 2012W09-3'));
		},

		'strtotime(`last Sat of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-04-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1333411200, strtotime('last Sat of 2012W09-3'));
		},

		'strtotime(`fourth Sunday of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-02-29 00:00:00)':  function () {
			Y.Assert.areNotSame(1330473600, strtotime('fourth Sunday of 2012W09-3'));
		},

		'strtotime(`fifth Monday of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1330560000, strtotime('fifth Monday of 2012W09-3'));
		},

		'strtotime(`sixth Mon of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-01 00:00:00)':  function () {
			Y.Assert.areNotSame(1330560000, strtotime('sixth Mon of 2012W09-3'));
		},

		'strtotime(`seventh Tue of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-02 00:00:00)':  function () {
			Y.Assert.areNotSame(1330646400, strtotime('seventh Tue of 2012W09-3'));
		},

		'strtotime(`eighth Wed of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-03 00:00:00)':  function () {
			Y.Assert.areNotSame(1330732800, strtotime('eighth Wed of 2012W09-3'));
		},

		'strtotime(`ninth Thu of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-04 00:00:00)':  function () {
			Y.Assert.areNotSame(1330819200, strtotime('ninth Thu of 2012W09-3'));
		},

		'strtotime(`tenth Sat of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-06 00:00:00)':  function () {
			Y.Assert.areNotSame(1330992000, strtotime('tenth Sat of 2012W09-3'));
		},

		'strtotime(`eleventh Friday of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areNotSame(1330905600, strtotime('eleventh Friday of 2012W09-3'));
		},

		'strtotime(`twelfth Saturday of 2012W09-3`) (2012-02-29 08:02:38  isoweekday) should give ` (2012-03-06 00:00:00)':  function () {
			Y.Assert.areNotSame(1330992000, strtotime('twelfth Saturday of 2012W09-3'));
		},

		'strtotime("Feb-29-2012 yesterday")  (pgtextshort) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('Feb-29-2012 yesterday'), '');
		},

		'strtotime("Feb-29-2012 now")  (pgtextshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('Feb-29-2012 now'), '');
		},

		'strtotime("Feb-29-2012 noon")  (pgtextshort) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('Feb-29-2012 noon'), '');
		},

		'strtotime("Feb-29-2012 midnight")  (pgtextshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('Feb-29-2012 midnight'), '');
		},

		'strtotime("Feb-29-2012 today")  (pgtextshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('Feb-29-2012 today'), '');
		},

		'strtotime("Feb-29-2012 tomorrow")  (pgtextshort) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('Feb-29-2012 tomorrow'), '');
		},

		'strtotime("Feb-29-2012 first day of")  (pgtextshort) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('Feb-29-2012 first day of'), '');
		},

		'strtotime("Feb-29-2012 last day of")  (pgtextshort) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('Feb-29-2012 last day of'), '');
		},

		'strtotime(`first Tuesday of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of Feb-29-2012'));
		},

		'strtotime(`next Thursday of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of Feb-29-2012'));
		},

		'strtotime(`second Fri of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of Feb-29-2012'));
		},

		'strtotime(`third Wednesday of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of Feb-29-2012'));
		},

		'strtotime(`last Sat of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of Feb-29-2012'));
		},

		'strtotime(`fourth Sunday of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of Feb-29-2012'));
		},

		'strtotime(`fifth Monday of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of Feb-29-2012'));
		},

		'strtotime(`sixth Mon of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of Feb-29-2012'));
		},

		'strtotime(`seventh Tue of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of Feb-29-2012'));
		},

		'strtotime(`eighth Wed of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of Feb-29-2012'));
		},

		'strtotime(`ninth Thu of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of Feb-29-2012'));
		},

		'strtotime(`tenth Sat of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of Feb-29-2012'));
		},

		'strtotime(`eleventh Friday of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of Feb-29-2012'));
		},

		'strtotime(`twelfth Saturday of Feb-29-2012`) (2012-02-29 08:02:38  pgtextshort) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of Feb-29-2012'));
		},

		'strtotime("2012-Feb-29 yesterday")  (pgtextreverse) should give `1330387200` (ie 2012-02-28 00:00:00)':  function () {
			Y.Assert.areSame(1330387200, strtotime('2012-Feb-29 yesterday'), '');
		},

		'strtotime("2012-Feb-29 now")  (pgtextreverse) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-Feb-29 now'), '');
		},

		'strtotime("2012-Feb-29 noon")  (pgtextreverse) should give `1330516800` (ie 2012-02-29 12:00:00)':  function () {
			Y.Assert.areSame(1330516800, strtotime('2012-Feb-29 noon'), '');
		},

		'strtotime("2012-Feb-29 midnight")  (pgtextreverse) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-Feb-29 midnight'), '');
		},

		'strtotime("2012-Feb-29 today")  (pgtextreverse) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-Feb-29 today'), '');
		},

		'strtotime("2012-Feb-29 tomorrow")  (pgtextreverse) should give `1330560000` (ie 2012-03-01 00:00:00)':  function () {
			Y.Assert.areSame(1330560000, strtotime('2012-Feb-29 tomorrow'), '');
		},

		'strtotime("2012-Feb-29 first day of")  (pgtextreverse) should give `1328054400` (ie 2012-02-01 00:00:00)':  function () {
			Y.Assert.areSame(1328054400, strtotime('2012-Feb-29 first day of'), '');
		},

		'strtotime("2012-Feb-29 last day of")  (pgtextreverse) should give `1330473600` (ie 2012-02-29 00:00:00)':  function () {
			Y.Assert.areSame(1330473600, strtotime('2012-Feb-29 last day of'), '');
		},

		'strtotime(`first Tuesday of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-02-07 00:00:00)':  function () {
			Y.Assert.areSame(1328572800, strtotime('first Tuesday of 2012-Feb-29'));
		},

		'strtotime(`next Thursday of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-02-02 00:00:00)':  function () {
			Y.Assert.areSame(1328140800, strtotime('next Thursday of 2012-Feb-29'));
		},

		'strtotime(`second Fri of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-02-10 00:00:00)':  function () {
			Y.Assert.areSame(1328832000, strtotime('second Fri of 2012-Feb-29'));
		},

		'strtotime(`third Wednesday of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-02-15 00:00:00)':  function () {
			Y.Assert.areSame(1329264000, strtotime('third Wednesday of 2012-Feb-29'));
		},

		'strtotime(`last Sat of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-02-25 00:00:00)':  function () {
			Y.Assert.areSame(1330128000, strtotime('last Sat of 2012-Feb-29'));
		},

		'strtotime(`fourth Sunday of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-02-26 00:00:00)':  function () {
			Y.Assert.areSame(1330214400, strtotime('fourth Sunday of 2012-Feb-29'));
		},

		'strtotime(`fifth Monday of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-03-05 00:00:00)':  function () {
			Y.Assert.areSame(1330905600, strtotime('fifth Monday of 2012-Feb-29'));
		},

		'strtotime(`sixth Mon of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-03-12 00:00:00)':  function () {
			Y.Assert.areSame(1331510400, strtotime('sixth Mon of 2012-Feb-29'));
		},

		'strtotime(`seventh Tue of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-03-20 00:00:00)':  function () {
			Y.Assert.areSame(1332201600, strtotime('seventh Tue of 2012-Feb-29'));
		},

		'strtotime(`eighth Wed of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-03-21 00:00:00)':  function () {
			Y.Assert.areSame(1332288000, strtotime('eighth Wed of 2012-Feb-29'));
		},

		'strtotime(`ninth Thu of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-03-29 00:00:00)':  function () {
			Y.Assert.areSame(1332979200, strtotime('ninth Thu of 2012-Feb-29'));
		},

		'strtotime(`tenth Sat of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-04-07 00:00:00)':  function () {
			Y.Assert.areSame(1333756800, strtotime('tenth Sat of 2012-Feb-29'));
		},

		'strtotime(`eleventh Friday of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-04-13 00:00:00)':  function () {
			Y.Assert.areSame(1334275200, strtotime('eleventh Friday of 2012-Feb-29'));
		},

		'strtotime(`twelfth Saturday of 2012-Feb-29`) (2012-02-29 08:02:38  pgtextreverse) should give ` (2012-04-21 00:00:00)':  function () {
			Y.Assert.areSame(1334966400, strtotime('twelfth Saturday of 2012-Feb-29'));
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 yesterday")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 yesterday'), '');
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 now")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 now'), '');
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 noon")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 noon'), '');
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 midnight")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 midnight'), '');
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 today")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 today'), '');
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 tomorrow")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 tomorrow'), '');
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 first day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 first day of'), '');
		},

		'strtotime("29/Feb/2012:08:02:38 GMT3:30 last day of")  (clf) should give `false':  function () {
			Y.Assert.areSame(false, strtotime('29/Feb/2012:08:02:38 GMT3:30 last day of'), '');
		},

		'strtotime(`first Tuesday of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('first Tuesday of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`next Thursday of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('next Thursday of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`second Fri of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('second Fri of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`third Wednesday of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('third Wednesday of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`last Sat of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('last Sat of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`fourth Sunday of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fourth Sunday of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`fifth Monday of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('fifth Monday of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`sixth Mon of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('sixth Mon of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`seventh Tue of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('seventh Tue of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`eighth Wed of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eighth Wed of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`ninth Thu of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('ninth Thu of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`tenth Sat of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('tenth Sat of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`eleventh Friday of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('eleventh Friday of 29/Feb/2012:08:02:38 GMT3:30'));
		},

		'strtotime(`twelfth Saturday of 29/Feb/2012:08:02:38 GMT3:30`) (2012-02-29 08:02:38  clf) should give `':  function () {
			Y.Assert.areSame(false, strtotime('twelfth Saturday of 29/Feb/2012:08:02:38 GMT3:30'));
		}
	}));

	suite.add(new Y.Test.Case({
	    name: "Y.DataType.Date.strtotime php generated tests: extra tests",


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

		'Extras: strtotime("Mon", 1360022400) should give `1360540800`':  function () {
			Y.Assert.areSame(1360540800, strtotime('Mon', 1360022400));
		},

		'Extras: strtotime("Tue", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('Tue', 1360022400));
		},

		'Extras: strtotime("Wed", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('Wed', 1360022400));
		},

		'Extras: strtotime("Thu", 1360022400) should give `1360195200`':  function () {
			Y.Assert.areSame(1360195200, strtotime('Thu', 1360022400));
		},

		'Extras: strtotime("Fri", 1360022400) should give `1360281600`':  function () {
			Y.Assert.areSame(1360281600, strtotime('Fri', 1360022400));
		},

		'Extras: strtotime("Sat", 1360022400) should give `1360368000`':  function () {
			Y.Assert.areSame(1360368000, strtotime('Sat', 1360022400));
		},

		'Extras: strtotime("Sun", 1360022400) should give `1360454400`':  function () {
			Y.Assert.areSame(1360454400, strtotime('Sun', 1360022400));
		},

		'Extras: strtotime("Monday", 1360022400) should give `1360540800`':  function () {
			Y.Assert.areSame(1360540800, strtotime('Monday', 1360022400));
		},

		'Extras: strtotime("Tuesday", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('Tuesday', 1360022400));
		},

		'Extras: strtotime("Wednesday", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('Wednesday', 1360022400));
		},

		'Extras: strtotime("Thursday", 1360022400) should give `1360195200`':  function () {
			Y.Assert.areSame(1360195200, strtotime('Thursday', 1360022400));
		},

		'Extras: strtotime("Friday", 1360022400) should give `1360281600`':  function () {
			Y.Assert.areSame(1360281600, strtotime('Friday', 1360022400));
		},

		'Extras: strtotime("Saturday", 1360022400) should give `1360368000`':  function () {
			Y.Assert.areSame(1360368000, strtotime('Saturday', 1360022400));
		},

		'Extras: strtotime("Sunday", 1360022400) should give `1360454400`':  function () {
			Y.Assert.areSame(1360454400, strtotime('Sunday', 1360022400));
		},

		'Extras: strtotime("January", 1360022400) should give `1357344000`':  function () {
			Y.Assert.areSame(1357344000, strtotime('January', 1360022400));
		},

		'Extras: strtotime("February", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('February', 1360022400));
		},

		'Extras: strtotime("March", 1360022400) should give `1362441600`':  function () {
			Y.Assert.areSame(1362441600, strtotime('March', 1360022400));
		},

		'Extras: strtotime("April", 1360022400) should give `1365120000`':  function () {
			Y.Assert.areSame(1365120000, strtotime('April', 1360022400));
		},

		'Extras: strtotime("May", 1360022400) should give `1367712000`':  function () {
			Y.Assert.areSame(1367712000, strtotime('May', 1360022400));
		},

		'Extras: strtotime("June", 1360022400) should give `1370390400`':  function () {
			Y.Assert.areSame(1370390400, strtotime('June', 1360022400));
		},

		'Extras: strtotime("July", 1360022400) should give `1372982400`':  function () {
			Y.Assert.areSame(1372982400, strtotime('July', 1360022400));
		},

		'Extras: strtotime("August", 1360022400) should give `1375660800`':  function () {
			Y.Assert.areSame(1375660800, strtotime('August', 1360022400));
		},

		'Extras: strtotime("September", 1360022400) should give `1378339200`':  function () {
			Y.Assert.areSame(1378339200, strtotime('September', 1360022400));
		},

		'Extras: strtotime("October", 1360022400) should give `1380931200`':  function () {
			Y.Assert.areSame(1380931200, strtotime('October', 1360022400));
		},

		'Extras: strtotime("November", 1360022400) should give `1383609600`':  function () {
			Y.Assert.areSame(1383609600, strtotime('November', 1360022400));
		},

		'Extras: strtotime("December", 1360022400) should give `1386201600`':  function () {
			Y.Assert.areSame(1386201600, strtotime('December', 1360022400));
		},

		'Extras: strtotime("Jan", 1360022400) should give `1357344000`':  function () {
			Y.Assert.areSame(1357344000, strtotime('Jan', 1360022400));
		},

		'Extras: strtotime("Feb", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('Feb', 1360022400));
		},

		'Extras: strtotime("Mar", 1360022400) should give `1362441600`':  function () {
			Y.Assert.areSame(1362441600, strtotime('Mar', 1360022400));
		},

		'Extras: strtotime("Apr", 1360022400) should give `1365120000`':  function () {
			Y.Assert.areSame(1365120000, strtotime('Apr', 1360022400));
		},

		'Extras: strtotime("Jun", 1360022400) should give `1370390400`':  function () {
			Y.Assert.areSame(1370390400, strtotime('Jun', 1360022400));
		},

		'Extras: strtotime("Jul", 1360022400) should give `1372982400`':  function () {
			Y.Assert.areSame(1372982400, strtotime('Jul', 1360022400));
		},

		'Extras: strtotime("Aug", 1360022400) should give `1375660800`':  function () {
			Y.Assert.areSame(1375660800, strtotime('Aug', 1360022400));
		},

		'Extras: strtotime("Sep", 1360022400) should give `1378339200`':  function () {
			Y.Assert.areSame(1378339200, strtotime('Sep', 1360022400));
		},

		'Extras: strtotime("Oct", 1360022400) should give `1380931200`':  function () {
			Y.Assert.areSame(1380931200, strtotime('Oct', 1360022400));
		},

		'Extras: strtotime("Nov", 1360022400) should give `1383609600`':  function () {
			Y.Assert.areSame(1383609600, strtotime('Nov', 1360022400));
		},

		'Extras: strtotime("Dec", 1360022400) should give `1386201600`':  function () {
			Y.Assert.areSame(1386201600, strtotime('Dec', 1360022400));
		},

		'Extras: strtotime("next second", 1360022400) should give `1360022401`':  function () {
			Y.Assert.areSame(1360022401, strtotime('next second', 1360022400));
		},

		'Extras: strtotime("next sec", 1360022400) should give `1360022401`':  function () {
			Y.Assert.areSame(1360022401, strtotime('next sec', 1360022400));
		},

		'Extras: strtotime("next minute", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('next minute', 1360022400));
		},

		'Extras: strtotime("next min", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('next min', 1360022400));
		},

		'Extras: strtotime("next hour", 1360022400) should give `1360026000`':  function () {
			Y.Assert.areSame(1360026000, strtotime('next hour', 1360022400));
		},

		'Extras: strtotime("next day", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('next day', 1360022400));
		},

		'Extras: strtotime("next week", 1360022400) should give `1360540800`':  function () {
			Y.Assert.areSame(1360540800, strtotime('next week', 1360022400));
		},

		'Extras: strtotime("next fortnight", 1360022400) should give `1361232000`':  function () {
			Y.Assert.areSame(1361232000, strtotime('next fortnight', 1360022400));
		},

		'Extras: strtotime("next month", 1360022400) should give `1362441600`':  function () {
			Y.Assert.areSame(1362441600, strtotime('next month', 1360022400));
		},

		'Extras: strtotime("next year", 1360022400) should give `1391558400`':  function () {
			Y.Assert.areSame(1391558400, strtotime('next year', 1360022400));
		},

		'Extras: strtotime("last second", 1360022400) should give `1360022399`':  function () {
			Y.Assert.areSame(1360022399, strtotime('last second', 1360022400));
		},

		'Extras: strtotime("last sec", 1360022400) should give `1360022399`':  function () {
			Y.Assert.areSame(1360022399, strtotime('last sec', 1360022400));
		},

		'Extras: strtotime("last minute", 1360022400) should give `1360022340`':  function () {
			Y.Assert.areSame(1360022340, strtotime('last minute', 1360022400));
		},

		'Extras: strtotime("last min", 1360022400) should give `1360022340`':  function () {
			Y.Assert.areSame(1360022340, strtotime('last min', 1360022400));
		},

		'Extras: strtotime("last hour", 1360022400) should give `1360018800`':  function () {
			Y.Assert.areSame(1360018800, strtotime('last hour', 1360022400));
		},

		'Extras: strtotime("last day", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('last day', 1360022400));
		},

		'Extras: strtotime("last week", 1360022400) should give `1359331200`':  function () {
			Y.Assert.areSame(1359331200, strtotime('last week', 1360022400));
		},

		'Extras: strtotime("last fortnight", 1360022400) should give `1358812800`':  function () {
			Y.Assert.areSame(1358812800, strtotime('last fortnight', 1360022400));
		},

		'Extras: strtotime("last month", 1360022400) should give `1357344000`':  function () {
			Y.Assert.areSame(1357344000, strtotime('last month', 1360022400));
		},

		'Extras: strtotime("last year", 1360022400) should give `1328400000`':  function () {
			Y.Assert.areSame(1328400000, strtotime('last year', 1360022400));
		},

		'Extras: strtotime("previous second", 1360022400) should give `1360022399`':  function () {
			Y.Assert.areSame(1360022399, strtotime('previous second', 1360022400));
		},

		'Extras: strtotime("previous sec", 1360022400) should give `1360022399`':  function () {
			Y.Assert.areSame(1360022399, strtotime('previous sec', 1360022400));
		},

		'Extras: strtotime("previous minute", 1360022400) should give `1360022340`':  function () {
			Y.Assert.areSame(1360022340, strtotime('previous minute', 1360022400));
		},

		'Extras: strtotime("previous min", 1360022400) should give `1360022340`':  function () {
			Y.Assert.areSame(1360022340, strtotime('previous min', 1360022400));
		},

		'Extras: strtotime("previous hour", 1360022400) should give `1360018800`':  function () {
			Y.Assert.areSame(1360018800, strtotime('previous hour', 1360022400));
		},

		'Extras: strtotime("previous day", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('previous day', 1360022400));
		},

		'Extras: strtotime("previous week", 1360022400) should give `1359331200`':  function () {
			Y.Assert.areSame(1359331200, strtotime('previous week', 1360022400));
		},

		'Extras: strtotime("previous fortnight", 1360022400) should give `1358812800`':  function () {
			Y.Assert.areSame(1358812800, strtotime('previous fortnight', 1360022400));
		},

		'Extras: strtotime("previous month", 1360022400) should give `1357344000`':  function () {
			Y.Assert.areSame(1357344000, strtotime('previous month', 1360022400));
		},

		'Extras: strtotime("previous year", 1360022400) should give `1328400000`':  function () {
			Y.Assert.areSame(1328400000, strtotime('previous year', 1360022400));
		},

		'Extras: strtotime("this second", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this second', 1360022400));
		},

		'Extras: strtotime("this sec", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this sec', 1360022400));
		},

		'Extras: strtotime("this minute", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this minute', 1360022400));
		},

		'Extras: strtotime("this min", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this min', 1360022400));
		},

		'Extras: strtotime("this hour", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this hour', 1360022400));
		},

		'Extras: strtotime("this day", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this day', 1360022400));
		},

		'Extras: strtotime("this week", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('this week', 1360022400));
		},

		'Extras: strtotime("this fortnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this fortnight', 1360022400));
		},

		'Extras: strtotime("this month", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this month', 1360022400));
		},

		'Extras: strtotime("this year", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('this year', 1360022400));
		},

		'Extras: strtotime("first second", 1360022400) should give `1360022401`':  function () {
			Y.Assert.areSame(1360022401, strtotime('first second', 1360022400));
		},

		'Extras: strtotime("first sec", 1360022400) should give `1360022401`':  function () {
			Y.Assert.areSame(1360022401, strtotime('first sec', 1360022400));
		},

		'Extras: strtotime("first minute", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('first minute', 1360022400));
		},

		'Extras: strtotime("first min", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('first min', 1360022400));
		},

		'Extras: strtotime("first hour", 1360022400) should give `1360026000`':  function () {
			Y.Assert.areSame(1360026000, strtotime('first hour', 1360022400));
		},

		'Extras: strtotime("first day", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('first day', 1360022400));
		},

		'Extras: strtotime("first week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('first week', 1360022400));
		},

		'Extras: strtotime("first fortnight", 1360022400) should give `1361232000`':  function () {
			Y.Assert.areSame(1361232000, strtotime('first fortnight', 1360022400));
		},

		'Extras: strtotime("first month", 1360022400) should give `1362441600`':  function () {
			Y.Assert.areSame(1362441600, strtotime('first month', 1360022400));
		},

		'Extras: strtotime("first year", 1360022400) should give `1391558400`':  function () {
			Y.Assert.areSame(1391558400, strtotime('first year', 1360022400));
		},

		'Extras: strtotime("second second", 1360022400) should give `1360022402`':  function () {
			Y.Assert.areSame(1360022402, strtotime('second second', 1360022400));
		},

		'Extras: strtotime("second sec", 1360022400) should give `1360022402`':  function () {
			Y.Assert.areSame(1360022402, strtotime('second sec', 1360022400));
		},

		'Extras: strtotime("second minute", 1360022400) should give `1360022520`':  function () {
			Y.Assert.areSame(1360022520, strtotime('second minute', 1360022400));
		},

		'Extras: strtotime("second min", 1360022400) should give `1360022520`':  function () {
			Y.Assert.areSame(1360022520, strtotime('second min', 1360022400));
		},

		'Extras: strtotime("second hour", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('second hour', 1360022400));
		},

		'Extras: strtotime("second day", 1360022400) should give `1360195200`':  function () {
			Y.Assert.areSame(1360195200, strtotime('second day', 1360022400));
		},

		'Extras: strtotime("second week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('second week', 1360022400));
		},

		'Extras: strtotime("second fortnight", 1360022400) should give `1362441600`':  function () {
			Y.Assert.areSame(1362441600, strtotime('second fortnight', 1360022400));
		},

		'Extras: strtotime("second month", 1360022400) should give `1365120000`':  function () {
			Y.Assert.areSame(1365120000, strtotime('second month', 1360022400));
		},

		'Extras: strtotime("second year", 1360022400) should give `1423094400`':  function () {
			Y.Assert.areSame(1423094400, strtotime('second year', 1360022400));
		},

		'Extras: strtotime("third second", 1360022400) should give `1360022403`':  function () {
			Y.Assert.areSame(1360022403, strtotime('third second', 1360022400));
		},

		'Extras: strtotime("third sec", 1360022400) should give `1360022403`':  function () {
			Y.Assert.areSame(1360022403, strtotime('third sec', 1360022400));
		},

		'Extras: strtotime("third minute", 1360022400) should give `1360022580`':  function () {
			Y.Assert.areSame(1360022580, strtotime('third minute', 1360022400));
		},

		'Extras: strtotime("third min", 1360022400) should give `1360022580`':  function () {
			Y.Assert.areSame(1360022580, strtotime('third min', 1360022400));
		},

		'Extras: strtotime("third hour", 1360022400) should give `1360033200`':  function () {
			Y.Assert.areSame(1360033200, strtotime('third hour', 1360022400));
		},

		'Extras: strtotime("third day", 1360022400) should give `1360281600`':  function () {
			Y.Assert.areSame(1360281600, strtotime('third day', 1360022400));
		},

		'Extras: strtotime("third week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('third week', 1360022400));
		},

		'Extras: strtotime("third fortnight", 1360022400) should give `1363651200`':  function () {
			Y.Assert.areSame(1363651200, strtotime('third fortnight', 1360022400));
		},

		'Extras: strtotime("third month", 1360022400) should give `1367712000`':  function () {
			Y.Assert.areSame(1367712000, strtotime('third month', 1360022400));
		},

		'Extras: strtotime("third year", 1360022400) should give `1454630400`':  function () {
			Y.Assert.areSame(1454630400, strtotime('third year', 1360022400));
		},

		'Extras: strtotime("fourth second", 1360022400) should give `1360022404`':  function () {
			Y.Assert.areSame(1360022404, strtotime('fourth second', 1360022400));
		},

		'Extras: strtotime("fourth sec", 1360022400) should give `1360022404`':  function () {
			Y.Assert.areSame(1360022404, strtotime('fourth sec', 1360022400));
		},

		'Extras: strtotime("fourth minute", 1360022400) should give `1360022640`':  function () {
			Y.Assert.areSame(1360022640, strtotime('fourth minute', 1360022400));
		},

		'Extras: strtotime("fourth min", 1360022400) should give `1360022640`':  function () {
			Y.Assert.areSame(1360022640, strtotime('fourth min', 1360022400));
		},

		'Extras: strtotime("fourth hour", 1360022400) should give `1360036800`':  function () {
			Y.Assert.areSame(1360036800, strtotime('fourth hour', 1360022400));
		},

		'Extras: strtotime("fourth day", 1360022400) should give `1360368000`':  function () {
			Y.Assert.areSame(1360368000, strtotime('fourth day', 1360022400));
		},

		'Extras: strtotime("fourth week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fourth week', 1360022400));
		},

		'Extras: strtotime("fourth fortnight", 1360022400) should give `1364860800`':  function () {
			Y.Assert.areSame(1364860800, strtotime('fourth fortnight', 1360022400));
		},

		'Extras: strtotime("fourth month", 1360022400) should give `1370390400`':  function () {
			Y.Assert.areSame(1370390400, strtotime('fourth month', 1360022400));
		},

		'Extras: strtotime("fourth year", 1360022400) should give `1486252800`':  function () {
			Y.Assert.areSame(1486252800, strtotime('fourth year', 1360022400));
		},

		'Extras: strtotime("fifth second", 1360022400) should give `1360022405`':  function () {
			Y.Assert.areSame(1360022405, strtotime('fifth second', 1360022400));
		},

		'Extras: strtotime("fifth sec", 1360022400) should give `1360022405`':  function () {
			Y.Assert.areSame(1360022405, strtotime('fifth sec', 1360022400));
		},

		'Extras: strtotime("fifth minute", 1360022400) should give `1360022700`':  function () {
			Y.Assert.areSame(1360022700, strtotime('fifth minute', 1360022400));
		},

		'Extras: strtotime("fifth min", 1360022400) should give `1360022700`':  function () {
			Y.Assert.areSame(1360022700, strtotime('fifth min', 1360022400));
		},

		'Extras: strtotime("fifth hour", 1360022400) should give `1360040400`':  function () {
			Y.Assert.areSame(1360040400, strtotime('fifth hour', 1360022400));
		},

		'Extras: strtotime("fifth day", 1360022400) should give `1360454400`':  function () {
			Y.Assert.areSame(1360454400, strtotime('fifth day', 1360022400));
		},

		'Extras: strtotime("fifth week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('fifth week', 1360022400));
		},

		'Extras: strtotime("fifth fortnight", 1360022400) should give `1366070400`':  function () {
			Y.Assert.areSame(1366070400, strtotime('fifth fortnight', 1360022400));
		},

		'Extras: strtotime("fifth month", 1360022400) should give `1372982400`':  function () {
			Y.Assert.areSame(1372982400, strtotime('fifth month', 1360022400));
		},

		'Extras: strtotime("fifth year", 1360022400) should give `1517788800`':  function () {
			Y.Assert.areSame(1517788800, strtotime('fifth year', 1360022400));
		},

		'Extras: strtotime("sixth second", 1360022400) should give `1360022406`':  function () {
			Y.Assert.areSame(1360022406, strtotime('sixth second', 1360022400));
		},

		'Extras: strtotime("sixth sec", 1360022400) should give `1360022406`':  function () {
			Y.Assert.areSame(1360022406, strtotime('sixth sec', 1360022400));
		},

		'Extras: strtotime("sixth minute", 1360022400) should give `1360022760`':  function () {
			Y.Assert.areSame(1360022760, strtotime('sixth minute', 1360022400));
		},

		'Extras: strtotime("sixth min", 1360022400) should give `1360022760`':  function () {
			Y.Assert.areSame(1360022760, strtotime('sixth min', 1360022400));
		},

		'Extras: strtotime("sixth hour", 1360022400) should give `1360044000`':  function () {
			Y.Assert.areSame(1360044000, strtotime('sixth hour', 1360022400));
		},

		'Extras: strtotime("sixth day", 1360022400) should give `1360540800`':  function () {
			Y.Assert.areSame(1360540800, strtotime('sixth day', 1360022400));
		},

		'Extras: strtotime("sixth week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('sixth week', 1360022400));
		},

		'Extras: strtotime("sixth fortnight", 1360022400) should give `1367280000`':  function () {
			Y.Assert.areSame(1367280000, strtotime('sixth fortnight', 1360022400));
		},

		'Extras: strtotime("sixth month", 1360022400) should give `1375660800`':  function () {
			Y.Assert.areSame(1375660800, strtotime('sixth month', 1360022400));
		},

		'Extras: strtotime("sixth year", 1360022400) should give `1549324800`':  function () {
			Y.Assert.areSame(1549324800, strtotime('sixth year', 1360022400));
		},

		'Extras: strtotime("seventh second", 1360022400) should give `1360022407`':  function () {
			Y.Assert.areSame(1360022407, strtotime('seventh second', 1360022400));
		},

		'Extras: strtotime("seventh sec", 1360022400) should give `1360022407`':  function () {
			Y.Assert.areSame(1360022407, strtotime('seventh sec', 1360022400));
		},

		'Extras: strtotime("seventh minute", 1360022400) should give `1360022820`':  function () {
			Y.Assert.areSame(1360022820, strtotime('seventh minute', 1360022400));
		},

		'Extras: strtotime("seventh min", 1360022400) should give `1360022820`':  function () {
			Y.Assert.areSame(1360022820, strtotime('seventh min', 1360022400));
		},

		'Extras: strtotime("seventh hour", 1360022400) should give `1360047600`':  function () {
			Y.Assert.areSame(1360047600, strtotime('seventh hour', 1360022400));
		},

		'Extras: strtotime("seventh day", 1360022400) should give `1360627200`':  function () {
			Y.Assert.areSame(1360627200, strtotime('seventh day', 1360022400));
		},

		'Extras: strtotime("seventh week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('seventh week', 1360022400));
		},

		'Extras: strtotime("seventh fortnight", 1360022400) should give `1368489600`':  function () {
			Y.Assert.areSame(1368489600, strtotime('seventh fortnight', 1360022400));
		},

		'Extras: strtotime("seventh month", 1360022400) should give `1378339200`':  function () {
			Y.Assert.areSame(1378339200, strtotime('seventh month', 1360022400));
		},

		'Extras: strtotime("seventh year", 1360022400) should give `1580860800`':  function () {
			Y.Assert.areSame(1580860800, strtotime('seventh year', 1360022400));
		},

		'Extras: strtotime("eighth second", 1360022400) should give `1360022408`':  function () {
			Y.Assert.areSame(1360022408, strtotime('eighth second', 1360022400));
		},

		'Extras: strtotime("eighth sec", 1360022400) should give `1360022408`':  function () {
			Y.Assert.areSame(1360022408, strtotime('eighth sec', 1360022400));
		},

		'Extras: strtotime("eighth minute", 1360022400) should give `1360022880`':  function () {
			Y.Assert.areSame(1360022880, strtotime('eighth minute', 1360022400));
		},

		'Extras: strtotime("eighth min", 1360022400) should give `1360022880`':  function () {
			Y.Assert.areSame(1360022880, strtotime('eighth min', 1360022400));
		},

		'Extras: strtotime("eighth hour", 1360022400) should give `1360051200`':  function () {
			Y.Assert.areSame(1360051200, strtotime('eighth hour', 1360022400));
		},

		'Extras: strtotime("eighth day", 1360022400) should give `1360713600`':  function () {
			Y.Assert.areSame(1360713600, strtotime('eighth day', 1360022400));
		},

		'Extras: strtotime("eighth week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eighth week', 1360022400));
		},

		'Extras: strtotime("eighth fortnight", 1360022400) should give `1369699200`':  function () {
			Y.Assert.areSame(1369699200, strtotime('eighth fortnight', 1360022400));
		},

		'Extras: strtotime("eighth month", 1360022400) should give `1380931200`':  function () {
			Y.Assert.areSame(1380931200, strtotime('eighth month', 1360022400));
		},

		'Extras: strtotime("eighth year", 1360022400) should give `1612483200`':  function () {
			Y.Assert.areSame(1612483200, strtotime('eighth year', 1360022400));
		},

		'Extras: strtotime("ninth second", 1360022400) should give `1360022409`':  function () {
			Y.Assert.areSame(1360022409, strtotime('ninth second', 1360022400));
		},

		'Extras: strtotime("ninth sec", 1360022400) should give `1360022409`':  function () {
			Y.Assert.areSame(1360022409, strtotime('ninth sec', 1360022400));
		},

		'Extras: strtotime("ninth minute", 1360022400) should give `1360022940`':  function () {
			Y.Assert.areSame(1360022940, strtotime('ninth minute', 1360022400));
		},

		'Extras: strtotime("ninth min", 1360022400) should give `1360022940`':  function () {
			Y.Assert.areSame(1360022940, strtotime('ninth min', 1360022400));
		},

		'Extras: strtotime("ninth hour", 1360022400) should give `1360054800`':  function () {
			Y.Assert.areSame(1360054800, strtotime('ninth hour', 1360022400));
		},

		'Extras: strtotime("ninth day", 1360022400) should give `1360800000`':  function () {
			Y.Assert.areSame(1360800000, strtotime('ninth day', 1360022400));
		},

		'Extras: strtotime("ninth week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('ninth week', 1360022400));
		},

		'Extras: strtotime("ninth fortnight", 1360022400) should give `1370908800`':  function () {
			Y.Assert.areSame(1370908800, strtotime('ninth fortnight', 1360022400));
		},

		'Extras: strtotime("ninth month", 1360022400) should give `1383609600`':  function () {
			Y.Assert.areSame(1383609600, strtotime('ninth month', 1360022400));
		},

		'Extras: strtotime("ninth year", 1360022400) should give `1644019200`':  function () {
			Y.Assert.areSame(1644019200, strtotime('ninth year', 1360022400));
		},

		'Extras: strtotime("tenth second", 1360022400) should give `1360022410`':  function () {
			Y.Assert.areSame(1360022410, strtotime('tenth second', 1360022400));
		},

		'Extras: strtotime("tenth sec", 1360022400) should give `1360022410`':  function () {
			Y.Assert.areSame(1360022410, strtotime('tenth sec', 1360022400));
		},

		'Extras: strtotime("tenth minute", 1360022400) should give `1360023000`':  function () {
			Y.Assert.areSame(1360023000, strtotime('tenth minute', 1360022400));
		},

		'Extras: strtotime("tenth min", 1360022400) should give `1360023000`':  function () {
			Y.Assert.areSame(1360023000, strtotime('tenth min', 1360022400));
		},

		'Extras: strtotime("tenth hour", 1360022400) should give `1360058400`':  function () {
			Y.Assert.areSame(1360058400, strtotime('tenth hour', 1360022400));
		},

		'Extras: strtotime("tenth day", 1360022400) should give `1360886400`':  function () {
			Y.Assert.areSame(1360886400, strtotime('tenth day', 1360022400));
		},

		'Extras: strtotime("tenth week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('tenth week', 1360022400));
		},

		'Extras: strtotime("tenth fortnight", 1360022400) should give `1372118400`':  function () {
			Y.Assert.areSame(1372118400, strtotime('tenth fortnight', 1360022400));
		},

		'Extras: strtotime("tenth month", 1360022400) should give `1386201600`':  function () {
			Y.Assert.areSame(1386201600, strtotime('tenth month', 1360022400));
		},

		'Extras: strtotime("tenth year", 1360022400) should give `1675555200`':  function () {
			Y.Assert.areSame(1675555200, strtotime('tenth year', 1360022400));
		},

		'Extras: strtotime("eleventh second", 1360022400) should give `1360022411`':  function () {
			Y.Assert.areSame(1360022411, strtotime('eleventh second', 1360022400));
		},

		'Extras: strtotime("eleventh sec", 1360022400) should give `1360022411`':  function () {
			Y.Assert.areSame(1360022411, strtotime('eleventh sec', 1360022400));
		},

		'Extras: strtotime("eleventh minute", 1360022400) should give `1360023060`':  function () {
			Y.Assert.areSame(1360023060, strtotime('eleventh minute', 1360022400));
		},

		'Extras: strtotime("eleventh min", 1360022400) should give `1360023060`':  function () {
			Y.Assert.areSame(1360023060, strtotime('eleventh min', 1360022400));
		},

		'Extras: strtotime("eleventh hour", 1360022400) should give `1360062000`':  function () {
			Y.Assert.areSame(1360062000, strtotime('eleventh hour', 1360022400));
		},

		'Extras: strtotime("eleventh day", 1360022400) should give `1360972800`':  function () {
			Y.Assert.areSame(1360972800, strtotime('eleventh day', 1360022400));
		},

		'Extras: strtotime("eleventh week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('eleventh week', 1360022400));
		},

		'Extras: strtotime("eleventh fortnight", 1360022400) should give `1373328000`':  function () {
			Y.Assert.areSame(1373328000, strtotime('eleventh fortnight', 1360022400));
		},

		'Extras: strtotime("eleventh month", 1360022400) should give `1388880000`':  function () {
			Y.Assert.areSame(1388880000, strtotime('eleventh month', 1360022400));
		},

		'Extras: strtotime("eleventh year", 1360022400) should give `1707091200`':  function () {
			Y.Assert.areSame(1707091200, strtotime('eleventh year', 1360022400));
		},

		'Extras: strtotime("twelfth second", 1360022400) should give `1360022412`':  function () {
			Y.Assert.areSame(1360022412, strtotime('twelfth second', 1360022400));
		},

		'Extras: strtotime("twelfth sec", 1360022400) should give `1360022412`':  function () {
			Y.Assert.areSame(1360022412, strtotime('twelfth sec', 1360022400));
		},

		'Extras: strtotime("twelfth minute", 1360022400) should give `1360023120`':  function () {
			Y.Assert.areSame(1360023120, strtotime('twelfth minute', 1360022400));
		},

		'Extras: strtotime("twelfth min", 1360022400) should give `1360023120`':  function () {
			Y.Assert.areSame(1360023120, strtotime('twelfth min', 1360022400));
		},

		'Extras: strtotime("twelfth hour", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('twelfth hour', 1360022400));
		},

		'Extras: strtotime("twelfth day", 1360022400) should give `1361059200`':  function () {
			Y.Assert.areSame(1361059200, strtotime('twelfth day', 1360022400));
		},

		'Extras: strtotime("twelfth week", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('twelfth week', 1360022400));
		},

		'Extras: strtotime("twelfth fortnight", 1360022400) should give `1374537600`':  function () {
			Y.Assert.areSame(1374537600, strtotime('twelfth fortnight', 1360022400));
		},

		'Extras: strtotime("twelfth month", 1360022400) should give `1391558400`':  function () {
			Y.Assert.areSame(1391558400, strtotime('twelfth month', 1360022400));
		},

		'Extras: strtotime("twelfth year", 1360022400) should give `1738713600`':  function () {
			Y.Assert.areSame(1738713600, strtotime('twelfth year', 1360022400));
		},

		'Extras: strtotime("+1 second", 1360022400) should give `1360022401`':  function () {
			Y.Assert.areSame(1360022401, strtotime('+1 second', 1360022400));
		},

		'Extras: strtotime("+1 sec", 1360022400) should give `1360022401`':  function () {
			Y.Assert.areSame(1360022401, strtotime('+1 sec', 1360022400));
		},

		'Extras: strtotime("+1 minute", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('+1 minute', 1360022400));
		},

		'Extras: strtotime("+1 min", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('+1 min', 1360022400));
		},

		'Extras: strtotime("+1 hour", 1360022400) should give `1360026000`':  function () {
			Y.Assert.areSame(1360026000, strtotime('+1 hour', 1360022400));
		},

		'Extras: strtotime("+1 day", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('+1 day', 1360022400));
		},

		'Extras: strtotime("+1 week", 1360022400) should give `1360627200`':  function () {
			Y.Assert.areSame(1360627200, strtotime('+1 week', 1360022400));
		},

		'Extras: strtotime("+1 fortnight", 1360022400) should give `1361232000`':  function () {
			Y.Assert.areSame(1361232000, strtotime('+1 fortnight', 1360022400));
		},

		'Extras: strtotime("+1 month", 1360022400) should give `1362441600`':  function () {
			Y.Assert.areSame(1362441600, strtotime('+1 month', 1360022400));
		},

		'Extras: strtotime("+1 year", 1360022400) should give `1391558400`':  function () {
			Y.Assert.areSame(1391558400, strtotime('+1 year', 1360022400));
		},

		'Extras: strtotime("-2 second", 1360022400) should give `1360022398`':  function () {
			Y.Assert.areSame(1360022398, strtotime('-2 second', 1360022400));
		},

		'Extras: strtotime("-2 sec", 1360022400) should give `1360022398`':  function () {
			Y.Assert.areSame(1360022398, strtotime('-2 sec', 1360022400));
		},

		'Extras: strtotime("-2 minute", 1360022400) should give `1360022280`':  function () {
			Y.Assert.areSame(1360022280, strtotime('-2 minute', 1360022400));
		},

		'Extras: strtotime("-2 min", 1360022400) should give `1360022280`':  function () {
			Y.Assert.areSame(1360022280, strtotime('-2 min', 1360022400));
		},

		'Extras: strtotime("-2 hour", 1360022400) should give `1360015200`':  function () {
			Y.Assert.areSame(1360015200, strtotime('-2 hour', 1360022400));
		},

		'Extras: strtotime("-2 day", 1360022400) should give `1359849600`':  function () {
			Y.Assert.areSame(1359849600, strtotime('-2 day', 1360022400));
		},

		'Extras: strtotime("-2 week", 1360022400) should give `1358812800`':  function () {
			Y.Assert.areSame(1358812800, strtotime('-2 week', 1360022400));
		},

		'Extras: strtotime("-2 fortnight", 1360022400) should give `1357603200`':  function () {
			Y.Assert.areSame(1357603200, strtotime('-2 fortnight', 1360022400));
		},

		'Extras: strtotime("-2 month", 1360022400) should give `1354665600`':  function () {
			Y.Assert.areSame(1354665600, strtotime('-2 month', 1360022400));
		},

		'Extras: strtotime("-2 year", 1360022400) should give `1296864000`':  function () {
			Y.Assert.areSame(1296864000, strtotime('-2 year', 1360022400));
		},

		'Extras: strtotime("14 second", 1360022400) should give `1360022414`':  function () {
			Y.Assert.areSame(1360022414, strtotime('14 second', 1360022400));
		},

		'Extras: strtotime("14 sec", 1360022400) should give `1360022414`':  function () {
			Y.Assert.areSame(1360022414, strtotime('14 sec', 1360022400));
		},

		'Extras: strtotime("14 minute", 1360022400) should give `1360023240`':  function () {
			Y.Assert.areSame(1360023240, strtotime('14 minute', 1360022400));
		},

		'Extras: strtotime("14 min", 1360022400) should give `1360023240`':  function () {
			Y.Assert.areSame(1360023240, strtotime('14 min', 1360022400));
		},

		'Extras: strtotime("14 hour", 1360022400) should give `1360072800`':  function () {
			Y.Assert.areSame(1360072800, strtotime('14 hour', 1360022400));
		},

		'Extras: strtotime("14 day", 1360022400) should give `1361232000`':  function () {
			Y.Assert.areSame(1361232000, strtotime('14 day', 1360022400));
		},

		'Extras: strtotime("14 week", 1360022400) should give `1368489600`':  function () {
			Y.Assert.areSame(1368489600, strtotime('14 week', 1360022400));
		},

		'Extras: strtotime("14 fortnight", 1360022400) should give `1376956800`':  function () {
			Y.Assert.areSame(1376956800, strtotime('14 fortnight', 1360022400));
		},

		'Extras: strtotime("14 month", 1360022400) should give `1396656000`':  function () {
			Y.Assert.areSame(1396656000, strtotime('14 month', 1360022400));
		},

		'Extras: strtotime("14 year", 1360022400) should give `1801785600`':  function () {
			Y.Assert.areSame(1801785600, strtotime('14 year', 1360022400));
		},

		'Extras: strtotime("-4 second", 1360022400) should give `1360022396`':  function () {
			Y.Assert.areSame(1360022396, strtotime('-4 second', 1360022400));
		},

		'Extras: strtotime("-4 sec", 1360022400) should give `1360022396`':  function () {
			Y.Assert.areSame(1360022396, strtotime('-4 sec', 1360022400));
		},

		'Extras: strtotime("-4 minute", 1360022400) should give `1360022160`':  function () {
			Y.Assert.areSame(1360022160, strtotime('-4 minute', 1360022400));
		},

		'Extras: strtotime("-4 min", 1360022400) should give `1360022160`':  function () {
			Y.Assert.areSame(1360022160, strtotime('-4 min', 1360022400));
		},

		'Extras: strtotime("-4 hour", 1360022400) should give `1360008000`':  function () {
			Y.Assert.areSame(1360008000, strtotime('-4 hour', 1360022400));
		},

		'Extras: strtotime("-4 day", 1360022400) should give `1359676800`':  function () {
			Y.Assert.areSame(1359676800, strtotime('-4 day', 1360022400));
		},

		'Extras: strtotime("-4 week", 1360022400) should give `1357603200`':  function () {
			Y.Assert.areSame(1357603200, strtotime('-4 week', 1360022400));
		},

		'Extras: strtotime("-4 fortnight", 1360022400) should give `1355184000`':  function () {
			Y.Assert.areSame(1355184000, strtotime('-4 fortnight', 1360022400));
		},

		'Extras: strtotime("-4 month", 1360022400) should give `1349395200`':  function () {
			Y.Assert.areSame(1349395200, strtotime('-4 month', 1360022400));
		},

		'Extras: strtotime("-4 year", 1360022400) should give `1233792000`':  function () {
			Y.Assert.areSame(1233792000, strtotime('-4 year', 1360022400));
		},

		'Extras: strtotime("3 months -4 days", 1360022400) should give `1367366400`':  function () {
			Y.Assert.areSame(1367366400, strtotime('3 months -4 days', 1360022400));
		},

		'Extras: strtotime("2 years 5 months 18 days -4 hours 20 minutes -12 seconds", 1360022400) should give `1437596388`':  function () {
			Y.Assert.areSame(1437596388, strtotime('2 years 5 months 18 days -4 hours 20 minutes -12 seconds', 1360022400));
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

		'Extras: strtotime("yesterday 2am", 1360022400) should give `1359943200`':  function () {
			Y.Assert.areSame(1359943200, strtotime('yesterday 2am', 1360022400));
		},

		'Extras: strtotime("2am now", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('2am now', 1360022400));
		},

		'Extras: strtotime("now 2am", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('now 2am', 1360022400));
		},

		'Extras: strtotime("2am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('2am noon', 1360022400));
		},

		'Extras: strtotime("noon 2am", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 2am', 1360022400));
		},

		'Extras: strtotime("2am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2am midnight', 1360022400));
		},

		'Extras: strtotime("midnight 2am", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('midnight 2am', 1360022400));
		},

		'Extras: strtotime("2am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2am today', 1360022400));
		},

		'Extras: strtotime("today 2am", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('today 2am', 1360022400));
		},

		'Extras: strtotime("2am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('2am tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 2am", 1360022400) should give `1360116000`':  function () {
			Y.Assert.areSame(1360116000, strtotime('tomorrow 2am', 1360022400));
		},

		'Extras: strtotime("2am first day of", 1360022400) should give `1359684000`':  function () {
			Y.Assert.areSame(1359684000, strtotime('2am first day of', 1360022400));
		},

		'Extras: strtotime("first day of 2am", 1360022400) should give `1359684000`':  function () {
			Y.Assert.areSame(1359684000, strtotime('first day of 2am', 1360022400));
		},

		'Extras: strtotime("2am last day of", 1360022400) should give `1362016800`':  function () {
			Y.Assert.areSame(1362016800, strtotime('2am last day of', 1360022400));
		},

		'Extras: strtotime("last day of 2am", 1360022400) should give `1362016800`':  function () {
			Y.Assert.areSame(1362016800, strtotime('last day of 2am', 1360022400));
		},

		'Extras: strtotime("2AM yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('2AM yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 2AM", 1360022400) should give `1359943200`':  function () {
			Y.Assert.areSame(1359943200, strtotime('yesterday 2AM', 1360022400));
		},

		'Extras: strtotime("2AM now", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('2AM now', 1360022400));
		},

		'Extras: strtotime("now 2AM", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('now 2AM', 1360022400));
		},

		'Extras: strtotime("2AM noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('2AM noon', 1360022400));
		},

		'Extras: strtotime("noon 2AM", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 2AM', 1360022400));
		},

		'Extras: strtotime("2AM midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2AM midnight', 1360022400));
		},

		'Extras: strtotime("midnight 2AM", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('midnight 2AM', 1360022400));
		},

		'Extras: strtotime("2AM today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('2AM today', 1360022400));
		},

		'Extras: strtotime("today 2AM", 1360022400) should give `1360029600`':  function () {
			Y.Assert.areSame(1360029600, strtotime('today 2AM', 1360022400));
		},

		'Extras: strtotime("2AM tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('2AM tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 2AM", 1360022400) should give `1360116000`':  function () {
			Y.Assert.areSame(1360116000, strtotime('tomorrow 2AM', 1360022400));
		},

		'Extras: strtotime("2AM first day of", 1360022400) should give `1359684000`':  function () {
			Y.Assert.areSame(1359684000, strtotime('2AM first day of', 1360022400));
		},

		'Extras: strtotime("first day of 2AM", 1360022400) should give `1359684000`':  function () {
			Y.Assert.areSame(1359684000, strtotime('first day of 2AM', 1360022400));
		},

		'Extras: strtotime("2AM last day of", 1360022400) should give `1362016800`':  function () {
			Y.Assert.areSame(1362016800, strtotime('2AM last day of', 1360022400));
		},

		'Extras: strtotime("last day of 2AM", 1360022400) should give `1362016800`':  function () {
			Y.Assert.areSame(1362016800, strtotime('last day of 2AM', 1360022400));
		},

		'Extras: strtotime("14.18 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('14.18 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 14.18", 1360022400) should give `1359987480`':  function () {
			Y.Assert.areSame(1359987480, strtotime('yesterday 14.18', 1360022400));
		},

		'Extras: strtotime("14.18 now", 1360022400) should give `1360073880`':  function () {
			Y.Assert.areSame(1360073880, strtotime('14.18 now', 1360022400));
		},

		'Extras: strtotime("now 14.18", 1360022400) should give `1360073880`':  function () {
			Y.Assert.areSame(1360073880, strtotime('now 14.18', 1360022400));
		},

		'Extras: strtotime("14.18 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('14.18 noon', 1360022400));
		},

		'Extras: strtotime("noon 14.18", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 14.18', 1360022400));
		},

		'Extras: strtotime("14.18 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('14.18 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 14.18", 1360022400) should give `1360073880`':  function () {
			Y.Assert.areSame(1360073880, strtotime('midnight 14.18', 1360022400));
		},

		'Extras: strtotime("14.18 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('14.18 today', 1360022400));
		},

		'Extras: strtotime("today 14.18", 1360022400) should give `1360073880`':  function () {
			Y.Assert.areSame(1360073880, strtotime('today 14.18', 1360022400));
		},

		'Extras: strtotime("14.18 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('14.18 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 14.18", 1360022400) should give `1360160280`':  function () {
			Y.Assert.areSame(1360160280, strtotime('tomorrow 14.18', 1360022400));
		},

		'Extras: strtotime("14.18 first day of", 1360022400) should give `1359728280`':  function () {
			Y.Assert.areSame(1359728280, strtotime('14.18 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 14.18", 1360022400) should give `1359728280`':  function () {
			Y.Assert.areSame(1359728280, strtotime('first day of 14.18', 1360022400));
		},

		'Extras: strtotime("14.18 last day of", 1360022400) should give `1362061080`':  function () {
			Y.Assert.areSame(1362061080, strtotime('14.18 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 14.18", 1360022400) should give `1362061080`':  function () {
			Y.Assert.areSame(1362061080, strtotime('last day of 14.18', 1360022400));
		},

		'Extras: strtotime("15:02 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('15:02 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 15:02", 1360022400) should give `1359990120`':  function () {
			Y.Assert.areSame(1359990120, strtotime('yesterday 15:02', 1360022400));
		},

		'Extras: strtotime("15:02 now", 1360022400) should give `1360076520`':  function () {
			Y.Assert.areSame(1360076520, strtotime('15:02 now', 1360022400));
		},

		'Extras: strtotime("now 15:02", 1360022400) should give `1360076520`':  function () {
			Y.Assert.areSame(1360076520, strtotime('now 15:02', 1360022400));
		},

		'Extras: strtotime("15:02 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('15:02 noon', 1360022400));
		},

		'Extras: strtotime("noon 15:02", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 15:02', 1360022400));
		},

		'Extras: strtotime("15:02 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:02 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 15:02", 1360022400) should give `1360076520`':  function () {
			Y.Assert.areSame(1360076520, strtotime('midnight 15:02', 1360022400));
		},

		'Extras: strtotime("15:02 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:02 today', 1360022400));
		},

		'Extras: strtotime("today 15:02", 1360022400) should give `1360076520`':  function () {
			Y.Assert.areSame(1360076520, strtotime('today 15:02', 1360022400));
		},

		'Extras: strtotime("15:02 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('15:02 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 15:02", 1360022400) should give `1360162920`':  function () {
			Y.Assert.areSame(1360162920, strtotime('tomorrow 15:02', 1360022400));
		},

		'Extras: strtotime("15:02 first day of", 1360022400) should give `1359730920`':  function () {
			Y.Assert.areSame(1359730920, strtotime('15:02 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 15:02", 1360022400) should give `1359730920`':  function () {
			Y.Assert.areSame(1359730920, strtotime('first day of 15:02', 1360022400));
		},

		'Extras: strtotime("15:02 last day of", 1360022400) should give `1362063720`':  function () {
			Y.Assert.areSame(1362063720, strtotime('15:02 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 15:02", 1360022400) should give `1362063720`':  function () {
			Y.Assert.areSame(1362063720, strtotime('last day of 15:02', 1360022400));
		},

		'Extras: strtotime("3.29 am yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('3.29 am yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 3.29 am", 1360022400) should give `1359948540`':  function () {
			Y.Assert.areSame(1359948540, strtotime('yesterday 3.29 am', 1360022400));
		},

		'Extras: strtotime("3.29 am now", 1360022400) should give `1360034940`':  function () {
			Y.Assert.areSame(1360034940, strtotime('3.29 am now', 1360022400));
		},

		'Extras: strtotime("now 3.29 am", 1360022400) should give `1360034940`':  function () {
			Y.Assert.areSame(1360034940, strtotime('now 3.29 am', 1360022400));
		},

		'Extras: strtotime("3.29 am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('3.29 am noon', 1360022400));
		},

		'Extras: strtotime("noon 3.29 am", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 3.29 am', 1360022400));
		},

		'Extras: strtotime("3.29 am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3.29 am midnight', 1360022400));
		},

		'Extras: strtotime("midnight 3.29 am", 1360022400) should give `1360034940`':  function () {
			Y.Assert.areSame(1360034940, strtotime('midnight 3.29 am', 1360022400));
		},

		'Extras: strtotime("3.29 am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3.29 am today', 1360022400));
		},

		'Extras: strtotime("today 3.29 am", 1360022400) should give `1360034940`':  function () {
			Y.Assert.areSame(1360034940, strtotime('today 3.29 am', 1360022400));
		},

		'Extras: strtotime("3.29 am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('3.29 am tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 3.29 am", 1360022400) should give `1360121340`':  function () {
			Y.Assert.areSame(1360121340, strtotime('tomorrow 3.29 am', 1360022400));
		},

		'Extras: strtotime("3.29 am first day of", 1360022400) should give `1359689340`':  function () {
			Y.Assert.areSame(1359689340, strtotime('3.29 am first day of', 1360022400));
		},

		'Extras: strtotime("first day of 3.29 am", 1360022400) should give `1359689340`':  function () {
			Y.Assert.areSame(1359689340, strtotime('first day of 3.29 am', 1360022400));
		},

		'Extras: strtotime("3.29 am last day of", 1360022400) should give `1362022140`':  function () {
			Y.Assert.areSame(1362022140, strtotime('3.29 am last day of', 1360022400));
		},

		'Extras: strtotime("last day of 3.29 am", 1360022400) should give `1362022140`':  function () {
			Y.Assert.areSame(1362022140, strtotime('last day of 3.29 am', 1360022400));
		},

		'Extras: strtotime("3:53 PM yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('3:53 PM yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 3:53 PM", 1360022400) should give `1359993180`':  function () {
			Y.Assert.areSame(1359993180, strtotime('yesterday 3:53 PM', 1360022400));
		},

		'Extras: strtotime("3:53 PM now", 1360022400) should give `1360079580`':  function () {
			Y.Assert.areSame(1360079580, strtotime('3:53 PM now', 1360022400));
		},

		'Extras: strtotime("now 3:53 PM", 1360022400) should give `1360079580`':  function () {
			Y.Assert.areSame(1360079580, strtotime('now 3:53 PM', 1360022400));
		},

		'Extras: strtotime("3:53 PM noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('3:53 PM noon', 1360022400));
		},

		'Extras: strtotime("noon 3:53 PM", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 3:53 PM', 1360022400));
		},

		'Extras: strtotime("3:53 PM midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:53 PM midnight', 1360022400));
		},

		'Extras: strtotime("midnight 3:53 PM", 1360022400) should give `1360079580`':  function () {
			Y.Assert.areSame(1360079580, strtotime('midnight 3:53 PM', 1360022400));
		},

		'Extras: strtotime("3:53 PM today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:53 PM today', 1360022400));
		},

		'Extras: strtotime("today 3:53 PM", 1360022400) should give `1360079580`':  function () {
			Y.Assert.areSame(1360079580, strtotime('today 3:53 PM', 1360022400));
		},

		'Extras: strtotime("3:53 PM tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('3:53 PM tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 3:53 PM", 1360022400) should give `1360165980`':  function () {
			Y.Assert.areSame(1360165980, strtotime('tomorrow 3:53 PM', 1360022400));
		},

		'Extras: strtotime("3:53 PM first day of", 1360022400) should give `1359733980`':  function () {
			Y.Assert.areSame(1359733980, strtotime('3:53 PM first day of', 1360022400));
		},

		'Extras: strtotime("first day of 3:53 PM", 1360022400) should give `1359733980`':  function () {
			Y.Assert.areSame(1359733980, strtotime('first day of 3:53 PM', 1360022400));
		},

		'Extras: strtotime("3:53 PM last day of", 1360022400) should give `1362066780`':  function () {
			Y.Assert.areSame(1362066780, strtotime('3:53 PM last day of', 1360022400));
		},

		'Extras: strtotime("last day of 3:53 PM", 1360022400) should give `1362066780`':  function () {
			Y.Assert.areSame(1362066780, strtotime('last day of 3:53 PM', 1360022400));
		},

		'Extras: strtotime("15:45:23 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('15:45:23 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 15:45:23", 1360022400) should give `1359992723`':  function () {
			Y.Assert.areSame(1359992723, strtotime('yesterday 15:45:23', 1360022400));
		},

		'Extras: strtotime("15:45:23 now", 1360022400) should give `1360079123`':  function () {
			Y.Assert.areSame(1360079123, strtotime('15:45:23 now', 1360022400));
		},

		'Extras: strtotime("now 15:45:23", 1360022400) should give `1360079123`':  function () {
			Y.Assert.areSame(1360079123, strtotime('now 15:45:23', 1360022400));
		},

		'Extras: strtotime("15:45:23 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('15:45:23 noon', 1360022400));
		},

		'Extras: strtotime("noon 15:45:23", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 15:45:23', 1360022400));
		},

		'Extras: strtotime("15:45:23 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:45:23 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 15:45:23", 1360022400) should give `1360079123`':  function () {
			Y.Assert.areSame(1360079123, strtotime('midnight 15:45:23', 1360022400));
		},

		'Extras: strtotime("15:45:23 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('15:45:23 today', 1360022400));
		},

		'Extras: strtotime("today 15:45:23", 1360022400) should give `1360079123`':  function () {
			Y.Assert.areSame(1360079123, strtotime('today 15:45:23', 1360022400));
		},

		'Extras: strtotime("15:45:23 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('15:45:23 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 15:45:23", 1360022400) should give `1360165523`':  function () {
			Y.Assert.areSame(1360165523, strtotime('tomorrow 15:45:23', 1360022400));
		},

		'Extras: strtotime("15:45:23 first day of", 1360022400) should give `1359733523`':  function () {
			Y.Assert.areSame(1359733523, strtotime('15:45:23 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 15:45:23", 1360022400) should give `1359733523`':  function () {
			Y.Assert.areSame(1359733523, strtotime('first day of 15:45:23', 1360022400));
		},

		'Extras: strtotime("15:45:23 last day of", 1360022400) should give `1362066323`':  function () {
			Y.Assert.areSame(1362066323, strtotime('15:45:23 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 15:45:23", 1360022400) should give `1362066323`':  function () {
			Y.Assert.areSame(1362066323, strtotime('last day of 15:45:23', 1360022400));
		},

		'Extras: strtotime("3:45:23 am yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('3:45:23 am yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 3:45:23 am", 1360022400) should give `1359949523`':  function () {
			Y.Assert.areSame(1359949523, strtotime('yesterday 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("3:45:23 am now", 1360022400) should give `1360035923`':  function () {
			Y.Assert.areSame(1360035923, strtotime('3:45:23 am now', 1360022400));
		},

		'Extras: strtotime("now 3:45:23 am", 1360022400) should give `1360035923`':  function () {
			Y.Assert.areSame(1360035923, strtotime('now 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("3:45:23 am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('3:45:23 am noon', 1360022400));
		},

		'Extras: strtotime("noon 3:45:23 am", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("3:45:23 am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:45:23 am midnight', 1360022400));
		},

		'Extras: strtotime("midnight 3:45:23 am", 1360022400) should give `1360035923`':  function () {
			Y.Assert.areSame(1360035923, strtotime('midnight 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("3:45:23 am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('3:45:23 am today', 1360022400));
		},

		'Extras: strtotime("today 3:45:23 am", 1360022400) should give `1360035923`':  function () {
			Y.Assert.areSame(1360035923, strtotime('today 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("3:45:23 am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('3:45:23 am tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 3:45:23 am", 1360022400) should give `1360122323`':  function () {
			Y.Assert.areSame(1360122323, strtotime('tomorrow 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("3:45:23 am first day of", 1360022400) should give `1359690323`':  function () {
			Y.Assert.areSame(1359690323, strtotime('3:45:23 am first day of', 1360022400));
		},

		'Extras: strtotime("first day of 3:45:23 am", 1360022400) should give `1359690323`':  function () {
			Y.Assert.areSame(1359690323, strtotime('first day of 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("3:45:23 am last day of", 1360022400) should give `1362023123`':  function () {
			Y.Assert.areSame(1362023123, strtotime('3:45:23 am last day of', 1360022400));
		},

		'Extras: strtotime("last day of 3:45:23 am", 1360022400) should give `1362023123`':  function () {
			Y.Assert.areSame(1362023123, strtotime('last day of 3:45:23 am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('8:45:22.44am yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 8:45:22.44am", 1360022400) should give `1359967522`':  function () {
			Y.Assert.areSame(1359967522, strtotime('yesterday 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am now", 1360022400) should give `1360053922`':  function () {
			Y.Assert.areSame(1360053922, strtotime('8:45:22.44am now', 1360022400));
		},

		'Extras: strtotime("now 8:45:22.44am", 1360022400) should give `1360053922`':  function () {
			Y.Assert.areSame(1360053922, strtotime('now 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('8:45:22.44am noon', 1360022400));
		},

		'Extras: strtotime("noon 8:45:22.44am", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('8:45:22.44am midnight', 1360022400));
		},

		'Extras: strtotime("midnight 8:45:22.44am", 1360022400) should give `1360053922`':  function () {
			Y.Assert.areSame(1360053922, strtotime('midnight 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('8:45:22.44am today', 1360022400));
		},

		'Extras: strtotime("today 8:45:22.44am", 1360022400) should give `1360053922`':  function () {
			Y.Assert.areSame(1360053922, strtotime('today 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('8:45:22.44am tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 8:45:22.44am", 1360022400) should give `1360140322`':  function () {
			Y.Assert.areSame(1360140322, strtotime('tomorrow 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am first day of", 1360022400) should give `1359708322`':  function () {
			Y.Assert.areSame(1359708322, strtotime('8:45:22.44am first day of', 1360022400));
		},

		'Extras: strtotime("first day of 8:45:22.44am", 1360022400) should give `1359708322`':  function () {
			Y.Assert.areSame(1359708322, strtotime('first day of 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("8:45:22.44am last day of", 1360022400) should give `1362041122`':  function () {
			Y.Assert.areSame(1362041122, strtotime('8:45:22.44am last day of', 1360022400));
		},

		'Extras: strtotime("last day of 8:45:22.44am", 1360022400) should give `1362041122`':  function () {
			Y.Assert.areSame(1362041122, strtotime('last day of 8:45:22.44am', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('12:59:13.01P.M yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 12:59:13.01P.M", 1360022400) should give `1359982753`':  function () {
			Y.Assert.areSame(1359982753, strtotime('yesterday 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M now", 1360022400) should give `1360069153`':  function () {
			Y.Assert.areSame(1360069153, strtotime('12:59:13.01P.M now', 1360022400));
		},

		'Extras: strtotime("now 12:59:13.01P.M", 1360022400) should give `1360069153`':  function () {
			Y.Assert.areSame(1360069153, strtotime('now 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('12:59:13.01P.M noon', 1360022400));
		},

		'Extras: strtotime("noon 12:59:13.01P.M", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('12:59:13.01P.M midnight', 1360022400));
		},

		'Extras: strtotime("midnight 12:59:13.01P.M", 1360022400) should give `1360069153`':  function () {
			Y.Assert.areSame(1360069153, strtotime('midnight 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('12:59:13.01P.M today', 1360022400));
		},

		'Extras: strtotime("today 12:59:13.01P.M", 1360022400) should give `1360069153`':  function () {
			Y.Assert.areSame(1360069153, strtotime('today 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('12:59:13.01P.M tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 12:59:13.01P.M", 1360022400) should give `1360155553`':  function () {
			Y.Assert.areSame(1360155553, strtotime('tomorrow 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M first day of", 1360022400) should give `1359723553`':  function () {
			Y.Assert.areSame(1359723553, strtotime('12:59:13.01P.M first day of', 1360022400));
		},

		'Extras: strtotime("first day of 12:59:13.01P.M", 1360022400) should give `1359723553`':  function () {
			Y.Assert.areSame(1359723553, strtotime('first day of 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("12:59:13.01P.M last day of", 1360022400) should give `1362056353`':  function () {
			Y.Assert.areSame(1362056353, strtotime('12:59:13.01P.M last day of', 1360022400));
		},

		'Extras: strtotime("last day of 12:59:13.01P.M", 1360022400) should give `1362056353`':  function () {
			Y.Assert.areSame(1362056353, strtotime('last day of 12:59:13.01P.M', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('4:08:39:12313am yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 4:08:39:12313am", 1360022400) should give `1359950919`':  function () {
			Y.Assert.areSame(1359950919, strtotime('yesterday 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am now", 1360022400) should give `1360037319`':  function () {
			Y.Assert.areSame(1360037319, strtotime('4:08:39:12313am now', 1360022400));
		},

		'Extras: strtotime("now 4:08:39:12313am", 1360022400) should give `1360037319`':  function () {
			Y.Assert.areSame(1360037319, strtotime('now 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('4:08:39:12313am noon', 1360022400));
		},

		'Extras: strtotime("noon 4:08:39:12313am", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('4:08:39:12313am midnight', 1360022400));
		},

		'Extras: strtotime("midnight 4:08:39:12313am", 1360022400) should give `1360037319`':  function () {
			Y.Assert.areSame(1360037319, strtotime('midnight 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('4:08:39:12313am today', 1360022400));
		},

		'Extras: strtotime("today 4:08:39:12313am", 1360022400) should give `1360037319`':  function () {
			Y.Assert.areSame(1360037319, strtotime('today 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('4:08:39:12313am tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 4:08:39:12313am", 1360022400) should give `1360123719`':  function () {
			Y.Assert.areSame(1360123719, strtotime('tomorrow 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am first day of", 1360022400) should give `1359691719`':  function () {
			Y.Assert.areSame(1359691719, strtotime('4:08:39:12313am first day of', 1360022400));
		},

		'Extras: strtotime("first day of 4:08:39:12313am", 1360022400) should give `1359691719`':  function () {
			Y.Assert.areSame(1359691719, strtotime('first day of 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("4:08:39:12313am last day of", 1360022400) should give `1362024519`':  function () {
			Y.Assert.areSame(1362024519, strtotime('4:08:39:12313am last day of', 1360022400));
		},

		'Extras: strtotime("last day of 4:08:39:12313am", 1360022400) should give `1362024519`':  function () {
			Y.Assert.areSame(1362024519, strtotime('last day of 4:08:39:12313am', 1360022400));
		},

		'Extras: strtotime("t18:45 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('t18:45 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday t18:45", 1360022400) should give `1360003500`':  function () {
			Y.Assert.areSame(1360003500, strtotime('yesterday t18:45', 1360022400));
		},

		'Extras: strtotime("t18:45 now", 1360022400) should give `1360089900`':  function () {
			Y.Assert.areSame(1360089900, strtotime('t18:45 now', 1360022400));
		},

		'Extras: strtotime("now t18:45", 1360022400) should give `1360089900`':  function () {
			Y.Assert.areSame(1360089900, strtotime('now t18:45', 1360022400));
		},

		'Extras: strtotime("t18:45 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('t18:45 noon', 1360022400));
		},

		'Extras: strtotime("noon t18:45", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon t18:45', 1360022400));
		},

		'Extras: strtotime("t18:45 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t18:45 midnight', 1360022400));
		},

		'Extras: strtotime("midnight t18:45", 1360022400) should give `1360089900`':  function () {
			Y.Assert.areSame(1360089900, strtotime('midnight t18:45', 1360022400));
		},

		'Extras: strtotime("t18:45 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t18:45 today', 1360022400));
		},

		'Extras: strtotime("today t18:45", 1360022400) should give `1360089900`':  function () {
			Y.Assert.areSame(1360089900, strtotime('today t18:45', 1360022400));
		},

		'Extras: strtotime("t18:45 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('t18:45 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow t18:45", 1360022400) should give `1360176300`':  function () {
			Y.Assert.areSame(1360176300, strtotime('tomorrow t18:45', 1360022400));
		},

		'Extras: strtotime("t18:45 first day of", 1360022400) should give `1359744300`':  function () {
			Y.Assert.areSame(1359744300, strtotime('t18:45 first day of', 1360022400));
		},

		'Extras: strtotime("first day of t18:45", 1360022400) should give `1359744300`':  function () {
			Y.Assert.areSame(1359744300, strtotime('first day of t18:45', 1360022400));
		},

		'Extras: strtotime("t18:45 last day of", 1360022400) should give `1362077100`':  function () {
			Y.Assert.areSame(1362077100, strtotime('t18:45 last day of', 1360022400));
		},

		'Extras: strtotime("last day of t18:45", 1360022400) should give `1362077100`':  function () {
			Y.Assert.areSame(1362077100, strtotime('last day of t18:45', 1360022400));
		},

		'Extras: strtotime("13:47 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('13:47 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 13:47", 1360022400) should give `1359985620`':  function () {
			Y.Assert.areSame(1359985620, strtotime('yesterday 13:47', 1360022400));
		},

		'Extras: strtotime("13:47 now", 1360022400) should give `1360072020`':  function () {
			Y.Assert.areSame(1360072020, strtotime('13:47 now', 1360022400));
		},

		'Extras: strtotime("now 13:47", 1360022400) should give `1360072020`':  function () {
			Y.Assert.areSame(1360072020, strtotime('now 13:47', 1360022400));
		},

		'Extras: strtotime("13:47 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('13:47 noon', 1360022400));
		},

		'Extras: strtotime("noon 13:47", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 13:47', 1360022400));
		},

		'Extras: strtotime("13:47 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('13:47 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 13:47", 1360022400) should give `1360072020`':  function () {
			Y.Assert.areSame(1360072020, strtotime('midnight 13:47', 1360022400));
		},

		'Extras: strtotime("13:47 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('13:47 today', 1360022400));
		},

		'Extras: strtotime("today 13:47", 1360022400) should give `1360072020`':  function () {
			Y.Assert.areSame(1360072020, strtotime('today 13:47', 1360022400));
		},

		'Extras: strtotime("13:47 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('13:47 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 13:47", 1360022400) should give `1360158420`':  function () {
			Y.Assert.areSame(1360158420, strtotime('tomorrow 13:47', 1360022400));
		},

		'Extras: strtotime("13:47 first day of", 1360022400) should give `1359726420`':  function () {
			Y.Assert.areSame(1359726420, strtotime('13:47 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 13:47", 1360022400) should give `1359726420`':  function () {
			Y.Assert.areSame(1359726420, strtotime('first day of 13:47', 1360022400));
		},

		'Extras: strtotime("13:47 last day of", 1360022400) should give `1362059220`':  function () {
			Y.Assert.areSame(1362059220, strtotime('13:47 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 13:47", 1360022400) should give `1362059220`':  function () {
			Y.Assert.areSame(1362059220, strtotime('last day of 13:47', 1360022400));
		},

		'Extras: strtotime("4.41 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('4.41 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 4.41", 1360022400) should give `1359952860`':  function () {
			Y.Assert.areSame(1359952860, strtotime('yesterday 4.41', 1360022400));
		},

		'Extras: strtotime("4.41 now", 1360022400) should give `1360039260`':  function () {
			Y.Assert.areSame(1360039260, strtotime('4.41 now', 1360022400));
		},

		'Extras: strtotime("now 4.41", 1360022400) should give `1360039260`':  function () {
			Y.Assert.areSame(1360039260, strtotime('now 4.41', 1360022400));
		},

		'Extras: strtotime("4.41 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('4.41 noon', 1360022400));
		},

		'Extras: strtotime("noon 4.41", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 4.41', 1360022400));
		},

		'Extras: strtotime("4.41 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('4.41 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 4.41", 1360022400) should give `1360039260`':  function () {
			Y.Assert.areSame(1360039260, strtotime('midnight 4.41', 1360022400));
		},

		'Extras: strtotime("4.41 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('4.41 today', 1360022400));
		},

		'Extras: strtotime("today 4.41", 1360022400) should give `1360039260`':  function () {
			Y.Assert.areSame(1360039260, strtotime('today 4.41', 1360022400));
		},

		'Extras: strtotime("4.41 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('4.41 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 4.41", 1360022400) should give `1360125660`':  function () {
			Y.Assert.areSame(1360125660, strtotime('tomorrow 4.41', 1360022400));
		},

		'Extras: strtotime("4.41 first day of", 1360022400) should give `1359693660`':  function () {
			Y.Assert.areSame(1359693660, strtotime('4.41 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 4.41", 1360022400) should give `1359693660`':  function () {
			Y.Assert.areSame(1359693660, strtotime('first day of 4.41', 1360022400));
		},

		'Extras: strtotime("4.41 last day of", 1360022400) should give `1362026460`':  function () {
			Y.Assert.areSame(1362026460, strtotime('4.41 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 4.41", 1360022400) should give `1362026460`':  function () {
			Y.Assert.areSame(1362026460, strtotime('last day of 4.41', 1360022400));
		},

		'Extras: strtotime("t18:45:22 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('t18:45:22 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday t18:45:22", 1360022400) should give `1360003522`':  function () {
			Y.Assert.areSame(1360003522, strtotime('yesterday t18:45:22', 1360022400));
		},

		'Extras: strtotime("t18:45:22 now", 1360022400) should give `1360089922`':  function () {
			Y.Assert.areSame(1360089922, strtotime('t18:45:22 now', 1360022400));
		},

		'Extras: strtotime("now t18:45:22", 1360022400) should give `1360089922`':  function () {
			Y.Assert.areSame(1360089922, strtotime('now t18:45:22', 1360022400));
		},

		'Extras: strtotime("t18:45:22 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('t18:45:22 noon', 1360022400));
		},

		'Extras: strtotime("noon t18:45:22", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon t18:45:22', 1360022400));
		},

		'Extras: strtotime("t18:45:22 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t18:45:22 midnight', 1360022400));
		},

		'Extras: strtotime("midnight t18:45:22", 1360022400) should give `1360089922`':  function () {
			Y.Assert.areSame(1360089922, strtotime('midnight t18:45:22', 1360022400));
		},

		'Extras: strtotime("t18:45:22 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t18:45:22 today', 1360022400));
		},

		'Extras: strtotime("today t18:45:22", 1360022400) should give `1360089922`':  function () {
			Y.Assert.areSame(1360089922, strtotime('today t18:45:22', 1360022400));
		},

		'Extras: strtotime("t18:45:22 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('t18:45:22 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow t18:45:22", 1360022400) should give `1360176322`':  function () {
			Y.Assert.areSame(1360176322, strtotime('tomorrow t18:45:22', 1360022400));
		},

		'Extras: strtotime("t18:45:22 first day of", 1360022400) should give `1359744322`':  function () {
			Y.Assert.areSame(1359744322, strtotime('t18:45:22 first day of', 1360022400));
		},

		'Extras: strtotime("first day of t18:45:22", 1360022400) should give `1359744322`':  function () {
			Y.Assert.areSame(1359744322, strtotime('first day of t18:45:22', 1360022400));
		},

		'Extras: strtotime("t18:45:22 last day of", 1360022400) should give `1362077122`':  function () {
			Y.Assert.areSame(1362077122, strtotime('t18:45:22 last day of', 1360022400));
		},

		'Extras: strtotime("last day of t18:45:22", 1360022400) should give `1362077122`':  function () {
			Y.Assert.areSame(1362077122, strtotime('last day of t18:45:22', 1360022400));
		},

		'Extras: strtotime("13:47.41 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('13:47.41 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 13:47.41", 1360022400) should give `1359985661`':  function () {
			Y.Assert.areSame(1359985661, strtotime('yesterday 13:47.41', 1360022400));
		},

		'Extras: strtotime("13:47.41 now", 1360022400) should give `1360072061`':  function () {
			Y.Assert.areSame(1360072061, strtotime('13:47.41 now', 1360022400));
		},

		'Extras: strtotime("now 13:47.41", 1360022400) should give `1360072061`':  function () {
			Y.Assert.areSame(1360072061, strtotime('now 13:47.41', 1360022400));
		},

		'Extras: strtotime("13:47.41 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('13:47.41 noon', 1360022400));
		},

		'Extras: strtotime("noon 13:47.41", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 13:47.41', 1360022400));
		},

		'Extras: strtotime("13:47.41 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('13:47.41 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 13:47.41", 1360022400) should give `1360072061`':  function () {
			Y.Assert.areSame(1360072061, strtotime('midnight 13:47.41', 1360022400));
		},

		'Extras: strtotime("13:47.41 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('13:47.41 today', 1360022400));
		},

		'Extras: strtotime("today 13:47.41", 1360022400) should give `1360072061`':  function () {
			Y.Assert.areSame(1360072061, strtotime('today 13:47.41', 1360022400));
		},

		'Extras: strtotime("13:47.41 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('13:47.41 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 13:47.41", 1360022400) should give `1360158461`':  function () {
			Y.Assert.areSame(1360158461, strtotime('tomorrow 13:47.41', 1360022400));
		},

		'Extras: strtotime("13:47.41 first day of", 1360022400) should give `1359726461`':  function () {
			Y.Assert.areSame(1359726461, strtotime('13:47.41 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 13:47.41", 1360022400) should give `1359726461`':  function () {
			Y.Assert.areSame(1359726461, strtotime('first day of 13:47.41', 1360022400));
		},

		'Extras: strtotime("13:47.41 last day of", 1360022400) should give `1362059261`':  function () {
			Y.Assert.areSame(1362059261, strtotime('13:47.41 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 13:47.41", 1360022400) should give `1362059261`':  function () {
			Y.Assert.areSame(1362059261, strtotime('last day of 13:47.41', 1360022400));
		},

		'Extras: strtotime("14.41.00 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('14.41.00 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 14.41.00", 1360022400) should give `1359988860`':  function () {
			Y.Assert.areSame(1359988860, strtotime('yesterday 14.41.00', 1360022400));
		},

		'Extras: strtotime("14.41.00 now", 1360022400) should give `1360075260`':  function () {
			Y.Assert.areSame(1360075260, strtotime('14.41.00 now', 1360022400));
		},

		'Extras: strtotime("now 14.41.00", 1360022400) should give `1360075260`':  function () {
			Y.Assert.areSame(1360075260, strtotime('now 14.41.00', 1360022400));
		},

		'Extras: strtotime("14.41.00 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('14.41.00 noon', 1360022400));
		},

		'Extras: strtotime("noon 14.41.00", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 14.41.00', 1360022400));
		},

		'Extras: strtotime("14.41.00 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('14.41.00 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 14.41.00", 1360022400) should give `1360075260`':  function () {
			Y.Assert.areSame(1360075260, strtotime('midnight 14.41.00', 1360022400));
		},

		'Extras: strtotime("14.41.00 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('14.41.00 today', 1360022400));
		},

		'Extras: strtotime("today 14.41.00", 1360022400) should give `1360075260`':  function () {
			Y.Assert.areSame(1360075260, strtotime('today 14.41.00', 1360022400));
		},

		'Extras: strtotime("14.41.00 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('14.41.00 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 14.41.00", 1360022400) should give `1360161660`':  function () {
			Y.Assert.areSame(1360161660, strtotime('tomorrow 14.41.00', 1360022400));
		},

		'Extras: strtotime("14.41.00 first day of", 1360022400) should give `1359729660`':  function () {
			Y.Assert.areSame(1359729660, strtotime('14.41.00 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 14.41.00", 1360022400) should give `1359729660`':  function () {
			Y.Assert.areSame(1359729660, strtotime('first day of 14.41.00', 1360022400));
		},

		'Extras: strtotime("14.41.00 last day of", 1360022400) should give `1362062460`':  function () {
			Y.Assert.areSame(1362062460, strtotime('14.41.00 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 14.41.00", 1360022400) should give `1362062460`':  function () {
			Y.Assert.areSame(1362062460, strtotime('last day of 14.41.00', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('08:15:09.1234 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 08:15:09.1234", 1360022400) should give `1359965709`':  function () {
			Y.Assert.areSame(1359965709, strtotime('yesterday 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 now", 1360022400) should give `1360052109`':  function () {
			Y.Assert.areSame(1360052109, strtotime('08:15:09.1234 now', 1360022400));
		},

		'Extras: strtotime("now 08:15:09.1234", 1360022400) should give `1360052109`':  function () {
			Y.Assert.areSame(1360052109, strtotime('now 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('08:15:09.1234 noon', 1360022400));
		},

		'Extras: strtotime("noon 08:15:09.1234", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('08:15:09.1234 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 08:15:09.1234", 1360022400) should give `1360052109`':  function () {
			Y.Assert.areSame(1360052109, strtotime('midnight 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('08:15:09.1234 today', 1360022400));
		},

		'Extras: strtotime("today 08:15:09.1234", 1360022400) should give `1360052109`':  function () {
			Y.Assert.areSame(1360052109, strtotime('today 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('08:15:09.1234 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 08:15:09.1234", 1360022400) should give `1360138509`':  function () {
			Y.Assert.areSame(1360138509, strtotime('tomorrow 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 first day of", 1360022400) should give `1359706509`':  function () {
			Y.Assert.areSame(1359706509, strtotime('08:15:09.1234 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 08:15:09.1234", 1360022400) should give `1359706509`':  function () {
			Y.Assert.areSame(1359706509, strtotime('first day of 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("08:15:09.1234 last day of", 1360022400) should give `1362039309`':  function () {
			Y.Assert.areSame(1362039309, strtotime('08:15:09.1234 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 08:15:09.1234", 1360022400) should give `1362039309`':  function () {
			Y.Assert.areSame(1362039309, strtotime('last day of 08:15:09.1234', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('t00.01.00.9876 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday t00.01.00.9876", 1360022400) should give `1359936060`':  function () {
			Y.Assert.areSame(1359936060, strtotime('yesterday t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 now", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('t00.01.00.9876 now', 1360022400));
		},

		'Extras: strtotime("now t00.01.00.9876", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('now t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('t00.01.00.9876 noon', 1360022400));
		},

		'Extras: strtotime("noon t00.01.00.9876", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t00.01.00.9876 midnight', 1360022400));
		},

		'Extras: strtotime("midnight t00.01.00.9876", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('midnight t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t00.01.00.9876 today', 1360022400));
		},

		'Extras: strtotime("today t00.01.00.9876", 1360022400) should give `1360022460`':  function () {
			Y.Assert.areSame(1360022460, strtotime('today t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('t00.01.00.9876 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow t00.01.00.9876", 1360022400) should give `1360108860`':  function () {
			Y.Assert.areSame(1360108860, strtotime('tomorrow t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 first day of", 1360022400) should give `1359676860`':  function () {
			Y.Assert.areSame(1359676860, strtotime('t00.01.00.9876 first day of', 1360022400));
		},

		'Extras: strtotime("first day of t00.01.00.9876", 1360022400) should give `1359676860`':  function () {
			Y.Assert.areSame(1359676860, strtotime('first day of t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t00.01.00.9876 last day of", 1360022400) should give `1362009660`':  function () {
			Y.Assert.areSame(1362009660, strtotime('t00.01.00.9876 last day of', 1360022400));
		},

		'Extras: strtotime("last day of t00.01.00.9876", 1360022400) should give `1362009660`':  function () {
			Y.Assert.areSame(1362009660, strtotime('last day of t00.01.00.9876', 1360022400));
		},

		'Extras: strtotime("t0813 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('t0813 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday t0813", 1360022400) should give `1359965580`':  function () {
			Y.Assert.areSame(1359965580, strtotime('yesterday t0813', 1360022400));
		},

		'Extras: strtotime("t0813 now", 1360022400) should give `1360051980`':  function () {
			Y.Assert.areSame(1360051980, strtotime('t0813 now', 1360022400));
		},

		'Extras: strtotime("now t0813", 1360022400) should give `1360051980`':  function () {
			Y.Assert.areSame(1360051980, strtotime('now t0813', 1360022400));
		},

		'Extras: strtotime("t0813 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('t0813 noon', 1360022400));
		},

		'Extras: strtotime("noon t0813", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon t0813', 1360022400));
		},

		'Extras: strtotime("t0813 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t0813 midnight', 1360022400));
		},

		'Extras: strtotime("midnight t0813", 1360022400) should give `1360051980`':  function () {
			Y.Assert.areSame(1360051980, strtotime('midnight t0813', 1360022400));
		},

		'Extras: strtotime("t0813 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t0813 today', 1360022400));
		},

		'Extras: strtotime("today t0813", 1360022400) should give `1360051980`':  function () {
			Y.Assert.areSame(1360051980, strtotime('today t0813', 1360022400));
		},

		'Extras: strtotime("t0813 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('t0813 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow t0813", 1360022400) should give `1360138380`':  function () {
			Y.Assert.areSame(1360138380, strtotime('tomorrow t0813', 1360022400));
		},

		'Extras: strtotime("t0813 first day of", 1360022400) should give `1359706380`':  function () {
			Y.Assert.areSame(1359706380, strtotime('t0813 first day of', 1360022400));
		},

		'Extras: strtotime("first day of t0813", 1360022400) should give `1359706380`':  function () {
			Y.Assert.areSame(1359706380, strtotime('first day of t0813', 1360022400));
		},

		'Extras: strtotime("t0813 last day of", 1360022400) should give `1362039180`':  function () {
			Y.Assert.areSame(1362039180, strtotime('t0813 last day of', 1360022400));
		},

		'Extras: strtotime("last day of t0813", 1360022400) should give `1362039180`':  function () {
			Y.Assert.areSame(1362039180, strtotime('last day of t0813', 1360022400));
		},

		'Extras: strtotime("1979 yesterday", 1360022400) should give `286934400`':  function () {
			Y.Assert.areSame(286934400, strtotime('1979 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 1979", 1360022400) should give `286934400`':  function () {
			Y.Assert.areSame(286934400, strtotime('yesterday 1979', 1360022400));
		},

		'Extras: strtotime("1979 now", 1360022400) should give `287020800`':  function () {
			Y.Assert.areSame(287020800, strtotime('1979 now', 1360022400));
		},

		'Extras: strtotime("now 1979", 1360022400) should give `287020800`':  function () {
			Y.Assert.areSame(287020800, strtotime('now 1979', 1360022400));
		},

		'Extras: strtotime("1979 noon", 1360022400) should give `287064000`':  function () {
			Y.Assert.areSame(287064000, strtotime('1979 noon', 1360022400));
		},

		'Extras: strtotime("noon 1979", 1360022400) should give `287064000`':  function () {
			Y.Assert.areSame(287064000, strtotime('noon 1979', 1360022400));
		},

		'Extras: strtotime("1979 midnight", 1360022400) should give `287020800`':  function () {
			Y.Assert.areSame(287020800, strtotime('1979 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 1979", 1360022400) should give `287020800`':  function () {
			Y.Assert.areSame(287020800, strtotime('midnight 1979', 1360022400));
		},

		'Extras: strtotime("1979 today", 1360022400) should give `287020800`':  function () {
			Y.Assert.areSame(287020800, strtotime('1979 today', 1360022400));
		},

		'Extras: strtotime("today 1979", 1360022400) should give `287020800`':  function () {
			Y.Assert.areSame(287020800, strtotime('today 1979', 1360022400));
		},

		'Extras: strtotime("1979 tomorrow", 1360022400) should give `287107200`':  function () {
			Y.Assert.areSame(287107200, strtotime('1979 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 1979", 1360022400) should give `287107200`':  function () {
			Y.Assert.areSame(287107200, strtotime('tomorrow 1979', 1360022400));
		},

		'Extras: strtotime("1979 first day of", 1360022400) should give `286675200`':  function () {
			Y.Assert.areSame(286675200, strtotime('1979 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 1979", 1360022400) should give `286675200`':  function () {
			Y.Assert.areSame(286675200, strtotime('first day of 1979', 1360022400));
		},

		'Extras: strtotime("1979 last day of", 1360022400) should give `289008000`':  function () {
			Y.Assert.areSame(289008000, strtotime('1979 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 1979", 1360022400) should give `289008000`':  function () {
			Y.Assert.areSame(289008000, strtotime('last day of 1979', 1360022400));
		},

		'Extras: strtotime("t081345 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('t081345 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday t081345", 1360022400) should give `1359965625`':  function () {
			Y.Assert.areSame(1359965625, strtotime('yesterday t081345', 1360022400));
		},

		'Extras: strtotime("t081345 now", 1360022400) should give `1360052025`':  function () {
			Y.Assert.areSame(1360052025, strtotime('t081345 now', 1360022400));
		},

		'Extras: strtotime("now t081345", 1360022400) should give `1360052025`':  function () {
			Y.Assert.areSame(1360052025, strtotime('now t081345', 1360022400));
		},

		'Extras: strtotime("t081345 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('t081345 noon', 1360022400));
		},

		'Extras: strtotime("noon t081345", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon t081345', 1360022400));
		},

		'Extras: strtotime("t081345 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t081345 midnight', 1360022400));
		},

		'Extras: strtotime("midnight t081345", 1360022400) should give `1360052025`':  function () {
			Y.Assert.areSame(1360052025, strtotime('midnight t081345', 1360022400));
		},

		'Extras: strtotime("t081345 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('t081345 today', 1360022400));
		},

		'Extras: strtotime("today t081345", 1360022400) should give `1360052025`':  function () {
			Y.Assert.areSame(1360052025, strtotime('today t081345', 1360022400));
		},

		'Extras: strtotime("t081345 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('t081345 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow t081345", 1360022400) should give `1360138425`':  function () {
			Y.Assert.areSame(1360138425, strtotime('tomorrow t081345', 1360022400));
		},

		'Extras: strtotime("t081345 first day of", 1360022400) should give `1359706425`':  function () {
			Y.Assert.areSame(1359706425, strtotime('t081345 first day of', 1360022400));
		},

		'Extras: strtotime("first day of t081345", 1360022400) should give `1359706425`':  function () {
			Y.Assert.areSame(1359706425, strtotime('first day of t081345', 1360022400));
		},

		'Extras: strtotime("t081345 last day of", 1360022400) should give `1362039225`':  function () {
			Y.Assert.areSame(1362039225, strtotime('t081345 last day of', 1360022400));
		},

		'Extras: strtotime("last day of t081345", 1360022400) should give `1362039225`':  function () {
			Y.Assert.areSame(1362039225, strtotime('last day of t081345', 1360022400));
		},

		'Extras: strtotime("191222 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areSame(1359936000, strtotime('191222 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 191222", 1360022400) should give `1360005142`':  function () {
			Y.Assert.areSame(1360005142, strtotime('yesterday 191222', 1360022400));
		},

		'Extras: strtotime("191222 now", 1360022400) should give `1360091542`':  function () {
			Y.Assert.areSame(1360091542, strtotime('191222 now', 1360022400));
		},

		'Extras: strtotime("now 191222", 1360022400) should give `1360091542`':  function () {
			Y.Assert.areSame(1360091542, strtotime('now 191222', 1360022400));
		},

		'Extras: strtotime("191222 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areSame(1360065600, strtotime('191222 noon', 1360022400));
		},

		'Extras: strtotime("noon 191222", 1360022400) should give `false`':  function () {
			Y.Assert.areSame(false, strtotime('noon 191222', 1360022400));
		},

		'Extras: strtotime("191222 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('191222 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 191222", 1360022400) should give `1360091542`':  function () {
			Y.Assert.areSame(1360091542, strtotime('midnight 191222', 1360022400));
		},

		'Extras: strtotime("191222 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areSame(1360022400, strtotime('191222 today', 1360022400));
		},

		'Extras: strtotime("today 191222", 1360022400) should give `1360091542`':  function () {
			Y.Assert.areSame(1360091542, strtotime('today 191222', 1360022400));
		},

		'Extras: strtotime("191222 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areSame(1360108800, strtotime('191222 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 191222", 1360022400) should give `1360177942`':  function () {
			Y.Assert.areSame(1360177942, strtotime('tomorrow 191222', 1360022400));
		},

		'Extras: strtotime("191222 first day of", 1360022400) should give `1359745942`':  function () {
			Y.Assert.areSame(1359745942, strtotime('191222 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 191222", 1360022400) should give `1359745942`':  function () {
			Y.Assert.areSame(1359745942, strtotime('first day of 191222', 1360022400));
		},

		'Extras: strtotime("191222 last day of", 1360022400) should give `1362078742`':  function () {
			Y.Assert.areSame(1362078742, strtotime('191222 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 191222", 1360022400) should give `1362078742`':  function () {
			Y.Assert.areSame(1362078742, strtotime('last day of 191222', 1360022400));
		},

		'Extras: strtotime("2011 yesterday", 1360022400) should give `1359936000`':  function () {
			Y.Assert.areNotSame(1359936000, strtotime('2011 yesterday', 1360022400));
		},

		'Extras: strtotime("yesterday 2011", 1360022400) should give `1360008660`':  function () {
			Y.Assert.areNotSame(1360008660, strtotime('yesterday 2011', 1360022400));
		},

		'Extras: strtotime("2011 now", 1360022400) should give `1360095060`':  function () {
			Y.Assert.areNotSame(1360095060, strtotime('2011 now', 1360022400));
		},

		'Extras: strtotime("now 2011", 1360022400) should give `1360095060`':  function () {
			Y.Assert.areNotSame(1360095060, strtotime('now 2011', 1360022400));
		},

		'Extras: strtotime("2011 noon", 1360022400) should give `1360065600`':  function () {
			Y.Assert.areNotSame(1360065600, strtotime('2011 noon', 1360022400));
		},

		'Extras: strtotime("noon 2011", 1360022400) should give `1296907200`':  function () {
			Y.Assert.areNotSame(1296907200, strtotime('noon 2011', 1360022400));
		},

		'Extras: strtotime("2011 midnight", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areNotSame(1360022400, strtotime('2011 midnight', 1360022400));
		},

		'Extras: strtotime("midnight 2011", 1360022400) should give `1360095060`':  function () {
			Y.Assert.areNotSame(1360095060, strtotime('midnight 2011', 1360022400));
		},

		'Extras: strtotime("2011 today", 1360022400) should give `1360022400`':  function () {
			Y.Assert.areNotSame(1360022400, strtotime('2011 today', 1360022400));
		},

		'Extras: strtotime("today 2011", 1360022400) should give `1360095060`':  function () {
			Y.Assert.areNotSame(1360095060, strtotime('today 2011', 1360022400));
		},

		'Extras: strtotime("2011 tomorrow", 1360022400) should give `1360108800`':  function () {
			Y.Assert.areNotSame(1360108800, strtotime('2011 tomorrow', 1360022400));
		},

		'Extras: strtotime("tomorrow 2011", 1360022400) should give `1360181460`':  function () {
			Y.Assert.areNotSame(1360181460, strtotime('tomorrow 2011', 1360022400));
		},

		'Extras: strtotime("2011 first day of", 1360022400) should give `1359749460`':  function () {
			Y.Assert.areNotSame(1359749460, strtotime('2011 first day of', 1360022400));
		},

		'Extras: strtotime("first day of 2011", 1360022400) should give `1359749460`':  function () {
			Y.Assert.areNotSame(1359749460, strtotime('first day of 2011', 1360022400));
		},

		'Extras: strtotime("2011 last day of", 1360022400) should give `1362082260`':  function () {
			Y.Assert.areNotSame(1362082260, strtotime('2011 last day of', 1360022400));
		},

		'Extras: strtotime("last day of 2011", 1360022400) should give `1362082260`':  function () {
			Y.Assert.areNotSame(1362082260, strtotime('last day of 2011', 1360022400));
		}
	}));

Y.Test.Runner.add(suite);

}, "3.5.0", {
    requires: ["strtotime", "test"]
});
