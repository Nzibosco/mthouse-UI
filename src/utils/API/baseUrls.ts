import Axios from 'axios'

export const registerAPI = Axios.create({
    baseURL: 'mthouse.com',
});