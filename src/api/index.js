import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1',
    transformRequest: [
        (data) => {
            if (!data) {
                data = {};
            }
            return JSON.stringify(data);
        },
    ],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // application/x-www-form-urlencoded
    },
});
const LoginAPI = { login: data => instance.post('/boke/index.php', { ...data }) };
export default LoginAPI;
