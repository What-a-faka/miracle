import _get from 'lodash.get';

const storage = (window && window.localStorage) || {};

function setItem(key, value) {
  storage.setItem(key, JSON.stringify(value || ''));
}

function getItem(key, paramPath, paramDefault = '') {
  const data = storage.getItem(key);
  if (typeof data !== 'string' || !data) {
    return '';
  }
  try {
    const value = JSON.parse(data);
    return paramPath ? _get(value, paramPath, paramDefault) : value;
  } catch (e) {
    return paramPath ? _get(data, paramPath, paramDefault) : data;
  }
}

function clear() {
  storage.clear();
}

function removeItem(key) {
  storage.removeItem(key);
}

export default {
  setItem,
  getItem,
  clear,
  removeItem,
};
