import React, { useState, useContext } from 'react'
import './Form.scss'
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link, FormControl, InputLabel  } from '@material-ui/core';
import PropTypes from 'prop-types'
import {Context} from '../../Components/App/Context'

const useStyles = makeStyles({
    
    formBottom: {
        marginBottom: '30px'
    },
    formInput: {
        marginBottom: '30px'
    },
    registerLink: {
        marginLeft: '5px'
    }
  });

function Form (props) {

    Form.propTypes = {
        currentPage: PropTypes.func ,
        toggleLogin: PropTypes.func
      }

    const {logout} = useContext(Context)  
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
    <form onSubmit={handleSubmit}>
        <Grid container={true}>
            <Grid item xs={12}>
            <Typography className={classes.formInput} align="left" variant="h4" component="h1" gutterBottom>
            Войти
            </Typography>
            <Typography variant='body1' component="p" align="left">
            Новый пользователь? 
            <Link 
            onClick={logout}
            className={classes.registerLink}
            underline="hover"
            color="primary"> 
            Зарегистрируйтесь
            </Link>
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormControl className={classes.formInput} fullWidth color="secondary">
                <InputLabel 
                    value={firstName} 
                    placeholder={'Имя'}
                    onChange={handleFirstNameChange}>                        
                    Имя пользователя
                </InputLabel >
                <Input />
            </FormControl>
            <FormControl className={classes.formInput} fullWidth color="secondary">
                  <InputLabel 
                  value={lastName} 
                placeholder={'Фамилия'}
                onChange={handleLastNameChange}>
                  Пароль
                  </InputLabel >
                  <Input />
            </FormControl>            
            </Grid>
            <Grid item xs={12} align="right">
                <Button 
                onClick={toMap}
                type="submit"            
                value="submit" 
                variant="contained" 
                color="primary">
                    Войти
                </Button>
            </Grid>
        </Grid>
    </form>
    )
}

export default Form

