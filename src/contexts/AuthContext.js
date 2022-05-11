import {createContext, useEffect, useMemo, useState} from "react";

export const AuthContext = createContext();


export function AuthProvider({children}) {
    // const [user, setUser] = useState();
    const [token, setTokenData] = useState();

    return (
        <AuthContext.Provider value={{token, setTokenData}}>
            {children}
        </AuthContext.Provider>
    )
}

