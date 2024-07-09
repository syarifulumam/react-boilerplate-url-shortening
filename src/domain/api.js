import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  json: 'http://localhost:3000/api/data.json',
  countryGetAllKist: 'https://restcountries.com/v3.1/all',
  shortLink: 'https://shrtlnk.dev/api/v2/link',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    baseURL: endpoint,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const getData = () => callAPI(urls.json, 'get');

export const postShortLink = (url) =>
  callAPI(
    urls.shortLink,
    'post',
    {
      'api-key': import.meta.env.VITE_API_KEY,
      Accept: 'application/json',
    },
    {},
    { url }
  );

export const getCountryList = () => callAPI(urls.countryGetAllKist, 'get', {}, {});
