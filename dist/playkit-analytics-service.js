!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.analytics=t():(e.playkit=e.playkit||{},e.playkit.services=e.playkit.services||{},e.playkit.services.analytics=t())}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(i),a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;n(this,e),this._attemptCounter=1,this.headers=t}return o(e,[{key:"getUrl",value:function(e){return e+"/service/"+this.service+(this.action?"/action/"+this.action:"")}},{key:"doHttpRequest",value:function(){var e=this,t=new Promise(function(t,r){e._requestPromise={resolve:t,reject:r}});return this.url||this._requestPromise.reject(new u.default(u.default.Severity.CRITICAL,u.default.Category.NETWORK,u.default.Code.MALFORMED_DATA_URI,{url:this.url})),this._createXHR(),t}},{key:"_createXHR",value:function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status)try{var r=JSON.parse(t.responseText);return e.responseHeaders=e._getResponseHeaders(t),e._requestPromise.resolve(r)}catch(r){e._requestPromise.reject(e._createError(t,u.default.Code.BAD_SERVER_RESPONSE,{text:t.responseText}))}},t.open(this.method,this.url,this.retryConfig.async),this.retryConfig.async&&this.retryConfig.timeout&&(t.timeout=this.retryConfig.timeout);var r=performance.now();t.ontimeout=function(){e._handleError(t,u.default.Code.TIMEOUT,{timeout:(performance.now()-r)/1e3,statusText:t.statusText})},t.onerror=t.onabort=function(){e._handleError(t,u.default.Code.HTTP_ERROR,{text:t.responseText,statusText:t.statusText})},this.headers.forEach(function(e,r){t.setRequestHeader(r,e)}),t.send(this.params)}},{key:"_getResponseHeaders",value:function(e){return e.getAllResponseHeaders().split("\n").filter(function(e){return 0===e.toLowerCase().indexOf("x-")})}},{key:"_handleError",value:function(e,t,r){var n=this._createError(e,t,r);if(e.onreadystatechange=function(){},e.onerror=function(){},e.ontimeout=function(){},e.onabort=function(){},!(this.retryConfig.maxAttempts&&this._attemptCounter<this.retryConfig.maxAttempts))return this._requestPromise.reject(n);this._attemptCounter++,this._createXHR()}},{key:"_createError",value:function(e,t,r){return Object.assign(r,{url:this.url,headers:this._getResponseHeaders(e),attempt:this._attemptCounter}),new u.default(u.default.Severity.CRITICAL,u.default.Category.NETWORK,t,r)}}]),e}();t.default=a},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.OVPConfiguration=void 0;var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(6),u={serviceUrl:"https://cdnapisec.kaltura.com/api_v3",cdnUrl:"https://cdnapisec.kaltura.com",serviceParams:{apiVersion:"3.3.0",format:1},useApiCaptions:!0},a=function(){function e(){n(this,e)}return o(e,null,[{key:"set",value:function(e){e&&Object.assign(u,e)}},{key:"get",value:function(){return(0,i.clone)(u)}}]),e}();t.default=a,t.OVPConfiguration=a},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=r(3),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=r(9),a=r(8),s=r(7),c=function e(t,r,i){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};n(this,e),this.severity=t,this.category=r,this.code=i,this.data=u,(0,o.getLogLevel)("Error")!==o.LogLevel.OFF&&e._logger.error("Category:"+r+" | Code:"+i+" |",u)};c.Severity=u.Severity,c.Category=s.Category,c.Code=a.Code,c._logger=(0,i.default)("Error"),t.default=c},function(e,t,r){"use strict";function n(e){return e?a.get(e):a}function o(e){return n(e).getLevel()}function i(e,t){n(t).setLevel(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=t.getLogLevel=t.LogLevel=void 0;var u=r(10),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(u),s={DEBUG:a.DEBUG,INFO:a.INFO,TIME:a.TIME,WARN:a.WARN,ERROR:a.ERROR,OFF:a.OFF};a.useDefaults({defaultLevel:a.ERROR}),t.default=n,t.LogLevel=s,t.getLogLevel=o,t.setLogLevel=i},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(t){n(this,e),this.hasError=!1,"KalturaAPIException"===t.objectType?(this.hasError=!0,this.error=new i(t.code,t.message)):t.error&&"KalturaAPIException"===t.error.objectType?(this.hasError=!0,this.error=new i(t.error.code,t.error.message)):this.data=t};t.default=o;var i=function e(t,r){n(this,e),this.code=t,this.message=r}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MultiRequestResult=void 0;var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),l=n(c),f=r(3),d=n(f),p=r(4),v=n(p),y=r(2),h=n(y),g=function(e){function t(){var e,r,n,o;i(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.requests=[],o=r,u(n,o)}return a(t,e),s(t,[{key:"add",value:function(e){this.requests.push(e);var t={},r={service:e.service,action:e.action};return Object.assign(t,o({},this.requests.length,Object.assign(r,e.params))),Object.assign(t,this.params),this.params=t,this}},{key:"execute",value:function(){var e=this;return new Promise(function(r,n){try{e.params=JSON.stringify(e.params)}catch(r){t._logger.error(""+r.message),n(new h.default(h.default.Severity.CRITICAL,h.default.Category.PROVIDER,h.default.Code.FAILED_PARSING_REQUEST,{error:r,params:e.params}))}e.doHttpRequest().then(function(t){var o=new b(t);o.success?r({headers:e.responseHeaders,response:o}):n(new h.default(h.default.Severity.CRITICAL,h.default.Category.NETWORK,h.default.Code.MULTIREQUEST_API_ERROR,{url:e.url,headers:e.responseHeaders,results:o.results}))},function(e){n(e)})})}}]),t}(l.default);g._logger=(0,d.default)("MultiRequestBuilder"),t.default=g;var b=t.MultiRequestResult=function e(t){var r=this;i(this,e),this.results=[],this.success=!0,(t.result?t.result:t).forEach(function(t){var n=new v.default(t);if(r.results.push(n),n.hasError)return e._logger.error("Service returned an error with error code: "+n.error.code+" and message: "+n.error.message+"."),void(r.success=!1)})};b._logger=(0,d.default)("MultiRequestResult")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function e(t){var r=void 0;return Array.isArray(t)?(r=t.length>0?t.slice(0):[],r.forEach(function(t,o){("object"===(void 0===t?"undefined":n(t))&&t!=={}||Array.isArray(t)&&t.length>0)&&(r[o]=e(t))})):"object"===(void 0===t?"undefined":n(t))?(r=Object.assign({},t),Object.keys(r).forEach(function(t){("object"===n(r[t])&&r[t]!=={}||Array.isArray(r[t])&&r[t].length>0)&&(r[t]=e(r[t]))})):r=t,r};t.clone=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={NETWORK:1,SERVICE:2,PROVIDER:3};t.Category=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={UNSUPPORTED_SCHEME:1e3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,BAD_SERVER_RESPONSE:1005,MULTIREQUEST_API_ERROR:1006,API_RESPONSE_MISMATCH:1007,ERROR:2e3,BLOCK_ACTION:2001,MISSING_MANDATORY_PARAMS:3e3,MISSING_PLAY_SOURCE:3001};t.Code=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={RECOVERABLE:1,CRITICAL:2};t.Severity=n},function(e,t,r){var n,o;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
!function(i){"use strict";var u={};u.VERSION="1.4.1";var a,s={},c=function(e,t){return function(){return t.apply(e,arguments)}},l=function(){var e,t,r=arguments,n=r[0];for(t=1;t<r.length;t++)for(e in r[t])e in n||!r[t].hasOwnProperty(e)||(n[e]=r[t][e]);return n},f=function(e,t){return{value:e,name:t}};u.DEBUG=f(1,"DEBUG"),u.INFO=f(2,"INFO"),u.TIME=f(3,"TIME"),u.WARN=f(4,"WARN"),u.ERROR=f(8,"ERROR"),u.OFF=f(99,"OFF");var d=function(e){this.context=e,this.setLevel(e.filterLevel),this.log=this.info};d.prototype={setLevel:function(e){e&&"value"in e&&(this.context.filterLevel=e)},getLevel:function(){return this.context.filterLevel},enabledFor:function(e){var t=this.context.filterLevel;return e.value>=t.value},debug:function(){this.invoke(u.DEBUG,arguments)},info:function(){this.invoke(u.INFO,arguments)},warn:function(){this.invoke(u.WARN,arguments)},error:function(){this.invoke(u.ERROR,arguments)},time:function(e){"string"==typeof e&&e.length>0&&this.invoke(u.TIME,[e,"start"])},timeEnd:function(e){"string"==typeof e&&e.length>0&&this.invoke(u.TIME,[e,"end"])},invoke:function(e,t){a&&this.enabledFor(e)&&a(t,l({level:e},this.context))}};var p=new d({filterLevel:u.OFF});!function(){var e=u;e.enabledFor=c(p,p.enabledFor),e.debug=c(p,p.debug),e.time=c(p,p.time),e.timeEnd=c(p,p.timeEnd),e.info=c(p,p.info),e.warn=c(p,p.warn),e.error=c(p,p.error),e.log=e.info}(),u.setHandler=function(e){a=e},u.setLevel=function(e){p.setLevel(e);for(var t in s)s.hasOwnProperty(t)&&s[t].setLevel(e)},u.getLevel=function(){return p.getLevel()},u.get=function(e){return s[e]||(s[e]=new d(l({name:e},p.context)))},u.createDefaultHandler=function(e){e=e||{},e.formatter=e.formatter||function(e,t){t.name&&e.unshift("["+t.name+"]")};var t={},r=function(e,t){Function.prototype.apply.call(e,console,t)};return"undefined"==typeof console?function(){}:function(n,o){n=Array.prototype.slice.call(n);var i,a=console.log;o.level===u.TIME?(i=(o.name?"["+o.name+"] ":"")+n[0],"start"===n[1]?console.time?console.time(i):t[i]=(new Date).getTime():console.timeEnd?console.timeEnd(i):r(a,[i+": "+((new Date).getTime()-t[i])+"ms"])):(o.level===u.WARN&&console.warn?a=console.warn:o.level===u.ERROR&&console.error?a=console.error:o.level===u.INFO&&console.info?a=console.info:o.level===u.DEBUG&&console.debug&&(a=console.debug),e.formatter(n,o),r(a,n))}},u.useDefaults=function(e){u.setLevel(e&&e.defaultLevel||u.DEBUG),u.setHandler(u.createDefaultHandler(e))},n=u,void 0!==(o="function"==typeof n?n.call(t,r,t,e):n)&&(e.exports=o)}()},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(5),a=n(u),s=r(1),c=n(s),l=function(){function e(){o(this,e)}return i(e,null,[{key:"getMultiRequest",value:function(e,t,r){var n=c.default.get(),o=n.serviceParams;Object.assign(o,{ks:t,clientTag:"html5:v"+e}),r&&Object.assign(o,{partnerId:r});var i=new Map;i.set("Content-Type","application/json");var u=new a.default(i);return u.method="POST",u.service="multirequest",u.url=u.getUrl(n.serviceUrl),u.params=o,u}}]),e}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){var t=[],r=/\[\]$/,o=function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=function(e,r){r="function"==typeof r?r():null===r?"":void 0===r?"":r,t[t.length]=encodeURIComponent(e)+"="+encodeURIComponent(r)};return function e(u,a){var s=void 0,c=void 0,l=void 0;if(u)if(o(a))for(s=0,c=a.length;s<c;s++)r.test(u)?i(u,a[s]):e(u+":"+("object"===n(a[s])?s:""),a[s]);else if(a&&"[object Object]"===String(a))for(l in a)e(u+":"+l,a[l]);else i(u,a);else if(o(a))for(s=0,c=a.length;s<c;s++)i(a[s].name,a[s].value);else for(l in a)e(l,a[l]);return t}("",e).join("&").replace(/%20/g,"+")};t.param=o},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(12),c=n(s),l=r(0),f=n(l),d=r(1),p=n(d),v=r(13),y=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,null,[{key:"trackEvent",value:function(e,t){var r=p.default.get(),n={};Object.assign(n,r.serviceParams,t);var o=new f.default;return o.service="analytics",o.action="trackEvent",o.method="GET",o.tag="analytics-trackEvent",o.params=n,o.url=e+"?service="+o.service+"&action="+o.action+"&"+(0,v.param)(o.params),o}}]),t}(c.default);t.default=y},,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=t.NAME=t.RequestBuilder=t.OVPConfiguration=t.OVPAnalyticsService=void 0;var o=r(0),i=n(o),u=r(1),a=n(u),s=r(15),c=n(s);t.OVPAnalyticsService=c.default,t.OVPConfiguration=a.default,t.RequestBuilder=i.default,t.NAME="playkit-js-providers-analytics-service",t.VERSION="2.18.0"}])});
//# sourceMappingURL=playkit-analytics-service.js.map