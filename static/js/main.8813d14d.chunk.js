(this["webpackJsonpcyberos-website"]=this["webpackJsonpcyberos-website"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"website":{"introQuote":"A Linux distribution built with Qt Quick and Arch Linux.","download":"Download","wipDisclaimer":"Psst, this website is a work-in-progress. You can help by [sending a pull request].","footerCopyright":"Copyright \xa9 CyberOS Team 2020 ~ 2021"}}')},,function(e){e.exports=JSON.parse("{}")},,function(e){e.exports=JSON.parse('{"website":{"introQuote":"Eine Linux-Distribution, basierend auf Qt Quick und Arch Linux.","download":"Herunterladen","wipDisclaimer":"Psst, diese Website ist noch nicht fertig. Du kannst helfen, indem du ein [pull request sendest].","footerCopyright":"Copyright \xa9 CyberOS Team 2020 ~ 2021"}}')},function(e){e.exports=JSON.parse("{}")},function(e){e.exports=JSON.parse('{"website":{"introQuote":"Dystrybucja Linux, zbudowana na podstawie Arch Linux i Qt Quick.","download":"Pobierz","wipDisclaimer":"Psst, ta strona jest dalej budowana. Mo\u017cesz pom\xf3c\xa0[wys\u0142aj\u0105c pull request].","footerCopyright":"Copyright \xa9 CyberOS Team 2020 ~ 2021"}}')},function(e){e.exports=JSON.parse("{}")},function(e){e.exports=JSON.parse('{"website":{"footerCopyright":"\u0410\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0430 \xa9 CyberOS Team 2020 ~ 2021","wipDisclaimer":"\u0422\u0441\u0441, \u044d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c, [\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0432 pull request].","download":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c","introQuote":"\u0414\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432 Linux, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Qt Quick \u0438 Arch Linux."}}')},function(e){e.exports=JSON.parse("{}")},function(e){e.exports=JSON.parse("{}")},,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var i=r(1),n=r.n(i),s=r(9),c=r.n(s);r(21);function a(){return window.matchMedia("(prefers-color-scheme: dark)").matches}var o=r(10),u=r(6),b=r(11),d=r(12),l=r(13),h=r(14),p=r(8),j=r(15),O=r(16),m={de:o,"en-US":u,"es-MX":b,pl:d,"pt-BR":l,ru:h,zh:p,"zh-CN":p,"zh-HK":j,"zh-TW":O};function w(){return navigator.language in m?navigator.language:"en-US"}function x(e){var t=m[w()].website;t||(t=u.website);var r=t[e];return r||(r=u.website[e]),r}var f=r(2),g=r(3),y=r(5),v=r(4),N=(r(22),r.p+"static/media/cyber-logo.ad899d8c.svg"),S=r(0),C=function(e){Object(y.a)(r,e);var t=Object(v.a)(r);function r(){return Object(f.a)(this,r),t.apply(this,arguments)}return Object(g.a)(r,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"website-header",children:Object(S.jsxs)("h1",{className:"website-header-text",children:[Object(S.jsx)("img",{className:"header-cyber-logo",src:N}),"CyberOS"]})})}}]),r}(n.a.Component),k=(r(24),function(e){Object(y.a)(r,e);var t=Object(v.a)(r);function r(){return Object(f.a)(this,r),t.apply(this,arguments)}return Object(g.a)(r,[{key:"render",value:function(){var e=x("wipDisclaimer").replace("[",'<a href="https://github.com/cyberos/cyberos.github.io">').replace("]","</a>"),t="https://hosted.weblate.org/widgets/cyberos/-/287x66-".concat(a()?"black":"white",".png");return Object(S.jsx)("div",{className:"footer-container",children:Object(S.jsxs)("div",{className:"footer-content",children:[Object(S.jsx)("p",{children:Object(S.jsx)("a",{href:"https://hosted.weblate.org/engage/cyberos/",children:Object(S.jsx)("img",{src:t})})}),Object(S.jsx)("p",{children:x("footerCopyright")}),Object(S.jsx)("p",{dangerouslySetInnerHTML:{__html:e}})]})})}}]),r}(n.a.Component)),Q=r.p+"static/media/preview_light.999b5c52.png",J=r.p+"static/media/preview_dark.9244a69a.png",L=function(e){Object(y.a)(r,e);var t=Object(v.a)(r);function r(){return Object(f.a)(this,r),t.apply(this,arguments)}return Object(g.a)(r,[{key:"render",value:function(){var e=a()?J:Q;return Object(S.jsxs)("div",{className:"website-root",children:[Object(S.jsx)(C,{}),Object(S.jsx)("div",{className:"website-content",children:Object(S.jsxs)("center",{children:[Object(S.jsx)("h1",{children:x("introQuote")}),Object(S.jsxs)("div",{className:"button-container",children:[Object(S.jsx)("a",{className:"button",href:"https://dir.omame.tech/cyberos-iso/",children:x("download")}),Object(S.jsx)("a",{className:"button",href:"https://github.com/cyberos",children:"GitHub"})]}),Object(S.jsx)("div",{className:"preview-image-container",children:Object(S.jsx)("a",{href:e,children:Object(S.jsx)("img",{className:"preview-image",src:e})})})]})}),Object(S.jsx)(k,{})]})}}]),r}(n.a.Component);c.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.querySelector("#root")),document.body.classList.add("".concat(a()?"dark":"light","-mode")),document.querySelector("html").lang=w()}],[[25,1,2]]]);
//# sourceMappingURL=main.8813d14d.chunk.js.map