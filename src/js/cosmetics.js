// Функція для створення HTML із результату (приклад шаблону)
function createSearchResult(item) {
  return `
    <li class="cosmetic-search-result-item">
      <img class="cosmetic-search-result-img" src="${item.brI || item.insI || item.trI || item.legI || item.carI}" alt="${item.itemID}">
    </li>
  `;
}

// Функція для отримання даних і відображення
async function fetchSearchResults() {
  const divResult = document.querySelector('.cosmetic-search-result-list');
  divResult.innerHTML = ''; // Очищуємо попередні результати

  try {
    const response = await fetch('http://localhost:3000/api/search-results');
    const data = await response.json();

    for (const item of data) {
      divResult.insertAdjacentHTML('beforeend', createSearchResult(item));
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

async function fetchLoadMore() {
  const divResult = document.querySelector('.cosmetic-search-result-list');

  try {
    const response = await fetch('http://localhost:3000/api/search-more'); // Змінено на правильний API
    const data = await response.json();

    for (const item of data) {
      divResult.insertAdjacentHTML('beforeend', createSearchResult(item));
    }
  } catch (error) {
    console.error('Error fetching more results:', error);
  }
}

// Викликаємо функцію після завантаження сторінки
fetchSearchResults();
