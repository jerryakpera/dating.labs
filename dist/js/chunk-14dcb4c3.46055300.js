(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14dcb4c3"],{"0226":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t.loading?e("Loading",{attrs:{variant:"light"}}):t._e(),e("div",{attrs:{id:"snackbar"}},[t._v(t._s(t.snackbar.msg))]),t.loading?t._e():e("div",{staticClass:"centerBox centerBoxUp"},[e("h6",[t._v("Before we get started tell us about yourself")]),e("b-form",[e("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{staticClass:"icon",attrs:{icon:"person"}})],1),e("b-form-input",{attrs:{type:"text",placeholder:"name"},model:{value:t.user.name,callback:function(r){t.$set(t.user,"name",r)},expression:"user.name"}})],1),e("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker"},model:{value:t.user.dob,callback:function(r){t.$set(t.user,"dob",r)},expression:"user.dob"}})],1),e("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{staticClass:"icon",attrs:{icon:"envelope"}})],1),e("b-form-input",{attrs:{type:"text",placeholder:"email"},model:{value:t.user.email,callback:function(r){t.$set(t.user,"email",r)},expression:"user.email"}})],1),e("b-input-group",{staticClass:"mb-1",attrs:{size:"md"}},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{staticClass:"icon",attrs:{icon:"unlock"}})],1),e("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:t.user.password,callback:function(r){t.$set(t.user,"password",r)},expression:"user.password"}})],1),e("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{staticClass:"icon",attrs:{icon:"unlock"}})],1),e("b-form-input",{attrs:{type:"password",placeholder:"confirm password"},model:{value:t.user.confirmPassword,callback:function(r){t.$set(t.user,"confirmPassword",r)},expression:"user.confirmPassword"}})],1),e("b-form-group",{staticClass:"radioLabel",attrs:{label:"Gender"}},[e("b-form-radio-group",{attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:t.user.gender,callback:function(r){t.$set(t.user,"gender",r)},expression:"user.gender"}},[e("b-form-radio",{attrs:{value:"male"}},[t._v("Male")]),e("b-form-radio",{attrs:{value:"female"}},[t._v("Female")])],1)],1),e("b-row",[e("b-col",[e("button",{staticClass:"iconBtn back",attrs:{type:"button"},on:{click:function(r){return t.back()}}},[e("b-icon",{staticClass:"icon",attrs:{icon:"chevron-left"}})],1)]),e("b-col",[e("button",{staticClass:"button main curved",attrs:{type:"button"},on:{click:function(r){return t.submitUserDetails()}}},[t._v("Next")])])],1),e("p",{staticClass:"link main"},[t._v("Already have an account? Login")])],1)],1)],1)},a=[];e("99af"),e("b0c0"),e("d3b7"),e("ac1f"),e("5319"),e("1276"),e("498a");function i(t){if(Array.isArray(t))return t}e("a4d3"),e("e01a"),e("d28b"),e("e260"),e("3ca3"),e("ddb0");function o(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(e.push(o.value),r&&e.length===r)break}catch(c){a=!0,i=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(a)throw i}}return e}}var s=e("06c5");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,r){return i(t)||o(t,r)||Object(s["a"])(t,r)||c()}var l=e("5530"),d=e("2f62"),f=e("6fbe"),b={data:function(){return{loading:!1,snackbar:{msg:"",color:""},user:{phone:"",otp:"",dob:"",email:"",password:"",confirmPassword:"",gender:"",name:""},userDetails:{}}},components:{Loading:function(){return e.e("chunk-cad9cb52").then(e.bind(null,"ecba"))}},methods:Object(l["a"])({},Object(d["b"])(["changePhase"]),{submitUserDetails:function(){var t=this;this.loading=!0;var r=Object(l["a"])({},this.user,{phone:this.userDetails.phone,otp:this.userDetails.otp});if(""==r.name.trim())return this.loading=!1,this.snackbar.msg="Name cannot be empty",void this.showSnackbar();if(r.password!=r.confirmPassword)return this.loading=!1,this.snackbar.msg="Passwords do not match",void this.showSnackbar();var e=this.user.dob;if(""==e.trim())return this.loading=!1,this.snackbar.msg="DOB cannot be empty",void this.showSnackbar();var n={year:(new Date).getFullYear()},a=e.split("-"),i=u(a,3),o=i[0],s=i[1],c=i[2];if(n.year-o<18)return this.loading=!1,this.snackbar.msg="Youre too young",void this.showSnackbar();r.dob="".concat(o,"-").concat(s,"-").concat(c),delete r.otp,delete r.confirmPassword,console.log(r),this.$store.dispatch("makeUserDetailsRequest",r).then((function(){t.changePhase("next")})).catch((function(){t.loading=!1}))},next:function(){this.changePhase("next")},back:function(){this.changePhase("back")},showSnackbar:function(){var t=document.getElementById("snackbar");t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)}}),created:function(){this.userDetails=f.decodeJSON(f.storage.get("userDetails"))}},p=b,v=(e("7db0"),e("2877")),h=Object(v["a"])(p,n,a,!1,null,"2f732f67",null);r["default"]=h.exports},"06c5":function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));e("a630"),e("fb6a"),e("b0c0"),e("d3b7"),e("25f0"),e("3ca3");var n=e("6b75");function a(t,r){if(t){if("string"===typeof t)return Object(n["a"])(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(n["a"])(t,r):void 0}}},"25f0":function(t,r,e){"use strict";var n=e("6eeb"),a=e("825a"),i=e("d039"),o=e("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&n(RegExp.prototype,s,(function(){var t=a(this),r=String(t.source),e=t.flags,n=String(void 0===e&&t instanceof RegExp&&!("flags"in c)?o.call(t):e);return"/"+r+"/"+n}),{unsafe:!0})},"3ca3":function(t,r,e){"use strict";var n=e("6547").charAt,a=e("69f3"),i=e("7dd0"),o="String Iterator",s=a.set,c=a.getterFor(o);i(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,r=c(this),e=r.string,a=r.index;return a>=e.length?{value:void 0,done:!0}:(t=n(e,a),r.index+=t.length,{value:t,done:!1})}))},"498a":function(t,r,e){"use strict";var n=e("23e7"),a=e("58a8").trim,i=e("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},"4df4":function(t,r,e){"use strict";var n=e("0366"),a=e("7b0b"),i=e("9bdd"),o=e("e95a"),s=e("50c4"),c=e("8418"),u=e("35a1");t.exports=function(t){var r,e,l,d,f,b,p=a(t),v="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,y=u(p),S=0;if(m&&(g=n(g,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(r=s(p.length),e=new v(r);r>S;S++)b=m?g(p[S],S):p[S],c(e,S,b);else for(d=y.call(p),f=d.next,e=new v;!(l=f.call(d)).done;S++)b=m?i(d,g,[l.value,S],!0):l.value,c(e,S,b);return e.length=S,e}},5319:function(t,r,e){"use strict";var n=e("d784"),a=e("825a"),i=e("7b0b"),o=e("50c4"),s=e("a691"),c=e("1d80"),u=e("8aa5"),l=e("14c3"),d=Math.max,f=Math.min,b=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,r,e,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(e,n){var a=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,n){if(!g&&m||"string"===typeof n&&-1===n.indexOf(y)){var i=e(r,t,this,n);if(i.done)return i.value}var c=a(t),b=String(this),p="function"===typeof n;p||(n=String(n));var v=c.global;if(v){var w=c.unicode;c.lastIndex=0}var x=[];while(1){var k=l(c,b);if(null===k)break;if(x.push(k),!v)break;var A=String(k[0]);""===A&&(c.lastIndex=u(b,o(c.lastIndex),w))}for(var C="",E=0,$=0;$<x.length;$++){k=x[$];for(var _=String(k[0]),P=d(f(s(k.index),b.length),0),O=[],D=1;D<k.length;D++)O.push(h(k[D]));var j=k.groups;if(p){var R=[_].concat(O,P,b);void 0!==j&&R.push(j);var I=String(n.apply(void 0,R))}else I=S(_,b,P,O,j,n);P>=E&&(C+=b.slice(E,P)+I,E=P+_.length)}return C+b.slice(E)}];function S(t,e,n,a,o,s){var c=n+t.length,u=a.length,l=v;return void 0!==o&&(o=i(o),l=p),r.call(s,l,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return r;if(l>u){var d=b(l/10);return 0===d?r:d<=u?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):r}s=a[l-1]}return void 0===s?"":s}))}}))},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,e){var n=e("1d80"),a=e("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6b75":function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,"a",(function(){return n}))},"7db0":function(t,r,e){"use strict";var n=e("e675"),a=e.n(n);a.a},a630:function(t,r,e){var n=e("23e7"),a=e("4df4"),i=e("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},b0c0:function(t,r,e){var n=e("83ab"),a=e("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},c8d2:function(t,r,e){var n=e("d039"),a=e("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},d28b:function(t,r,e){var n=e("746f");n("iterator")},ddb0:function(t,r,e){var n=e("da84"),a=e("fdbc"),i=e("e260"),o=e("9112"),s=e("b622"),c=s("iterator"),u=s("toStringTag"),l=i.values;for(var d in a){var f=n[d],b=f&&f.prototype;if(b){if(b[c]!==l)try{o(b,c,l)}catch(v){b[c]=l}if(b[u]||o(b,u,d),a[d])for(var p in i)if(b[p]!==i[p])try{o(b,p,i[p])}catch(v){b[p]=i[p]}}}},e01a:function(t,r,e){"use strict";var n=e("23e7"),a=e("83ab"),i=e("da84"),o=e("5135"),s=e("861d"),c=e("9bf2").f,u=e("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[r]=!0),r};u(f,l);var b=f.prototype=l.prototype;b.constructor=f;var p=b.toString,v="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,r=p.call(t);if(o(d,t))return"";var e=v?r.slice(7,-1):r.replace(h,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:f})}},e675:function(t,r,e){},fb6a:function(t,r,e){"use strict";var n=e("23e7"),a=e("861d"),i=e("e8b5"),o=e("23cb"),s=e("50c4"),c=e("fc6a"),u=e("8418"),l=e("b622"),d=e("1dde"),f=e("ae40"),b=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),h=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!b||!p},{slice:function(t,r){var e,n,l,d=c(this),f=s(d.length),b=o(t,f),p=o(void 0===r?f:r,f);if(i(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?a(e)&&(e=e[v],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return h.call(d,b,p);for(n=new(void 0===e?Array:e)(g(p-b,0)),l=0;b<p;b++,l++)b in d&&u(n,l,d[b]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-14dcb4c3.46055300.js.map