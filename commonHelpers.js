import{a as l,i as f,S as m}from"./assets/vendor-4fb3e0b3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const y="27839370-99dd6ddd44ecd058cc6f2562b",v="https://pixabay.com/api/";l.defaults.baseURL=v;class b{constructor(){this.searchQuery="",this.page=1}async fetchPictures(){l.defaults.params={key:y,q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:this.page};const{data:r}=await l.get();return this.incrementPage(),{...r,page:this.page}}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(r){this.searchQuery=r}}const w=t=>t.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:o,comments:a,downloads:p})=>`
      <a href="${i}" class="photo-card" data-caption="${s}">
        <img class="photo" src="${r}" alt="${s}" loading="lazy" />
        <div class="info">
          <div class="info-item">
            <p class="info-title">Likes</p>
            <p>${e}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Views</p>
            <p>${o}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Comments</p>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Downloads</p>
            <p>${p}</p>
          </div>
        </div>
      </a>
      `).join("");f.settings({zindex:999,timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX"});function u(t){f.show({backgroundColor:"#E38359",message:t})}function g(t){f.show({backgroundColor:"#87D662",message:t})}const c=new b,n={search:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")};n.search.addEventListener("submit",S);const L={root:null,rootMargin:"300px",threshold:1},d=new IntersectionObserver($,L),P=new m(".gallery a",{});async function S(t){t.preventDefault();const r=t.target.elements.searchQuery.value.trim();if(r){n.gallery.innerHTML="",c.query=r,c.resetPage(),d.unobserve(n.guard);try{const{hits:i,totalHits:s}=await c.fetchPictures();s?(h(i),g(`Hooray! We found ${s} images.`),s>40&&setTimeout(()=>{d.observe(n.guard)},1e3)):u("Sorry, there are no images matching your search query. Please try again.")}catch(i){console.log(i),u("Something went wrong :(")}}}async function $(t){var r;if(((r=t[0])==null?void 0:r.isIntersecting)??!1){console.log(t[0]);try{const{hits:i,totalHits:s,page:e}=await c.fetchPictures();h(i),g(`Hooray! We found ${s} images.`),e>Math.ceil(s/40)&&d.unobserve(n.guard)}catch(i){console.log(i),u("Something went wrong :(")}}}function h(t){n.gallery.insertAdjacentHTML("beforeend",w(t)),P.refresh()}
//# sourceMappingURL=commonHelpers.js.map
