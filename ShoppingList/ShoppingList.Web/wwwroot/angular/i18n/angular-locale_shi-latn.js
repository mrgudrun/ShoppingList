"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return-1==n?0:a.length-n-1}function i(a,i){var r=i;void 0===r&&(r=Math.min(n(a),3));var u=Math.pow(10,r),e=(a*u|0)%u;return{v:r,f:e}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["tifawt","tadggʷat"],DAY:["asamas","aynas","asinas","akṛas","akwas","asimwas","asiḍyas"],ERANAMES:["dat n ɛisa","dffir n ɛisa"],ERAS:["daɛ","dfɛ"],FIRSTDAYOFWEEK:0,MONTH:["innayr","bṛayṛ","maṛṣ","ibrir","mayyu","yunyu","yulyuz","ɣuct","cutanbir","ktubr","nuwanbir","dujanbir"],SHORTDAY:["asa","ayn","asi","akṛ","akw","asim","asiḍ"],SHORTMONTH:["inn","bṛa","maṛ","ibr","may","yun","yul","ɣuc","cut","ktu","nuw","duj"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"shi-latn",pluralCat:function(a,n){var u=0|a,e=i(a,n);return 1==u&&0==e.v?r.ONE:r.OTHER}})}]);