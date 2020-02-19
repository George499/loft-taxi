import React, { useState } from "react";
import "./Form.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Link,
  FormControl,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { handleAuth, registerUser } from "../../Redux/Actions/Actions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  formBottom: {
    marginBottom: "30px"
  },
  formInput: {
    marginBottom: "30px"
  },
  registerLink: {
    marginLeft: "5px"
  }
});

function Form(props) {
  const handleAuth = props.handleAuth;
  const registerUser = props.registerUser;

  Form.propTypes = {
    toggleLogin: PropTypes.func,
    goToMap: PropTypes.func
  };

  const [isRegistered, setIsRegistered] = useState(true);
  const toSignup = () => setIsRegistered(false);
  const toLogin = () => setIsRegistered(true);

  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [surname, setSurname] = useState(``);
  const [password, setPassword] = useState(``);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const registerUserData = { email, password, name, surname };
  const userAuthData = { email, password };

  const handleSubmit = e => {
    e.preventDefault();
    handleAuth(userAuthData);
  };

  const handleRegister = e => {
    e.preventDefault();
    registerUser(registerUserData);
  };

  const classes = useStyles();

  return isRegistered ? (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            className={classes.formInput}
            align="left"
            variant="h4"
            component="h1"
            gutterBottom
          >
            Войти
          </Typography>
          <Typography
            className={classes.formInput}
            variant="body1"
            component="p"
            align="left"
          >
            Новый пользователь?
            <Link
              onClick={toSignup}
              className={classes.registerLink}
              underline="hover"
              color="primary"
            >
              Зарегистрируйтесь
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            className={classes.formInput}
            fullWidth
            color="secondary"
          >
            <InputLabel>Имя Пользователя</InputLabel>
            <Input onChange={handleEmailChange} value={email}></Input>
          </FormControl>
          <FormControl
            className={classes.formInput}
            fullWidth
            color="secondary"
          >
            <InputLabel>Пароль</InputLabel>
            <Input value={password} onChange={handlePasswordChange}></Input>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="right">
          <Button type="submit" variant="contained" color="primary">
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
  ) : (
    <form onSubmit={handleRegister}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            className={classes.formInput}
            align="left"
            variant="h4"
            component="h1"
          >
            Регистрация
          </Typography>
          <Typography
            style={{ marginBottom: "10px" }}
            variant="body1"
            component="p"
            align="left"
          >
            Уже зарегестрированы?
            <Link
              onClick={toLogin}
              className={classes.registerLink}
              underline="hover"
              color="primary"
            >
              Войти
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: "8px" }}>
          <FormControl
            className={classes.formInput}
            fullWidth
            color="secondary"
          >
            <InputLabel placeholder={"Адрес электронной почты"}>
              Адрес электронной почты
            </InputLabel>
            <Input onChange={handleEmailChange} value={email} />
          </FormControl>
        </Grid>
        <Grid item xs={6} style={{ padding: "8px" }}>
          <FormControl
            className={classes.formInput}
            fullWidth
            color="secondary"
          >
            <InputLabel placeholder={"Имя"}>Имя</InputLabel>
            <Input onChange={handleNameChange} value={name} />
          </FormControl>
        </Grid>
        <Grid item xs={6} style={{ padding: "8px" }}>
          <FormControl
            className={classes.formInput}
            fullWidth
            color="secondary"
          >
            <InputLabel placeholder={"Фамилия"}>Фамилия</InputLabel>
            <Input onChange={handleSurnameChange} value={surname} />
          </FormControl>
        </Grid>
        <Grid item xs={12} style={{ padding: "8px" }}>
          <FormControl
            className={classes.formInput}
            fullWidth
            color="secondary"
          >
            <InputLabel placeholder={"Пароль"}>Пароль</InputLabel>
            <Input onChange={handlePasswordChange} value={password} />
          </FormControl>
        </Grid>
        <Grid item xs={12} align="right">
          <Button
            type="submit"
            value="submit"
            variant="contained"
            color="primary"
          >
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: registerUserData => dispatch(registerUser(registerUserData)),
    handleAuth: userAuthData => dispatch(handleAuth(userAuthData))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Form));
