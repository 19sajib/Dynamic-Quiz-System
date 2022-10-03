import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:7070"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const getUser = (id) => API.get(`/user/${id}`);

