import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ajudanagrade-backend.herokuapp.com/'
})

export default api;