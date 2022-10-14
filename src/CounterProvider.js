import { createContext, useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "ADD_BY_NUM":
            return state + action.payload
        default : 
            return state
    }
}

export const CountContext = createContext()

const CountContextProvider = ({children} )=> {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{count, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContextProvider