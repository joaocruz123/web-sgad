import { userConstants } from '../../_constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { 
    loggedIn: true, 
    user,
    loading: false
} : { loading : false, user: {}};

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.payload
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

