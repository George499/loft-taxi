import React from "react";
import "./login.scss";
import Form from "../../Components/Form/Form";
import { Logo } from "loft-taxi-mui-theme";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function Login(props) {
  Login.propTypes = {
    currentPage: PropTypes.func
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      color: theme.palette.text.secondary,
      alignItems: "center",
      height: "100vh"
    },
    modalForm: {
      padding: "44px 60px",
      minWidth: "380px",
      marginTop: "48px",
      marginBottom: "48px"
    }
  }));

  const classes = useStyles();
  return (
    <Paper className="main-wrap" elevation={1}>
      <Grid container className={classes.paper} wrap="nowrap">
        <Grid item xs={3}>
          <Logo animated white width="156" alt="Logo" />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.modalForm} square elevation={1}>
            <Form />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Login;
