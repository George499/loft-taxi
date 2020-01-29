import React, {useState} from 'react'
import Radium from 'radium'
import './login.scss'
import Form from '../../Components/Form/Form'
import Signup from '../Signup/Signup'



function Login(props) {

    const [isLoginForm, setLoginForm] = useState(true)

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