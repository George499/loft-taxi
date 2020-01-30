import React, {Component, useRef} from "react";
import Header from "../Header/Header";
import "./App.scss";
import Map from "../../Pages/Map/Map"
import Profile from '../../Pages/Profile/Profile'
import Login from '../../Pages/Login/Login'
import Radium from'radium'

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

class App extends Component { 
    
    constructor(props){
    super(props)
    
    this.state = {
    page: pages[2].name} 
    }
    

    mapRef = () => useRef()

    currentPage = (buttonName) => {
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
            Component = <Map ref={this.mapRef}/>;
        } else {
            Component = <Login currentPage={this.currentPage}/>;
        }
        return (
            <div className='wrapper'>     
            {page !== pages[2].name               
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
export default Radium(App)