(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-197c27ab":"20aeadb4","chunk-5564c271":"02548752","chunk-eb9156d8":"b38e026c","chunk-3f57577c":"ddbc1ae8","chunk-42f8d412":"a7e2e763","chunk-dec519fa":"7bbca791"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-197c27ab":1,"chunk-5564c271":1,"chunk-eb9156d8":1,"chunk-3f57577c":1,"chunk-42f8d412":1,"chunk-dec519fa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-197c27ab":"732162f4","chunk-5564c271":"f1986e91","chunk-eb9156d8":"53a66540","chunk-3f57577c":"1416fa88","chunk-42f8d412":"dc101558","chunk-dec519fa":"a1181659"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vmai/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"264e":function(e,t,n){},"2cc7":function(e,t,n){"use strict";var r=n("6dc5"),a=n.n(r);a.a},"32b8":function(e,t,n){e.exports=n.p+"img/v-mai.77888cd2.png"},"365c":function(e,t,n){"use strict";n("a737"),n("9f02");var r=n("f529"),a=n.n(r),o=n("bc3a"),i=n.n(o),c=i.a.create({baseURL:"https://vc.uiop.xyz/api",timeout:5e3});c.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return t}),(function(e){return console.log(e),console.log("err"+e),a()({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var u=c;function s(e){return u({url:"/category/list",method:"post",data:{parent_id:e||"",states:[1]}})}n.d(t,"a",(function(){return s}))},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vue-progress-bar"),n("layout-header"),n("router-view",{key:e.keyPath}),e.showFoot?n("layout-footer"):e._e()],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:" absolute z-10 w-full pt-2"},[e._m(0),r("div",{staticClass:"wrap"},[r("img",{staticClass:"logo cursor-pointer",attrs:{src:n("32b8"),alt:"logo"},on:{click:function(t){return e.$router.push({path:"/"})}}}),r("nav",{attrs:{id:"menu"}},e._l(e.twoLevelMenu,(function(t,n){return r("li",{key:"menu"+n,staticClass:"drop"},[r("a",{class:[t.showActive?"menuActive":""],attrs:{href:t.linker},on:{mouseenter:function(n){return e.display_drop_menu(t)},mouseleave:function(n){return e.hide_drop_menu(t)}}},[e._v(e._s(t.titleZh)+"\n          "),t.children.length>0?r("i",{staticClass:"el-icon-caret-bottom"}):e._e()]),t.children.length>0?r("ul",{staticClass:"drop_menu",class:[t.showActive?"display":""],on:{mouseenter:function(n){return e.display_drop_menu(t)},mouseleave:function(n){return e.hide_drop_menu(t)}}},e._l(t.children,(function(a,o){return r("a",{key:"menu"+n+"sub"+o,staticClass:"submenu",on:{click:function(n){return e.clickSubMenu(t,a)}}},[e._v(e._s(a.titleZh))])})),0):e._e()])})),0)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" w-full flex justify-end mb-4 header-tool px-6"},[n("div",{staticClass:" w-16 h-6 flex justify-center items-center"},[e._v("中文")]),n("div",{staticClass:"w-16 h-6 mx-2 flex justify-center items-center bg-black text-primary"},[e._v("\n      英文\n    ")]),n("div",{staticClass:"w-16 h-6 border flex justify-center items-center rounded border border-black"},[e._v("\n      搜索\n    ")])])}],u=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),s=n("bd86"),l=n("365c"),f=n("2f62");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){return{menuList:[]}},computed:h({},Object(f["b"])(["twoLevelMenu"])),created:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("category/queryTwoLevel");case 2:console.log("======threeLevelMenu====="),console.log(this.twoLevelMenu);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){},methods:{clickSubMenu:function(e,t){"作品案例"===e.title.zh&&this.$router.push({path:"/campus/".concat(t.id)}),"关于维迈"===e.title.zh&&("集团简介"===t.title.zh&&this.$router.push({path:"/company-profile"}),"企业宣传片"===t.title.zh&&this.$router.push({path:"/company-promotion"}),"荣誉资质"===t.title.zh&&this.$router.push({path:"/certfication"}))},display_menu:function(){var e=document.getElementsByTagName("body")[0];e.classList.contains("display_menu")?e.classList.remove("display_menu"):e.classList.add("display_menu")},hide_drop_menu:function(e){e.showActive=!1},display_drop_menu:function(e){e.showActive=!0}}},v=d,m=(n("7fc8"),n("2877")),b=Object(m["a"])(v,i,c,!1,null,null,null),y=b.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout-footer flex flex-col"},[r("div",{staticClass:"footer-info flex justify-between flex-1"},[r("div",{staticClass:" text-white"},[r("p",{staticClass:" text-font-18 mb-4"},[e._v("超链模块1")]),r("ul",{staticClass:" text-font-14 list-none",staticStyle:{color:"#7B7B7C"}},[r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")])])]),r("div",{staticClass:"split-line"}),r("div",{staticClass:" text-white"},[r("p",{staticClass:" text-font-18 mb-4"},[e._v("超链模块1")]),r("ul",{staticClass:" text-font-14 list-none",staticStyle:{color:"#7B7B7C"}},[r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")])])]),r("div",{staticClass:"split-line"}),r("div",{staticClass:" text-white"},[r("p",{staticClass:" text-font-18 mb-4"},[e._v("超链模块1")]),r("ul",{staticClass:" text-font-14 list-none",staticStyle:{color:"#7B7B7C"}},[r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")]),r("li",[e._v("超链地址1")])])]),r("div",{staticClass:"split-line"}),r("div",{staticClass:" text-white"},[r("p",{staticClass:" text-font-18 mb-4"},[e._v("联系我们")]),r("div",{staticClass:" text-font-14 mb-2"},[r("p",[e._v("联系电话:")]),r("p",[e._v("18917974488")])]),r("div",{staticClass:" text-font-14"},[r("p",[e._v("公司地址:")]),r("p",[e._v("上海市徐汇区田林路418号B栋200233")])])]),r("div",{staticClass:" text-white"},[r("img",{staticClass:" mb-2",attrs:{src:n("f09c"),alt:"",width:"85",height:"85"}}),r("p",[e._v("关注维迈公众号"),r("br"),e._v("获取最新行业资讯")])])]),r("div",{staticClass:" text-white text-font-12 text-center py-2 w-full",staticStyle:{"background-color":"#303132",color:"lightgrey"}},[e._v("\n    @ 2017 V-CAN All Right Reservered 维迈装饰集团 版权所有 沪ICP备\n    160322530号-1\n  ")])])}],w={},E=w,k=(n("2cc7"),Object(m["a"])(E,g,_,!1,null,null,null)),L=k.exports,O={name:"app",components:{LayoutFooter:L,LayoutHeader:y},data:function(){return{showFoot:!0,keyPath:""}},watch:{$route:function(e){this.keyPath=e.path,"/campus"===e.path?this.showFoot=!1:this.showFoot=!0}},mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach((function(t,n,r){if(void 0!==t.meta.progress){var a=t.meta.progress;e.$Progress.parseMeta(a)}e.$Progress.start(),r()})),this.$router.afterEach((function(t,n){e.$Progress.finish()}))}},x=O,j=(n("a5d2"),Object(m["a"])(x,a,o,!1,null,null,null)),P=j.exports,C=n("8c4f"),D=[{name:"home",path:"/home",alias:"/",component:function(){return Promise.all([n.e("chunk-197c27ab"),n.e("chunk-5564c271")]).then(n.bind(null,"f5b8"))}},{name:"campus",path:"/campus/:id",component:function(){return Promise.all([n.e("chunk-197c27ab"),n.e("chunk-eb9156d8")]).then(n.bind(null,"22a6"))}},{name:"company-profile",path:"/company-profile",component:function(){return n.e("chunk-dec519fa").then(n.bind(null,"8e74"))}},{name:"company-promotion",path:"/company-promotion",component:function(){return n.e("chunk-3f57577c").then(n.bind(null,"c032"))}},{name:"certfication",path:"/certfication",component:function(){return n.e("chunk-42f8d412").then(n.bind(null,"1fb1"))}},{path:"*",redirect:"/home"}];r["default"].use(C["a"]);var S=new C["a"]({routes:D}),T=S,$=n("26b9"),M=n.n($),A={oneLevelData:function(e){return e.category.oneLevelData},twoLevelMenu:function(e){return e.category.twoLevelData},threeLevelMenu:function(e){return e.category.threeLevelData},threeLevelDataMap:function(e){return e.category.threeLevelDataMap},bannerData:function(e){return e.category.bannerData},layoutHorizFourData:function(e){return e.category.layoutHorizFourData}},R=A,z=(n("ac4d"),n("8a81"),n("5df3"),n("55dd"),n("7f7f"),n("75fc"));n("b54a");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={oneLevelData:null,twoLevelData:null,threeLevelData:null,threeLevelDataMap:null,bannerData:null,layoutHorizFourData:[]},H={SET_ONELEVEL:function(e,t){e.oneLevelData=t},SET_TWOLEVEL:function(e,t){e.twoLevelData=t},SET_THREELEVEL:function(e,t){e.threeLevelData=t},SET_THREELEVEL_MAP:function(e,t){e.threeLevelDataMap=t},SET_BANNER:function(e,t){e.bannerData=t},SET_layoutHorizFourData:function(e,t){e.layoutHorizFourData=t}};function q(e){return Object(l["a"])(e).then((function(e){var t=e.result,n=[];return t&&(n=t.map((function(e){return N({titleZh:e.title.zh,linker:e.link.href},e)}))),n}))}var V={queryOneLevel:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.oneLevelData){e.next=5;break}return e.abrupt("return",r.oneLevelData);case 5:return e.next=7,q(null);case 7:return a=e.sent,o=Object(z["a"])(a),i=o.filter((function(e){return"banner"===e.name})),n("SET_BANNER",i.map((function(e){return N({},e,{titleZh:e.title.zh,contentZh:e.content.zh,imageUrl:e.bg.md})}))),a=a.filter((function(e){return"banner"!==e.name})),a.sort((function(e,t){return t.weight-e.weight})),n("SET_ONELEVEL",a),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),queryTwoLevel:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.dispatch,a=t.state,!a.twoLevelData){e.next=5;break}return e.abrupt("return",a.twoLevelData);case 5:return e.next=7,r("queryOneLevel");case 7:return o=e.sent,i=o.map((function(e){return e.id})).map((function(e){return q(e)})),e.next=11,Promise.all(i);case 11:return c=e.sent,u=[],o.forEach((function(e,t){u.push(N({},e,{children:c[t].sort((function(e,t){return t.weight-e.weight})),showActive:!1}))})),n("SET_TWOLEVEL",u),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),queryThreeLevel:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,c,u,s,l,f,p,h,d,v,m,b,y,g,_,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.dispatch,a=t.state,!a.threeLevelData){e.next=5;break}return e.abrupt("return",a.threeLevelData);case 5:return e.next=7,r("queryTwoLevel");case 7:return o=e.sent,i=[],o.forEach((function(e){e.children.length>0&&(i=[].concat(Object(z["a"])(i),Object(z["a"])(e.children)))})),c=i.map((function(e){return e.id})).map((function(e){return q(e)})),e.next=13,Promise.all(c);case 13:for(u=e.sent,s={},l=!0,f=!1,p=void 0,e.prev=18,h=i[Symbol.iterator]();!(l=(d=h.next()).done);l=!0)v=d.value,s[v.id]=v;e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](18),f=!0,p=e.t0;case 26:e.prev=26,e.prev=27,l||null==h.return||h.return();case 29:if(e.prev=29,!f){e.next=32;break}throw p;case 32:return e.finish(29);case 33:return e.finish(26);case 34:for(_ in m=u.filter((function(e){return e.length>0})),b=[],m.forEach((function(e){b=[].concat(Object(z["a"])(b),Object(z["a"])(e))})),y={},b.forEach((function(e){y[e.parent_id]||(y[e.parent_id]=[]),y[e.parent_id].push(e)})),n("SET_THREELEVEL_MAP",y),g=[],y)g.push({id:_,name:s[_].titleZh,children:y[_]});return w=g.map((function(e){return 1===e.layout})),n("SET_layoutHorizFourData",w),n("SET_THREELEVEL",g),e.abrupt("return",g);case 46:case"end":return e.stop()}}),e,null,[[18,22,26,34],[27,,29,33]])})));function t(t){return e.apply(this,arguments)}return t}()},Z={namespaced:!0,state:F,mutations:H,actions:V};r["default"].use(f["a"]);var U=new f["a"].Store({modules:{category:Z},getters:R}),I=U;r["default"].config.productionTip=!1;var J={color:"#2e7d32",failedColor:"#874b4b",thickness:"2px",transition:{speed:"0.4s",opacity:"0s",termination:300},autoRevert:!0,location:"top",inverse:!1};r["default"].use(M.a,J),r["default"].directive("click-outside",{bind:function(){var e=this;this.event=function(t){return e.vm.$emit(e.expression,t)},this.el.addEventListener("click",this.stopProp),document.body.addEventListener("click",this.event)},unbind:function(){this.el.removeEventListener("click",this.stopProp),document.body.removeEventListener("click",this.event)},stopProp:function(e){e.stopPropagation()}}),new r["default"]({render:function(e){return e(P)},router:T,store:I}).$mount("#app")},"6dc5":function(e,t,n){},"7fc8":function(e,t,n){"use strict";var r=n("264e"),a=n.n(r);a.a},"9f02":function(e,t,n){},a5d2:function(e,t,n){"use strict";var r=n("f809"),a=n.n(r);a.a},a737:function(e,t,n){},f09c:function(e,t,n){e.exports=n.p+"img/ewm.cc4e7d94.png"},f809:function(e,t,n){}});
//# sourceMappingURL=app.61a5fdd5.js.map