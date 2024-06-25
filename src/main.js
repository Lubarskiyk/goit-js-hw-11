import { renderCard } from './js/render-function';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const searchSettings = {
  key: '44443472-3b41bcc651e7d0b56b1888f38',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};
const urls = new URLSearchParams(searchSettings);
const searchButton = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');
searchButton.addEventListener('submit', handlerSearchButton);

function handlerSearchButton(event) {
  event.preventDefault();
  const searchText = event.target.searchtext.value;
  urls.set('q', searchText);
  gallery.innerHTML = '';
  fetchImage(`https://pixabay.com/api/?${urls}`)
    .then(image => {
      gallery.insertAdjacentHTML('beforeend', renderCard(image.hits));
      galleryBig.refresh();
    })
    .catch(error => console.log(error));
}

function fetchImage(qveryURL) {
  return fetch(qveryURL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

const galleryBig = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.8,
  scrollZoom: false,
});
galleryBig.on('show.simplelightbox', function () {});
