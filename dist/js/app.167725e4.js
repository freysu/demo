(function(t){function e(e){for(var n,s,u=e[0],c=e[1],o=e[2],p=0,_=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&_.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(_.length)_.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,u=1;u<a.length;u++){var c=a[u];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/demo-website/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("br"),a("div",{staticClass:"objBackGround"},[a("h2",[t._v("配置Api "),a("button",{attrs:{type:"button",id:"r_btutton_save"},on:{click:function(e){return t.registerApi(t.r_input_id,t.r_input_key)}}},[t._v("保存")]),a("button",{attrs:{type:"button",id:"r_btutton_delete"},on:{click:function(e){return t.deleteApi()}}},[t._v("删除")])]),a("hr"),a("div",[a("p",[t._v("你的X-LC-Id： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.r_input_id,expression:"r_input_id"}],attrs:{type:"text",name:"",id:"r_input_id",placeholder:"X-LC-Id"},domProps:{value:t.r_input_id},on:{input:function(e){e.target.composing||(t.r_input_id=e.target.value)}}})]),a("p",[t._v("你的X-LC-Key： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.r_input_key,expression:"r_input_key"}],attrs:{type:"text",name:"",id:"r_input_key",placeholder:"X-LC-Key"},domProps:{value:t.r_input_key},on:{input:function(e){e.target.composing||(t.r_input_key=e.target.value)}}})])]),a("hr"),"true"==t.isRegisterSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v(t._s(t.r_result))])]):a("div",[a("p",{staticClass:"returnRes"},[t._v("这里将会显示返回结果")])])]),a("br"),a("div",{staticClass:"objBackGround"},[a("h2",[t._v("创建对象 "),a("button",{attrs:{type:"button",id:"c_btutton_start"},on:{click:function(e){return t.createUser(t.c_input_appid1,t.c_input_key1)}}},[t._v("执行")])]),a("hr"),a("div",[a("p",[t._v("要创建的appid1： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.c_input_appid1,expression:"c_input_appid1"}],attrs:{type:"text",name:"",id:"c_input_appid1",placeholder:"appid1"},domProps:{value:t.c_input_appid1},on:{input:function(e){e.target.composing||(t.c_input_appid1=e.target.value)}}})]),a("p",[t._v("要创建的key1： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.c_input_key1,expression:"c_input_key1"}],attrs:{type:"text",name:"",id:"c_input_key1",placeholder:"key1"},domProps:{value:t.c_input_key1},on:{input:function(e){e.target.composing||(t.c_input_key1=e.target.value)}}})])]),a("hr"),"true"==t.isCreateSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v("返回的objectId："+t._s(t.c_ObjectId))]),a("p",{staticClass:"returnRes"},[t._v("返回的createdAt："+t._s(t.c_CreatedAt))])]):a("div",[a("p",{staticClass:"returnRes"},[t._v("这里将会显示返回结果")])])]),a("br"),a("div",{staticClass:"objBackGround"},[a("h2",[t._v("获取对象 "),a("button",{attrs:{type:"button",id:"g_btutton_start"},on:{click:function(e){return t.getUser(t.g_input_objectId)}}},[t._v("执行")])]),a("hr"),a("div",[a("p",[t._v("要获取的objectId： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.g_input_objectId,expression:"g_input_objectId"}],attrs:{type:"text",name:"",id:"g_input_objectId",placeholder:"objectId"},domProps:{value:t.g_input_objectId},on:{input:function(e){e.target.composing||(t.g_input_objectId=e.target.value)}}})])]),a("hr"),"true"==t.isGetSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v("返回的appid1："+t._s(t.g_Appid1))]),a("p",{staticClass:"returnRes"},[t._v("返回的key1："+t._s(t.g_Key1))]),a("p",{staticClass:"returnRes"},[t._v("返回的createdAt："+t._s(t.g_CreatedAt))]),a("p",{staticClass:"returnRes"},[t._v("返回的updatedAt："+t._s(t.g_UpdatedAt))]),a("p",{staticClass:"returnRes"},[t._v("返回的objectId："+t._s(t.g_ObjectId))])]):"false"==t.isGetSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v("获取失败，请检查输入！")])]):a("div",[a("p",{staticClass:"returnRes"},[t._v("这里将会显示返回结果")])])]),a("br"),a("div",{staticClass:"objBackGround"},[a("h2",[t._v("更新对象 "),a("button",{attrs:{type:"button",id:"u_btutton_start"},on:{click:function(e){return t.updateUser(t.u_input_appid1,t.u_input_key1,t.u_input_objectId)}}},[t._v("执行")])]),a("hr"),a("div",[a("p",[t._v("要更新的objectId： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.u_input_objectId,expression:"u_input_objectId"}],attrs:{type:"text",name:"",id:"u_input_objectId",placeholder:"objectId"},domProps:{value:t.u_input_objectId},on:{input:function(e){e.target.composing||(t.u_input_objectId=e.target.value)}}})]),a("p",[t._v("要更新的appid1： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.u_input_appid1,expression:"u_input_appid1"}],attrs:{type:"text",name:"",id:"u_input_appid1",placeholder:"appid1"},domProps:{value:t.u_input_appid1},on:{input:function(e){e.target.composing||(t.u_input_appid1=e.target.value)}}})]),a("p",[t._v("要更新的key1： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.u_input_key1,expression:"u_input_key1"}],attrs:{type:"text",name:"",id:"u_input_key1",placeholder:"key1"},domProps:{value:t.u_input_key1},on:{input:function(e){e.target.composing||(t.u_input_key1=e.target.value)}}})])]),a("hr"),"true"==t.isUpdateSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v("返回的创建时间："+t._s(t.u_UpdatedAt))])]):"false"==t.isUpdateSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v("获取失败，请检查输入！")])]):a("div",[a("p",{staticClass:"returnRes"},[t._v("这里将会显示返回结果")])])]),a("br"),a("div",{staticClass:"objBackGround"},[a("h2",[t._v("删除对象 "),a("button",{attrs:{type:"button",id:"d_btutton_start"},on:{click:function(e){return t.deleteUser(t.d_input_objectId)}}},[t._v("执行")])]),a("hr"),a("div",[a("p",[t._v("要更新的objectId： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.d_input_objectId,expression:"d_input_objectId"}],attrs:{type:"text",name:"",id:"d_input_objectId",placeholder:"objectId"},domProps:{value:t.d_input_objectId},on:{input:function(e){e.target.composing||(t.d_input_objectId=e.target.value)}}})])]),a("hr"),"true"==t.isDeleteSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v("返回结果："+t._s(t.d_result))])]):"false"==t.isDeleteSuccess?a("div",[a("p",{staticClass:"returnRes"},[t._v("获取失败，请检查输入！")])]):a("div",[a("p",{staticClass:"returnRes"},[t._v("这里将会显示返回结果")])])]),a("br")])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("em",[t._v("LeanCloud Storage Api")])])}],s=(a("e9c4"),a("99af"),a("1e62")),u=a.n(s),c={name:"App",data:function(){return{r_input_id:"",r_input_key:"",isRegisterSuccess:"none",r_result:"",c_input_appid1:"",c_input_key1:"",c_ObjectId:"",c_CreatedAt:"",isCreateSuccess:"none",g_input_objectId:"",g_Appid1:"",g_Key1:"",g_CreatedAt:"",g_UpdatedAt:"",g_ObjectId:"",isGetSuccess:"none",u_input_appid1:"",u_input_key1:"",u_input_objectId:"",u_UpdatedAt:"",isUpdateSuccess:"none",d_input_objectId:"",d_result:"",isDeleteSuccess:"none"}},methods:{registerApi:function(t,e){localStorage.setItem("x-lc-id",t),localStorage.setItem("x-lc-key",e),this.r_result="保存成功！",this.isRegisterSuccess="true"},deleteApi:function(){localStorage.removeItem("x-lc-id"),localStorage.removeItem("x-lc-key"),this.r_input_id="",this.r_input_key="",this.r_result="删除成功！",this.isRegisterSuccess="true"},createUser:function(t,e){var a=JSON.stringify({appid1:t,key1:e,exit:!1,times:0}),n={method:"post",url:"/1.1/classes/MyUser",headers:{"X-LC-Id":localStorage.getItem("x-lc-id"),"X-LC-Key":localStorage.getItem("x-lc-key"),"Content-Type":"application/json"},data:a};u()(n).then((function(t){var e=t.data;console.log("objectId:",e.objectId),console.log("createdAt:",e.createdAt),$vm.$data.isCreateSuccess="true",$vm.$data.c_ObjectId=e.objectId,$vm.$data.c_CreatedAt=e.createdAt})).catch((function(t){console.error(t),$vm.$data.isCreateSuccess="false"}))},getUser:function(t){var e={method:"get",url:"/1.1/classes/MyUser/"+t,headers:{"X-LC-Id":localStorage.getItem("x-lc-id"),"X-LC-Key":localStorage.getItem("x-lc-key")}};u()(e).then((function(e){var a=e.data;"{}"!=JSON.stringify(a)?(console.log("用户".concat(t,"的appid为").concat(a.appid1,",key为").concat(a.key1)),$vm.$data.isGetSuccess="true",$vm.$data.g_CreatedAt=a.createdAt,$vm.$data.g_UpdatedAt=a.updatedAt,$vm.$data.g_ObjectId=a.objectId,$vm.$data.g_Appid1=a.appid1,$vm.$data.g_Key1=a.key1):$vm.$data.isGetSuccess="false"})).catch((function(t){console.error(t),$vm.$data.isGetSuccess="false"}))},updateUser:function(t,e,a){var n=JSON.stringify({appid1:t,key1:e}),r={method:"put",url:"/1.1/classes/MyUser/"+a,headers:{"X-LC-Id":localStorage.getItem("x-lc-id"),"X-LC-Key":localStorage.getItem("x-lc-key"),"Content-Type":"application/json"},data:n};u()(r).then((function(t){var e=t.data;"{}"!=JSON.stringify(e)?($vm.$data.isUpdateSuccess="true",$vm.$data.u_UpdatedAt=e.updatedAt,console.log("返回结果：",$vm.$data.u_UpdatedAt)):$vm.$data.isUpdateSuccess="false"})).catch((function(t){console.error(t),$vm.$data.isUpdateSuccess="false"}))},deleteUser:function(t){var e={method:"delete",url:"/1.1/classes/MyUser/"+t,headers:{"X-LC-Id":localStorage.getItem("x-lc-id"),"X-LC-Key":localStorage.getItem("x-lc-key")}};u()(e).then((function(t){var e=t.data;"{}"==JSON.stringify(e)?($vm.$data.isDeleteSuccess="true",$vm.$data.d_result="Delete Success!",console.log($vm.$data.d_result)):$vm.$data.isDeleteSuccess="false"})).catch((function(t){console.error(t),$vm.$data.isDeleteSuccess="false"}))}},mounted:function(){this.$data.r_input_id=localStorage.getItem("x-lc-id"),this.$data.r_input_key=localStorage.getItem("x-lc-key")}},o=c,d=o,p=(a("034f"),a("2877")),_=Object(p["a"])(d,r,i,!1,null,null,null),l=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.167725e4.js.map