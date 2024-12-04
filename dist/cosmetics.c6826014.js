!async function(){let e=document.querySelector(".cosmetic-search-result");e.innerHTML="";try{let t=await fetch("http://localhost:3000/api/search-results");for(let r of(await t.json()))e.insertAdjacentHTML("beforeend",`
    <div class="result-item">
      <img src="${r.brI}" alt="BR Image">
      <img src="${r.insI}" alt="Instrument Image">
      <img src="${r.trI}" alt="Track Image">
      <img src="${r.legI}" alt="Lego Image">
      <img src="${r.carI}" alt="Car Image">
      <p>Item ID: ${r.itemID}</p>
    </div>
  `)}catch(e){console.error("Error fetching search results:",e)}}();
//# sourceMappingURL=cosmetics.c6826014.js.map
