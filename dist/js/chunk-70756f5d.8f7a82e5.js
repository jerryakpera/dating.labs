(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70756f5d"],{"45f5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainBox"},[t.loading?n("Loading",{attrs:{variant:"light"}}):t._e(),n("div",{attrs:{id:"snackbar"}},[t._v(t._s(t.snackbar.msg))]),t.loading?t._e():n("div",{staticClass:"centerBox"},[n("h6",[t._v("Your account has been created. Login to continue")]),n("b-form",{on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.logUserIn())}}},[n("b-input-group",{staticClass:"mb-2"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-icon",{staticClass:"icon",attrs:{icon:"person"}})],1),n("b-form-input",{attrs:{type:"text",placeholder:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),n("b-input-group",{staticClass:"mb-2"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-icon",{staticClass:"icon",attrs:{icon:"unlock"}})],1),n("b-form-input",{attrs:{type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),n("button",{staticClass:"button flat main",attrs:{type:"button"},on:{click:function(e){return t.logUserIn()}}},[t._v("Continue")]),n("p",{staticClass:"link main"})],1)],1)],1)},r=[],s=(n("d3b7"),n("ac1f"),n("5319"),n("5530")),i=n("2f62"),o=n("6fbe"),c={data:function(){return{loading:!1,snackbar:{msg:"",color:""},user:{email:"",password:""},userDetails:{}}},components:{Loading:function(){return n.e("chunk-cad9cb52").then(n.bind(null,"ecba"))}},methods:Object(s["a"])({},Object(i["b"])(["changePhase"]),{next:function(){this.changePhase("next")},back:function(){this.changePhase("prev")},showSnackbar:function(){var t=document.getElementById("snackbar");t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},logUserIn:function(){var t=this;this.loading=!0;var e=Object(s["a"])({},this.userDetails,{email:this.user.email,password:this.user.password});this.$store.dispatch("authenticate",e).then((function(){t.loading=!1,t.next()})).catch((function(e){t.loading=!1,console.log(e)}))}}),created:function(){this.userDetails=o.decodeJSON(o.storage.get("userDetails"))}},u=c,l=(n("d917"),n("2877")),d=Object(l["a"])(u,a,r,!1,null,"d9f9e4ca",null);e["default"]=d.exports},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),s=n("7b0b"),i=n("50c4"),o=n("a691"),c=n("1d80"),u=n("8aa5"),l=n("14c3"),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var b=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,k=b?"$":"$0";return[function(n,a){var r=c(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!b&&m||"string"===typeof a&&-1===a.indexOf(k)){var s=n(e,t,this,a);if(s.done)return s.value}var c=r(t),h=String(this),p="function"===typeof a;p||(a=String(a));var v=c.global;if(v){var x=c.unicode;c.lastIndex=0}var E=[];while(1){var _=l(c,h);if(null===_)break;if(E.push(_),!v)break;var C=String(_[0]);""===C&&(c.lastIndex=u(h,i(c.lastIndex),x))}for(var S="",$=0,y=0;y<E.length;y++){_=E[y];for(var I=String(_[0]),P=d(f(o(_.index),h.length),0),D=[],O=1;O<_.length;O++)D.push(g(_[O]));var U=_.groups;if(p){var A=[I].concat(D,P,h);void 0!==U&&A.push(U);var N=String(a.apply(void 0,A))}else N=w(I,h,P,D,U,a);P>=$&&(S+=h.slice($,P)+N,$=P+I.length)}return S+h.slice($)}];function w(t,n,a,r,i,o){var c=a+t.length,u=r.length,l=v;return void 0!==i&&(i=s(i),l=p),e.call(o,l,(function(e,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(c);case"<":o=i[s.slice(1,-1)];break;default:var l=+s;if(0===l)return e;if(l>u){var d=h(l/10);return 0===d?e:d<=u?void 0===r[d-1]?s.charAt(1):r[d-1]+s.charAt(1):e}o=r[l-1]}return void 0===o?"":o}))}}))},"91ee":function(t,e,n){},d917:function(t,e,n){"use strict";var a=n("91ee"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-70756f5d.8f7a82e5.js.map