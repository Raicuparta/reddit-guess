(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},4:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(3),o=n.n(i),u=(n(10),function(e){return e.replace(/&amp;/g,"&")}),l=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)(function(){if(!n.length){var e=new URL(window.location.href).searchParams.get("sub")||"MixedRaceGirls";console.log("Fetching posts from Reddit"),function(e){return window.fetch("https://www.reddit.com/r/"+e+"/top.json?sort=top&t=all&limit=100").then(function(e){return e.ok&&e.json()}).then(function(e){return e.data.children.map(function(e){return e.data})})}(e).then(function(e){var t;c((t=e,t.map(function(e){return[Math.random(),e]}).sort(function(e,t){return e[0]-t[0]}).map(function(e){return e[1]})).map(function(e){var t=u(e.title),n=u(e.url);if(e.preview){var a=e.preview.images[0],r=a.variants.gif||a;n=u(r.source.url)}return{id:e.id,title:t,url:n}}))})}}),[n,function(){c([])}]},s=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1];return[n,function(){return c(n+1)},function(){return c(0)}]},m=function(e){var t=e.choices,n=e.answer,a=e.onChoiceClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ui"},"Which is",c.a.createElement("div",{className:"title"},t[n].title),"?"),c.a.createElement("div",{className:"choices-wrapper"},t.map(function(e){return c.a.createElement("div",{className:"image-wrapper",key:e.id},c.a.createElement("img",{className:"background-image",alt:"",src:e.url}),c.a.createElement("img",{onClick:a,className:"image touchable",alt:"",src:e.url}))})))},f=function(e){var t=e.onRestartClick;return c.a.createElement("div",{className:"ui"},c.a.createElement("button",{className:"restartButton touchable",onClick:t},"Restart"))},d=function(){return c.a.createElement("div",{className:"ui"},"Loading...")};o.a.render(c.a.createElement(function(){var e=l(),t=Object(a.a)(e,2),n=t[0],r=t[1],i=s(),o=Object(a.a)(i,3),u=o[0],p=o[1],h=o[2],v=s(),w=Object(a.a)(v,3),g=w[0],E=w[1],b=w[2],k=n.slice(2*u,2*u+2),N=Math.round(Math.random());return c.a.createElement("div",{className:"app"},k.length>1?c.a.createElement(m,{choices:k,answer:N,onChoiceClick:function(e){e.target.src===k[N].url&&E(),p()}}):u?c.a.createElement(f,{onRestartClick:function(e){h(),b(),r()}}):c.a.createElement(d,null),c.a.createElement("div",{className:"ui"},"Points: ",g," / ",u))},null),document.getElementById("root"))}},[[4,2,1]]]);
//# sourceMappingURL=main.1318dae4.chunk.js.map