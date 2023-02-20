import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [refeshToken,setRefreshToken] = useState(()=>localStorage.getItem('refresh') ? (localStorage.getItem('refresh')) : null)
    // console.log("refresh", refeshToken);
    const [accessToken,setAccessToken] = useState(()=>localStorage.getItem('access') ? (localStorage.getItem('access')) : null)
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}
