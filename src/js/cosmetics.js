// Функція для створення HTML із результату (приклад шаблону)
function createSearchResult(item) {
  return `
    <div class="result-item">
      <img src="${item.brI || item.insI || item.trI || item.legI || item.carI}" alt="${item.itemID}">
    </div>
  `;
}

// Функція для отримання даних і відображення
async function fetchSearchResults() {
  const divResult = document.querySelector('.cosmetic-search-result');
  divResult.innerHTML = ''; // Очищуємо попередні результати

  try {
    const response = await fetch('http://localhost:3000/api/search-results');
    const data = await response.json();

    for (const item of data) {
      divResult.insertAdjacentHTML('beforeend', createSearchResult(item));
    }
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}

// Викликаємо функцію після завантаження сторінки
fetchSearchResults()
