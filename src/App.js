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

    this.state = {page: pages[0].link} 

    this.currentPage = (e) => {
        const pageName = e.target.innerHTML
        console.log(pageName);
        
    }

    this.handlePageContent = () => {
    this.setState({             
        page: this.pageName
        })
    }
    
}
    render() {
        
        return (
            <div>                    
                <Header 
                pages={pages}                
                handlePageContent={this.handlePageContent}
                currentPage={this.currentPage}
                />                
                {this.state.page}  
                {console.log(this.pageName)}                     
            </div>
        )
    }
}