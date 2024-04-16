(()=>{"use strict";var A,e={477:(A,e,t)=>{var r=t(236),o=t(848);t(583),t(535),t(709);const n=new r.A(".testimonials__swiper",{modules:[o.Vx,o.dK,o.xI],rewind:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i=new r.A(".testimonials__swiper2",{modules:[o.Vx,o.dK,o.xI],rewind:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});n.controller.control=i,i.controller.control=n;const a=document.querySelector(".testimonials"),c=a.querySelector(".testimonials__close-button"),l=a.querySelector("#modal"),s=(a.querySelectorAll(".testimonials__swiper .swiper-slide__content"),a.querySelector(".testimonials__swiper .swiper-wrapper")),g=a.querySelector(".testimonials__swiper2 .swiper-wrapper"),d=document.querySelector("#testimonial-slide").content.querySelector("div"),u=document.querySelector("#testimonial-read-more-button").content.querySelector("button");console.log(n.el.style.accentColor),i.update(),c.addEventListener("click",(()=>{l.close()}));const B=A=>{A.querySelectorAll(".swiper-slide").forEach((A=>A.remove()))};B(s),B(g);const p=A=>A.el.querySelector(".swiper-slide-active"),Y=A=>A.querySelector("button"),w=()=>l.showModal(),E=(A,e,t=!1)=>{const r=d.cloneNode(!0),o=u.cloneNode(!0);((A,e)=>{((A,e)=>{A.querySelector("h4").textContent=e.author})(A,e),((A,e,t,r)=>{let o=e.body.slice();o.length>250&&!0===r&&(o=o.slice(0,250).trim()+" ...",A.children[0].appendChild(t),A.dataset.truncated="true"),A.querySelector("p").textContent=o})(A,e,o,t)})(r,e),A.appendChild(r)};(async()=>{try{const A=await fetch("../data/testimonials.json").then((A=>A.json())).catch((()=>{throw new Error}));A.forEach((A=>E(s,A,!0))),A.forEach((A=>E(g,A))),n.update();const e=p(n);Y(e).addEventListener("click",w),n.on("slideChangeTransitionEnd",(()=>{var A;(A=>"true"===A.dataset.truncated)(A=p(n))&&Y(A).addEventListener("click",w)}))}catch(A){console.log(A)}})(),a.querySelectorAll(".testimonials__open-button").forEach((A=>{A.addEventListener("click",(()=>{l.showModal(),i.slideTo(n.activeIndex)}))})),console.log("Services page")},85:A=>{A.exports="data:application/font-woff;charset=utf-8;base64, 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"}},t={};function r(A){var o=t[A];if(void 0!==o)return o.exports;var n=t[A]={id:A,exports:{}};return e[A](n,n.exports,r),n.exports}r.m=e,A=[],r.O=(e,t,o,n)=>{if(!t){var i=1/0;for(s=0;s<A.length;s++){for(var[t,o,n]=A[s],a=!0,c=0;c<t.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((A=>r.O[A](t[c])))?t.splice(c--,1):(a=!1,n<i&&(i=n));if(a){A.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var s=A.length;s>0&&A[s-1][2]>n;s--)A[s]=A[s-1];A[s]=[t,o,n]},r.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return r.d(e,{a:e}),e},r.d=(A,e)=>{for(var t in e)r.o(e,t)&&!r.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:e[t]})},r.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),(()=>{r.b=document.baseURI||self.location.href;var A={671:0};r.O.j=e=>0===A[e];var e=(e,t)=>{var o,n,[i,a,c]=t,l=0;if(i.some((e=>0!==A[e]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var s=c(r)}for(e&&e(t);l<i.length;l++)n=i[l],r.o(A,n)&&A[n]&&A[n][0](),A[n]=0;return r.O(s)},t=self.webpackChunkelite_general_contracting=self.webpackChunkelite_general_contracting||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0;var o=r.O(void 0,[39],(()=>r(477)));o=r.O(o)})();