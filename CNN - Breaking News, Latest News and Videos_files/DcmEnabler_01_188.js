(function(){var DEPS_GRAPH={'dcmenablermodule':[]};var g,k=this,m=function(a){return"string"==typeof a},n=function(a,b,c){a=a.split(".");c=c||k;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},p=function(){},q=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==
typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},r=function(a){return"function"==q(a)},t=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},aa=function(a,
b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=aa:u=ba;return u.apply(null,arguments)},v=function(a,b){function c(){}c.prototype=
b.prototype;a.ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var w=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};v(w,Error);w.prototype.name="CustomError";var ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},da=function(a,b){return a<b?-1:a>b?1:0};var ea=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ha=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},ia=function(a){return Array.prototype.concat.apply([],arguments)},ja=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var ka=function(a){this.a=a};n("studio.common.mde.Direction",ka,void 0);ka.Corner={na:0,oa:1,ja:2,ka:3};ka.prototype.toString=function(){return(this.a&2?"b":"t")+(this.a&1?"r":"l")};n("studio.module.ModuleId",{ENABLER:"enabler",DCM_ENABLER:"dcmenabler",VIDEO:"video",CONFIGURABLE:"configurable",CONFIGURABLE_FILLER:"configurablefiller",LAYOUTS:"layouts",FILLER:"layoutsfiller",RAD_VIDEO:"rad_ui_video",GDN:"gdn"},void 0);var x=function(){};n("studio.common.Environment",x,void 0);x.Type={LIVE:1,LOCAL:2,BROWSER:4,IN_APP:8,LAYOUTS_PREVIEW:16,CREATIVE_TOOLSET:32,RENDERING_STUDIO:64,RENDERING_TEST:128,PREVIEW:256};var y=6;x.addType=function(a){y|=a;la(a)};var ma=function(a){y=a|6;la(y)};x.setType=ma;x.hasType=function(a){return(y&a)==a};x.getValue=function(){return y};var la=function(a){z(a,2,1);z(a,1,2);z(a,4,8);z(a,8,4);z(a,128,64);z(a,64,128);z(a,256,2)},z=function(a,b,c){(a&b)==b&&(y|=b,y&=~c)};var na="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},oa=function(){};oa.prototype.next=function(){throw na;};oa.prototype.g=function(){return this};var A=function(a,b){this.b={};this.a=[];this.f=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){if(a instanceof A){var e=a.m();d=a.l()}else{c=[];var f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}};A.prototype.l=function(){B(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
A.prototype.m=function(){B(this);return this.a.concat()};var B=function(a){var b,c;if(a.c!=a.a.length){for(b=c=0;c<a.a.length;){var d=a.a[c];C(a.b,d)&&(a.a[b++]=d);c++}a.a.length=b}if(a.c!=a.a.length){var e={};for(b=c=0;c<a.a.length;)d=a.a[c],C(e,d)||(a.a[b++]=d,e[d]=1),c++;a.a.length=b}};A.prototype.get=function(a,b){return C(this.b,a)?this.b[a]:b};A.prototype.set=function(a,b){C(this.b,a)||(this.c++,this.a.push(a),this.f++);this.b[a]=b};
A.prototype.forEach=function(a,b){for(var c=this.m(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};A.prototype.g=function(a){B(this);var b=0,c=this.f,d=this,e=new oa;e.next=function(){if(c!=d.f)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw na;var e=d.a[b++];return a?e:d.b[e]};return e};var C=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,qa=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var ra=function(a,b){this.f=this.j=this.c="";this.i=null;this.g=this.h="";this.a=!1;if(a instanceof ra){this.a=void 0!==b?b:a.a;sa(this,a.c);this.j=a.j;this.f=a.f;ta(this,a.i);this.h=a.h;b=a.b;var c=new D;c.c=b.c;b.a&&(c.a=new A(b.a),c.b=b.b);ua(this,c);this.g=a.g}else a&&(c=String(a).match(pa))?(this.a=!!b,sa(this,c[1]||"",!0),this.j=E(c[2]||""),this.f=E(c[3]||"",!0),ta(this,c[4]),this.h=E(c[5]||"",!0),ua(this,c[6]||"",!0),this.g=E(c[7]||"")):(this.a=!!b,this.b=new D(null,0,this.a))};
ra.prototype.toString=function(){var a=[],b=this.c;b&&a.push(F(b,va,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(F(b,va,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.h)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(F(c,"/"==c.charAt(0)?wa:xa,!0));(c=this.b.toString())&&a.push("?",c);(c=this.g)&&a.push("#",F(c,ya));return a.join("")};
var sa=function(a,b,c){a.c=c?E(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))},ta=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null},ua=function(a,b,c){b instanceof D?(a.b=b,za(a.b,a.a)):(c||(b=F(b,Aa)),a.b=new D(b,0,a.a))},E=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},F=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Ba),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ba=function(a){a=a.charCodeAt(0);
return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},va=/[#\/\?@]/g,xa=/[\#\?:]/g,wa=/[\#\?]/g,Aa=/[\#\?@]/g,ya=/#/g,D=function(a,b,c){this.b=this.a=null;this.c=a||null;this.f=!!c},G=function(a){a.a||(a.a=new A,a.b=0,a.c&&qa(a.c,function(b,c){b=decodeURIComponent(b.replace(/\+/g," "));G(a);a.c=null;b=H(a,b);var d=a.a.get(b);d||a.a.set(b,d=[]);d.push(c);a.b+=1}))},Ca=function(a,b){G(a);b=H(a,b);C(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,C(a.b,b)&&(delete a.b[b],a.c--,a.f++,a.a.length>2*a.c&&
B(a)))},Da=function(a,b){G(a);b=H(a,b);return C(a.a.b,b)};g=D.prototype;g.forEach=function(a,b){G(this);this.a.forEach(function(c,d){fa(c,function(c){a.call(b,c,d,this)},this)},this)};g.m=function(){G(this);for(var a=this.a.l(),b=this.a.m(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.l=function(a){G(this);var b=[];if(m(a))Da(this,a)&&(b=ia(b,this.a.get(H(this,a))));else{a=this.a.l();for(var c=0;c<a.length;c++)b=ia(b,a[c])}return b};
g.set=function(a,b){G(this);this.c=null;a=H(this,a);Da(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};g.get=function(a,b){a=a?this.l(a):[];return 0<a.length?String(a[0]):b};g.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.m(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.l(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.c=a.join("&")};
var H=function(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b},za=function(a,b){b&&!a.f&&(G(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(Ca(this,b),Ca(this,c),0<a.length&&(this.c=null,this.a.set(H(this,c),ja(a)),this.b+=a.length))},a));a.f=b};var I;a:{var Ea=k.navigator;if(Ea){var Fa=Ea.userAgent;if(Fa){I=Fa;break a}}I=""}var J=function(a){return-1!=I.indexOf(a)};var Ga=function(a){Ga[" "](a);return a};Ga[" "]=p;var Ja=function(a,b){var c=Ia;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ka=J("Opera"),K=J("Trident")||J("MSIE"),La=J("Edge"),L=J("Gecko")&&!(-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),Ma=-1!=I.toLowerCase().indexOf("webkit")&&!J("Edge"),Na=function(){var a=k.document;return a?a.documentMode:void 0},Oa;
a:{var Pa="",Qa=function(){var a=I;if(L)return/rv\:([^\);]+)(\)|;)/.exec(a);if(La)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ma)return/WebKit\/(\S+)/.exec(a);if(Ka)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Qa&&(Pa=Qa?Qa[1]:"");if(K){var Ra=Na();if(null!=Ra&&Ra>parseFloat(Pa)){Oa=String(Ra);break a}}Oa=Pa}
var Sa=Oa,Ia={},M=function(a){return Ja(a,function(){for(var b=0,c=ca(String(Sa)).split("."),d=ca(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=da(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||da(0==h[2].length,0==l[2].length)||da(h[2],l[2]);h=h[3];l=l[3]}while(0==b)}return 0<=b})},Ta;var Ua=k.document;
Ta=Ua&&K?Na()||("CSS1Compat"==Ua.compatMode?parseInt(Sa,10):5):void 0;var Va=function(){this.c=this.c;this.g=this.g};Va.prototype.c=!1;var Wa=!K||9<=Number(Ta),Xa=K&&!M("9");!Ma||M("528");L&&M("1.9b")||K&&M("8")||Ka&&M("9.5")||Ma&&M("528");L&&!M("8")||K&&M("9");var Ya=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",p,b);k.removeEventListener("test",p,b);return a}();var N=function(a,b){this.type=a;this.a=this.target=b};N.prototype.c=function(){};var O=function(a,b){N.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.b=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(L){a:{try{Ga(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);
this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a;a.defaultPrevented&&this.c()}};
v(O,N);O.prototype.c=function(){O.ha.c.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Xa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var P="closure_listenable_"+(1E6*Math.random()|0),Za=0;var $a=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.b=e;this.key=++Za;this.s=this.v=!1},ab=function(a){a.s=!0;a.listener=null;a.a=null;a.src=null;a.b=null};var bb=function(a){this.src=a;this.a={};this.b=0},db=function(a,b,c,d,e,f){var h=b.toString();b=a.a[h];b||(b=a.a[h]=[],a.b++);var l=cb(b,c,e,f);-1<l?(a=b[l],d||(a.v=!1)):(a=new $a(c,a.src,h,!!e,f),a.v=d,b.push(a));return a},eb=function(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ea(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(ab(b),0==a.a[c].length&&(delete a.a[c],a.b--))}},cb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.s&&f.listener==b&&f.capture==!!c&&f.b==d)return e}return-1};var fb="closure_lm_"+(1E6*Math.random()|0),gb={},hb=0,jb=function(a,b,c,d,e){if(d&&d.once)ib(a,b,c,d,e);else if("array"==q(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else c=kb(c),a&&a[P]?db(a.a,String(b),c,!1,t(d)?!!d.capture:!!d,e):lb(a,b,c,!1,d,e)},lb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=t(e)?!!e.capture:!!e,l=mb(a);l||(a[fb]=l=new bb(a));c=db(l,b,c,d,h,f);if(!c.a){d=nb();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)Ya||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(ob(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");hb++}},nb=function(){var a=pb,b=Wa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},ib=function(a,b,c,d,e){if("array"==q(b))for(var f=0;f<b.length;f++)ib(a,b[f],c,d,e);else c=kb(c),a&&a[P]?db(a.a,String(b),c,!0,t(d)?!!d.capture:!!d,e):lb(a,b,c,!0,d,e)},qb=function(a,b,c,d,e){if("array"==q(b))for(var f=0;f<
b.length;f++)qb(a,b[f],c,d,e);else(d=t(d)?!!d.capture:!!d,c=kb(c),a&&a[P])?(a=a.a,b=String(b).toString(),b in a.a&&(f=a.a[b],c=cb(f,c,d,e),-1<c&&(ab(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=mb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=cb(b,c,d,e)),(c=-1<a?b[a]:null)&&rb(c))},rb=function(a){if("number"!=typeof a&&a&&!a.s){var b=a.src;if(b&&b[P])eb(b.a,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(ob(c),
d);hb--;(c=mb(b))?(eb(c,a),0==c.b&&(c.src=null,b[fb]=null)):ab(a)}}},ob=function(a){return a in gb?gb[a]:gb[a]="on"+a},tb=function(a,b,c,d){var e=!0;if(a=mb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.s&&(f=sb(f,d),e=e&&!1!==f)}return e},sb=function(a,b){var c=a.listener,d=a.b||a.src;a.v&&rb(a);return c.call(d,b)},pb=function(a,b){if(a.s)return!0;if(!Wa){if(!b)a:{b=["window","event"];for(var c=k,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=
c}d=b;b=new O(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);e=a.type;for(var f=d.length-1;0<=f;f--)b.a=d[f],a=tb(d[f],e,!0,b),c=c&&a;for(f=0;f<d.length;f++)b.a=d[f],a=tb(d[f],e,!1,b),c=c&&a}return c}return sb(a,new O(b,this))},mb=function(a){a=a[fb];return a instanceof bb?a:null},ub="__closure_events_fn_"+(1E9*Math.random()>>>0),kb=function(a){if(r(a))return a;
a[ub]||(a[ub]=function(b){return a.handleEvent(b)});return a[ub]};var Q=function(){Va.call(this);this.a=new bb(this)};v(Q,Va);Q.prototype[P]=!0;Q.prototype.addEventListener=function(a,b,c,d){jb(this,a,b,c,d)};Q.prototype.removeEventListener=function(a,b,c,d){qb(this,a,b,c,d)};var vb={la:"dcm",ma:"studio"};n("studio.sdk.ContainerState",{COLLAPSING:"collapsing",COLLAPSED:"collapsed",EXPANDING:"expanding",EXPANDED:"expanded",FS_COLLAPSING:"fs_collapsing",FS_EXPANDING:"fs_expanding",FS_EXPANDED:"fs_expanded"},void 0);var wb=function(){};n("studio.sdk.IEnabler",wb,void 0);g=wb.prototype;g.ba=function(){};g.W=function(){};g.da=function(){};g.ca=function(){};g.R=function(){};g.P=function(){};g.O=function(){};g.N=function(){};g.A=function(){};g.getParameter=function(){};g.w=function(){};g.D=function(){};g.C=function(){};g.ea=function(){};g.fa=function(){};g.J=function(){};g.K=function(){};g.Y=function(){};g.G=function(){};g.X=function(){};g.F=function(){};g.close=function(){};g.M=function(){};g.S=function(){};
g.addEventListener=function(){};g.removeEventListener=function(){};g.V=function(){};g.U=function(){};g.$=function(){};g.I=function(){};g.Z=function(){};g.H=function(){};g.L=function(){};n("studio.sdk.logger",{}.qa,void 0);var xb=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};xb.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};var yb=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var zb=function(a){k.setTimeout(function(){throw a;},0)},Ab,Bb=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;
a=u(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.B;c.B=null;a()}};return function(a){d.next={B:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Db=new xb(function(){return new Cb},function(a){a.reset()},100),Fb=function(){var a=Eb,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},Cb=function(){this.next=this.b=this.a=null};Cb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Cb.prototype.reset=function(){this.next=this.b=this.a=null};var Jb=function(a,b){Gb||Hb();Ib||(Gb(),Ib=!0);var c=Eb,d=Db.get();d.set(a,b);c.b?c.b.next=d:c.a=d;c.b=d},Gb,Hb=function(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);Gb=function(){a.then(Kb)}}else Gb=function(){var a=Kb;!r(k.setImmediate)||k.Window&&k.Window.prototype&&!J("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Ab||(Ab=Bb()),Ab(a)):k.setImmediate(a)}},Ib=!1,Eb=new function(){this.b=this.a=null},Kb=function(){for(var a;a=Fb();){try{a.a.call(a.b)}catch(b){zb(b)}yb(Db,
a)}Ib=!1};!L&&!K||K&&9<=Number(Ta)||L&&M("1.9.1");K&&M("9");var Lb=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Mb=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var S=function(a,b){this.a=0;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=p)try{var c=this;a.call(b,function(a){R(c,2,a)},function(a){R(c,3,a)})}catch(d){R(this,3,d)}},Nb=function(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1};Nb.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var Ob=new xb(function(){return new Nb},function(a){a.reset()},100),Pb=function(a,b,c){var d=Ob.get();d.f=a;d.b=b;d.c=c;return d};
S.prototype.then=function(a,b,c){return Qb(this,r(a)?a:null,r(b)?b:null,c)};Lb(S);S.prototype.cancel=function(a){0==this.a&&Jb(function(){var b=new T(a);Rb(this,b)},this)};
var Rb=function(a,b){if(0==a.a)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.g||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.a&&1==d?Rb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Sb(c),Tb(c,e,3,b)))}a.c=null}else R(a,3,b)},Vb=function(a,b){a.b||2!=a.a&&3!=a.a||Ub(a);a.f?a.f.next=b:a.b=b;a.f=b},Qb=function(a,b,c,d){var e=Pb(null,null,null);e.a=new S(function(a,h){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(Ha){h(Ha)}}:a;e.b=c?function(b){try{var e=c.call(d,
b);void 0===e&&b instanceof T?h(b):a(e)}catch(Ha){h(Ha)}}:h});e.a.c=a;Vb(a,e);return e.a};S.prototype.o=function(a){this.a=0;R(this,2,a)};S.prototype.u=function(a){this.a=0;R(this,3,a)};
var R=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.o,f=a.u;if(d instanceof S){Vb(d,Pb(e||p,f||null,a));var h=!0}else if(Mb(d))d.then(e,f,a),h=!0;else{if(t(d))try{var l=d.then;if(r(l)){Wb(d,l,e,f,a);h=!0;break a}}catch(V){f.call(a,V);h=!0;break a}h=!1}}h||(a.i=c,a.a=b,a.c=null,Ub(a),3!=b||c instanceof T||Xb(a,c))}},Wb=function(a,b,c,d,e){var f=!1,h=function(a){f||(f=!0,c.call(e,a))},l=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,
h,l)}catch(V){l(V)}},Ub=function(a){a.h||(a.h=!0,Jb(a.j,a))},Sb=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b};S.prototype.j=function(){for(var a;a=Sb(this);)Tb(this,a,this.a,this.i);this.h=!1};
var Tb=function(a,b,c,d){if(3==c&&b.b&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Yb(b,c,d);else try{b.g?b.f.call(b.c):Yb(b,c,d)}catch(e){Zb.call(null,e)}yb(Ob,b)},Yb=function(a,b,c){2==b?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)},Xb=function(a,b){a.g=!0;Jb(function(){a.g&&Zb.call(null,b)})},Zb=zb,T=function(a){w.call(this,a)};v(T,w);T.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var U=function(a,b){this.g=[];this.aa=a;this.T=b||null;this.f=this.a=!1;this.b=void 0;this.o=this.ia=this.i=!1;this.h=0;this.c=null;this.j=0};U.prototype.cancel=function(a){if(this.a)this.b instanceof U&&this.b.cancel();else{if(this.c){var b=this.c;delete this.c;a?b.cancel(a):(b.j--,0>=b.j&&b.cancel())}this.aa?this.aa.call(this.T,this):this.o=!0;if(!this.a){a=new W;if(this.a){if(!this.o)throw new $b;this.o=!1}this.a=!0;this.b=a;this.f=!0;ac(this)}}};
U.prototype.u=function(a,b){this.i=!1;this.a=!0;this.b=b;this.f=!a;ac(this)};var bc=function(a,b,c){a.g.push([b,c,void 0]);a.a&&ac(a)};U.prototype.then=function(a,b,c){var d,e,f=new S(function(a,b){d=a;e=b});bc(this,d,function(a){a instanceof W?f.cancel():e(a)});return f.then(a,b,c)};Lb(U);
var cc=function(a){return ha(a.g,function(a){return r(a[1])})},ac=function(a){if(a.h&&a.a&&cc(a)){var b=a.h,c=dc[b];c&&(k.clearTimeout(c.a),delete dc[b]);a.h=0}a.c&&(a.c.j--,delete a.c);b=a.b;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],h=e[1];e=e[2];if(f=a.f?h:f)try{var l=f.call(e||a.T,b);void 0!==l&&(a.f=a.f&&(l==b||l instanceof Error),a.b=b=l);if(Mb(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.i=!0}catch(V){b=V,a.f=!0,cc(a)||(c=!0)}}a.b=b;d&&(l=u(a.u,a,!0),d=u(a.u,
a,!1),b instanceof U?(bc(b,l,d),b.ia=!0):b.then(l,d));c&&(b=new ec(b),dc[b.a]=b,a.h=b.a)},$b=function(){w.call(this)};v($b,w);$b.prototype.message="Deferred has already fired";$b.prototype.name="AlreadyCalledError";var W=function(){w.call(this)};v(W,w);W.prototype.message="Deferred was canceled";W.prototype.name="CanceledError";var ec=function(a){this.a=k.setTimeout(u(this.c,this),0);this.b=a};ec.prototype.c=function(){delete dc[this.a];throw this.b;};var dc={};var X=new A;X.set("enabler","enabler");X.set("dcmenabler","dcm");X.set("video","vid");X.set("configurable","cfg");X.set("configurablefiller","cfg_fill");X.set("layouts","lay");X.set("layoutsfiller","lay_fill");X.set("gdn","gdn");X.set("rad_ui_video","rad");n("goog.exportSymbol",function(a,b,c){n(a,b,c)},this);var fc=function(a){a+="goog.exportSymbol('studioLoader.context.evalInContext', "+fc.toString()+");";eval(a)};n("studioLoader.context.evalInContext",fc,void 0);var Y=function(a){jb(window,"message",gc);if(a!=hc)return!1;Q.call(this);this.b=null;this.b||(this.b=new ra((window.STUDIO_ORIGINAL_ASSET_URL?window.STUDIO_ORIGINAL_ASSET_URL:window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g,"%25")));(a=this.f=this.b.b)&&(a=a.get("e",null))&&ma(parseInt(a,10)||0)},ic;v(Y,Q);n("studio.DcmEnabler",Y,void 0);var hc=Math.random(),jc=null,kc={},lc=function(){jc||(jc=new Y(hc));return jc};Y.getInstance=lc;
var gc=function(a){if(m(a.b.data)){try{var b=JSON.parse(a.b.data)}catch(e){return}if(b.isInitClickTag){if(a=b.clickTags)for(var c=0;c<a.length;c++){var d=a[c];kc[d.name]=d.url}ic=b.relegateNavigation}}};Y.prototype.W=function(){};Y.prototype.reportManualClose=Y.prototype.W;Y.prototype.ba=function(){};Y.prototype.setExpandingPixelOffsets=Y.prototype.ba;Y.prototype.da=function(){};Y.prototype.setStartExpanded=Y.prototype.da;Y.prototype.ca=function(){};Y.prototype.setIsMultiDirectional=Y.prototype.ca;
Y.prototype.R=function(){return!0};Y.prototype.isVisible=Y.prototype.R;Y.prototype.P=function(){return!0};Y.prototype.isServingInLiveEnvironment=Y.prototype.P;Y.prototype.O=function(){return!0};Y.prototype.isPageLoaded=Y.prototype.O;Y.prototype.N=function(){return!0};Y.prototype.isInitialized=Y.prototype.N;Y.prototype.A=function(){};Y.prototype.callAfterInitialized=Y.prototype.A;Y.prototype.getParameter=function(a){return this.f.get(a,null)};Y.prototype.getParameter=Y.prototype.getParameter;
Y.prototype.w=function(a,b){a=null!=kc[a]&&"null"!=kc[a]?kc[a]:b;"parent"===ic?window.parent.postMessage(JSON.stringify({clickTag:a,isPostClickTag:!0}),"*"):window.open(a)};Y.prototype.exit=Y.prototype.w;Y.prototype.D=function(a,b){this.w(a,b)};Y.prototype.exitOverride=Y.prototype.D;Y.prototype.C=function(){};Y.prototype.counter=Y.prototype.C;Y.prototype.ea=function(){};Y.prototype.startTimer=Y.prototype.ea;Y.prototype.fa=function(){};Y.prototype.stopTimer=Y.prototype.fa;Y.prototype.J=function(){return"collapsed"};
Y.prototype.getContainerState=Y.prototype.J;Y.prototype.K=function(){return null};Y.prototype.getExpandDirection=Y.prototype.K;Y.prototype.Y=function(){};Y.prototype.requestExpand=Y.prototype.Y;Y.prototype.G=function(){};Y.prototype.finishExpand=Y.prototype.G;Y.prototype.X=function(){};Y.prototype.requestCollapse=Y.prototype.X;Y.prototype.F=function(){};Y.prototype.finishCollapse=Y.prototype.F;Y.prototype.close=function(){};Y.prototype.close=Y.prototype.close;Y.prototype.M=function(a){return a};
Y.prototype.getUrl=Y.prototype.M;Y.prototype.S=function(){};Y.prototype.loadModule=Y.prototype.S;Y.prototype.addEventListener=function(a,b,c,d){jb(this,a,b,c,d)};Y.prototype.addEventListener=Y.prototype.addEventListener;Y.prototype.removeEventListener=function(a,b,c,d){qb(this,a,b,c,d)};Y.prototype.removeEventListener=Y.prototype.removeEventListener;Y.prototype.V=function(){};Y.prototype.queryFullscreenSupport=Y.prototype.V;Y.prototype.U=function(){};Y.prototype.queryFullscreenDimensions=Y.prototype.U;
Y.prototype.$=function(){};Y.prototype.requestFullscreenExpand=Y.prototype.$;Y.prototype.I=function(){};Y.prototype.finishFullscreenExpand=Y.prototype.I;Y.prototype.Z=function(){};Y.prototype.requestFullscreenCollapse=Y.prototype.Z;Y.prototype.H=function(){};Y.prototype.finishFullscreenCollapse=Y.prototype.H;Y.prototype.L=function(){a:{for(a in vb)if("dcm"==vb[a]){var a="dcm";break a}a=null}return a||"dcm"};Y.prototype.getSdk=Y.prototype.L;var mc=lc();n("Enabler",mc,void 0);var Z=function(a){N.call(this,a)};v(Z,N);n("studio.events.StudioEvent",Z,void 0);Z.INIT="init";Z.VISIBLE="visible";Z.HIDDEN="hidden";Z.VISIBILITY_CHANGE="visibilityChange";Z.VISIBILITY_CHANGE_WITH_INFO="visibilityChangeWithInfo";Z.EXIT="exit";Z.INTERACTION="interaction";Z.PAGE_LOADED="pageLoaded";Z.ORIENTATION="orientation";Z.ABOUT_TO_EXPAND="aboutToExpand";Z.EXPAND_START="expandStart";Z.EXPAND_FINISH="expandFinish";Z.COLLAPSE_START="collapseStart";Z.COLLAPSE_FINISH="collapseFinish";Z.COLLAPSE="collapse";
Z.FULLSCREEN_SUPPORT="fullscreenSupport";Z.FULLSCREEN_DIMENSIONS="fullscreenDimensions";Z.FULLSCREEN_EXPAND_START="fullscreenExpandStart";Z.FULLSCREEN_EXPAND_FINISH="fullscreenExpandFinish";Z.FULLSCREEN_COLLAPSE_START="fullscreenCollapseStart";Z.FULLSCREEN_COLLAPSE_FINISH="fullscreenCollapseFinish";Z.prototype.ga=function(a,b){this[a]=b;return this};Z.prototype.addProperty=Z.prototype.ga;})();
