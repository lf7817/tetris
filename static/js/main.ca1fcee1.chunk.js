(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,n,t){e.exports={app:"style_app__1hNgg"}},150:function(e,n,t){e.exports=t(359)},328:function(e,n){},337:function(e,n){},349:function(e){e.exports={count:"count"}},350:function(e){e.exports={count:"\u8ba1\u6570\u5668"}},357:function(e,n,t){},359:function(e,n,t){"use strict";t.r(n);t(151);var o,a=t(7),r=t.n(a),c=t(137),i=t.n(c),s=t(72),l=t(139),u=t(23),p=t.n(u),f=t(140),d=t(141),h=t(142),w=t(147),v=t(143),E=t(149),g=t(144),_=t.n(g),O={"en-US":t(349),"zh-CN":t(350)};!function(e){e.ADD_COUNT="ADD_COUNT",e.ADD_COUNT_ASYNC="ADD_COUNT_ASYNC",e.REDUCE_COUNT="REDUCE_COUNT",e.UPDATE_LOCALES="UPDATE_LOCALES",e.GAME_OVER="GAME_OVER",e.PAUSE="PAUSE",e.START="START",e.RESTART="RESTART",e.RORATE="RORATE",e.SET_SPEED="SET_SPEED",e.SET_DEFAULT_LINES="SET_DEFAULT_LINES"}(o||(o={}));var m=o,A=t(73),b=t.n(A),T=function(e){var n=e.children;return r.a.createElement("div",{className:b.a.wrapper},r.a.createElement("div",{className:b.a.center},r.a.createElement("div",{className:b.a.screen},n)))},y=Object(a.memo)(function(){return r.a.createElement(T,null,"hello")}),S=t(145),L=t.n(S),U=function(e){function n(){var e,t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=Object(w.a)(this,(e=Object(v.a)(n)).call.apply(e,[this].concat(a)))).state={initLocales:!1},t.switchLocales=function(e){window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?lang=").concat(e)},t}return Object(E.a)(n,e),Object(h.a)(n,[{key:"loadLocales",value:function(){var e=Object(f.a)(p.a.mark(function e(n){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.init({currentLocale:n,locales:O});case 3:return e.prev=3,this.setState({initLocales:!0}),e.finish(3);case 6:case"end":return e.stop()}},e,this,[[0,,3,6]])}));return function(n){return e.apply(this,arguments)}}()},{key:"initLocales",value:function(e){var n=function(e){var n=new RegExp("(^|&)".concat(e,"=([^&]*)(&|$)")),t=window.location.search.substr(1).match(n);if(null!=t)return decodeURIComponent(t[2])}("lang");n&&O.hasOwnProperty(n)?(this.props.updateLocales(n),this.loadLocales(n)):this.loadLocales(e)}},{key:"componentDidMount",value:function(){this.initLocales(this.props.locales),console.log(this.props)}},{key:"componentDidUpdate",value:function(e){e.locales!==this.props.locales&&this.switchLocales(this.props.locales)}},{key:"render",value:function(){return this.state.initLocales?r.a.createElement("div",{className:L.a.app},r.a.createElement(y,null)):null}}]),n}(a.Component),C=Object(s.b)(function(e){return{locales:e.locales}},function(e){return{updateLocales:function(n){return e(function(e){return{type:m.UPDATE_LOCALES,payload:{locales:e}}}(n))}}})(U),D=!1,k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then(function(e){e.waiting?n&&n.onUpdate&&n.onUpdate(e):e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),D=!1,n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),D=!0,n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)}),navigator.serviceWorker.addEventListener("controllerchange",function(){console.log("controllerchange"),D||(window.location.reload(),D=!0)})}var j=t(16),x=t(148),R=t(103),P=t(146),W=t.n(P),I=Object(j.c)({locales:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"zh-CN",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.UPDATE_LOCALES:return n.payload.locales;default:return e}}}),M=t(37),z=p.a.mark(B),G=p.a.mark(J),V=p.a.mark(X),Y=p.a.mark($);function B(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.b)(1e3);case 2:return e.next=4,Object(M.d)({type:m.ADD_COUNT,payload:{num:1}});case 4:case"end":return e.stop()}},z,this)}function F(){return new Promise(function(e,n){setTimeout(function(){e("hello saga")},2e3)})}function J(){var e,n;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.a)(F);case 2:return e=t.sent,console.log("greeting: ",e),t.next=6,Object(M.c)(F);case 6:n=t.sent,console.log("task: ",n);case 8:case"end":return t.stop()}},G,this)}function X(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.e)(m.ADD_COUNT_ASYNC,B);case 2:case"end":return e.stop()}},V,this)}function $(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)(J);case 2:return e.next=4,Object(M.c)(X);case 4:case"end":return e.stop()}},Y,this)}var q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,H={key:"root",storage:W.a},K=Object(R.a)(H,I),Q=Object(x.a)(),Z=(t(355),t(357),function(){var e=Object(j.e)(K,q(Object(j.a)(Q))),n=Object(R.b)(e);return Q.run($),{store:e,persistor:n}}());i.a.render(r.a.createElement(s.a,{store:Z.store},r.a.createElement(l.a,{persistor:Z.persistor},r.a.createElement(C,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");k?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):N(n,e)})}}({onUpdate:function(e){if(confirm("\u76d1\u6d4b\u5230\u66f4\u65b0\uff0c\u70b9\u51fb\u66f4\u65b0"))try{e.waiting&&e.waiting.postMessage("skipWaiting")}catch(n){window.location.reload()}},onSuccess:function(){console.log("success")}});console.log({version:"12"})},73:function(e,n,t){e.exports={wrapper:"sttyle_wrapper__3NRzk",decorate:"sttyle_decorate__3CyxA",center:"sttyle_center__2vr2G",screen:"sttyle_screen__31rcz"}}},[[150,2,1]]]);
//# sourceMappingURL=main.ca1fcee1.chunk.js.map