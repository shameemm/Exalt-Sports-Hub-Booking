import {createContext, useState} from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({children})=>{
    const [tokens,setTokens] = useState(()=>localStorage.getItem('refresh')?localStorage.getItem('refresh'):null)

    let contextData = {
        token : tokens,
    }
    return(
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}