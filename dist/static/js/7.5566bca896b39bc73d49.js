webpackJsonp([7],{Q5MC:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l=e("gGbG"),n={components:{Alert:l.b,Cell:l.h,CellGroup:l.i},data:function(){return{option1:{show:!1,title:"选择图片来源",showCancel:!0,menus:[{text:"从相册中选择"},{text:"从相机中选择"}]},option2:{show:!1,title:"选择图片来源",showCancel:!0,menus:[{text:"从相册中选择",disabled:!0},{text:"从相机中选择"}]},option3:{show:!1,title:"选择图片来源",showCancel:!0,menus:[{text:"从相册中选择",disabled:!0},{text:"从相机中选择"}]}}},methods:{onMenuClick:function(t,o){console.log(t,o)},handleAfterShow:function(){console.log("handleAfterShow")},handleAfterHide:function(){console.log("handleAfterHide")}}},s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page-alert"},[e("div",{staticClass:"ym-doc-block"},[e("div",{staticClass:"ym-doc-block__title"},[t._v("基本用法")]),t._v(" "),e("div",{staticClass:"ym-doc-block__content list"},[e("CellGroup",[e("Cell",{attrs:{label:"基本用法"}},[e("button",{attrs:{slot:"value"},on:{click:function(o){t.option1.show=!t.option1.show}},slot:"value"},[t._v("切换")])]),t._v(" "),e("Cell",{attrs:{label:"基本用法"}},[e("button",{attrs:{slot:"value"},on:{click:function(o){t.option2.show=!t.option2.show}},slot:"value"},[t._v("切换")])])],1)],1)]),t._v(" "),e("Alert",{attrs:{title:t.option1.title},model:{value:t.option1.show,callback:function(o){t.$set(t.option1,"show",o)},expression:"option1.show"}},[e("p",{attrs:{slot:"content"},slot:"content"},[t._v("真的要离开我吗?")])]),t._v(" "),e("Alert",{attrs:{title:t.option2.title},model:{value:t.option2.show,callback:function(o){t.$set(t.option2,"show",o)},expression:"option2.show"}},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("自定义 title")]),t._v(" "),e("p",{attrs:{slot:"content"},slot:"content"},[t._v("自定义 content")]),t._v(" "),e("div",{staticStyle:{flex:"1"},attrs:{slot:"footer"},on:{click:function(o){t.option2.show=!1}},slot:"footer"},[t._v("自定义 footer")])])],1)},staticRenderFns:[]};var i=e("VU/8")(n,s,!1,function(t){e("odlT")},null,null);o.default=i.exports},odlT:function(t,o){}});
//# sourceMappingURL=7.5566bca896b39bc73d49.js.map