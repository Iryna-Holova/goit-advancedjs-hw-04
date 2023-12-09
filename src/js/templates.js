const galleryMarkup = array => {
  return array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a href="${largeImageURL}" class="photo-card" data-caption="${tags}">
        <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <div class="info-item">
            <p class="info-title">Likes</p>
            <p>${likes}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Views</p>
            <p>${views}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Comments</p>
            <p>${comments}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Downloads</p>
            <p>${downloads}</p>
          </div>
        </div>
      </a>
      `
    )
    .join('');
};

export { galleryMarkup };
