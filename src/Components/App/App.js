import React, {useState } from "react";
import { useContextLogin } from '../Context/Context'
import Header from "../Header/Header";
import "./App.scss";
import Map from "../../Pages/Map/Map"
import Profile from '../../Pages/Profile/Profile'
import Login from '../../Pages/Login/Login'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

const pages = [
    {
    name: 'profile',
    text: 'Профиль'
    },
    {
    name: 'map',
    text: 'Карта'
    },
    {
    name: 'login',
    text: 'Выйти'
    }
]

export default function App ()  { 

    const {isLoggedIn} = useContextLogin()
        
    const [page, setPage] = useState(pages[2].name)    

    const currentPage = (buttonName) => {
    setPage( buttonName )
    }

    // let Component = null;

    // if (page === pages[0].name){
    //     Component = <Profile />;
    // } 
    // else if (page === pages[1].name){
    //     Component = <Map />;
    // } else {
    //     Component = <Login currentPage={currentPage}/>;
    // }

    return (
<>
    {(isLoggedIn)
    ?
    <Header pages={pages}/>
    :
    <Switch>
    <Route path="/login" component={Login}/> 
    <Route path="/map" component={Map}/>
    <Route path="/profile" component={Profile}/>
    </Switch>}

</>
)}