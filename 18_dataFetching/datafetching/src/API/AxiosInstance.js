import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'admin',
        'x-hasura-admin-secret': process.env.REACT_APP_API_KEY
    }
});

export default instance