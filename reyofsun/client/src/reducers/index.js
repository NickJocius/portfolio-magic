import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

// combine reducers into root reducer
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;