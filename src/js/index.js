import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryMarkup } from './templates';
import { showError, showSuccess, showWarning } from './toaster';
import ImagesAPI from './images-api';

const elements = {
  search: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  guard: document.querySelector('.js-guard'),
};

elements.search.addEventListener('submit', handleSearch);

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};
const observer = new IntersectionObserver(handleLoadMore, options);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'self',
  captionsData: 'data-caption',
});

const imagesAPI = new ImagesAPI();

async function handleSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value.trim();

  if (!searchQuery) {
    return;
  }

  elements.gallery.innerHTML = '';
  imagesAPI.query = searchQuery;
  imagesAPI.resetPage();
  observer.unobserve(elements.guard);

  try {
    const { hits, totalHits } = await imagesAPI.fetchPictures();

    if (!totalHits) {
      showError(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      renderGallery(hits);
      showSuccess(`Hooray! We found ${totalHits} images.`);
      if (totalHits > 40)
        setTimeout(() => {
          observer.observe(elements.guard);
        }, 1000);
    }
  } catch (err) {
    console.log(err);
    showError('Something went wrong :(');
  }
}

async function handleLoadMore(entries) {
  if (entries[0]?.isIntersecting ?? false) {
    try {
      const { hits, totalHits, page } = await imagesAPI.fetchPictures();
      renderGallery(hits);

      if (page > Math.ceil(totalHits / 40)) {
        showWarning(
          "We're sorry, but you've reached the end of search results."
        );
        observer.unobserve(elements.guard);
      }
    } catch (err) {
      console.log(err);
      showError('Something went wrong :(');
    }
  }
}

function renderGallery(array) {
  elements.gallery.insertAdjacentHTML('beforeend', galleryMarkup(array));
  lightbox.refresh();
}
