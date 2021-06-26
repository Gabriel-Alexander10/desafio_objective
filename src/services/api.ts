import axios from 'axios';

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    limit: 10,
    apikey: process.env.NEXT_PUBLIC_API_KEY,
  }
});

export const myApi = axios.create({
  baseURL: "http://localhost:3000/api",
})



