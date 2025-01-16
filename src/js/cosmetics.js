
let currentText = ''
const inputText = document.querySelector('input[name="filter-text"]');
inputText.addEventListener('change', handleTextChange);


function handleTextChange(event) {
  currentText = event.target.value;
  fetchSearchResults();
}


// Глобальна змінна для збереження поточного фільтра
let currentFilter = 'all';


// Функція для обробки змін у виборі радіокнопок
function handleFilterChange(event) {
  currentFilter = event.target.value; // Оновлюємо поточний фільтр
  console.log('Selected filter:', currentFilter);

  // Викликаємо функцію для завантаження результатів із новим фільтром
  fetchSearchResults();
}


// Додаємо слухачі подій до всіх радіокнопок
document.querySelectorAll('input[name="filter-game"]').forEach((radio) => {
  radio.addEventListener('input', handleFilterChange);
});


// Функція для створення HTML із результату
function createSearchResult(item) {

if(item.brID != '1'){
  return `
    <li class="cosmetic-search-result-item" data-id="${item.brID}" data-name="${item.brN}" data-description="${item.brDes}" data-image="${item.brI}" data-chapter="${item.brChap}" data-season="${item.brSeason}" data-rarity="${item.brRarity}" data-type="${item.bType}">
      <img class="cosmetic-search-result-img" src="${item.brI}" alt="${item.brID}">
    </li>
  `;
}
if(item.tID != '1'){

    return `
    <li class="cosmetic-search-result-item" data-id="${item.tID}" data-name="${item.trN}" data-image="${item.trI}" data-artist="${item.tArtist}" data-release="${item.tReleaseYear}" data-duration="${item.tDuration} ">
      <img class="cosmetic-search-result-img" src="${item.trI}" alt="${item.tID}">
    </li>
  `;
}
if(item.insID !='1')
  return `
    <li class="cosmetic-search-result-item" data-id="${item.insID}" data-name="${item.insN}" data-description="${item.insDes}" data-image="${item.insI}" data-rarity="${item.insRarity}" data-type="${item.insType}">
      <img class="cosmetic-search-result-img" src="${item.insI}" alt="${item.insID}">
    </li>
  `;
if(item.carID !='1'){
  return `
    <li class="cosmetic-search-result-item" data-id="${item.carID}" data-name="${item.carN}" data-description="${item.carDes}" data-image="${item.carI}" >
      <img class="cosmetic-search-result-img" src="${item.carI}" alt="${item.carID}">
    </li>
  `;
}
  return `
    <li class="cosmetic-search-result-item" data-id="${item.legID}" data-name="${item.legN}"  data-image="${item.legI}" >
      <img class="cosmetic-search-result-img" src="${item.legI}" alt="${item.legID}">
    </li>
  `;

}


// Функція для отримання даних і відображення
async function fetchSearchResults() {
  const divResult = document.querySelector('.cosmetic-search-result-list');
  divResult.innerHTML = ''; // Очищуємо попередні результати

  try {
    const response = await fetch(`http://91.18.238.159:3000/api/search-results?filter=${currentFilter}&text=${currentText}`, {});
    const data = await response.json();



    for (const item of data) {
      divResult.insertAdjacentHTML('beforeend', createSearchResult(item));

    }

    // Перевіряємо, чи вже існує кнопка "Load more"
    const existingButton = document.querySelector('.cosmetic-search-result-btn');
    if (existingButton) {
      existingButton.remove(); // Видаляємо попередню кнопку
    }

    // Додаємо кнопку "Load more"
    divResult.insertAdjacentHTML('afterend', `
      <button type="button" class="cosmetic-search-result-btn cosmetics-btn">Load more</button>
    `);

    // Додаємо слухача на кнопку
    const btn = document.querySelector('.cosmetic-search-result-btn');
    if (data.length < 56) {
      // Якщо більше немає даних, приховуємо кнопку
      btn.style.display = 'none';
      return;
    }
    btn.addEventListener('click', fetchLoadMore);
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}


// Функція для завантаження додаткових даних
async function fetchLoadMore() {
  const divResult = document.querySelector('.cosmetic-search-result-list');
  const btn = document.querySelector('.cosmetic-search-result-btn');

  try {
    // Передаємо поточний фільтр у запит
    const response = await fetch(`http://91.18.238.159:3000/api/search-more?filter=${currentFilter}&text=${currentText}`);
    const data = await response.json();



    for (const item of data) {
      divResult.insertAdjacentHTML('beforeend', createSearchResult(item));
    }
    if (data.length < 56) {
      // Якщо більше немає даних, приховуємо кнопку
      btn.style.display = 'none';

    }
  } catch (error) {
    console.error('Error fetching more results:', error);
  }
}

// Викликаємо функцію після завантаження сторінки
fetchSearchResults();
