webpackJsonp([18],{ltEs:function(e,t){},u3Ga:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("gGbG"),s={components:{Cell:a.h,Badge:a.e,Clocker:a.l,CellGroup:a.i},data:function(){return{startTime:0,endTime:0}},mounted:function(){var e=new Date((new Date).setFullYear(2018,12,12)).setHours(0,0,0,0)/1e3,t=new Date((new Date).setFullYear(2019,12,12)).setHours(0,0,0,0)/1e3;this.endTime=t,this.startTime=e}},n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"view-clokcer"},[l("div",{staticClass:"ym-doc-block"},[l("div",{staticClass:"ym-doc-block__title"},[e._v("基本用法")]),e._v(" "),l("div",{staticClass:"ym-doc-block__content"},[l("CellGroup",[l("Cell",{attrs:{label:"默认展示",clickable:"","is-link":""}},[l("Clocker",{attrs:{slot:"value"},slot:"value"})],1),e._v(" "),l("Cell",{attrs:{label:"自定义展示",clickable:"","is-link":""}},[l("Clocker",{attrs:{slot:"value"},slot:"value",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.date;return[l("div",[l("span",[e._v(e._s(a.year))]),e._v(" "),l("span",[e._v("-")]),e._v(" "),l("span",[e._v(e._s(a.month))]),e._v(" "),l("span",[e._v("-")]),e._v(" "),l("span",[e._v(e._s(a.date))])]),e._v(" "),l("div",[l("span",[e._v(e._s(a.hour))]),e._v("小时\n                  "),l("span",[e._v(e._s(a.minute))]),e._v("分钟\n                  "),l("span",[e._v(e._s(a.second))]),e._v("秒\n                ")])]}}])})],1),e._v(" "),l("Cell",{attrs:{label:"倒计时模式",clickable:"","is-link":""}},[l("Clocker",{attrs:{slot:"value",startTime:e.startTime,endTime:e.endTime},slot:"value",scopedSlots:e._u([{key:"default",fn:function(e){e.date}}])})],1),e._v(" "),l("Cell",{attrs:{label:"设置当前时间为2018-12-20",clickable:"","is-link":""}},[l("Clocker",{attrs:{slot:"value",startTime:e.startTime,endTime:e.endTime,time:"2018-12-20"},slot:"value",scopedSlots:e._u([{key:"default",fn:function(e){e.date}}])})],1),e._v(" "),l("Cell",{attrs:{label:"设置本地时间2018-12-25 0:0:0",clickable:"","is-link":""}},[l("Clocker",{attrs:{slot:"value",startTime:e.startTime,endTime:e.endTime,time:"2018-12-25 0:0:0"},slot:"value",scopedSlots:e._u([{key:"default",fn:function(e){e.date}}])})],1),e._v(" "),l("Cell",{attrs:{label:"设置本地时间为2018-12-25 00:00:00",clickable:"","is-link":""}},[l("Clocker",{attrs:{slot:"value",startTime:e.startTime,endTime:e.endTime,time:"2018-12-25 00:00:00"},slot:"value",scopedSlots:e._u([{key:"default",fn:function(e){e.date}}])})],1)],1)],1)])])},staticRenderFns:[]};var i=l("VU/8")(s,n,!1,function(e){l("ltEs")},"data-v-1a31549b",null);t.default=i.exports}});
//# sourceMappingURL=18.df15096ff5b7ea19e89b.js.map