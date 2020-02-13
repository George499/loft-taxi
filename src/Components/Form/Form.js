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
import { handleProfileSubmit, login } from "../../Redux/Actions/Actions";
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
  const isLoggedIn = props.isLoggedIn;
  const login = props.login;
  const handleProfileSubmit = props.handleProfileSubmit;
  const profile = props.profile;

  Form.propTypes = {
    toggleLogin: PropTypes.func,
    goToMap: PropTypes.func
  };

  const goToMap = () => {
    props.history.push("/map");
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleProfileSubmit(loadProfile);
    login();
    // goToMap();
  };

  const [isRegistered, setIsRegistered] = useState(true);
  const toSignup = () => setIsRegistered(false);
  const toLogin = () => setIsRegistered(true);

  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const loadProfile = { firstName, lastName };

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      {isRegistered ? (
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
              <InputLabel>Имя пользователя</InputLabel>
              <Input
                disableUnderline
                placeholder={"Имя"}
                onChange={handleFirstNameChange}
                value={"=value"}
              ></Input>
              <Input />
            </FormControl>
            <FormControl
              className={classes.formInput}
              fullWidth
              color="secondary"
            >
              <InputLabel
                value={lastName}
                placeholder={"Фамилия"}
                onChange={handleLastNameChange}
              >
                Пароль
              </InputLabel>
              <Input />
            </FormControl>
          </Grid>
          <Grid item xs={12} align="right">
            <Button type="submit" variant="contained" color="primary">
              Войти
            </Button>
          </Grid>
        </Grid>
      ) : (
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
              <Input />
            </FormControl>
          </Grid>
          <Grid item xs={6} style={{ padding: "8px" }}>
            <FormControl
              className={classes.formInput}
              fullWidth
              color="secondary"
            >
              <InputLabel placeholder={"Имя"}>Имя</InputLabel>
              <Input />
            </FormControl>
          </Grid>
          <Grid item xs={6} style={{ padding: "8px" }}>
            <FormControl
              className={classes.formInput}
              fullWidth
              color="secondary"
            >
              <InputLabel placeholder={"Фамилия"}>Фамилия</InputLabel>
              <Input />
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ padding: "8px" }}>
            <FormControl
              className={classes.formInput}
              fullWidth
              color="secondary"
            >
              <InputLabel placeholder={"Пароль"}>Пароль</InputLabel>
              <Input />
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
      )}
    </form>
  );
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn, profile: state.profile };
};

const mapDispatchToProps = dispatch => {
  return {
    handleProfileSubmit: loadProfile =>
      dispatch(handleProfileSubmit(loadProfile)),
    login: () => dispatch(login())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));
