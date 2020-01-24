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
    name: 'profile',
    link: <Profile/>
    },

    {
    name: 'map',
    link: <Map />
    },

    {
    name: 'signup',
    link: <Signup />
    },

    {
    name: 'login',
    link: <Login />
    }
]

export default class App extends Component {    
    constructor(props){
    super(props)

    this.state = {
    page: pages[3].link} 
    }

    currentPage = (e) => {
    const pageName = e.target.innerHTML
    
    this.setState({
        page: pages.find((item) => item.name === pageName).link
    })
}

    handleAuthorize = () => {
    
	this.setState({
	    page: pages.find((item) => item.name === 'map').link
    })
    
};
    render() {
        const {page} = this.state;
		
		let Component = null;

		switch (page) {
			case pages.find((item) => item.name === 'map').link:
				Component = <Map />;
				break;
			case pages.find((item) => item.name === 'profile').link:
				Component = <Profile />;
				break;
			default:
				Component = <Login onAuthorize={this.handleAuthorize}/>;
		}
        return (
            <div className='wrapper'>                    
                <Header 
                pages={pages} 
                currentPage={this.currentPage}
                />
                {Component}
            </div>
        )
    }
}