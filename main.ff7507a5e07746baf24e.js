(()=>{"use strict";var e,t={138:(e,t,r)=>{r(169);var i=r(411),o=r.n(i),s=r(51);function n(e){e.stopPropagation();const t=e.target.closest(".menu-item").querySelector("ul.sub-menu");t&&(e.target.closest(".menu-item").classList.toggle("active"),t.classList.toggle("active"))}document.querySelectorAll(".menu-item").forEach((e=>{e.addEventListener("click",n)}));const l=document.getElementById("overlay"),a=document.querySelector(".navbar__toggle"),c=document.getElementById("nav-mobile"),d=document.querySelector(".nav-mobile__close");a.addEventListener("click",(function(){c.classList.add("active"),l.classList.add("active"),document.body.classList.add("noscroll")})),d.addEventListener("click",(function(){c.classList.remove("active"),l.classList.remove("active"),document.body.classList.remove("noscroll")})),new s.ZP(".swiper",{modules:[s.W_],direction:"horizontal",slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:3},992:{slidesPerView:3},487:{slidesPerView:3},1:{slidesPerView:1}}}),new s.ZP(".swiper-product",{modules:[s.W_],direction:"horizontal",slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:4},768:{slidesPerView:3},500:{slidesPerView:2},1:{slidesPerView:1}}});let u=document.getElementById("scene");new(o())(u).limit(!1,0);const v=document.querySelector(".modal-apply"),m=document.querySelector(".modal-close"),p=document.querySelector(".benefits__btn-order"),y=document.querySelector(".header-apply"),b=document.querySelector(".nav-header-apply"),f=document.querySelector(".quality__left-button"),L=document.querySelector(".nav-mobile__menu").querySelectorAll(".no-submenu");function w(){v.classList.add("active"),l.classList.add("active"),document.body.classList.add("noscroll")}function g(){v.classList.remove("active"),l.classList.remove("active"),document.body.classList.remove("noscroll")}p.addEventListener("click",w),f.addEventListener("click",w),y.addEventListener("click",w),b.addEventListener("click",(function(){c.classList.remove("active"),v.classList.add("active"),l.classList.add("active"),document.body.classList.add("noscroll")})),L.forEach((e=>e.addEventListener("click",(function(){c.classList.remove("active"),l.classList.remove("active"),document.body.classList.remove("noscroll")})))),m.addEventListener("click",g),l.addEventListener("click",g),$("#apply").validate({rules:{name:{required:!0},phone:{required:!0},address:{required:!0},quantity:{required:!0}},messages:{name:{required:"Введите Ваше имя"},phone:{required:"Введите номер телефона"},address:{required:"Введите адрес доставки"},quantity:{required:"Введите количество"}},submitHandler:function(e){!function(){let e=$("#apply").serialize();console.log(e),$.ajax({type:"POST",url:"php/mail.php",data:e})}(),e.reset()}})}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.m=t,e=[],i.O=(t,r,o,s)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,o,s]=e[d],l=!0,a=0;a<r.length;a++)(!1&s||n>=s)&&Object.keys(i.O).every((e=>i.O[e](r[a])))?r.splice(a--,1):(l=!1,s<n&&(n=s));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,o,s]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var o,s,[n,l,a]=r,c=0;if(n.some((t=>0!==e[t]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(a)var d=a(i)}for(t&&t(r);c<n.length;c++)s=n[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},r=self.webpackChunkmeatball=self.webpackChunkmeatball||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=i.O(void 0,[826],(()=>i(138)));o=i.O(o)})();
//# sourceMappingURL=main.ff7507a5e07746baf24e.js.map