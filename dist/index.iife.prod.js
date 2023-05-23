!function(e,t){"use strict";var n="top",o="bottom",r="right",i="left",a="auto",u=[n,o,r,i],s="start",f="end",l="clippingParents",c="viewport",d="popper",p="reference",v=u.reduce((function(e,t){return e.concat([t+"-"+s,t+"-"+f])}),[]),m=[].concat(u,[a]).reduce((function(e,t){return e.concat([t,t+"-"+s,t+"-"+f])}),[]),h=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function g(e){return e?(e.nodeName||"").toLowerCase():null}function y(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function b(e){return e instanceof y(e).Element||e instanceof Element}function w(e){return e instanceof y(e).HTMLElement||e instanceof HTMLElement}function x(e){return"undefined"!=typeof ShadowRoot&&(e instanceof y(e).ShadowRoot||e instanceof ShadowRoot)}var O={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];w(r)&&g(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});w(o)&&g(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function j(e){return e.split("-")[0]}var k=Math.max,E=Math.min,D=Math.round;function A(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function L(){return!/^((?!chrome|android).)*safari/i.test(A())}function M(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&w(e)&&(r=e.offsetWidth>0&&D(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&D(o.height)/e.offsetHeight||1);var a=(b(e)?y(e):window).visualViewport,u=!L()&&n,s=(o.left+(u&&a?a.offsetLeft:0))/r,f=(o.top+(u&&a?a.offsetTop:0))/i,l=o.width/r,c=o.height/i;return{width:l,height:c,top:f,right:s+l,bottom:f+c,left:s,x:s,y:f}}function P(e){var t=M(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function T(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&x(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function W(e){return y(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(g(e))>=0}function S(e){return((b(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return"html"===g(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||S(e)}function R(e){return w(e)&&"fixed"!==W(e).position?e.offsetParent:null}function V(e){for(var t=y(e),n=R(e);n&&H(n)&&"static"===W(n).position;)n=R(n);return n&&("html"===g(n)||"body"===g(n)&&"static"===W(n).position)?t:n||function(e){var t=/firefox/i.test(A());if(/Trident/i.test(A())&&w(e)&&"fixed"===W(e).position)return null;var n=B(e);for(x(n)&&(n=n.host);w(n)&&["html","body"].indexOf(g(n))<0;){var o=W(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function C(e,t,n){return k(e,E(t,n))}function U(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function N(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var F={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,a=e.state,s=e.name,f=e.options,l=a.elements.arrow,c=a.modifiersData.popperOffsets,d=j(a.placement),p=q(d),v=[i,r].indexOf(d)>=0?"height":"width";if(l&&c){var m=function(e,t){return U("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:N(e,u))}(f.padding,a),h=P(l),g="y"===p?n:i,y="y"===p?o:r,b=a.rects.reference[v]+a.rects.reference[p]-c[p]-a.rects.popper[v],w=c[p]-a.rects.reference[p],x=V(l),O=x?"y"===p?x.clientHeight||0:x.clientWidth||0:0,k=b/2-w/2,E=m[g],D=O-h[v]-m[y],A=O/2-h[v]/2+k,L=C(E,A,D),M=p;a.modifiersData[s]=((t={})[M]=L,t.centerOffset=L-A,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&T(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function I(e){return e.split("-")[1]}var $={top:"auto",right:"auto",bottom:"auto",left:"auto"};function z(e){var t,a=e.popper,u=e.popperRect,s=e.placement,l=e.variation,c=e.offsets,d=e.position,p=e.gpuAcceleration,v=e.adaptive,m=e.roundOffsets,h=e.isFixed,g=c.x,b=void 0===g?0:g,w=c.y,x=void 0===w?0:w,O="function"==typeof m?m({x:b,y:x}):{x:b,y:x};b=O.x,x=O.y;var j=c.hasOwnProperty("x"),k=c.hasOwnProperty("y"),E=i,A=n,L=window;if(v){var M=V(a),P="clientHeight",T="clientWidth";if(M===y(a)&&"static"!==W(M=S(a)).position&&"absolute"===d&&(P="scrollHeight",T="scrollWidth"),s===n||(s===i||s===r)&&l===f)A=o,x-=(h&&M===L&&L.visualViewport?L.visualViewport.height:M[P])-u.height,x*=p?1:-1;if(s===i||(s===n||s===o)&&l===f)E=r,b-=(h&&M===L&&L.visualViewport?L.visualViewport.width:M[T])-u.width,b*=p?1:-1}var H,B=Object.assign({position:d},v&&$),R=!0===m?function(e,t){var n=e.x,o=e.y,r=t.devicePixelRatio||1;return{x:D(n*r)/r||0,y:D(o*r)/r||0}}({x:b,y:x},y(a)):{x:b,y:x};return b=R.x,x=R.y,p?Object.assign({},B,((H={})[A]=k?"0":"",H[E]=j?"0":"",H.transform=(L.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",H)):Object.assign({},B,((t={})[A]=k?x+"px":"",t[E]=j?b+"px":"",t.transform="",t))}var _={passive:!0};var X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,(function(e){return X[e]}))}var G={start:"end",end:"start"};function J(e){return e.replace(/start|end/g,(function(e){return G[e]}))}function K(e){var t=y(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Q(e){return M(S(e)).left+K(e).scrollLeft}function Z(e){var t=W(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function ee(e){return["html","body","#document"].indexOf(g(e))>=0?e.ownerDocument.body:w(e)&&Z(e)?e:ee(B(e))}function te(e,t){var n;void 0===t&&(t=[]);var o=ee(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=y(o),a=r?[i].concat(i.visualViewport||[],Z(o)?o:[]):o,u=t.concat(a);return r?u:u.concat(te(B(a)))}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t,n){return t===c?ne(function(e,t){var n=y(e),o=S(e),r=n.visualViewport,i=o.clientWidth,a=o.clientHeight,u=0,s=0;if(r){i=r.width,a=r.height;var f=L();(f||!f&&"fixed"===t)&&(u=r.offsetLeft,s=r.offsetTop)}return{width:i,height:a,x:u+Q(e),y:s}}(e,n)):b(t)?function(e,t){var n=M(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ne(function(e){var t,n=S(e),o=K(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=k(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=k(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+Q(e),s=-o.scrollTop;return"rtl"===W(r||n).direction&&(u+=k(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:u,y:s}}(S(e)))}function re(e,t,n,o){var r="clippingParents"===t?function(e){var t=te(B(e)),n=["absolute","fixed"].indexOf(W(e).position)>=0&&w(e)?V(e):e;return b(n)?t.filter((function(e){return b(e)&&T(e,n)&&"body"!==g(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),a=i[0],u=i.reduce((function(t,n){var r=oe(e,n,o);return t.top=k(r.top,t.top),t.right=E(r.right,t.right),t.bottom=E(r.bottom,t.bottom),t.left=k(r.left,t.left),t}),oe(e,a,o));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function ie(e){var t,a=e.reference,u=e.element,l=e.placement,c=l?j(l):null,d=l?I(l):null,p=a.x+a.width/2-u.width/2,v=a.y+a.height/2-u.height/2;switch(c){case n:t={x:p,y:a.y-u.height};break;case o:t={x:p,y:a.y+a.height};break;case r:t={x:a.x+a.width,y:v};break;case i:t={x:a.x-u.width,y:v};break;default:t={x:a.x,y:a.y}}var m=c?q(c):null;if(null!=m){var h="y"===m?"height":"width";switch(d){case s:t[m]=t[m]-(a[h]/2-u[h]/2);break;case f:t[m]=t[m]+(a[h]/2-u[h]/2)}}return t}function ae(e,t){void 0===t&&(t={});var i=t,a=i.placement,s=void 0===a?e.placement:a,f=i.strategy,v=void 0===f?e.strategy:f,m=i.boundary,h=void 0===m?l:m,g=i.rootBoundary,y=void 0===g?c:g,w=i.elementContext,x=void 0===w?d:w,O=i.altBoundary,j=void 0!==O&&O,k=i.padding,E=void 0===k?0:k,D=U("number"!=typeof E?E:N(E,u)),A=x===d?p:d,L=e.rects.popper,P=e.elements[j?A:x],T=re(b(P)?P:P.contextElement||S(e.elements.popper),h,y,v),W=M(e.elements.reference),H=ie({reference:W,element:L,strategy:"absolute",placement:s}),B=ne(Object.assign({},L,H)),R=x===d?B:W,V={top:T.top-R.top+D.top,bottom:R.bottom-T.bottom+D.bottom,left:T.left-R.left+D.left,right:R.right-T.right+D.right},q=e.modifiersData.offset;if(x===d&&q){var C=q[s];Object.keys(V).forEach((function(e){var t=[r,o].indexOf(e)>=0?1:-1,i=[n,o].indexOf(e)>=0?"y":"x";V[e]+=C[i]*t}))}return V}function ue(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,l=void 0===f?m:f,c=I(o),d=c?s?v:v.filter((function(e){return I(e)===c})):u,p=d.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=d);var h=p.reduce((function(t,n){return t[n]=ae(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[j(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}var se={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,u=e.options,f=e.name;if(!t.modifiersData[f]._skip){for(var l=u.mainAxis,c=void 0===l||l,d=u.altAxis,p=void 0===d||d,v=u.fallbackPlacements,m=u.padding,h=u.boundary,g=u.rootBoundary,y=u.altBoundary,b=u.flipVariations,w=void 0===b||b,x=u.allowedAutoPlacements,O=t.options.placement,k=j(O),E=v||(k===O||!w?[Y(O)]:function(e){if(j(e)===a)return[];var t=Y(e);return[J(e),t,J(t)]}(O)),D=[O].concat(E).reduce((function(e,n){return e.concat(j(n)===a?ue(t,{placement:n,boundary:h,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),A=t.rects.reference,L=t.rects.popper,M=new Map,P=!0,T=D[0],W=0;W<D.length;W++){var H=D[W],S=j(H),B=I(H)===s,R=[n,o].indexOf(S)>=0,V=R?"width":"height",q=ae(t,{placement:H,boundary:h,rootBoundary:g,altBoundary:y,padding:m}),C=R?B?r:i:B?o:n;A[V]>L[V]&&(C=Y(C));var U=Y(C),N=[];if(c&&N.push(q[S]<=0),p&&N.push(q[C]<=0,q[U]<=0),N.every((function(e){return e}))){T=H,P=!1;break}M.set(H,N)}if(P)for(var F=function(e){var t=D.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},$=w?3:1;$>0;$--){if("break"===F($))break}t.placement!==T&&(t.modifiersData[f]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function fe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function le(e){return[n,r,o,i].some((function(t){return e[t]>=0}))}var ce={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,a=e.name,u=o.offset,s=void 0===u?[0,0]:u,f=m.reduce((function(e,o){return e[o]=function(e,t,o){var a=j(e),u=[i,n].indexOf(a)>=0?-1:1,s="function"==typeof o?o(Object.assign({},t,{placement:e})):o,f=s[0],l=s[1];return f=f||0,l=(l||0)*u,[i,r].indexOf(a)>=0?{x:l,y:f}:{x:f,y:l}}(o,t.rects,s),e}),{}),l=f[t.placement],c=l.x,d=l.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=d),t.modifiersData[a]=f}};var de={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,a=e.options,u=e.name,f=a.mainAxis,l=void 0===f||f,c=a.altAxis,d=void 0!==c&&c,p=a.boundary,v=a.rootBoundary,m=a.altBoundary,h=a.padding,g=a.tether,y=void 0===g||g,b=a.tetherOffset,w=void 0===b?0:b,x=ae(t,{boundary:p,rootBoundary:v,padding:h,altBoundary:m}),O=j(t.placement),D=I(t.placement),A=!D,L=q(O),M="x"===L?"y":"x",T=t.modifiersData.popperOffsets,W=t.rects.reference,H=t.rects.popper,S="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,B="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,U={x:0,y:0};if(T){if(l){var N,F="y"===L?n:i,$="y"===L?o:r,z="y"===L?"height":"width",_=T[L],X=_+x[F],Y=_-x[$],G=y?-H[z]/2:0,J=D===s?W[z]:H[z],K=D===s?-H[z]:-W[z],Q=t.elements.arrow,Z=y&&Q?P(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[F],ne=ee[$],oe=C(0,W[z],Z[z]),re=A?W[z]/2-G-oe-te-B.mainAxis:J-oe-te-B.mainAxis,ie=A?-W[z]/2+G+oe+ne+B.mainAxis:K+oe+ne+B.mainAxis,ue=t.elements.arrow&&V(t.elements.arrow),se=ue?"y"===L?ue.clientTop||0:ue.clientLeft||0:0,fe=null!=(N=null==R?void 0:R[L])?N:0,le=_+ie-fe,ce=C(y?E(X,_+re-fe-se):X,_,y?k(Y,le):Y);T[L]=ce,U[L]=ce-_}if(d){var de,pe="x"===L?n:i,ve="x"===L?o:r,me=T[M],he="y"===M?"height":"width",ge=me+x[pe],ye=me-x[ve],be=-1!==[n,i].indexOf(O),we=null!=(de=null==R?void 0:R[M])?de:0,xe=be?ge:me-W[he]-H[he]-we+B.altAxis,Oe=be?me+W[he]+H[he]-we-B.altAxis:ye,je=y&&be?function(e,t,n){var o=C(e,t,n);return o>n?n:o}(xe,me,Oe):C(y?xe:ge,me,y?Oe:ye);T[M]=je,U[M]=je-me}t.modifiersData[u]=U}},requiresIfExists:["offset"]};function pe(e,t,n){void 0===n&&(n=!1);var o,r,i=w(t),a=w(t)&&function(e){var t=e.getBoundingClientRect(),n=D(t.width)/e.offsetWidth||1,o=D(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),u=S(t),s=M(e,a,n),f={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&(("body"!==g(t)||Z(u))&&(f=(o=t)!==y(o)&&w(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:K(o)),w(t)?((l=M(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):u&&(l.x=Q(u))),{x:s.left+f.scrollLeft-l.x,y:s.top+f.scrollTop-l.y,width:s.width,height:s.height}}function ve(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var me={placement:"bottom",modifiers:[],strategy:"absolute"};function he(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ge(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?me:r;return function(e,t,n){void 0===n&&(n=i);var r,a,u={placement:"bottom",orderedModifiers:[],options:Object.assign({},me,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,l={state:u,setOptions:function(n){var r="function"==typeof n?n(u.options):n;c(),u.options=Object.assign({},i,u.options,r),u.scrollParents={reference:b(e)?te(e):e.contextElement?te(e.contextElement):[],popper:te(t)};var a,f,d=function(e){var t=ve(e);return h.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(o,u.options.modifiers),f=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(f).map((function(e){return f[e]}))));return u.orderedModifiers=d.filter((function(e){return e.enabled})),u.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:u,name:t,instance:l,options:o}),a=function(){};s.push(i||a)}})),l.update()},forceUpdate:function(){if(!f){var e=u.elements,t=e.reference,n=e.popper;if(he(t,n)){u.rects={reference:pe(t,V(n),"fixed"===u.options.strategy),popper:P(n)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach((function(e){return u.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<u.orderedModifiers.length;o++)if(!0!==u.reset){var r=u.orderedModifiers[o],i=r.fn,a=r.options,s=void 0===a?{}:a,c=r.name;"function"==typeof i&&(u=i({state:u,options:s,name:c,instance:l})||u)}else u.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){l.forceUpdate(),e(u)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(r())}))}))),a}),destroy:function(){c(),f=!0}};if(!he(e,t))return l;function c(){s.forEach((function(e){return e()})),s=[]}return l.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var ye=ge({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,u=void 0===a||a,s=y(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,_)})),u&&s.addEventListener("resize",n.update,_),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,_)})),u&&s.removeEventListener("resize",n.update,_)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ie({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,u=n.roundOffsets,s=void 0===u||u,f={placement:j(t.placement),variation:I(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,z(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,z(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},O,ce,se,de,F,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=ae(t,{elementContext:"reference"}),u=ae(t,{altBoundary:!0}),s=fe(a,o),f=fe(u,r,i),l=le(s),c=le(f);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":c})}}]});function be(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}function we(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}e.usePopperjs=function(e,n,o){var r=t.ref(!1);t.onMounted((function(){t.nextTick((function(){r.value=!0}))})),t.onUnmounted((function(){r.value=!1,l()}));var i=t.ref(!0);t.onUpdated((function(){t.nextTick((function(){i.value=!i.value}))}));var a=t.ref(),u=t.ref();t.watch((function(){return[r.value,i.value]}),(function(){var o,i;r.value&&((null===(o=t.unref(e))||void 0===o?void 0:o.$el)?a.value=t.unref(e).$el:a.value=t.unref(e),(null===(i=t.unref(n))||void 0===i?void 0:i.$el)?u.value=t.unref(n).$el:u.value=t.unref(n))}));var s=t.ref();t.watch((function(){return[a.value,u.value]}),(function(){l(),a.value&&u.value&&f()}));var f=function(){var e,t,n,r;s.value=ye(a.value,u.value,{placement:null!==(e=null==o?void 0:o.placement)&&void 0!==e?e:"bottom",modifiers:null!==(t=null==o?void 0:o.modifiers)&&void 0!==t?t:[],strategy:null!==(n=null==o?void 0:o.strategy)&&void 0!==n?n:"absolute",onFirstUpdate:null!==(r=null==o?void 0:o.onFirstUpdate)&&void 0!==r?r:void 0})},l=function(){var e;null===(e=s.value)||void 0===e||e.destroy(),s.value=void 0},c=t.ref(!1),d=function(){return c.value=!c.value},p=function(){return c.value=!0},v=function(){return c.value=!1};t.watch((function(){return[s.value,t.unref(null==o?void 0:o.trigger),t.unref(null==o?void 0:o.forceShow)]}),(function(){if(s.value)return t.unref(null==o?void 0:o.forceShow)?(c.value=!0,void b()):void y()})),t.watch((function(){return t.unref(null==o?void 0:o.forceShow)}),(function(){t.unref(null==o?void 0:o.forceShow)||"manual"!==t.unref(null==o?void 0:o.trigger)&&(c.value=!1)}));var m=t.ref(),h=function(){var e;0===t.unref(null==o?void 0:o.delayOnMouseover)?p():(clearTimeout(m.value),m.value=setTimeout((function(){p()}),null!==(e=t.unref(null==o?void 0:o.delayOnMouseover))&&void 0!==e?e:200))},g=function(){var e;0===t.unref(null==o?void 0:o.delayOnMouseout)?v():(clearTimeout(m.value),m.value=setTimeout((function(){v()}),null!==(e=t.unref(null==o?void 0:o.delayOnMouseout))&&void 0!==e?e:200))},y=function(){var e;switch(b(),null!==(e=t.unref(null==o?void 0:o.trigger))&&void 0!==e?e:"hover"){case"click-to-open":be(a.value,"click",p),be(document,"click",w);break;case"click-to-toggle":be(a.value,"click",d),be(document,"click",w);break;case"hover":be(a.value,"mouseover",h),be(u.value,"mouseover",h),be(a.value,"mouseout",g),be(u.value,"mouseout",g);break;case"focus":be(a.value,"focus",p),be(u.value,"focus",p),be(a.value,"blur",v),be(u.value,"blur",v);break;case"manual":break;default:throw TypeError()}},b=function(){we(a.value,"click",p),we(document,"click",w),we(a.value,"click",d),we(a.value,"mouseover",h),we(u.value,"mouseover",h),we(a.value,"mouseout",g),we(u.value,"mouseout",g),we(a.value,"focus",p),we(u.value,"focus",p),we(a.value,"blur",v),we(u.value,"blur",v)},w=function(e){var t,n;(null===(t=a.value)||void 0===t?void 0:t.contains(e.target))||(null===(n=u.value)||void 0===n?void 0:n.contains(e.target))||v()};return t.watch((function(){return[s.value,c.value]}),(function(){var e,n,r,i,a;s.value&&(c.value||t.unref(null==o?void 0:o.forceShow)?(null===(e=u.value)||void 0===e||e.classList.remove("vue-use-popperjs-none"),null===(n=null==o?void 0:o.onShow)||void 0===n||n.call(o),null===(r=s.value)||void 0===r||r.update()):(null===(i=u.value)||void 0===i||i.classList.add("vue-use-popperjs-none"),null===(a=null==o?void 0:o.onHide)||void 0===a||a.call(o)))})),{instance:s,visible:c}}}(this.VueUsePopperjs=this.VueUsePopperjs||{},VueDemi);
