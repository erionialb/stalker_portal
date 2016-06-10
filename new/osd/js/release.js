/*! magsdk-osd: v0.0.3 (webpack: v1.13.0) */
!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(4),o=n(3),s=n(2),a=n(11),d=new a({value:gSTB.GetVolume(),max:100,min:0}),r=window.parent.document.createElement("div"),c=window.parent.document.createElement("div"),l=window.parent.document.createElement("div"),u=window.parent.document.createElement("div"),h=window.parent.document.createElement("div"),p=5e3,v=-1,m=-1,f=!!gSTB.GetMute();i.addListeners({load:function(){var t,e=window.core.plugins.ufs.loadSync();try{e=JSON.parse(e)}catch(a){e={}}t=location.protocol+"//"+location.host+location.pathname.replace("index.html",""),i.visible=!1,o.init([n(6)]),o.navigate("pageMain"),i.muteWidget=window.core.widget({visible:!1,events:{show:function(){i.volumeWidget.hide()}}}),i.muteWidget.$node.style.display="none",i.muteWidget.$node.className+=" osdPanel",i.volumeWidget=window.core.widget({visible:!1,events:{show:function(){i.muteWidget.hide()}}}),i.volumeWidget.$node.style.display="none",i.volumeWidget.$node.className+=" osdPanel",i.notifyWidget=window.core.widget({visible:!1,events:{show:function(){}}}),i.notifyWidget.$node.style.display="none",i.muteWidget.$node.innerText="B";var g=new XMLHttpRequest;g.open("GET",i.linkThemeCSS+i.data.metrics.height+".css"),g.onload=function(){var t;t=window.parent.document.createElement("style"),t.innerHTML=this.responseText.replace('src: url("icons.ttf")','src: url("'+i.linkThemeCSS+'icons.ttf")'),window.parent.document.head.appendChild(t)},g.send(null);var w=new XMLHttpRequest;w.open("GET",t+i.linkCSS),w.onload=function(){var t;t=window.parent.document.createElement("style"),t.innerHTML=this.responseText.replace(/#muteWidget/g,"."+i.muteWidget.className).replace(/#volumeWidget/g,"."+i.volumeWidget.className).replace(/#notifyWidget/g,"."+i.notifyWidget.className),window.parent.document.head.appendChild(t),i.muteWidget.$node.style.display="",i.volumeWidget.$node.style.display="",i.notifyWidget.$node.style.display=""},w.send(null),i.volumeWidget.$body.appendChild(r),r.className="icon volume",i.volumeWidget.children.push(d),d.parent=i.volumeWidget,d.$node&&null===d.$node.parentNode&&i.volumeWidget.$body.appendChild(d.$node),d.$node.className="component progressBar",d.$value.className+=" osdFocusItem",c.className="pointer osdFocusItem",d.$node.appendChild(c),i.volumeWidget.$node.appendChild(l),l.className="textValue",l.innerText=d.value,d.addListener("change",function(t){l.innerText=t.curr,gSTB.SetVolume(t.curr)}),u.className="icon info",h.className="title",i.notifyWidget.$icon=i.notifyWidget.$body.appendChild(u),i.notifyWidget.$title=i.notifyWidget.$body.appendChild(h),i.volumeWidget.volumeChange=function(t){f&&i.volumeWidget.toggleMute(),100>=t&&t>=0&&(d.set(t),e.volume=t)},i.volumeWidget.volumeUp=function(){f&&i.volumeWidget.toggleMute(),i.volumeWidget.show(),d.value<100&&i.volumeWidget.volumeChange(d.value+5),clearTimeout(v),v=setTimeout(function(){i.volumeWidget.hide()},p)},i.volumeWidget.volumeDown=function(){f&&i.volumeWidget.toggleMute(),i.volumeWidget.show(),d.value>0&&i.volumeWidget.volumeChange(d.value-5),clearTimeout(v),v=setTimeout(function(){i.volumeWidget.hide()},p)},i.volumeWidget.toggleMute=function(t){t!==f&&(i.muteWidget.$node.style.display="",f?(i.muteWidget.hide(),gSTB.SetMute(0)):(i.muteWidget.show(),gSTB.SetMute(1)),e.mute=f=!f)},document.body.style.background="rgba(24, 24, 24, 0.7)",document.body.style.overflow="hidden",i.notifyWidget.init=function(t){var e=t.buttons&&t.buttons.length>0?" control":"";t.timeout=t.timeout||5e3,t.type=t.type||"",i.notifyWidget.$body.innerHTML="",i.notifyWidget.$body.appendChild(i.notifyWidget.$icon),i.notifyWidget.$body.appendChild(i.notifyWidget.$title),i.notifyWidget.$icon.className="icon "+t.icon,i.notifyWidget.$title.innerHTML=t.title,i.notifyWidget.$node.className=i.notifyWidget.className+" "+t.type+e,i.notifyWidget.visible=!0,t.buttons&&t.buttons.length>0?(i.notifyWidget.buttons=[],t.buttons.forEach(function(t,e){var n=window.parent.document.createElement("div");n.className="button",0===e&&(i.notifyWidget.currentButtonIndex=0,n.className="button focus"),n.innerText=t.value,n.onclick=t.click,i.notifyWidget.buttons.push(n),i.notifyWidget.$body.appendChild(n)}),setTimeout(function(){i.notifyWidget.show(),window.core.call("show"),i.visible=!0,window.core.call("focus")},300)):(i.visible&&(window.core.call("hide"),window.core.call("blur")),i.notifyWidget.buttons=!1,clearTimeout(m),m=setTimeout(function(){i.notifyWidget.hide()},t.timeout))},window.parent.extendCorePrototype("notify",i.notifyWidget.init),i.addListener("keydown",function(t){i.notifyWidget.visible&&i.notifyWidget.buttons&&(t.code===s.right?(i.notifyWidget.buttons[i.notifyWidget.currentButtonIndex].className="button",++i.notifyWidget.currentButtonIndex,i.notifyWidget.currentButtonIndex===i.notifyWidget.buttons.length&&(i.notifyWidget.currentButtonIndex=0),i.notifyWidget.buttons[i.notifyWidget.currentButtonIndex].className="button focus"):t.code===s.left?(i.notifyWidget.buttons[i.notifyWidget.currentButtonIndex].className="button",--i.notifyWidget.currentButtonIndex,i.notifyWidget.currentButtonIndex<0&&(i.notifyWidget.currentButtonIndex=i.notifyWidget.buttons.length-1),i.notifyWidget.buttons[i.notifyWidget.currentButtonIndex].className="button focus"):t.code===s.ok&&(i.notifyWidget.buttons[i.notifyWidget.currentButtonIndex].onclick(),i.notifyWidget.hide(),i.notifyWidget.visible=!1,i.notifyWidget.buttons=!1,window.core.call("hide"),window.core.call("blur")))}),e.mute&&i.volumeWidget.toggleMute(),e.volume&&i.volumeWidget.volumeChange(e.volume),window.addEventListener("unload",function(){window.core.plugins.ufs.saveSync(JSON.stringify(e))}),n(7).load({name:core.environment.language},function(){window.core.plugins.fs.onMount=function(t){t?window.core.notify({title:gettext("New device is connected"),icon:"info"}):window.core.notify({title:gettext("Device is disconnected"),icon:"info"})}})}})},function(t,e,n){"use strict";function i(){this.events={}}i.prototype={addListener:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},once:function(t,e){var n=this;this.events[t]=this.events[t]||[],this.events[t].push(function i(){e.apply(this,arguments),n.removeListener(t,i)})},addListeners:function(t){var e;if("object"==typeof t)for(e in t)t.hasOwnProperty(e)&&this.addListener(e,t[e])},removeListener:function(t,e){this.events[t]&&(this.events[t]=this.events[t].filter(function(t){return t!==e}),0===this.events[t].length&&(this.events[t]=void 0))},removeAllListeners:function(t){0===arguments.length?this.events={}:t&&(this.events[t]=void 0)},emit:function(t,e,n){var i,o=this.events[t];if(o)for(i=0;i<o.length;i++)o[i].apply(this,Array.prototype.slice.call(arguments,1))}},i.prototype.constructor=i,t.exports=i},function(t,e,n){"use strict";t.exports={back:8,"delete":46,channelPrev:1009,channelNext:9,ok:13,exit:27,up:38,down:40,left:37,right:39,pageUp:33,pageDown:34,end:35,home:36,volumeUp:107,volumeDown:109,f1:112,f2:113,f3:114,f4:115,refresh:116,frame:117,phone:119,set:120,tv:121,menu:122,web:123,mic:2032,rewind:2066,forward:2070,app:2076,usbMounted:2080,usbUnmounted:2081,playPause:2082,stop:2083,power:2085,record:2087,info:2089,mute:2192,clock:2032,audio:2071,keyboard:2076}},function(t,e,n){"use strict";var i,o=n(1);i=new o,i.current=null,i.history=[],i.pages=[],i.ids={},i.init=function(t){var e,n,i;if(t){for(this.pages=[],this.pages=t,e=0,n=t.length;n>e;e++)i=t[e],this.ids[i.id]=i,i.active&&(this.current=i);return this.events.init&&this.emit("init",{pages:t}),!0}return!1},i.parse=function(t){var e={name:"",data:[]};return e.data=t.split("/").map(decodeURIComponent),e.name=e.data.shift().slice(1),e},i.stringify=function(t,e){return e=Array.isArray(e)?e:[],t=encodeURIComponent(t),e=e.map(encodeURIComponent),e.unshift(t),e.join("/")},i.show=function(t,e){return t&&!t.active?(t.$node.classList.add("active"),t.active=!0,this.current=t,t.events.show&&t.emit("show",{page:t,data:e}),!0):!1},i.hide=function(t){return t&&t.active?(t.$node.classList.remove("active"),t.active=!1,this.current=null,t.events.hide&&t.emit("hide",{page:t}),!0):!1},i.navigate=function(t,e){var n=this.current,i=this.ids[t];return i&&!i.active?(location.hash=this.stringify(t,e),this.hide(this.current),this.show(i,e),this.events.navigate&&this.emit("navigate",{from:n,to:i}),this.history.push(i),!0):!1},i.back=function(){var t,e;return this.history.length>1&&(t=this.history.pop(),e=this.history[this.history.length-1],e&&!e.active)?(location.hash=e.id,this.hide(this.current),this.show(e),this.events.navigate&&this.emit("navigate",{from:t,to:e}),!0):!1},t.exports=i},function(t,e,n){"use strict";var i,o,s=n(8),a=n(3),d=n(2),r=n(12),c={};n(9),window.core=window.parent.getCoreInstanse(window),window.core.once("load",function(){i.data.time.load&&i.defaultEvents.load({type:"load"})}),window.localStorage=window.parent.localStorage||window.parent.stbStorage,window.parent&&window.parent.gSTB&&(window.dvbManager=window.parent.dvbManager,window.epgManager=window.parent.epgManager,window.gSTB=window.parent.gSTB,window.pvrManager=window.parent.pvrManager,window.stbDownloadManager=window.parent.stbDownloadManager,window.stbStorage=window.parent.stbStorage,window.stbUpdate=window.parent.stbUpdate,window.stbUPnP=window.parent.stbUPnP,window.stbWebWindow=window.parent.stbWebWindow,window.stbWindowMgr=window.parent.stbWindowMgr,window.timeShift=window.parent.timeShift),i=new s({debug:!1,host:!0,screen:null,time:{init:+new Date,load:0,done:0}}),i.setScreen=function(t){return t?(t.availHeight=t.height-(t.availTop+t.availBottom),t.availWidth=t.width-(t.availLeft+t.availRight),window.moveTo(0,0),window.resizeTo(t.width,t.height),i.linkThemeCSS=window.core.theme.path,i.linkCSS="css/release."+t.height+".css",this.data.metrics=t,!0):!1},i.EVENT_END_OF_FILE=1,i.EVENT_GET_MEDIA_INFO=2,i.EVENT_PLAYBACK_BEGIN=4,i.EVENT_CONTENT_ERROR=5,i.EVENT_DUAL_MONO_DETECT=6,i.EVENT_INFO_GET=7,i.EVENT_SUBTITLE_LOAD_ERROR=8,i.EVENT_SUBTITLE_FIND=9,i.EVENT_HDMI_CONNECT=32,i.EVENT_HDMI_DISCONNECT=33,i.EVENT_RECORD_FINISH_SUCCESSFULL=34,i.EVENT_RECORD_FINISH_ERROR=35,i.EVENT_DVB_SCANING=40,i.EVENT_DVB_FOUND=41,i.EVENT_DVB_CHANELL_EPG_UPDATE=42,i.EVENT_DVB_ANTENNA_OFF=43,i.setScreen(r[screen.height]||r[720]);for(o in d)"volumeUp"!==o&&"volumeDown"!==o&&(c[d[o]]=!0);i.defaultEvents={load:function(t){new XMLHttpRequest;i.data.time.load=t.timeStamp,window.core.ready&&(i.events[t.type]&&i.emit(t.type,t),a.pages.forEach(function(e){e.events[t.type]&&e.emit(t.type,t)}),i.data.time.done=+new Date,i.events.done&&i.emit("done",t))},unload:function(t){i.events[t.type]&&i.emit(t.type,t),a.pages.forEach(function(e){e.events[t.type]&&e.emit(t.type,t)})},error:function(t){},keydown:function(t){var e,n=a.current,o={keyCode:t.keyCode,stop:t.stop,shiftKey:t.shiftKey,altKey:t.altKey,type:t.type,"native":t};0!==o.keyCode&&(o.code=o.keyCode,o.shiftKey&&(o.code+=1e3),o.altKey&&(o.code+=2e3),e=n.activeComponent,e&&e!==n&&(e.events[o.type]&&e.emit(o.type,o),!o.stop&&e.propagate&&e.parent&&e.parent.events[o.type]&&e.parent.emit(o.type,o)),o.stop||(n.events[o.type]&&n.emit(o.type,o),o.stop||i.events[o.type]&&i.emit(o.type,o)),i.data.host&&c[o.code]&&t.preventDefault())},keypress:function(t){var e=a.current;e.activeComponent&&e.activeComponent!==e&&e.activeComponent.events[t.type]&&e.activeComponent.emit(t.type,t)},click:function(t){},contextmenu:function(t){t.preventDefault()},mousewheel:function(t){var e=a.current;e.activeComponent&&e.activeComponent!==e&&e.activeComponent.events[t.type]&&e.activeComponent.emit(t.type,t),t.stop||e.events[t.type]&&e.emit(t.type,t)}};for(o in i.defaultEvents)window.addEventListener(o,i.defaultEvents[o]);i.show=function(){this.events.show&&this.emit("show"),window.core.call("app:ready")},window.stbEvent={},window.stbEvent.onEvent=function(t,e){if(Array.prototype.forEach.call(window.frames,function(n){n.stbEvent&&n.stbEvent.onEvent&&n.stbEvent.onEvent(t,e)}),i.events.media){if(e)try{e=JSON.parse(e)}catch(n){}i.emit("media",{code:parseInt(t,10),info:e})}},window.stbEvent.onBroadcastMessage=function(t,e,n){Array.prototype.forEach.call(window.frames,function(i){i.stbEvent&&i.stbEvent.onBroadcastMessage&&i.stbEvent.onBroadcastMessage(t,e,n)}),i.events.message&&i.emit("message",{broadcast:!0,windowId:t,message:e,data:n})},window.stbEvent.onMessage=function(t,e,n){Array.prototype.forEach.call(window.frames,function(i){i.stbEvent&&i.stbEvent.onMessage&&i.stbEvent.onMessage(t,e,n)}),i.events.message&&i.emit("message",{broadcast:!1,windowId:t,message:e,data:n})},window.stbEvent.onMount=function(t){Array.prototype.forEach.call(window.frames,function(e){e.stbEvent&&e.stbEvent.onMount&&e.stbEvent.onMount(t)}),i.events["device:mount"]&&i.emit("device:mount",{state:t})},window.stbEvent.onMediaAvailable=function(t,e){Array.prototype.forEach.call(window.frames,function(n){n.stbEvent&&n.stbEvent.onMediaAvailable&&n.stbEvent.onMediaAvailable(t,e)}),i.events["media:available"]&&i.emit("media:available",{mime:t,url:e})},window.stbEvent.onNetworkStateChange=function(t){i.events["internet:state"]&&i.emit("internet:state",{state:t})},window.stbEvent.onWebBrowserProgress=function(t){Array.prototype.forEach.call(window.frames,function(e){e.stbEvent&&e.stbEvent.onWebBrowserProgress&&e.stbEvent.onWebBrowserProgress(t)}),i.events["browser:progress"]&&i.emit("browser:progress",{progress:t})},window.stbEvent.onWindowActivated=function(){Array.prototype.forEach.call(window.frames,function(t){t.stbEvent&&t.stbEvent.onWindowActivated&&t.stbEvent.onWindowActivated()}),i.events["window:focus"]&&i.emit("window:focus")},window.gSTB&&gSTB.SetNativeStringMode&&gSTB.SetNativeStringMode(!0),t.exports=i},function(t,e,n){"use strict";function i(t){var e,n=this;if(t=t||{},this.visible=!0,this.focusable=!0,this.$node=null,this.$body=null,this.parent=null,this.children=[],this.propagate=!!t.propagate,o.call(this,t.data),this.$node=t.$node||document.createElement("div"),this.$body=t.$body||this.$node,this.$node.className+=" component "+(t.className||""),this.id=t.id||this.$node.id||"cid"+a++,t.parent&&t.parent.add(this),t.visible===!1&&this.hide(),t.focusable===!1&&(this.focusable=!1),this.defaultEvents){t.events=t.events||{};for(e in this.defaultEvents)t.events[e]=t.events[e]||this.defaultEvents[e]}t.events&&this.addListeners(t.events),t.children&&this.add.apply(this,t.children),this.$node.addEventListener("click",function(t){0===t.button&&(n.focus(),n.events.click&&n.emit("click",{event:t})),t.stopPropagation()})}var o=n(1),s=n(3),a=0;i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.prototype.defaultEvents=null,i.prototype.add=function(t){var e;for(e=0;e<arguments.length;e++)t=arguments[e],this.children.push(t),t.parent=this,t.$node&&null===t.$node.parentNode&&this.$body.appendChild(t.$node),this.events.add&&this.emit("add",{item:t})},i.prototype.remove=function(){this.parent&&(s.current.activeComponent===this&&(this.blur(),this.parent.focus()),this.parent.children.splice(this.parent.children.indexOf(this),1)),this.children.forEach(function(t){t.remove()}),this.removeAllListeners(),this.$node.parentNode.removeChild(this.$node),this.events.remove&&this.emit("remove")},i.prototype.focus=function(t){var e=s.current,n=e.activeComponent;return this.focusable&&this!==n?(n&&n.blur(),e.activeComponent=n=this,n.$node.classList.add("focus"),n.events.focus&&n.emit("focus",t),!0):!1},i.prototype.blur=function(){var t=s.current,e=t.activeComponent;return this.$node.classList.remove("focus"),this===e?(t.activeComponent=null,this.events.blur&&this.emit("blur"),!0):!1},i.prototype.show=function(t){return this.visible?!0:(this.$node.classList.remove("hidden"),this.visible=!0,this.events.show&&this.emit("show",t),!0)},i.prototype.hide=function(){return this.visible?(this.$node.classList.add("hidden"),this.visible=!1,this.events.hide&&this.emit("hide"),!0):!0},t.exports=i},function(t,e,n){"use strict";var i=n(4),o=n(2),s=n(10),a=new s({$node:window.pageMain});core.addListener("hide",function(){i.visible=!1,i.notifyWidget.hide()}),core.addListener("intent",function(t,e){"volume"===t.action&&("undefined"!=typeof t.data.mute?(i.volumeWidget.toggleMute(t.data.mute),e(!1,{})):"undefined"!=typeof t.data.volume&&i.volumeWidget.volumeChange(t.data.volume))}),window.core.addListener("keydown:"+o.volumeUp,function(){i.volumeWidget.volumeUp()}),window.core.addListener("keydown:"+o.volumeDown,function(){i.volumeWidget.volumeDown()}),window.core.addListener("keydown:192",function(t){t.altKey&&i.volumeWidget.toggleMute()}),t.exports=a},function(module,exports,__webpack_require__){"use strict";var Emitter=__webpack_require__(1),gettext=new Emitter,meta=null,data=null;gettext.load=function(t,e){var n=new XMLHttpRequest;t.ext=t.ext||"json",t.path=t.path||"lang",n.responseType="text",n.onload=function(){var t;try{t=JSON.parse(n.responseText),meta=t.meta,data=t.data,e(null,data)}catch(i){meta=null,data=null,n.onerror(i)}gettext.events.load&&gettext.emit("load")},n.onerror=function(t){e(t),gettext.events.error&&gettext.emit("error")},n.open("GET",t.path+"/"+t.name+"."+t.ext,!0),n.send(null)},window.gettext=function(t){return data&&data[""][t]?data[""][t]:t},window.pgettext=function(t,e){return data&&data[t][e]?data[t][e]:e},window.ngettext=function(msgId,plural,value){return data&&meta?data[""][msgId][eval("var n = "+value+"; "+meta.plural)]:1===value?msgId:plural},module.exports=gettext},function(t,e,n){"use strict";function i(t){o.call(this),this.data=t||{}}var o=n(1);i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.prototype.idName="id",i.prototype.clear=function(){var t=this.data;return Object.keys(t).length>0?(this.data={},this.events.clear&&this.emit("clear",{data:t}),!0):!1},i.prototype.init=function(t){return t?(this.clear(),this.data=t,this.events.init&&this.emit("init",{data:t}),!0):!1},i.prototype.has=function(t){return this.data.hasOwnProperty(t)},i.prototype.get=function(t){return this.data[t]},i.prototype.set=function(t,e){var n=t in this.data,i={name:t,curr:e};return n?(i.prev=this.data[t],e!==i.prev?(this.data[t]=e,this.events.change&&this.emit("change",i),!0):!1):(this.data[t]=e,this.events.change&&this.emit("change",i),!0)},i.prototype.unset=function(t){var e,n=t in this.data;return n?(e={name:t,prev:this.data[t]},delete this.data[t],this.events.change&&this.emit("change",e),!0):!1},t.exports=i},function(t,e){"use strict";if(!("classList"in document.documentElement)){var n=Array.prototype,i=n.indexOf,o=n.slice,s=n.push,a=n.splice,d=n.join;window.DOMTokenList=function(t){if(this._element=t,t.className!==this._classCache){if(this._classCache=t.className,!this._classCache)return;var e,n=this._classCache.replace(/^\s+|\s+$/g,"").split(/\s+/);for(e=0;e<n.length;e++)s.call(this,n[e])}},window.DOMTokenList.prototype={add:function(t){this.contains(t)||(s.call(this,t),this._element.className=o.call(this,0).join(" "))},contains:function(t){return-1!==i.call(this,t)},item:function(t){return this[t]||null},remove:function(t){var e=i.call(this,t);-1!==e&&(a.call(this,e,1),this._element.className=o.call(this,0).join(" "))},toString:function(){return d.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},Object.defineProperty(Element.prototype,"classList",{get:function(){return new window.DOMTokenList(this)}})}},function(t,e,n){"use strict";function i(t){t=t||{},this.active=!1,this.activeComponent=null,t.className="page "+(t.className||""),o.call(this,t),this.active=this.$node.classList.contains("active"),null===this.$node.parentNode&&document.body.appendChild(this.$node),this.page=this}var o=n(5);i.prototype=Object.create(o.prototype),i.prototype.constructor=i,t.exports=i},function(t,e,n){"use strict";function i(t){t=t||{},this.max=100,this.min=0,this.value=0,this.step=1,t.focusable=t.focusable||!1,t.className="progressBar "+(t.className||""),o.call(this,t),this.$value=this.$body.appendChild(document.createElement("div")),this.$value.className="value",this.init(t)}var o=n(5);i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.prototype.set=function(t){var e=this.value;return this.value!==t&&t<=this.max&&t>=this.min?(this.value=t,t=Math.abs(this.value-this.min)/this.step,100===t&&this.events.done&&this.emit("done"),this.$value.style.width=t+"%",this.events.change&&this.emit("change",{curr:this.value,prev:e}),!0):!1},i.prototype.init=function(t){void 0!==t.max&&(this.max=t.max),void 0!==t.min&&(this.min=t.min),void 0!==t.value&&(this.value=t.value),this.step=Math.abs(this.max-this.min)/100,this.$value.style.width=Math.abs(this.min-this.value)/this.step+"%"},t.exports=i},function(t,e){"use strict";t.exports={480:{height:480,width:720,availTop:24,availBottom:24,availRight:32,availLeft:48},576:{height:576,width:720,availTop:24,availBottom:24,availRight:26,availLeft:54},720:{height:720,width:1280,availTop:30,availBottom:30,availRight:40,availLeft:40},1080:{height:1080,width:1920,availTop:45,availBottom:45,availRight:60,availLeft:60}}}]);