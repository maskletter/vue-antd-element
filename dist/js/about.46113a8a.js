(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"29da":function(e,t,i){"use strict";i.r(t);i("d81d");var l=i("5c40"),n=i("387a"),r=i("cdeb"),a=i("17bb");t["default"]=Object(l["y"])((function(){var e=[{time:"2019-11-06",title:"初始化模板"},{time:"2019-11-07",title:"更新ml-table功能",data:["添加axios库,添加内置模拟接口api","更新ml-table功能,添加url属性","更新ml-table功能,添加自动分页功能"]},{time:"2019-11-13",title:"更新编辑器功能",data:["更新了首页的显示","添加了ckeditor4的组件封装","添加了simplemde的组件封装","添加了粘贴图片,打开.md文件等功能","添加了echart图像库"]},{time:"2019-11-27",title:"添加权限认证功能",data:["添加权限管理页面","添加权限组管理页面","添加用户管理页面","添加权限路由控制功能"]},{time:"2019-12-02",title:"删减打包体积",data:["公共库更换CDN调用","控制打包体积在500kb内","cdn使用库:cropperjs,simplemde,echarts,highlight,axios"]},{time:"2020-01-09",title:"更新左侧导航",data:["使左侧菜单可以被弹窗方式打开","router的meta中配置dialog:true"]},{time:"2020-08-24",title:"重大版本更新",data:["vue2 -> vue3","elementui -> antd for vue","编写方式更换成tsx模式开发"]}];return function(){return l["v"](n["a"],null,{default:function(){return[e.reverse().map((function(e,t){var i;return l["v"](n["a"].Item,{key:t},{default:function(){return[l["v"](r["a"],{hoverable:!0},{default:function(){return[e.title&&l["v"]("h4",{style:{fontWeight:"bold"}},[e.title]),l["v"](a["a"],null,null),null===(i=e.data)||void 0===i?void 0:i.map((function(e,t){return l["v"]("p",{key:t,style:{marginBottom:"5px"}},[t+1,l["u"](". "),e])}))]}})]}})}))]}})}}))},"590e":function(e,t,i){
/**
 * gemini-scrollbar
 * @version 1.5.3
 * @link http://noeldelgado.github.io/gemini-scrollbar/
 * @license MIT
 */
(function(){var t,i,l;function n(){var e,t=document.createElement("div");return t.style.position="absolute",t.style.top="-9999px",t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}function r(e,t){if(e.classList)return t.forEach((function(t){e.classList.add(t)}));e.className+=" "+t.join(" ")}function a(e,t){if(e.classList)return t.forEach((function(t){e.classList.remove(t)}));e.className=e.className.replace(new RegExp("(^|\\b)"+t.join("|")+"(\\b|$)","gi")," ")}function s(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}function o(e){this.element=null,this.autoshow=!1,this.createElements=!0,this.forceGemini=!1,this.onResize=null,this.minThumbSize=20,Object.keys(e||{}).forEach((function(t){this[t]=e[t]}),this),t=n(),i=0===t&&!1===this.forceGemini,this._cache={events:{}},this._created=!1,this._cursorDown=!1,this._prevPageX=0,this._prevPageY=0,this._document=null,this._viewElement=this.element,this._scrollbarVerticalElement=null,this._thumbVerticalElement=null,this._scrollbarHorizontalElement=null,this._scrollbarHorizontalElement=null}l={element:"gm-scrollbar-container",verticalScrollbar:"gm-scrollbar -vertical",horizontalScrollbar:"gm-scrollbar -horizontal",thumb:"thumb",view:"gm-scroll-view",autoshow:"gm-autoshow",disable:"gm-scrollbar-disable-selection",prevented:"gm-prevented",resizeTrigger:"gm-resize-trigger"},o.prototype.create=function(){if(i){if(r(this.element,[l.prevented]),this.onResize){if(!0===this.createElements){this._viewElement=document.createElement("div");while(this.element.childNodes.length>0)this._viewElement.appendChild(this.element.childNodes[0]);this.element.appendChild(this._viewElement)}else this._viewElement=this.element.querySelector("."+l.view);r(this.element,[l.element]),r(this._viewElement,[l.view]),this._createResizeTrigger()}return this}if(!0===this._created)return console.warn("calling on a already-created object"),this;if(this.autoshow&&r(this.element,[l.autoshow]),this._document=document,!0===this.createElements){this._viewElement=document.createElement("div"),this._scrollbarVerticalElement=document.createElement("div"),this._thumbVerticalElement=document.createElement("div"),this._scrollbarHorizontalElement=document.createElement("div"),this._thumbHorizontalElement=document.createElement("div");while(this.element.childNodes.length>0)this._viewElement.appendChild(this.element.childNodes[0]);this._scrollbarVerticalElement.appendChild(this._thumbVerticalElement),this._scrollbarHorizontalElement.appendChild(this._thumbHorizontalElement),this.element.appendChild(this._scrollbarVerticalElement),this.element.appendChild(this._scrollbarHorizontalElement),this.element.appendChild(this._viewElement)}else this._viewElement=this.element.querySelector("."+l.view),this._scrollbarVerticalElement=this.element.querySelector("."+l.verticalScrollbar.split(" ").join(".")),this._thumbVerticalElement=this._scrollbarVerticalElement.querySelector("."+l.thumb),this._scrollbarHorizontalElement=this.element.querySelector("."+l.horizontalScrollbar.split(" ").join(".")),this._thumbHorizontalElement=this._scrollbarHorizontalElement.querySelector("."+l.thumb);return r(this.element,[l.element]),r(this._viewElement,[l.view]),r(this._scrollbarVerticalElement,l.verticalScrollbar.split(/\s/)),r(this._scrollbarHorizontalElement,l.horizontalScrollbar.split(/\s/)),r(this._thumbVerticalElement,[l.thumb]),r(this._thumbHorizontalElement,[l.thumb]),this._scrollbarVerticalElement.style.display="",this._scrollbarHorizontalElement.style.display="",this._createResizeTrigger(),this._created=!0,this._bindEvents().update()},o.prototype._createResizeTrigger=function(){var e=document.createElement("object");r(e,[l.resizeTrigger]),e.type="text/html",e.setAttribute("tabindex","-1");var t=this._resizeHandler.bind(this);e.onload=function(){var i=e.contentDocument.defaultView;i.addEventListener("resize",t)},s()||(e.data="about:blank"),this.element.appendChild(e),s()&&(e.data="about:blank"),this._resizeTriggerElement=e},o.prototype.update=function(){return i?this:!1===this._created?(console.warn("calling on a not-yet-created object"),this):(this._viewElement.style.width=(this.element.offsetWidth+t).toString()+"px",this._viewElement.style.height=(this.element.offsetHeight+t).toString()+"px",this._naturalThumbSizeX=this._scrollbarHorizontalElement.clientWidth/this._viewElement.scrollWidth*this._scrollbarHorizontalElement.clientWidth,this._naturalThumbSizeY=this._scrollbarVerticalElement.clientHeight/this._viewElement.scrollHeight*this._scrollbarVerticalElement.clientHeight,this._scrollTopMax=this._viewElement.scrollHeight-this._viewElement.clientHeight,this._scrollLeftMax=this._viewElement.scrollWidth-this._viewElement.clientWidth,this._naturalThumbSizeY<this.minThumbSize?this._thumbVerticalElement.style.height=this.minThumbSize+"px":this._scrollTopMax?this._thumbVerticalElement.style.height=this._naturalThumbSizeY+"px":this._thumbVerticalElement.style.height="0px",this._naturalThumbSizeX<this.minThumbSize?this._thumbHorizontalElement.style.width=this.minThumbSize+"px":this._scrollLeftMax?this._thumbHorizontalElement.style.width=this._naturalThumbSizeX+"px":this._thumbHorizontalElement.style.width="0px",this._thumbSizeY=this._thumbVerticalElement.clientHeight,this._thumbSizeX=this._thumbHorizontalElement.clientWidth,this._trackTopMax=this._scrollbarVerticalElement.clientHeight-this._thumbSizeY,this._trackLeftMax=this._scrollbarHorizontalElement.clientWidth-this._thumbSizeX,this._scrollHandler(),this)},o.prototype.destroy=function(){if(this._resizeTriggerElement&&(this.element.removeChild(this._resizeTriggerElement),this._resizeTriggerElement=null),i)return this;if(!1===this._created)return console.warn("calling on a not-yet-created object"),this;if(this._unbinEvents(),a(this.element,[l.element,l.autoshow]),!0===this.createElements){this.element.removeChild(this._scrollbarVerticalElement),this.element.removeChild(this._scrollbarHorizontalElement);while(this._viewElement.childNodes.length>0)this.element.appendChild(this._viewElement.childNodes[0]);this.element.removeChild(this._viewElement)}else this._viewElement.style.width="",this._viewElement.style.height="",this._scrollbarVerticalElement.style.display="none",this._scrollbarHorizontalElement.style.display="none";return this._created=!1,this._document=null,null},o.prototype.getViewElement=function(){return this._viewElement},o.prototype._bindEvents=function(){return this._cache.events.scrollHandler=this._scrollHandler.bind(this),this._cache.events.clickVerticalTrackHandler=this._clickVerticalTrackHandler.bind(this),this._cache.events.clickHorizontalTrackHandler=this._clickHorizontalTrackHandler.bind(this),this._cache.events.clickVerticalThumbHandler=this._clickVerticalThumbHandler.bind(this),this._cache.events.clickHorizontalThumbHandler=this._clickHorizontalThumbHandler.bind(this),this._cache.events.mouseUpDocumentHandler=this._mouseUpDocumentHandler.bind(this),this._cache.events.mouseMoveDocumentHandler=this._mouseMoveDocumentHandler.bind(this),this._viewElement.addEventListener("scroll",this._cache.events.scrollHandler),this._scrollbarVerticalElement.addEventListener("mousedown",this._cache.events.clickVerticalTrackHandler),this._scrollbarHorizontalElement.addEventListener("mousedown",this._cache.events.clickHorizontalTrackHandler),this._thumbVerticalElement.addEventListener("mousedown",this._cache.events.clickVerticalThumbHandler),this._thumbHorizontalElement.addEventListener("mousedown",this._cache.events.clickHorizontalThumbHandler),this._document.addEventListener("mouseup",this._cache.events.mouseUpDocumentHandler),this},o.prototype._unbinEvents=function(){return this._viewElement.removeEventListener("scroll",this._cache.events.scrollHandler),this._scrollbarVerticalElement.removeEventListener("mousedown",this._cache.events.clickVerticalTrackHandler),this._scrollbarHorizontalElement.removeEventListener("mousedown",this._cache.events.clickHorizontalTrackHandler),this._thumbVerticalElement.removeEventListener("mousedown",this._cache.events.clickVerticalThumbHandler),this._thumbHorizontalElement.removeEventListener("mousedown",this._cache.events.clickHorizontalThumbHandler),this._document.removeEventListener("mouseup",this._cache.events.mouseUpDocumentHandler),this._document.removeEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this},o.prototype._scrollHandler=function(){var e=this._viewElement.scrollLeft*this._trackLeftMax/this._scrollLeftMax||0,t=this._viewElement.scrollTop*this._trackTopMax/this._scrollTopMax||0;this._thumbHorizontalElement.style.msTransform="translateX("+e+"px)",this._thumbHorizontalElement.style.webkitTransform="translate3d("+e+"px, 0, 0)",this._thumbHorizontalElement.style.transform="translate3d("+e+"px, 0, 0)",this._thumbVerticalElement.style.msTransform="translateY("+t+"px)",this._thumbVerticalElement.style.webkitTransform="translate3d(0, "+t+"px, 0)",this._thumbVerticalElement.style.transform="translate3d(0, "+t+"px, 0)"},o.prototype._resizeHandler=function(){this.update(),this.onResize&&this.onResize()},o.prototype._clickVerticalTrackHandler=function(e){if(e.target===e.currentTarget){var t=e.offsetY-.5*this._naturalThumbSizeY,i=100*t/this._scrollbarVerticalElement.clientHeight;this._viewElement.scrollTop=i*this._viewElement.scrollHeight/100}},o.prototype._clickHorizontalTrackHandler=function(e){if(e.target===e.currentTarget){var t=e.offsetX-.5*this._naturalThumbSizeX,i=100*t/this._scrollbarHorizontalElement.clientWidth;this._viewElement.scrollLeft=i*this._viewElement.scrollWidth/100}},o.prototype._clickVerticalThumbHandler=function(e){this._startDrag(e),this._prevPageY=this._thumbSizeY-e.offsetY},o.prototype._clickHorizontalThumbHandler=function(e){this._startDrag(e),this._prevPageX=this._thumbSizeX-e.offsetX},o.prototype._startDrag=function(e){this._cursorDown=!0,r(document.body,[l.disable]),this._document.addEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this._document.onselectstart=function(){return!1}},o.prototype._mouseUpDocumentHandler=function(){this._cursorDown=!1,this._prevPageX=this._prevPageY=0,a(document.body,[l.disable]),this._document.removeEventListener("mousemove",this._cache.events.mouseMoveDocumentHandler),this._document.onselectstart=null},o.prototype._mouseMoveDocumentHandler=function(e){var t,i;if(!1!==this._cursorDown)return this._prevPageY?(t=e.clientY-this._scrollbarVerticalElement.getBoundingClientRect().top,i=this._thumbSizeY-this._prevPageY,void(this._viewElement.scrollTop=this._scrollTopMax*(t-i)/this._trackTopMax)):void(this._prevPageX&&(t=e.clientX-this._scrollbarHorizontalElement.getBoundingClientRect().left,i=this._thumbSizeX-this._prevPageX,this._viewElement.scrollLeft=this._scrollLeftMax*(t-i)/this._trackLeftMax))},e.exports=o})()},"62ce":function(e,t,i){},"6ae7":function(e,t,i){},7029:function(e,t,i){"use strict";var l=i("62ce"),n=i.n(l);i.d(t,"default",(function(){return n.a}))},b2c2:function(e,t,i){"use strict";var l=i("5c40"),n=i("a1e9"),r=i("83d8"),a=i("8c4f"),s=(i("fe6b"),i("590e")),o=Object(l["y"])((function(e,t){var i,o=Object(n["m"])(0),c=Object(n["m"])(null),h=Object(n["m"])();return Object(l["T"])((function(){i=new s({element:h.value}).create(),c.value=i._viewElement})),Object(l["N"])((function(){})),Object(l["N"])((function(){o.value&&(i._viewElement.scrollTop=o.value)})),Object(a["d"])((function(e,t,i){o.value=c.value.scrollTop,i()})),Object(l["W"])((function(){i.destroy()})),function(){return l["v"]("div",{style:{position:"relative",background:e.color,height:"100%",overflow:"auto"}},[l["v"]("div",{ref:h},[l["v"]("div",{style:{padding:"10px 20px",boxSizing:"border-box"}},[e.title&&l["v"]("div",{style:{fontSize:"30px",marginBottom:"20px",letterSpacing:"2px"}},[e.title]),t.slots.default&&t.slots.default()])]),l["v"](r["a"],{target:function(){return c.value}},null)])}}));o.props={color:{type:String,default:"#f5f5f5"},title:{type:[String,String]}},t["a"]=o},ba29:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var l=i("5c40"),n=i("9ff4"),r=Object(l["Mb"])("data-v-0b22e927");Object(l["cb"])("data-v-0b22e927");var a={class:"hello"},s=Object(l["t"])('<p data-v-0b22e927> For a guide and recipes on how to configure / customize this project,<br data-v-0b22e927> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>vue-cli documentation</a>. </p><h3 data-v-0b22e927>Installed CLI Plugins</h3><ul data-v-0b22e927><li data-v-0b22e927><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-0b22e927>babel</a></li><li data-v-0b22e927><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-0b22e927>typescript</a></li><li data-v-0b22e927><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-0b22e927>router</a></li><li data-v-0b22e927><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-0b22e927>vuex</a></li><li data-v-0b22e927><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-0b22e927>eslint</a></li></ul><h3 data-v-0b22e927>Essential Links</h3><ul data-v-0b22e927><li data-v-0b22e927><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>Core Docs</a></li><li data-v-0b22e927><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>Forum</a></li><li data-v-0b22e927><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>Community Chat</a></li><li data-v-0b22e927><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-0b22e927>Twitter</a></li><li data-v-0b22e927><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>News</a></li></ul><h3 data-v-0b22e927>Ecosystem</h3><ul data-v-0b22e927><li data-v-0b22e927><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>vue-router</a></li><li data-v-0b22e927><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>vuex</a></li><li data-v-0b22e927><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-0b22e927>vue-devtools</a></li><li data-v-0b22e927><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-0b22e927>vue-loader</a></li><li data-v-0b22e927><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-0b22e927>awesome-vue</a></li></ul>',7);Object(l["Z"])();var o=r((function(e,t){return Object(l["Y"])(),Object(l["o"])("div",a,[Object(l["v"])("h1",null,Object(n["F"])(e.msg),1),s])}))},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"},dc6b:function(e,t,i){"use strict";i("6ae7")},f820:function(e,t,i){"use strict";i.r(t);var l=i("5c40"),n=i("cf05"),r=i.n(n),a=Object(l["v"])("img",{alt:"Vue logo",src:r.a},null,-1);function s(e,t){var i=Object(l["kb"])("HelloWorld"),n=Object(l["kb"])("Page");return Object(l["Y"])(),Object(l["o"])(n,{class:"about",style:{"text-align":"center"}},{default:Object(l["Kb"])((function(){return[a,Object(l["v"])(i)]})),_:1})}var o=i("b2c2"),c=i("fdab"),h={components:{Page:o["a"],HelloWorld:c["default"]},created:function(){}};h.render=s;t["default"]=h},fdab:function(e,t,i){"use strict";var l=i("ba29"),n=i("7029");i("dc6b");n["default"].render=l["a"],n["default"].__scopeId="data-v-0b22e927",t["default"]=n["default"]},fe6b:function(e,t,i){}}]);
//# sourceMappingURL=about.46113a8a.js.map