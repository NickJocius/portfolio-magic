//setting up global state
import { createContext, useReducer } from 'react';


//reducer
const reducer = (state, action) => {

    switch (action.type) {

        case 'LOGIN':

            return { ...state, user: action.payload };
            break;

        case 'LOGOUT':

            return { ...state, user: null };

        default:
            return state;
            break;
    }
};

// initial stat
const initialState = {
    user: null
};

// create context
const Context = createContext({});

// context provider/used to allow entire app access to state
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = { state, dispatch };

    return <Context.Provider value={value}>{children}</Context.Provider>
};

export { Context, Provider };