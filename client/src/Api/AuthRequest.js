import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:7070"})

export const signIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)