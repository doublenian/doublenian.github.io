(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-191bd20c"],{"0555":function(t,e,s){"use strict";var i=s("a15b"),a=s.n(i);a.a},4913:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"team"},[t._m(0),i("div",{staticClass:"body mx-auto "},[t.list.length>0?i("swiper",{ref:"mySwiper",staticClass:"swiper ",attrs:{options:t.swiperOption}},[t._l(t.list,(function(e,a){return i("swiper-slide",{key:"swipe"+a,staticClass:"flex items-center"},[i("div",{staticClass:" bg-image w-full bg-no-repeat bg-cover bg-center bg-top swiper-lazy",attrs:{"data-background":e.image}},[i("div",{staticClass:"profile py-6"},[i("div",{staticClass:"icon-image flex justify-center items-center"},[i("img",{attrs:{src:s("e336"),alt:""}})]),i("div",{staticClass:"flex  items-end justify-center"},[i("p",{staticClass:" text-font-18 text-white font-bold mr-3 "},[t._v("\n                "+t._s(e.name)+"\n              ")]),i("p",{staticClass:" text-font-14  text-brighter"},[t._v("\n                "+t._s(e.title)+"\n              ")])]),i("div",{staticClass:"pt-4 text-white px-6 profile-desc",staticStyle:{"padding-bottom":"6vh"}},[i("p",{staticClass:" text-center",domProps:{innerHTML:t._s(e.desc.replace(/(\;|\；)/g,"<br>"))}})])])])])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),i("a",{staticClass:"showMore block",attrs:{href:"/about/team-more",target:"_blank"}},[t._v("查看更多 》》")])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header flex justify-center items-center"},[s("p",{staticClass:" text-white text-font-32 font-weight-bold mt-20"},[t._v("精英团队")])])}],n=(s("7f7f"),s("7212")),r=(s("a7a3"),s("365c")),l={components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"]},created:function(){var t=this;Object(r["a"])(null,3).then((function(e){e.result&&(t.list=e.result.map((function(t){return{image:t.bg.md+"?x-oss-process=image/resize,p_80",name:t.name,title:t.title.zh,desc:t.content.zh}})).slice(0,4))}))},data:function(){return{list:[],swiperOption:{slidesPerView:4,spaceBetween:1,loop:!1,slidesPerGroup:4,lazy:!0,autoplay:!1}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{goNext:function(){this.swiper.slideNext()},goPrev:function(){this.swiper.slidePrev()}}},c=l,o=(s("0555"),s("2877")),p=Object(o["a"])(c,i,a,!1,null,null,null);e["default"]=p.exports},a15b:function(t,e,s){},e336:function(t,e,s){t.exports=s.p+"img/arrow-up.ba7a7f2d.png"}}]);
//# sourceMappingURL=chunk-191bd20c.22d89b68.js.map