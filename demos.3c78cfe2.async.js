"use strict";(self.webpackChunkjedi_arsenal=self.webpackChunkjedi_arsenal||[]).push([[433],{58195:function(i,t,n){n.r(t);var d=n(75271),o=n(7076),l=n(7672),_=n.n(l),e=n(52676),a=function(){return(0,e.jsx)(o.JaCalendar,{value:_()("2024-5-21"),locale:"en-US"})};t.default=a},37010:function(i,t,n){n.r(t);var d=n(75271),o=n(7076),l=n(7672),_=n.n(l),e=n(52676),a=function(){var s=function(E){return(0,e.jsx)("div",{children:(0,e.jsx)("p",{style:{background:"yellowgreen",height:"300px"},children:E.format("YYYY/MM/DD")})})};return(0,e.jsx)(o.JaCalendar,{value:_()("2024-5-21"),dateRender:s})};t.default=a},49166:function(i,t,n){n.r(t);var d=n(75271),o=n(7076),l=n(7672),_=n.n(l),e=n(52676),a=function(){var s=function(E){return(0,e.jsx)("div",{children:(0,e.jsx)("p",{style:{background:"skyblue",height:"300px"},children:E.format("YYYY/MM/DD")})})};return(0,e.jsx)(o.JaCalendar,{value:_()("2024-5-21"),locale:"en-US",dateInnerContent:s})};t.default=a},1471:function(i,t,n){n.r(t);var d=n(75271),o=n(7076),l=n(7672),_=n.n(l),e=n(52676),a=function(){return(0,e.jsx)(o.JaCalendar,{value:_()("2024-5-21"),locale:"en-US",onChange:function(u){alert(u.format("YYYY-MM-DD"))}})};t.default=a},83059:function(i,t,n){n.r(t);var d=n(48305),o=n.n(d),l=n(15772),_=n(52676);t.default=function(){var e=(0,l.useBoolean)(!0),a=o()(e,2),r=a[0],s=a[1],u=s.toggle,E=s.setTrue,j=s.setFalse;return(0,_.jsxs)("div",{children:[(0,_.jsxs)("p",{children:["Effects\uFF1A",JSON.stringify(r)]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("button",{type:"button",onClick:u,children:"Toggle"}),(0,_.jsx)("button",{type:"button",onClick:j,style:{margin:"0 16px"},children:"Set false"}),(0,_.jsx)("button",{type:"button",onClick:E,children:"Set true"})]})]})}},86362:function(i,t,n){n.r(t);var d=n(48305),o=n.n(d),l=n(75271),_=n(15772),e=n(52676);t.default=function(){var a=(0,l.useState)(0),r=o()(a,2),s=r[0],u=r[1],E=(0,l.useState)(0),j=o()(E,2),m=j[0],c=j[1],M=(0,_.useLatest)(s);return(0,l.useEffect)(function(){var g=setInterval(function(){u(M.current+1)},1e3);return function(){return clearInterval(g)}},[]),(0,l.useEffect)(function(){var g=setInterval(function(){c(m+1)},1e3);return function(){return clearInterval(g)}},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:["count(useLatest): ",s]}),(0,e.jsxs)("p",{children:["count(defult): ",m]})]})}},67630:function(i,t,n){n.r(t);var d=n(48305),o=n.n(d),l=n(15772),_=n(52676),e=function(){return(0,l.useMount)(function(){alert("mount!")}),(0,_.jsx)("div",{children:"Hello World"})};t.default=function(){var a=(0,l.useToggle)(),r=o()(a,2),s=r[0],u=r[1].toggle;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{type:"button",onClick:u,children:s?"unmount":"mount"}),s&&(0,_.jsx)(e,{})]})}},20820:function(i,t,n){n.r(t);var d=n(48305),o=n.n(d),l=n(15772),_=n(52676);t.default=function(){var e=(0,l.useToggle)(),a=o()(e,2),r=a[0],s=a[1],u=s.toggle,E=s.setLeft,j=s.setRight;return(0,_.jsxs)("div",{children:[(0,_.jsxs)("p",{children:["Effects\uFF1A","".concat(r)]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("button",{type:"button",onClick:u,children:"Toggle"}),(0,_.jsx)("button",{type:"button",onClick:E,style:{margin:"0 8px"},children:"Toggle False"}),(0,_.jsx)("button",{type:"button",onClick:j,children:"Toggle True"})]})]})}},86440:function(i,t,n){n.r(t);var d=n(48305),o=n.n(d),l=n(75271),_=n(15772),e=n(52676);t.default=function(){var a=(0,_.useToggle)("Hello","World"),r=o()(a,2),s=r[0],u=r[1],E=u.toggle,j=u.set,m=u.setLeft,c=u.setRight;return(0,e.jsxs)("div",{children:[(0,e.jsxs)("p",{children:["Effects\uFF1A",s]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("button",{type:"button",onClick:E,children:"Toggle"}),(0,e.jsx)("button",{type:"button",onClick:function(){return j("Hello")},style:{margin:"0 8px"},children:"Set Hello"}),(0,e.jsx)("button",{type:"button",onClick:function(){return j("World")},children:"Set World"}),(0,e.jsx)("button",{type:"button",onClick:m,style:{margin:"0 8px"},children:"Set Left"}),(0,e.jsx)("button",{type:"button",onClick:c,children:"Set Right"})]})]})}},33535:function(i,t,n){n.r(t);var d=n(48305),o=n.n(d),l=n(15772),_=n(52676),e=function(){return(0,l.useUnmount)(function(){alert("unmount!")}),(0,_.jsx)("div",{children:"Hello World"})};t.default=function(){var a=(0,l.useToggle)(!0),r=o()(a,2),s=r[0],u=r[1].toggle;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{type:"button",onClick:u,children:s?"unmount":"mount"}),s&&(0,_.jsx)(e,{})]})}}}]);
