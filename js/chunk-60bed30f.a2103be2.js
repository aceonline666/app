(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60bed30f"],{"00b4":function(e,t,a){"use strict";a("ac1f");var n=a("23e7"),r=a("da84"),o=a("c65b"),s=a("e330"),u=a("1626"),l=a("861d"),i=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),c=r.Error,m=s(/./.test);n({target:"RegExp",proto:!0,forced:!i},{test:function(e){var t=this.exec;if(!u(t))return m(this,e);var a=o(t,this,e);if(null!==a&&!l(a))throw new c("RegExp exec method returned something other than an Object or null");return!!a}})},"0d03":function(e,t,a){var n=a("e330"),r=a("6eeb"),o=Date.prototype,s="Invalid Date",u="toString",l=n(o[u]),i=n(o.getTime);String(new Date(NaN))!=s&&r(o,u,(function(){var e=i(this);return e===e?l(this):s}))},"107c":function(e,t,a){var n=a("d039"),r=a("da84"),o=r.RegExp;e.exports=n((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},2131:function(e,t,a){"use strict";a("61fc")},"25eb":function(e,t,a){var n=a("23e7"),r=a("c20d");n({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},"277d":function(e,t,a){var n=a("23e7"),r=a("e8b5");n({target:"Array",stat:!0},{isArray:r})},"4df4":function(e,t,a){"use strict";var n=a("da84"),r=a("0366"),o=a("c65b"),s=a("7b0b"),u=a("9bdd"),l=a("e95a"),i=a("68ee"),c=a("07fa"),m=a("8418"),d=a("9a1f"),p=a("35a1"),v=n.Array;e.exports=function(e){var t=s(e),a=i(this),n=arguments.length,f=n>1?arguments[1]:void 0,h=void 0!==f;h&&(f=r(f,n>2?arguments[2]:void 0));var g,b,y,x,w,G,T=p(t),_=0;if(!T||this==v&&l(T))for(g=c(t),b=a?new this(g):v(g);g>_;_++)G=h?f(t[_],_):t[_],m(b,_,G);else for(x=d(t,T),w=x.next,b=a?new this:[];!(y=o(w,x)).done;_++)G=h?u(x,f,[y.value,_],!0):y.value,m(b,_,G);return b.length=_,b}},"61fc":function(e,t,a){},9263:function(e,t,a){"use strict";var n=a("c65b"),r=a("e330"),o=a("577e"),s=a("ad6d"),u=a("9f7f"),l=a("5692"),i=a("7c73"),c=a("69f3").get,m=a("fce3"),d=a("107c"),p=l("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,f=v,h=r("".charAt),g=r("".indexOf),b=r("".replace),y=r("".slice),x=function(){var e=/a/,t=/b*/g;return n(v,e,"a"),n(v,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=u.BROKEN_CARET,G=void 0!==/()??/.exec("")[1],T=x||G||w||m||d;T&&(f=function(e){var t,a,r,u,l,m,d,T=this,_=c(T),C=o(e),I=_.raw;if(I)return I.lastIndex=T.lastIndex,t=n(f,I,C),T.lastIndex=I.lastIndex,t;var k=_.groups,A=w&&T.sticky,E=n(s,T),N=T.source,O=0,R=C;if(A&&(E=b(E,"y",""),-1===g(E,"g")&&(E+="g"),R=y(C,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==h(C,T.lastIndex-1))&&(N="(?: "+N+")",R=" "+R,O++),a=new RegExp("^(?:"+N+")",E)),G&&(a=new RegExp("^"+N+"$(?!\\s)",E)),x&&(r=T.lastIndex),u=n(v,A?a:T,R),A?u?(u.input=y(u.input,O),u[0]=y(u[0],O),u.index=T.lastIndex,T.lastIndex+=u[0].length):T.lastIndex=0:x&&u&&(T.lastIndex=T.global?u.index+u[0].length:r),G&&u&&u.length>1&&n(p,u[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(u[l]=void 0)})),u&&k)for(u.groups=m=i(null),l=0;l<k.length;l++)d=k[l],m[d[0]]=u[d[1]];return u}),e.exports=f},"9bdd":function(e,t,a){var n=a("825a"),r=a("2a62");e.exports=function(e,t,a,o){try{return o?t(n(a)[0],a[1]):t(a)}catch(s){r(e,"throw",s)}}},"9f7f":function(e,t,a){var n=a("d039"),r=a("da84"),o=r.RegExp,s=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),u=s||n((function(){return!o("a","y").sticky})),l=s||n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:u,UNSUPPORTED_Y:s}},a630:function(e,t,a){var n=a("23e7"),r=a("4df4"),o=a("1c7e"),s=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:s},{from:r})},ac1f:function(e,t,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,a){var n=a("83ab"),r=a("5e77").EXISTS,o=a("e330"),s=a("9bf2").f,u=Function.prototype,l=o(u.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=o(i.exec),m="name";n&&!r&&s(u,m,{configurable:!0,get:function(){try{return c(i,l(this))[1]}catch(e){return""}}})},c20d:function(e,t,a){var n=a("da84"),r=a("d039"),o=a("e330"),s=a("577e"),u=a("58a8").trim,l=a("5899"),i=n.parseInt,c=n.Symbol,m=c&&c.iterator,d=/^[+-]?0x/i,p=o(d.exec),v=8!==i(l+"08")||22!==i(l+"0x16")||m&&!r((function(){i(Object(m))}));e.exports=v?function(e,t){var a=u(s(e));return i(a,t>>>0||(p(d,a)?16:10))}:i},f5ab:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"submit-form"},[a("h3",[e._v("Turnier")]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group input-group-sm mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[0].homeGoals,expression:"tournament[0].homeGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Alt",required:""},domProps:{value:e.tournament[0].homeGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[0],"homeGoals",t.target.value)}}}),a("span",{staticClass:"input-group-text"},[e._v(":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[0].awayGoals,expression:"tournament[0].awayGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Jung",required:""},domProps:{value:e.tournament[0].awayGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[0],"awayGoals",t.target.value)}}})]),a("div",{staticClass:"input-group input-group-sm mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[1].homeGoals,expression:"tournament[1].homeGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Mittel",required:""},domProps:{value:e.tournament[1].homeGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[1],"homeGoals",t.target.value)}}}),a("span",{staticClass:"input-group-text"},[e._v(":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[1].awayGoals,expression:"tournament[1].awayGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Jung",required:""},domProps:{value:e.tournament[1].awayGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[1],"awayGoals",t.target.value)}}})]),a("div",{staticClass:"input-group input-group-sm mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[2].homeGoals,expression:"tournament[2].homeGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Mittel",required:""},domProps:{value:e.tournament[2].homeGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[2],"homeGoals",t.target.value)}}}),a("span",{staticClass:"input-group-text"},[e._v(":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[2].awayGoals,expression:"tournament[2].awayGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Alt",required:""},domProps:{value:e.tournament[2].awayGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[2],"awayGoals",t.target.value)}}})]),a("div",{staticClass:"input-group input-group-sm mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[3].homeGoals,expression:"tournament[3].homeGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Jung",required:""},domProps:{value:e.tournament[3].homeGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[3],"homeGoals",t.target.value)}}}),a("span",{staticClass:"input-group-text"},[e._v(":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[3].awayGoals,expression:"tournament[3].awayGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Alt",required:""},domProps:{value:e.tournament[3].awayGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[3],"awayGoals",t.target.value)}}})]),a("div",{staticClass:"input-group input-group-sm mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[4].homeGoals,expression:"tournament[4].homeGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Jung",required:""},domProps:{value:e.tournament[4].homeGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[4],"homeGoals",t.target.value)}}}),a("span",{staticClass:"input-group-text"},[e._v(":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[4].awayGoals,expression:"tournament[4].awayGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Mittel",required:""},domProps:{value:e.tournament[4].awayGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[4],"awayGoals",t.target.value)}}})]),a("div",{staticClass:"input-group input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[5].homeGoals,expression:"tournament[5].homeGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Alt",required:""},domProps:{value:e.tournament[5].homeGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[5],"homeGoals",t.target.value)}}}),a("span",{staticClass:"input-group-text"},[e._v(":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tournament[5].awayGoals,expression:"tournament[5].awayGoals"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"99",placeholder:"Tore Mittel",required:""},domProps:{value:e.tournament[5].awayGoals},on:{input:function(t){t.target.composing||e.$set(e.tournament[5],"awayGoals",t.target.value)}}})]),a("button",{staticClass:"btn btn-success btn-sm mt-2",on:{click:e.saveTournament}},[e._v(" Speichern ")])]),a("br"),a("h5",[e._v("Turnier-Tabelle")]),a("table",{staticClass:"table table-bordered table-striped"},[e._m(0),a("tbody",e._l(e.tournamentTableaux,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.rank))]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.points))]),a("td",[e._v(e._s(t.scoredGoals)+" ("+e._s(t.goalDifference)+")")])])})),0)]),a("h5",[e._v("Letzte Spiele-Ergebnisse")]),a("table",{staticClass:"table table-bordered table-striped"},[e._m(1),a("tbody",e._l(e.lastTournamentMatches,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.homeTeam))]),a("td",[e._v(e._s(t.awayTeam))]),a("td",[e._v(e._s(t.homeGoals)+":"+e._s(t.awayGoals))]),a("td",[e._v(e._s(t.date))])])})),0)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("Rang")]),a("td",[e._v("Team")]),a("td",[e._v("Punkte")]),a("td",[e._v("Tore")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("Heim-Team")]),a("td",[e._v("Auswärt-Team")]),a("td",[e._v("Tore")]),a("td",[e._v("Datum")])])])}];a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("277d"),a("d9e2"),a("d401"),a("fb6a"),a("b0c0"),a("a630"),a("ac1f"),a("00b4");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function s(e,t){if(e){if("string"===typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}function u(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=s(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return u=e.done,e},e:function(e){l=!0,o=e},f:function(){try{u||null==a["return"]||a["return"]()}finally{if(l)throw o}}}}var l=a("1da1"),i=a("d4ec"),c=a("bee2"),m=a("262e"),d=a("2caf"),p=(a("96cf"),a("25eb"),a("a9e3"),a("0d03"),a("9ab4")),v=a("60a3"),f=a("d733"),h=function(e){Object(m["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.year=0,e.selectableYears=[],e.tournamentTableaux=[{rank:null,name:null,scoredGoals:0,goalDifference:0,points:0}],e.lastTournamentMatches=[{homeTeam:null,awayTeam:null,homeGoals:null,awayGoals:null,date:null}],e.tournament=[{homeTeam:"Old",awayTeam:"Young",homeGoals:null,awayGoals:null},{homeTeam:"Middle",awayTeam:"Young",homeGoals:null,awayGoals:null},{homeTeam:"Middle",awayTeam:"Old",homeGoals:null,awayGoals:null},{homeTeam:"Young",awayTeam:"Old",homeGoals:null,awayGoals:null},{homeTeam:"Young",awayTeam:"Middle",homeGoals:null,awayGoals:null},{homeTeam:"Old",awayTeam:"Middle",homeGoals:null,awayGoals:null}],e}return Object(c["a"])(a,[{key:"saveTournament",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!confirm("Turnier-Ergebnis eintragen?")){e.next=9;break}t=[],a=0,n=u(this.tournament);try{for(n.s();!(r=n.n()).done;)o=r.value,t[a]=o,t[a].homeGoals=Number.parseInt(o.homeGoals),t[a].awayGoals=Number.parseInt(o.awayGoals),a++}catch(s){n.e(s)}finally{n.f()}return e.next=7,f["a"].saveTournament(t);case 7:this.updateTournamentTableaux(),this.updateLastTournamentMatches();case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateTournamentTableaux",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].getTableaux(!0,this.year,6);case 3:this.tournamentTableaux=e.sent.data,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateLastTournamentMatches",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].getMatches(!0,6);case 3:this.lastTournamentMatches=e.sent.data,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"setCurrentYear",value:function(e){this.year=e,this.updateTournamentTableaux()}},{key:"mounted",value:function(){for(var e=(new Date).getFullYear()-1;e>=2017;e--)this.selectableYears.push(e);this.updateTournamentTableaux(),this.updateLastTournamentMatches()}}]),a}(v["b"]);h=Object(p["a"])([v["a"]],h);var g=h,b=g,y=(a("2131"),a("2877")),x=Object(y["a"])(b,n,r,!1,null,"24d3e1bd",null);t["default"]=x.exports},fb6a:function(e,t,a){"use strict";var n=a("23e7"),r=a("da84"),o=a("e8b5"),s=a("68ee"),u=a("861d"),l=a("23cb"),i=a("07fa"),c=a("fc6a"),m=a("8418"),d=a("b622"),p=a("1dde"),v=a("f36a"),f=p("slice"),h=d("species"),g=r.Array,b=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var a,n,r,d=c(this),p=i(d),f=l(e,p),y=l(void 0===t?p:t,p);if(o(d)&&(a=d.constructor,s(a)&&(a===g||o(a.prototype))?a=void 0:u(a)&&(a=a[h],null===a&&(a=void 0)),a===g||void 0===a))return v(d,f,y);for(n=new(void 0===a?g:a)(b(y-f,0)),r=0;f<y;f++,r++)f in d&&m(n,r,d[f]);return n.length=r,n}})},fce3:function(e,t,a){var n=a("d039"),r=a("da84"),o=r.RegExp;e.exports=n((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-60bed30f.a2103be2.js.map