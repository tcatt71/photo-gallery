baguetteBox.run('.photo-gallery');

const searchField = document.querySelector('#search');
const cards = document.getElementsByTagName('a');

function handleSearchOnKeyUp() {
  searchField.addEventListener('keyup', () => {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = 'none';
    }
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].getAttribute('data-caption').toLowerCase().includes(searchField.value)) {
        cards[i].style.display = 'inline';
      }
    }
  });
}

handleSearchOnKeyUp();