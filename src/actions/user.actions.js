import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';
import { alertActions } from '../actions';

const request = (user) => ({
    type: userConstants.LOGIN_REQUEST,
    user
})

const success = (user) => ({
    type: userConstants.LOGIN_SUCCESS,
    user
})

const failure = (error) => ({
    type: userConstants.LOGIN_FAILURE,
    error
})

const signUprequest = (user) => ({
    type: userConstants.REGISTER_REQUEST,
    user
})

const signUpsuccess = (user) => ({
    type: userConstants.REGISTER_SUCCESS,
    user
})

const signFailure = (error) => ({
    type: userConstants.REGISTER_FAILURE,
    error
})

const login = (username, password) => (dispatch) => {

    dispatch(request({ username, password }));

    return userService.login(username, password)
        .then(resp => dispatch(success({ username, password })))
        .catch(err => {
            dispatch(failure(err))
            dispatch(alertActions.error('Error: ' + err))
        })
}

const logout = () => {
    return { type: userConstants.LOGOUT }
}

const register = (user) => dispatch => {
    // return the promise using fetch which dispatches appropriately 
    dispatch(signUprequest(user));

    return userService.register(user)
        .then(resp => {
            dispatch(alertActions.success('Registration successful'))
            dispatch(signUpsuccess(user))
        })
        .catch(err => {
            dispatch(signFailure(err))
            dispatch(alertActions.error('Error: ' + err))
        })
}

export const userActions = {
    login,
    logout,
    register
};