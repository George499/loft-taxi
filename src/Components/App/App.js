import React, {useState, useContext} from "react";
import Header from "../Header/Header";
import "./App.scss";
import Map from "../../Pages/Map/Map"
import Profile from '../../Pages/Profile/Profile'
import Login from '../../Pages/Login/Login'
import {ContextLogin} from '../Context/Context'

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

    const {isLoggedIn} = useContext(ContextLogin)
        
    const [page, setPage] = useState(pages[2].name)    

    const currentPage = (buttonName) => {
    setPage( buttonName )
}

    let Component = null;

    if (page === pages[0].name){
        Component = <Profile />;
    } 
    else if (page === pages[1].name){
        Component = <Map />;
    } else {
        Component = <Login currentPage={currentPage}/>;
    }

    return (
<>
    {page !== pages[2].name               
        ?    <Header 
            pages={pages}
            currentPage={currentPage}
            />                
        : null
        }
            {Component}   
</>
)}