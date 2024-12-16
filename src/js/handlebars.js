import Handlebars  from 'handlebars'

export const createResultStats = Handlebars.compile(`
  <ul class='stats-list'>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{wins}}</p>
        <span class='row-stats-span'>Wins</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{winRate}}%</p>
        <span class='row-stats-span'>WinRate</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{matches}}</p>
        <span class='row-stats-span'>Matches</span>
      </li>
    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top5}}</p>
        <span class='row-stats-span'>Top 5</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top10}}</p>
        <span class='row-stats-span'>Top 10</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top25}}</p>
        <span class='row-stats-span'>Top 25</span>
      </li>
    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kd}}</p>
        <span class='row-stats-span'>K/D</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{killsPerMatch}}</p>
        <span class='row-stats-span'>Kills/Match</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kills}}</p>
        <span class='row-stats-span'>Kills</span>
      </li>
    </ul>
  </li>
</ul>
`);

export const createResultName = Handlebars.compile(`
<div class='player-name-wrap'>
  <h2 class='player-name'>{{data.account.name}}</h2>
  <h3 class='player-level'>Level: {{data.battlePass.level}}</h3>

  <div class='stats-radio-wrap'>

    <input
      checked
      type='radio'
      name='stats-filter'
      value='overall'
      class='stats-radio-input'
      id='radio-overall'
    />
    <label for='radio-overall' class='stats-radio-label'>all</label>

    <input
      type='radio'
      name='stats-filter'
      value='solo'
      class='stats-radio-input'
      id='radio-solo'
    />
    <label for='radio-solo' class='stats-radio-label'>solo</label>

    <input
      type='radio'
      name='stats-filter'
      value='duo'
      class='stats-radio-input'
      id='radio-duo'
    />
    <label for='radio-duo' class='stats-radio-label'>duo</label>

    <input
      type='radio'
      name='stats-filter'
      value='squad'
      class='stats-radio-input'
      id='radio-squad'
    />
    <label for='radio-squad' class='stats-radio-label'>squad </label>
  </div>
</div>

<div class='player-stats'>
</div>`)

export const createResultStatsSolo = Handlebars.compile(`<ul class='stats-list'>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{wins}}</p>
        <span class='row-stats-span'>Wins</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{winRate}}%</p>
        <span class='row-stats-span'>WinRate</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{matches}}</p>
        <span class='row-stats-span'>Matches</span>
      </li>
    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>

      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top10}}</p>
        <span class='row-stats-span'>Top 10</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top25}}</p>
        <span class='row-stats-span'>Top 25</span>
      </li>
    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kd}}</p>
        <span class='row-stats-span'>K/D</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{killsPerMatch}}</p>
        <span class='row-stats-span'>Kills/Match</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kills}}</p>
        <span class='row-stats-span'>Kills</span>
      </li>
    </ul>
  </li>
</ul>`)

export const createResultStatsDuo = Handlebars.compile(`<ul class='stats-list'>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{wins}}</p>
        <span class='row-stats-span'>Wins</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{winRate}}%</p>
        <span class='row-stats-span'>WinRate</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{matches}}</p>
        <span class='row-stats-span'>Matches</span>
      </li>
    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top5}}</p>
        <span class='row-stats-span'>Top 5</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top12}}</p>
        <span class='row-stats-span'>Top 12</span>
      </li>

    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kd}}</p>
        <span class='row-stats-span'>K/D</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{killsPerMatch}}</p>
        <span class='row-stats-span'>Kills/Match</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kills}}</p>
        <span class='row-stats-span'>Kills</span>
      </li>
    </ul>
  </li>
</ul>`)

export const createResultStatsSquad  = Handlebars.compile(`<ul class='stats-list'>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{wins}}</p>
        <span class='row-stats-span'>Wins</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{winRate}}%</p>
        <span class='row-stats-span'>WinRate</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{matches}}</p>
        <span class='row-stats-span'>Matches</span>
      </li>
    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top3}}</p>
        <span class='row-stats-span'>Top 3</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{top6}}</p>
        <span class='row-stats-span'>Top 6</span>
      </li>

    </ul>
  </li>
  <li class='stats-item'>
    <ul class='row-stats-list'>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kd}}</p>
        <span class='row-stats-span'>K/D</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{killsPerMatch}}</p>
        <span class='row-stats-span'>Kills/Match</span>
      </li>
      <li class='row-stats-item'>
        <p class='row-stats-p'>{{kills}}</p>
        <span class='row-stats-span'>Kills</span>
      </li>
    </ul>
  </li>
</ul>`)