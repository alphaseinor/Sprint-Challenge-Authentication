import axios from 'axios'

const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:3300/api/jokes',
        headers: {
            token: localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth