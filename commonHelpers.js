import{S as n}from"./assets/vendor-CgTBfC_f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const o={searchButton:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery")};function u(s){return s.map(e=>`<li class="card">
            <a href="${e.largeImageURL}" class="big gallery-link">
              <img
                src="${e.previewURL}"
                alt="${e.tags}"
                title="${e.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${e.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${e.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${e.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${e.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}const d={key:"44443472-3b41bcc651e7d0b56b1888f38",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};function f(s){return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}o.searchButton.addEventListener("submit",h);function h(s){s.preventDefault();const e=s.target.searchtext.value,c=new URLSearchParams(d);c.set("q",e),o.gallery.innerHTML="",f(`https://pixabay.com/api/?${c}`).then(a=>{o.gallery.insertAdjacentHTML("beforeend",u(a.hits)),i.refresh()}).catch(a=>console.log(a))}const i=new n(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});i.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
