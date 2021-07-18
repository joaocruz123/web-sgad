export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = () => localStorage.getItem('user') !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
