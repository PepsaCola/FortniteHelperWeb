function s(s){return s&&s.__esModule?s.default:s}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},n=l.parcelRequire94c2;null==n&&((n=function(s){if(s in a)return a[s].exports;if(s in t){var l=t[s];delete t[s];var n={id:s,exports:{}};return a[s]=n,l.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+s+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(s,l){t[s]=l},l.parcelRequire94c2=n),n.register;var r=n("7APVD"),e=n("ksScb");const o=/*@__PURE__*/s(e).template({compiler:[8,">= 4.3.0"],main:function(s,l,a,t,n){var r,e=null!=l?l:s.nullContext||{},o=s.hooks.helperMissing,i="function",c=s.escapeExpression,p=s.lookupProperty||function(s,l){if(Object.prototype.hasOwnProperty.call(s,l))return s[l]};return"<ul class='stats-list'>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"wins")||(null!=l?p(l,"wins"):l))?r:o)===i?r.call(e,{name:"wins",hash:{},data:n,loc:{start:{line:5,column:31},end:{line:5,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Wins</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"winRate")||(null!=l?p(l,"winRate"):l))?r:o)===i?r.call(e,{name:"winRate",hash:{},data:n,loc:{start:{line:9,column:31},end:{line:9,column:42}}}):r)+"%</p>\r\n        <span class='row-stats-span'>WinRate</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"matches")||(null!=l?p(l,"matches"):l))?r:o)===i?r.call(e,{name:"matches",hash:{},data:n,loc:{start:{line:13,column:31},end:{line:13,column:42}}}):r)+"</p>\r\n        <span class='row-stats-span'>Matches</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top5")||(null!=l?p(l,"top5"):l))?r:o)===i?r.call(e,{name:"top5",hash:{},data:n,loc:{start:{line:21,column:31},end:{line:21,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 5</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top10")||(null!=l?p(l,"top10"):l))?r:o)===i?r.call(e,{name:"top10",hash:{},data:n,loc:{start:{line:25,column:31},end:{line:25,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 10</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top25")||(null!=l?p(l,"top25"):l))?r:o)===i?r.call(e,{name:"top25",hash:{},data:n,loc:{start:{line:29,column:31},end:{line:29,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 25</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kd")||(null!=l?p(l,"kd"):l))?r:o)===i?r.call(e,{name:"kd",hash:{},data:n,loc:{start:{line:37,column:31},end:{line:37,column:37}}}):r)+"</p>\r\n        <span class='row-stats-span'>K/D</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"killsPerMatch")||(null!=l?p(l,"killsPerMatch"):l))?r:o)===i?r.call(e,{name:"killsPerMatch",hash:{},data:n,loc:{start:{line:41,column:31},end:{line:41,column:48}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills/Match</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kills")||(null!=l?p(l,"kills"):l))?r:o)===i?r.call(e,{name:"kills",hash:{},data:n,loc:{start:{line:45,column:31},end:{line:45,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>"},useData:!0});var e=n("ksScb");const i=/*@__PURE__*/s(e).template({compiler:[8,">= 4.3.0"],main:function(s,l,a,t,n){var r,e=s.lambda,o=s.escapeExpression,i=s.lookupProperty||function(s,l){if(Object.prototype.hasOwnProperty.call(s,l))return s[l]};return"<div class='player-name-wrap'>\r\n  <h2 class='player-name'>"+o(e(null!=(r=null!=(r=null!=l?i(l,"data"):l)?i(r,"account"):r)?i(r,"name"):r,l))+"</h2>\r\n  <h3 class='player-level'>Level: "+o(e(null!=(r=null!=(r=null!=l?i(l,"data"):l)?i(r,"battlePass"):r)?i(r,"level"):r,l))+"</h3>\r\n\r\n  <div class='stats-radio-wrap'>\r\n\r\n    <input\r\n      checked\r\n      type='radio'\r\n      name='stats-filter'\r\n      value='overall'\r\n      class='stats-radio-input'\r\n      id='radio-overall'\r\n    />\r\n    <label for='radio-overall' class='stats-radio-label'>all</label>\r\n\r\n    <input\r\n      type='radio'\r\n      name='stats-filter'\r\n      value='solo'\r\n      class='stats-radio-input'\r\n      id='radio-solo'\r\n    />\r\n    <label for='radio-solo' class='stats-radio-label'>solo</label>\r\n\r\n    <input\r\n      type='radio'\r\n      name='stats-filter'\r\n      value='duo'\r\n      class='stats-radio-input'\r\n      id='radio-duo'\r\n    />\r\n    <label for='radio-duo' class='stats-radio-label'>duo</label>\r\n\r\n    <input\r\n      type='radio'\r\n      name='stats-filter'\r\n      value='squad'\r\n      class='stats-radio-input'\r\n      id='radio-squad'\r\n    />\r\n    <label for='radio-squad' class='stats-radio-label'>squad </label>\r\n  </div>\r\n</div>\r\n\r\n<div class='player-stats'>\r\n</div>"},useData:!0});var e=n("ksScb");const c=/*@__PURE__*/s(e).template({compiler:[8,">= 4.3.0"],main:function(s,l,a,t,n){var r,e=null!=l?l:s.nullContext||{},o=s.hooks.helperMissing,i="function",c=s.escapeExpression,p=s.lookupProperty||function(s,l){if(Object.prototype.hasOwnProperty.call(s,l))return s[l]};return"<ul class='stats-list'>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"wins")||(null!=l?p(l,"wins"):l))?r:o)===i?r.call(e,{name:"wins",hash:{},data:n,loc:{start:{line:5,column:31},end:{line:5,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Wins</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"winRate")||(null!=l?p(l,"winRate"):l))?r:o)===i?r.call(e,{name:"winRate",hash:{},data:n,loc:{start:{line:9,column:31},end:{line:9,column:42}}}):r)+"%</p>\r\n        <span class='row-stats-span'>WinRate</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"matches")||(null!=l?p(l,"matches"):l))?r:o)===i?r.call(e,{name:"matches",hash:{},data:n,loc:{start:{line:13,column:31},end:{line:13,column:42}}}):r)+"</p>\r\n        <span class='row-stats-span'>Matches</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top10")||(null!=l?p(l,"top10"):l))?r:o)===i?r.call(e,{name:"top10",hash:{},data:n,loc:{start:{line:22,column:31},end:{line:22,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 10</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top25")||(null!=l?p(l,"top25"):l))?r:o)===i?r.call(e,{name:"top25",hash:{},data:n,loc:{start:{line:26,column:31},end:{line:26,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 25</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kd")||(null!=l?p(l,"kd"):l))?r:o)===i?r.call(e,{name:"kd",hash:{},data:n,loc:{start:{line:34,column:31},end:{line:34,column:37}}}):r)+"</p>\r\n        <span class='row-stats-span'>K/D</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"killsPerMatch")||(null!=l?p(l,"killsPerMatch"):l))?r:o)===i?r.call(e,{name:"killsPerMatch",hash:{},data:n,loc:{start:{line:38,column:31},end:{line:38,column:48}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills/Match</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kills")||(null!=l?p(l,"kills"):l))?r:o)===i?r.call(e,{name:"kills",hash:{},data:n,loc:{start:{line:42,column:31},end:{line:42,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>"},useData:!0});var e=n("ksScb");const p=/*@__PURE__*/s(e).template({compiler:[8,">= 4.3.0"],main:function(s,l,a,t,n){var r,e=null!=l?l:s.nullContext||{},o=s.hooks.helperMissing,i="function",c=s.escapeExpression,p=s.lookupProperty||function(s,l){if(Object.prototype.hasOwnProperty.call(s,l))return s[l]};return"<ul class='stats-list'>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"wins")||(null!=l?p(l,"wins"):l))?r:o)===i?r.call(e,{name:"wins",hash:{},data:n,loc:{start:{line:5,column:31},end:{line:5,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Wins</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"winRate")||(null!=l?p(l,"winRate"):l))?r:o)===i?r.call(e,{name:"winRate",hash:{},data:n,loc:{start:{line:9,column:31},end:{line:9,column:42}}}):r)+"%</p>\r\n        <span class='row-stats-span'>WinRate</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"matches")||(null!=l?p(l,"matches"):l))?r:o)===i?r.call(e,{name:"matches",hash:{},data:n,loc:{start:{line:13,column:31},end:{line:13,column:42}}}):r)+"</p>\r\n        <span class='row-stats-span'>Matches</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top5")||(null!=l?p(l,"top5"):l))?r:o)===i?r.call(e,{name:"top5",hash:{},data:n,loc:{start:{line:21,column:31},end:{line:21,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 5</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top12")||(null!=l?p(l,"top12"):l))?r:o)===i?r.call(e,{name:"top12",hash:{},data:n,loc:{start:{line:25,column:31},end:{line:25,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 12</span>\r\n      </li>\r\n\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kd")||(null!=l?p(l,"kd"):l))?r:o)===i?r.call(e,{name:"kd",hash:{},data:n,loc:{start:{line:34,column:31},end:{line:34,column:37}}}):r)+"</p>\r\n        <span class='row-stats-span'>K/D</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"killsPerMatch")||(null!=l?p(l,"killsPerMatch"):l))?r:o)===i?r.call(e,{name:"killsPerMatch",hash:{},data:n,loc:{start:{line:38,column:31},end:{line:38,column:48}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills/Match</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kills")||(null!=l?p(l,"kills"):l))?r:o)===i?r.call(e,{name:"kills",hash:{},data:n,loc:{start:{line:42,column:31},end:{line:42,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>"},useData:!0});var e=n("ksScb");const u=/*@__PURE__*/s(e).template({compiler:[8,">= 4.3.0"],main:function(s,l,a,t,n){var r,e=null!=l?l:s.nullContext||{},o=s.hooks.helperMissing,i="function",c=s.escapeExpression,p=s.lookupProperty||function(s,l){if(Object.prototype.hasOwnProperty.call(s,l))return s[l]};return"<ul class='stats-list'>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"wins")||(null!=l?p(l,"wins"):l))?r:o)===i?r.call(e,{name:"wins",hash:{},data:n,loc:{start:{line:5,column:31},end:{line:5,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Wins</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"winRate")||(null!=l?p(l,"winRate"):l))?r:o)===i?r.call(e,{name:"winRate",hash:{},data:n,loc:{start:{line:9,column:31},end:{line:9,column:42}}}):r)+"%</p>\r\n        <span class='row-stats-span'>WinRate</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"matches")||(null!=l?p(l,"matches"):l))?r:o)===i?r.call(e,{name:"matches",hash:{},data:n,loc:{start:{line:13,column:31},end:{line:13,column:42}}}):r)+"</p>\r\n        <span class='row-stats-span'>Matches</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top3")||(null!=l?p(l,"top3"):l))?r:o)===i?r.call(e,{name:"top3",hash:{},data:n,loc:{start:{line:21,column:31},end:{line:21,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 3</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"top6")||(null!=l?p(l,"top6"):l))?r:o)===i?r.call(e,{name:"top6",hash:{},data:n,loc:{start:{line:25,column:31},end:{line:25,column:39}}}):r)+"</p>\r\n        <span class='row-stats-span'>Top 6</span>\r\n      </li>\r\n\r\n    </ul>\r\n  </li>\r\n  <li class='stats-item'>\r\n    <ul class='row-stats-list'>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kd")||(null!=l?p(l,"kd"):l))?r:o)===i?r.call(e,{name:"kd",hash:{},data:n,loc:{start:{line:34,column:31},end:{line:34,column:37}}}):r)+"</p>\r\n        <span class='row-stats-span'>K/D</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"killsPerMatch")||(null!=l?p(l,"killsPerMatch"):l))?r:o)===i?r.call(e,{name:"killsPerMatch",hash:{},data:n,loc:{start:{line:38,column:31},end:{line:38,column:48}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills/Match</span>\r\n      </li>\r\n      <li class='row-stats-item'>\r\n        <p class='row-stats-p'>"+c(typeof(r=null!=(r=p(a,"kills")||(null!=l?p(l,"kills"):l))?r:o)===i?r.call(e,{name:"kills",hash:{},data:n,loc:{start:{line:42,column:31},end:{line:42,column:40}}}):r)+"</p>\r\n        <span class='row-stats-span'>Kills</span>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>"},useData:!0});document.querySelector(".search-stats-form").addEventListener("submit",s=>w(s));const m=document.querySelector(".search-stats-result"),d=new r.GetStats;async function w(s){s.preventDefault();let l=await d.getStats(s.target.name.value.trim());m.innerHTML="",console.log(l),m.insertAdjacentHTML("afterbegin",i(l));let a=document.querySelector('input[name="stats-filter"]:checked').value,t=document.querySelector(".player-stats");t.insertAdjacentHTML("beforeend",o(l.data.stats.all[a])),t.insertAdjacentHTML("beforeend",h(l.data.stats.all[a])),document.querySelectorAll('input[name="stats-filter"]').forEach(s=>{s.addEventListener("change",s=>{t.innerHTML="","overall"===s.target.value?(t.insertAdjacentHTML("beforeend",o(l.data.stats.all[s.target.value])),t.insertAdjacentHTML("beforeend",h(l.data.stats.all[s.target.value]))):"solo"===s.target.value&&l.data.stats.all[s.target.value]?(t.insertAdjacentHTML("beforeend",c(l.data.stats.all[s.target.value])),t.insertAdjacentHTML("beforeend",h(l.data.stats.all[s.target.value]))):"duo"===s.target.value?(t.insertAdjacentHTML("beforeend",p(l.data.stats.all[s.target.value])),t.insertAdjacentHTML("beforeend",h(l.data.stats.all[s.target.value]))):"squad"===s.target.value?(t.insertAdjacentHTML("beforeend",u(l.data.stats.all[s.target.value])),t.insertAdjacentHTML("beforeend",h(l.data.stats.all[s.target.value]))):t.insertAdjacentHTML("beforeend","<p class='gamemode-error'>The player has not played this game mode </p>")})})}function h(s){return`<ul class="search-time-list">
    <li class="search-time-item">
        <p class="row-stats-p">${(s.minutesPlayed/60).toFixed(0)}h ${s.minutesPlayed%60}m</p>
        <span class="row-stats-span">Play time</span>
    </li>
    <li class="search-time-item">
        <p class="row-stats-p">${(s.minutesPlayed/s.matches).toFixed(2)}m</p>
        <span class="row-stats-span">avg. Match time</span>
    </li>
</ul>`}
//# sourceMappingURL=stats.5957f09f.js.map
