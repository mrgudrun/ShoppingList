"use strict";angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");return-1==i?0:a.length-i-1}function d(a,d){var e=d;void 0===e&&(e=Math.min(i(a),3));var o=Math.pow(10,e),n=(a*o|0)%o;return{v:e,f:n}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["sn.","gn."],DAY:["Axad","Isniin","Talaado","Arbaco","Khamiis","Jimco","Sabti"],ERANAMES:["Ciise ka hor (CS)","Ciise ka dib (CS)"],ERAS:["CK","CD"],FIRSTDAYOFWEEK:0,MONTH:["Bisha Koobaad","Bisha Labaad","Bisha Saddexaad","Bisha Afraad","Bisha Shanaad","Bisha Lixaad","Bisha Todobaad","Bisha Sideedaad","Bisha Sagaalaad","Bisha Tobnaad","Bisha Kow iyo Tobnaad","Bisha Laba iyo Tobnaad"],SHORTDAY:["Axd","Isn","Tal","Arb","Kha","Jim","Sab"],SHORTMONTH:["Kob","Lab","Sad","Afr","Sha","Lix","Tod","Sid","Sag","Tob","KIT","LIT"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM dd, y",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"SOS",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"so-so",pluralCat:function(a,i){var o=0|a,n=d(a,i);return 1==o&&0==n.v?e.ONE:e.OTHER}})}]);