(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{106:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"f6-demo f6-demo-dialog"},[i("div",{staticClass:"f6-demo-block__hd"},[t._v("基本使用")]),i("div",{staticClass:"f6-demo-block__bd"},[i("f6-cell",{attrs:{title:"Alert"}},[i("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示"},on:{click:function(e){return t.Dialog({type:"alert",title:"系统提示",content:"您真的要取消订单吗？"})}},slot:"value"})],1),i("f6-cell",{attrs:{title:"Confirm"}},[i("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示"},on:{click:function(e){return t.Dialog({type:"conform",title:"系统提示",content:"您真的要取消订单吗？"})}},slot:"value"})],1),i("f6-cell",{attrs:{title:"Prompt"}},[i("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示"},on:{click:function(e){return t.Dialog({type:"prompt",title:"系统提示",content:"您真的要取消订单吗？",inputValue:t.inputValue})}},slot:"value"})],1),i("f6-cell",{attrs:{title:"组件式调用"}},[i("f6-switch",{attrs:{slot:"value"},slot:"value",model:{value:t.visible1,callback:function(e){t.visible1=e},expression:"visible1"}})],1)],1),i("f6-dialog",{attrs:{type:"confirm",value:t.visible1,title:"系统提示",content:"您真的要取消订单吗？"},on:{confirm:t.handleConfirm,cancel:t.handleCancel}})],1)};l._withStripped=!0;var a=i(10),n=i(9),o={data:function(){return{inputValue:555,visible1:!1}},methods:{handleConfirm:function(){this.visible1=!1,Object(n.a)({message:"您选择了确认",duration:1e3})},handleCancel:function(){this.visible1=!1,Object(n.a)({message:"您选择了取消",duration:1e3})},Dialog:function(t){var e=this;Object(a.a)(t).then(function(t){void 0!==t?(e.inputValue=t,Object(n.a)({message:"您填写了确认"+t,duration:1e3})):Object(n.a)({message:"您选择了确认",duration:1e3}),a.a.close()}).catch(function(){Object(n.a)({message:"您选择了取消",duration:1e3}),a.a.close()})}}},s=i(12),c=Object(s.a)(o,l,[],!1,null,null,null);c.options.__file="packages/dialog/demo/index.vue";e.default=c.exports}}]);