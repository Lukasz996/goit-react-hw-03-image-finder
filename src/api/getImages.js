import Notiflix from 'notiflix';
import axios from 'axios';

export const getImages = async (page, query) => {
  const API_URL = 'https://pixabay.com/api';
  const API_KEY = '29601510-cb62b0e552e92b2824471424b';
  const endPoint =
    API_URL +
    `/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

  try {
    const response = await axios.get(endPoint);
    const { data } = response;
    if (data.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, there was an error. Please try again later.'
    );
    throw new Error('Error');
  }
};