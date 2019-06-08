import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';


export const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunkMiddleware))    
);
