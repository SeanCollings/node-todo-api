import jwtDecode from 'jwt-decode';

export const setCookie = (name, value, hours) => {
  let expires = '';
  if (hours) {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
};

export const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(nameEQ) === 0)
      return cookie.substring(nameEQ.length, cookie.length);
  }
  return null;
};

export const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
};

export const decodeJWT = (token) => {
  if (!token) return null;

  const decoded = jwtDecode(token);
  return decoded?.name && { name: decoded.name };
};

export const createRandomId = () => Math.random().toString(36).substr(2, 5);

export const sortByCreatedDate = (array) =>
  array.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
