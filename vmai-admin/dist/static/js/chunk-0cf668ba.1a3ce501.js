(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cf668ba"],{"2bcc":function(t,e,r){},"345e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.BaseUrl+"/admin/system/upload",headers:t.headers,name:"image","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?r("img",{staticClass:"avatar object-contain",attrs:{src:t.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},a=[],l=r("5f87"),o={props:{url:{type:String,default:""}},computed:{imageUrl:{get:function(){return this.url},set:function(t){this.$emit("update:url",t)}}},data:function(){return{BaseUrl:"https://vc.uiop.xyz/api",headers:{Authorization:Object(l["a"])()}}},methods:{handleAvatarSuccess:function(t,e){this.imageUrl="https://"+t.url},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,r=t.size/1024/1024<50;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 50MB!"),e&&r}}},i=o,s=(r("8e4f"),r("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports},"386b":function(t,e,r){var n=r("5ca1"),a=r("79e5"),l=r("be13"),o=/"/g,i=function(t,e,r,n){var a=String(l(t)),i="<"+e;return""!==r&&(i+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),i+">"+a+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(i),n(n.P+n.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},"432a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:" w-full px-10 mt-12"},[r("el-button",{staticClass:" mb-5",attrs:{type:"primary"},on:{click:t.addBanner}},[t._v("添加轮播")]),t._v(" "),r("el-table",{attrs:{data:t.list,border:""}},[r("el-table-column",{attrs:{label:"图片",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[r("el-image",{staticClass:" w-20 h-20 object-contain",attrs:{src:e.bg.md,"preview-src-list":[e.bg.md]}})]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"titleZh",label:"标题"}}),t._v(" "),r("el-table-column",{attrs:{prop:"contentZh",label:"副标题"}}),t._v(" "),r("el-table-column",{attrs:{label:"超链",width:"240px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("el-link",{attrs:{type:"primary",href:n.link.herf,target:"_blank"}},[t._v(t._s(n.link.herf))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"weight",label:"权重"}}),t._v(" "),r("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("el-tag",{attrs:{type:1===n.Meta.state?"success":"danger"}},[t._v(t._s(n.statusText))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.edit(n)}}},[t._v("编辑")]),t._v(" "),r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.setUpOrDown(n)}}},[t._v(t._s(1==n.Meta.state?"下架":"上架"))]),t._v(" "),r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.deleteMenu(n)}}},[t._v("删除")])]}}])})],1),t._v(" "),r("confirm-dialog",{ref:"confirmDialog"})],1)},a=[],l=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=(r("96cf"),r("3b8d")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{title:"添加Banner",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{ref:"ruleForm",attrs:{model:t.form,"label-position":"right",rules:t.rules,"label-width":"120px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"PC图片(必传)",prop:"mdImage"}},[r("image-uploader",{attrs:{url:t.form.mdImage},on:{"update:url":function(e){return t.$set(t.form,"mdImage",e)}}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"手机图片(可选)",prop:"smImage"}},[r("image-uploader",{attrs:{url:t.form.smImage},on:{"update:url":function(e){return t.$set(t.form,"smImage",e)}}})],1)],1),t._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"主标题"}},[r("el-input",{staticClass:" w-11/12",model:{value:t.form.title.zh,callback:function(e){t.$set(t.form.title,"zh",e)},expression:"form.title.zh"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"副标题"}},[r("el-input",{staticClass:" w-11/12",attrs:{type:"textarea"},model:{value:t.form.content.zh,callback:function(e){t.$set(t.form.content,"zh",e)},expression:"form.content.zh"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"交互方式",prop:"layout"}},[r("el-radio-group",{model:{value:t.form.layout,callback:function(e){t.$set(t.form,"layout",e)},expression:"form.layout"}},t._l(t.linkerType,(function(e,n){return r("el-radio",{key:"linker"+n,attrs:{label:e.label}},[t._v(t._s(e.name))])})),1)],1)],1),t._v(" "),1!==t.form.layout?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"链接地址",prop:"link"}},[r("el-input",{staticClass:" w-11/12",model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1)],1):t._e(),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"跳转模式",prop:"target"}},[r("el-select",{attrs:{placeholder:"请选择跳转模式"},model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},t._l(t.jumpModeOptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"权重",prop:"weight"}},[r("el-input",{staticClass:" w-8/12",attrs:{type:"number",placeholder:"填写权重"},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",t._n(e))},expression:"form.weight"}})],1)],1)],1)],1),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.okHandler}},[t._v("确 定")])],1)],1)},s=[],c=(r("b54a"),r("345e")),u=r("365c"),f=r("958c");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(r,!0).forEach((function(e){Object(l["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={components:{ImageUploader:c["a"]},data:function(){return{dialogVisible:!1,opType:"",resolve:null,reject:null,linkerType:f["a"].linkerType,jumpModeOptions:[{label:"当前页面",value:0},{label:"新页面",value:1}],form:{id:"",mdImage:"",smImage:"",layout:"",weight:"",link:"",target:"",title:{en:"",zh:""},content:{en:"",zh:""}},rules:{mdImage:[{required:!0,message:"请输入PC图片",trigger:"blur"}],layout:[{required:!0,message:"请输入交互方式",trigger:"blur"}],link:[{required:!0,message:"请输入链接地址",trigger:"blur"}],weight:[{required:!0,message:"请输入权重",trigger:"blur"}],target:[{required:!0,message:"请选择跳转模式",trigger:"blur"}]},cloneData:{}}},mounted:function(){this.cloneData=p({},this.form)},methods:{show:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add";return this.opType=r,this.dialogVisible=!0,this.form="add"==r?p({},this.cloneData):{id:t.id,mdImage:t.bg.md,smImage:t.bg.sm,layout:t.layout,weight:t.weight,link:t.link.herf,target:t.link.target,title:{en:t.title.en,zh:t.title.zh},content:{en:t.title.en,zh:t.content.zh}},new Promise((function(t,r){e.resolve=t,e.reject=r}))},close:function(){this.dialogVisible=!1,this.reject("取消")},okHandler:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(e){var r={name:"banner",bg:{md:t.form.mdImage,sm:t.form.smImage},link:{herf:t.form.link,target:t.form.target},type:4,layout:t.form.layout,weight:t.form.weight,title:{en:t.form.title.en,zh:t.form.title.zh},content:{en:t.form.content.en,zh:t.form.content.zh}};"add"===t.opType?Object(u["a"])(r).then((function(e){t.dialogVisible=!1,t.resolve("确定")})):Object(u["g"])(t.form.id,r).then((function(e){t.dialogVisible=!1,t.resolve(e)}))}}))}}},d=b,g=r("2877"),h=Object(g["a"])(d,i,s,!1,null,"5e507246",null),v=h.exports;function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(r,!0).forEach((function(e){Object(l["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={components:{ConfirmDialog:v},data:function(){return{list:[]}},mounted:function(){this.getList()},methods:{addBanner:function(){var t=this;this.$refs.confirmDialog.show().then((function(e){t.getList()})).catch((function(t){}))},getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["b"])({parent_id:"",types:[4],states:[1,5]});case 2:e=t.sent,r=e.result,this.list=r.map((function(t){return w({},t,{titleZh:t.title.zh,contentZh:t.content.zh,statusText:f["a"].status[t.Meta.state]})}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),edit:function(t){var e=this;this.$refs.confirmDialog.show(t,"edit").then((function(t){e.getList()})).catch((function(t){}))},setUpOrDown:function(t){var e=this,r=1===t.Meta.state?5:1;Object(u["h"])(t.id,r).then((function(t){e.$message.success(1==r?"上架成功":"下架成功"),e.getList()}))},deleteMenu:function(t){var e=this;Object(u["h"])(t.id,2).then((function(t){e.$message.success("删除成功"),e.getList()}))}}},k=_,O=Object(g["a"])(k,n,a,!1,null,null,null);e["default"]=O.exports},"8e4f":function(t,e,r){"use strict";var n=r("2bcc"),a=r.n(n);a.a},"958c":function(t,e,r){"use strict";e["a"]={status:{1:"上架",2:"删除",5:"下架"},position:{1:"顶部导航栏",2:"底部导航栏"},displayModes:{1:"横版海报",2:"竖版富文本"},linkerType:[{label:1,name:"无交互"},{label:2,name:"跳转外链"},{label:3,name:"跳转内链"},{label:4,name:"跳转视频"}]}},b54a:function(t,e,r){"use strict";r("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))}}]);