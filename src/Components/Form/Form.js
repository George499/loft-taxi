import React from 'react'
import Radium from 'radium'
import './Form.scss'

import {Button} from "@material-ui/core";
import { Input } from '@material-ui/core';

function Form (props) {
    const toMap = () => props.currentPage('map')

    return (
    <form className="login-form">
        <div className="formInputs">
            <Input size="small" id="standard-basic" label="Standard"/>
            <Input size="small" id="standard-basic" label="Standard"/>
        </div>
        <Button onClick={toMap}>Click</Button>
    </form>
    )
}

export default Radium(Form)

