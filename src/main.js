import { renderCard, refs } from './js/render-function';
import { fetchImage, searchSettings } from './js/paxabay-api';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

refs.searchButton.addEventListener('submit', handlerSearchButton);

function handlerSearchButton(event) {
  event.preventDefault();
  const searchText = event.target.searchtext.value;
  const urls = new URLSearchParams(searchSettings);
  urls.set('q', searchText);
  refs.gallery.innerHTML = '';
  fetchImage(`https://pixabay.com/api/?${urls}`)
    .then(image => {
      refs.gallery.insertAdjacentHTML('beforeend', renderCard(image.hits));
      galleryBig.refresh();
    })
    .catch(error => console.log(error));
}

const galleryBig = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.8,
  scrollZoom: false,
});
galleryBig.on('show.simplelightbox', function () {});
