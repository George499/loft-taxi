import React, { useState } from 'react'
import Radium from 'radium'
import './Form.scss'
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: 'black',
        cursor: 'pointer',
        width: '100%',
        
    },
  });

function Form (props) {
    const toMap = () => props.currentPage('map')

    const [firstName, setFirstName] = useState(``)  
    const [lastName, setLastName] = useState(``)
    


    const handleSubmit = e => {
    e.preventDefault()
    console.log(firstName, lastName);
    }
    
    const handleFirstNameChange = e => {
    setFirstName( e.target.value )
    }
    const handleLastNameChange = e => {
    setLastName( e.target.value )
    }

    const classes = useStyles();

    

    return (
    <form onSubmit={handleSubmit} className="login-form">
        <div className="formInputs">
        
            Имя:
            <Input 
            value={firstName} 
            onChange={handleFirstNameChange}
            size="small" 
            id="standard-basic" 
            label="Standard"/>
        
            Фамилия:
            <Input 
            value={lastName} 
            onChange={handleLastNameChange}
            size="small" 
            id="outlined-basic" 
            label="Standard"
            />
        
        </div>
        <div onClick={toMap} style={{width: '25%'}}>
            <Input 
            className={classes.root} 
            variant="filled" 
            type="submit" 
            value="submit" 
            />
        </div>
    </form>
    )
}

export default Radium(Form)

