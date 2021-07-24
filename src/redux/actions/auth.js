import { userConstants } from './../../_constants/user.constants';
import { userService } from './../../services/user.service';
import { alertActions } from './alert.actions';
import history from '../../history';

export const SingIn = ({ email, password }) => async (dispatch) => {
    try {
        userService.login(email, password)
            .then(
                user => {
                    dispatch(setUser(user));
                    history.push('/app');
                },
                error => {
                    dispatch(setUserError(error));
                }
            );
    } catch (e) {
        console.log(e)
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

export const setUser = (user) => async (dispatch, getState, api) => {
    dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: user
    })
}

export const setUserError = (error) => async (dispatch, getState, api) => {
    dispatch({
        type: userConstants.LOGIN_FAILURE,
        payload: error
    })
}