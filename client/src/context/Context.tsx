import {createContext, useEffect, useReducer} from "react";
import LoginReducer from "./Reducer";

const INITIAL_STATE = {
    // @ts-ignore
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const Context = createContext(INITIAL_STATE);

interface props {
    children: any,
}

export const ContextProvider = ({children}: props) => {
    const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

    useEffect(()=>{
        // @ts-ignore
        localStorage.setItem("user", JSON.stringify(state.user));
        // @ts-ignore
    }, [state.user]);

    return(
        <Context.Provider
            value={{
                // @ts-ignore
                user: state.user,
                // @ts-ignore
                isFetching: state.isFetching,
                // @ts-ignore
                error: state.error,
                // @ts-ignore
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
};