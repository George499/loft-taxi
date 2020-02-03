import React from 'react'
import SignupForm from './../../Components/Form/SignupForm'
import { makeStyles } from '@material-ui/core/styles';
import './../../Components/App/App.scss';
import '../Login/login.scss'

function Signup(props) {

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

	return (
    <SignupForm/>
    )
}
export default Signup
