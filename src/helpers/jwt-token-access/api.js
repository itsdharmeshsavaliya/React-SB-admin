import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'

export const getTechnologyAPI = async () => axios.get('/technology/data')

export const getUserByIdAPI = async (id) => axios.get(`/users/${id}`)

export const createUserAPI = async (user) => axios.post(`/users`, user)

export const updateUserAPI = async (user) => axios.put(`/users/${user.id}`, user)

export const deleteUserByIdAPI = async (id) => axios.delete(`/users/${id}`)