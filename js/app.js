baguetteBox.run('.photo-gallery');

const searchField = document.querySelector('#search');
const cards = document.getElementsByTagName('a');

function handleSearchOnKeyUp() {
  searchField.addEventListener('keyup', () => {
    for (let i = 0; i < cards.length; i++) {
      const cardCaption = cards[i].getAttribute('data-caption').toLowerCase();
      const searchParam = searchField.value.toLowerCase();

      if (cardCaption.includes(searchParam)) {
        cards[i].style.display = 'inline';
      } else {
        cards[i].style.display = 'none';
      }
    }
  });
}

handleSearchOnKeyUp();