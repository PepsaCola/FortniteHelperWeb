

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
  radio.addEventListener('change', handleFilterChange);
});

// Функція для створення HTML із результату
function createSearchResult(item) {
  const data1 = item.brN != '1' ? item.brN :
      item.insN !='1' ? item.insN :
          item.trN != '1' ? item.trN :
              item.legN != '1' ? item.legN :
                  item.carN
  return `
    <li class="cosmetic-search-result-item" data-alt="${data1}">
      <img class="cosmetic-search-result-img" src="${item.brI || item.insI || item.trI || item.legI || item.carI}" alt="${item.itemID}">
    </li>
  `;
}

// Функція для отримання даних і відображення
async function fetchSearchResults() {
  const divResult = document.querySelector('.cosmetic-search-result-list');
  divResult.innerHTML = ''; // Очищуємо попередні результати

  try {
    const response = await fetch(`http://localhost:3000/api/search-results?filter=${currentFilter}&text=${currentText}`, {});
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
    const response = await fetch(`http://localhost:3000/api/search-more?filter=${currentFilter}&text=${currentText}`);
    const data = await response.json();

    if (data.length === 0) {
      // Якщо більше немає даних, приховуємо кнопку
      btn.style.display = 'none';
      return;
    }

    for (const item of data) {
      divResult.insertAdjacentHTML('beforeend', createSearchResult(item));
    }
  } catch (error) {
    console.error('Error fetching more results:', error);
  }
}

// Викликаємо функцію після завантаження сторінки
fetchSearchResults();
