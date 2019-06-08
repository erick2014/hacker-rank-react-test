import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';
import { alertActions } from '../actions';

const request = (user)=> ({
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


const login=(username, password)=>(dispatch,getState)=>{

    dispatch(request({username,password}));
    
     return userService.login(username,password)
      .then(resp=>{
          dispatch( success({username,password})  )
      })
      .catch(err=>{
        dispatch( failure(err) )
        dispatch( alertActions.error('Error: '+err) )
      })
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