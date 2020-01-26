import React, {Component} from "react";
import Header from "../Pages/Header/header";
import './../Pages/Header/Header.scss'
import "./App.scss";
import Map from "../Pages/Map/Map"
import Profile from '../Pages/Profile/Profile'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'


const pages = [
    {
    name: 'profile'
    },

    {
    name: 'map'
    },

    {
    name: 'signup'
    },

    {
    name: 'login'
    }
]

export default class App extends Component {    
    constructor(props){
    super(props)

    this.state = {
    page: pages[3].name} 
    }

    currentPage = (buttonName = this.buttonName) => {
    this.setState({
        page: buttonName
    })
}
    render() {
        const {page} = this.state;
		
        let Component = null;

        if (page === pages[0].name){
            Component = <Profile />;
        } 
        else if (page === pages[1].name){
            Component = <Map />;
        }
        else if (page === pages[2].name){
            Component = <Signup />;
        } else {
            Component = <Login currentPage={this.currentPage}/>;
        }
        return (
            <div className='wrapper'>     
            {page !== pages[3].name               
            ?    <Header 
                pages={pages} 
                activePage={page}
                currentPage={this.currentPage}
                />
                : null
            }
                {Component}
            </div>
        )
    }
}