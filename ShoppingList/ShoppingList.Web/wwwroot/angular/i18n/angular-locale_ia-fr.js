"use strict";angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return-1==r?0:e.length-r-1}function a(e,a){var i=a;void 0===i&&(i=Math.min(r(e),3));var o=Math.pow(10,i),n=(e*o|0)%o;return{v:i,f:n}}var i={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["dominica","lunedi","martedi","mercuridi","jovedi","venerdi","sabbato"],ERANAMES:["ante Christo","post Christo"],ERAS:["a.Chr.","p.Chr."],FIRSTDAYOFWEEK:0,MONTH:["januario","februario","martio","april","maio","junio","julio","augusto","septembre","octobre","novembre","decembre"],SHORTDAY:["dom","lun","mar","mer","jov","ven","sab"],SHORTMONTH:["jan","feb","mar","apr","mai","jun","jul","aug","sep","oct","nov","dec"],WEEKENDRANGE:[5,6],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"yy/MM/dd HH:mm",shortDate:"yy/MM/dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ia-fr",pluralCat:function(e,r){var o=0|e,n=a(e,r);return 1==o&&0==n.v?i.ONE:i.OTHER}})}]);