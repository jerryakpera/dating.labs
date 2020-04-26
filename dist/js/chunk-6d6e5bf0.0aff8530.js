(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d6e5bf0"],{"4ef3":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mainBox"},[t.loading?e("Loading",{attrs:{variant:"light"}}):t._e(),e("div",{attrs:{id:"snackbar"}},[t._v(t._s(t.snackbar.msg))]),t.loading?t._e():e("div",{staticClass:"centerBox"},[e("h6",[t._v("Nice one! We need your phone number to set things up")]),e("b-form",{on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.submitPhone())}}},[e("b-input-group",{staticClass:"mb-3",attrs:{size:"md"}},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{staticClass:"icon",attrs:{icon:"phone"}})],1),e("b-form-input",{attrs:{type:"text",placeholder:"07 . . . "},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.submitPhone()}},model:{value:t.phone,callback:function(n){t.phone=n},expression:"phone"}})],1),e("b-row",[e("b-col",[e("router-link",{attrs:{to:"/welcome"}},[e("button",{staticClass:"iconBtn back",attrs:{type:"button"}},[e("b-icon",{staticClass:"icon",attrs:{icon:"chevron-left"}})],1)])],1),e("b-col",[e("button",{staticClass:"button main curved",attrs:{type:"button"},on:{click:function(n){return t.submitPhone()}}},[t._v("Next")])])],1),e("p",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"link main",attrs:{id:"toggle-btn"},on:{click:t.toggleModal}},[t._v(" Already have an account? Login ")])],1)],1),e("div",[e("b-modal",{ref:"loginModal",attrs:{size:"sm",centered:"","hide-footer":"",title:"Login"}},[e("Login")],1)],1)],1)},o=[],i=(e("d3b7"),e("ac1f"),e("5319"),e("5530")),r=e("2f62"),c={data:function(){return{phone:"",loading:!1,snackbar:{msg:"",color:""}}},components:{Loading:function(){return e.e("chunk-cad9cb52").then(e.bind(null,"ecba"))},Login:function(){return e.e("chunk-356cff78").then(e.bind(null,"1ac9"))}},computed:Object(i["a"])({},Object(r["c"])(["getOTPResponse","getOTP"])),methods:Object(i["a"])({},Object(r["b"])(["changePhase","makeOTPRequest"]),{next:function(){this.changePhase("next")},back:function(){this.changePhase("prev")},submitPhone:function(){var t=this;if(this.loading=!0,10!=this.phone.length)return this.snackbar.msg="Enter valid phone",this.snackbar.color="danger",this.showSnackbar(),void(this.loading=!1);this.$store.dispatch("makeOTPRequest",this.phone).then((function(){t.loading=!1,t.changePhase("next")})).catch((function(){t.loading=!1,t.snackbar.msg="Couldnt connect. Try again",t.snackbar.color="danger",t.showSnackbar()}))},showSnackbar:function(){var t=document.getElementById("snackbar");t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},toggleModal:function(){this.$refs["loginModal"].toggle("#toggle-btn")}})},s=c,l=(e("617d"),e("2877")),u=Object(l["a"])(s,a,o,!1,null,"18f53f56",null);n["default"]=u.exports},5319:function(t,n,e){"use strict";var a=e("d784"),o=e("825a"),i=e("7b0b"),r=e("50c4"),c=e("a691"),s=e("1d80"),l=e("8aa5"),u=e("14c3"),d=Math.max,h=Math.min,f=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,n,e,a){var p=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,k=p?"$":"$0";return[function(e,a){var o=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,a):n.call(String(o),e,a)},function(t,a){if(!p&&m||"string"===typeof a&&-1===a.indexOf(k)){var i=e(n,t,this,a);if(i.done)return i.value}var s=o(t),f=String(this),g="function"===typeof a;g||(a=String(a));var b=s.global;if(b){var w=s.unicode;s.lastIndex=0}var x=[];while(1){var E=u(s,f);if(null===E)break;if(x.push(E),!b)break;var P=String(E[0]);""===P&&(s.lastIndex=l(f,r(s.lastIndex),w))}for(var _="",C=0,S=0;S<x.length;S++){E=x[S];for(var O=String(E[0]),$=d(h(c(E.index),f.length),0),T=[],L=1;L<E.length;L++)T.push(v(E[L]));var N=E.groups;if(g){var A=[O].concat(T,$,f);void 0!==N&&A.push(N);var M=String(a.apply(void 0,A))}else M=y(O,f,$,T,N,a);$>=C&&(_+=f.slice(C,$)+M,C=$+O.length)}return _+f.slice(C)}];function y(t,e,a,o,r,c){var s=a+t.length,l=o.length,u=b;return void 0!==r&&(r=i(r),u=g),n.call(c,u,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(s);case"<":c=r[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var d=f(u/10);return 0===d?n:d<=l?void 0===o[d-1]?i.charAt(1):o[d-1]+i.charAt(1):n}c=o[u-1]}return void 0===c?"":c}))}}))},"617d":function(t,n,e){"use strict";var a=e("8fc7"),o=e.n(a);o.a},"8fc7":function(t,n,e){}}]);
//# sourceMappingURL=chunk-6d6e5bf0.0aff8530.js.map