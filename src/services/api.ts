import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MARVEL_API_URL,
  params: {
    limit: 10,
    apikey: process.env.NEXT_PUBLIC_MARVEL_API_KEY,
  }
});

export const myApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})



