(()=>{"use strict";var e,t={138:(e,t,r)=>{r(169);var o=r(411),n=r.n(o),s=r(51);function i(e){e.stopPropagation();const t=e.target.closest(".menu-item").querySelector("ul.sub-menu");t&&(e.target.closest(".menu-item").classList.toggle("active"),t.classList.toggle("active"))}document.querySelectorAll(".menu-item").forEach((e=>{e.addEventListener("click",i)}));const l=document.getElementById("overlay"),c=document.querySelector(".navbar__toggle"),a=document.getElementById("nav-mobile"),d=document.querySelector(".nav-mobile__close");c.addEventListener("click",(function(){a.classList.add("active"),l.classList.add("active"),document.body.classList.add("noscroll")})),d.addEventListener("click",(function(){a.classList.remove("active"),l.classList.remove("active"),document.body.classList.remove("noscroll")})),new s.ZP(".swiper",{modules:[s.W_],direction:"horizontal",slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:3},992:{slidesPerView:3},487:{slidesPerView:3},1:{slidesPerView:1}}}),new s.ZP(".swiper-product",{modules:[s.W_],direction:"horizontal",slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:4},768:{slidesPerView:3},500:{slidesPerView:2},1:{slidesPerView:1}}});let u=document.getElementById("scene");new(n())(u).limit(!1,0);const m=document.querySelector(".modal-apply"),v=document.querySelector(".modal-close"),p=(document.querySelector(".benefits__btn-order"),document.querySelector(".header-apply"),document.querySelector(".nav-header-apply")),y=(document.querySelector(".quality__left-button"),document.querySelector(".nav-mobile__menu").querySelectorAll(".no-submenu"));function b(){m.classList.remove("active"),l.classList.remove("active"),document.body.classList.remove("noscroll")}p.addEventListener("click",(function(){a.classList.remove("active"),m.classList.add("active"),l.classList.add("active"),document.body.classList.add("noscroll")})),y.forEach((e=>e.addEventListener("click",(function(){a.classList.remove("active"),l.classList.remove("active"),document.body.classList.remove("noscroll")})))),v.addEventListener("click",b),l.addEventListener("click",b),document.querySelectorAll(".product-item"),document.querySelectorAll(".product__button").forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const r=e.closest(".product-item").querySelector(".quantity").textContent;console.log(r);let o=`1 cтейк/${r}`;o="300гр"!==r&&"100гр"!==r?`1 заказ/от ${r}`:`1 cтейк/${r}`,m.querySelector("#steak").value=e.closest(".product-item").querySelector(".name").textContent,m.querySelector(".steak-quantity").textContent=`Cколько стейков (${o})`,m.querySelector("#quantity").value=1,m.classList.add("active"),l.classList.add("active"),document.body.classList.add("noscroll")}))})),$("#apply").validate({rules:{name:{required:!0},phone:{required:!0},address:{required:!0},quantity:{required:!0}},messages:{name:{required:"Введите Ваше имя"},phone:{required:"Введите номер телефона"},address:{required:"Введите адрес доставки"},quantity:{required:"Введите количество"}},submitHandler:function(e){!function(){let e=$("#apply").serialize();console.log(e),$.ajax({type:"POST",url:"src/php/mail.php",data:e})}(),$("#answer").html(html),e.reset()}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,n,s]=e[d],l=!0,c=0;c<r.length;c++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,s<i&&(i=s));if(l){e.splice(d--,1);var a=n();void 0!==a&&(t=a)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[i,l,c]=r,a=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var d=c(o)}for(t&&t(r);a<i.length;a++)s=i[a],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self.webpackChunkmeatball=self.webpackChunkmeatball||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[826],(()=>o(138)));n=o.O(n)})();
//# sourceMappingURL=main.8bf9dd900c943ff699aa.js.map