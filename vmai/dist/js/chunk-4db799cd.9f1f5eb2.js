(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db799cd"],{"1fb1":function(i,e,t){"use strict";t.r(e);var s=function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("div",{staticClass:"certification"},[i._m(0),s("div",{staticClass:"body mx-auto "},[s("div",{staticClass:"arrow-item-left arrow-item flex justify-center items-center cursor-pointer",on:{click:i.goPrev}},[s("img",{attrs:{src:t("4426"),alt:""}})]),s("div",{staticClass:"arrow-item-right arrow-item flex justify-center items-center cursor-pointer",on:{click:i.goNext}},[s("img",{attrs:{src:t("7e22"),alt:""}})]),i.list.length>0?s("swiper",{ref:"mySwiper",staticClass:"swiper ",attrs:{options:i.swiperOption}},[i._l(i.list,(function(e,t){return s("swiper-slide",{key:"swipe"+t,staticClass:"flex items-center"},[s("div",{staticClass:" bg-image w-full bg-no-repeat bg-cover bg-center bg-top",style:{backgroundImage:"url("+e.image+")"}},[s("div",{staticClass:"background-blur flex items-center"},[s("img",{staticClass:"w-full",attrs:{alt:"",src:e.image}}),s("div",{staticClass:"desc-content"},[i._v("\n              "+i._s(e.title)+"\n            ")])])])])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):i._e()],1)])},c=[function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"header flex justify-center items-center"},[t("p",{staticClass:" text-white text-font-32 font-weight-bold mt-20"},[i._v("资质荣誉")])])}],n=(t("7f7f"),t("7212")),a=(t("a7a3"),t("365c")),l={components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"]},created:function(){var i=this;Object(a["a"])(null,8).then((function(e){e.result&&(i.list=e.result.map((function(i){return{image:i.bg.md+"?x-oss-process=image/resize,h_550",name:i.name,title:i.title.zh,desc:i.content.zh}})))}))},data:function(){return{list:[],swiperOption:{slidesPerView:4,spaceBetween:10,loop:!0,autoplay:{delay:8e3,stopOnLastSlide:!1,disableOnInteraction:!1}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{goNext:function(){this.swiper.slideNext()},goPrev:function(){this.swiper.slidePrev()}}},r=l,A=(t("fed3"),t("2877")),o=Object(A["a"])(r,s,c,!1,null,null,null);e["default"]=o.exports},4426:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABkCAYAAAAR+rcWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzNFNTY2ODhCMTI3MTFFQThDNjA5NEMwQjBCODYyMUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzNFNTY2ODlCMTI3MTFFQThDNjA5NEMwQjBCODYyMUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozM0U1NjY4NkIxMjcxMUVBOEM2MDk0QzBCMEI4NjIxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozM0U1NjY4N0IxMjcxMUVBOEM2MDk0QzBCMEI4NjIxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpRU8CIAAASxSURBVHja7N35SxVRFAfwUV/rz/Uf9IeYllkR7UVUhGEiIhZiURGFiEZFCyFiG220EO0RrUQ7LWaJmFmZlWZl2r7/Yufwzvvh0fWew1vmzcw7X/j+dqnhw33z3szcuWb09/c7mtiTqQQKqIAKqIAaBRw4i6Afmd6HjozlHw8FHK8IWg/NsIx5Dp0K/aAzMDrFArxn0NHQLv0IR6cEWsfgPY0XL6iApdBaBq+N8N7E+5+FAoi3VYj3Vr+Fo1MmwHuSSLwgAS6BbmHwWhONFxTAcuhmBu8x4b3TH9L/421kxrQQ3nu9EolOhRAvB9qjl3LRWQbdwIxpppnXk8wD8SPgcug6ZkwTNDfWy7MgA66ArhXgjXEDz2+AK6E1zJhHhNfr1kH5BXAVtJoZ89BtPL8AroZWMWMaCa/P7YPzOuAaaCUz5gHhfUzFAXr5ZkIlzT4Obyz0U6oO0quAVXTes6WB8D6n8kC9CFhN37i23IPmQb+k+mC9dg6sEeDd9Qqe1wDX0g9lW+5Ax3kFz0uA6+gSzZbb0Hwv4XnlHIg3BSqYMbegE6BfvXbCTjUg3o4qZ8bcJLxvXvy5kKl4/puBeOt9kxN+jmHLDcL77uVLpVAK8PDhTxkz7jrh/fD6hXrIZTx87FjKjLtGeD99cKPDtXOgFO+qn/DcAkS8WgHeFehEP+G5AYh4uMinhBl3GTrJb3jJPgciHi4vK2LGXYJO8SNeMmcg4m0T4F30M16yZiDibYcWMuMuOOGVob8cHyeUhBm9A7qQGXee8H47Pk8iP8JZ0J0CvHP0sfU9XiIBs2jmFQjwcOb9cQKSUILwdkEXMOPOQqdB/zoBSmYC8HYL8M4EES/eGYh4e6FzmXGnoTODiBfPDES8fQK8U0HGiwdwFF23cqkPMl48gPiqAC6n4B5qH6NxCmhIA+HYllUMp49xngKaI1mbgognnfDzXAUcAJFbHTUMeiKIiIm6EpGszxtGMzFfAc2RrBAdSojjFdCcyBpl2wLvIYQ4UQHNaaIvFhviYOjxICAm64605D2NCOIkBTRH8qYQIh6FTlZAcyQv+iHiESd8n1ABDcFXTXMEiIed8C0vBRwAkXtfFxEPQacroDmSN8YjiDMU0JzIngXdljGDCHGmAprTJkAMEeIsBTQnsumNbd8WvOt9EDpbAe2IXQziAegcBTQH967KhnYyiPsd/vlLWgJi2oWI+ARwngKa84IQXzOIe6DzFdCO+IpBlDzIT0tATAchvmQQcSlJgQKa85IQOxhEyUqwtAR06GPMIUrXIqYloENfKNl0brQdP87EQgW0I7ZbxkSWFBcpoDmdhPiMQcR1OMUKaE4XXfZxiHVuI/pp66c3hPhUgFiigHbENgZR8mpZWgJiugnxCYOILzeWKaA5bwmxlUHEd5MXK6A5+IAqR4CIG9QuUcCBEXEmPhYgliugOe8JsYUZh5tcVCigOT2E2MyMwz1qliqgObiQKVeAuN4J7wKsgBbEJmacZKuptASMIOIiz0fMONzsbKUCmtNLiA+ZcbhX4SoFNKePEBuZcVXxIAb9j1Lhqxe43FiyWGmEE8MWyhn6x0n1HKiACqiAGgVUQH/mnwADAI3BEEDaAkMYAAAAAElFTkSuQmCC"},"7e22":function(i,e,t){i.exports=t.p+"img/right.ffee9549.png"},"9abf":function(i,e,t){},fed3:function(i,e,t){"use strict";var s=t("9abf"),c=t.n(s);c.a}}]);
//# sourceMappingURL=chunk-4db799cd.9f1f5eb2.js.map