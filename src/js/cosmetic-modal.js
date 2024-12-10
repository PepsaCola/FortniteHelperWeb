const modal = document.querySelector('.cosmetic-modal');
const close = document.querySelector('.modal-close');

document.querySelector('.cosmetic-search-result-list').addEventListener('click', (event) => {
    const item = event.target.closest('.cosmetic-search-result-item');
    if (item) {
        const itemName = item.getAttribute('data-name');
        let itemDescription = item.getAttribute('data-description');
        const itemImage = item.getAttribute('data-image');
        document.querySelector('.modal-text').innerHTML = ''


        document.querySelector('.modal-title').textContent = itemName;
        document.querySelector('.modal-img').src = itemImage;
        if (itemDescription!=null) {
            document.querySelector('.modal-text').textContent = itemDescription;

        }
        else if(item.getAttribute('data-artist') != null) {
            document.querySelector('.modal-text').innerHTML = `
        Artist: ${item.getAttribute('data-artist')}<br>
        Release: ${item.getAttribute('data-release')}<br>
        Duration: ${Math.floor(Number(item.getAttribute('data-duration')/60))} m ${Number(item.getAttribute('data-duration')%60)} s
    `;
        } else {
            document.querySelector('.modal-text').textContent = '';
        }
        if(item.getAttribute('data-chapter') != null) {

            document.querySelector('.modal-text').innerHTML = `
            ${itemDescription}<br>
            Chapter: ${item.getAttribute('data-chapter')}
            ${item.getAttribute('data-season')!='null'?`<br>Season: ${item.getAttribute('data-season')}`:''}
    `;

        }

        document.querySelector('.cosmetic-modal').style.display = 'block';
    }
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
