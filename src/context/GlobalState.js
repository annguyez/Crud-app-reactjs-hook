import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    users: [
        {id: '1', name: 'An1'},
        {id: '2', name: 'An2'},
        {id: '3', name: 'An3'},
        {id: '4', name: 'An4'},

    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeUser = (id)=>{
        dispatch(
            {
                type: 'REMOVE_USER',
                payload: id
            }
        )
    }
    const addUser = (user)=>{
        dispatch(
            {
                type: 'ADD_USER',
                payload: user
            }
        )
    }
    const editUser = (user)=>{
        dispatch(
            {
                type: 'EDIT_USER',
                payload: user
            }
        )
    }
    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    );
}