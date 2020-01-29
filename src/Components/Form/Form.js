import React from 'react'
import {Button} from "@material-ui/core";
import { Input } from '@material-ui/core';

function Form (props) {
    return (
    <form>
        <Input/>
        <Input/>
        <Button onClick={props.currentPage}>Click</Button>
    </form>
    )
}

export default Form