"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var E=Math.pow(10,r),a=(e*E|0)%E;return{v:r,f:a}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["غ.م.","غ.و."],DAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],ERANAMES:["ق.م.","م."],ERAS:["ق.م.","م."],FIRSTDAYOFWEEK:5,MONTH:["جنوري","فبروري","مارچ","اپریل","می","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],SHORTDAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],SHORTMONTH:["جنوري","فبروري","مارچ","اپریل","می","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],WEEKENDRANGE:[3,4],fullDate:"EEEE د y د MMMM d",longDate:"د y د MMMM d",medium:"d MMM y H:mm:ss",mediumDate:"d MMM y",mediumTime:"H:mm:ss","short":"y/M/d H:mm",shortDate:"y/M/d",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Af.",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ps-af",pluralCat:function(e,M){var E=0|e,a=n(e,M);return 1==E&&0==a.v?r.ONE:r.OTHER}})}]);