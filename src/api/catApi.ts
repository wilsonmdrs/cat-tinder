import axios, { AxiosResponse } from 'axios';
import { Cat } from '../contexts/useCatContext';

const baseURL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_aFFDrwub8qdRTMMPCdZC8CVdRlP54kwMfZKSKdLRbTvZytyHiRXzZMtDwpxAXUBe';
const header = {
  'content-type': 'application/json',
  'x-api-key': API_KEY,
};
const subId = 'cat-tinder-application';

export async function getCatData(id: string): Promise<Cat> {
  const response = await axios.get(`${baseURL}/images/${id}`);
  const { breeds = [{ name: '...', origin: 'Unknown', life_span: '' }] } =
    response.data;
  const cat = {
    id: response.data.id,
    url: response.data.url,
    name: breeds[0].name,
    origin: breeds[0].origin,
    age: breeds[0].life_span.slice(-2),
  };
  return cat;
}

export async function getCatList() {
  try {
    const response = await axios.get(
      `${baseURL}/images/search?limit=20&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('GetCatList', error);
  }
}

export async function getFavouriteList() {
  try {
    const response = await axios.get(
      `${baseURL}/favourites?limit=20&sub_id=${subId}&order=DESC`,
      { headers: header }
    );
    return response.data;
  } catch (error) {
    console.log('getFavouriteList', error);
  }
}

export async function voteUp(id: string) {
  try {
    const response = await axios.post(
      `${baseURL}/votes`,
      {
        image_id: id,
        sub_id: subId,
        value: 1,
      },
      { headers: header }
    );
    return response.data;
  } catch (error) {
    console.log('VoteUp', error);
  }
}

export async function addFavourite(id: string) {
  try {
    const response = await axios.post(
      `${baseURL}/favourites`,
      { image_id: id, sub_id: subId },
      { headers: header }
    );
    return response.data;
  } catch (error) {
    console.log('addFavourite', error);
  }
}

export async function deleteFavourite(id: number) {
  try {
    const response = await axios.delete(`${baseURL}/favourites/${id}`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log('deleteFavourite', error);
  }
}

export const catApi = {
  getCatData,
  getCatList,
  getFavouriteList,
  voteUp,
  addFavourite,
  deleteFavourite,
};
