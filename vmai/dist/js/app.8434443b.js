(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-197c27ab":"20aeadb4","chunk-191bd20c":"8b9f58fc","chunk-70e8004c":"b09da33d","chunk-a28e158e":"c0b2d404","chunk-2d0aa991":"ca87cf83","chunk-3f57577c":"ddbc1ae8","chunk-441e653d":"6b8af0b3","chunk-dec519fa":"7bbca791"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-197c27ab":1,"chunk-191bd20c":1,"chunk-70e8004c":1,"chunk-a28e158e":1,"chunk-3f57577c":1,"chunk-441e653d":1,"chunk-dec519fa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-197c27ab":"732162f4","chunk-191bd20c":"9690465f","chunk-70e8004c":"53a66540","chunk-a28e158e":"9d62a9f9","chunk-2d0aa991":"31d6cfe0","chunk-3f57577c":"1416fa88","chunk-441e653d":"a3e0ce57","chunk-dec519fa":"a1181659"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vmai/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"264e":function(e,t,n){},"2cc7":function(e,t,n){"use strict";var r=n("6dc5"),a=n.n(r);a.a},"32b8":function(e,t,n){e.exports=n.p+"img/v-mai.77888cd2.png"},"365c":function(e,t,n){"use strict";n("a737"),n("9f02");var r=n("f529"),a=n.n(r),o=n("bc3a"),c=n.n(o),i=c.a.create({baseURL:"https://vc.uiop.xyz/api",timeout:5e3});i.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),i.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){return console.log(e),console.log("err"+e),a()({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var u=i;function s(e,t){var n={parent_id:e||"",states:[1]};return t&&(n.types=[t]),u({url:"/category/list",method:"post",data:n})}n.d(t,"a",(function(){return s}))},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vue-progress-bar"),n("layout-header"),n("router-view",{key:e.keyPath}),e.showFoot?n("layout-footer"):e._e()],1)},o=[],c=(n("7f7f"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:" absolute z-10 w-full pt-2"},[e._m(0),r("div",{staticClass:"wrap"},[r("img",{staticClass:"logo cursor-pointer",attrs:{src:n("32b8"),alt:"logo"},on:{click:function(t){return e.$router.push({path:"/"})}}}),r("nav",{attrs:{id:"menu"}},e._l(e.menuList,(function(t,n){return r("li",{key:"menu"+n,staticClass:"drop"},[r("a",{class:[t.showActive?"menuActive":"",t.link.herf&&e.currentPage.indexOf(t.link.herf)>-1?"parent-active":""],on:{mouseenter:function(e){t.showActive=!0},mouseleave:function(e){t.showActive=!1}}},[e._v(e._s(t.titleZh)+"\n          "),t.children.length>0?r("i",{staticClass:"el-icon-caret-bottom"}):e._e()]),t.children.length>0?r("ul",{staticClass:"drop_menu",class:[t.showActive?"display":""],on:{mouseenter:function(e){t.showActive=!0},mouseleave:function(e){t.showActive=!1}}},e._l(t.children,(function(a,o){return r("a",{key:"menu"+n+"sub"+o,staticClass:"submenu",class:[e.currentPage===a.link.herf?"menuActive":""],on:{click:function(n){return e.clickSubMenu(t,a)}}},[e._v(e._s(a.titleZh))])})),0):e._e()])})),0)])])}),i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" w-full flex justify-end mb-4 header-tool px-6"},[n("div",{staticClass:" w-16 h-6 flex justify-center items-center"},[e._v("中文")]),n("div",{staticClass:"w-16 h-6 mx-2 flex justify-center items-center bg-black text-primary"},[e._v("\n      英文\n    ")]),n("div",{staticClass:"w-16 h-6 border flex justify-center items-center rounded border border-black"},[e._v("\n      搜索\n    ")])])}],u=(n("8e6e"),n("ac6a"),n("456d"),n("b54a"),n("96cf"),n("3b8d")),s=n("bd86"),l=n("365c"),f=n("2f62");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){return{menuList:[]}},computed:p({},Object(f["b"])(["twoLevelMenu"]),{currentPage:function(){return this.$route.path}}),created:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("category/queryTwoLevel");case 2:console.log("======TOP MENU====="),console.log(this.twoLevelMenu),this.menuList=this.twoLevelMenu;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){},methods:{clickSubMenu:function(e,t){e.showActive=!0,this.$router.push({path:t.link.herf})},display_menu:function(){var e=document.getElementsByTagName("body")[0];e.classList.contains("display_menu")?e.classList.remove("display_menu"):e.classList.add("display_menu")}}},v=d,m=(n("7fc8"),n("2877")),b=Object(m["a"])(v,c,i,!1,null,null,null),y=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-footer flex flex-col"},[n("div",{staticClass:"footer-info flex justify-between flex-1"},[e._l(e.list,(function(t,r){return n("div",{key:"botttom"+r,staticClass:" text-white"},[n("p",{staticClass:" text-font-18 mb-4"},[e._v(e._s(t.titleZh))]),n("ul",{staticClass:" text-font-14 list-none",staticStyle:{color:"#7B7B7C"}},e._l(t.children,(function(t,a){return n("li",{key:"bottom"+r+"sub"+a,staticClass:" cursor-pointer",on:{click:function(n){return e.gotoLink(t)}}},[e._v("\n          "+e._s(t.titleZh)+"\n        ")])})),0)])})),e._m(0),e._m(1)],2),n("div",{staticClass:" text-white text-font-12 text-center py-2 w-full",staticStyle:{"background-color":"#303132",color:"lightgrey"}},[e._v("\n    @ 2017 V-CAN All Right Reservered 维迈装饰集团 版权所有 沪ICP备\n    160322530号-1\n  ")])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" text-white"},[n("p",{staticClass:" text-font-18 mb-4"},[e._v("联系我们")]),n("div",{staticClass:" text-font-14 mb-2"},[n("p",[e._v("联系电话:")]),n("p",[e._v("18917974488")])]),n("div",{staticClass:" text-font-14"},[n("p",[e._v("公司地址:")]),n("p",[e._v("上海市徐汇区田林路418号B栋200233")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:" text-white"},[r("img",{staticClass:" mb-2",attrs:{src:n("f09c"),alt:"",width:"85",height:"85"}}),r("p",[e._v("关注维迈公众号"),r("br"),e._v("获取最新行业资讯")])])}];n("5df3");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={data:function(){return{list:[]}},created:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getList(null,2);case 2:return t=e.sent,console.log("====oneLevel===="),console.log(t),n=t.map((function(e){return o.getList(e.id)})),e.next=8,Promise.all(n);case 8:r=e.sent,a=[],t.forEach((function(e,t){a.push(O({},e,{children:r[t]}))})),this.list=a;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getList:function(e,t){return Object(l["a"])(e,t).then((function(e){console.log("====ret===="),console.log(e);var t=[];return t=e.result?e.result.map((function(e){return{id:e.id,titleZh:e.title.zh,href:e.link.herf}})):[],t}))},gotoLink:function(e){location.href=e.href}}},_=E,L=(n("2cc7"),Object(m["a"])(_,g,w,!1,null,null,null)),j=L.exports,P={name:"app",components:{LayoutFooter:j,LayoutHeader:y},data:function(){return{showFoot:!0,keyPath:""}},watch:{$route:function(e){this.keyPath=e.path,"works"===e.name?this.showFoot=!1:this.showFoot=!0}},mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,n,r){if(void 0!==t.meta.progress){var a=t.meta.progress;e.$Progress.parseMeta(a)}e.$Progress.start(),r()})),this.$router.afterEach((function(t,n){e.$Progress.finish()}))}},x=P,D=(n("a5d2"),Object(m["a"])(x,a,o,!1,null,null,null)),C=D.exports,S=n("8c4f"),T=[{name:"home",path:"/home",alias:"/",component:function(){return Promise.all([n.e("chunk-197c27ab"),n.e("chunk-a28e158e")]).then(n.bind(null,"f5b8"))}},{name:"works",path:"/works/:id",component:function(){return Promise.all([n.e("chunk-197c27ab"),n.e("chunk-70e8004c")]).then(n.bind(null,"943d"))}},{name:"company-profile",path:"/about/company-profile",component:function(){return n.e("chunk-dec519fa").then(n.bind(null,"8e74"))}},{name:"company-promotion",path:"/about/company-promotion",component:function(){return n.e("chunk-3f57577c").then(n.bind(null,"c032"))}},{name:"certfication",path:"/about/certfication",component:function(){return n.e("chunk-441e653d").then(n.bind(null,"1fb1"))}},{name:"team",path:"/about/team",component:function(){return Promise.all([n.e("chunk-197c27ab"),n.e("chunk-191bd20c")]).then(n.bind(null,"4913"))}},{name:"dynamics",path:"/dynamics",component:function(){return n.e("chunk-2d0aa991").then(n.bind(null,"1260"))}},{path:"*",redirect:"/home"}];r["default"].use(S["a"]);var A=new S["a"]({routes:T}),R=A,$=n("26b9"),M=n.n($),N={oneLevelData:function(e){return e.category.oneLevelData},twoLevelMenu:function(e){return e.category.twoLevelData},threeLevelMenu:function(e){return e.category.threeLevelData},threeLevelDataMap:function(e){return e.category.threeLevelDataMap},bannerData:function(e){return e.category.bannerData},layoutHorizFourData:function(e){return e.category.layoutHorizFourData}},z=N,F=(n("ac4d"),n("8a81"),n("75fc"));n("55dd");function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={oneLevelData:null,twoLevelData:null,threeLevelData:null,threeLevelDataMap:null,bannerData:null,layoutHorizFourData:[]},V={SET_ONELEVEL:function(e,t){e.oneLevelData=t},SET_TWOLEVEL:function(e,t){e.twoLevelData=t},SET_THREELEVEL:function(e,t){e.threeLevelData=t},SET_THREELEVEL_MAP:function(e,t){e.threeLevelDataMap=t},SET_BANNER:function(e,t){e.bannerData=t},SET_layoutHorizFourData:function(e,t){e.layoutHorizFourData=t}};function Z(e,t){return Object(l["a"])(e,t).then((function(e){var t=e.result,n=[];return t&&(n=t.map((function(e){return B({titleZh:e.title.zh,linker:e.link.href},e)}))),n}))}var U={getBannerData:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.bannerData){e.next=5;break}return e.abrupt("return",r.bannerData);case 5:return e.next=7,Z(null,4);case 7:return a=e.sent,n("SET_BANNER",a.map((function(e){return B({},e,{titleZh:e.title.zh,contentZh:e.content.zh,imageUrl:e.bg.md})}))),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),queryOneLevel:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.oneLevelData){e.next=5;break}return e.abrupt("return",r.oneLevelData);case 5:return e.next=7,Z(null,1);case 7:return a=e.sent,n("SET_ONELEVEL",a),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),queryTwoLevel:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,c,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.dispatch,a=t.state,!a.twoLevelData){e.next=5;break}return e.abrupt("return",a.twoLevelData);case 5:return e.next=7,r("queryOneLevel");case 7:return o=e.sent,c=o.map((function(e){return e.id})).map((function(e){return Z(e)})),e.next=11,Promise.all(c);case 11:return i=e.sent,u=[],o.forEach((function(e,t){u.push(B({},e,{children:i[t].sort((function(e,t){return t.weight-e.weight})).map((function(e){return B({},e,{showActive:!1})})),showActive:!1}))})),n("SET_TWOLEVEL",u),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),queryThreeLevel:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,c,i,u,s,l,f,h,p,d,v,m,b,y,g,w,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.dispatch,a=t.state,!a.threeLevelData){e.next=5;break}return e.abrupt("return",a.threeLevelData);case 5:return e.next=7,r("queryTwoLevel");case 7:return o=e.sent,c=[],o.forEach((function(e){e.children.length>0&&(c=[].concat(Object(F["a"])(c),Object(F["a"])(e.children)))})),i=c.map((function(e){return e.id})).map((function(e){return Z(e)})),e.next=13,Promise.all(i);case 13:for(u=e.sent,s={},l=!0,f=!1,h=void 0,e.prev=18,p=c[Symbol.iterator]();!(l=(d=p.next()).done);l=!0)v=d.value,s[v.id]=v;e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](18),f=!0,h=e.t0;case 26:e.prev=26,e.prev=27,l||null==p.return||p.return();case 29:if(e.prev=29,!f){e.next=32;break}throw h;case 32:return e.finish(29);case 33:return e.finish(26);case 34:for(w in m=u.filter((function(e){return e.length>0})),b=[],m.forEach((function(e){b=[].concat(Object(F["a"])(b),Object(F["a"])(e))})),y={},b.forEach((function(e){y[e.parent_id]||(y[e.parent_id]=[]),y[e.parent_id].push(e)})),n("SET_THREELEVEL_MAP",y),g=[],y)g.push({id:w,name:s[w].titleZh,children:y[w]});return k=g.map((function(e){return 1===e.layout})),n("SET_layoutHorizFourData",k),n("SET_THREELEVEL",g),e.abrupt("return",g);case 46:case"end":return e.stop()}}),e,null,[[18,22,26,34],[27,,29,33]])})));function t(t){return e.apply(this,arguments)}return t}()},I={namespaced:!0,state:q,mutations:V,actions:U};r["default"].use(f["a"]);var J=new f["a"].Store({modules:{category:I},getters:z}),W=J;r["default"].config.productionTip=!1;var K={color:"#2e7d32",failedColor:"#874b4b",thickness:"2px",transition:{speed:"0.4s",opacity:"0s",termination:300},autoRevert:!0,location:"top",inverse:!1};r["default"].use(M.a,K),r["default"].directive("click-outside",{bind:function(){var e=this;this.event=function(t){return e.vm.$emit(e.expression,t)},this.el.addEventListener("click",this.stopProp),document.body.addEventListener("click",this.event)},unbind:function(){this.el.removeEventListener("click",this.stopProp),document.body.removeEventListener("click",this.event)},stopProp:function(e){e.stopPropagation()}}),new r["default"]({render:function(e){return e(C)},router:R,store:W}).$mount("#app")},"6dc5":function(e,t,n){},"7fc8":function(e,t,n){"use strict";var r=n("264e"),a=n.n(r);a.a},"9f02":function(e,t,n){},a5d2:function(e,t,n){"use strict";var r=n("f809"),a=n.n(r);a.a},a737:function(e,t,n){},f09c:function(e,t,n){e.exports=n.p+"img/ewm.cc4e7d94.png"},f809:function(e,t,n){}});
//# sourceMappingURL=app.8434443b.js.map