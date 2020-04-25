(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7566202e"],{"0226":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("Loading",{attrs:{variant:"light"}}):t._e(),r("div",{attrs:{id:"snackbar"}},[t._v(t._s(t.snackbar.msg))]),t.loading?t._e():r("div",{staticClass:"centerBox centerBoxUp"},[r("h6",[t._v("Before we get started tell us about yourself")]),r("b-form",[r("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{staticClass:"icon",attrs:{icon:"person"}})],1),r("b-form-input",{attrs:{type:"text",placeholder:"name"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),r("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[r("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker"},model:{value:t.user.dob,callback:function(e){t.$set(t.user,"dob",e)},expression:"user.dob"}})],1),r("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{staticClass:"icon",attrs:{icon:"envelope"}})],1),r("b-form-input",{attrs:{type:"text",placeholder:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),r("b-input-group",{staticClass:"mb-1",attrs:{size:"md"}},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{staticClass:"icon",attrs:{icon:"unlock"}})],1),r("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),r("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{staticClass:"icon",attrs:{icon:"unlock"}})],1),r("b-form-input",{attrs:{type:"password",placeholder:"confirm password"},model:{value:t.user.confirmPassword,callback:function(e){t.$set(t.user,"confirmPassword",e)},expression:"user.confirmPassword"}})],1),r("b-form-group",{staticClass:"radioLabel",attrs:{label:"Gender"}},[r("b-form-radio-group",{attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:t.user.gender,callback:function(e){t.$set(t.user,"gender",e)},expression:"user.gender"}},[r("b-form-radio",{attrs:{value:"male"}},[t._v("Male")]),r("b-form-radio",{attrs:{value:"female"}},[t._v("Female")])],1)],1),r("b-row",[r("b-col",[r("button",{staticClass:"iconBtn back",attrs:{type:"button"},on:{click:function(e){return t.back()}}},[r("b-icon",{staticClass:"icon",attrs:{icon:"chevron-left"}})],1)]),r("b-col",[r("button",{staticClass:"button main curved",attrs:{type:"button"},on:{click:function(e){return t.submitUserDetails()}}},[t._v("Next")])])],1),r("p",{staticClass:"link main"},[t._v("Already have an account? Login")])],1)],1)],1)},a=[];r("99af"),r("b0c0"),r("d3b7"),r("ac1f"),r("5319"),r("1276"),r("498a");function i(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("3ca3"),r("ddb0");function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(r.push(o.value),e&&r.length===e)break}catch(c){a=!0,i=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(a)throw i}}return r}}var s=r("06c5");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){return i(t)||o(t,e)||Object(s["a"])(t,e)||c()}var l=r("5530"),d=r("2f62"),f=r("6fbe"),b={data:function(){return{loading:!1,snackbar:{msg:"",color:""},user:{phone:"",otp:"",dob:"",email:"",password:"",confirmPassword:"",gender:"",name:""},userDetails:{}}},components:{Loading:function(){return r.e("chunk-cad9cb52").then(r.bind(null,"ecba"))}},methods:Object(l["a"])({},Object(d["b"])(["changePhase"]),{submitUserDetails:function(){var t=this;this.loading=!0;var e=Object(l["a"])({},this.user,{phone:this.userDetails.phone,otp:this.userDetails.otp});if(""==e.name.trim())return this.loading=!1,this.snackbar.msg="Name cannot be empty",void this.showSnackbar();if(e.password!=e.confirmPassword)return this.loading=!1,this.snackbar.msg="Passwords do not match",void this.showSnackbar();var r=this.user.dob;if(""==r.trim())return this.loading=!1,this.snackbar.msg="DOB cannot be empty",void this.showSnackbar();var n={year:(new Date).getFullYear()},a=r.split("-"),i=u(a,3),o=i[0],s=i[1],c=i[2];if(n.year-o<18)return this.loading=!1,this.snackbar.msg="Youre too young",void this.showSnackbar();e.dob="".concat(c,"/").concat(s,"/").concat(o),delete e.otp,delete e.confirmPassword,console.log(e),this.$store.dispatch("makeUserDetailsRequest",e).then((function(){t.changePhase("next")})).catch((function(){t.loading=!1}))},next:function(){this.changePhase("next")},back:function(){this.changePhase("back")},showSnackbar:function(){var t=document.getElementById("snackbar");t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)}}),created:function(){this.userDetails=f.decodeJSON(f.storage.get("userDetails"))}},p=b,v=(r("3725"),r("2877")),h=Object(v["a"])(p,n,a,!1,null,"2e351c29",null);e["default"]=h.exports},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var n=r("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),i=r("d039"),o=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&n(RegExp.prototype,s,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?o.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},3725:function(t,e,r){"use strict";var n=r("4e04"),a=r.n(n);a.a},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),i=r("7dd0"),o="String Iterator",s=a.set,c=a.getterFor(o);i(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"498a":function(t,e,r){"use strict";var n=r("23e7"),a=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),i=r("9bdd"),o=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,d,f,b,p=a(t),v="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,y=u(p),S=0;if(m&&(g=n(g,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=s(p.length),r=new v(e);e>S;S++)b=m?g(p[S],S):p[S],c(r,S,b);else for(d=y.call(p),f=d.next,r=new v;!(l=f.call(d)).done;S++)b=m?i(d,g,[l.value,S],!0):l.value,c(r,S,b);return r.length=S,r}},"4e04":function(t,e,r){},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),s=r("a691"),c=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,f=Math.min,b=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!g&&m||"string"===typeof n&&-1===n.indexOf(y)){var i=r(e,t,this,n);if(i.done)return i.value}var c=a(t),b=String(this),p="function"===typeof n;p||(n=String(n));var v=c.global;if(v){var w=c.unicode;c.lastIndex=0}var x=[];while(1){var k=l(c,b);if(null===k)break;if(x.push(k),!v)break;var A=String(k[0]);""===A&&(c.lastIndex=u(b,o(c.lastIndex),w))}for(var C="",E=0,$=0;$<x.length;$++){k=x[$];for(var _=String(k[0]),P=d(f(s(k.index),b.length),0),O=[],D=1;D<k.length;D++)O.push(h(k[D]));var j=k.groups;if(p){var R=[_].concat(O,P,b);void 0!==j&&R.push(j);var I=String(n.apply(void 0,R))}else I=S(_,b,P,O,j,n);P>=E&&(C+=b.slice(E,P)+I,E=P+_.length)}return C+b.slice(E)}];function S(t,r,n,a,o,s){var c=n+t.length,u=a.length,l=v;return void 0!==o&&(o=i(o),l=p),e.call(s,l,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>u){var d=b(l/10);return 0===d?e:d<=u?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}s=a[l-1]}return void 0===s?"":s}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},c8d2:function(t,e,r){var n=r("d039"),a=r("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("e260"),o=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),l=i.values;for(var d in a){var f=n[d],b=f&&f.prototype;if(b){if(b[c]!==l)try{o(b,c,l)}catch(v){b[c]=l}if(b[u]||o(b,u,d),a[d])for(var p in i)if(b[p]!==i[p])try{o(b,p,i[p])}catch(v){b[p]=i[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var b=f.prototype=l.prototype;b.constructor=f;var p=b.toString,v="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(o(d,t))return"";var r=v?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),l=r("b622"),d=r("1dde"),f=r("ae40"),b=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),h=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!b||!p},{slice:function(t,e){var r,n,l,d=c(this),f=s(d.length),b=o(t,f),p=o(void 0===e?f:e,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(d,b,p);for(n=new(void 0===r?Array:r)(g(p-b,0)),l=0;b<p;b++,l++)b in d&&u(n,l,d[b]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-7566202e.2b8c1101.js.map