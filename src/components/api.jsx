import axios from 'axios';

const API_KEY = '29818369-26f2aeadd77818b7a67304d74';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchImages = async (query, page) => {
  const queryParams = {
    q: query,
    page: page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    key: API_KEY,
  };

  const response = await axios.get('/api/', { params: queryParams });
  return response.data;
};
