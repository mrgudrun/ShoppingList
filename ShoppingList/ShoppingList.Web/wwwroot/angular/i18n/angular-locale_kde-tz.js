"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return-1==n?0:a.length-n-1}function i(a,i){var e=i;void 0===e&&(e=Math.min(n(a),3));var M=Math.pow(10,e),o=(a*M|0)%M;return{v:e,f:o}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Muhi","Chilo"],DAY:["Liduva lyapili","Liduva lyatatu","Liduva lyanchechi","Liduva lyannyano","Liduva lyannyano na linji","Liduva lyannyano na mavili","Liduva litandi"],ERANAMES:["Akanapawa Yesu","Nankuida Yesu"],ERAS:["AY","NY"],FIRSTDAYOFWEEK:0,MONTH:["Mwedi Ntandi","Mwedi wa Pili","Mwedi wa Tatu","Mwedi wa Nchechi","Mwedi wa Nnyano","Mwedi wa Nnyano na Umo","Mwedi wa Nnyano na Mivili","Mwedi wa Nnyano na Mitatu","Mwedi wa Nnyano na Nchechi","Mwedi wa Nnyano na Nnyano","Mwedi wa Nnyano na Nnyano na U","Mwedi wa Nnyano na Nnyano na M"],SHORTDAY:["Ll2","Ll3","Ll4","Ll5","Ll6","Ll7","Ll1"],SHORTMONTH:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Des"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"kde-tz",pluralCat:function(a,n){var M=0|a,o=i(a,n);return 1==M&&0==o.v?e.ONE:e.OTHER}})}]);