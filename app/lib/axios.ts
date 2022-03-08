import axios, { AxiosError } from 'axios';

import { SPOTIFY_ACCOUNTS_URL, SPOTIFY_API_URL } from '~/constants';

export const spotifyAccountsAxios = axios.create({
  baseURL: SPOTIFY_ACCOUNTS_URL,
});

export const spotifyApiAxios = axios.create({
  baseURL: SPOTIFY_API_URL,
});

export const isAxiosError = (error: any): error is AxiosError => {
  return !!error.isAxiosError;
};
