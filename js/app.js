baguetteBox.run('.photo-gallery');

const searchField = document.querySelector('#search');
const cards = document.getElementsByTagName('a');

function handleSearchOnKeyUp() {
  searchField.addEventListener('keyup', () => {
    const searchParam = searchField.value.toLowerCase();

    for (let i = 0; i < cards.length; i++) {
      const cardCaption = cards[i].getAttribute('data-caption').toLowerCase();

      if (cardCaption.includes(searchParam)) {
        cards[i].style.display = 'inline';
      } else {
        cards[i].style.display = 'none';
      }
    }
  });
}

handleSearchOnKeyUp();