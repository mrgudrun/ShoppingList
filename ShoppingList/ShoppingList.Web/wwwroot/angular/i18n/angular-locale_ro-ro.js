"use strict";angular.module("ngLocale",[],["$provide",function(e){function i(e){e+="";var i=e.indexOf(".");return-1==i?0:e.length-i-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(i(e),3));var a=Math.pow(10,n),m=(e*a|0)%a;return{v:n,f:m}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],ERANAMES:["înainte de Hristos","după Hristos"],ERAS:["î.Hr.","d.Hr."],FIRSTDAYOFWEEK:0,MONTH:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],SHORTDAY:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],SHORTMONTH:["ian.","feb.","mar.","apr.","mai","iun.","iul.","aug.","sept.","oct.","nov.","dec."],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"RON",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ro-ro",pluralCat:function(e,i){var a=0|e,m=r(e,i);return 1==a&&0==m.v?n.ONE:0!=m.v||0==e||1!=e&&e%100>=1&&19>=e%100?n.FEW:n.OTHER}})}]);