"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));var r=Math.pow(10,n),E=(e*r|0)%r;return{v:n,f:E}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["چۈشتىن بۇرۇن","چۈشتىن كېيىن"],DAY:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],ERANAMES:["مىلادىيەدىن بۇرۇن","مىلادىيە"],ERAS:["مىلادىيەدىن بۇرۇن","مىلادىيە"],FIRSTDAYOFWEEK:6,MONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","بويابىر","دېكابىر"],SHORTDAY:["يە","دۈ","سە","چا","پە","چۈ","شە"],SHORTMONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","نويابىر","دېكابىر"],WEEKENDRANGE:[5,6],fullDate:"EEEE، MMMM d، y",longDate:"MMMM d، y",medium:"MMM d، y h:mm:ss a",mediumDate:"MMM d، y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"¥",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"ug",pluralCat:function(e,M){var r=0|e,E=a(e,M);return 1==r&&0==E.v?n.ONE:n.OTHER}})}]);