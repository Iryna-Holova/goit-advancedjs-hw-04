import axios from 'axios';

const API_KEY = '27839370-99dd6ddd44ecd058cc6f2562b';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

/**
 * Class representing the Images API.
 */
class ImagesAPI {

  constructor() {
    this.apiKey = API_KEY;
    this.baseURL = BASE_URL;
    this.searchQuery = '';
    this.page = 1;
  }

  /**
   * Fetch pictures based on the current search query and page.
   * @returns {Promise<Object>} - A Promise that resolves to an object containing image data.
   */
  async fetchPictures() {
    const { data } = await axios.get(this.baseURL, {
      params: {
        key: this.apiKey,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: this.page,
      },
    });
    this.incrementPage();
    return { ...data, page: this.page };
  }

  /**
   * Increment the current page for pagination.
   */
  incrementPage() {
    this.page += 1;
  }

  /**
   * Reset the current page to 1.
   */
  resetPage() {
    this.page = 1;
  }

  /**
   * Get the current search query.
   * @returns {string} - The current search query.
   */
  get query() {
    return this.searchQuery;
  }

  /**
   * Set a new search query.
   * @param {string} newQuery - The new search query.
   */
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export default ImagesAPI;
