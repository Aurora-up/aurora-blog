import{w as ln,c as Z}from"./path-53f90ab3.js";import{Y as an,Z as B,_ as q,$ as rn,a0 as y,X as on,a1 as G,a2 as _,a3 as un,a4 as t,a5 as sn,a6 as tn,a7 as fn}from"./mermaid.core-7283b488.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,I,D,v,A,$,a){var O=I-l,i=D-h,n=$-v,m=a-A,r=m*O-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*O,h+r*i]}function N(l,h,I,D,v,A,$){var a=l-I,O=h-D,i=($?A:-A)/G(a*a+O*O),n=i*O,m=-i*a,r=l+n,s=h+m,f=I+n,c=D+m,j=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,P=r*c-f*s,S=(g<0?-1:1)*G(fn(0,T*T*R-P*P)),X=(P*g-p*S)/R,Y=(-P*p-g*S)/R,w=(P*g+p*S)/R,d=(-P*p+g*S)/R,x=X-j,e=Y-o,u=w-j,z=d-o;return x*x+e*e>u*u+z*z&&(X=w,Y=d),{cx:X,cy:Y,x01:-n,y01:-m,x11:X*(v/T-1),y11:Y*(v/T-1)}}function vn(){var l=cn,h=yn,I=Z(0),D=null,v=gn,A=mn,$=pn,a=null,O=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,j=un(c-f),o=c>f;if(a||(a=n=O()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(j>on-y)a.moveTo(s*B(f),s*q(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*B(c),r*q(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,P=j,S=j,X=$.apply(this,arguments)/2,Y=X>y&&(D?+D.apply(this,arguments):G(r*r+s*s)),w=_(un(s-r)/2,+I.apply(this,arguments)),d=w,x=w,e,u;if(Y>y){var z=sn(Y/r*q(X)),H=sn(Y/s*q(X));(P-=z*2)>y?(z*=o?1:-1,R+=z,T-=z):(P=0,R=T=(f+c)/2),(S-=H*2)>y?(H*=o?1:-1,p+=H,g-=H):(S=0,p=g=(f+c)/2)}var C=s*B(p),F=s*q(p),J=r*B(T),K=r*q(T);if(w>y){var L=s*B(g),M=s*q(g),Q=r*B(R),U=r*q(R),E;if(j<an)if(E=dn(C,F,Q,U,L,M,J,K)){var V=C-E[0],W=F-E[1],k=L-E[0],b=M-E[1],nn=1/q(tn((V*k+W*b)/(G(V*V+W*W)*G(k*k+b*b)))/2),en=G(E[0]*E[0]+E[1]*E[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}S>y?x>y?(e=N(Q,U,C,F,s,x,o),u=N(L,M,J,K,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(C,F),a.arc(0,0,s,p,g,!o)):a.moveTo(C,F),!(r>y)||!(P>y)?a.lineTo(J,K):d>y?(e=N(J,K,L,M,r,-d,o),u=N(C,F,Q,U,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[B(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:Z(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:Z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:Z(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:Z(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:Z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:Z(+n),i):A},i.padAngle=function(n){return arguments.length?($=typeof n=="function"?n:Z(+n),i):$},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
