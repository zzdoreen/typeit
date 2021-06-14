// TypeIt by Alex MacArthur - https://typeitjs.com
const e={breakLines:!0,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},t=[null,null,{}];var n=(e,t)=>Object.assign({},e,t),r=e=>Array.from(e),i=e=>(new DOMParser).parseFromString(e,"text/html").body;const o=(e,t=null,n=!1)=>{let i=r(e.childNodes).flatMap(e=>{return 3===(t=e).nodeType||"BR"===t.tagName?e:o(e);var t});return t&&(i=i.filter(e=>!t.contains(e))),n?i.reverse():i},s=(e,t=null)=>({node:t,content:e});function l(e){let t=i(e);return o(t).flatMap(e=>e.nodeValue?r(e.nodeValue).map(t=>s(t,e)):s(e))}function u(e,t=!0){return t?l(e):r(e).map(e=>s(e))}var c=e=>document.createElement(e),a=(e,t="")=>{let n=c("style");n.id=t,n.appendChild(document.createTextNode(e)),document.head.appendChild(n)},f=e=>Array.isArray(e),h=e=>(f(e)||(e=[e/2,e/2]),e),d=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t)),m=e=>"value"in e,p=e=>"BODY"===e.tagName;const v=(e,t)=>{let n=r(t.querySelectorAll("*"));return[t].concat(n.reverse()).find(t=>t.cloneNode().isEqualNode(e.cloneNode()))},y=(e,t,n=null,r)=>{let i=t.content instanceof HTMLElement,s=t.node,l=null==s?void 0:s.parentNode,u=i?t.content:document.createTextNode(t.content);if(m(e))return void(e.value=""+e.value+t.content);if(!i&&l&&!p(l)){let r=v(l,e);if(r&&((e,t)=>{let n=e.nextSibling;return!n||n.isEqualNode(t)})(r,n))e=r;else{u=l.cloneNode(),u.innerText=t.content;let n=l.parentNode,r=n.cloneNode();if(!p(n)){let t=v(r,e);for(;!t&&!p(n);){let i=r;i.innerHTML=u.outerHTML,u=i,n=n.parentNode,r=n.cloneNode(),t=v(r,e)}e=t||e}}}let c=o(e,n,!0)[r-1],a=c?c.parentNode:e;a.insertBefore(u,a.contains(n)?n:null)};var g=(e,t)=>(e[2]=n(e[2],t)||t,e),P=(e,t,n={},r=!1)=>e.map((i,o)=>{let s=[t,i,n];return r&&(0===o&&(s=g(s,{isFirst:!0})),o+1===e.length&&(s=g(s,{isLast:!0}))),s}),b=e=>e&&e.remove(),S=(e,t,n)=>{let r="string"==typeof e,i=!1,o=-1*e;if(r){let r="END"===e.toUpperCase();o=r?-1:1,i=r?t+o>0:t+o<n.length}return{isString:r,numberOfSteps:o,canKeepMoving:i}};function M(e,t,n){if(!e.s){if(n instanceof N){if(!n.s)return void(n.o=M.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(M.bind(null,e,t),M.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}const N=function(){function e(){}return e.prototype.then=function(t,n){const r=new e,i=this.s;if(i){const e=1&i?t:n;if(e){try{M(r,1,e(this.v))}catch(e){M(r,2,e)}return r}return this}return this.o=function(e){try{const i=e.v;1&e.s?M(r,1,t?t(i):i):n?M(r,1,n(i)):M(r,2,i)}catch(e){M(r,2,e)}},r},e}();function T(p,v={}){const g=this,T=(e,t)=>(G.add(e),((e={})=>{let t=e.delay;t&&G.add([[C,t]])})(t),this),x=(e={})=>[[k,e,{force:!0}],[k,Q,{force:!0}]],L=e=>{let t=Q.nextStringDelay;G.add([[C,t[0]],...e,[C,t[1]]])},w=()=>I?r(O.value):o(O,J,!0),D=e=>{J&&(J.classList.toggle("disabled",e),J.classList.toggle("with-delay",!e))},E=function(e,t){try{return Promise.resolve(new Promise(n=>{F.push(setTimeout(function(){try{return Promise.resolve(e()).then(function(){n()})}catch(e){return Promise.reject(e)}},t))}))}catch(e){return Promise.reject(e)}},j=function(){try{let e;K.started=!0;let t,n=G.getItems();const r=function(r,i){try{var o=function(){function r(e){return K.completed=!0,Promise.resolve(Q.afterComplete(...t)).then(function(){if(!Q.loop)throw"";let e=Q.loopDelay;E(function(){try{return Promise.resolve(function(e){try{function t(t){return G.reset(),G.set(0,[C,e,{}]),Promise.resolve(B(!0)).then(function(){})}return Promise.resolve(V?Promise.resolve(H(V)).then(t):t())}catch(e){return Promise.reject(e)}}(e[0])).then(function(){j()})}catch(e){return Promise.reject(e)}},e[1])})}const i=(o=n,s=function(e){function r(){return Promise.resolve(Q.beforeStep(...t)).then(function(){return Promise.resolve(i[0].call(g,i[1],o)).then(function(){function n(){return Promise.resolve(Q.afterStep(...t)).then(function(){G.setMeta(e,{executed:!0}),D(!1)})}const r=function(){var e;if(null!=(e=i[2])&&e.isLast)return Promise.resolve(Q.afterString(...t)).then(function(){})}();return r&&r.then?r.then(n):n()})})}if(K.frozen||K.destroyed)throw"";let i=n[e],o=i[2];t=[i,g],o.freezeCursor&&D(!0),R=function(e,t,n){let r=(t=null!==t?t:e/3)/2;return n?[d(e,e/2),d(t,r)]:[e,t]}(Q.speed,Q.deleteSpeed,Q.lifeLike);const s=function(){if(null!=o&&o.isFirst)return Promise.resolve(Q.beforeString(...t)).then(function(){})}();return s&&s.then?s.then(r):r()},l=function(){return e},a=-1,function e(t){try{for(;++a<o.length&&(!l||!l());)if((t=s(a))&&t.then){if(!((n=t)instanceof N&&1&n.s))return void t.then(e,c||(c=M.bind(null,u=new N,2)));t=t.v}u?M(u,1,t):u=t}catch(e){M(u||(u=new N),2,e)}var n}(),u);var o,s,l,u,c,a;return i&&i.then?i.then(r):r()}()}catch(e){return}return o&&o.then?o.then(void 0,function(){}):o}();return Promise.resolve(r&&r.then?r.then(function(t){return e?t:g}):e?r:g)}catch(e){return Promise.reject(e)}},C=(e=0)=>E(()=>{},e),H=e=>{let t=w(),{numberOfSteps:n,isString:r,canKeepMoving:i}=S(e,V,t);return V+=n,E(function(){try{((e,t,n,r)=>{if(!n)return;let i=t[(r>t.length?t.length:r)-1];(e=(null==i?void 0:i.parentNode)||e).insertBefore(n,i||null)})(O,w(),J,V);const e=function(){if(r&&i)return Promise.resolve(H(n>0?"START":"END")).then(function(){})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},R[0])},A=e=>E(()=>{y(O,e,J,V)},R[0]),k=function(e){try{return Q=n(Q,e),Promise.resolve()}catch(e){return Promise.reject(e)}},z=function(){try{return I?(O.value="",Promise.resolve()):(w().forEach(e=>{b(e)}),Promise.resolve())}catch(e){return Promise.reject(e)}},B=(e=!1)=>E(function(){try{let t=w(),n=t.length;if(!n)return Promise.resolve();I?O.value=O.value.slice(0,-1):(b(t[V]),O.querySelectorAll("*").forEach(e=>{if(!e.innerHTML&&"BR"!==e.tagName){let t=e;for(;1===t.parentElement.childNodes.length;)t=t.parentElement;b(t)}}));const r=function(){if(e&&n-1>0)return Promise.resolve(B(!0)).then(function(){})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},R[1]);this.break=function(e){return T([[A,s(c("BR"))]],e)},this.delete=function(e,t){let n=x(t);return T([n[0],...[...Array(Math.abs(e)||1)].fill(null).map(()=>[B,!e,U]),n[1]],t)},this.empty=function(e={}){return T([[z]],e)},this.exec=function(e,t){let n=x(t);return T([n[0],[e,null],n[1]],t)},this.move=function(e,t){let n=S(e,V,w()),r=x(t),i=n.isString?e:Math.sign(e);return T([r[0],...[...Array(Math.abs(e)||1)].fill(null).map(()=>[H,i,U]),r[1]],t)},this.options=function(e){return T([[k,e]],e)},this.pause=function(e,t){return T([[C,e]],t)},this.type=function(e,t){let n=x(t),r=u(e,Q.html),i=[n[0],...P(r,A,U,!0),n[1]];return T(i,t)},this.is=function(e){return K[e]},this.destroy=function(e=!0){F.forEach(e=>clearTimeout(e)),F=[],e&&b(J),K.destroyed=!0},this.freeze=function(){K.frozen=!0},this.unfreeze=function(){K.frozen=!1,j()},this.reset=function(){!this.is("destroyed")&&this.destroy(),G.reset(),V=0;for(let e in K)K[e]=!1;return I?O.value="":O.innerHTML="",this},this.go=function(){return K.started?this:(function(){try{function e(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>{const e=J.getBoundingClientRect().width/2;J.style.margin="0 -"+(e+2)+"px 0 -"+(e-2)+"px"})})}if(!J)return Promise.resolve();let t="[data-typeit-id='"+Y+"'] .ti-cursor";a("@keyframes blink-"+Y+" { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } "+t+" { animation: blink-"+Y+" "+Q.cursorSpeed/1e3+"s infinite; } "+t+".with-delay { animation-delay: 500ms; } "+t+".disabled { animation: none; }",Y),O.appendChild(J);const n="loaded"===document.fonts.status;Promise.resolve(n?e():Promise.resolve(document.fonts.ready).then(e))}catch(e){return Promise.reject(e)}}(),Q.waitUntilVisible?(((e,t)=>{new IntersectionObserver((n,r)=>{n.forEach(n=>{n.isIntersecting&&(t(),r.unobserve(e))})},{threshold:1}).observe(e)})(O,j.bind(this)),this):(j(),this))},this.getQueue=function(){return G},this.getOptions=function(){return Q},this.getElement=function(){return O};let O="string"==typeof(q=p)?document.querySelector(q):q;var q;let I=m(O),R=[],F=[],V=0,U={freezeCursor:!0},K={started:!1,completed:!1,frozen:!1,destroyed:!1},Q=n(e,v);Q=n(Q,{html:!I&&Q.html,nextStringDelay:h(Q.nextStringDelay),loopDelay:h(Q.loopDelay)});let Y=Math.random().toString().substring(2,9),G=function(e){const r=function(e){return i=i.concat(e.map(e=>t.map((t,n)=>e[n]?e[n]:t))),this};let i=[];return r(e),{add:r,set:function(e,t){i[e]=t},reset:function(){i=i.map(e=>(e[2].executed=!1,e))},getItems:function(){return i.filter(e=>!e[2].executed)},setMeta:function(e,t){i[e][2]=n(i[e][2],t)}}}([[C,Q.startDelay]]);O.dataset.typeitId=Y,a("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}");let J=(()=>{if(I||!Q.cursor)return;let e=c("span");return e.innerHTML=i(Q.cursorChar).innerHTML,e.className="ti-cursor",e.style.cssText="display:inline;"+(e=>{let{font:t,lineHeight:n,color:r}=window.getComputedStyle(e,null),i=c("I");return Object.assign(i.style,{color:r,font:t,lineHeight:n}),i.style.cssText})(O),e})();var W;Q.strings=(e=>{let t=O.innerHTML;return t?(O.innerHTML="",Q.startDelete?(l(t).forEach(e=>{y(O,e,J,V)}),L([[B,!0]]),e):[t.trim()].concat(e)):e})(f(W=Q.strings)?W:[W]),Q.strings.length&&(()=>{let e=Q.strings.filter(e=>!!e);e.forEach((t,n)=>{let r=u(t,Q.html);G.add(P(r,A,U,!0)),n+1!==e.length&&L(Q.breakLines?[[A,s(c("BR")),U]]:P(r,B,U))})})()}export default T;
