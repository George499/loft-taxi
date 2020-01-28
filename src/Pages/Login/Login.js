import React, {useState} from 'react'
import Radium from 'radium'
import '../../Components/App.scss'
import Form from '../Form/Form'
import Signup from '../Signup/Signup'
import {Button} from "@material-ui/core";



function Login(props) {

    const [isLoginForm, setLoginForm] = useState(true)

    if (isLoginForm){
	return (
    <div >
        <Form />
        <Button onClick={props.currentPage}>Click</Button>
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