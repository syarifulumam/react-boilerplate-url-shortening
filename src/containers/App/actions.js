import {
  SET_LOCAL,
  SET_THEME,
  SET_POPUP,
  SET_LOADING,
  SET_DATA,
  GET_DATA,
  GET_COUNTRY_LIST,
  SET_COUNTRY_LIST,
  SET_SHORT_LINK,
  POST_SHORT_LINK,
} from '@containers/App/constants';

export const setLocale = (locale) => ({
  type: SET_LOCAL,
  locale,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme,
});

export const showPopup = (title = '', message = '') => ({
  type: SET_POPUP,
  popup: {
    open: true,
    title,
    message,
  },
});

export const hidePopup = () => ({
  type: SET_POPUP,
  popup: {
    open: false,
    title: '',
    message: '',
  },
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});
export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const getData = () => ({
  type: GET_DATA,
});

export const getCountryList = () => ({
  type: GET_COUNTRY_LIST,
});

export const setCountryList = (countryList) => ({
  type: SET_COUNTRY_LIST,
  countryList,
});

export const setShortLink = (shortLink) => ({
  type: SET_SHORT_LINK,
  shortLink,
});

export const postShortLink = (data) => ({
  type: POST_SHORT_LINK,
  data,
});
