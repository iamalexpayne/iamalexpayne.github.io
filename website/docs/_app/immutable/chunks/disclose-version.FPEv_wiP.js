import{c as _}from"./runtime.CrvI8-1v.js";function p(e){console.warn("hydration_mismatch")}const w=1,g=2,O=4,b=8,h=1,T=2,S="[",I="[!",y="]",E={},x=Symbol();let a=!1;function C(e){a=e}let r;function c(e){return r=e}function R(){if(r===null)throw p(),E;return r=r.nextSibling}function D(e){a&&(r=e)}function L(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===y){if(e===0)return n;e-=1}else(t===S||t===I)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var d;function M(){if(d===void 0){d=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function f(){return document.createTextNode("")}function U(e){if(!a)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(f())),c(n),n}function H(e,n){if(!a){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function Y(e,n=!1){if(!a)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var i=f();return t==null||t.before(i),c(i),i}return c(t),t}function k(e){e.textContent=""}function N(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function o(e,n){var t;(t=_).nodes??(t.nodes={start:e,end:n})}function B(e,n){var t=(n&h)!==0,s=(n&T)!==0,i,l=!e.startsWith("<!>");return()=>{if(a)return o(r,null),r;i||(i=N(l?e:"<!>"+e),t||(i=i.firstChild));var u=s?document.importNode(i,!0):i.cloneNode(!0);if(t){var m=u.firstChild,v=u.lastChild;o(m,v)}else o(u,u);return u}}function F(){if(!a){var e=f();return o(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=f()),c(n)),o(n,n),n}function Z(){if(a)return o(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=f();return e.append(n,t),o(n,t),e}function j(e,n){if(a){_.nodes.end=r,R();return}e!==null&&e.before(n)}const A="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(A);export{S as H,O as P,x as U,j as a,E as b,C as c,c as d,f as e,H as f,R as g,a as h,r as i,y as j,p as k,M as l,k as m,o as n,Z as o,U as p,I as q,D as r,Y as s,B as t,L as u,w as v,g as w,b as x,F as y};
