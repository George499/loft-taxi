import React from "react";
import Header from "./header";
import './Header.scss'
import "./App.scss";
import Map from "./Map"
import Profile from './Profile'
import Signup from './Signup'
import Login from './Login'

const pages = {

    profile: () => <Profile/>,
    map: ()=> <Map />,
    signup: setPage => <Signup setPage={setPage}/>,
    login: setPage => <Login setPage={setPage}/>
}

function App () {
const [page, setPage] = React.useState("login")

return (
<>       
    <Header setPage={setPage}/>
    {pages[page]}
</>
);
}


export default App;
