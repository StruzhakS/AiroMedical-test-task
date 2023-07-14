import { logDOM } from '@testing-library/react';
import { default as axios } from 'axios';

// axios.defaults.baseURL =  `https://api.punkapi.com/v2/beers?page=${page}`;

export const getAllRecipesApi = async page => {
  const { data } = await axios(`https://api.punkapi.com/v2/beers?page=${page}`);
  //   console.log(data);
  return data;
};
