(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d={key:"44443472-3b41bcc651e7d0b56b1888f38",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12},l=new URLSearchParams(d),u=document.querySelector(".js-search-form"),i=document.querySelector(".gallery");u.addEventListener("submit",f);console.log(i);function f(s){s.preventDefault(),l.set("q","dog"),h(`https://pixabay.com/api/?${l}`).then(e=>{console.log(a(e.hits)),i.insertAdjacentHTML("beforeend",a(e.hits))}).catch(e=>console.log(e))}function h(s){return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function a(s){return console.log(s),s.map(e=>`<li class="card">
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
          </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
