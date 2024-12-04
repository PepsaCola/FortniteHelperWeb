import { GetMap } from './Fortnite-API';
const map = document.querySelector('.map');
const fortAPI = new GetMap();
async function loadMap() {
  try {
    const mapImage = await fortAPI.getMap();
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
    const mapImage = await fortAPI.getMap();

    map.style.backgroundImage = `url(${mapImage.pois})`;
  } catch (error) {
    console.error('Помилка завантаження зображення карти:', error);
  }
}
