import axios, { AxiosError } from 'axios';

import { SPOTIFY_ACCOUNTS_URL, SPOTIFY_API_URL } from '~/constants';
import AxiosMock from '~/mocks/$mock';

// Comment out if want to use real data
AxiosMock();

export const spotifyAccountsAxios = axios.create({
  baseURL: SPOTIFY_ACCOUNTS_URL,
});

export const spotifyApiAxios = axios.create({
  baseURL: SPOTIFY_API_URL,
});

export const isAxiosError = (error: any): error is AxiosError => {
  return !!error.isAxiosError;
};
