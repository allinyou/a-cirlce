import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    transformRequest: [data => JSON.stringify(data)],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // application/x-www-form-urlencoded
    },
});
const LoginAPI = { login: data => instance.post('/boke/index.php', { ...data }) };
export default LoginAPI;
