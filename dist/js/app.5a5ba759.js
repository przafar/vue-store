(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-store/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"1fe4":function(e,t,n){},"2f8d":function(e,t,n){},"30ce":function(e,t,n){"use strict";var r=n("eb66"),a=n.n(r);a.a},"37e7":function(e,t,n){"use strict";var r=n("4336"),a=n.n(r);a.a},"3a23":function(e,t,n){},4336:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("ul",{staticClass:"header"},[n("router-link",{attrs:{to:"/",tag:"li"}},[n("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/projects/max_808/065fea46998397.Y3JvcCwyMTgzLDE3MDksNDgsMA.png",alt:""}})]),n("router-link",{staticClass:"store",attrs:{to:"/Store",tag:"li"}},[n("Counter",{attrs:{updateCount:e.updated}})],1)],1),n("hr"),n("ul",{staticClass:"gender"},[n("router-link",{attrs:{to:"/",tag:"li"}},[n("h4",[e._v("MEN")])]),n("router-link",{attrs:{to:"/Women",tag:"li"}},[n("h4",[e._v("WOMEN")])])],1),n("hr"),n("router-view",{key:e.updated+e.count,on:{created:e.updatedCounter}}),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("li",{staticClass:"info"},[n("p",[e._v("© 2020 Nike, Inc. All Rights Reserved")])]),n("li",{staticClass:"guide"},[n("a",{attrs:{href:"#"}},[e._v("Guides")]),n("a",{attrs:{href:"#"}},[e._v("Terms of Sale")]),n("a",{attrs:{href:"#"}},[e._v("Terms of Use")]),n("a",{attrs:{href:"#"}},[e._v("Privacy Policy")])])])}],o=(n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("i",[n("svg",{staticClass:"bi bi-bucket-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z","clip-rule":"evenodd"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42z","clip-rule":"evenodd"}})])]),n("p",[e._v(e._s(e.updateCount))])])},c=[],u={props:["updateCount"],data:function(){return{}},methods:{}},l=u,d=(n("37e7"),n("2877")),f=Object(d["a"])(l,i,c,!1,null,"975928d8",null),h=f.exports,p={name:"App",data:function(){return{shoes:[],updated:0,count:0}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("basketShoes");case 2:e.shoes=t.sent,e.updated=e.shoes.length;case 4:case"end":return t.stop()}}),t)})))()},components:{Counter:h},methods:{updatedCounter:function(){this.updated++}}},m=p,v=(n("5eed"),Object(d["a"])(m,a,s,!1,null,"46639f83",null)),b=v.exports,g=n("9483");Object(g["a"])("".concat("/vue-store/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.loading?n("Loader",{staticClass:"loading"}):e._e(),n("ul",{staticClass:"allposts"},e._l(e.shoes,(function(t){return n("li",{key:t.id,attrs:{value:t.id}},[n("router-link",{key:t.id,staticClass:"shoes-side",attrs:{to:{name:"Add",params:{id:t.id}}}},[n("div",{staticClass:"shoes"},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.image,alt:""}})]),n("a",{staticClass:"post-cost"},[n("p",[e._v(e._s(t.name))])]),n("div",{staticClass:"posts"},[n("h5",[e._v(e._s(t.cost)+"$")])])])])],1)})),0)],1)},_=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lds-dual-ring"})},x=[],C=(n("f865"),{}),O=Object(d["a"])(C,k,x,!1,null,null,null),j=O.exports,q={data:function(){return{shoes:[],loading:!0}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchShoes");case 2:e.shoes=t.sent,e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},computed:{},components:{Loader:j}},R=q,$=(n("779d"),Object(d["a"])(R,w,_,!1,null,"1ee041ba",null)),E=$.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("ul",e._l(e.allPosts,(function(t){return n("router-link",{key:t.id,attrs:{to:"/",tag:"li"}},[n("h2",[e._v(e._s(t.name))]),n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.image,alt:""}})])])})),1)])},A=[],M=n("2f62"),P={data:function(){return{cars:[{name:"zafar"},{name:"munis"},{name:"qummi"}]}},computed:Object(M["b"])(["allPosts"]),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("fetchPosts");case 1:case"end":return t.stop()}}),t)})))()}},z=P,B=(n("30ce"),Object(d["a"])(z,S,A,!1,null,"8665e02e",null)),N=B.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("ul",[n("form",{on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"addside"},[n("li",{staticClass:"col-4 addphoto"},[n("img",{attrs:{src:e.shoe.image,alt:""}})]),n("li",{staticClass:"col-4 addphoto"},[n("img",{attrs:{src:e.shoe.front,alt:""}})]),n("li",{staticClass:"col-4 addinformation"},[n("h6",[e._v("Men's Running Shoe")]),n("p",[e._v(e._s(e.shoe.name)+" "),n("b")]),n("h5",[e._v(e._s(e.shoe.cost)+"$")]),e._v(" "),n("br"),e.basket.quantity>0?n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.basket.quantity,expression:"basket.quantity"}],staticClass:"select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.basket,"quantity",t.target.multiple?n:n[0])}}},e._l(e.quantityArray,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]):n("b",[e._v("You do not have this shoes")]),n("button",{staticClass:"btn add-cart",on:{click:e.submitHandler}},[e._v("Add to Cart")])]),e._m(0),n("div")])])])])},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view"},[n("p",[e._v("The Nike Air Force 1 GORE-TEX Low retools the classic Air Force 1 with a street-approved design that meets the standards of GORE-TEX waterproof technology. It features water-wicking flat laces, a GORE-TEX bootie and GORE-TEX branding on the heel.")])])}],L=(n("b0c0"),{name:"Add",data:function(){return{shoe:[],basket:[],quantity:1,selected:[],quantityArray:[]}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.params.id,t.next=3,e.$store.dispatch("fetchShoesById",n);case 3:return e.shoe=t.sent,t.next=6,e.$store.dispatch("fetchBasketById",n);case 6:return e.basket=t.sent,t.next=9,e.$store.dispatch("basketShoes");case 9:for(e.shoes=t.sent,r=1;r<=10;r++)e.quantityArray.push(r);e.$props.basket.quantity>1&&(e.selected=e.$props.basket.quantity);case 12:case"end":return t.stop()}}),t)})))()},methods:{submitHandler:function(){this.m1()},m1:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={name:e.shoe.name,cost:e.shoe.cost,image:e.shoe.image,quantity:e.basket.quantity+=1,id:e.shoe.name},r={name:e.shoe.name,cost:e.shoe.cost,image:e.shoe.image,quantity:e.quantity,id:e.shoe.name},e.basket.name!==e.shoe.name){t.next=7;break}return t.next=5,e.$store.dispatch("updateShoes",n);case 5:t.next=9;break;case 7:return t.next=9,e.$store.dispatch("updateShoes",r);case 9:e.$emit("created");case 10:case"end":return t.stop()}}),t)})))()}}}),H=L,V=(n("81d1"),Object(d["a"])(H,I,T,!1,null,"2590fb86",null)),D=V.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("div",{staticClass:"basket"},e._l(e.shoes,(function(t,r){return n("ul",{key:r,staticClass:"modal-post",attrs:{value:t.id}},[n("li",{staticClass:"modal-image"},[n("img",{attrs:{src:t.image,alt:""}})]),n("li",{staticClass:"modal-information"},[n("h5",[e._v(e._s(t.name))]),n("p",[e._v(e._s(t.cost)+"$ Quantity: "),n("b",[e._v(e._s(t.quantity))])]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"shoe.quantity"}],staticClass:"select",on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"quantity",n.target.multiple?r:r[0])}}},e._l(e.quantityArray,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),n("h5",[e._v("Become a Nike Member for fast and free shipping")])]),n("li",{staticClass:"remove",on:{click:function(t){return e.removeShoes(r)}}},[n("button",{staticClass:"btn"},[n("i",[n("svg",{staticClass:"bi bi-trash",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z","clip-rule":"evenodd"}})])])])])])})),0),n("div",{staticClass:"value"},[n("p",[e._v("Summary")]),n("p",[e._v("Do you have a Promo Code?")]),n("p",[e._v("Quantity: "+e._s(e.quantity))]),n("p",[e._v("Estimated Shipping & Handling")]),n("hr"),n("h5",[e._v("Total: "+e._s(e.total)+"$")]),n("hr"),n("button",{staticClass:"pay"},[e._v("Checout")])])])},F=[],W=(n("4160"),n("13d5"),n("a434"),n("a9e3"),n("b680"),n("159b"),{data:function(){return{shoes:[],shoe:[],selected:[],quantityArray:[],cart:[]}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("basketShoes");case 2:for(e.shoes=t.sent,n=1;n<=10;n++)e.quantityArray.push(n);e.$props.shoe.quantity>1&&(e.selected=e.$props.shoe.quantity);case 5:case"end":return t.stop()}}),t)})))()},computed:{total:function(){return this.shoes.reduce((function(e,t){return e+Number(t.cost)*t.quantity}),0).toFixed(1)},quantity:function(){var e=0;return this.shoes.forEach((function(t){e+=t.quantity})),e}},methods:{removeShoes:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.shoes.splice(e,1),n.next=3,t.$store.dispatch("removeCart",e);case 3:case"end":return n.stop()}}),n)})))()}}}),X=W,Y=(n("ccc8"),Object(d["a"])(X,G,F,!1,null,"32c4af16",null)),J=Y.exports;r["default"].use(y["a"]);var Q=[{path:"/",name:"Home",component:E},{path:"/Women",name:"Women",component:N},{path:"/Add/:id",name:"Add",component:D},{path:"/store",name:"Store",component:J}],U=new y["a"]({mode:"history",base:"/vue-store/",routes:Q}),K=U,Z=(n("b64b"),n("5530")),ee=n("59ca"),te=n.n(ee),ne={state:{}},re={mutations:{loadProducts:function(e,t){e.products=t}}},ae={getters:{products:function(e){return e.products}}};r["default"].use(M["a"]);var se,oe=new M["a"].Store({state:{products:[],cart:[]},mutations:{},actions:{fetchShoes:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,te.a.database().ref("/shoes/men").once("value");case 3:return r=t.sent.val(),a=[],Object.keys(r).forEach((function(e){a.push({name:r[e].name,cost:r[e].cost,image:r[e].image,front:r[e].front,quantity:r[e].quantity,id:e}),n("loadProducts",r)})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},fetchShoesById:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,te.a.database().ref("/shoes/men").child(t).once("value");case 4:if(n.t0=n.sent.val(),n.t0){n.next=7;break}n.t0={};case 7:return a=n.t0,n.abrupt("return",Object(Z["a"])({},a,{id:t}));case 11:throw n.prev=11,n.t1=n["catch"](1),r("setError",n.t1),n.t1;case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},fetchBasketById:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,te.a.database().ref("/shoes/basket").child(t).once("value");case 4:if(n.t0=n.sent.val(),n.t0){n.next=7;break}n.t0={};case 7:return a=n.t0,n.abrupt("return",Object(Z["a"])({},a,{id:t}));case 11:throw n.prev=11,n.t1=n["catch"](1),r("setError",n.t1),n.t1;case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},removeCart:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,te.a.database().ref("/shoes/men").once("value");case 4:a=n.sent.child(t),a.remove(),n.next=12;break;case 8:throw n.prev=8,n.t0=n["catch"](1),r("setError",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()},basketShoes:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,te.a.database().ref("/shoes/basket").once("value");case 4:return r=t.sent.val(),a=[],Object.keys(r).forEach((function(e){return a.push({name:r[e].name,cost:r[e].cost,image:r[e].image,quantity:r[e].quantity,id:e}),a})),t.abrupt("return",a);case 10:throw t.prev=10,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},updateShoes:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.id,s=t.quantity,o=t.cost,i=t.image,c=t.name,n.prev=2,n.next=5,te.a.database().ref("/shoes/basket").child(a).update({quantity:s,cost:o,image:i,name:c});case 5:n.next=11;break;case 7:throw n.prev=7,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[2,7]])})))()}},modules:{state:ne,mutations:re,getters:ae},getters:{}}),ie=n("5f5b"),ce=n("b1e0"),ue=n("28dd"),le=n("1881"),de=n.n(le);n("ea7b"),n("66ce");r["default"].use(de.a),r["default"].use(ie["a"]),r["default"].use(ue["a"]),r["default"].use(ce["a"]),r["default"].config.productionTip=!1,te.a.initializeApp({apiKey:"AIzaSyDqB6_6PdyNnItzGarcLkjxrulpMZeOYv8",authDomain:"vue-store-1.firebaseapp.com",databaseURL:"https://vue-store-1.firebaseio.com",projectId:"vue-store-1",storageBucket:"vue-store-1.appspot.com",messagingSenderId:"768872711485",appId:"1:768872711485:web:863c35b1aa062f57de3154",measurementId:"G-LYEMB2SSV4"}),te.a.auth().onAuthStateChanged((function(){se||(se=new r["default"]({router:K,store:oe,render:function(e){return e(b)}}).$mount("#app"))}))},"5eed":function(e,t,n){"use strict";var r=n("f8d4"),a=n.n(r);a.a},"779d":function(e,t,n){"use strict";var r=n("2f8d"),a=n.n(r);a.a},"81d1":function(e,t,n){"use strict";var r=n("3a23"),a=n.n(r);a.a},ccc8:function(e,t,n){"use strict";var r=n("fbb1"),a=n.n(r);a.a},eb66:function(e,t,n){},f865:function(e,t,n){"use strict";var r=n("1fe4"),a=n.n(r);a.a},f8d4:function(e,t,n){},fbb1:function(e,t,n){}});
//# sourceMappingURL=app.5a5ba759.js.map