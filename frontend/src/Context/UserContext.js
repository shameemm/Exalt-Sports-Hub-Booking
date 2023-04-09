import {createContext, useState,useEffect} from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({children})=>{
    const [tokens,setTokens] = useState()
    useEffect(() => {
        setTokens(()=>localStorage.getItem('token')?localStorage.getItem('token'):null)
    }, [tokens])
    console.log(tokens);
    

    let contextData = {
        token : tokens,
        setTokens,
    }
    return(
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}