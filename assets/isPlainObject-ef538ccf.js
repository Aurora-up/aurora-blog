import{a as h}from"./array-9f3ba611.js";import{w as j,c as f}from"./path-53f90ab3.js";import{o as m,a0 as O,B as y,C as P}from"./mermaid.core-689181e8.js";function d(n){return n[0]}function w(n){return n[1]}function q(n,e){var o=f(!0),c=null,l=m,u=null,v=j(r);n=typeof n=="function"?n:n===void 0?d:f(n),e=typeof e=="function"?e:e===void 0?w:f(e);function r(t){var i,g=(t=h(t)).length,s,a=!1,p;for(c==null&&(u=l(p=v())),i=0;i<=g;++i)!(i<g&&o(s=t[i],i,t))===a&&((a=!a)?u.lineStart():u.lineEnd()),a&&u.point(+n(s,i,t),+e(s,i,t));if(p)return u=null,p+""||null}return r.x=function(t){return arguments.length?(n=typeof t=="function"?t:f(+t),r):n},r.y=function(t){return arguments.length?(e=typeof t=="function"?t:f(+t),r):e},r.defined=function(t){return arguments.length?(o=typeof t=="function"?t:f(!!t),r):o},r.curve=function(t){return arguments.length?(l=t,c!=null&&(u=l(c)),r):l},r.context=function(t){return arguments.length?(t==null?c=u=null:u=l(c=t),r):c},r}var S=O(Object.getPrototypeOf,Object);const C=S;var T="[object Object]",L=Function.prototype,k=Object.prototype,b=L.toString,A=k.hasOwnProperty,B=b.call(Object);function z(n){if(!y(n)||P(n)!=T)return!1;var e=C(n);if(e===null)return!0;var o=A.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&b.call(o)==B}export{C as g,z as i,q as l};
