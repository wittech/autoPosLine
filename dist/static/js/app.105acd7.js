webpackJsonp([0,2],[,,,,,function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},a=i(1),o=s(a),r=i(25),l=s(r),c=i(14),u=s(c);i(16);var h=new o.default(n({store:u.default},l.default));h.$mount("#app")},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(30),a=s(n),o=i(28),r=s(o),l=i(27),c=s(l),u=i(29),h=s(u);e.default={name:"app",data:function(){return{}},mounted:function(){},components:{Toolbar:a.default,Screens:c.default,RightNav:h.default,ComponentsBox:r.default}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["model"],data:function(){return{val:0}},watch:{model:{handler:function(t,e){t&&(this.val=t)}},val:{handler:function(t,e){}}},methods:{minusClick:function(){this.val=parseInt(this.val,10)-1},plusClick:function(){this.val=parseInt(this.val,10)+1}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},a=i(13),o=s(a),r=i(2);e.default={data:function(){return{w:0,h:0}},computed:n({screenObj:function(){return{width:this.w+"px",height:this.h+"px"}},containerObj:function(){return{left:this.getScreenSize.left+"px",right:this.getScreenSize.right+"px"}}},(0,r.mapGetters)({getComps:"global/getComponents",getScreenSize:"global/getScreenSize"})),mounted:function(){this.w=800,this.h=500;var t=(this.$refs.inner,this.$refs.wrapper),e=this.$refs.minimap;this.myScroll=new IScroll(t,{startX:-510,startY:-10,mouseWheel:!0,scrollbars:!0,disableMouse:!0,disablePointer:!0,freeScroll:!0,fadeScrollbars:!0,probeType:3,scrollX:!0,interactiveScrollbars:!0,indicators:{el:e,interactive:!0}})},components:{elementBox:o.default}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(23),a=s(n);e.default={data:function(){return{compItems:[],isModel:!1}},mounted:function(){var t=[{id:1,name:"文本",size:{width:150,height:50}},{id:2,name:"按钮",size:{width:80,height:40}},{id:3,name:"图片",size:{width:50,height:50}}];this.compItems=t},methods:{clickAction:function(t){var e=a.default.random(100,200),i=a.default.random(10,200);t.size.x=e,t.size.y=i;var s={type:t.id,size:t.size};this.$store.dispatch("global/addAction",s)},leftToggle:function(){this.isModel=!this.isModel,this.$store.dispatch("global/setScreenSize",{left:this.isModel?50:180})}},components:{}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},a=i(2),o=i(26),r=s(o);e.default={data:function(){return{navRight:0,x:0,y:0,h:0,w:0}},computed:n({rootStyle:function(){return{right:this.navRight+"px"}}},(0,a.mapGetters)({compSize:"global/getCurCompSize"})),watch:{compSize:{deep:!0,handler:function(t,e){t&&(this.x=t.x,this.y=t.y,this.w=t.w,this.h=t.h)}}},methods:n({toggleNav:function(){var t=this,e=0==this.navRight?-140:0;this.navRight=e,this.$nextTick(function(){t.addScreenRight({right:Math.abs(e)})})},changeNum:function(t){console.log(t)}},(0,a.mapActions)({addScreenRight:"global/setScreenSize"})),components:{inputNum:r.default}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{iconArr:["weibo","github","weixin","qq","windows","mac"]}}}},function(t,e,i){"use strict";(function(t){function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o,r=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),l=i(3),c=s(l),u=function(t){return parseInt(t,10)},h=(a=(0,c.default)({props:{options:{type:Object}},watch:{"options.size":{deep:!0,handler:function(t,e){t&&this.setSize(t)}}}}),a(o=function(){function e(){n(this,e)}return r(e,[{key:"data",value:function(){return{handlers:[],isEditor:!1,model:"dragging",minWidth:20,minHeight:20,oPos:{},top:0,left:0,w:0,h:0,boxOffset:{},axis:"both",title:"",titleProp:{}}}},{key:"created",value:function(){this.top=u(this.options.size.y),this.left=u(this.options.size.x),this.w=u(this.options.size.width),this.h=u(this.options.size.height)}},{key:"mounted",value:function(){var e=this;this.box=t(this.$el),this.handlers.dragging=this.handlerDrag.bind(this),this.handlers.resizing=this.handlerResize.bind(this),this.handlers.complete=this.handlerComplete.bind(this),this.intBound(),t(document).on("click",function(t){e.isEditor=!1,t.stopPropagation()})}},{key:"intBound",value:function(){this.parent=this.box.parent(),this.parentOffset=this.parent.offset(),this.parentOffset.left+=parseInt(this.parent.css("border-left-width"),10)||0,this.parentOffset.top+=parseInt(this.parent.css("border-top-width"),10)||0,this.curBound={left:this.parentOffset.left,top:this.parentOffset.top,right:this.parentOffset.left+this.parent.width(),bottom:this.parentOffset.top+this.parent.height()}}},{key:"handlerMouseDown",value:function(t){this.isView||(this._start(t,"dragging"),this.oPos={x:t.pageX||0,y:t.pageY||0},t.stopPropagation())}},{key:"handlerDrag",value:function(t){this.boxOffset.left=this._boundx(this.boxOffset.left+t.pageX-this.oPos.x,-this.w),this.boxOffset.top=this._boundy(this.boxOffset.top+t.pageY-this.oPos.y,-this.h),this.oPos={x:t.pageX,y:t.pageY},this.adjustBox(this.boxOffset.left-this.parentOffset.left,this.boxOffset.top-this.parentOffset.top)}},{key:"handlerResize",value:function(t){var e={x:this._boundx(t.pageX),y:this._boundy(t.pageY)};"x"==this.axis?(this.vector.x===-1&&(this.boxOffset.left=Math.min(e.x,this.boxOffset.right-this.minWidth)),1===this.vector.x&&(this.boxOffset.right=Math.max(e.x,this.boxOffset.left+this.minWidth))):"both"==this.axis&&(this.vector.x===-1&&(this.boxOffset.left=Math.min(e.x,this.boxOffset.right-this.minWidth)),1===this.vector.x&&(this.boxOffset.right=Math.max(e.x,this.boxOffset.left+this.minWidth)),this.vector.y===-1&&(this.boxOffset.top=Math.min(e.y,this.boxOffset.bottom-this.minHeight)),1===this.vector.y&&(this.boxOffset.bottom=Math.max(e.y,this.boxOffset.top+this.minHeight)));var i=this.boxOffset.left-this.parentOffset.left,s=this.boxOffset.top-this.parentOffset.top,n=this.boxOffset.right-this.boxOffset.left,a=this.boxOffset.bottom-this.boxOffset.top;this.adjustBox(i,s,n,a),t.stopPropagation(),t.preventDefault()}},{key:"handlerComplete",value:function(e){t(document).off("mousemove",this.handlers[this.model]),t(document).off("mouseup",this.handlers.complete),t(document).off("mousedown",this.handlerMouseDown),this.rbScaleMouseUp(),e.stopPropagation(),e.preventDefault()}},{key:"handlerClick",value:function(t){this.isEditor=!0,this.$emit("handlerClick",{w:this.w,h:this.h,x:this.left,y:this.top}),t.stopPropagation()}},{key:"handleContextMenu",value:function(t){this.$emit("handlerRight",t),t.stopPropagation()}},{key:"_start",value:function(e,i){this.model=i,this.boxOffset=this.box.offset(),this.boxOffset.right=this.boxOffset.left+this.w,this.boxOffset.bottom=this.boxOffset.top+this.h,t(document).on({mousemove:this.handlers[this.model],mouseup:this.handlers.complete}),e.stopPropagation()}},{key:"_reszie",value:function(t,e){if(t&&this._setDirection(e))return this._start(t,"resizing"),!1}},{key:"_setDirection",value:function(t){switch(t){case"w":this.vector={x:-1,y:0};break;case"e":this.vector={x:1,y:0};break;case"n":this.vector={x:0,y:-1};break;case"s":this.vector={x:0,y:1};break;case"nw":this.vector={x:-1,y:-1};break;case"sw":this.vector={x:-1,y:1};break;case"ne":this.vector={x:1,y:-1};break;case"se":this.vector={x:1,y:1};break;default:return!1}return!0}},{key:"adjustBox",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.w||0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.h||0;this.left=u(t),this.top=u(e),this.w=u(i),this.h=u(s)}},{key:"_boundx",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.max(Math.min(t,this.curBound.right+e),this.curBound.left)}},{key:"_boundy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.max(Math.min(t,this.curBound.bottom+e),this.curBound.top)}},{key:"beforeDestroy",value:function(){this.box.off()}},{key:"rbScaleMouseDown",value:function(t,e){this._reszie(e,t),e.stopPropagation()}},{key:"rbScaleMouseUp",value:function(t){var e=this.getSizeOp();this.$emit("handlerResize",t,e)}},{key:"getSizeOp",value:function(){return{w:this.w,h:this.h,left:this.left,top:this.top}}},{key:"getBoundSize",value:function(){var e=t("#canvas-container"),i=this.box.offset(),s={};return s.parentWidth=e.width(),s.parentHeight=e.height(),s.top=Math.floor(i.top-this.parentOffset.top),s.left=Math.floor(i.left-this.parentOffset.left),s.right=e.outerWidth(!0)-this.w-i.left,s.bottom=e.outerHeight(!0)+this.parentOffset.top-this.h-i.top,s.w=this.w,s.h=this.h,s}},{key:"render",value:function(t){var e=this,i=["nw","n","ne","e","w","sw","s","se"],s=t("div",{class:"ylf-rb",style:{display:this.isEditor?"block":"none"}},[i.map(function(i){return t("div",{class:"ylf-rb__radius ylf-rb--"+i+"-resize",on:{mousedown:e.rbScaleMouseDown.bind(e,i)}},[])})]);return t("div",{class:"ylf-element",on:{mousedown:this.handlerMouseDown,click:this.handlerClick,contextmenu:this.handleContextMenu},style:this.boxStyle},[this.$slots.default,s])}},{key:"setSize",value:function(t){this.top=u(t.y),this.left=u(t.x),this.w=u(t.width),this.h=u(t.height)}},{key:"boxStyle",get:function(){var t={width:this.w+"px",height:this.h+"px",left:this.left+"px",top:this.top+"px"};return t}},{key:"contentBoxStyle",get:function(){return{width:this.w+"px",height:this.h+"px"}}}]),e}())||o);e.default=h}).call(e,i(39))},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o,r=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),l=i(3),c=s(l),u=i(12),h=s(u),f=(a=(0,c.default)({props:{options:{type:Object,default:function(){return{}}}}}),a(o=function(){function t(){n(this,t)}return r(t,[{key:"data",value:function(){return{}}},{key:"clickHandler",value:function(t){this.$store.dispatch("global/selectorSize",t)}},{key:"resizeDone",value:function(){}},{key:"contextMenuHandler",value:function(){}},{key:"render",value:function(t){var e=void 0;return"1"==this.options.type?e=t("h1",null,["1234567890"]):"2"==this.options.type?e=t("button",{class:"btn"},["按钮"]):"3"==this.options.type&&(e=t("img",{class:"ylf",attrs:{width:"40",height:"40"}},[])),t(h.default,{ref:"box",attrs:{options:this.options},on:{handlerClick:this.clickHandler,handlerResize:this.resizeDone,handlerRight:this.contextMenuHandler}},[e])}}]),t}())||o);e.default=f},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},a=i(1),o=s(a),r=i(2),l=s(r),c=i(15),u=s(c);o.default.use(l.default),e.default=new l.default.Store({modules:{global:n({namespaced:!0},u.default)}})},function(t,e,i){"use strict";function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var n,a="ADD_COMPONENTS",o="UPDATE_SCREEN_SIZE",r="SET_SELECTOR_SIZE",l={comps:[],curSelect:{size:{}},screenSize:{right:239,left:180}},c=(n={},s(n,a,function(t,e){t.comps.push(e)}),s(n,r,function(t,e){t.curSelect.size=e}),s(n,o,function(t,e){var i=e.right,s=e.left,n=140;s>0&&(t.screenSize.left=s),0===i?t.screenSize.right+=n:i>0&&(t.screenSize.right-=n)}),n),u={addAction:function(t,e){var i=t.commit;i(a,e)},setScreenSize:function(t,e){var i=t.commit;i(o,e)},selectorSize:function(t,e){var i=t.commit;i(r,e)}},h={getComponents:function(t){return t.comps},getScreenSize:function(t){return t.screenSize},getCurCompSize:function(t){return t.curSelect.size}};e.default={namespaced:!0,state:l,mutations:c,actions:u,getters:h}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAABw0lEQVR4nGLR0jFmGAjANCC2jlo8avGoxaMWj1pMH4tFRUTCQoMEBQX+//9PV4slJMWBtjo7OZCnnZGMarG0OF9NXZWZifnxk6cvXrz8/v37/AWLGRkZSTKEhVRbgUBZRdnK0gLIMDc3vX37zu49+0m1lRyLgTEqIy0F56qqqty7/4BUQxjIiGMuLk5ZOVlkEQsLMzIsJtnHOjraL1+8BDJY2Vh///7DAE7SCgpyDx48IskckhMXJPPw8/PFxUY9e/Zi+45d3759AxlEYjSTZjEvL4+erg7QDmdnRzFRESDj4aPH+/Yf5OLkPHT4KEkZmjSLPTxc21oa2djZnj9/ISEu9u/f/w8fPoiICP/69Ss8Iu7W7TvEG0Va4jp48MinT5+AYSolKcHExMTCwgy0FSh+9dr1m7duk2QUaRYDy4qKylqg/5AFgXHc3NxBahwzi4pJEa+ah4f72/fvN2/e1lBXA6YvoMj16zeaWjqePn32//+/X79+E289CXEMDFtlZSU+Pl4ODg5WVhZgkQkU/Pv376/fv398//7x06e7d+8T7wcS8vG/f/9uk5J88IMhWB+PWjxq8ajFoxaPOIsBAQAA///QWpaZLGpBLgAAAABJRU5ErkJggg=="},function(t,e,i){i(22);var s=i(0)(i(6),i(36),null,null);t.exports=s.exports},function(t,e,i){i(20);var s=i(0)(i(7),i(34),null,null);t.exports=s.exports},function(t,e,i){i(18);var s=i(0)(i(8),i(32),null,null);t.exports=s.exports},function(t,e,i){i(19);var s=i(0)(i(9),i(33),null,null);t.exports=s.exports},function(t,e,i){i(21);var s=i(0)(i(10),i(35),null,null);t.exports=s.exports},function(t,e,i){i(17);var s=i(0)(i(11),i(31),null,null);t.exports=s.exports},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ylf-toolbar",attrs:{id:"toolbar"}},[i("div",{staticClass:"ylf-toolbar__container"},[i("div",{staticClass:"ylf-toolbar__left"},[i("a",{staticClass:"name"},[t._v("yelingfeng")]),t._v(" "),t._m(0),t._v(" "),i("a",{staticClass:"divider"}),t._v(" "),t._l(t.iconArr,function(t){return i("a",[i("i",{class:["fa","fa-"+t]})])})],2),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"avatar",attrs:{href:"https://github.com/yelingfeng",target:"_blank"}},[s("img",{attrs:{src:i(24),height:"20",width:"20"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ylf-toolbar__right"},[i("a",{staticClass:"launch"},[i("i",{staticClass:"fa fa-rocket"}),t._v("运行")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"ylf-screens ps-container",style:t.containerObj},[i("div",{ref:"inner",staticClass:"ylf-screens__container"},[i("div",{staticClass:"screen",style:t.screenObj},[i("div",{staticClass:"canvas",attrs:{id:"canvas-container"}},[i("div",{staticClass:"sgrid"}),t._v(" "),i("div",{staticClass:"vertical_line left",staticStyle:{left:"100px",display:"block"}}),t._v(" "),i("div",{staticClass:"vertical_line top"}),t._v(" "),i("div",{staticClass:"vertical_line right"}),t._v(" "),i("div",{staticClass:"horizon_line left "}),t._v(" "),i("div",{staticClass:"horizon_line top",staticStyle:{top:"300px",display:"block"}}),t._v(" "),i("div",{staticClass:"horizon_line right"}),t._v(" "),t._l(t.getComps,function(t){return i("elementBox",{attrs:{options:t}})})],2),t._v(" "),t._m(0)])]),t._v(" "),i("div",{ref:"minimap",staticClass:"ylf-screens__minimap"},[i("div",{staticClass:"ylf-screens__minimap--indicator"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"actions"},[i("div",{staticClass:"resizer_y resizer"},[i("span",{staticClass:"enlarge"},[i("i",{staticClass:"fa fa-chevron-down"})]),t._v(" "),i("span",{staticClass:"tip"},[t._v("拖动调节页面高度")]),t._v(" "),i("span",{staticClass:"reduce"},[i("i",{staticClass:"fa fa-chevron-up"})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["ylf-compArea",t.isModel?"model":""]},[i("a",{staticClass:"ltoggle",on:{click:t.leftToggle}},[i("i",{class:["fa",t.isModel?"fa-angle-right":"fa-angle-left"]})]),t._v(" "),i("div",{class:["ylf-compArea__containers",t.isModel?"model":""]},[i("div",{staticClass:"items"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isModel,expression:"!isModel"}],staticClass:"group"},[i("div",{staticClass:"title"},[t._v("基本")])]),t._v(" "),t._l(t.compItems,function(e,s){return i("div",{staticClass:"item",on:{click:function(i){t.clickAction(e)}}},[i("div",{staticClass:"component"},[i("span",[t._v(t._s(e.name))])])])})],2)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ylf-compArea__footer"},[i("a",{attrs:{href:"javascript:;"}},[i("i",{staticClass:"fa fa-pinterest"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-group"},[i("span",{staticClass:"input-group-addon",on:{click:t.minusClick}},[i("i",{staticClass:"fa fa-minus"})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{type:"text"},domProps:{value:t._s(t.val)},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}}),t._v(" "),i("span",{staticClass:"input-group-addon",on:{click:t.plusClick}},[i("i",{staticClass:"fa fa-plus"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"rightnav"}},[i("div",{staticClass:"ylf-rightnav",style:t.rootStyle},[i("a",{staticClass:"rtoggle",on:{click:t.toggleNav}},[i("i",{class:["fa",0==t.navRight?"fa-angle-right":"fa-angle-left"]})]),t._v(" "),i("div",{staticClass:"ylf-rightnav__container"},[i("div",{staticClass:"ylf-rightnav__toolbox",staticStyle:{top:"10px",right:"-1px"}},[i("div",{staticClass:"body"},[i("div",{staticClass:"group"},[i("div",{staticClass:"half"},[i("inputNum",{attrs:{model:t.x},on:{change:t.changeNum}}),t._v(" "),i("label",{staticClass:"center"},[t._v("X")])],1),t._v(" "),i("div",{staticClass:"half"},[i("inputNum",{attrs:{model:t.y},on:{change:t.changeNum}}),t._v(" "),i("label",{staticClass:"center"},[t._v("Y")])],1),t._v(" "),i("div",{staticClass:"half"},[i("inputNum",{attrs:{model:t.w},on:{change:t.changeNum}}),t._v(" "),i("label",{staticClass:"center"},[t._v("宽")])],1),t._v(" "),i("div",{staticClass:"half"},[i("inputNum",{attrs:{model:t.h},on:{change:t.changeNum}}),t._v(" "),i("label",{staticClass:"center"},[t._v("高")])],1)])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"workspace"},[i("Toolbar"),t._v(" "),i("ComponentsBox"),t._v(" "),i("Screens"),t._v(" "),i("RightNav")],1)},staticRenderFns:[]}},,,function(t,e){t.exports=jQuery},function(t,e,i){t.exports=i(5)}],[40]);