import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_HOST,
    transformRequest: [data =>  {
        const token = localStorage.getItem('token');
        const key = localStorage.getItem('key');
        if (token) {
            data.token = token;
        }
        if (key) {
            data.key = key;
        }
        return JSON.stringify(data);
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // application/x-www-form-urlencoded
    },
});
const LoginAPI = { login: data => instance.post('/user.php?type=login', { ...data }) };

const IndexAPI = { 
    userList: data => instance.post('/user.php?type=list', { ...data }), 
    agencyList: data => instance.post('/user.php?type=user_list', { ...data }),
    giftList: data => instance.post('/list.php?type=code_list', { ...data }),
    editInfo: data => instance.post('/list.php?type=save', { ...data }),
};

export { LoginAPI, IndexAPI };
