import { default as axios } from 'axios';

export const getAllRecipesApi = async page => {
  const { data } = await axios(`https://api.punkapi.com/v2/beers?page=${page}`);
  return data;
};
