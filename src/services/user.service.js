//import config from 'config';
import axios from 'axios';
import { authHeader } from './../_helpers/auth_header';

export const userService = {
    login,
    logout,
    getAll
};

async function login(email, password) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
    };
    const body = JSON.stringify({
        email: email,
        password: password,
        remember_me: true
    });

    await axios.post(`http://localhost/api/login`, body, requestOptions)
        .then(
            response => {
                localStorage.setItem('user', JSON.stringify(response.data.result));
                return response.data
            }
        )
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost/api/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}