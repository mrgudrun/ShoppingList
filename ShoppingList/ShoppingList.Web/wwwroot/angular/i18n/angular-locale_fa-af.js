"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["قبل‌ازظهر","بعدازظهر"],DAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],ERANAMES:["قبل از میلاد","میلادی"],ERAS:["ق.م.","م."],FIRSTDAYOFWEEK:5,MONTH:["جنوری","فبروری","مارچ","اپریل","می","جون","جولای","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],SHORTDAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],SHORTMONTH:["جنو","فوریهٔ","مارس","آوریل","مـی","ژوئن","جول","اوت","سپتامبر","اکتبر","نوامبر","دسم"],WEEKENDRANGE:[3,4],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y H:mm:ss",mediumDate:"d MMM y",mediumTime:"H:mm:ss","short":"y/M/d H:mm",shortDate:"y/M/d",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Af.",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"‎¤-",negSuf:"",posPre:"‎¤",posSuf:""}]},id:"fa-af",pluralCat:function(e){var E=0|e;return 0==E||1==e?M.ONE:M.OTHER}})}]);