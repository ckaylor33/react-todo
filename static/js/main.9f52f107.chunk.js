(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),i=(n(14),n(8)),s=n(5),o=n(1),m=n(4),u=function(e){var t=e.items,n=e.removeItem,a=e.editItem;return c.a.createElement("div",{className:"grocery-list"},t.map((function(e){var t=e.id,r=e.title;return c.a.createElement("article",{key:t,className:"grocery-item"},c.a.createElement("p",{className:"title"},r),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"button",className:"edit-btn",onClick:function(){return a(t)}},c.a.createElement(m.a,null)),c.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return n(t)}},c.a.createElement(m.b,null))))})))},f=function(e){var t=e.type,n=e.msg,r=e.removeAlert,l=e.list;return Object(a.useEffect)((function(){var e=setTimeout((function(){r()}),3e3);return function(){return clearTimeout(e)}}),[l]),c.a.createElement("p",{className:"alert alert-".concat(t)},n)};var b=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),m=Object(o.a)(l,2),b=m[0],d=m[1],g=Object(a.useState)(!1),v=Object(o.a)(g,2),p=v[0],E=v[1],O=Object(a.useState)(null),h=Object(o.a)(O,2),j=h[0],y=h[1],N=Object(a.useState)({show:!1,msg:"",type:""}),S=Object(o.a)(N,2),I=S[0],k=S[1],w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";k({show:e,type:t,msg:n})};return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(b))}),[b]),c.a.createElement("section",{className:"section-center"},c.a.createElement("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),n)if(n&&p)d(b.map((function(e){return e.id===j?Object(s.a)(Object(s.a)({},e),{},{title:n}):e}))),r(""),y(null),E(!1),w(!0,"success","value changed");else{w(!0,"success","item added to the list");var t={id:(new Date).getTime().toString(),title:n};d([].concat(Object(i.a)(b),[t])),r("")}else w(!0,"danger","please enter value")}},I.show&&c.a.createElement(f,Object.assign({},I,{removeAlert:w,list:b})),c.a.createElement("h3",null,"ToDo List"),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"grocery",placeholder:"e.g. shopping",value:n,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"submit-btn"},p?"edit":"submit"))),b.length>0&&c.a.createElement("div",{className:"grocery-container"},c.a.createElement(u,{items:b,removeItem:function(e){w(!0,"danger","item removed"),d(b.filter((function(t){return t.id!==e})))},editItem:function(e){var t=b.find((function(t){return t.id===e}));E(!0),y(e),r(t.title)}}),c.a.createElement("button",{className:"clear-btn",onClick:function(){w(!0,"danger","empty list"),d([])}},"clear items")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9f52f107.chunk.js.map