(function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=10)})([function(e,t,a){'use strict';function r(e){return'[object Array]'===c.call(e)}function n(e){return null!==e&&'object'===('undefined'==typeof e?'undefined':d(e))}function s(e){return'[object Function]'===c.call(e)}function o(e,t){if(null!==e&&'undefined'!=typeof e)if('object'!==('undefined'==typeof e?'undefined':d(e))&&(e=[e]),r(e))for(var a=0,n=e.length;a<n;a++)t.call(null,e[a],a,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function i(){function e(e,a){t[a]='object'===d(t[a])&&'object'===('undefined'==typeof e?'undefined':d(e))?i(t[a],e):e}for(var t={},a=0,r=arguments.length;a<r;a++)o(arguments[a],e);return t}var d='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},l=a(4),p=a(12),c=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:function(e){return'[object ArrayBuffer]'===c.call(e)},isBuffer:p,isFormData:function(e){return'undefined'!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){var t;return t='undefined'!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t},isString:function(e){return'string'==typeof e},isNumber:function(e){return'number'==typeof e},isObject:n,isUndefined:function(e){return'undefined'==typeof e},isDate:function(e){return'[object Date]'===c.call(e)},isFile:function(e){return'[object File]'===c.call(e)},isBlob:function(e){return'[object Blob]'===c.call(e)},isFunction:s,isStream:function(e){return n(e)&&s(e.pipe)},isURLSearchParams:function(e){return'undefined'!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return'undefined'!=typeof navigator&&'ReactNative'===navigator.product?!1:'undefined'!=typeof window&&'undefined'!=typeof document},forEach:o,merge:i,extend:function(e,t,a){return o(t,function(t,r){e[r]=a&&'function'==typeof t?l(t,a):t}),e},trim:function(e){return e.replace(/^\s*/,'').replace(/\s*$/,'')}}},function(e,t){'use strict';function a(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0});var r=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=function(){function e(t,r,n){a(this,e),this.api_base='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/',this.appID='a3f0075817792f8b87e1d24b9fa314f3',this.lat=t,this.lon=r,this.lang=n,this.errMessage='Ups, something went wrong...',this.iconURL='https://kranjska-gora.si/media/Vreme/'}return r(e,[{key:'currentWeather',value:function(){return this.api_base+'weather?lat='+this.lat+'&lon='+this.lon+'&appid='+this.appID+'&lang='+this.lang}},{key:'forecast',value:function(){return this.api_base+'forecast/?lat='+this.lat+'&lon='+this.lon+'&appid='+this.appID+'&lang='+this.lang}},{key:'getIconUrl',value:function(e){return''+this.iconURL+e+'.svg'}}]),e}();t.default=n},function(e,t,a){'use strict';e.exports=a(11)},function(e,t,a){'use strict';(function(t){function r(e,t){!n.isUndefined(e)&&n.isUndefined(e['Content-Type'])&&(e['Content-Type']=t)}var n=a(0),s=a(14),o={"Content-Type":'application/x-www-form-urlencoded'},i={adapter:function(){var e;return'undefined'==typeof XMLHttpRequest?'undefined'!=typeof t&&(e=a(6)):e=a(6),e}(),transformRequest:[function(e,t){return s(t,'Content-Type'),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(r(t,'application/x-www-form-urlencoded;charset=utf-8'),e.toString()):n.isObject(e)?(r(t,'application/json;charset=utf-8'),JSON.stringify(e)):e}],transformResponse:[function(e){if('string'==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,validateStatus:function(e){return 200<=e&&300>e}};i.headers={common:{Accept:'application/json, text/plain, */*'}},n.forEach(['delete','get','head'],function(e){i.headers[e]={}}),n.forEach(['post','put','patch'],function(e){i.headers[e]=n.merge(o)}),e.exports=i}).call(t,a(5))},function(e){'use strict';e.exports=function(e,t){return function(){for(var a=Array(arguments.length),r=0;r<a.length;r++)a[r]=arguments[r];return e.apply(t,a)}}},function(e){'use strict';function t(){throw new Error('setTimeout has not been defined')}function a(){throw new Error('clearTimeout has not been defined')}function r(e){if(d===setTimeout)return setTimeout(e,0);if((d===t||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function n(e){if(p===clearTimeout)return clearTimeout(e);if((p===a||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){m&&u&&(m=!1,u.length?f=u.concat(f):h=-1,f.length&&o())}function o(){if(!m){var e=r(s);m=!0;for(var t=f.length;t;){for(u=f,f=[];++h<t;)u&&u[h].run();h=-1,t=f.length}u=null,m=!1,n(e)}}function l(e,t){this.fun=e,this.array=t}function i(){}var d,p,c=e.exports={};(function(){try{d='function'==typeof setTimeout?setTimeout:t}catch(a){d=t}try{p='function'==typeof clearTimeout?clearTimeout:a}catch(t){p=a}})();var u,f=[],m=!1,h=-1;c.nextTick=function(e){var t=Array(arguments.length-1);if(1<arguments.length)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];f.push(new l(e,t)),1!==f.length||m||r(o)},l.prototype.run=function(){this.fun.apply(null,this.array)},c.title='browser',c.browser=!0,c.env={},c.argv=[],c.version='',c.versions={},c.on=i,c.addListener=i,c.once=i,c.off=i,c.removeListener=i,c.removeAllListeners=i,c.emit=i,c.prependListener=i,c.prependOnceListener=i,c.listeners=function(){return[]},c.binding=function(){throw new Error('process.binding is not supported')},c.cwd=function(){return'/'},c.chdir=function(){throw new Error('process.chdir is not supported')},c.umask=function(){return 0}},function(e,t,a){'use strict';(function(t){var r=a(0),n=a(15),s=a(17),o=a(18),i=a(19),l=a(7),d='undefined'!=typeof window&&window.btoa&&window.btoa.bind(window)||a(20);e.exports=function(p){return new Promise(function(e,c){var u=p.data,f=p.headers;r.isFormData(u)&&delete f['Content-Type'];var m=new XMLHttpRequest,h='onreadystatechange',y=!1;if('test'===t.env.NODE_ENV||'undefined'==typeof window||!window.XDomainRequest||'withCredentials'in m||i(p.url)||(m=new window.XDomainRequest,h='onload',y=!0,m.onprogress=function(){},m.ontimeout=function(){}),p.auth){var g=p.auth.username||'',b=p.auth.password||'';f.Authorization='Basic '+d(g+':'+b)}if(m.open(p.method.toUpperCase(),s(p.url,p.params,p.paramsSerializer),!0),m.timeout=p.timeout,m[h]=function(){if(m&&(4===m.readyState||y)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf('file:'))){var t='getAllResponseHeaders'in m?o(m.getAllResponseHeaders()):null,a=p.responseType&&'text'!==p.responseType?m.response:m.responseText,r={data:a,status:1223===m.status?204:m.status,statusText:1223===m.status?'No Content':m.statusText,headers:t,config:p,request:m};n(e,c,r),m=null}},m.onerror=function(){c(l('Network Error',p,null,m)),m=null},m.ontimeout=function(){c(l('timeout of '+p.timeout+'ms exceeded',p,'ECONNABORTED',m)),m=null},r.isStandardBrowserEnv()){var E=a(21),x=(p.withCredentials||i(p.url))&&p.xsrfCookieName?E.read(p.xsrfCookieName):void 0;x&&(f[p.xsrfHeaderName]=x)}if('setRequestHeader'in m&&r.forEach(f,function(e,t){'undefined'==typeof u&&'content-type'===t.toLowerCase()?delete f[t]:m.setRequestHeader(t,e)}),p.withCredentials&&(m.withCredentials=!0),p.responseType)try{m.responseType=p.responseType}catch(t){if('json'!==p.responseType)throw t}'function'==typeof p.onDownloadProgress&&m.addEventListener('progress',p.onDownloadProgress),'function'==typeof p.onUploadProgress&&m.upload&&m.upload.addEventListener('progress',p.onUploadProgress),p.cancelToken&&p.cancelToken.promise.then(function(e){m&&(m.abort(),c(e),m=null)}),void 0===u&&(u=null),m.send(u)})}}).call(t,a(5))},function(e,t,a){'use strict';var r=a(16);e.exports=function(e,t,a,n,s){var o=new Error(e);return r(o,t,a,n,s)}},function(e){'use strict';e.exports=function(e){return!!(e&&e.__CANCEL__)}},function(e){'use strict';function t(e){this.message=e}t.prototype.toString=function(){return'Cancel'+(this.message?': '+this.message:'')},t.prototype.__CANCEL__=!0,e.exports=t},function(e,t,a){'use strict';function r(e){return e&&e.__esModule?e:{default:e}}var n=a(2),s=r(n),o=a(29),i=r(o),l=a(1),d=r(l),p=document.getElementById('root');ReactDOM.render(React.createElement(i.default,null),p)},function(e,t,a){'use strict';function r(e){var t=new o(e),a=s(o.prototype.request,t);return n.extend(a,o.prototype,t),n.extend(a,t),a}var n=a(0),s=a(4),o=a(13),i=a(3),l=r(i);l.Axios=o,l.create=function(e){return r(n.merge(i,e))},l.Cancel=a(9),l.CancelToken=a(27),l.isCancel=a(8),l.all=function(e){return Promise.all(e)},l.spread=a(28),e.exports=l,e.exports.default=l},function(e){'use strict';/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */function t(e){return!!e.constructor&&'function'==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function a(e){return'function'==typeof e.readFloatLE&&'function'==typeof e.slice&&t(e.slice(0,0))}e.exports=function(e){return null!=e&&(t(e)||a(e)||!!e._isBuffer)}},function(e,t,a){'use strict';function r(e){this.defaults=e,this.interceptors={request:new o,response:new o}}var n=a(3),s=a(0),o=a(22),i=a(23);r.prototype.request=function(e){'string'==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(n,this.defaults,{method:'get'},e),e.method=e.method.toLowerCase();var t=[i,void 0],a=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)a=a.then(t.shift(),t.shift());return a},s.forEach(['delete','get','head','options'],function(e){r.prototype[e]=function(t,a){return this.request(s.merge(a||{},{method:e,url:t}))}}),s.forEach(['post','put','patch'],function(e){r.prototype[e]=function(t,a,r){return this.request(s.merge(r||{},{method:e,url:t,data:a}))}}),e.exports=r},function(e,t,a){'use strict';var r=a(0);e.exports=function(e,t){r.forEach(e,function(a,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[r])})}},function(e,t,a){'use strict';var r=a(7);e.exports=function(e,t,a){var n=a.config.validateStatus;a.status&&n&&!n(a.status)?t(r('Request failed with status code '+a.status,a.config,null,a.request,a)):e(a)}},function(e){'use strict';e.exports=function(e,t,a,r,n){return e.config=t,a&&(e.code=a),e.request=r,e.response=n,e}},function(e,t,a){'use strict';function r(e){return encodeURIComponent(e).replace(/%40/gi,'@').replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']')}var n=a(0);e.exports=function(e,t,a){if(!t)return e;var s;if(a)s=a(t);else if(n.isURLSearchParams(t))s=t.toString();else{var o=[];n.forEach(t,function(e,t){null===e||'undefined'==typeof e||(n.isArray(e)&&(t+='[]'),!n.isArray(e)&&(e=[e]),n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(r(t)+'='+r(e))}))}),s=o.join('&')}return s&&(e+=(-1===e.indexOf('?')?'?':'&')+s),e}},function(e,t,a){'use strict';var r=a(0),n=['age','authorization','content-length','content-type','etag','expires','from','host','if-modified-since','if-unmodified-since','last-modified','location','max-forwards','proxy-authorization','referer','retry-after','user-agent'];e.exports=function(e){var t,a,s,o={};return e?(r.forEach(e.split('\n'),function(e){if(s=e.indexOf(':'),t=r.trim(e.substr(0,s)).toLowerCase(),a=r.trim(e.substr(s+1)),t){if(o[t]&&0<=n.indexOf(t))return;o[t]='set-cookie'===t?(o[t]?o[t]:[]).concat([a]):o[t]?o[t]+', '+a:a}}),o):o}},function(e,t,a){'use strict';var r=a(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return a&&(n.setAttribute('href',t),t=n.href),n.setAttribute('href',t),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,''):'',host:n.host,search:n.search?n.search.replace(/^\?/,''):'',hash:n.hash?n.hash.replace(/^#/,''):'',hostname:n.hostname,port:n.port,pathname:'/'===n.pathname.charAt(0)?n.pathname:'/'+n.pathname}}var t,a=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement('a');return t=e(window.location.href),function(a){var n=r.isString(a)?e(a):a;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},function(e){'use strict';function t(){this.message='String contains an invalid character'}t.prototype=new Error,t.prototype.code=5,t.prototype.name='InvalidCharacterError',e.exports=function(e){for(var a,r,n=e+'',s='',o=0,i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';n.charAt(0|o)||(i='=',o%1);s+=i.charAt(63&a>>8-8*(o%1))){if(r=n.charCodeAt(o+=3/4),255<r)throw new t;a=a<<8|r}return s}},function(e,t,a){'use strict';var r=a(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,a,n,s,o){var i=[];i.push(e+'='+encodeURIComponent(t)),r.isNumber(a)&&i.push('expires='+new Date(a).toGMTString()),r.isString(n)&&i.push('path='+n),r.isString(s)&&i.push('domain='+s),!0===o&&i.push('secure'),document.cookie=i.join('; ')},read:function(e){var t=document.cookie.match(new RegExp('(^|;\\s*)('+e+')=([^;]*)'));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,'',Date.now()-8.64e7)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,a){'use strict';function r(){this.handlers=[]}var n=a(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,a){'use strict';function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var n=a(0),s=a(24),o=a(8),i=a(3),l=a(25),d=a(26);e.exports=function(e){r(e),e.baseURL&&!l(e.url)&&(e.url=d(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(['delete','get','head','post','put','patch','common'],function(t){delete e.headers[t]});var t=e.adapter||i.adapter;return t(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,a){'use strict';var r=a(0);e.exports=function(e,t,a){return r.forEach(a,function(a){e=a(e,t)}),e}},function(e){'use strict';e.exports=function(e){return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e){'use strict';e.exports=function(e,t){return t?e.replace(/\/+$/,'')+'/'+t.replace(/^\/+/,''):e}},function(e,t,a){'use strict';function r(e){if('function'!=typeof e)throw new TypeError('executor must be a function.');var t;this.promise=new Promise(function(e){t=e});var a=this;e(function(e){a.reason||(a.reason=new n(e),t(a.reason))})}var n=a(9);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e){'use strict';e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,a){'use strict';function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function s(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function o(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0});var i=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var r in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),d=a(1),p=r(d),c=a(30),u=r(c),f=a(32),m=r(f),h=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={api:null,lang:null},a}return o(t,e),l(t,[{key:'componentWillMount',value:function(){this.setState(i({},this.state,{api:new p.default(46.4845,13.7857,-1===window.location.pathname.indexOf('/sl/')?'en':'sl'),lang:-1===window.location.pathname.indexOf('/sl/')?'en':'sl'}))}},{key:'render',value:function(){return React.createElement('div',{className:'container'},React.createElement(u.default,{api:this.state.api,lang:this.state.lang}),React.createElement('br',null),React.createElement('h2',{id:'forecast-title',className:'subtitle'},'sl'===this.state.lang?'Vreme v prihodnjih dneh:':'Weather forecast:'),React.createElement(m.default,{api:this.state.api,lang:this.state.lang}))}}]),t}(React.Component);t.default=h},function(e,t,a){'use strict';function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function s(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function o(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0});var i=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var r in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),d=a(2),p=r(d),c=a(1),u=r(c),f=a(31),m=r(f),h=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={api:a.props.api,isLoading:!0,hasError:!1,errMsg:null,weatherDescription:null,weatherDetails:null,weatherExtraData:null},a}return o(t,e),l(t,[{key:'getCurrentWeather',value:function(){var e=this;p.default.get(this.state.api.currentWeather()).then(function(t){200===t.status?e.setState(i({},e.state,{hasError:!1,isLoading:!1,weatherDescription:t.data.weather[0],weatherDetails:t.data.main,weatherExtraData:{humidity:t.data.main.humidity,windSpeed:t.data.wind.speed,clouds:t.data.clouds.all}})):e.setState(i({},e.state,{hasError:!0}))}).catch(function(t){dataLayer.push({event:'WeatherError',error:t}),e.setState(i({},e.state,{hasError:!0,errMsg:t}))})}},{key:'kelvinToCelsius',value:function(e){return Math.floor(e-273.15)}},{key:'componentWillMount',value:function(){this.getCurrentWeather()}},{key:'render',value:function(){return React.createElement('div',{className:'current-weather'},React.createElement('div',{className:'content'},React.createElement('div',{id:'current-weather'},this.state.weatherDescription&&this.state.weatherDetails&&!1===this.state.hasError?React.createElement(m.default,{lang:this.props.lang,icon:this.state.api.getIconUrl(this.state.weatherDescription.icon),desc:this.state.weatherDescription.description,temp:{current:this.kelvinToCelsius(this.state.weatherDetails.temp),min:this.kelvinToCelsius(this.state.weatherDetails.temp_min),max:this.kelvinToCelsius(this.state.weatherDetails.temp_max)},extra:this.state.weatherExtraData}):null)))}}]),t}(React.Component);t.default=h},function(e,t){'use strict';function a(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function r(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function n(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0});var s=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return n(t,e),s(t,[{key:'capitalizeFirstLetter',value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:'render',value:function(){return React.createElement('div',{className:'current-weather-container'},React.createElement('img',{src:this.props.icon}),React.createElement('p',{className:'weather-description'},'sl'===this.props.lang?React.createElement('small',null,'Vreme v ',React.createElement('strong',null,'Kranjski Gori'),' je trenutno ',React.createElement('strong',null,this.props.desc),'.'):React.createElement('small',null,React.createElement('strong',null,this.capitalizeFirstLetter(this.props.desc)),' at the moment in ',React.createElement('strong',null,'Kranjska Gora'),'.')),React.createElement('div',{className:'current-temperature'},React.createElement('p',{className:'temp'},React.createElement('span',{className:'num'},this.props.temp.current),React.createElement('span',{className:'symbol'},'\xB0C')),React.createElement('div',{className:'min-max-temp'},React.createElement('p',{className:'min-temp'},this.props.temp.min,React.createElement('span',null,'\xB0C')),React.createElement('hr',null),React.createElement('p',{className:'max-temp'},this.props.temp.max,React.createElement('span',null,'\xB0C')))),React.createElement('hr',{className:'divider'}),React.createElement('div',{className:'extra-data-container'},React.createElement('div',{className:'extra-data humidity'},React.createElement('img',{src:'https://kranjska-gora.si/media/Vreme/ExtraData/vlaznost.svg',alt:'vlaznost'}),React.createElement('small',null,'sl'===this.props.lang?'Vla\u017Enost':'Humidity'),React.createElement('span',null,this.props.extra.humidity,'%')),React.createElement('hr',null),React.createElement('div',{className:'extra-data wind-speed'},React.createElement('img',{src:'https://kranjska-gora.si/media/Vreme/ExtraData/veter.svg',alt:'veter'}),React.createElement('small',null,'sl'===this.props.lang?'Veter':'Wind speed'),React.createElement('span',null,this.props.extra.windSpeed,' ',React.createElement('small',null,'m/s'))),React.createElement('hr',null),React.createElement('div',{className:'extra-data clouds'},React.createElement('img',{src:'https://kranjska-gora.si/media/Vreme/ExtraData/oblacnost.svg',alt:'oblacnost'}),React.createElement('small',null,'sl'===this.props.lang?'Obla\u010Dnost':'Clouds'),React.createElement('span',null,this.props.extra.clouds,'%'))))}}]),t}(React.Component);t.default=o},function(e,t,a){'use strict';function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function s(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function o(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0});var i=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var r in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),d=a(2),p=r(d),c=a(1),u=r(c),f=a(33),m=r(f),h=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={api:a.props.api,dataLayer:window.dataLayer||[],isLoading:!0,hasErrors:!1,errMsg:null,forecastData:null,days:'sl'===a.props.lang?['nedelja','ponedeljek','torek','sreda','\u010Detrtek','petek','sobota']:['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],forecast:null},a}return o(t,e),l(t,[{key:'getWeatherForecast',value:function(){var e=this;p.default.get(this.state.api.forecast()).then(function(t){return 200===t.status?e.setState(i({},e.state,{isLoading:!1,hasErrors:!1,forecastData:t.data})):e.setState(i({},e.state,{hasErrors:!0})),t.data.list}).then(function(t){e.generateForecastArray(t)}).catch(function(e){dataLayer.push({event:'WeatherError',error:e})})}},{key:'getDayAndHour',value:function(e){var t=new Date(e),a=this.state.days[t.getDay()],r=t.getHours();return{day:a,hour:r}}},{key:'generateForecastArray',value:function(e){var t,a={},r=!0,n=!1;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var l=s.value,d=this.getDayAndHour(l.dt_txt).day,p=this.getDayAndHour(l.dt_txt).hour,c=this.kelvinToCelsius(l.main.temp),u=l.weather[0].icon,f=l.weather[0].description,m=l.wind.speed,h=l.clouds.all;a.hasOwnProperty(d)||12!==p||(a[d]={hour:p,temp:c,icon:u,desc:f,wind:m,clouds:h})}}catch(e){n=!0,t=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw t}}this.setState(i({},this.state,{forecast:a}))}},{key:'kelvinToCelsius',value:function(e){return Math.floor(e-273.15)}},{key:'componentWillMount',value:function(){this.getWeatherForecast()}},{key:'render',value:function(){var e=this;if(this.state.forecast){var t=Object.keys(this.state.forecast),a=Object.values(this.state.forecast);return React.createElement('div',{className:'weather-forecast'},a.map(function(a,r){return React.createElement(m.default,{key:r,temp:a.temp,day:t[r],icon:e.state.api.getIconUrl(a.icon),description:a.desc,extra:{wind:a.wind,clouds:a.clouds}})}))}return null}}]),t}(React.Component);t.default=h},function(e,t){'use strict';function a(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function r(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function n(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0});var s=function(){function e(e,t){for(var a,r=0;r<t.length;r++)a=t[r],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),s(t,[{key:'render',value:function(){return React.createElement('div',{className:'forecast-card'},React.createElement('h2',{className:'subtitle'},this.props.day),React.createElement('img',{src:this.props.icon,alt:this.props.description}),React.createElement('h4',{className:'temp'},this.props.temp,React.createElement('small',null,'\xB0C')),React.createElement('p',null,this.props.description),React.createElement('hr',null),React.createElement('div',{className:'extra-forecast-data'},React.createElement('div',{className:'extra-forecast-data-single wind'},React.createElement('img',{src:'https://kranjska-gora.si/media/Vreme/ExtraData/veter.svg',alt:'veter'}),React.createElement('small',null,this.props.extra.wind,' m/s')),React.createElement('div',{className:'extra-forecast-data-single clouds'},React.createElement('img',{src:'https://kranjska-gora.si/media/Vreme/ExtraData/oblacnost.svg',alt:'oblaki'}),React.createElement('small',null,this.props.extra.clouds,'%'))))}}]),t}(React.Component);t.default=o}]);