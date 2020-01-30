import React, {useState} from 'react'
import Radium from 'radium'
import './login.scss'
import Form from '../../Components/Form/Form'
import Signup from '../Signup/Signup'
import { Logo } from "loft-taxi-mui-theme"; 


function Login(props) {

    const [isLoginForm, setLoginForm] = useState(true)

    // const toggleLogin = () => {
    //     setLoginForm(!isLoginForm)
    // }

    // this.setState({
    //     page: buttonName
    // })

    if (isLoginForm){
	return (
    <div className="login-container">
        <Logo class="login-logo" width="156" alt="Logo" />
        <div className="modal-window">
            <Form currentPage={props.currentPage}/>        
        </div>
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