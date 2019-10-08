import axios from 'axios';

axios.interceptors.response.use(
    function (response) {
        return response
    }
    , function (error) {
        if (error.response.status === 401) {
            alert("로그인 후 이용 가능한 서비스입니다.");
        }
        return Promise.reject(error)
    }
)