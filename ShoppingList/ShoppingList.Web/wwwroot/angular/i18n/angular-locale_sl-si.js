"use strict";angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));var t=Math.pow(10,n),o=(e*t|0)%t;return{v:n,f:o}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["dop.","pop."],DAY:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],ERANAMES:["pred našim štetjem","naše štetje"],ERAS:["pr. n. št.","po Kr."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],SHORTDAY:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],SHORTMONTH:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y",longDate:"dd. MMMM y",medium:"d. MMM y HH.mm.ss",mediumDate:"d. MMM y",mediumTime:"HH.mm.ss","short":"d. MM. yy HH.mm",shortDate:"d. MM. yy",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sl-si",pluralCat:function(e,r){var t=0|e,o=a(e,r);return 0==o.v&&t%100==1?n.ONE:0==o.v&&t%100==2?n.TWO:0==o.v&&t%100>=3&&4>=t%100||0!=o.v?n.FEW:n.OTHER}})}]);