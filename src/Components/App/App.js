import React, {useState} from "react";
import Header from "../Header/Header";
import "./App.scss";
import Map from "../../Pages/Map/Map"
import Profile from '../../Pages/Profile/Profile'
import Login from '../../Pages/Login/Login'
import {Context} from './Context'

const pages = [
    {
    name: 'profile'
    },
    {
    name: 'map'
    },
    {
    name: 'login'
    }
]

export default function App ()  { 
    const mapRef = React.createRef() 
    
    const [page, setPage] = useState(pages[2].name)
    const [isLoggedIn, setLoggedIn] = useState(true)

    const logout = () => {
        setLoggedIn (false)
    }
    const login = (email, password) => {
        
            setLoggedIn (true)
        
    }

    const currentPage = (buttonName) => {
    setPage( buttonName )
}
    let Component = null;

    if (page === pages[0].name){
        Component = <Profile />;
    } 
    else if (page === pages[1].name){
        Component = <Map ref={mapRef} />;
    } else {
        Component = <Login currentPage={currentPage}/>;
    }

    return (
    <Context.Provider value={{login, logout, isLoggedIn}}>
        {page !== pages[2].name               
        ?    <Header 
            pages={pages} 
            activePage={page}
            currentPage={currentPage}
            />                
        : null
        }
            {Component}   
    </Context.Provider>     
    )
}
    