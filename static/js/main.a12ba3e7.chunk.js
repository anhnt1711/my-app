(this.webpackJsonphnf=this.webpackJsonphnf||[]).push([[0],{22:function(e,n,t){e.exports=t(33)},27:function(e,n,t){},28:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(11),i=t.n(r),c=(t(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=t(12),u=t(13),d=t(15),f=t(14),h=t(18),p=t(1),v=(t(28),a.a.createElement("div",{className:"pt-3 text-center"},a.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"},"loading"))),m=a.a.lazy((function(){return t.e(5).then(t.bind(null,53))})),g=a.a.lazy((function(){return t.e(7).then(t.bind(null,51))})),w=function(e){Object(d.a)(t,e);var n=Object(f.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(h.a,null,a.a.createElement(a.a.Suspense,{fallback:v},a.a.createElement(p.d,null,a.a.createElement(p.b,{exact:!0,path:"/login",name:"Login Page",render:function(e){return a.a.createElement(g,e)}}),a.a.createElement(p.b,{path:"/",name:"Home",render:function(e){return a.a.createElement(m,e)}}))),"jkik")}}]),t}(o.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/my-app","/service-worker.js");c?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.a12ba3e7.chunk.js.map