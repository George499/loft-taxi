import React, { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  Button
} from "@material-ui/core";
import "./Profile.scss";
import { makeStyles } from "@material-ui/core/styles";
import { MCIcon } from "loft-taxi-mui-theme";
import { connect } from "react-redux";
import { creditCardSubmit } from "../../Redux/Actions/Actions";
import { withRouter } from "react-router-dom";

const Profile = props => {
  const creditCardSubmit = props.creditCardSubmit;
  const history = props.history;

  const [cardNumber, setCardNumber] = useState(``);
  const [expiryDate, setExpiryDate] = useState(``);
  const [cardName, setCardName] = useState(``);
  const [cvc, setCVC] = useState(``);

  const creditCardData = { cardNumber, expiryDate, cardName, cvc };

  const handleCardSubmit = e => {
    e.preventDefault();
    history.push("/map");
    creditCardSubmit(creditCardData);
  };

  const handleCardNumberChange = e => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = e => {
    setExpiryDate(e.target.value);
  };
  const handleCardNameChange = e => {
    setCardName(e.target.value);
  };
  const handleCVCChange = e => {
    setCVC(e.target.value);
  };

  const useStyles = makeStyles({
    formRoot: {
      heigh: "40%"
    },
    formContainer: {
      flexGrow: "1",
      marginBottom: "1px"
    },
    modalContainer: {
      padding: "44px 60px",
      marginTop: "48px",
      marginBottom: "48px"
    },
    naming: {
      color: "rgba(0, 0, 0, 0.54)",
      marginBottom: "40px"
    },
    payCard: {
      width: "300px",
      height: "189px",
      position: "relative",
      paddingTop: "16px",
      paddingLeft: "32px",
      paddingRight: "32px",
      paddingBottom: "16px"
    },
    payBox: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    },
    mcLogo: {
      top: "8px",
      right: "8px",
      width: "32px",
      position: "absolute"
    }
  });

  const classes = useStyles();

  return (
    <Paper className="profile-root" elevation={0}>
      <Grid
        container
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}
      >
        <Grid>
          <Paper className={classes.modalContainer} elevation={1}>
            <Typography
              className={classes.formButton}
              align="center"
              variant="h4"
              component="h1"
              gutterBottom
            >
              Профиль
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              align="center"
              className={classes.naming}
            >
              Способ оплаты
            </Typography>
            <form onSubmit={handleCardSubmit}>
              <Grid container alignContent="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={4}
                    justify="center"
                    className={classes.formContainer}
                  >
                    <Grid item xs={6}>
                      <Paper className={classes.payCard} elevation={1}>
                        <Box className={classes.payBox}>
                          <MCIcon />
                          <FormControl>
                            <InputLabel htmlFor="component-error">
                              Номер карты
                            </InputLabel>
                            <Input
                              onChange={handleCardNumberChange}
                              id="component-error"
                              placeholder="0000 0000 0000 0000"
                              value={cardNumber}
                            />
                            <FormHelperText id="component-error-text">
                              Это обязательное поле
                            </FormHelperText>
                          </FormControl>
                          <FormControl fullWidth>
                            <InputLabel>Срок действия</InputLabel>
                            <Input
                              onChange={handleExpiryDateChange}
                              value={expiryDate}
                              format="MM/yy"
                              placeholder="02/20"
                            ></Input>
                            <FormLabel></FormLabel>
                          </FormControl>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.payCard} elevation={3}>
                        <Box className={classes.payBox}>
                          <FormControl fullWidth>
                            <InputLabel>Имя владельца</InputLabel>
                            <Input
                              onChange={handleCardNameChange}
                              value={cardName}
                              placeholder="USER NAME"
                            />
                            <FormHelperText>
                              Это обязательное поле
                            </FormHelperText>
                          </FormControl>
                          <FormControl fullWidth>
                            <InputLabel>CVC</InputLabel>
                            <Input
                              onChange={handleCVCChange}
                              value={cvc}
                              placeholder="CVC"
                            ></Input>
                            <FormHelperText>
                              Это обязательное поле
                            </FormHelperText>
                          </FormControl>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        value="submit"
                        variant="contained"
                        color="primary"
                      >
                        Сохранить
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    creditCardSubmit: creditCardData => {
      dispatch(creditCardSubmit(creditCardData));
    }
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Profile));
