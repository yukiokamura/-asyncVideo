!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=void 0!==e&&"[object global]"==={}.toString.call(e);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function a(e){return/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(function(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}(r))return"https://vimeo.com/".concat(r);if(a(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var c=void 0!==Array.prototype.indexOf,s="undefined"!=typeof window&&void 0!==window.postMessage;if(!(o||c&&s))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var l="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",function(e){return e+"_"+i()+"."+i()}("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",function(e){if(o(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),n(e.prototype,"get",function(e){if(o(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),n(e.prototype,"has",function(e){if(o(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),n(e.prototype,"set",function(e,t){if(o(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)}),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:l);var f=function(e,t){return e(t={exports:{}},t.exports),t.exports
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */}(function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(t,n,r){n[t]=n[t]||r(),e.exports&&(e.exports=n[t])}("Promise",l,function(){var e,t,r,o=Object.prototype.toString,i=void 0!==n?function(e){return n(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function a(e,n){r.add(e,n),t||(t=i(r.drain))}function u(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function l(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(c,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function d(e){this.def=e,this.triggered=!1}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new function(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t}),t.chain.push(r),0!==t.state&&a(c,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(t){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=u(t))?a(function(){var o=new d(r);try{n.call(t,function(){e.apply(o,arguments)},function(){l.apply(o,arguments)})}catch(e){l.call(o,e)}}):(r.msg=t,r.state=1,r.chain.length>0&&a(c,r))}catch(e){l.call(new d(r),e)}}}).call(t,e)},function(e){l.call(t,e)})}catch(e){l.call(t,e)}}r=function(){var e,n,r;return{add:function(t,o){r=new function(e,t){this.fn=e,this.self=t,this.next=void 0}(t,o),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var v=e({},"constructor",h,!1);return h.prototype=v,e(v,"__NPO__",0,!1),e(h,"resolve",function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),e(h,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),e(h,"all",function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,function(e,t){i[e]=t,++a===o&&n(i)},r)})}),e(h,"race",function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,function(e,t){n(t)},r)})}),h})}),d=new WeakMap;function h(e,t,n){var r=d.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),d.set(e.element,r)}function v(e,t){return(d.get(e.element)||{})[t]||[]}function p(e,t,n){var r=d.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],d.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),d.set(e.element,r),r[t]&&0===r[t].length}var y=["autopause","autoplay","background","byline","color","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","title","transparent","url","width"];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return y.reduce(function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t},t)}function g(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(r,o){if(!a(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e),"&domain=").concat(window.location.hostname);for(var u in t)t.hasOwnProperty(u)&&(i+="&".concat(u,"=").concat(encodeURIComponent(t[u])));var c="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;c.open("GET",i,!0),c.onload=function(){if(404!==c.status)if(403!==c.status)try{var t=JSON.parse(c.responseText);if(403===t.domain_status_code)return g(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},c.onerror=function(){var e=c.status?" (".concat(c.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},c.send()})}function b(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function T(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function k(e,t){var n,r=[];if((t=b(t)).event){if("error"===t.event)v(e,t.data.method).forEach(function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),p(e,t.data.method,n)});r=v(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=v(e,t);if(n.length<1)return!1;var r=n.shift();return p(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach(function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}})}var E=new WeakMap,_=new WeakMap,I=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(/*! @vimeo/player v2.6.3 | (c) 2018 Vimeo | MIT License | https://github.com/vimeo/player.js */
function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!function(e){return e instanceof window.HTMLElement}(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!a(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(E.has(t))return E.get(t);this.element=t,this.origin="*";var i=new f(function(e,o){var i=function(t){if(a(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=b(t.data),o="event"in r&&"ready"===r.event,i="method"in r&&"ping"===r.method;if(o||i)return n.element.setAttribute("data-ready","true"),void e();k(n,r)}};if(window.addEventListener?window.addEventListener("message",i,!1):window.attachEvent&&window.attachEvent("onmessage",i),"IFRAME"!==n.element.nodeName){var c=m(t,r);w(u(c),c,t).then(function(e){var r=g(e,t);return n.element=r,n._originalElement=t,function(e,t){var n=d.get(e);d.set(t,n),d.delete(e)}(t,r),E.set(n.element,n),e}).catch(function(e){return o(e)})}});return _.set(this,i),E.set(this.element,this),"IFRAME"===this.element.nodeName&&T(this,"ping"),this}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new f(function(r,o){return t.ready().then(function(){h(t,e,{resolve:r,reject:o}),T(t,e,n)}).catch(function(e){o(e)})})}},{key:"get",value:function(e){var t=this;return new f(function(n,r){return e=i(e,"get"),t.ready().then(function(){h(t,e,{resolve:n,reject:r}),T(t,e)})})}},{key:"set",value:function(e,t){var n=this;return f.resolve(t).then(function(t){if(e=i(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then(function(){return new f(function(r,o){h(n,e,{resolve:r,reject:o}),T(n,e,t)})})})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===v(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),h(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");p(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=_.get(this)||new f(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return f.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new f(function(t){_.delete(e),E.delete(e.element),e._originalElement&&(E.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.remove(),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),e}();o||!window.Vimeo||window.Vimeo.Player||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var n=m(e);w(u(n),n,e).then(function(t){return g(t,e)}).catch(t)}catch(e){t(e)}})}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=function(t){if(a(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}()),t.a=I}).call(this,n(0),n(3).setImmediate)},function(e,t,n){e.exports=n(6)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o=1,i={},a=!1,u=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){l(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&l(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){l(e.data)},r=function(t){e.port2.postMessage(t)}}():u&&"onreadystatechange"in u.createElement("script")?function(){var e=u.documentElement;r=function(t){var n=u.createElement("script");n.onreadystatechange=function(){l(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():r=function(e){setTimeout(l,0,e)},c.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return i[o]=a,r(o),o++},c.clearImmediate=s}function s(e){delete i[e]}function l(e){if(a)setTimeout(l,0,e);else{var t=i[e];if(t){a=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{s(e),a=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(5))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=u(d);l=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new v(e,t)),1!==s.length||l||u(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=new YT.Player(t.divID,{videoId:t.id,playerVars:{autoplay:t.isAutoPlay},width:t.width,height:t.height})},o=n(1);var i=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={id:t.id,width:t.width,height:t.height,autoplay:t.isAutoPlay};new o.a(t.divID,n)},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"getIDs",value:function(e){var t=/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i,n="";if(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e)){n="youtube";var r=e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);r&&11==r[2].length?this.IDs=r[2]:this.IDs=0}else if(t.test(e)){n="vimeo";var o=e.match(t);o&&9==o[1].length&&(this.IDs=o[1]),console.log(e.match(t))}else this.IDs=0;return[this.IDs,n]}}]),e}(),c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var l=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"video-async";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.isYoutube=!1,this.target=document.getElementsByClassName(n),this.videoData=[];var r=new u,o=!0,i=!1,a=void 0;try{for(var s,l=this.target[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var f=s.value,d=r.getIDs(this.get_dataURL(f,"videoUrl")),h=c(d,2),v=h[0],p=h[1];console.log(v,p);var y=this.get_dataURL(f,"videoAllowAutoplay")||0;this.isYoutube||"youtube"!=p||(this.isYoutube=!0),console.log(y);var m=this.get_randomID(),g={videoType:p,id:v,divID:m,isAutoPlay:y,width:f.clientWidth,height:f.clientHeight};this.setInner(f,m,classname),this.videoData.push(g)}}catch(e){i=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw a}}if(this.isYoutube)this.embedYTTag(),window.onYouTubeIframeAPIReady=function(){var e=!0,n=!1,r=void 0;try{for(var o,i=t.videoData[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;t.playerSetValue(a)}}catch(e){n=!0,r=e}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}};else{var w=!0,b=!1,T=void 0;try{for(var k,E=this.videoData[Symbol.iterator]();!(w=(k=E.next()).done);w=!0){var _=k.value;this.playerSetValue(_)}}catch(e){b=!0,T=e}finally{try{!w&&E.return&&E.return()}finally{if(b)throw T}}}}return s(e,[{key:"playerSetValue",value:function(e){if("youtube"==e.videoType)new r(e);else if("vimeo"==e.videoType)new i(e)}},{key:"get_dataURL",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"videoUrl";return!!e&&e.dataset[t]}},{key:"setInner",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"video-async";if(!e)return!1;e.insertAdjacentHTML("afterbegin",'<div class="'+n+'--inner" id="'+t+'"></div>')}},{key:"get_randomID",value:function(){for(var e="abcdefghijklmnopqrstuvwxyz",t=e.length,n="",r=0;r<8;r++)n+=e[Math.floor(Math.random()*t)];return n}},{key:"embedYTTag",value:function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}]),e}();window.asyncVideo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"video-async";new l(e)},window.onload=function(){asyncVideo()}}]);