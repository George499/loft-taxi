import React, {useContext} from 'react'
import './login.scss'
import Form from '../../Components/Form/Form'
import { Logo } from "loft-taxi-mui-theme"; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from '../../Components/Form/SignupForm';
import PropTypes from 'prop-types'
import {Context} from '../../Components/App/Context'

function Login(props) {

        Login.propTypes = {
            currentPage: PropTypes.func            
        }

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            color: theme.palette.text.secondary,
            alignItems: 'center',
            height: '100vh'
        },
        modalForm: {
            padding: '44px 60px',
            minWidth: '380px',
            marginTop: '48px',
            marginBottom: '48px'
        },        
        }));
        
        
    const {isLoggedIn} = useContext(Context)
    
    const classes = useStyles();

    if (isLoggedIn){
	return (
    <Paper className="main-wrap" elevation={1}>
        <Grid container className={classes.paper} wrap="nowrap" spacing={2}>
            <Grid item xs={3}>
                <Logo width="156" alt="Logo" />  
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.modalForm} square elevation={1}>
                    <Form currentPage={props.currentPage}/>        
                </Paper>
            </Grid>
         </Grid>
    </Paper>
    )
    }
    else {
    return(        
    <Paper className="main-wrap" elevation={1}>
        <Grid container className={classes.paper} wrap="nowrap" spacing={2}>
            <Grid item xs={3}>
                <Logo class="login-logo" width="156" alt="Logo" />
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.modalForm} square={false} elevation={1}>
                    <SignupForm />
                </Paper>
            </Grid>
         </Grid>
    </Paper>
        
        )
    }
}
export default Login


