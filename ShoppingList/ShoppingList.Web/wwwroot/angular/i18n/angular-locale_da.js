"use strict";angular.module("ngLocale",[],["$provide",function(r){function e(r){r+="";var e=r.indexOf(".");return-1==e?0:r.length-e-1}function a(r,a){var n=a;void 0===n&&(n=Math.min(e(r),3));var t=Math.pow(10,n),m=(r*t|0)%t;return{v:n,f:m}}function n(r,e){if(0===e)return{w:0,t:0};for(;e%10===0;)e/=10,r--;return{w:r,t:e}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};r.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],ERANAMES:["f.Kr.","e.Kr."],ERAS:["f.Kr.","e.Kr."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],SHORTDAY:["søn.","man.","tir.","ons.","tor.","fre.","lør."],SHORTMONTH:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],WEEKENDRANGE:[5,6],fullDate:"EEEE 'den' d. MMMM y",longDate:"d. MMMM y",medium:"dd/MM/y HH.mm.ss",mediumDate:"dd/MM/y",mediumTime:"HH.mm.ss","short":"dd/MM/yy HH.mm",shortDate:"dd/MM/yy",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"da",pluralCat:function(r,e){var m=0|r,o=a(r,e),u=n(o.v,o.f);return 1==r||0!=u.t&&(0==m||1==m)?t.ONE:t.OTHER}})}]);