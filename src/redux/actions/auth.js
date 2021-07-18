import { userConstants } from './../../_constants/user.constants';
import { userService } from './../../services/user.service';
import { alertActions } from './alert.actions';
import history from '../../history';

export const SingIn = async (props) => {
    try {
        const { email, password } = props

        await userService.login(email, password)
            .then(
                user => {
                    success(user);
                    history.push('/app');
                },
                error => {
                    // dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );;

        function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    }
    catch{

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