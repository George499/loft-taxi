import React, {useState} from 'react'
import Radium from 'radium'
import './login.scss'
import Form from '../../Components/Form/Form'
import Signup from '../Signup/Signup'
import { Logo } from "loft-taxi-mui-theme"; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



function Login(props) {

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
        }
      }));
      

    const [isLoginForm, setLoginForm] = useState(true)
    const classes = useStyles();

    // const toggleLogin = () => {
    //     setLoginForm(!isLoginForm)
    // }

    // this.setState({
    //     page: buttonName
    // })

    if (isLoginForm){
	return (
    <Paper className="main-wrap" elevation={1}>
        <Grid container="true" className={classes.paper} wrap="nowrap" spacing={2}>
            <Grid item xs={3}>
                <Logo class="login-logo" width="156" alt="Logo" />
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.modalForm} square={false} elevation={1}>
                    <Form currentPage={props.currentPage}/>        
                </Paper>
            </Grid>
    
         </Grid>
    </Paper>
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