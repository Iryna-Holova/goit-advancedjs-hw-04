import{i as l,a as h,S as y}from"./assets/vendor-5f0e12e0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m=t=>t.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:o,comments:a,downloads:g})=>`
      <a href="${s}" class="photo-card" data-caption="${i}">
        <img class="photo" src="${r}" alt="${i}" loading="lazy" />
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
            <p>${g}</p>
          </div>
        </div>
      </a>
      `).join("");l.settings({zindex:999,timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX"});function u(t){l.show({backgroundColor:"#E38359",message:t})}function b(t){l.show({backgroundColor:"#E1CB10",message:t})}function v(t){l.show({backgroundColor:"#87D662",message:t})}const w="27839370-99dd6ddd44ecd058cc6f2562b",f="https://pixabay.com/api/";h.defaults.baseURL=f;class L{constructor(){this.apiKey=w,this.baseURL=f,this.searchQuery="",this.page=1}async fetchPictures(){const{data:r}=await h.get(this.baseURL,{params:{key:this.apiKey,q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:this.page}});return this.incrementPage(),{...r,page:this.page}}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(r){this.searchQuery=r}}const n={search:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")};n.search.addEventListener("submit",q);const P={root:null,rootMargin:"300px",threshold:1},d=new IntersectionObserver(I,P),S=new y(".gallery a",{captionSelector:"self",captionsData:"data-caption"}),c=new L;async function q(t){t.preventDefault();const r=t.target.elements.searchQuery.value.trim();if(r){n.gallery.innerHTML="",c.query=r,c.resetPage(),d.unobserve(n.guard);try{const{hits:s,totalHits:i}=await c.fetchPictures();i?(p(s),v(`Hooray! We found ${i} images.`),i>40&&setTimeout(()=>{d.observe(n.guard)},1e3)):u("Sorry, there are no images matching your search query. Please try again.")}catch(s){console.log(s),u("Something went wrong :(")}}}async function I(t){var r;if(((r=t[0])==null?void 0:r.isIntersecting)??!1)try{const{hits:s,totalHits:i,page:e}=await c.fetchPictures();p(s),e>Math.ceil(i/40)&&(b("We're sorry, but you've reached the end of search results."),d.unobserve(n.guard))}catch(s){console.log(s),u("Something went wrong :(")}}function p(t){n.gallery.insertAdjacentHTML("beforeend",m(t)),S.refresh()}
//# sourceMappingURL=commonHelpers.js.map
