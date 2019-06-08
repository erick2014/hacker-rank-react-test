import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';


function login(username, password) {
    console.log('calling login action..')
    // return the promise using fetch which adds to localstorage on resolve
     return userService.login(username,password)
      .then(resp=>console.log('resp ??',resp))
      .catch(err=>console.log('err ',err))
    /*function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    */
}

function logout() {
    // complete this function
}

function register(user) {
    // return the promise using fetch which dispatches appropriately 

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

export const userActions = {
    login,
    logout,
    register
};