import { logDOM } from '@testing-library/react';
import { default as axios } from 'axios';

axios.defaults.baseURL = ' https://api.punkapi.com/v2/beers';

export const getAllRecipesApi = async () => {
  const { data } = await axios();
  //   console.log(data);
  return data;
};
