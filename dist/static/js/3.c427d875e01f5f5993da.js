webpackJsonp([3],{"12K2":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("PVEY"),o=i("GLlk"),l=i.n(o);n.a.use(l.a);var r={data:function(){return{busy:!1,list:[],allLoaded:!1}},computed:{noMoreStl:function(){if(!this.busy)return{visibility:"hidden"}}},methods:{handleRefresh:function(e){var t=this;setTimeout(function(){t.getData(!0),e()},1500)},loadMore:function(){var e=this;this.allLoaded||this.busy||(this.busy=!0,setTimeout(function(){e.getData(),e.busy=!1},2e3))},getData:function(e){e&&(this.list=[]);for(var t=0;t<20;t++)this.list.push(this.list.length+t);this.allLoaded=this.list.length>=60}},mounted:function(){this.getData()}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo-pull-refresh"},[i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":e.busy||e.allLoaded,"infinite-scroll-distance":"10","infinite-scroll-immediate-check":!1}},[i("div",[i("ymu-pull-refresh",{attrs:{"on-refresh":e.handleRefresh}},[i("ul",{staticClass:"list"},[e._l(e.list,function(t,n){return i("li",{key:n},[e._v("哈哈，我是"+e._s(n))])}),e._v(" "),e.allLoaded?e._e():i("li",{staticClass:"no-more",style:e.noMoreStl},[e._v("加载中...")]),e._v(" "),e.allLoaded&&!this.busy?i("li",{staticClass:"no-more"},[e._v("我是有底线的")]):e._e()],2)])],1)])])},staticRenderFns:[]};var a=i("C7Lr")(r,s,!1,function(e){i("yYz7")},"data-v-1e4f6797",null);t.default=a.exports},GLlk:function(e,t,i){var n;n=function(){"use strict";var e="@@InfiniteScroll",t=function(e){return e===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):e.scrollTop},i=document.defaultView.getComputedStyle,n=function(e){return e===window?t(window):e.getBoundingClientRect().top+t(window)},o=function(e){for(var t=e.parentNode;t;){if("HTML"===t.tagName)return!0;if(11===t.nodeType)return!1;t=t.parentNode}return!1},l=function(){if(!this.binded){this.binded=!0;var e,t,n,o,l,s,a,c,u=this,d=u.el,f=d.getAttribute("infinite-scroll-throttle-delay"),v=200;f&&(v=Number(u.vm[f]||f),(isNaN(v)||v<0)&&(v=200)),u.throttleDelay=v,u.scrollEventTarget=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=i(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window}(d),u.scrollListener=(e=r.bind(u),t=u.throttleDelay,c=function(){e.apply(s,a),o=n},function(){if(s=this,a=arguments,n=Date.now(),l&&(clearTimeout(l),l=null),o){var e=t-(n-o);e<0?c():l=setTimeout(function(){c()},e)}else c()}),u.scrollEventTarget.addEventListener("scroll",u.scrollListener),this.vm.$on("hook:beforeDestroy",function(){u.scrollEventTarget.removeEventListener("scroll",u.scrollListener)});var h=d.getAttribute("infinite-scroll-disabled"),m=!1;h&&(this.vm.$watch(h,function(e){u.disabled=e,!e&&u.immediateCheck&&r.call(u)}),m=Boolean(u.vm[h])),u.disabled=m;var b=d.getAttribute("infinite-scroll-distance"),g=0;b&&(g=Number(u.vm[b]||b),isNaN(g)&&(g=0)),u.distance=g;var p=d.getAttribute("infinite-scroll-immediate-check"),y=!0;p&&(y=Boolean(u.vm[p])),u.immediateCheck=y,y&&r.call(u);var w=d.getAttribute("infinite-scroll-listen-for-event");w&&u.vm.$on(w,function(){r.call(u)})}},r=function(e){var i=this.scrollEventTarget,o=this.el,l=this.distance;if(!0===e||!this.disabled){var r=t(i),s=r+function(e){return e===window?document.documentElement.clientHeight:e.clientHeight}(i),a=!1;if(i===o)a=i.scrollHeight-s<=l;else a=s+l>=n(o)-n(i)+o.offsetHeight+r;a&&this.expression&&this.expression()}},s={bind:function(t,i,n){t[e]={el:t,vm:n.context,expression:i.value};var r=arguments;t[e].vm.$on("hook:mounted",function(){t[e].vm.$nextTick(function(){o(t)&&l.call(t[e],r),t[e].bindTryCount=0;!function i(){t[e].bindTryCount>10||(t[e].bindTryCount++,o(t)?l.call(t[e],r):setTimeout(i,50))}()})})},unbind:function(t){t&&t[e]&&t[e].scrollEventTarget&&t[e].scrollEventTarget.removeEventListener("scroll",t[e].scrollListener)}},a=function(e){e.directive("InfiniteScroll",s)};return window.Vue&&(window.infiniteScroll=s,Vue.use(a)),s.install=a,s},e.exports=n()},yYz7:function(e,t){}});
//# sourceMappingURL=3.c427d875e01f5f5993da.js.map