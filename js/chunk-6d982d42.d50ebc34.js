(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d982d42"],{"1d76":function(t,e,r){"use strict";r("fdbd")},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}},"1ea1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list row"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.filter},on:{keyup:t.retrieveKickers,input:function(e){e.target.composing||(t.filter=e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.retrieveKickers}},[t._v(" Suche ")])])])]),r("div",{staticClass:"col-md-8"},[r("ul",{staticClass:"list-group"},t._l(t.kickers,(function(e,n){return r("li",{key:n,staticClass:"list-group-item list-group-item-action",class:{"list-group-item-secondary":n==t.currentIndex},on:{click:function(r){return t.setActiveKicker(e,n)}}},[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" "+t._s(e.name)+" ("+t._s(e.beersTotal)+") "),r("div",{staticClass:"row"},[e.beersToday>0?r("span",{staticClass:"col badge bg-warning me-1"},[r("font-awesome-icon",{attrs:{icon:"beer"}}),t._v(t._s(e.beersToday))],1):t._e(),r("span",{staticClass:"col badge",class:[e.balance>0?"bg-success":"bg-danger"]},[t._v(t._s(e.balance)+"€")])])]),t.currentKicker&&t.currentKicker.id==e.id?r("div",{staticClass:"d-flex mt-2"},[r("button",{staticClass:"btn btn-success me-2",class:{disabled:!e.active},attrs:{type:"button"},on:{click:function(r){return t.drinkBeer(e.id)}}},[r("font-awesome-icon",{attrs:{icon:"beer"}})],1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),r("button",{staticClass:"btn btn-warning ms-2",class:{disabled:!e.active},attrs:{type:"button"},on:{click:function(r){t.payMoney(e.id,Number.parseInt(t.amount))}}},[r("font-awesome-icon",{attrs:{icon:"euro-sign"}})],1),r("button",{staticClass:"btn btn-danger ms-2",class:{disabled:!e.active},attrs:{type:"button"},on:{click:function(r){return t.undoDrinkBeer(e.id)}}},[r("font-awesome-icon",{attrs:{icon:"undo"}})],1),r("a",{attrs:{href:"/app/#/edit/"+t.currentKicker.id}},[r("button",{staticClass:"btn btn-secondary ms-2",attrs:{type:"button"}},[r("font-awesome-icon",{attrs:{icon:"user-cog"}})],1)])]):t._e()])})),0)]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"btn-group mt-3",attrs:{role:"group","aria-label":"Aktive oder Inaktive Kicker"}},[r("input",{staticClass:"btn-check",attrs:{type:"radio",name:"btnradio",id:"active",autocomplete:"off",checked:""},on:{click:function(e){return t.setActive(!0)}}}),r("label",{staticClass:"btn btn-outline-primary",attrs:{for:"active"}},[t._v("Aktive")]),r("input",{staticClass:"btn-check",attrs:{type:"radio",name:"btnradio",id:"all",autocomplete:"off"},on:{click:function(e){return t.setActive(!1)}}}),r("label",{staticClass:"btn btn-outline-primary",attrs:{for:"all"}},[t._v("Alle")])])])])},i=[],o=r("1da1"),a=r("d4ec"),c=r("bee2"),s=r("262e"),u=r("2caf"),l=(r("96cf"),r("4de4"),r("d3b7"),r("9ab4")),f=r("60a3"),h=r("d733"),p=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;return Object(a["a"])(this,r),t=e.apply(this,arguments),t.kickers=[],t.currentKicker=null,t.currentIndex=-1,t.filter="",t.amount=10,t.active=!0,t}return Object(c["a"])(r,[{key:"retrieveKickers",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h["a"].findWithFilter(this.active,this.filter);case 3:this.kickers=t.sent.data,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"refreshList",value:function(){this.retrieveKickers(),this.currentKicker=null,this.currentIndex=-1}},{key:"setActiveKicker",value:function(t,e){this.currentKicker=t,this.currentIndex=e}},{key:"drinkBeer",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.currentKicker.beersToday++,this.currentKicker.beersTotal++,t.next=5,h["a"].drink(e);case 5:this.retrieveKickers(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"undoDrinkBeer",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("Letztes Bier rückgängig machen für "+e+"?")){t.next=12;break}return t.prev=1,this.currentKicker.beersToday--,this.currentKicker.beersTotal--,t.next=6,h["a"].undoDrink(e);case 6:this.retrieveKickers(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[1,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"payMoney",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm(r+" € einzahlen für "+e+"?")){t.next=11;break}return t.prev=1,this.currentKicker.balance+=r,t.next=5,h["a"].pay(e,r);case 5:this.retrieveKickers(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"setActive",value:function(t){this.active=t,this.retrieveKickers()}},{key:"mounted",value:function(){this.retrieveKickers()}}]),r}(f["b"]);p=Object(l["a"])([f["a"]],p);var d=p,v=d,y=(r("1d76"),r("2877")),m=Object(y["a"])(v,n,i,!1,null,"4f41a5b6",null);e["default"]=m.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(A){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=C(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function b(){}var g={};s(g,o,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(T([])));w&&w!==r&&n.call(w,o)&&(g=w);var x=b.prototype=y.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function C(t,e,r){var n=f;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return N()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function K(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=b,s(x,"constructor",b),s(b,"constructor",m),m.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new _(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),s(x,c,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(K),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),K(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;K(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},fdbd:function(t,e,r){}}]);
//# sourceMappingURL=chunk-6d982d42.d50ebc34.js.map