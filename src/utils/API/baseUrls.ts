import Axios from 'axios'

export const registerAPI = Axios.create({
    baseURL: 'http://localhost:8080/members',
});
