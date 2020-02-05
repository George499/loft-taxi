import React, {useContext} from 'react'
import './Form.scss'
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link, FormControl, InputLabel  } from '@material-ui/core';
import PropTypes from 'prop-types'
import {ContextLogin} from '../Context/Context'

export default function SignupForm(props) {   
    
    SignupForm.propTypes = {
        toggleLogin: PropTypes.func 
      }
    const {login} = useContext(ContextLogin)      

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
      const classes = useStyles();
return(
<form>
        <Grid container>
            <Grid item xs={12} >
            <Typography className={classes.formInput} align="left" variant="h4" component="h1">
            Регистрация
            </Typography>
            <Typography style={{marginBottom: '10px'}} variant='body1' component="p" align="left">
            Уже зарегестрированы? 
            <Link 
            onClick={login}
            className={classes.registerLink}            
            underline="hover"
            color="primary"> 
            Войти
            </Link>
            </Typography>
            </Grid>
            <Grid item xs={12} style={{padding: '8px'}}>
            <FormControl className={classes.formInput} fullWidth color="secondary">
                <InputLabel                     
                    placeholder={'Адрес электронной почты'}>                 
                    Адрес электронной почты
                </InputLabel >
                <Input />
            </FormControl>
            </Grid>
            <Grid item xs={6} style={{padding: '8px'}}>            
            <FormControl className={classes.formInput} fullWidth color="secondary">
                    <InputLabel placeholder={'Имя'}>                
                    Имя
                    </InputLabel >
                    <Input />
            </FormControl> 
            </Grid>
            <Grid item xs={6} style={{padding: '8px'}}>
            <FormControl className={classes.formInput} fullWidth color="secondary">                    
                <InputLabel placeholder={'Фамилия'}>                
                Фамилия
                </InputLabel > 
                <Input />                   
            </FormControl>            
            </Grid>
            <Grid item xs={12} style={{padding: '8px'}}>
            <FormControl className={classes.formInput} fullWidth color="secondary">
                <InputLabel                     
                    placeholder={'Пароль'}>                 
                    Пароль
                </InputLabel >
                <Input />
            </FormControl>
            </Grid>
            <Grid item xs={12} align="right">
                <Button                 
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
