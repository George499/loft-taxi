import React, {useState} from 'react'
import Radium from 'radium'
import './login.scss'
import Form from '../../Components/Form/Form'
import Signup from '../Signup/Signup'
import {Button} from "@material-ui/core";



function Login(props) {

    const [isLoginForm, setLoginForm] = useState(true)

    const toggleLogin = () => {
        setLoginForm(!isLoginForm)
    }

    if (isLoginForm){
	return (
    <div >
        <Form currentPage={props.currentPage}/>        
    </div>
    )
    }
    else {
    return(
        <div>
            <Signup />
        </div>
        )
    }
}
export default Radium(Login)