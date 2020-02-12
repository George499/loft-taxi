import React, { useState } from "react";
import { useContextLogin } from "../Context/Context";
import "./Form.scss";
import { Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link, FormControl, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { testAuth, login } from "../../Redux/Actions/Actions";

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
  Form.propTypes = {
    toggleLogin: PropTypes.func,
    goToMap: PropTypes.func
  };

  const { login } = useContextLogin();
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);

  const goToMap = () => {
    props.history.push("/map");
  };

  const handleSubmit = () => {
    testAuth({ firstName, lastName });
  };

  const [isRegistered, setIsRegistered] = useState(true);
  const toSignup = () => setIsRegistered(false);
  const toLogin = () => setIsRegistered(true);

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
              <InputLabel
                value={firstName}
                placeholder={"Имя"}
                onChange={handleFirstNameChange}
              >
                Имя пользователя
              </InputLabel>
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

export default withRouter(Form);
