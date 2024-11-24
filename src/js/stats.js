import { GetStats } from './Fortnite-API';
import createResultStats from '../serch-result-stats-overall.hbs';
import createResultName from '../search-result-name.hbs';
import createResultStatsSolo from '../serch-result-stats-solo.hbs';
import createResultStatsDuo from '../serch-result-stats-duo.hbs';
import createResultStatsSquad from '../serch-result-stats-squad.hbs';

const stats = document.querySelector('.search-stats-form');
stats.addEventListener('submit', event => handleSearch(event));
const result = document.querySelector('.search-stats-result');

const FortAPI = new GetStats();

async function handleSearch(event) {
  event.preventDefault();
  const response = await FortAPI.getStats(event.target.name.value.trim());
  result.innerHTML = '';
  console.log(response);
  // if (response.data.status !== 200) {
  //   result.insertAdjacentHTML(
  //     'afterbegin',
  //     "<p class='gamemode-error'>The player was not found</p>"
  //   );
  //   return;
  // }

  result.insertAdjacentHTML('afterbegin', createResultName(response));
  const selectedValue = document.querySelector(
    'input[name="stats-filter"]:checked'
  ).value;
  const plrStats = document.querySelector('.player-stats');
  plrStats.insertAdjacentHTML(
    'beforeend',
    createResultStats(response.data.stats.all[selectedValue])
  );
  plrStats.insertAdjacentHTML(
    'beforeend',
    createTime(response.data.stats.all[selectedValue])
  );
  const radio = document.querySelectorAll('input[name="stats-filter"]');
  radio.forEach(button => {
    button.addEventListener('change', event =>
      handleRadioChange(event, response, plrStats)
    );
  });
}

function handleRadioChange(event, response, plrStats) {
  plrStats.innerHTML = '';

  if (event.target.value === 'overall') {
    plrStats.insertAdjacentHTML(
      'beforeend',
      createResultStats(response.data.stats.all[event.target.value])
    );
    plrStats.insertAdjacentHTML(
      'beforeend',
      createTime(response.data.stats.all[event.target.value])
    );
  } else if (
    event.target.value === 'solo' &&
    response.data.stats.all[event.target.value]
  ) {
    plrStats.insertAdjacentHTML(
      'beforeend',
      createResultStatsSolo(response.data.stats.all[event.target.value])
    );
    plrStats.insertAdjacentHTML(
      'beforeend',
      createTime(response.data.stats.all[event.target.value])
    );
  } else if (event.target.value === 'duo') {
    plrStats.insertAdjacentHTML(
      'beforeend',
      createResultStatsDuo(response.data.stats.all[event.target.value])
    );
    plrStats.insertAdjacentHTML(
      'beforeend',
      createTime(response.data.stats.all[event.target.value])
    );
  } else if (event.target.value === 'squad') {
    plrStats.insertAdjacentHTML(
      'beforeend',
      createResultStatsSquad(response.data.stats.all[event.target.value])
    );
    plrStats.insertAdjacentHTML(
      'beforeend',
      createTime(response.data.stats.all[event.target.value])
    );
  } else {
    plrStats.insertAdjacentHTML(
      'beforeend',
      "<p class='gamemode-error'>The player has not played this game mode </p>"
    );
  }
}

function createTime(response) {
  return `<ul class="search-time-list">
    <li class="search-time-item">
        <p class="row-stats-p">${(response.minutesPlayed / 60).toFixed(0)}h ${
    response.minutesPlayed % 60
  }m</p>
        <span class="row-stats-span">Play time</span>
    </li>
    <li class="search-time-item">
        <p class="row-stats-p">${(
          response.minutesPlayed / response.matches
        ).toFixed(2)}m</p>
        <span class="row-stats-span">avg. Match time</span>
    </li>
</ul>`;
}
