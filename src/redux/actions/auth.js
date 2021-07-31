import { userConstants } from './../../_constants/user.constants';
import { userService } from './../../services/user.service';
import { alertActions } from './alert.actions';
import history from '../../history';

export const SingIn = ({ email, password }) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        userService.login(email, password)
            .then(
                user => {
                    dispatch(setUser(user));
                    dispatch(setLoading(false));
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

export const SingOut = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        userService.logout()
            .then(
                logout => {
                    dispatch(setUser());
                    dispatch(setLoading(false));
                    history.push('/');
                }
            );
    } catch (e) {
        console.log(e)
    }
}

export const setLoading = (loading) => async (dispatch) => {
    dispatch({
        type: userConstants.SET_LOADING,
        payload: loading
    })
}

export const setLogout = () => async (dispatch) => {
    dispatch({
        type: userConstants.LOGOUT,
        payload: ''
    })
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