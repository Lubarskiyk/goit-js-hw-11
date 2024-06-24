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
console.log(gallery);
function handlerSearchButton(event) {
  event.preventDefault();
  urls.set('q', 'dog');
  fetchImage(`https://pixabay.com/api/?${urls}`)
    .then(image => {
      console.log(renderCard(image.hits));
      gallery.insertAdjacentHTML('beforeend', renderCard(image.hits));
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

function renderCard(imageData) {
  console.log(imageData);
  return imageData
    .map(
      el =>
        `<li class="card">
            <a href="${el.largeImageURL}" class="big gallery-link">
              <img
                src="${el.previewURL}"
                alt="${el.tags}"
                title="${el.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${el.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${el.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${el.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${el.downloads}</p>
              </li>
            </ul>
          </li>`
    )
    .join('');
}
