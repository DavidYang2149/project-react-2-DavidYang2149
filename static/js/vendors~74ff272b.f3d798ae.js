(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{72:function(e,t,r){"use strict";var n=r(4),o=r(11),i=r(6),a=r(24),s=function(e){function t(r,n){var o=e.call(this,u(r),"Firebase Storage: "+n+" ("+u(r)+")")||this;return o.customData={serverResponse:null},Object.setPrototypeOf(o,t.prototype),o}return Object(o.c)(t,e),t.prototype._codeEquals=function(e){return u(e)===this.code},Object.defineProperty(t.prototype,"message",{get:function(){return this.customData.serverResponse?this.message+"\n"+this.customData.serverResponse:this.message},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e},enumerable:!1,configurable:!0}),t}(i.c);function u(e){return"storage/"+e}function c(){return new s("unknown","An unknown error occurred, please check the error payload for server response.")}function l(){return new s("canceled","User canceled the upload/download.")}function h(){return new s("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(e){return new s("invalid-argument",e)}function p(){return new s("app-deleted","The Firebase app was deleted.")}function d(e){return new s("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _(e,t){return new s("invalid-format","String does not match format '"+e+"': "+t)}function g(e){throw new s("internal-error","Internal error: "+e)}
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
 */var b={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},v=function(e,t){this.data=e,this.contentType=t||null};function m(e,t){switch(e){case b.RAW:return new v(y(t));case b.BASE64:case b.BASE64URL:return new v(w(e,t));case b.DATA_URL:return new v((r=new R(t)).base64?w(b.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw _(b.DATA_URL,"Malformed data URL.")}return y(t)}(r.rest),function(e){return new R(e).contentType}(t))}var r;throw c()}function y(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function w(e,t){switch(e){case b.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw _(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case b.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw _(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(t){throw _(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var R=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw _(b.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=(n=r,o=";base64",n.length>=o.length&&n.substring(n.length-o.length)===o),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1);var n,o;
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
 */};var k,T={STATE_CHANGED:"state_changed"},O={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function x(e){switch(e){case"running":case"pausing":case"canceling":return O.RUNNING;case"paused":return O.PAUSED;case"success":return O.SUCCESS;case"canceled":return O.CANCELED;case"error":default:return O.ERROR}}
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
 */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(k||(k={}));
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
var P=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=k.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=k.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=k.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw g("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw g("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw g("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw g("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}(),U=function(){function e(){}return e.prototype.createXhrIo=function(){return new P},e}(),S=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===r.path)return r;throw new s("invalid-default-bucket","Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t){var r=null;var n=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}for(var i="firebasestorage.googleapis.com".replace(/[.]/g,"\\."),a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/([A-Za-z0-9.\\-_]+)/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:o}],u=0;u<a.length;u++){var c=a[u],l=c.regex.exec(t);if(l){var h=l[c.indices.bucket],f=l[c.indices.path];f||(f=""),r=new e(h,f),c.postModify(r);break}}if(null==r)throw function(e){return new s("invalid-url","Invalid URL '"+e+"'.")}(t);return r},e}(),C=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();
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
 */function E(e){return"string"==typeof e||e instanceof String}function A(e){return j()&&e instanceof Blob}function j(){return"undefined"!=typeof Blob}function I(e,t,r,n){if(n<t)throw f("Invalid value for '"+e+"'. Expected "+t+" or greater.");if(n>r)throw f("Invalid value for '"+e+"'. Expected "+r+" or less.")}
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
 */function q(e){return"https://firebasestorage.googleapis.com/v0"+e}function L(e){var t=encodeURIComponent,r="?";for(var n in e){if(e.hasOwnProperty(n))r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}
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
 */var N=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr;if(r.wasSuccessCode)try{var u=e.callback_(a,a.getResponseText());void 0!==u?o(u):o()}catch(e){i(e)}else null!==a?((n=c()).serverResponse=a.getResponseText(),e.errorCallback_?i(e.errorCallback_(a,n)):i(n)):r.canceled?i(n=e.appDelete_?p():l()):i(n=new s("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new B(!1,null,!0)):this.backoffId_=
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
function(e,t,r){var n=1,i=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function h(t){i=setTimeout((function(){i=null,e(f,u())}),t)}function f(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)l.call.apply(l,Object(o.e)([null,e],t));else{var i,f=u()||a;if(f)l.call.apply(l,Object(o.e)([null,e],t));else n<64&&(n*=2),1===s?(s=2,i=0):i=1e3*(n+Math.random()),h(i)}}var p=!1;function d(e){p||(p=!0,c||(null!==i?(e||(s=2),clearTimeout(i),h(0)):e||(s=1)))}return h(0),setTimeout((function(){a=!0,d(!0)}),r),d}((function(t,r){if(r)t(!1,new B(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null;var n=(r=r).getErrorCode()===k.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new B(a,r))}else{var s=r.getErrorCode()===k.ABORT;t(!1,new B(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}),t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},e}(),B=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};
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
function z(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function M(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=z();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(j())return new Blob(e);throw new s("unsupported-environment","This browser doesn't seem to support creating Blobs")}
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
var D=function(){function e(e,t){var r=0,n="";A(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(A(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,t,r);return null===n?null:new e(n)}return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(j()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(M.apply(null,n))}var o=t.map((function(e){return E(e)?m(b.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}();
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
 */function H(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(r=t)||Array.isArray(r)?null:t}
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
 */function F(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function X(e,t){return t}var G=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||X},W=null;function V(){if(W)return W;var e=[];e.push(new G("bucket")),e.push(new G("generation")),e.push(new G("metageneration")),e.push(new G("name","fullPath",!0));var t=new G("name");t.xform=function(e,t){return function(e){return!E(e)||e.length<2?e:F(e)}(t)},e.push(t);var r=new G("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new G("timeCreated")),e.push(new G("updated")),e.push(new G("md5Hash",null,!0)),e.push(new G("cacheControl",null,!0)),e.push(new G("contentDisposition",null,!0)),e.push(new G("contentEncoding",null,!0)),e.push(new G("contentLanguage",null,!0)),e.push(new G("contentType",null,!0)),e.push(new G("metadata","customMetadata",!0)),W=e}function K(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new S(r,n);return t._makeStorageReference(o)}})}(n,e),n}function Z(e,t,r){var n=H(t);return null===n?null:K(e,n,r)}function J(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}
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
 */function $(e,t,r){var n=H(r);return null===n?null:function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r.prefixes)for(var o=0,i=r.prefixes;o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e._makeStorageReference(new S(t,a));n.prefixes.push(s)}if(r.items)for(var u=0,c=r.items;u<c.length;u++){var l=c[u];s=e._makeStorageReference(new S(t,l.name));n.items.push(s)}return n}(e,t,n)}var Y=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};
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
 */function Q(e){if(!e)throw c()}function ee(e,t){return function(r,n){var o=Z(e,n,t);return Q(null!==o),o}}function te(e,t){return function(r,n){var o=Z(e,n,t);return Q(null!==o),function(e,t){var r=H(t);if(null===r)return null;if(!E(r.downloadTokens))return null;var n=r.downloadTokens;if(0===n.length)return null;var o=encodeURIComponent;return n.split(",").map((function(t){var r=e.bucket,n=e.fullPath;return q("/b/"+o(r)+"/o/"+o(n))+L({alt:"media",token:t})}))[0]}(o,n)}}function re(e){return function(t,r){var n,o,i;return 401===t.getStatus()?n=new s("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new s("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new s("unauthorized","User does not have permission to access '"+o+"'.")):n=r,n.serverResponse=r.serverResponse,n}}function ne(e){var t=re(e);return function(r,n){var o,i=t(r,n);return 404===r.getStatus()&&(o=e.path,i=new s("object-not-found","Object '"+o+"' does not exist.")),i.serverResponse=n.serverResponse,i}}function oe(e,t,r){var n=q(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new Y(n,"GET",ee(e,r),o);return i.errorHandler=ne(t),i}function ie(e,t,r,n,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=q(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime,u=new Y(a,"GET",function(e,t){return function(r,n){var o=$(e,t,n);return Q(null!==o),o}}(e,t.bucket),s);return u.urlParams=i,u.errorHandler=re(t),u}function ae(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),n}var se=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function ue(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Q(!1)}return Q(!!r&&-1!==(t||["active"]).indexOf(r)),r}function ce(e,t,r,n,o,i,a,u){var c=new se(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=n.size()),n.size()!==c.total)throw new s("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var l=c.total-c.current,f=l;o>0&&(f=Math.min(f,o));var p=c.current,d=p+f,_={"X-Goog-Upload-Command":f===l?"upload, finalize":"upload","X-Goog-Upload-Offset":c.current},g=n.slice(p,d);if(null===g)throw h();var b=t.maxUploadRetryTime,v=new Y(r,"POST",(function(e,r){var o,a=ue(e,["active","final"]),s=c.current+f,u=n.size();return o="final"===a?ee(t,i)(e,r):null,new se(s,u,"final"===a,o)}),b);return v.headers=_,v.body=g.uploadData(),v.progressCallback=u||null,v.errorHandler=re(e),v}
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
 */var le=function(e,t,r){if("function"==typeof e||null!=t||null!=r)this.next=e,this.error=t,this.complete=r;else{var n=e;this.next=n.next,this.error=n.error,this.complete=n.complete}};
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
 */function he(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
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
 */var fe=function(){function e(e,t,r){var n=this;void 0===r&&(r=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=V(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=function(e){n._request=void 0,n._chunkMultiplier=1,e._codeEquals("canceled")?(n._needToFetchStatus=!0,n.completeTransitions_()):(n._error=e,n._transition("error"))},this._metadataErrorHandler=function(e){n._request=void 0,e._codeEquals("canceled")?n.completeTransitions_():(n._error=e,n._transition("error"))},this._promise=new Promise((function(e,t){n._resolve=e,n._reject=t,n._start()})),this._promise.then(null,(function(){}))}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(r){return e._updateProgress(t+r)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;this._ref.storage._getAuthToken().then((function(r){switch(t._state){case"running":e(r);break;case"canceling":t._transition("canceled");break;case"pausing":t._transition("paused")}}))},e.prototype._createResumable=function(){var e=this;this._resolveToken((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=ae(t,n,o),s={name:a.fullPath},u=q(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=J(a,r),h=e.maxUploadRetryTime,f=new Y(u,"POST",(function(e){var t;ue(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Q(!1)}return Q(E(t)),t}),h);return f.urlParams=s,f.headers=c,f.body=l,f.errorHandler=re(t),f}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),n=e._ref.storage._makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken((function(r){var n=function(e,t,r,n){var o=e.maxUploadRetryTime,i=new Y(r,"POST",(function(e){var t=ue(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Q(!1)}r||Q(!1);var o=Number(r);return Q(!isNaN(o)),new se(o,n.size(),"final"===t)}),o);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=re(t),i}(e._ref.storage,e._ref._location,t,e._blob),o=e._ref.storage._makeRequest(n,r);e._request=o,o.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))},e.prototype._continueUpload=function(){var e=this,t=262144*this._chunkMultiplier,r=new se(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((function(o){var i;try{i=ce(e._ref._location,e._ref.storage,n,e._blob,t,e._mappings,r,e._makeProgressCallback())}catch(t){return e._error=t,void e._transition("error")}var a=e._ref.storage._makeRequest(i,o);e._request=a,a.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition("success")):e.completeTransitions_()}),e._errorHandler)}))},e.prototype._increaseMultiplier=function(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken((function(t){var r=oe(e._ref.storage,e._ref._location,e._mappings),n=e._ref.storage._makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition("success")}),e._metadataErrorHandler)}))},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=ae(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+J(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",f=D.getBlob(c,n,l);if(null===f)throw h();var p={name:u.fullPath},d=q(i),_=e.maxUploadRetryTime,g=new Y(d,"POST",ee(e,r),_);return g.urlParams=p,g.headers=a,g.body=f.uploadData(),g.errorHandler=re(t),g}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),n=e._ref.storage._makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition("success")}),e._errorHandler)}))},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=l(),this._state=e,this._notifyObservers();break;case"error":case"success":this._state=e,this._notifyObservers()}},e.prototype.completeTransitions_=function(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=x(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){var o=this,i=new le(t,r,n);return this._addObserver(i),function(){o._removeObserver(i)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise(),this._observers.slice().forEach((function(t){e._notifyObserver(t)}))},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(x(this._state)){case O.SUCCESS:he(this._resolve.bind(null,this.snapshot))();break;case O.CANCELED:case O.ERROR:he(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){switch(x(this._state)){case O.RUNNING:case O.PAUSED:e.next&&he(e.next.bind(e,this.snapshot))();break;case O.SUCCESS:e.complete&&he(e.complete.bind(e))();break;case O.CANCELED:case O.ERROR:e.error&&he(e.error.bind(e,this._error))();break;default:e.error&&he(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e},e.prototype.pause=function(){var e="running"===this._state;return e&&this._transition("pausing"),e},e.prototype.cancel=function(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e},e}(),pe=function(){function e(e,t){this._service=e,this._location=t instanceof S?t:S.makeFromUrl(t)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype._newRef=function(t,r){return new e(t,r)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new S(this._location.bucket,"");return this._newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return F(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var r=new S(this._location.bucket,t);return new e(this._service,r)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw d(e)},e}();
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
 */function de(e){var t={prefixes:[],items:[]};return function e(t,r,n){return Object(o.b)(this,void 0,void 0,(function(){var i,a,s;return Object(o.d)(this,(function(o){switch(o.label){case 0:return[4,_e(t,{pageToken:n})];case 1:return i=o.sent(),(a=r.prefixes).push.apply(a,i.prefixes),(s=r.items).push.apply(s,i.items),null==i.nextPageToken?[3,3]:[4,e(t,r,i.nextPageToken)];case 2:o.sent(),o.label=3;case 3:return[2]}}))}))}(e,t).then((function(){return t}))}function _e(e,t){return Object(o.b)(this,void 0,void 0,(function(){var r,n,i;return Object(o.d)(this,(function(o){switch(o.label){case 0:return null!=t&&"number"==typeof t.maxResults&&I("options.maxResults",1,1e3,t.maxResults),[4,e.storage._getAuthToken()];case 1:return r=o.sent(),n=t||{},i=ie(e.storage,e._location,"/",n.pageToken,n.maxResults),[2,e.storage._makeRequest(i,r).getPromise()]}}))}))}function ge(e,t){return Object(o.b)(this,void 0,void 0,(function(){var r,n;return Object(o.d)(this,(function(o){switch(o.label){case 0:return e._throwIfRoot("updateMetadata"),[4,e.storage._getAuthToken()];case 1:return r=o.sent(),n=function(e,t,r,n){var o=q(t.fullServerUrl()),i=J(r,n),a=e.maxOperationRetryTime,s=new Y(o,"PATCH",ee(e,n),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=ne(t),s}(e.storage,e._location,t,V()),[2,e.storage._makeRequest(n,r).getPromise()]}}))}))}function be(e){return Object(o.b)(this,void 0,void 0,(function(){var t,r;return Object(o.d)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getDownloadURL"),[4,e.storage._getAuthToken()];case 1:return t=n.sent(),r=function(e,t,r){var n=q(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new Y(n,"GET",te(e,r),o);return i.errorHandler=ne(t),i}(e.storage,e._location,V()),[2,e.storage._makeRequest(r,t).getPromise().then((function(e){if(null===e)throw new s("no-download-url","The given file does not have any download URLs.");return e}))]}}))}))}function ve(e){return Object(o.b)(this,void 0,void 0,(function(){var t,r;return Object(o.d)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("deleteObject"),[4,e.storage._getAuthToken()];case 1:return t=n.sent(),r=function(e,t){var r=q(t.fullServerUrl()),n=e.maxOperationRetryTime,o=new Y(r,"DELETE",(function(e,t){}),n);return o.successCodes=[200,204],o.errorHandler=ne(t),o}(e.storage,e._location),[2,e.storage._makeRequest(r,t).getPromise()]}}))}))}function me(e,t){var r=function(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new S(e._location.bucket,r);return new pe(e.storage,n)}
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
 */function ye(e){return/^[A-Za-z]+:\/\//.test(e)}function we(e,t){if(e instanceof ke){var r=e;if(null==r._bucket)throw new s("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");var n=new pe(r,r._bucket);return null!=t?we(n,t):n}if(void 0!==t){if(t.includes(".."))throw f('`path` param cannot contain ".."');return me(e,t)}return e}function Re(e,t){if(t&&ye(t)){if(e instanceof ke)return new pe(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}return we(e,t)}var ke=function(){function e(e,t,r,n,o){var i,a;this.app=e,this._authProvider=t,this._pool=r,this._url=n,this._firebaseVersion=o,this._bucket=null,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=n?S.makeFromBucketSpec(n):(i=this.app.options,null==(a=null==i?void 0:i.storageBucket)?null:S.makeFromBucketSpec(a))}return Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype._getAuthToken=function(){return Object(o.b)(this,void 0,void 0,(function(){var e,t;return Object(o.d)(this,(function(r){switch(r.label){case 0:return(e=this._authProvider.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2];case 1:if(null!==(t=r.sent()))return[2,t.accessToken];r.label=2;case 2:return[2,null]}}))}))},e.prototype._delete=function(){return this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear(),Promise.resolve()},e.prototype._makeStorageReference=function(e){return new pe(this,e)},e.prototype._makeRequest=function(e,t){var r=this;if(this._deleted)return new C(p());var n=function(e,t,r,n,o){var i=L(e.urlParams),a=e.url+i,s=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(s,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(s,r),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(s,o),new N(a,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}(e,this._appId,t,this._pool,this._firebaseVersion);return this._requests.add(n),n.getPromise().then((function(){return r._requests.delete(n)}),(function(){return r._requests.delete(n)})),n},e}();
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
 */function Te(e,t,r){return function(e,t,r){return e._throwIfRoot("uploadBytesResumable"),new fe(e,new D(t),r)}(e,t,r)}function Oe(e){return function(e){return Object(o.b)(this,void 0,void 0,(function(){var t,r;return Object(o.d)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getMetadata"),[4,e.storage._getAuthToken()];case 1:return t=n.sent(),r=oe(e.storage,e._location,V()),[2,e.storage._makeRequest(r,t).getPromise()]}}))}))}(e)}function xe(e,t){return Re(e,t)}
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
var Pe,Ue,Se=function(){function e(e,t,r){this._delegate=e,this.task=t,this.ref=r}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),Ce=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return new Se(this._delegate.snapshot,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var r=this;return this._delegate.then((function(t){if(e)return e(new Se(t,r,r._ref))}),t)},e.prototype.on=function(e,t,r,n){var o=this,i=void 0;return t&&(i="function"==typeof t?function(e){return t(new Se(e,o,o._ref))}:{next:t.next?function(e){return t.next(new Se(e,o,o._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,r||void 0,n||void 0)},e}(),Ee=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map((function(t){return new Ae(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map((function(t){return new Ae(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),Ae=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){return new e(function(e,t){return me(e,t)}(this._delegate,t),this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return this._throwIfRoot("put"),new Ce(Te(this._delegate,e,t),this)},e.prototype.putString=function(e,t,r){void 0===t&&(t=b.RAW),this._throwIfRoot("putString");var n=m(t,e),i=Object(o.a)({},r);return null==i.contentType&&null!=n.contentType&&(i.contentType=n.contentType),new Ce(new fe(this._delegate,new D(n.data,!0),i),this)},e.prototype.listAll=function(){var e=this;return function(e){return de(e)}(this._delegate).then((function(t){return new Ee(t,e.storage)}))},e.prototype.list=function(e){var t=this;return function(e,t){return _e(e,t)}(this._delegate,e||void 0).then((function(e){return new Ee(e,t.storage)}))},e.prototype.getMetadata=function(){return Oe(this._delegate)},e.prototype.updateMetadata=function(e){return function(e,t){return ge(e,t)}(this._delegate,e)},e.prototype.getDownloadURL=function(){return function(e){return be(e)}(this._delegate)},e.prototype.delete=function(){return this._throwIfRoot("delete"),function(e){return ve(e)}(this._delegate)},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw d(e)},e}(),je=function(){function e(e,t){var r=this;this.app=e,this._delegate=t,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(ye(e))throw f("ref() expected a child path but got a URL, use refFromURL instead.");return new Ae(xe(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!ye(e))throw f("refFromURL() expected a full URL but got a child path, use ref() instead.");try{S.makeFromUrl(e)}catch(e){throw f("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ae(xe(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e}();
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
 */function Ie(e,t){var r=t.instanceIdentifier,o=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal");return new je(o,new ke(o,i,new U,r,n.a.SDK_VERSION))}Pe=n.a,Ue={TaskState:O,TaskEvent:T,StringFormat:b,Storage:ke,Reference:Ae},Pe.INTERNAL.registerComponent(new a.a("storage",Ie,"PUBLIC").setServiceProps(Ue).setMultipleInstances(!0)),Pe.registerVersion("@firebase/storage","0.4.5")}}]);