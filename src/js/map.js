
const map = document.querySelector('.map');

async function loadMap() {
  try {
    const response = await fetch(`http://localhost:3000/api/get-map`, {});
    const mapImage = await response.json();
    console.log(mapImage.blank);

    map.style.backgroundImage = `url(${mapImage.blank})`;
  } catch (error) {
    console.error('Помилка завантаження зображення карти:', error);
  }
}
loadMap();

const input = document.querySelector('.checkbox');
input.addEventListener('change', poisMap);
let a = 0;
async function poisMap() {
  a++;
  if (a === 2) {
    loadMap();
    a = 0;
    return;
  }
  try {
    const response = await fetch(`http://localhost:3000/api/get-map`, {});
    const mapImage = await response.json();

    map.style.backgroundImage = `url(${mapImage.pois})`;
  } catch (error) {
    console.error('Помилка завантаження зображення карти:', error);
  }
}
