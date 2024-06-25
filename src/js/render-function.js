function renderCard(imageData) {
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

export { renderCard };
