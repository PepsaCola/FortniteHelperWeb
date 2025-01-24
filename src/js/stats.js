import{createResultStats,createResultName,createResultStatsSolo,createResultStatsDuo,createResultStatsSquad}  from './handlebars.js';

const stats = document.querySelector('.search-stats-form');
stats.addEventListener('submit', event => handleSearch(event));
const result = document.querySelector('.search-stats-result');

async function handleSearch(event) {
  event.preventDefault();
  try {
    const res = await fetch(`http://localhost:3000/api/get-stats?text=${event.target.name.value.trim()}`, {});
    const response = await res.json();
    result.innerHTML = '';
    console.log(response);

    if(response.status === 404) {
      result.insertAdjacentHTML(
          'afterbegin',
          "<p class='gamemode-error'>The player was not found</p>"
      );
      return;
    }

    result.insertAdjacentHTML('afterbegin', createResultName(response));
    console.log(response);
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
  catch (error) {

    console.error('Error fetching player stats:', error.message);
    result.innerHTML = `<p class='gamemode-error'>An error occurred while fetching stats. Please try again later.</p>`;
  }

}

function handleRadioChange(event, response, plrStats) {
  const selectedValue = event.target.value;
  plrStats.innerHTML = '';
  insertStats(selectedValue, response, plrStats);
}

function insertStats(selectedValue, response, plrStats) {
  const statsData = response.data.stats.all[selectedValue];
  if (!statsData) {
    plrStats.insertAdjacentHTML(
        'beforeend',
        "<p class='gamemode-error'>The player has not played this game mode</p>"
    );
    return;
  }

  switch (selectedValue) {
    case 'overall':
      plrStats.insertAdjacentHTML('beforeend', createResultStats(statsData));
      break;
    case 'solo':
      plrStats.insertAdjacentHTML('beforeend', createResultStatsSolo(statsData));
      break;
    case 'duo':
      plrStats.insertAdjacentHTML('beforeend', createResultStatsDuo(statsData));
      break;
    case 'squad':
      plrStats.insertAdjacentHTML('beforeend', createResultStatsSquad(statsData));
      break;
    default:
      plrStats.insertAdjacentHTML(
          'beforeend',
          "<p class='gamemode-error'>Invalid game mode selected</p>"
      );
  }

  // Add time stats
  plrStats.insertAdjacentHTML('beforeend', createTime(statsData));
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
