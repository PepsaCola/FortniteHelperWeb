!async function(){let e=document.querySelector(".cosmetic-search-result");e.innerHTML="";try{let t=await fetch("http://localhost:3000/api/search-results");for(let r of(await t.json()))e.insertAdjacentHTML("beforeend",`
    <div class="result-item">
      <img src="${r.brI||r.insI||r.trI||r.legI||r.carI}" alt="${r.itemID}">
    </div>
  `)}catch(e){console.error("Error fetching search results:",e)}}();
//# sourceMappingURL=cosmetics.4b7fb263.js.map
