webpackJsonp([10],{"5ZC1":function(t,e){},cUvw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"wui-range",props:{value:Array,min:{type:Number,default:0},max:{type:Number,default:100},thick:{type:Number,default:2},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{startPoint:null,movePoint:null,runWidth:0,curDirection:"",direction:""}},computed:{ratio:function(){return(this.value[1]-this.value[0])/(this.max-this.min)*100},left:function(){return(this.value[0]-this.min)/(this.max-this.min)*100},right:function(){return 100-(this.value[1]-this.min)/(this.max-this.min)*100},trackStyle:function(){return{left:this.left+"%",right:this.right+"%"}}},methods:{getRect:function(t){return t.getBoundingClientRect()},onTouchStart:function(t,e){var n=e.changedTouches[0];this.startPoint=n,this.trackRect=this.getRect(this.$refs.track),this.contentRect=this.getRect(this.$refs.content),this.localLeft=this.left,this.localRatio=this.ratio,this.direction=t},onTouchMove:function(t,e){var n=e.changedTouches[0],i=n.pageX-this.startPoint.pageX,a=0,s=(a=(a=(a="from"===t?this.localLeft/100+i/this.contentRect.width:this.localLeft/100+this.localRatio/100+i/this.contentRect.width)<0?0:a)>1?1:a)*(this.max-this.min)+this.min;s="from"===t?s>this.value[1]?this.value[1]:s:s<this.value[0]?this.value[0]:s,s=Math.round(s),"from"===t?this.$emit("input",[s,this.value[1]]):this.$emit("input",[this.value[0],s]),this.movePoint=n},onTouchEnd:function(t,e){this.startPoint=null}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wui-range"},[t._t("start"),t._v(" "),n("div",{ref:"content",staticClass:"wui-range-content",style:{height:t.thick+"px"}},[n("div",{ref:"runway",staticClass:"wui-range__runway"}),t._v(" "),n("div",{ref:"track",staticClass:"wui-range__track",style:t.trackStyle}),t._v(" "),n("div",{staticClass:"wui-range__thumb",class:[{"is-active":"from"===t.direction}],style:{left:t.left+"%"},on:{touchstart:function(e){t.onTouchStart("from",e)},touchmove:function(e){t.onTouchMove("from",e)},touchend:function(e){t.onTouchEnd("from",e)}}}),t._v(" "),n("div",{staticClass:"wui-range__thumb",class:[{"is-active":"top"===t.direction}],style:{left:100-t.right+"%"},on:{touchstart:function(e){t.onTouchStart("to",e)},touchmove:function(e){t.onTouchMove("to",e)},touchend:function(e){t.onTouchEnd("to",e)}}})]),t._v(" "),t._t("end")],2)},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(t){n("5ZC1")},null,null).exports;s.install=function(t){t.component(s.name,s)};var o={components:{RegionSlider:s},data:function(){return{rangeThick:2,max:100,min:50,value:[60,80]}},methods:{setRangeValue:function(t){this.value=t.target.value.split(",")}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-progress"},[n("RegionSlider",{attrs:{thick:t.rangeThick,max:t.max,min:t.min},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("span",{attrs:{slot:"start"},slot:"start"},[t._v(t._s(t.min))]),t._v(" "),n("span",{attrs:{slot:"end"},slot:"end"},[t._v(t._s(t.max))])]),t._v(" "),n("input",{staticClass:"form-control",domProps:{value:t.value},on:{input:t.setRangeValue}})],1)},staticRenderFns:[]};var u=n("VU/8")(o,r,!1,function(t){n("xS2/")},"data-v-1b074c8c",null);e.default=u.exports},"xS2/":function(t,e){}});
//# sourceMappingURL=10.800e8ac224f7cc36e97a.js.map