(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}})();const g=async()=>{const e=document.querySelectorAll("[data-include-path]");console.log("로딩"),await Promise.all([...e].map(async i=>{const o=i.dataset.includePath;try{const n=await(await fetch(o)).text(),t=document.createElement("div");t.innerHTML=n,i.outerHTML=t.innerHTML}catch(s){console.error(`Failed to load ${o}:`,s)}}))},E=e=>{const i=document.querySelectorAll('.form-element__inner input[type="text"]'),o=document.querySelector(".autocomplate__wrap");i.forEach(t=>{if(t.value!==""){const c=t.nextElementSibling;c&&c.classList.contains("btn-remove")&&c.classList.add("is-show")}});const s=t=>{const c=t.target.nextElementSibling;c&&c.classList.contains("btn-remove")&&c.classList.add("is-show"),t.target.value===""&&c.classList.remove("is-show"),o&&(o.style.display="block")},n=t=>{const c=t.target.closest(".form-element__inner").querySelector('input[type="text"]');c.value="",t.target.classList.remove("is-show"),o&&(o.style.display="none")};i.forEach(t=>{t.addEventListener("keyup",s);const c=t.nextElementSibling;c&&c.classList.contains("btn-remove")&&c.addEventListener("click",n)})},q=e=>{const i=document.querySelectorAll(e);i.forEach(o=>{const s=o.querySelector(".btn-dropdown"),n=f(s);s.addEventListener("click",c=>{c.stopPropagation();const l=s.classList.toggle("is-active");n.classList.toggle("is-active",l)}),o.querySelectorAll(".dropdown_list li button, .dropdown_list li a").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-option");s.textContent=l,o.querySelectorAll(".dropdown_list li").forEach(a=>{a.classList.remove("is-active")}),c.parentElement.classList.add("is-active"),s.classList.remove("is-active"),n.classList.remove("is-active")})})}),document.addEventListener("click",function(o){i.forEach(s=>{const n=s.querySelector(".btn-dropdown"),t=f(n);!s.contains(o.target)&&!o.target.closest(".btn-dropdown")&&(n.classList.remove("is-active"),t.classList.remove("is-active"))})})},p=e=>{if(e=document.getElementById(e),e.style.display="block",e.classList.contains("type-bottom")){const i=e.querySelector(".modal-header")?e.querySelector(".modal-header").offsetHeight:0,o=e.querySelector(".modal-footer")?e.querySelector(".modal-footer").offsetHeight:0;let s=i+o+50;e.querySelector(".modal-cont").style=`--modal-cont-height:${s}px`}setTimeout(()=>{e.classList.add("is-active"),document.body.classList.add("modal-open")},300)};window.setModal=p;const L=(e,i)=>{const s=e.currentTarget.getAttribute("modal-id");document.getElementById(s)&&p(s)};window.openModal=L;document.addEventListener("click",function(e){console.log(e.target),e.target.classList.contains("modal__wrap--bg")&&(setTimeout(()=>{e.target.classList.remove("is-active"),document.body.classList.remove("modal-open")},300),e.target.style.display="none")});const h=(e,i)=>{const s=e.currentTarget.closest(".modal__wrap--bg");s&&(s.classList.remove("is-active"),document.body.classList.remove("modal-open"),setTimeout(()=>{s.style.display="none"},300))};window.closeModal=h;document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".modal__wrap--bg.is-active");e.length>0&&e.forEach(i=>{i.classList.contains("type-full")&&i.style.display==="block"?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")})});const m=(e,i,o)=>{o!=="remove"?e.classList.add(i):e.classList.remove(i)},f=e=>!e||!e.parentElement?null:e.nextElementSibling,w=(e,i)=>{document.querySelectorAll(e).forEach(o=>{const s=o.querySelectorAll(".tab__menu li a"),n=o.querySelectorAll(".tab__content");if(!(!s.length||!n.length)&&s.length===n.length){if(o.classList.contains("align-center")){let t=s.length;o.style.setProperty("--tab-count",t)}s.forEach((t,c)=>{t.addEventListener("click",l=>{var a,r,d;l.preventDefault(),(a=o.querySelector(".tab__menu li.is-active"))==null||a.classList.remove("is-active"),t.parentElement.classList.add("is-active"),(r=o.querySelector(".tab__content.is-active"))==null||r.classList.remove("is-active"),(d=n[c])==null||d.classList.add("is-active")},{once:!1})})}})},x=e=>{if(!e)return;document.querySelectorAll(e).forEach(o=>{o.querySelectorAll(".accordion-title button").forEach(n=>{n.addEventListener("click",()=>{const t=n.closest("li"),c=o.querySelector("li.is-active");c&&c!==t&&c.classList.remove("is-active"),t.classList.toggle("is-active")})})})};async function b(){try{const i=await(await fetch("/ia.json")).json();document.title=i.siteName;const o=document.querySelector("#siteTitle"),s=document.querySelector(".sub-text");o&&(o.textContent=i.siteName);const t=window.location.pathname.split("/").pop()||"index.html",c=document.querySelector("#pagesTitle"),l=document.querySelector(".visual-text .sub-text"),a=document.querySelector(".visual-text .font-head-xl");if(c){let r=null,d=null;i.IaList.some(y=>{const u=y.Level2.find(v=>v.fileName.includes(t));return u?(r=u.name,d=u.subText,!0):!1}),r?(console.log("ddd",r),c.textContent=r,a&&(l.textContent=d||"기본 서브 텍스트",a.textContent=r)):(c.textContent="json 파일에 추가해주세요",a&&(l.textContent="기본 서브 텍스트",a.textContent="기본 제목"))}return i}catch(e){return console.error("Error loading IA data:",e),null}}const S=e=>{const i=document.querySelectorAll(e),s=window.location.href.match(/\/([^\/]+\.html)$/),n=s?s[1]:null;n&&i.forEach(t=>{const l=t.href.match(/\/([^\/]+\.html)$/),a=l?l[1]:null;n===a&&t.parentNode.classList.add("is-active")})};document.addEventListener("DOMContentLoaded",async()=>{await g(),await b();const e=document.querySelector(".guide-header__wrap .navi"),i=e.querySelector("button");i&&i.addEventListener("click",()=>{e.classList.contains("open")?m(e,"open","remove"):m(e,"open")});const o=document.querySelector(".lnb-side__wrap .lnb-trigger");o&&o.addEventListener("click",()=>{o.classList.toggle("is-active"),document.querySelector(".lnb_list").classList.toggle("is-active")}),S(".lnb-side__wrap li a");const s=document.querySelector(".lnb-side__wrap > ul li.is-active");if(s){const n=s.innerText;o.innerText=n}});export{x as a,E as c,q as d,w as t};
