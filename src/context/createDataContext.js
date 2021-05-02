import React, {useReducer} from 'react';

const Context = React.createContext();

export default (reducer, action, initialState) => {
const Provider = ({children}) =>{

    const  [state, dispatch] = useReducer(reducer, initialState);

    const actions = {};
     for (let Key in action ){
         actions[Key] = action[Key](dispatch)
     }
    return <Context.Provider value = {{state, ...actions}}>
        {children}
    </Context.Provider>
}
return {Context, Provider} ; 
}