import React, { Component } from "react";
import Header from "./header";
import './Header.scss'
import "./App.scss";
import Map from "./Map"
class App extends Component {

    state = {
        pages: ["map", "signup", "login", "profile"],
        routes: [  
                    { action: () => <Map /> },  
                    // { path: '/tasks', action: () => <TaskList /> },  
                    // { path: '/tasks/:id', action: () => <TaskDetails /> }
                ],
      };
      

    
    pagesRender = () => {
        return(
            <ul className="nav">
                {this.state.pages.map((page, index) => (
                    <li className='nav__item' key={index}>
                        <button>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }    
render() {
    return (
        <>       
            <Header pagesRender={this.pagesRender}/>
            <Map/>
        </>
    );
}
}


export default App;



// this.state = {
    //     routes: [  
    //         { path: '/', action: () => <Header /> },  
    //         // { path: '/tasks', action: () => <TaskList /> },  
    //         // { path: '/tasks/:id', action: () => <TaskDetails /> }
    //     ],
    //     pageTitle: 'React Components',
    //     show: false
    // }
