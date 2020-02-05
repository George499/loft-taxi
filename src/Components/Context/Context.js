import React from 'react'

export const ContextLogin = React.createContext(null)

export const LoginProvider = ({ children, defaultData}) => {
    const [isLoggedIn, setLoggedIn] = React.useState(defaultData)

    const login = React.useCallback(() => {
        setLoggedIn(true)
    }, [])

    const logout = React.useCallback(() => {
        setLoggedIn(false)
    }, [])

    return (
        <ContextLogin.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </ContextLogin.Provider>
    )
}