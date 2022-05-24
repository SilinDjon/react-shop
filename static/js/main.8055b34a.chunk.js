(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(6),i=c.n(r),s=(c(13),c(0));function o(){return Object(s.jsx)("nav",{className:"green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/silindjon/react-shop",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})}function l(){return Object(s.jsx)("footer",{className:"page-footer green lighten-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/silindjon/react-shop",rel:"noreferrer",target:"_blank",children:"Repo"})]})})})}var d=c(7),j=c(8),u=c(1);function b(e,t){var c=t.type,n=t.payload;switch(c){case"SET_GOODS":return Object(u.a)(Object(u.a)({},e),{},{goods:n||[],loading:!1});case"ADD_TO_BASKET":var a=e.order.findIndex((function(e){return e.id===n.id})),r=null;if(a<0){var i=Object(u.a)(Object(u.a)({},n),{},{quantity:1});r=[].concat(Object(j.a)(e.order),[i])}else r=e.order.map((function(e,t){return t===a?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:r,alertName:n.name});case"REMOVE_FROM_BASKET":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.filter((function(e){return e.id!==n.id}))});case"INCREMENT_QUANTITY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.quantity+1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t})}return e}))});case"DECREMENT_QUANTITY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.quantity-1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t>=0?t:0})}return e}))});case"CLOSE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alertName:""});case"TOGGLE_BASKET":return Object(u.a)(Object(u.a)({},e),{},{isBasketShow:!e.isBasketShow});default:return e}}var O=Object(n.createContext)(),h={goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""},m=function(e){var t=e.children,c=Object(n.useReducer)(b,h),a=Object(d.a)(c,2),r=a[0],i=a[1];return r.closeAlert=function(){i({type:"CLOSE_ALERT"})},r.addToBasket=function(e){i({type:"ADD_TO_BASKET",payload:e})},r.incQuantity=function(e){i({type:"INCREMENT_QUANTITY",payload:{id:e}})},r.decQuantity=function(e){i({type:"DECREMENT_QUANTITY",payload:{id:e}})},r.removeFromBasket=function(e){i({type:"REMOVE_FROM_BASKET",payload:{id:e}})},r.handleBasketShow=function(){i({type:"TOGGLE_BASKET"})},r.setGoods=function(e){i({type:"SET_GOODS",payload:e})},Object(s.jsx)(O.Provider,{value:r,children:t})};function x(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function f(e){var t=e.id,c=e.name,a=e.description,r=e.price,i=e.full_background,o=Object(n.useContext)(O).addToBasket;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:i,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:c}),Object(s.jsx)("p",{children:a})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:c,price:r})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[r," \u0440\u0443\u0431."]})]})]})}function p(){var e=Object(n.useContext)(O).goods,t=void 0===e?[]:e;return t.length?Object(s.jsx)("div",{className:"goods",children:t.map((function(e){return Object(s.jsx)(f,Object(u.a)({},e),e.id)}))}):Object(s.jsx)("h3",{children:"Nothing here"})}function N(){var e=Object(n.useContext)(O),t=e.order,c=e.handleBasketShow,a=void 0===c?Function.prototype:c,r=t.length;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:a,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),r?Object(s.jsx)("span",{className:"cart-quantity",children:r}):null]})}function v(e){var t=e.id,c=e.name,a=e.price,r=e.quantity,i=Object(n.useContext)(O),o=i.removeFromBasket,l=i.incQuantity,d=i.decQuantity;return Object(s.jsxs)("li",{className:"collection-item",children:[c," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return d(t)},children:"remove"})," ","x",r," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"add"})," ","= ",a*r," \u0440\u0443\u0431.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return o(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})}function y(){var e=Object(n.useContext)(O),t=e.order,c=void 0===t?[]:t,a=e.handleBasketShow,r=void 0===a?Function.prototype:a,i=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(s.jsx)(v,Object(u.a)({},e),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",i," \u0440\u0443\u0431."]}),Object(s.jsx)("li",{className:"collection-item",children:Object(s.jsx)("button",{className:"btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:r,children:"close"})]})}function g(){var e=Object(n.useContext)(O),t=e.alertName,c=void 0===t?"":t,a=e.closeAlert,r=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(r,3e3);return function(){clearTimeout(e)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function E(){var e=Object(n.useContext)(O),t=e.loading,c=e.order,a=e.isBasketShow,r=e.alertName,i=e.setGoods;return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"891c32ab-ebac6df5-cd01d71e-b7904886"}}).then((function(e){return e.json()})).then((function(e){i(e.featured)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(N,{quantity:c.length}),t?Object(s.jsx)(x,{}):Object(s.jsx)(p,{}),a&&Object(s.jsx)(y,{}),r&&Object(s.jsx)(g,{})]})}var T=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(m,{children:Object(s.jsx)(E,{})}),Object(s.jsx)(l,{})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8055b34a.chunk.js.map