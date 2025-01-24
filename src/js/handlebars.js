export const createResultStats = (data) => {
    return `
    <ul class='stats-list'>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.wins}</p>
            <span class='row-stats-span'>Wins</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.winRate}%</p>
            <span class='row-stats-span'>WinRate</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.matches}</p>
            <span class='row-stats-span'>Matches</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top5}</p>
            <span class='row-stats-span'>Top 5</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top10}</p>
            <span class='row-stats-span'>Top 10</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top25}</p>
            <span class='row-stats-span'>Top 25</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kd}</p>
            <span class='row-stats-span'>K/D</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.killsPerMatch}</p>
            <span class='row-stats-span'>Kills/Match</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kills}</p>
            <span class='row-stats-span'>Kills</span>
          </li>
        </ul>
      </li>
    </ul>
  `;
};

export const createResultName = ({ data }) => {
    return `
    <div class='player-name-wrap'>
      <h2 class='player-name'>${data.account.name}</h2>
      <h3 class='player-level'>Level: ${data.battlePass.level}</h3>
    
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
        <label for='radio-squad' class='stats-radio-label'>squad</label>
      </div>
    </div>
    
    <div class='player-stats'>
    </div>
  `;
};

export const createResultStatsSolo = (data) => {
    return `
    <ul class='stats-list'>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.wins}</p>
            <span class='row-stats-span'>Wins</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.winRate}%</p>
            <span class='row-stats-span'>WinRate</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.matches}</p>
            <span class='row-stats-span'>Matches</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top10}</p>
            <span class='row-stats-span'>Top 10</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top25}</p>
            <span class='row-stats-span'>Top 25</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kd}</p>
            <span class='row-stats-span'>K/D</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.killsPerMatch}</p>
            <span class='row-stats-span'>Kills/Match</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kills}</p>
            <span class='row-stats-span'>Kills</span>
          </li>
        </ul>
      </li>
    </ul>
  `;
};

export const createResultStatsDuo = (data) => {
    return `
    <ul class='stats-list'>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.wins}</p>
            <span class='row-stats-span'>Wins</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.winRate}%</p>
            <span class='row-stats-span'>WinRate</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.matches}</p>
            <span class='row-stats-span'>Matches</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top5}</p>
            <span class='row-stats-span'>Top 5</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top12}</p>
            <span class='row-stats-span'>Top 12</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kd}</p>
            <span class='row-stats-span'>K/D</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.killsPerMatch}</p>
            <span class='row-stats-span'>Kills/Match</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kills}</p>
            <span class='row-stats-span'>Kills</span>
          </li>
        </ul>
      </li>
    </ul>
  `;
};

export const createResultStatsSquad = (data) => {
    return `
    <ul class='stats-list'>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.wins}</p>
            <span class='row-stats-span'>Wins</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.winRate}%</p>
            <span class='row-stats-span'>WinRate</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.matches}</p>
            <span class='row-stats-span'>Matches</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top3}</p>
            <span class='row-stats-span'>Top 3</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.top6}</p>
            <span class='row-stats-span'>Top 6</span>
          </li>
        </ul>
      </li>
      <li class='stats-item'>
        <ul class='row-stats-list'>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kd}</p>
            <span class='row-stats-span'>K/D</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.killsPerMatch}</p>
            <span class='row-stats-span'>Kills/Match</span>
          </li>
          <li class='row-stats-item'>
            <p class='row-stats-p'>${data.kills}</p>
            <span class='row-stats-span'>Kills</span>
          </li>
        </ul>
      </li>
    </ul>
  `;
};
