webpackJsonp([13],{JI2f:function(e,t){},SXmi:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"ym-popup",components:{Backdrop:l("aOWK").a},props:{value:Boolean,position:{type:String,default:"bottom"}},computed:{transition:function(){return"ym-popup--"+this.position}},methods:{handleClickBackdrop:function(){this.$emit("input",!1)}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"ym-popup"},[l("Backdrop",{on:{click:e.handleClickBackdrop},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),l("transition",{attrs:{name:e.transition}},[l("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ym-popup-content",class:["ym-popup--"+e.position]},[e._t("default")],2)])],1)},staticRenderFns:[]};var v=l("VU/8")(a,o,!1,function(e){l("JI2f")},null,null).exports;v.install=function(e){e.component(v.name,v)};var n=v,u=l("xnKZ"),s=l("jyDz"),p=l("dyme"),i={components:{Cell:u.a,Popup:n,XSwitch:p.a,CellGroup:s.a},data:function(){return{demo1:{value:!1},demo2:{value:!1},demo3:{value:!1},demo4:{value:!1}}}},c={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"page-popup"},[l("CellGroup",{attrs:{title:"基本用法"}},[l("Cell",{attrs:{title:"从底部弹出"}},[l("XSwitch",{attrs:{slot:"value"},slot:"value",model:{value:e.demo1.value,callback:function(t){e.$set(e.demo1,"value",t)},expression:"demo1.value"}})],1),e._v(" "),l("Cell",{attrs:{title:"从顶部弹出"}},[l("XSwitch",{attrs:{slot:"value"},slot:"value",model:{value:e.demo2.value,callback:function(t){e.$set(e.demo2,"value",t)},expression:"demo2.value"}})],1),e._v(" "),l("Cell",{attrs:{title:"从左边弹出"}},[l("XSwitch",{attrs:{slot:"value"},slot:"value",model:{value:e.demo3.value,callback:function(t){e.$set(e.demo3,"value",t)},expression:"demo3.value"}})],1),e._v(" "),l("Cell",{attrs:{title:"从右边弹出"}},[l("XSwitch",{attrs:{slot:"value"},slot:"value",model:{value:e.demo4.value,callback:function(t){e.$set(e.demo4,"value",t)},expression:"demo4.value"}})],1)],1),e._v(" "),l("Popup",{model:{value:e.demo1.value,callback:function(t){e.$set(e.demo1,"value",t)},expression:"demo1.value"}},[l("div",[l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")])])]),e._v(" "),l("Popup",{attrs:{position:"top"},model:{value:e.demo2.value,callback:function(t){e.$set(e.demo2,"value",t)},expression:"demo2.value"}},[l("div",[l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")])])]),e._v(" "),l("Popup",{attrs:{position:"left"},model:{value:e.demo3.value,callback:function(t){e.$set(e.demo3,"value",t)},expression:"demo3.value"}},[l("div",[l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")])])]),e._v(" "),l("Popup",{attrs:{position:"right"},model:{value:e.demo4.value,callback:function(t){e.$set(e.demo4,"value",t)},expression:"demo4.value"}},[l("div",[l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")]),e._v(" "),l("p",[e._v("对对对")])])])],1)},staticRenderFns:[]};var d=l("VU/8")(i,c,!1,function(e){l("UYln")},"data-v-2f8ce498",null);t.default=d.exports},UYln:function(e,t){}});
//# sourceMappingURL=13.b6523280d58ecf39859c.js.map