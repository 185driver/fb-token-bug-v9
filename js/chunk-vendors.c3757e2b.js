(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),a=n("5c6c"),s=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=s(t),e=c(e),l)try{return f(t,e)}catch(n){}if(u(t,e))return a(!i(o.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0cb2":function(t,e,n){var r=n("e330"),i=n("7b0b"),o=Math.floor,a=r("".charAt),s=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,f,d){var h=n+t.length,p=r.length,v=l;return void 0!==f&&(f=i(f),v=u),s(d,v,(function(i,s){var u;switch(a(s,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,h);case"<":u=f[c(s,1,-1)];break;default:var l=+s;if(0===l)return i;if(l>p){var d=o(l/10);return 0===d?i:d<=p?void 0===r[d-1]?a(s,1):r[d-1]+a(s,1):i}u=r[l-1]}return void 0===u?"":u}))}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("825a"),a=n("1626"),s=n("c6b6"),c=n("9263"),u=r.TypeError;t.exports=function(t,e){var n=t.exec;if(a(n)){var r=i(n,t,e);return null!==r&&o(r),r}if("RegExp"===s(t))return i(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw o("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var a=0,s={next:function(){return{done:!!a++}},return:function(){o=!0}};s[i]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return I})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return u})),n.d(e,"n",(function(){return f})),n.d(e,"o",(function(){return w})),n.d(e,"p",(function(){return O}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],a=t[n++],s=t[n++],c=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&s)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,a=o?t[i+1]:0,s=i+2<t.length,c=s?t[i+2]:0,u=e>>2,l=(3&e)<<4|a>>4;let f=(15&a)<<2|c>>6,d=63&c;s||(d=64,o||(f=64)),r.push(n[u],n[l],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const s=i<t.length,c=s?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==c||null==l)throw Error();const f=e<<2|a>>4;if(r.push(f),64!==c){const t=a<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function l(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){const t=c();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="FirebaseError";class p extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=h,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?m(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`,s=new p(r,a,n);return s}}function m(t,e){return t.replace(y,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function b(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(_(n)&&_(o)){if(!b(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function O(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function I(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){const n=new E(t,e);return n.subscribe.bind(n)}class E{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=T(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=S),void 0===r.error&&(r.error=S),void 0===r.complete&&(r.complete=S);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function S(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),o=n("c65b"),a=n("825a"),s=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),f=n("9a1f"),d=n("35a1"),h=n("2a62"),p=r.TypeError,v=function(t,e){this.stopped=t,this.result=e},m=v.prototype;t.exports=function(t,e,n){var r,y,g,b,_,w,O,I=n&&n.that,k=!(!n||!n.AS_ENTRIES),E=!(!n||!n.IS_ITERATOR),T=!(!n||!n.INTERRUPTED),S=i(e,I),C=function(t){return r&&h(r,"normal",t),new v(!0,t)},A=function(t){return k?(a(t),T?S(t[0],t[1],C):S(t[0],t[1])):T?S(t,C):S(t)};if(E)r=t;else{if(y=d(t),!y)throw p(s(t)+" is not iterable");if(c(y)){for(g=0,b=u(t);b>g;g++)if(_=A(t[g]),_&&l(m,_))return _;return new v(!1)}r=f(t,y)}w=r.next;while(!(O=o(w,r)).done){try{_=A(O.value)}catch(x){h(r,"throw",x)}if("object"==typeof _&&_&&l(m,_))return _}return new v(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),a=n("6eeb"),s=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,f,d,h,p,v=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[v]||s(v,{}):(r[v]||{}).prototype,l)for(f in e){if(h=e[f],t.noTargetGet?(p=i(l,f),d=p&&p.value):d=l[f],n=u(m?f:v+(y?".":"#")+f,t.forced),!n&&void 0!==d){if(typeof h==typeof d)continue;c(h,d)}(t.sham||d&&d.sham)&&o(h,"sham",!0),a(l,f,h,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["e"]}));var i="firebase",o="9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),a=n("83ab"),s=o("species");t.exports=function(t){var e=r(t),n=i.f;a&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");t.exports=function(t,e,n){var a,s;i(t);try{if(a=o(t,"return"),!a){if("throw"===e)throw n;return n}a=r(a,t)}catch(c){s=!0,a=c}if("throw"===e)throw n;if(s)throw a;return i(a),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function f(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var y=m("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(t,e){return b.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,I=w((function(t){return t.replace(O,(function(t,e){return e?e.toUpperCase():""}))})),k=w((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),E=/\B([A-Z])/g,T=w((function(t){return t.replace(E,"-$1").toLowerCase()}));function S(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){return t.bind(e)}var A=Function.prototype.bind?C:S;function x(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function R(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function N(t,e,n){}var j=function(t,e,n){return!1},L=function(t){return t};function $(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return $(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every((function(n){return $(t[n],e[n])}))}catch(u){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if($(t[n],e))return n;return-1}function D(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U="data-server-rendered",F=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:N,parsePlatformTagName:L,mustUseProp:j,async:!0,_lifecycleHooks:V},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+H.source+".$_\\d]");function q(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,J="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=Y&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),tt=Q&&/msie|trident/.test(Q),et=Q&&Q.indexOf("msie 9.0")>0,nt=Q&&Q.indexOf("edge/")>0,rt=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Z),it=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/)),ot={}.watch,at=!1;if(X)try{var st={};Object.defineProperty(st,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,st)}catch(ka){}var ct=function(){return void 0===K&&(K=!X&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ft,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ft="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ht=N,pt=0,vt=function(){this.id=pt++,this.subs=[]};vt.prototype.addSub=function(t){this.subs.push(t)},vt.prototype.removeSub=function(t){g(this.subs,t)},vt.prototype.depend=function(){vt.target&&vt.target.addDep(this)},vt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},vt.target=null;var mt=[];function yt(t){mt.push(t),vt.target=t}function gt(){mt.pop(),vt.target=mt[mt.length-1]}var bt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,_t);var wt=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Ot(t){return new bt(void 0,void 0,void 0,String(t))}function It(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var kt=Array.prototype,Et=Object.create(kt),Tt=["push","pop","shift","unshift","splice","sort","reverse"];Tt.forEach((function(t){var e=kt[t];W(Et,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o}))}));var St=Object.getOwnPropertyNames(Et),Ct=!0;function At(t){Ct=t}var xt=function(t){this.value=t,this.dep=new vt,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(J?Rt(t,Et):Pt(t,Et,St),this.observeArray(t)):this.walk(t)};function Rt(t,e){t.__proto__=e}function Pt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(t,o,e[o])}}function Nt(t,e){var n;if(c(t)&&!(t instanceof bt))return _(t,"__ob__")&&t.__ob__ instanceof xt?n=t.__ob__:Ct&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new xt(t)),e&&n&&n.vmCount++,n}function jt(t,e,n,r,i){var o=new vt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Nt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return vt.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!i&&Nt(e),o.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(jt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function $t(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}xt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)jt(t,e[n])},xt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Nt(t[e])};var Dt=z.optionMergeStrategies;function Ut(t,e){if(!e)return t;for(var n,r,i,o=dt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],_(t,n)?r!==i&&l(r)&&l(i)&&Ut(r,i):Lt(t,n,i));return t}function Ft(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ut(r,i):i}:e?t?function(){return Ut("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?zt(n):n}function zt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ht(t,e,n,r){var i=Object.create(t||null);return e?R(i,e):i}Dt.data=function(t,e,n){return n?Ft(t,e,n):e&&"function"!==typeof e?t:Ft(t,e)},V.forEach((function(t){Dt[t]=Vt})),F.forEach((function(t){Dt[t+"s"]=Ht})),Dt.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in R(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return R(i,t),e&&R(i,e),i},Dt.provide=Ft;var Bt=function(t,e){return void 0===e?t:e};function Wt(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=I(i),a[o]={type:null})}else if(l(n))for(var s in n)i=n[s],o=I(s),a[o]=l(i)?i:{type:i};else 0;t.props=a}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?R({from:o},a):{from:a}}else 0}}function qt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),Wt(e,n),Gt(e,n),qt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Kt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)_(t,o)||s(o);function s(r){var i=Dt[r]||Bt;a[r]=i(t[r],e[r],n,r)}return a}function Jt(t,e,n,r){if("string"===typeof n){var i=t[e];if(_(i,n))return i[n];var o=I(n);if(_(i,o))return i[o];var a=k(o);if(_(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Xt(t,e,n,r){var i=e[t],o=!_(n,t),a=n[t],s=ee(Boolean,i.type);if(s>-1)if(o&&!_(i,"default"))a=!1;else if(""===a||a===T(t)){var c=ee(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Yt(r,i,t);var u=Ct;At(!0),Nt(a),At(u)}return a}function Yt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Qt(e.type)?r.call(t):r}}var Zt=/^\s*function (\w+)/;function Qt(t){var e=t&&t.toString().match(Zt);return e?e[1]:""}function te(t,e){return Qt(t)===Qt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ka){ie(ka,r,"errorCaptured hook")}}}ie(t,e,n)}finally{gt()}}function re(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch((function(t){return ne(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(ka){ne(ka,r,i)}return o}function ie(t,e,n){if(z.errorHandler)try{return z.errorHandler.call(null,t,e,n)}catch(ka){ka!==t&&oe(ka,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!X&&!Y||"undefined"===typeof console)throw t;console.error(t)}var ae,se=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var fe=Promise.resolve();ae=function(){fe.then(le),rt&&setTimeout(N)},se=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,he=new MutationObserver(le),pe=document.createTextNode(String(de));he.observe(pe,{characterData:!0}),ae=function(){de=(de+1)%2,pe.data=String(de)},se=!0}function ve(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(ka){ne(ka,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var me=new ft;function ye(t){ge(t,me),me.clear()}function ge(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)ge(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ge(t[r[n]],e)}}}var be=w((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function _e(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)re(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function we(t,e,n,i,a,s){var c,u,l,f;for(c in t)u=t[c],l=e[c],f=be(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=_e(u,s)),o(f.once)&&(u=t[c]=a(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(f=be(c),i(f.name,e[c],f.capture))}function Oe(t,e,n){var a;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function c(){n.apply(this,arguments),g(a.fns,c)}r(s)?a=_e([c]):i(s.fns)&&o(s.merged)?(a=s,a.fns.push(c)):a=_e([s,c]),a.merged=!0,t[e]=a}function Ie(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in o){var l=T(u);ke(a,c,u,l,!0)||ke(a,s,u,l,!1)}return a}}function ke(t,e,n,r,o){if(i(e)){if(_(e,n))return t[n]=e[n],o||delete e[n],!0;if(_(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Ee(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Te(t){return s(t)?[Ot(t)]:Array.isArray(t)?Ce(t):void 0}function Se(t){return i(t)&&i(t.text)&&a(t.isComment)}function Ce(t,e){var n,a,c,u,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=l.length-1,u=l[c],Array.isArray(a)?a.length>0&&(a=Ce(a,(e||"")+"_"+n),Se(a[0])&&Se(u)&&(l[c]=Ot(u.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?Se(u)?l[c]=Ot(u.text+a):""!==a&&l.push(Ot(a)):Se(a)&&Se(u)?l[c]=Ot(u.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function xe(t){var e=Re(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach((function(n){jt(t,n,e[n])})),At(!0))}function Re(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&_(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Pe(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Ne)&&delete n[u];return n}function Ne(t){return t.isComment&&!t.asyncFactory||" "===t.text}function je(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=$e(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Me(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),W(i,"$stable",a),W(i,"$key",s),W(i,"$hasNormal",o),i}function $e(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Te(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!je(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Me(t,e){return function(){return t[e]}}function De(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Ue(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=R(R({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Fe(t){return Jt(this.$options,"filters",t,!0)||L}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function ze(t,e,n,r,i){var o=z.keyCodes[e]||n;return i&&r&&!z.keyCodes[e]?Ve(i,r):o?Ve(o,t):r?T(r)!==e:void 0===t}function He(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||z.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(a),u=T(a);if(!(c in o)&&!(u in o)&&(o[a]=n[a],i)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Be(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ge(r,"__static__"+t,!1)),r}function We(t,e,n){return Ge(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ge(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&qe(t[r],e+"_"+r,n);else qe(t,e,n)}function qe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(l(e)){var n=t.on=t.on?R({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Je(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Je(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ye(t,e){return"string"===typeof t?e+t:t}function Ze(t){t._o=We,t._n=v,t._s=p,t._l=De,t._t=Ue,t._q=$,t._i=M,t._m=Be,t._f=Fe,t._k=ze,t._b=He,t._v=Ot,t._e=wt,t._u=Je,t._g=Ke,t._d=Xe,t._p=Ye}function Qe(t,e,r,i,a){var s,c=this,u=a.options;_(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=o(u._compiled),f=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Re(u.inject,i),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=Pe(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=hn(s,t,e,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return hn(s,t,e,n,r,f)}}function tn(t,e,r,o,a){var s=t.options,c={},u=s.props;if(i(u))for(var l in u)c[l]=Xt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var f=new Qe(r,c,a,o,t),d=s.render.call(null,f._c,f);if(d instanceof bt)return en(d,r,f.parent,s,f);if(Array.isArray(d)){for(var h=Te(d)||[],p=new Array(h.length),v=0;v<h.length;v++)p[v]=en(h[v],r,f.parent,s,f);return p}}function en(t,e,n,r,i){var o=It(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nn(t,e){for(var n in e)t[I(n)]=e[n]}Ze(Qe.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=sn(t,Rn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;$n(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Fn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Un(e,!0):e.$destroy())}},on=Object.keys(rn);function an(t,e,n,a,s){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=In(l,u),void 0===t))return On(l,e,n,a,s);e=e||{},Or(t),i(e.model)&&ln(t.options,e);var f=Ie(e,t,s);if(o(t.options.functional))return tn(t,f,e,n,a);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}cn(e);var p=t.options.name||s,v=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:d,tag:s,children:a},l);return v}}}function sn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],o=rn[r];i===o||i&&i._merged||(e[r]=i?un(o,i):o)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var fn=1,dn=2;function hn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=dn),pn(t,e,n,r,i)}function pn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return wt();if(i(n)&&i(n.is)&&(e=n.is),!e)return wt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=Te(r):o===fn&&(r=Ee(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||z.getTagNamespace(e),a=z.isReservedTag(e)?new bt(z.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Jt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):an(c,n,t,r,e)):a=an(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&vn(a,s),i(n)&&mn(n),a):wt()}function vn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&vn(c,e,n)}}function mn(t){c(t.style)&&ye(t.style),c(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Pe(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return hn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return hn(t,e,n,r,i,!0)};var o=r&&r.data;jt(t,"$attrs",o&&o.attrs||n,null,!0),jt(t,"$listeners",e._parentListeners||n,null,!0)}var gn,bn=null;function _n(t){Ze(t.prototype),t.prototype.$nextTick=function(t){return ve(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Le(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(ka){ne(ka,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=wt()),t.parent=i,t}}function wn(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function On(t,e,n,r,i){var o=wt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function In(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=bn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return g(a,n)}));var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=D((function(n){t.resolved=wn(n,e),s?a.length=0:f(!0)})),p=D((function(e){i(t.errorComp)&&(t.error=!0,f(!0))})),v=t(d,p);return c(v)&&(h(v)?r(t.resolved)&&v.then(d,p):h(v.component)&&(v.component.then(d,p),i(v.error)&&(t.errorComp=wn(v.error,e)),i(v.loading)&&(t.loadingComp=wn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))}),v.delay||200)),i(v.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function kn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||je(n)))return n}}function En(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function Tn(t,e){gn.$on(t,e)}function Sn(t,e){gn.$off(t,e)}function Cn(t,e){var n=gn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function An(t,e,n){gn=t,we(e,n||{},Tn,Sn,Cn,t),gn=void 0}function xn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)re(n[o],e,r,e,i)}return e}}var Rn=null;function Pn(t){var e=Rn;return Rn=t,function(){Rn=e}}function Nn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function jn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Pn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Fn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Fn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=wt),Fn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,N,{before:function(){t._isMounted&&!t._isDestroyed&&Fn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Fn(t,"mounted")),t}function $n(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key||!a&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var l=t._props,f=t.$options._propKeys||[],d=0;d<f.length;d++){var h=f[d],p=t.$options.props;l[h]=Xt(h,p,e,t)}At(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,An(t,r,v),u&&(t.$slots=Pe(o,i.context),t.$forceUpdate())}function Mn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Fn(t,"activated")}}function Un(t,e){if((!e||(t._directInactive=!0,!Mn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Un(t.$children[n]);Fn(t,"deactivated")}}function Fn(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),gt()}var Vn=[],zn=[],Hn={},Bn=!1,Wn=!1,Gn=0;function qn(){Gn=Vn.length=zn.length=0,Hn={},Bn=Wn=!1}var Kn=0,Jn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Jn()>document.createEvent("Event").timeStamp&&(Jn=function(){return Xn.now()})}function Yn(){var t,e;for(Kn=Jn(),Wn=!0,Vn.sort((function(t,e){return t.id-e.id})),Gn=0;Gn<Vn.length;Gn++)t=Vn[Gn],t.before&&t.before(),e=t.id,Hn[e]=null,t.run();var n=zn.slice(),r=Vn.slice();qn(),tr(n),Zn(r),ut&&z.devtools&&ut.emit("flush")}function Zn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Fn(r,"updated")}}function Qn(t){t._inactive=!1,zn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function er(t){var e=t.id;if(null==Hn[e]){if(Hn[e]=!0,Wn){var n=Vn.length-1;while(n>Gn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);Bn||(Bn=!0,ve(Yn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ft,this.newDepIds=new ft,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ka){if(!this.user)throw ka;ne(ka,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),gt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:N,set:N};function or(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function ar(t){t._watchers=[];var e=t.$options;e.props&&sr(t,e.props),e.methods&&vr(t,e.methods),e.data?cr(t):Nt(t._data={},!0),e.computed&&fr(t,e.computed),e.watch&&e.watch!==ot&&mr(t,e.watch)}function sr(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||At(!1);var a=function(o){i.push(o);var a=Xt(o,e,n,t);jt(r,o,a),o in t||or(t,"_props",o)};for(var s in e)a(s);At(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&_(r,o)||B(o)||or(t,"_data",o)}Nt(e,!0)}function ur(t,e){yt();try{return t.call(e,e)}catch(ka){return ne(ka,e,"data()"),{}}finally{gt()}}var lr={lazy:!0};function fr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new rr(t,a||N,N,lr)),i in t||dr(t,i,o)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?hr(e):pr(n),ir.set=N):(ir.get=n.get?r&&!1!==n.cache?hr(e):pr(n.get):N,ir.set=n.set||N),Object.defineProperty(t,e,ir)}function hr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),vt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function vr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?N:A(e[n],t)}function mr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function gr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';yt(),re(e,r,[i.value],r,o),gt()}return function(){i.teardown()}}}var br=0;function _r(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?wr(e,t):e.$options=Kt(Or(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Nn(e),En(e),yn(e),Fn(e,"beforeCreate"),xe(e),ar(e),Ae(e),Fn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function wr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Or(t){var e=t.options;if(t.super){var n=Or(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Ir(t);i&&R(t.extendOptions,i),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Ir(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function kr(t){this._init(t)}function Er(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Tr(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function Sr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Kt(n.options,t),a["super"]=n,a.options.props&&Cr(a),a.options.computed&&Ar(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,F.forEach((function(t){a[t]=n[t]})),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=R({},a.options),i[r]=a,a}}function Cr(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function Ar(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function xr(t){F.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Rr(t){return t&&(t.Ctor.options.name||t.tag)}function Pr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Nr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!e(s)&&jr(n,o,r,i)}}}function jr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,g(n,e)}_r(kr),gr(kr),xn(kr),jn(kr),_n(kr);var Lr=[String,RegExp,Array],$r={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,a=r.componentInstance,s=r.componentOptions;e[i]={name:Rr(s),tag:o,componentInstance:a},n.push(i),this.max&&n.length>parseInt(this.max)&&jr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)jr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Nr(t,(function(t){return Pr(e,t)}))})),this.$watch("exclude",(function(e){Nr(t,(function(t){return!Pr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=kn(t),n=e&&e.componentOptions;if(n){var r=Rr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Pr(o,r))||a&&r&&Pr(a,r))return e;var s=this,c=s.cache,u=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,g(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Mr={KeepAlive:$r};function Dr(t){var e={get:function(){return z}};Object.defineProperty(t,"config",e),t.util={warn:ht,extend:R,mergeOptions:Kt,defineReactive:jt},t.set=Lt,t.delete=$t,t.nextTick=ve,t.observable=function(t){return Nt(t),t},t.options=Object.create(null),F.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,R(t.options.components,Mr),Er(t),Tr(t),Sr(t),xr(t)}Dr(kr),Object.defineProperty(kr.prototype,"$isServer",{get:ct}),Object.defineProperty(kr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(kr,"FunctionalRenderContext",{value:Qe}),kr.version="2.6.14";var Ur=m("style,class"),Fr=m("input,textarea,option,select,progress"),Vr=function(t,e,n){return"value"===n&&Fr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},zr=m("contenteditable,draggable,spellcheck"),Hr=m("events,caret,typing,plaintext-only"),Br=function(t,e){return Jr(e)||"false"===e?"false":"contenteditable"===t&&Hr(e)?e:"true"},Wr=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",qr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Kr=function(t){return qr(t)?t.slice(6,t.length):""},Jr=function(t){return null==t||!1===t};function Xr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Yr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Yr(e,n.data));return Zr(e.staticClass,e.class)}function Yr(t,e){return{staticClass:Qr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Zr(t,e){return i(t)||i(e)?Qr(t,ti(e)):""}function Qr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=function(t){return ii(t)||oi(t)};function si(t){return oi(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!X)return!0;if(ai(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=m("text,number,password,search,email,tel,url");function fi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function hi(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function vi(t){return document.createComment(t)}function mi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function gi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function _i(t){return t.nextSibling}function wi(t){return t.tagName}function Oi(t,e){t.textContent=e}function Ii(t,e){t.setAttribute(e,"")}var ki=Object.freeze({createElement:di,createElementNS:hi,createTextNode:pi,createComment:vi,insertBefore:mi,removeChild:yi,appendChild:gi,parentNode:bi,nextSibling:_i,tagName:wi,setTextContent:Oi,setStyleScope:Ii}),Ei={create:function(t,e){Ti(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ti(t,!0),Ti(e))},destroy:function(t){Ti(t,!0)}};function Ti(t,e){var n=t.data.ref;if(i(n)){var r=t.context,o=t.componentInstance||t.elm,a=r.$refs;e?Array.isArray(a[n])?g(a[n],o):a[n]===o&&(a[n]=void 0):t.data.refInFor?Array.isArray(a[n])?a[n].indexOf(o)<0&&a[n].push(o):a[n]=[o]:a[n]=o}}var Si=new bt("",{},[]),Ci=["create","activate","update","remove","destroy"];function Ai(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xi(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function xi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||li(r)&&li(o)}function Ri(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Pi(t){var e,n,a={},c=t.modules,u=t.nodeOps;for(e=0;e<Ci.length;++e)for(a[Ci[e]]=[],n=0;n<c.length;++n)i(c[n][Ci[e]])&&a[Ci[e]].push(c[n][Ci[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function h(t,e,n,r,a,s,c){if(i(t.elm)&&i(s)&&(t=s[c]=It(t)),t.isRootInsert=!a,!p(t,e,n,r)){var l=t.data,f=t.children,d=t.tag;i(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),O(t),b(t,f,e),i(l)&&w(t,e),g(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),g(n,t.elm,r)):(t.elm=u.createTextNode(t.text),g(n,t.elm,r))}}function p(t,e,n,r){var a=t.data;if(i(a)){var s=i(t.componentInstance)&&a.keepAlive;if(i(a=a.hook)&&i(a=a.init)&&a(t,!1),i(t.componentInstance))return v(t,e),g(n,t.elm,r),o(s)&&y(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(w(t,e),O(t)):(Ti(t),e.push(t))}function y(t,e,n,r){var o,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(o=s.data)&&i(o=o.transition)){for(o=0;o<a.activate.length;++o)a.activate[o](Si,s);e.push(s);break}g(n,t.elm,r)}function g(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)h(e[r],n,t.elm,null,!0,e,r)}else s(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function w(t,n){for(var r=0;r<a.create.length;++r)a.create[r](Si,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Si,t),i(e.insert)&&n.push(t))}function O(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Rn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function I(t,e,n,r,i,o){for(;r<=i;++r)h(n[r],o,t,e,!1,n,r)}function k(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)k(t.children[n])}function E(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(T(r),k(r)):d(r.elm))}}function T(t,e){if(i(e)||i(t.data)){var n,r=a.remove.length+1;for(i(e)?e.listeners+=r:e=f(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&T(n,e),n=0;n<a.remove.length;++n)a.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function S(t,e,n,o,a){var s,c,l,f,d=0,p=0,v=e.length-1,m=e[0],y=e[v],g=n.length-1,b=n[0],_=n[g],w=!a;while(d<=v&&p<=g)r(m)?m=e[++d]:r(y)?y=e[--v]:Ai(m,b)?(A(m,b,o,n,p),m=e[++d],b=n[++p]):Ai(y,_)?(A(y,_,o,n,g),y=e[--v],_=n[--g]):Ai(m,_)?(A(m,_,o,n,g),w&&u.insertBefore(t,m.elm,u.nextSibling(y.elm)),m=e[++d],_=n[--g]):Ai(y,b)?(A(y,b,o,n,p),w&&u.insertBefore(t,y.elm,m.elm),y=e[--v],b=n[++p]):(r(s)&&(s=Ri(e,d,v)),c=i(b.key)?s[b.key]:C(b,e,d,v),r(c)?h(b,o,t,m.elm,!1,n,p):(l=e[c],Ai(l,b)?(A(l,b,o,n,p),e[c]=void 0,w&&u.insertBefore(t,l.elm,m.elm)):h(b,o,t,m.elm,!1,n,p)),b=n[++p]);d>v?(f=r(n[g+1])?null:n[g+1].elm,I(t,f,n,p,g,o)):p>g&&E(e,d,v)}function C(t,e,n,r){for(var o=n;o<r;o++){var a=e[o];if(i(a)&&Ai(t,a))return o}}function A(t,e,n,s,c,l){if(t!==e){i(e.elm)&&i(s)&&(e=s[c]=It(e));var f=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?P(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,h=e.data;i(h)&&i(d=h.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,v=e.children;if(i(h)&&_(e)){for(d=0;d<a.update.length;++d)a.update[d](t,e);i(d=h.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(v)?p!==v&&S(f,p,v,n,l):i(v)?(i(t.text)&&u.setTextContent(f,""),I(f,null,v,0,v.length-1,n)):i(p)?E(p,0,p.length-1):i(t.text)&&u.setTextContent(f,""):t.text!==e.text&&u.setTextContent(f,e.text),i(h)&&i(d=h.hook)&&i(d=d.postpatch)&&d(t,e)}}}function x(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var R=m("attrs,class,staticClass,staticStyle,key");function P(t,e,n,r){var a,s=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(a=c.hook)&&i(a=a.init)&&a(e,!0),i(a=e.componentInstance)))return v(e,n),!0;if(i(s)){if(i(u))if(t.hasChildNodes())if(i(a=c)&&i(a=a.domProps)&&i(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var l=!0,f=t.firstChild,d=0;d<u.length;d++){if(!f||!P(f,u[d],n,r)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else b(e,u,n);if(i(c)){var h=!1;for(var p in c)if(!R(p)){h=!0,w(e,n);break}!h&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s){if(!r(e)){var c=!1,f=[];if(r(t))c=!0,h(e,f);else{var d=i(t.nodeType);if(!d&&Ai(t,e))A(t,e,f,null,null,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(U)&&(t.removeAttribute(U),n=!0),o(n)&&P(t,e,f))return x(e,f,!0),t;t=l(t)}var p=t.elm,v=u.parentNode(p);if(h(e,f,p._leaveCb?null:v,u.nextSibling(p)),i(e.parent)){var m=e.parent,y=_(e);while(m){for(var g=0;g<a.destroy.length;++g)a.destroy[g](m);if(m.elm=e.elm,y){for(var b=0;b<a.create.length;++b)a.create[b](Si,m);var w=m.data.hook.insert;if(w.merged)for(var O=1;O<w.fns.length;O++)w.fns[O]()}else Ti(m);m=m.parent}}i(v)?E([t],0,0):i(t.tag)&&k(t)}}return x(e,f,c),e.elm}i(t)&&k(t)}}var Ni={create:ji,update:ji,destroy:function(t){ji(t,Si)}};function ji(t,e){(t.data.directives||e.data.directives)&&Li(t,e)}function Li(t,e){var n,r,i,o=t===Si,a=e===Si,s=Mi(t.data.directives,t.context),c=Mi(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Ui(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",e,t)};o?Oe(e,"insert",f):f()}if(l.length&&Oe(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Ui(l[n],"componentUpdated",e,t)})),!o)for(n in s)c[n]||Ui(s[n],"unbind",t,t,a)}var $i=Object.create(null);function Mi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=$i),i[Di(r)]=r,r.def=Jt(e.$options,"directives",r.name,!0);return i}function Di(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Ui(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(ka){ne(ka,n.context,"directive "+t.name+" "+e+" hook")}}var Fi=[Ei,Ni];function Vi(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var o,a,s,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(o in i(l.__ob__)&&(l=e.data.attrs=R({},l)),l)a=l[o],s=u[o],s!==a&&zi(c,o,a,e.data.pre);for(o in(tt||nt)&&l.value!==u.value&&zi(c,"value",l.value),u)r(l[o])&&(qr(o)?c.removeAttributeNS(Gr,Kr(o)):zr(o)||c.removeAttribute(o))}}function zi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Hi(t,e,n):Wr(e)?Jr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):zr(e)?t.setAttribute(e,Br(e,n)):qr(e)?Jr(n)?t.removeAttributeNS(Gr,Kr(e)):t.setAttributeNS(Gr,e,n):Hi(t,e,n)}function Hi(t,e,n){if(Jr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Bi={create:Vi,update:Vi};function Wi(t,e){var n=e.elm,o=e.data,a=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(a)||r(a.staticClass)&&r(a.class)))){var s=Xr(e),c=n._transitionClasses;i(c)&&(s=Qr(s,ti(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var Gi,qi={create:Wi,update:Wi},Ki="__r",Ji="__c";function Xi(t){if(i(t[Ki])){var e=tt?"change":"input";t[e]=[].concat(t[Ki],t[e]||[]),delete t[Ki]}i(t[Ji])&&(t.change=[].concat(t[Ji],t.change||[]),delete t[Ji])}function Yi(t,e,n){var r=Gi;return function i(){var o=e.apply(null,arguments);null!==o&&to(t,i,n,r)}}var Zi=se&&!(it&&Number(it[1])<=53);function Qi(t,e,n,r){if(Zi){var i=Kn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Gi.addEventListener(t,e,at?{capture:n,passive:r}:n)}function to(t,e,n,r){(r||Gi).removeEventListener(t,e._wrapper||e,n)}function eo(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Gi=e.elm,Xi(n),we(n,i,Qi,to,Yi,e.context),Gi=void 0}}var no,ro={create:eo,update:eo};function io(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,a=e.elm,s=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=R({},c)),s)n in c||(a[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=o;var u=r(o)?"":String(o);oo(a,u)&&(a.value=u)}else if("innerHTML"===n&&oi(a.tagName)&&r(a.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var l=no.firstChild;while(a.firstChild)a.removeChild(a.firstChild);while(l.firstChild)a.appendChild(l.firstChild)}else if(o!==s[n])try{a[n]=o}catch(ka){}}}}function oo(t,e){return!t.composing&&("OPTION"===t.tagName||ao(t,e)||so(t,e))}function ao(t,e){var n=!0;try{n=document.activeElement!==t}catch(ka){}return n&&t.value!==e}function so(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return v(n)!==v(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var co={create:io,update:io},uo=w((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function lo(t){var e=fo(t.style);return t.staticStyle?R(t.staticStyle,e):e}function fo(t){return Array.isArray(t)?P(t):"string"===typeof t?uo(t):t}function ho(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=lo(i.data))&&R(r,n)}(n=lo(t.data))&&R(r,n);var o=t;while(o=o.parent)o.data&&(n=lo(o.data))&&R(r,n);return r}var po,vo=/^--/,mo=/\s*!important$/,yo=function(t,e,n){if(vo.test(e))t.style.setProperty(e,n);else if(mo.test(n))t.style.setProperty(T(e),n.replace(mo,""),"important");else{var r=bo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},go=["Webkit","Moz","ms"],bo=w((function(t){if(po=po||document.createElement("div").style,t=I(t),"filter"!==t&&t in po)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<go.length;n++){var r=go[n]+e;if(r in po)return r}}));function _o(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var a,s,c=e.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,d=fo(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?R({},d):d;var h=ho(e,!0);for(s in f)r(h[s])&&yo(c,s,"");for(s in h)a=h[s],a!==f[s]&&yo(c,s,null==a?"":a)}}var wo={create:_o,update:_o},Oo=/\s+/;function Io(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Oo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ko(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Oo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Eo(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&R(e,To(t.name||"v")),R(e,t),e}return"string"===typeof t?To(t):void 0}}var To=w((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),So=X&&!et,Co="transition",Ao="animation",xo="transition",Ro="transitionend",Po="animation",No="animationend";So&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(xo="WebkitTransition",Ro="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Po="WebkitAnimation",No="webkitAnimationEnd"));var jo=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Lo(t){jo((function(){jo(t)}))}function $o(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Io(t,e))}function Mo(t,e){t._transitionClasses&&g(t._transitionClasses,e),ko(t,e)}function Do(t,e,n){var r=Fo(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Co?Ro:No,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout((function(){c<a&&u()}),o+1),t.addEventListener(s,l)}var Uo=/\b(transform|all)(,|$)/;function Fo(t,e){var n,r=window.getComputedStyle(t),i=(r[xo+"Delay"]||"").split(", "),o=(r[xo+"Duration"]||"").split(", "),a=Vo(i,o),s=(r[Po+"Delay"]||"").split(", "),c=(r[Po+"Duration"]||"").split(", "),u=Vo(s,c),l=0,f=0;e===Co?a>0&&(n=Co,l=a,f=o.length):e===Ao?u>0&&(n=Ao,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?Co:Ao:null,f=n?n===Co?o.length:c.length:0);var d=n===Co&&Uo.test(r[xo+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:d}}function Vo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return zo(e)+zo(t[n])})))}function zo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Ho(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=Eo(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var a=o.css,s=o.type,u=o.enterClass,l=o.enterToClass,f=o.enterActiveClass,d=o.appearClass,h=o.appearToClass,p=o.appearActiveClass,m=o.beforeEnter,y=o.enter,g=o.afterEnter,b=o.enterCancelled,_=o.beforeAppear,w=o.appear,O=o.afterAppear,I=o.appearCancelled,k=o.duration,E=Rn,T=Rn.$vnode;while(T&&T.parent)E=T.context,T=T.parent;var S=!E._isMounted||!t.isRootInsert;if(!S||w||""===w){var C=S&&d?d:u,A=S&&p?p:f,x=S&&h?h:l,R=S&&_||m,P=S&&"function"===typeof w?w:y,N=S&&O||g,j=S&&I||b,L=v(c(k)?k.enter:k);0;var $=!1!==a&&!et,M=Go(P),U=n._enterCb=D((function(){$&&(Mo(n,x),Mo(n,A)),U.cancelled?($&&Mo(n,C),j&&j(n)):N&&N(n),n._enterCb=null}));t.data.show||Oe(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),P&&P(n,U)})),R&&R(n),$&&($o(n,C),$o(n,A),Lo((function(){Mo(n,C),U.cancelled||($o(n,x),M||(Wo(L)?setTimeout(U,L):Do(n,s,U)))}))),t.data.show&&(e&&e(),P&&P(n,U)),$||M||U()}}}function Bo(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=Eo(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var a=o.css,s=o.type,u=o.leaveClass,l=o.leaveToClass,f=o.leaveActiveClass,d=o.beforeLeave,h=o.leave,p=o.afterLeave,m=o.leaveCancelled,y=o.delayLeave,g=o.duration,b=!1!==a&&!et,_=Go(h),w=v(c(g)?g.leave:g);0;var O=n._leaveCb=D((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Mo(n,l),Mo(n,f)),O.cancelled?(b&&Mo(n,u),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));y?y(I):I()}function I(){O.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&($o(n,u),$o(n,f),Lo((function(){Mo(n,u),O.cancelled||($o(n,l),_||(Wo(w)?setTimeout(O,w):Do(n,s,O)))}))),h&&h(n,O),b||_||O())}}function Wo(t){return"number"===typeof t&&!isNaN(t)}function Go(t){if(r(t))return!1;var e=t.fns;return i(e)?Go(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function qo(t,e){!0!==e.data.show&&Ho(e)}var Ko=X?{create:qo,activate:qo,remove:function(t,e){!0!==t.data.show?Bo(t,e):e()}}:{},Jo=[Bi,qi,ro,co,wo,Ko],Xo=Jo.concat(Fi),Yo=Pi({nodeOps:ki,modules:Xo});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&oa(t,"input")}));var Zo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Oe(n,"postpatch",(function(){Zo.componentUpdated(t,e,n)})):Qo(t,e,n.context),t._vOptions=[].map.call(t.options,na)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ra),t.addEventListener("compositionend",ia),t.addEventListener("change",ia),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Qo(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,na);if(i.some((function(t,e){return!$(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return ea(t,i)})):e.value!==e.oldValue&&ea(e.value,i);o&&oa(t,"change")}}}};function Qo(t,e,n){ta(t,e,n),(tt||nt)&&setTimeout((function(){ta(t,e,n)}),0)}function ta(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],i)o=M(r,na(a))>-1,a.selected!==o&&(a.selected=o);else if($(na(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function ea(t,e){return e.every((function(e){return!$(e,t)}))}function na(t){return"_value"in t?t._value:t.value}function ra(t){t.target.composing=!0}function ia(t){t.target.composing&&(t.target.composing=!1,oa(t.target,"input"))}function oa(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function aa(t){return!t.componentInstance||t.data&&t.data.transition?t:aa(t.componentInstance._vnode)}var sa={bind:function(t,e,n){var r=e.value;n=aa(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Ho(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=aa(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Ho(n,(function(){t.style.display=t.__vOriginalDisplay})):Bo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},ca={model:Zo,show:sa},ua={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function la(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?la(kn(e.children)):t}function fa(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[I(o)]=i[o];return e}function da(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function ha(t){while(t=t.parent)if(t.data.transition)return!0}function pa(t,e){return e.key===t.key&&e.tag===t.tag}var va=function(t){return t.tag||je(t)},ma=function(t){return"show"===t.name},ya={name:"transition",props:ua,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(va),n.length)){0;var r=this.mode;0;var i=n[0];if(ha(this.$vnode))return i;var o=la(i);if(!o)return i;if(this._leaving)return da(t,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=fa(this),u=this._vnode,l=la(u);if(o.data.directives&&o.data.directives.some(ma)&&(o.data.show=!0),l&&l.data&&!pa(o,l)&&!je(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=R({},c);if("out-in"===r)return this._leaving=!0,Oe(f,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),da(t,i);if("in-out"===r){if(je(o))return u;var d,h=function(){d()};Oe(c,"afterEnter",h),Oe(c,"enterCancelled",h),Oe(f,"delayLeave",(function(t){d=t}))}}return i}}},ga=R({tag:String,moveClass:String},ua);delete ga.mode;var ba={props:ga,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Pn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=fa(this),s=0;s<i.length;s++){var c=i[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(_a),t.forEach(wa),t.forEach(Oa),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;$o(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ro,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ro,t),n._moveCb=null,Mo(n,e))})}})))},methods:{hasMove:function(t,e){if(!So)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){ko(n,t)})),Io(n,e),n.style.display="none",this.$el.appendChild(n);var r=Fo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function _a(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function wa(t){t.data.newPos=t.elm.getBoundingClientRect()}function Oa(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Ia={Transition:ya,TransitionGroup:ba};kr.config.mustUseProp=Vr,kr.config.isReservedTag=ai,kr.config.isReservedAttr=Ur,kr.config.getTagNamespace=si,kr.config.isUnknownElement=ui,R(kr.options.directives,ca),R(kr.options.components,Ia),kr.prototype.__patch__=X?Yo:N,kr.prototype.$mount=function(t,e){return t=t&&X?fi(t):void 0,Ln(this,t,e)},X&&setTimeout((function(){z.devtools&&ut&&ut.emit("init",kr)}),0),e["a"]=kr}).call(this,n("c8ba"))},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(t,e,n){var r,i,o,a,s=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),f=n("1a2d"),d=n("d039"),h=n("1be4"),p=n("f36a"),v=n("cc12"),m=n("1cdc"),y=n("605d"),g=s.setImmediate,b=s.clearImmediate,_=s.process,w=s.Dispatch,O=s.Function,I=s.MessageChannel,k=s.String,E=0,T={},S="onreadystatechange";try{r=s.location}catch(P){}var C=function(t){if(f(T,t)){var e=T[t];delete T[t],e()}},A=function(t){return function(){C(t)}},x=function(t){C(t.data)},R=function(t){s.postMessage(k(t),r.protocol+"//"+r.host)};g&&b||(g=function(t){var e=p(arguments,1);return T[++E]=function(){c(l(t)?t:O(t),void 0,e)},i(E),E},b=function(t){delete T[t]},y?i=function(t){_.nextTick(A(t))}:w&&w.now?i=function(t){w.now(A(t))}:I&&!m?(o=new I,a=o.port2,o.port1.onmessage=x,i=u(a.postMessage,a)):s.addEventListener&&l(s.postMessage)&&!s.importScripts&&r&&"file:"!==r.protocol&&!d(R)?(i=R,s.addEventListener("message",x,!1)):i=S in v("script")?function(t){h.appendChild(v("script"))[S]=function(){h.removeChild(this),C(t)}}:function(t){setTimeout(A(t),0)}),t.exports={set:g,clear:b}},"2d00":function(t,e,n){var r,i,o=n("da84"),a=n("342f"),s=o.process,c=o.Deno,u=s&&s.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function n(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},i=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function s(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=s(t[n],e)})),r}function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},h={namespaced:{configurable:!0}};h.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){c(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,h);var p=function(t){this.register([],t,!1)};function v(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;v(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},p.prototype.update=function(t){v([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&c(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},p.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var m;var y=function(t){var e=this;void 0===t&&(t={}),!m&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new m,this._makeLocalGettersCache=Object.create(null);var i=this,a=this,s=a.dispatch,c=a.commit;this.dispatch=function(t,e){return s.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;O(this,u,[],this._modules.root),w(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:m.config.devtools;l&&o(this)},g={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;O(t,n,[],t._modules.root,!0),w(t,n,e)}function w(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};c(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var a=m.config.silent;m.config.silent=!0,t._vm=new m({data:{$$state:e},computed:o}),m.config.silent=a,t.strict&&C(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),m.nextTick((function(){return r.$destroy()})))}function O(t,e,n,r,i){var o=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=r),!o&&!i){var s=A(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){m.set(s,c,r.state)}))}var u=r.context=I(t,a,n);r.forEachMutation((function(e,n){var r=a+n;E(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:a+n,i=e.handler||e;T(t,r,i,u)})),r.forEachGetter((function(e,n){var r=a+n;S(t,r,e,u)})),r.forEachChild((function(r,o){O(t,e,n.concat(o),r,i)}))}function I(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=x(n,r,i),a=o.payload,s=o.options,c=o.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,i){var o=x(n,r,i),a=o.payload,s=o.options,c=o.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return k(t,e)}},state:{get:function(){return A(t.state,n)}}}),i}function k(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function E(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function T(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return l(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function S(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function C(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function A(t,e){return e.reduce((function(t,e){return t[e]}),t)}function x(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function R(t){m&&t===m||(m=t,n(m))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=x(t,e,n),o=i.type,a=i.payload,s=(i.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(s,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=x(t,e),i=r.type,o=r.payload,a={type:i,payload:o},s=this._actions[i];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,n.state)}))}catch(u){0}var c=s.length>1?Promise.all(s.map((function(t){return t(o)}))):s[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),O(this,this.state,t,this._modules.get(t),n.preserveState),w(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=A(e.state,t.slice(0,-1));m.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,g);var P=U((function(t,e){var n={};return M(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=F(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),N=U((function(t,e){var n={};return M(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=F(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),j=U((function(t,e){var n={};return M(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||F(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),L=U((function(t,e){var n={};return M(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=F(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),$=function(t){return{mapState:P.bind(null,t),mapGetters:j.bind(null,t),mapMutations:N.bind(null,t),mapActions:L.bind(null,t)}};function M(t){return D(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function D(t){return Array.isArray(t)||u(t)}function U(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function F(t,e,n){var r=t._modulesNamespaceMap[n];return r}function V(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var a=t.actionTransformer;void 0===a&&(a=function(t){return t});var c=t.logMutations;void 0===c&&(c=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var f=s(t.state);"undefined"!==typeof l&&(c&&t.subscribe((function(t,o){var a=s(o);if(n(t,f,a)){var c=B(),u=i(t),d="mutation "+t.type+c;z(l,d,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(f)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(a)),H(l)}f=a})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=B(),i=a(t),s="action "+t.type+r;z(l,s,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function z(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function B(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function G(t,e){return W("0",e-t.toString().length)+t}var q={Store:y,install:R,version:"3.6.2",mapState:P,mapMutations:N,mapGetters:j,mapActions:L,createNamespacedHelpers:$,createLogger:V};e["a"]=q}).call(this,n("c8ba"))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),a=n("b622"),s=a("iterator");t.exports=function(t){if(void 0!=t)return i(t,s)||i(t,"@@iterator")||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),a=n("fc6a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=a(e),c=s(e),u=c.length,l=0;while(u>l)i.f(t,n=c[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),o=r.String,a=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw a("Can't set "+o(t)+" as a prototype")}},"3f8c":function(t,e){t.exports={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),o=n("d039"),a=n("c6b6"),s=r.Object,c=i("".split);t.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?c(t,""):s(t)}:s},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),a=r("unscopables"),s=Array.prototype;void 0==s[a]&&o.f(s,a,{configurable:!0,value:i(null)}),t.exports=function(t){s[a][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),a=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[a])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("1626"),a=n("861d"),s=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!a(r=i(n,t)))return r;if(o(n=t.valueOf)&&!a(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!a(r=i(n,t)))return r;throw s("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),a=function(t){return function(e,n,a){var s,c=r(e),u=o(c),l=i(a,u);if(t&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5319:function(t,e,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),a=n("d784"),s=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),f=n("50c4"),d=n("577e"),h=n("1d80"),p=n("8aa5"),v=n("dc4a"),m=n("0cb2"),y=n("14c3"),g=n("b622"),b=g("replace"),_=Math.max,w=Math.min,O=o([].concat),I=o([].push),k=o("".indexOf),E=o("".slice),T=function(t){return void 0===t?t:String(t)},S=function(){return"$0"==="a".replace(/./,"$0")}(),C=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),A=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,n){var o=C?"$":"$0";return[function(t,n){var r=h(this),o=void 0==t?void 0:v(t,b);return o?i(o,t,r,n):i(e,d(r),t,n)},function(t,i){var a=c(this),s=d(t);if("string"==typeof i&&-1===k(i,o)&&-1===k(i,"$<")){var h=n(e,a,s,i);if(h.done)return h.value}var v=u(i);v||(i=d(i));var g=a.global;if(g){var b=a.unicode;a.lastIndex=0}var S=[];while(1){var C=y(a,s);if(null===C)break;if(I(S,C),!g)break;var A=d(C[0]);""===A&&(a.lastIndex=p(s,f(a.lastIndex),b))}for(var x="",R=0,P=0;P<S.length;P++){C=S[P];for(var N=d(C[0]),j=_(w(l(C.index),s.length),0),L=[],$=1;$<C.length;$++)I(L,T(C[$]));var M=C.groups;if(v){var D=O([N],L,j,s);void 0!==M&&I(D,M);var U=d(r(i,void 0,D))}else U=m(N,s,j,L,M,i);j>=R&&(x+=E(s,R,j)+U,R=j+N.length)}return x+E(s,R)}]}),!A||!S||C)},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),o=n("241c"),a=n("7418"),s=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=a.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),o=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return G})),n.d(e,"b",(function(){return z})),n.d(e,"c",(function(){return V})),n.d(e,"d",(function(){return K})),n.d(e,"e",(function(){return q})),n.d(e,"f",(function(){return J}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(s(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function s(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.11",l=new i["b"]("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",g="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",I="@firebase/installations-compat",k="@firebase/messaging",E="@firebase/messaging-compat",T="@firebase/performance",S="@firebase/performance-compat",C="@firebase/remote-config",A="@firebase/remote-config-compat",x="@firebase/storage",R="@firebase/storage-compat",P="@firebase/firestore",N="@firebase/firestore-compat",j="firebase",L="9.6.1",$="[DEFAULT]",M={[c]:"fire-core",[f]:"fire-core-compat",[h]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[g]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[I]:"fire-iid-compat",[k]:"fire-fcm",[E]:"fire-fcm-compat",[T]:"fire-perf",[S]:"fire-perf-compat",[C]:"fire-rc",[A]:"fire-rc-compat",[x]:"fire-gcs",[R]:"fire-gcs-compat",[P]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[j]:"fire-js-all"},D=new Map,U=new Map;function F(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of D.values())F(n,t);return!0}function z(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},B=new o["b"]("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=L;function q(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:$,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw B.create("bad-app-name",{appName:String(i)});const a=D.get(i);if(a){if(Object(o["f"])(t,a.options)&&Object(o["f"])(n,a.config))return a;throw B.create("duplicate-app",{appName:i})}const s=new r["b"](i);for(const r of U.values())s.addComponent(r);const c=new W(t,n,s);return D.set(i,c),c}function K(t=$){const e=D.get(t);if(!e)throw B.create("no-app",{appName:t});return e}function J(t,e,n){var i;let o=null!==(i=M[t])&&void 0!==i?i:t;n&&(o+="-"+n);const a=o.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const t=[`Unable to register library "${o}" with version "${e}":`];return a&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}V(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){V(new r["a"]("platform-logger",t=>new a(t),"PRIVATE")),J(c,u,t),J(c,u,"esm2017"),J("fire-js","")}X("")},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("0d51"),a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=i(o,"name"),c=s&&"something"===function(){}.name,u=s&&(!r||r&&a(o,"name").configurable);t.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),a=n("d039"),s=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),f=n("44ad"),d=Object.assign,h=Object.defineProperty,p=i([].concat);t.exports=!d||a((function(){if(r&&1!==d({b:1},d(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=d({},t)[n]||s(d({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,a=1,d=c.f,h=u.f;while(i>a){var v,m=f(arguments[a++]),y=d?p(s(m),d(m)):s(m),g=y.length,b=0;while(g>b)v=y[b++],r&&!o(h,m,v)||(n[v]=m[v])}return n}:d},6547:function(t,e,n){var r=n("e330"),i=n("5926"),o=n("577e"),a=n("1d80"),s=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,f=o(a(e)),d=i(n),h=f.length;return d<0||d>=h?t?"":void 0:(r=c(f,d),r<55296||r>56319||d+1===h||(l=c(f,d+1))<56320||l>57343?t?s(f,d):r:t?u(f,d,d+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),o=n("1626"),a=n("f5df"),s=n("d066"),c=n("8925"),u=function(){},l=[],f=s("Reflect","construct"),d=/^\s*(?:class|function)\b/,h=r(d.exec),p=!d.exec(u),v=function(t){if(!o(t))return!1;try{return f(u,l,t),!0}catch(e){return!1}},m=function(t){if(!o(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!h(d,c(t))}catch(e){return!0}};m.sham=!0,t.exports=!f||i((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?m:v},"69f3":function(t,e,n){var r,i,o,a=n("7f9a"),s=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),f=n("1a2d"),d=n("c6cd"),h=n("f772"),p=n("d012"),v="Object already initialized",m=s.TypeError,y=s.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(a||d.state){var _=d.state||(d.state=new y),w=c(_.get),O=c(_.has),I=c(_.set);r=function(t,e){if(O(_,t))throw new m(v);return e.facade=t,I(_,t,e),e},i=function(t){return w(_,t)||{}},o=function(t){return O(_,t)}}else{var k=h("state");p[k]=!0,r=function(t,e){if(f(t,k))throw new m(v);return e.facade=t,l(t,k,e),e},i=function(t){return f(t,k)?t[k]:{}},o=function(t){return f(t,k)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:b}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),a=n("9112"),s=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,f=u.get,d=u.enforce,h=String(String).split("String");(t.exports=function(t,e,n,c){var u,f=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&a(n,"name",m),u=d(n),u.source||(u.source=h.join("string"==typeof m?m:""))),t!==r?(f?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:a(t,e,n)):p?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return i(this)&&f(this).source||c(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),o=r.Object;t.exports=function(t){return o(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),a=n("7839"),s=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),f=">",d="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},y=function(t){return d+p+f+t+d+"/"+p+f},g=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&r?g(r):b():g(r);var t=a.length;while(t--)delete _[h][a[t]];return _()};s[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[h]=i(t),n=new m,m[h]=null,n[v]=t):n=_(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),a=n("5e77"),s=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),f=n("d44e"),d=n("9112"),h=n("6eeb"),p=n("b622"),v=n("3f8c"),m=n("ae93"),y=a.PROPER,g=a.CONFIGURABLE,b=m.IteratorPrototype,_=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",I="values",k="entries",E=function(){return this};t.exports=function(t,e,n,a,p,m,T){c(n,e,a);var S,C,A,x=function(t){if(t===p&&L)return L;if(!_&&t in N)return N[t];switch(t){case O:return function(){return new n(this,t)};case I:return function(){return new n(this,t)};case k:return function(){return new n(this,t)}}return function(){return new n(this)}},R=e+" Iterator",P=!1,N=t.prototype,j=N[w]||N["@@iterator"]||p&&N[p],L=!_&&j||x(p),$="Array"==e&&N.entries||j;if($&&(S=u($.call(new t)),S!==Object.prototype&&S.next&&(o||u(S)===b||(l?l(S,b):s(S[w])||h(S,w,E)),f(S,R,!0,!0),o&&(v[R]=E))),y&&p==I&&j&&j.name!==I&&(!o&&g?d(N,"name",I):(P=!0,L=function(){return i(j,this)})),p)if(C={values:x(I),keys:m?L:x(O),entries:x(k)},T)for(A in C)(_||P||!(A in N))&&h(N,A,C[A]);else r({target:e,proto:!0,forced:_||P},C);return o&&!T||N[w]===L||h(N,w,L,{name:p}),v[e]=L,C}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),a=r.WeakMap;t.exports=i(a)&&/native code/.test(o(a))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),o=r.String,a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),a=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return a(t)}),t.exports=o.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,s=function(t){return encodeURIComponent(t).replace(i,o).replace(a,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||f;try{r=i(t||"")}catch(s){r={}}for(var o in e){var a=e[o];r[o]=Array.isArray(a)?a.map(l):l(a)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function f(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return s(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(s(e)):r.push(s(e)+"="+s(t)))})),r.join("&")}return s(e)+"="+s(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var h=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=v(o)}catch(s){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:g(e,i),matched:t?y(t):[]};return n&&(a.redirectedFrom=g(n,i)),Object.freeze(a)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=v(t[n]);return e}return t}var m=p(null,{path:"/"});function y(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function g(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||d;return(n||"/")+o(r)+i}function b(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(h,"")===e.path.replace(h,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],a=r[i];if(a!==n)return!1;var s=e[n];return null==o||null==s?o===s:"object"===typeof o&&"object"===typeof s?_(o,s):String(o)===String(s)}))}function w(t,e){return 0===t.path.replace(h,"/").indexOf(e.path.replace(h,"/"))&&(!e.hash||t.hash===e.hash)&&O(t.query,e.query)}function O(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var a=0;a<o.length;a++)i._isBeingDestroyed||o[a](i)}}}}var k={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,a=e.data;a.routerView=!0;var s=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),f=0,d=!1;while(o&&o._routerRoot!==o){var h=o.$vnode?o.$vnode.data:{};h.routerView&&f++,h.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(a.routerViewDepth=f,d){var p=l[c],v=p&&p.component;return v?(p.configProps&&E(v,a,p.route,p.configProps),s(v,a,i)):s()}var m=u.matched[f],y=m&&m.components[c];if(!m||!y)return l[c]=null,s();l[c]={component:y},a.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),I(u)};var g=m.props&&m.props[c];return g&&(r(l[c],{route:u,configProps:g}),E(y,a,u,g)),s(y,a,i)}};function E(t,e,n,i){var o=e.props=T(n,i);if(o){o=e.props=r({},o);var a=e.attrs=e.attrs||{};for(var s in o)t.props&&s in t.props||(a[s]=o[s],delete o[s])}}function T(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function S(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];".."===s?i.pop():"."!==s&&i.push(s)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function A(t){return t.replace(/\/+/g,"/")}var x=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=X,P=M,N=D,j=V,L=J,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){var n,r=[],i=0,o=0,a="",s=e&&e.delimiter||"/";while(null!=(n=$.exec(t))){var c=n[0],u=n[1],l=n.index;if(a+=t.slice(o,l),o=l+c.length,u)a+=u[1];else{var f=t[o],d=n[2],h=n[3],p=n[4],v=n[5],m=n[6],y=n[7];a&&(r.push(a),a="");var g=null!=d&&null!=f&&f!==d,b="+"===m||"*"===m,_="?"===m||"*"===m,w=n[2]||s,O=p||v;r.push({name:h||i++,prefix:d||"",delimiter:w,optional:_,repeat:b,partial:g,asterisk:!!y,pattern:O?H(O):y?".*":"[^"+z(w)+"]+?"})}}return o<t.length&&(a+=t.substr(o)),a&&r.push(a),r}function D(t,e){return V(M(t,e),e)}function U(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",W(e)));return function(e,r){for(var i="",o=e||{},a=r||{},s=a.pretty?U:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,f=o[u.name];if(null==f){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(l=s(f[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(f):s(f),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function B(t,e){return t.keys=e,t}function W(t){return t&&t.sensitive?"":"i"}function G(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return B(t,e)}function q(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",W(n));return B(o,e)}function K(t,e,n){return J(M(t,n),e,n)}function J(t,e,n){x(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",a=0;a<t.length;a++){var s=t[a];if("string"===typeof s)o+=z(s);else{var c=z(s.prefix),u="(?:"+s.pattern+")";e.push(s),s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=z(n.delimiter||"/"),f=o.slice(-l.length)===l;return r||(o=(f?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&f?"":"(?="+l+"|$)",B(new RegExp("^"+o,W(n)),e)}function X(t,e,n){return x(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?G(t,e):x(t)?q(t,e,n):K(t,e,n)}R.parse=P,R.compile=N,R.tokensToFunction=j,R.tokensToRegExp=L;var Y=Object.create(null);function Z(t,e,n){e=e||{};try{var r=Y[t]||(Y[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Q(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var a=o.params;return a&&"object"===typeof a&&(o.params=r({},a)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var s=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=s;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=Z(c,s,"path "+e.path)}else 0;return o}var l=C(o.path||""),f=e&&e.path||"/",d=l.path?S(l.path,f,n||o.append):f,h=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:h,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),a=o.location,s=o.route,c=o.href,u={},l=n.options.linkActiveClass,f=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,h=null==f?"router-link-exact-active":f,v=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?h:this.exactActiveClass,y=s.redirectedFrom?p(null,Q(s.redirectedFrom),null,n):s;u[m]=b(i,y,this.exactPath),u[v]=this.exact||this.exactPath?u[m]:w(i,y);var g=u[m]?this.ariaCurrentValue:null,_=function(t){ot(t)&&(e.replace?n.replace(a,rt):n.push(a,rt))},O={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){O[t]=_})):O[this.event]=_;var I={class:u},k=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:_,isActive:u[v],isExactActive:u[m]});if(k){if(1===k.length)return k[0];if(k.length>1||!k.length)return 0===k.length?t():t("span",{},k)}if("a"===this.tag)I.on=O,I.attrs={href:c,"aria-current":g};else{var E=at(this.$slots.default);if(E){E.isStatic=!1;var T=E.data=r({},E.data);for(var S in T.on=T.on||{},T.on){var C=T.on[S];S in O&&(T.on[S]=Array.isArray(C)?C:[C])}for(var A in O)A in T.on?T.on[A].push(O[A]):T.on[A]=_;var x=E.data.attrs=r({},E.data.attrs);x.href=c,x["aria-current"]=g}else I.on=O}return t(this.tag,I,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function st(t){if(!st.installed||tt!==t){st.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",k),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],a=n||Object.create(null),s=r||Object.create(null);t.forEach((function(t){lt(o,a,s,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:a,nameMap:s}}function lt(t,e,n,r,i,o){var a=r.path,s=r.name;var c=r.pathToRegexpOptions||{},u=dt(a,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ft(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:s,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?A(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var f=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<f.length;++d){var h=f[d];0;var p={path:h,children:r.children};lt(t,e,n,p,i,l.path||"/")}s&&(n[s]||(n[s]=l))}function ft(t,e){var n=R(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:A(e.path+"/"+t)}function ht(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function a(t){ut(t,r,i,o)}function s(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,a){var s=Q(t,n,!1,e),c=s.name;if(c){var u=o[c];if(!u)return d(null,s);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var f in n.params)!(f in s.params)&&l.indexOf(f)>-1&&(s.params[f]=n.params[f]);return s.path=Z(u.path,s.params,'named route "'+c+'"'),d(u,s,a)}if(s.path){s.params={};for(var h=0;h<r.length;h++){var p=r[h],v=i[p];if(pt(v.regex,s.path,s.params))return d(v,s,a)}}return d(null,s)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var a=i,s=a.name,c=a.path,l=n.query,f=n.hash,h=n.params;if(l=a.hasOwnProperty("query")?a.query:l,f=a.hasOwnProperty("hash")?a.hash:f,h=a.hasOwnProperty("params")?a.params:h,s){o[s];return u({_normalized:!0,name:s,query:l,hash:f,params:h},void 0,n)}if(c){var v=vt(c,t),m=Z(v,h,'redirect route with path "'+v+'"');return u({_normalized:!0,path:m,query:l,hash:f},void 0,n)}return d(null,n)}function f(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,a=o[o.length-1];return e.params=i.params,d(a,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?f(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:s,getRoutes:c,addRoutes:a}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var a=t.keys[i-1];a&&(n[a.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function vt(t,e){return S(t,e.parent?e.parent.path:"/",!0)}var mt=ct&&window.performance&&window.performance.now?window.performance:Date;function yt(){return mt.now().toFixed(3)}var gt=yt();function bt(){return gt}function _t(t){return gt=t}var wt=Object.create(null);function Ot(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Et),function(){window.removeEventListener("popstate",Et)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Tt(),a=i.call(t,e,n,r?o:null);a&&("function"===typeof a.then?a.then((function(t){Nt(t,o)})).catch((function(t){0})):Nt(a,o))}))}}function kt(){var t=bt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Et(t){kt(),t.state&&t.state.key&&_t(t.state.key)}function Tt(){var t=bt();if(t)return wt[t]}function St(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ct(t){return Rt(t.x)||Rt(t.y)}function At(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function xt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Pt=/^#\d/;function Nt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=xt(i),e=St(r,i)}else Ct(t)&&(e=At(t))}else n&&Ct(t)&&(e=At(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var jt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){kt();var n=window.history;try{if(e){var i=r({},n.state);i.key=bt(),n.replaceState(i,"",t)}else n.pushState({key:_t(yt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function $t(t){Lt(t,!0)}function Mt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Dt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ut(t,e){return Ht(t,e,Dt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Wt(e)+'" via a navigation guard.')}function Ft(t,e){var n=Ht(t,e,Dt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return Ht(t,e,Dt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function zt(t,e){return Ht(t,e,Dt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ht(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Bt=["params","query","hash"];function Wt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Bt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Gt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function qt(t,e){return Gt(t)&&t._isRouter&&(null==e||t.type===e)}function Kt(t){return function(e,n,r){var i=!1,o=0,a=null;Jt(t,(function(t,e,n,s){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Qt((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[s]=e,o--,o<=0&&r()})),l=Qt((function(t){var e="Failed to resolve async component "+s+": "+t;a||(a=Gt(t)?t:new Error(e),r(a))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var f=c.component;f&&"function"===typeof f.then&&f.then(u,l)}}})),i||r()}}function Jt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Qt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Jt(t,(function(t,r,i,o){var a=ie(t,e);if(a)return Array.isArray(a)?a.map((function(t){return n(t,r,i,o)})):n(a,r,i,o)}));return Xt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",se,!0)}function ae(t){return re(t,"beforeRouteUpdate",se)}function se(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(a){throw this.errorCbs.forEach((function(t){t(a)})),a}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(qt(t,Dt.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!qt(t)&&Gt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},a=t.matched.length-1,s=i.matched.length-1;if(b(t,i)&&a===s&&t.matched[a]===i.matched[s])return this.ensureURL(),t.hash&&It(this.router,i,t,!1),o(Ft(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,f=c.activated,d=[].concat(oe(l),this.router.beforeHooks,ae(u),f.map((function(t){return t.beforeEnter})),Kt(f)),h=function(e,n){if(r.pending!==t)return o(Vt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(zt(i,t))):Gt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Ut(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(a){o(a)}};Mt(d,h,(function(){var n=ce(f),a=n.concat(r.router.resolveHooks);Mt(a,h,(function(){if(r.pending!==t)return o(Vt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){I(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=fe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=jt&&n;r&&this.listeners.push(Ot());var i=function(){var n=t.current,i=fe(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Lt(A(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){$t(A(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(fe(this.base)!==this.current.fullPath){var e=A(this.base+this.current.fullPath);t?Lt(e):$t(e)}},e.prototype.getCurrentLocation=function(){return fe(this.base)},e}(te);function fe(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(A(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&he(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=jt&&n;r&&this.listeners.push(Ot());var i=function(){var e=t.current;pe()&&t.transitionTo(ve(),(function(n){r&&It(t.router,n,e,!0),jt||ge(n.fullPath)}))},o=jt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ge(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ve()!==e&&(t?ye(e):ge(e))},e.prototype.getCurrentLocation=function(){return ve()},e}(te);function he(t){var e=fe(t);if(!/^\/#/.test(e))return window.location.replace(A(t+"/#"+e)),!0}function pe(){var t=ve();return"/"===t.charAt(0)||(ge("/"+t),!1)}function ve(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ye(t){jt?Lt(me(t)):window.location.hash=t}function ge(t){jt?$t(me(t)):window.location.replace(me(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){qt(t,Dt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ht(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!jt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function Oe(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?A(t+"/"+r):r}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=jt&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Oe(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Oe(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Oe(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Q(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,a=this.history.base,s=Ie(a,o,this.mode);return{location:r,route:i,href:s,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,we),_e.install=st,_e.version="3.5.3",_e.isNavigationFailure=qt,_e.NavigationFailureType=Dt,_e.START_LOCATION=m,ct&&window.Vue&&window.Vue.use(_e),e["a"]=_e},"90e3":function(t,e,n){var r=n("e330"),i=0,o=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++i+o,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),a=n("ad6d"),s=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,f=n("fce3"),d=n("107c"),h=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,m=i("".charAt),y=i("".indexOf),g=i("".replace),b=i("".slice),_=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=s.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],I=_||O||w||f||d;I&&(v=function(t){var e,n,i,s,c,f,d,I=this,k=l(I),E=o(t),T=k.raw;if(T)return T.lastIndex=I.lastIndex,e=r(v,T,E),I.lastIndex=T.lastIndex,e;var S=k.groups,C=w&&I.sticky,A=r(a,I),x=I.source,R=0,P=E;if(C&&(A=g(A,"y",""),-1===y(A,"g")&&(A+="g"),P=b(E,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==m(E,I.lastIndex-1))&&(x="(?: "+x+")",P=" "+P,R++),n=new RegExp("^(?:"+x+")",A)),O&&(n=new RegExp("^"+x+"$(?!\\s)",A)),_&&(i=I.lastIndex),s=r(p,C?n:I,P),C?s?(s.input=b(s.input,R),s[0]=b(s[0],R),s.index=I.lastIndex,I.lastIndex+=s[0].length):I.lastIndex=0:_&&s&&(I.lastIndex=I.global?s.index+s[0].length:i),O&&s&&s.length>1&&r(h,s[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s&&S)for(s.groups=f=u(null),c=0;c<S.length;c++)d=S[c],f[d[0]]=s[d[1]];return s}),t.exports=v},9483:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var o=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return a(o,t)}))):(s(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return a(o,t)})))}))}function a(t,e){navigator.onLine||t("offline"),t("error",e)}function s(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return a(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):s(t,e,n)})).catch((function(t){return a(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return a(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,a=function(t,e){var n=c[s(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},s=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new A(r||[]);return o._invoke=E(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function y(){}function g(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,o)&&(b=w);var O=g.prototype=m.prototype=Object.create(b);function I(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function x(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return y.prototype=g,c(O,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},I(k.prototype),c(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new k(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},I(O),c(O,s,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),a=n("825a"),s=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(o(n))return a(i(n,t));throw u(s(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),a=n("825a"),s=n("a04b"),c=r.TypeError,u=Object.defineProperty;e.f=i?u:function(t,e,n){if(a(t),e=s(e),a(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),a=n("d44e"),s=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:o(+!u,n)}),a(t,l,!1,!0),s[l]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp,a=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),s=a||r((function(){return!o("a","y").sticky})),c=a||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:s,UNSUPPORTED_Y:a}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),a=n("d039"),s=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),f=n("6eeb"),d=!!o&&a((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(t){var e=u(this,s("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var h=s("Promise").prototype["finally"];o.prototype["finally"]!==h&&f(o.prototype,"finally",h,{unsafe:!0})}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae93:function(t,e,n){"use strict";var r,i,o,a=n("d039"),s=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),f=n("b622"),d=n("c430"),h=f("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var v=void 0==r||a((function(){var t={};return r[h].call(t)!==t}));v?r={}:d&&(r=c(r)),s(r[h])||l(r,h,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),a=n("9bf2").f,s=Function.prototype,c=o(s.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),f="name";r&&!i&&a(s,f,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,a,s,c,u,l,f=n("da84"),d=n("0366"),h=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),m=n("d4c3"),y=n("a4b4"),g=n("605d"),b=f.MutationObserver||f.WebKitMutationObserver,_=f.document,w=f.process,O=f.Promise,I=h(f,"queueMicrotask"),k=I&&I.value;k||(r=function(){var t,e;g&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?a():o=void 0,n}}o=void 0,t&&t.enter()},v||g||y||!b||!_?!m&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=d(u.then,u),a=function(){l(r)}):g?a=function(){w.nextTick(r)}:(p=d(p,f),a=function(){p(r)}):(s=!0,c=_.createTextNode(""),new b(r).observe(c,{characterData:!0}),a=function(){c.data=s=!s})),t.exports=k||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,a()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),a=n("90e3"),s=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,f=l&&l["for"],d=c?l:l&&l.withoutSetter||a;t.exports=function(t){if(!o(u,t)||!s&&"string"!=typeof u[t]){var e="Symbol."+t;s&&o(l,t)?u[t]=l[t]:u[t]=c&&f?f(e):d(e)}return u[t]}},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),o=n("861d"),a=n("d9b5"),s=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!o(t)||a(t))return t;var n,r=s(t,f);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||a(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",a=r[o]||i(o,{});t.exports=a},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),a=n("4d64").indexOf,s=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(s,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~a(l,n)||c(l,n));return l}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),a=n.resolve;return a(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),a=o("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,a)&&r(t,a,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),o=n("9263"),a=n("d039"),s=n("b622"),c=n("9112"),u=s("species"),l=RegExp.prototype;t.exports=function(t,e,n,f){var d=s(t),h=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=h&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!p||n){var v=r(/./[d]),m=e(d,""[t],(function(t,e,n,i,a){var s=r(t),c=e.exec;return c===o||c===l.exec?h&&!a?{done:!0,value:v(e,n,i)}:{done:!0,value:s(n,e,i)}:{done:!1}}));i(String.prototype,t,m[0]),i(l,d,m[1])}f&&c(l[d],"sham",!0)}},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),o=n("1626"),a=n("3a9b"),s=n("fdbf"),c=r.Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&a(e.prototype,c(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),a=n("7b0b"),s=n("f772"),c=n("e177"),u=s("IE_PROTO"),l=r.Object,f=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=a(t);if(i(e,u))return e[u];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof l?f:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),a=n("69f3"),s=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),f="Array Iterator",d=a.set,h=a.getterFor(f);t.exports=c(Array,"Array",(function(t,e){d(this,{type:f,target:r(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{s(p,"name",{value:"values"})}catch(v){}},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i);t.exports=r?function(t){return t&&o(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return f}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=s[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function f(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const a=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:a,args:o,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,o,a,s=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),f=n("c65b"),d=n("fea9"),h=n("6eeb"),p=n("e2cc"),v=n("d2bb"),m=n("d44e"),y=n("2626"),g=n("59ed"),b=n("1626"),_=n("861d"),w=n("19aa"),O=n("8925"),I=n("2266"),k=n("1c7e"),E=n("4840"),T=n("2cf4").set,S=n("b575"),C=n("cdf9"),A=n("44de"),x=n("f069"),R=n("e667"),P=n("69f3"),N=n("94ca"),j=n("b622"),L=n("6069"),$=n("605d"),M=n("2d00"),D=j("species"),U="Promise",F=P.getterFor(U),V=P.set,z=P.getterFor(U),H=d&&d.prototype,B=d,W=H,G=u.TypeError,q=u.document,K=u.process,J=x.f,X=J,Y=!!(q&&q.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),Q="unhandledrejection",tt="rejectionhandled",et=0,nt=1,rt=2,it=1,ot=2,at=!1,st=N(U,(function(){var t=O(B),e=t!==String(B);if(!e&&66===M)return!0;if(c&&!W["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new B((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[D]=r,at=n.then((function(){}))instanceof r,!at||!e&&L&&!Z})),ct=st||!k((function(t){B.all(t)["catch"]((function(){}))})),ut=function(t){var e;return!(!_(t)||!b(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;S((function(){var r=t.value,i=t.state==nt,o=0;while(n.length>o){var a,s,c,u=n[o++],l=i?u.ok:u.fail,d=u.resolve,h=u.reject,p=u.domain;try{l?(i||(t.rejection===ot&&pt(t),t.rejection=it),!0===l?a=r:(p&&p.enter(),a=l(r),p&&(p.exit(),c=!0)),a===u.promise?h(G("Promise-chain cycle")):(s=ut(a))?f(s,a,d,h):d(a)):h(r)}catch(v){p&&!c&&p.exit(),h(v)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&dt(t)}))}},ft=function(t,e,n){var r,i;Y?(r=q.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Z&&(i=u["on"+t])?i(r):t===Q&&A("Unhandled promise rejection",n)},dt=function(t){f(T,u,(function(){var e,n=t.facade,r=t.value,i=ht(t);if(i&&(e=R((function(){$?K.emit("unhandledRejection",r,n):ft(Q,n,r)})),t.rejection=$||ht(t)?ot:it,e.error))throw e.value}))},ht=function(t){return t.rejection!==it&&!t.parent},pt=function(t){f(T,u,(function(){var e=t.facade;$?K.emit("rejectionHandled",e):ft(tt,e,t.value)}))},vt=function(t,e,n){return function(r){t(e,r,n)}},mt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=rt,lt(t,!0))},yt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var r=ut(e);r?S((function(){var n={done:!1};try{f(r,e,vt(yt,n,t),vt(mt,n,t))}catch(i){mt(n,i,t)}})):(t.value=e,t.state=nt,lt(t,!1))}catch(i){mt({done:!1},i,t)}}};if(st&&(B=function(t){w(this,W),g(t),f(r,this);var e=F(this);try{t(vt(yt,e),vt(mt,e))}catch(n){mt(e,n)}},W=B.prototype,r=function(t){V(this,{type:U,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:et,value:void 0})},r.prototype=p(W,{then:function(t,e){var n=z(this),r=n.reactions,i=J(E(this,B));return i.ok=!b(t)||t,i.fail=b(e)&&e,i.domain=$?K.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=et&&lt(n,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=F(t);this.promise=t,this.resolve=vt(yt,e),this.reject=vt(mt,e)},x.f=J=function(t){return t===B||t===o?new i(t):X(t)},!c&&b(d)&&H!==Object.prototype)){a=H.then,at||(h(H,"then",(function(t,e){var n=this;return new B((function(t,e){f(a,n,t,e)})).then(t,e)}),{unsafe:!0}),h(H,"catch",W["catch"],{unsafe:!0}));try{delete H.constructor}catch(gt){}v&&v(H,W)}s({global:!0,wrap:!0,forced:st},{Promise:B}),m(B,U,!1,!0),y(U),o=l(U),s({target:U,stat:!0,forced:st},{reject:function(t){var e=J(this);return f(e.reject,void 0,t),e.promise}}),s({target:U,stat:!0,forced:c||st},{resolve:function(t){return C(c&&this===o?B:this,t)}}),s({target:U,stat:!0,forced:ct},{all:function(t){var e=this,n=J(e),r=n.resolve,i=n.reject,o=R((function(){var n=g(e.resolve),o=[],a=0,s=1;I(t,(function(t){var c=a++,u=!1;s++,f(n,e,t).then((function(t){u||(u=!0,o[c]=t,--s||r(o))}),i)})),--s||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=J(e),r=n.reject,i=R((function(){var i=g(e.resolve);I(t,(function(t){f(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),a=n("9bf2");t.exports=function(t,e,n){for(var s=i(e),c=a.f,u=o.f,l=0;l<s.length;l++){var f=s[l];r(t,f)||n&&r(n,f)||c(t,f,u(e,f))}}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||a[o]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return me})),n.d(e,"b",(function(){return H})),n.d(e,"c",(function(){return Ve})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return ae})),n.d(e,"f",(function(){return oe})),n.d(e,"g",(function(){return ie})),n.d(e,"h",(function(){return se}));var r=n("1fd5"),i=n("589b");function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var a=n("e691"),s=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),f=new a["b"]("@firebase/auth");function d(t,...e){f.logLevel<=a["a"].ERROR&&f.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function v(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r["b"]("auth","Firebase",i);return o.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw m(e,...n)}function g(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||g(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(t){b(t instanceof Function,"Expected a class definition");let e=_.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["f"])(i,null!==e&&void 0!==e?e:{}))return t;h(t,"already-initialized")}const o=n.initialize({options:e});return o}function I(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"http:"===E()||"https:"===E()}function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||Object(r["j"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["m"])()||Object(r["n"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function j(t,e,n,i,o={}){return L(t,o,async()=>{let o={},a={};i&&("GET"===e?a=i:o={body:JSON.stringify(i)});const s=Object(r["o"])(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),x.fetch()(M(t,t.config.apiHost,n,s),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function L(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new D(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,a]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw v(t,s,a);h(t,s)}}catch(o){if(o instanceof r["c"])throw o;h(t,"network-request-failed")}}async function $(t,e,n,r,i={}){const o=await j(t,e,n,r,i);return"mfaPendingCredential"in o&&h(t,"multi-factor-auth-required",{_serverResponse:o}),o}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?A(t.config,i):`${t.config.apiScheme}://${i}`}class D{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"timeout")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(t,e){return j(t,"POST","/v1/accounts:delete",e)}async function V(t,e){return j(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=Object(r["h"])(t),i=await n.getIdToken(e),o=W(i);y(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a="object"===typeof o.firebase?o.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:o,token:i,authTime:z(B(o.auth_time)),issuedAtTime:z(B(o.iat)),expirationTime:z(B(o.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function B(t){return 1e3*Number(t)}function W(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function G(t){const e=W(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&K(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function K({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await q(t,V(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?tt(o.providerUserInfo):[],s=Q(t.providerData,a),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===s||void 0===s?void 0:s.length),l=!!c&&u,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function Z(t){const e=Object(r["h"])(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Q(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function tt(t){return t.map(t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e){const n=await L(t,{},async()=>{const n=Object(r["o"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=M(t,i,"/v1/token","key="+o),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(a,{method:"POST",headers:s,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await et(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new nt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class it{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await q(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await q(this,F(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,a,s,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,f=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(a=e.tenantId)&&void 0!==a?a:void 0,v=null!==(s=e._redirectEventId)&&void 0!==s?s:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,g=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:I}=e;y(b&&I,t,"internal-error");const k=nt.fromJSON(this.name,I);y("string"===typeof b,t,"internal-error"),rt(l,t.name),rt(f,t.name),y("boolean"===typeof _,t,"internal-error"),y("boolean"===typeof w,t,"internal-error"),rt(d,t.name),rt(h,t.name),rt(p,t.name),rt(v,t.name),rt(m,t.name),rt(g,t.name);const E=new it({uid:b,auth:t,email:f,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:g});return O&&Array.isArray(O)&&(E.providerData=O.map(t=>Object.assign({},t))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(t,e,n=!1){const r=new nt;r.updateFromServerResponse(e);const i=new it({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=st(this.userKey,r.apiKey,i),this.fullPersistenceKey=st("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(w(at),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||w(at);const o=st(n,t.config.apiKey,t.name);let a=null;for(const u of e)try{const e=await u._get(o);if(e){const n=it._fromJSON(t,e);u!==i&&(a=n),i=u;break}}catch(c){}const s=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new ct(i,t,n)):new ct(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ht(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vt(e))return"Blackberry";if(mt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(pt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function lt(t=Object(r["i"])()){return/firefox\//i.test(t)}function ft(t=Object(r["i"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=Object(r["i"])()){return/crios\//i.test(t)}function ht(t=Object(r["i"])()){return/iemobile/i.test(t)}function pt(t=Object(r["i"])()){return/android/i.test(t)}function vt(t=Object(r["i"])()){return/blackberry/i.test(t)}function mt(t=Object(r["i"])()){return/webos/i.test(t)}function yt(t=Object(r["i"])()){return/iphone|ipad|ipod/i.test(t)}function gt(){return Object(r["l"])()&&10===document.documentMode}function bt(t=Object(r["i"])()){return yt(t)||pt(t)||mt(t)||vt(t)||/windows phone/i.test(t)||ht(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e=[]){let n;switch(t){case"Browser":n=ut(Object(r["i"])());break;case"Worker":n=`${ut(Object(r["i"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kt(this),this.idTokenSubscription=new kt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Y(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["h"])(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function It(t){return Object(r["h"])(t)}class kt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["e"])(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return g("not implemented")}_getIdTokenResponse(t){return g("not implemented")}_linkToIdToken(t,e){return g("not implemented")}_getReauthenticationResolver(t){return g("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return j(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(t,e){return $(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(t,e){return $(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}async function At(t,e){return $(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Et{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new xt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new xt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return St(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ct(t,{email:this._email,oobCode:this._password});default:h(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Tt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return At(t,{idToken:e,email:this._email,oobCode:this._password});default:h(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e){return $(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="http://localhost";class Nt extends Et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Nt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):h("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Nt(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Rt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Rt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Rt(t,e)}buildRequest(){const t={requestUri:Pt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["o"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e){return j(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}async function Lt(t,e){return $(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}async function $t(t,e){const n=await $(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const Mt={["USER_NOT_FOUND"]:"user-not-found"};async function Dt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,n),Mt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Et{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ut({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ut({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Lt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return $t(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Dt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Ut({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vt(t){const e=Object(r["p"])(Object(r["g"])(t))["link"],n=e?Object(r["p"])(Object(r["g"])(e))["deep_link_id"]:null,i=Object(r["p"])(Object(r["g"])(t))["deep_link_id"],o=i?Object(r["p"])(Object(r["g"])(i))["link"]:null;return o||i||n||e||t}class zt{constructor(t){var e,n,i,o,a,s;const c=Object(r["p"])(Object(r["g"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=Ft(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(a=c["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=c["tenantId"])&&void 0!==s?s:null}static parseLink(t){const e=Vt(t);try{return new zt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(t,e){return xt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=zt.parseLink(e);return y(n,"argument-error"),xt._fromEmailAndCode(t,n.code,n.tenantId)}}Ht.PROVIDER_ID="password",Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Bt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends Wt{constructor(){super("facebook.com")}static credential(t){return Nt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch(e){return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Nt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return qt.credential(e,n)}catch(r){return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com",qt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Wt{constructor(){super("github.com")}static credential(t){return Nt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com",Kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Nt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await it._fromIdTokenResponse(t,n,r),o=Yt(n),a=new Xt({user:i,providerId:o,_tokenResponse:n,operationType:e});return a}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Yt(n);return new Xt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Yt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Zt.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Zt(t,e,n,r)}}function Qt(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Zt._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e,n=!1){const r=await q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ee(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await q(t,Qt(r,i,e,t),n);y(o.idToken,r,"internal-error");const a=W(o.idToken);y(a,r,"internal-error");const{sub:s}=a;return y(t.uid===s,r,"user-mismatch"),Xt._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&h(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e,n=!1){const r="signIn",i=await Qt(t,r,e),o=await Xt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function re(t,e){return ne(It(t),e)}function ie(t,e,n){return re(Object(r["h"])(t),Ht.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n,i){return Object(r["h"])(t).onIdTokenChanged(e,n,i)}function ae(t,e,n,i){return Object(r["h"])(t).onAuthStateChanged(e,n,i)}function se(t){return Object(r["h"])(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(t,e){return j(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function ue(t,e){return j(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}new WeakMap;const le="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(le,"1"),this.storage.removeItem(le),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){const t=Object(r["i"])();return ft(t)||yt(t)}const he=1e3,pe=10;class ve extends fe{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=de()&&_t(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);gt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,pe):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},he)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ve.type="LOCAL";const me=ve;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends fe{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ye.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ge(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new be(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async t=>t(e.origin,i)),s=await ge(a);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be.receivers=[];class we{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,s)=>{const c=_e("",20);r.port1.start();const u=setTimeout(()=>{s(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(e.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(){return"undefined"!==typeof Oe()["WorkerGlobalScope"]&&"function"===typeof Oe()["importScripts"]}async function ke(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ee(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Te(){return Ie()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="firebaseLocalStorageDb",Ce=1,Ae="firebaseLocalStorage",xe="fbase_key";class Re{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Pe(t,e){return t.transaction([Ae],e?"readwrite":"readonly").objectStore(Ae)}function Ne(){const t=indexedDB.deleteDatabase(Se);return new Re(t).toPromise()}function je(){const t=indexedDB.open(Se,Ce);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ae,{keyPath:xe})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ae)?e(n):(n.close(),await Ne(),e(await je()))})})}async function Le(t,e,n){const r=Pe(t,!0).put({[xe]:e,value:n});return new Re(r).toPromise()}async function $e(t,e){const n=Pe(t,!1).get(e),r=await new Re(n).toPromise();return void 0===r?null:r.value}function Me(t,e){const n=Pe(t,!0).delete(e);return new Re(n).toPromise()}const De=800,Ue=3;class Fe{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await je()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ue)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ie()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=be._getInstance(Te()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await ke(),!this.activeServiceWorker)return;this.sender=new we(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ee()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await je();return await Le(t,le,"1"),await Me(t,le),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Le(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>$e(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Me(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Pe(t,!1).getAll();return new Re(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),De)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fe.type="LOCAL";const Ve=Fe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,e){return j(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}function He(t,e){return j(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Be("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We="recaptcha";async function Ge(t,e,n){var r;const i=await n.verify();try{let o;if(y("string"===typeof i,t,"argument-error"),y(n.type===We,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){y("enroll"===e.type,t,"internal-error");const n=await ce(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;y(n,t,"missing-multi-factor-info");const a=await ze(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await jt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(t){this.providerId=qe.PROVIDER_ID,this.auth=It(t)}verifyPhoneNumber(t,e){return Ge(this.auth,t,Object(r["h"])(e))}static credential(t,e){return Ut._fromVerification(t,e)}static credentialFromResult(t){const e=t;return qe.credentialFromTaggedObject(e)}static credentialFromError(t){return qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ut._fromTokenResponse(e,n):null}}qe.PROVIDER_ID="phone",qe.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Et{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Rt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Rt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Je(t){return ne(t.auth,new Ke(t),t.bypassAuthState)}function Xe(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),ee(n,new Ke(t),t.bypassAuthState)}async function Ye(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),te(n,new Ke(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=t;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Je;case"linkViaPopup":case"linkViaRedirect":return Ye;case"reauthViaPopup":case"reauthViaRedirect":return Xe;default:h(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new C(2e3,1e4);class tn extends Ze{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=_e();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,Qe.get())};t()}}tn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new C(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);class en{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return g("unexpected MultiFactorSessionType")}}}class nn extends en{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new nn(t)}_finalizeEnroll(t,e,n){return ue(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return He(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class rn{constructor(){}static assertion(t){return nn._fromCredential(t)}}rn.FACTOR_ID="phone";var on="@firebase/auth",an="0.19.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function un(t){Object(i["c"])(new s["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wt(t)},a=new Ot(e,r);return I(a,n),a})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new s["a"]("auth-internal",t=>{const e=It(t.getProvider("auth").getImmediate());return(t=>new sn(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(on,an,cn(t)),Object(i["f"])(on,an,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un("Browser")},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),o=n("1626"),a=n("c6b6"),s=n("b622"),c=s("toStringTag"),u=r.Object,l="Arguments"==a(function(){return arguments}()),f=function(t,e){try{return t[e]}catch(n){}};t.exports=i?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=f(e=u(t),c))?n:l?a(e):"Object"==(r=a(e))&&o(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.c3757e2b.js.map