import Axios from 'axios'

export const membersAPI = Axios.create({
    baseURL: 'http://localhost:8080/members',
});
