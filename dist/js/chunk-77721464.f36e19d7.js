(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77721464"],{2315:function(t,e,n){"use strict";n.r(e);var r=n("5c40"),o=n("b2c2"),i=n("4d91"),c=n("daa3"),a=n("4df5"),l=n("b8ae"),u=n.n(l),s=n("2fc4"),f=n("27fd"),d=n("63c4"),b=n("e5cd");function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={backIcon:i["a"].any,prefixCls:i["a"].string,title:i["a"].any,subTitle:i["a"].any,breadcrumb:i["a"].object,tags:i["a"].any,footer:i["a"].any,extra:i["a"].any,avatar:i["a"].object,ghost:i["a"].bool,onBack:i["a"].func},g=function(t,e,n,o){return n&&o?r["v"](b["a"],{componentName:"PageHeader",children:function(o){var i=o.back;return r["v"]("div",{class:"".concat(e,"-back")},[r["v"](d["a"],{onClick:function(e){t.$emit("back",e)},class:"".concat(e,"-back-button"),"aria-label":i},{default:function(){return[n]}})])}},null):null},O=function(t){return r["v"](s["a"],t,null)},y=function(t,e){var n=e.avatar,o=Object(c["e"])(e,"title"),i=Object(c["e"])(e,"subTitle"),a=Object(c["e"])(e,"tags"),l=Object(c["e"])(e,"extra"),s=void 0!==Object(c["e"])(e,"backIcon")?Object(c["e"])(e,"backIcon"):r["v"](u.a,null,null),d=e.onBack,b="".concat(t,"-heading");if(o||i||a||l){var v=g(e,t,s,d);return r["v"]("div",{class:b},[v,n&&r["v"](f["a"],n,null),o&&r["v"]("span",{class:"".concat(b,"-title")},[o]),i&&r["v"]("span",{class:"".concat(b,"-sub-title")},[i]),a&&r["v"]("span",{class:"".concat(b,"-tags")},[a]),l&&r["v"]("span",{class:"".concat(b,"-extra")},[l])])}return null},h=function(t,e){return e?r["v"]("div",{class:"".concat(t,"-footer")},[e]):null},j=function(t,e){return r["v"]("div",{class:"".concat(t,"-content")},[e])},w={name:"APageHeader",props:p,setup:function(){return{configProvider:Object(r["E"])("configProvider",a["a"])}},render:function(){var t=this.configProvider,e=t.getPrefixCls,n=t.pageHeader,o=Object(c["h"])(this),i=o.prefixCls,a=o.breadcrumb,l=Object(c["e"])(this,"footer"),u=Object(c["j"])(this),s=!0;"ghost"in o?s=o.ghost:n&&"ghost"in n&&(s=n.ghost);var f=e("page-header",i),d=a&&a.routes?O(a):null,b=[f,v({"has-breadcrumb":d,"has-footer":l},"".concat(f,"-ghost"),s)];return r["v"]("div",{class:b},[d,y(f,this),u.length?j(f,u):null,h(f,l)])},install:function(t){t.component(w.name,w)}},m=w,P=n("cdeb"),k=Object(r["y"])((function(t,e){return function(){return r["v"](r["c"],null,[t.tag?Object(r["v"])(t.tag,e.attrs):Object(r["v"])(e.slots.default,e.attrs)])}}));k.props={tag:[Object,Function]};var x=k,T=n("17bb"),S=n("8fa2"),C=function(t){return r["v"](x,{tag:m,title:t.title,"sub-title":t["sub-title"],onBack:t.onBack},null)},E=function(t){return r["v"](x,r["L"](t,{tag:m}),null)};e["default"]=Object(r["y"])((function(){return function(){return r["v"](o["a"],{title:"内置的container组件使用"},{default:function(){return[r["u"]("在编写tsx形式时候，往往会遇到很多不能很好的兼容tsx的组件，此时可以使用Container组件，来使用那些不能很好兼容的组件，代码如下"),r["v"](T["a"],null,null),r["v"](P["a"],{bodyStyle:{padding:0},title:"第一种声明方式"},{default:function(){return[r["v"](C,{title:"Title","sub-title":"2222222222"},null)]}}),r["v"](T["a"],null,null),r["v"](P["a"],{bodyStyle:{padding:0},title:"第二种声明方式"},{default:function(){return[r["v"](x,{title:"Title",onBack:function(){return null},"sub-title":"This is a subtitle",tag:m},null)]}}),r["v"](T["a"],null,null),r["v"](P["a"],{bodyStyle:{padding:0},title:"第三种声明方式"},{default:function(){return[r["v"](E,{backIcon:r["v"](S["a"],null,null),onBack:function(){return null},title:"Title","sub-title":"2222222222"},null)]}}),r["v"](T["a"],null,null),r["v"](P["a"],{bodyStyle:{padding:"20px"},title:"给不支持事件的组件添加操作事件"},{default:function(){return[r["u"]("点击图标"),r["v"](x,{tag:S["a"],onClick:function(){return alert("点击了图标")},style:{fontSize:"40px",color:"blue"}},null)]}})]}})}}))},"58c4":function(t,e,n){"use strict";function r(t,e){if("undefined"===typeof window)return 0;var n=e?"pageYOffset":"pageXOffset",r=e?"scrollTop":"scrollLeft",o=t===window,i=o?t[n]:t[r];return o&&"number"!==typeof i&&(i=window.document.documentElement[r]),i}n.d(e,"a",(function(){return r}))},"63c4":function(t,e,n){"use strict";var r=n("5c40"),o=n("18a7"),i=n("4d91");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},s={name:"TransButton",inheritAttrs:!1,props:{noStyle:i["a"].bool,onClick:i["a"].func},methods:{onKeyDown:function(t){var e=t.keyCode;e===o["a"].ENTER&&t.preventDefault()},onKeyUp:function(t){var e=t.keyCode;e===o["a"].ENTER&&this.$emit("click",t)},setRef:function(t){this.$refs.div=t},focus:function(){this.$refs.div&&this.$refs.div.focus()},blur:function(){this.$refs.div&&this.$refs.div.blur()}},render:function(){var t=this.$props,e=t.noStyle,n=t.onClick;return r["v"]("div",r["L"](this.$attrs,{role:"button",tabindex:0,ref:"div",onClick:n,onKeydown:this.onKeyDown,onKeyup:this.onKeyUp,style:a({},e?null:u)}),[this.$slots.default&&this.$slots.default()])}};e["a"]=s},"6b2a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};e.default=r},7966:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=l(n("830f")),o=c(n("6b2a")),i=c(n("a1a0"));function c(t){return t&&t.__esModule?t:{default:t}}function a(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}function l(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}return n["default"]=t,e&&e.set(t,n),n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){s(t,e,n[e])}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){var n=u({},t,e.attrs);return r.createVNode(i["default"],r.mergeProps(n,{icon:o["default"]}),null)};f.displayName="ArrowLeftOutlined",f.inheritAttrs=!1;var d=f;e["default"]=d},b2c2:function(t,e,n){"use strict";var r=n("5c40"),o=n("a1e9"),i=n("830f"),c=n("4d26"),a=n.n(c),l=n("4d91"),u=function(){return{visibilityHeight:l["a"].number,target:l["a"].func,prefixCls:l["a"].string,onClick:l["a"].func}},s=n("c8c6"),f=n("58c4"),d=n("b488"),b=n("94eb"),v=n("4df5"),p=n("e60e");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(){return window}var j=u(),w={name:"ABackTop",inheritAttrs:!1,mixins:[d["a"]],props:O(O({},j),{},{visibilityHeight:l["a"].number.def(400)}),setup:function(){return{configProvider:Object(r["E"])("configProvider",v["a"])}},data:function(){return this.scrollEvent=null,{visible:!1}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.target||h;t.scrollEvent=Object(s["a"])(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=this.target||h,e=t();return e===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop},scrollToTop:function(t){var e=this.target,n=void 0===e?h:e;Object(p["a"])(0,{getContainer:n}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,n=void 0===e?h:e,r=Object(f["a"])(n(),!0);this.setState({visible:r>t})}},render:function(){var t=this.prefixCls,e=this.$slots,n=this.configProvider.getPrefixCls,o=n("back-top",t),c=a()(o,this.$attrs.class),l=r["v"]("div",{class:"".concat(o,"-content")},[r["v"]("div",{class:"".concat(o,"-icon")},null)]),u=O(O({},this.$attrs),{},{onClick:this.scrollToTop,class:c}),s=this.visible?r["v"]("div",u,[e.default&&e.default()||l]):null,f=Object(b["a"])("fade");return r["v"](i["Transition"],f,{default:function(){return[s]}})},install:function(t){t.component(w.name,w)}},m=w,P=(n("fe6b"),n("590e")),k=Object(r["y"])((function(t,e){var n,i=Object(o["m"])(0),c=Object(o["m"])(null),a=Object(o["m"])();return Object(r["T"])((function(){n=new P({element:a.value}).create(),c.value=n._viewElement})),Object(r["N"])((function(){})),Object(r["N"])((function(){i.value&&(n._viewElement.scrollTop=i.value)})),Object(r["W"])((function(){n.destroy()})),function(){return r["v"]("div",{style:{position:"relative",background:t.color,height:"100%",overflow:"auto"}},[r["v"]("div",{ref:a},[r["v"]("div",{style:{padding:"10px 20px",boxSizing:"border-box"}},[t.title&&r["v"]("div",{style:{fontSize:"30px",marginBottom:"20px",letterSpacing:"2px"}},[t.title]),e.slots.default&&e.slots.default()])]),r["v"](m,{target:function(){return c.value}},null)])}}));k.props={color:{type:String,default:"#f5f5f5"},title:{type:[String,String]}};e["a"]=k},b8ae:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("7966"));function o(t){return t&&t.__esModule?t:{default:t}}var i=r;e.default=i,t.exports=i},e60e:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("c449"),o=n.n(r),i=n("58c4");function c(t,e,n,r){var o=n-e;return t/=r/2,t<1?o/2*t*t*t+e:o/2*((t-=2)*t*t+2)+e}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getContainer,r=void 0===n?function(){return window}:n,a=e.callback,l=e.duration,u=void 0===l?450:l,s=r(),f=Object(i["a"])(s,!0),d=Date.now(),b=function e(){var n=Date.now(),r=n-d,i=c(r>u?u:r,f,t,u);s===window?window.scrollTo(window.pageXOffset,i):s.scrollTop=i,r<u?o()(e):"function"===typeof a&&a()};o()(b)}}}]);
//# sourceMappingURL=chunk-77721464.f36e19d7.js.map