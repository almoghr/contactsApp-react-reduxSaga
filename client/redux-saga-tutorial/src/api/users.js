import axios from 'axios';
export const getUsers = () => {
    return axios.get('/Users', {
        params: {
            limit: 1000 
        }
    })
}