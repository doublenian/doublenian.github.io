(function(e){function t(t){for(var n,r,i=t[0],c=t[1],d=t[2],s=0,p=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],n=!0,i=1;i<l.length;i++){var c=l[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=l[0]))}return e}var n={},o={app:0},a=[];function r(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=n,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(l,n,function(t){return e[t]}.bind(null,n));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/make-qa/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;a.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},2395:function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var n=l("2b0e"),o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("div",{staticClass:"container"},[l("div",{staticStyle:{"text-align":"center","margin-bottom":"20px","font-weight":"bold","font-size":"20px"}},[e._v(" 题目生成器 ")]),l("el-form",{attrs:{"label-width":"80px"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"文件名称"}},[l("el-input",{attrs:{placeholder:"请输入英文名称，例如isTravelled"},model:{value:e.model.fileName,callback:function(t){e.$set(e.model,"fileName",t)},expression:"model.fileName"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"题目编号"}},[l("el-input",{attrs:{placeholder:"请输入26个英文字母大写,例如A,B,C"},model:{value:e.model.id,callback:function(t){e.$set(e.model,"id",t)},expression:"model.id"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"题目类型"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择题目类型"},model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}},e._l(e.qaType,(function(e,t){return l("el-option",{key:"qaType"+t,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),l("el-form-item",{attrs:{label:"题目名称"}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.model.titleTable,border:""}},[l("el-table-column",{attrs:{prop:"en",label:"英文","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[l("el-input",{attrs:{type:"textarea",placeholder:"请输入题目英文"},model:{value:n.en,callback:function(t){e.$set(n,"en",t)},expression:"row.en"}})]}}])}),l("el-table-column",{attrs:{prop:"zh",label:"中文","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[l("el-input",{attrs:{type:"textarea",placeholder:"请输入题目中文"},model:{value:n.zh,callback:function(t){e.$set(n,"zh",t)},expression:"row.zh"}})]}}])})],1)],1),l("el-form-item",{attrs:{label:"题目选项"}},[l("div",{staticStyle:{"text-align":"left"}},[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.model.optionsTable.push({id:e.model.id+(e.model.optionsTable.length+1),en:"",zh:""})}}},[e._v("添加选项")])],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.model.optionsTable,border:""}},[l("el-table-column",{attrs:{prop:"en",label:"英文","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[l("el-input",{attrs:{type:"textarea",placeholder:"请输入选项英文"},model:{value:n.en,callback:function(t){e.$set(n,"en",t)},expression:"row.en"}})]}}])}),l("el-table-column",{attrs:{prop:"zh",label:"中文","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[l("el-input",{attrs:{type:"textarea",placeholder:"请输入选项中文"},model:{value:n.zh,callback:function(t){e.$set(n,"zh",t)},expression:"row.zh"}})]}}])}),l("el-table-column",{attrs:{label:"操作","header-align":"center",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.$index;return[l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.model.optionsTable.splice(n,1)}}},[e._v("删除")])]}}])})],1)],1),l("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("点击下载js文件")])],1)],1),l("el-dialog")],1)},a=[],r=(l("c740"),l("d81d"),l("d3b7"),l("3ca3"),l("ddb0"),l("2b3d"),["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]),i={name:"App",data:function(){return{qaIdIndex:0,qaType:[{label:"单选题",value:"one-choice-pill"},{label:"多选题",value:"multi-choice"},{label:"单选按钮(判断题)",value:"one-button-choice"},{label:"多个问题",value:"multi-question"}],model:{id:"",fileName:"",type:"",titleTable:[{en:"",zh:""}],optionsTable:[]}}},mounted:function(){var e=localStorage.getItem("qaIdIndex");this.model.id=e?r[+e]:r[0]},methods:{submit:function(){var e=this;console.log(this.model);var t=r.findIndex((function(t){return t==e.model.id}));localStorage.setItem("qaIdIndex",++t);var l={id:this.model.id,type:this.model.type,title:{zh:this.model.titleTable[0].zh,en:this.model.titleTable[0].en},answer:this.model.optionsTable.map((function(e){return{id:e.id,title:{en:e.en,zh:e.zh}}}))};this.funDownload(JSON.stringify(l),this.model.fileName+"_"+this.model.id+".js")},funDownload:function(e,t){var l=document.createElement("a");l.download=t,l.style.display="none";var n=new Blob([e]);l.href=URL.createObjectURL(n),document.body.appendChild(l),l.click(),setTimeout((function(){location.reload()}),1e3),document.body.removeChild(l)}}},c=i,d=(l("7c55"),l("2877")),u=Object(d["a"])(c,o,a,!1,null,null,null),s=u.exports,p=l("5c96"),f=l.n(p);l("0fae");n["default"].config.productionTip=!1,n["default"].use(f.a),new n["default"]({render:function(e){return e(s)}}).$mount("#app")},"7c55":function(e,t,l){"use strict";var n=l("2395"),o=l.n(n);o.a}});
//# sourceMappingURL=app.54754094.js.map