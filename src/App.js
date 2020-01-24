import React, {Component} from "react";
import Header from "./header";
import './Header.scss'
import "./App.scss";
import Map from "./Map"
import Profile from './Profile'
import Signup from './Signup'
import Login from './Login'

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
    page: pages[1].link} 
    }

    currentPage = (e) => {
    const pageName = e.target.innerHTML
    
    this.setState({
        page: pages.find((item) => item.name === pageName).link
    })
}

    handleAuthorize = (e) => {
    e.preventDefault()
	this.setState({
	    page: pages.find((item) => item.name === 'map').link
    })
    console.log(pages.find((item) => item.name).link);
};

    render() {
        const {activePage} = this.state;
		
		let Component = null;

		switch (activePage) {
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
            <div>                    
                <Header 
                pages={pages} 
                currentPage={this.currentPage}                
                />                
                {Component}
            </div>
        )
    }
}