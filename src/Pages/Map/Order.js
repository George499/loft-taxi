import React, { useState } from "react";
import "./Map.scss";
import Select from "react-select";
import { Paper, Grid, FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import newAddressList from "../../Components/PrivateRoute/index";
import PropTypes from "prop-types";
import {
  getCoordinatesRequest,
  getChosenAdress,
  clearRoutes
} from "../../Redux/Actions/Actions";
import { connect } from "react-redux";

const Order = props => {
  const { adressList, getCoordinatesRequest, getChosenAdress } = props;

  Map.propTypes = {
    orderCoords: PropTypes.array,
    adressList: PropTypes.array
  };

  const useStyles = makeStyles({
    mapModal: {
      maxWidth: "20%",
      padding: "44px 60px",
      marginTop: "48px",
      marginBottom: "48px",
      left: "20px",
      position: "absolute",
      top: "0"
    },
    modalInput: {
      height: "auto",
      display: "flex",
      padding: "0"
    }
  });
  const fetchedAdressess = newAddressList(adressList);
  const [address1, changeAddress1] = useState("Город");
  const [address2, changeAddress2] = useState("Город");

  const handleSubmit = e => {
    e.preventDefault();
    let addressRouts = {
      address1: address1.value,
      address2: address2.value
    };
    getChosenAdress(addressRouts);
    getCoordinatesRequest(addressRouts);
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.mapModal} elevation={1}>
        <Grid container>
          <Grid item xs={12} style={{ marginBottom: "30px" }}>
            <FormControl fullWidth>
              <label className={classes.modalInput}>Откуда</label>
              <Select
                value={address1}
                placeholder="Выбрать маршрут..."
                onChange={changeAddress1}
                className="basic-single"
                classNamePrefix="select"
                options={fetchedAdressess}
                isClearable
                isSearchable
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "30px" }}>
            <FormControl fullWidth>
              <label className={classes.modalInput}>Куда</label>
              <Select
                value={address2}
                placeholder="Выбрать маршрут..."
                onChange={changeAddress2}
                className="basic-single"
                classNamePrefix="select"
                options={fetchedAdressess}
                isClearable
                isSearchable
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Вызвать такси
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    orderCoords: state.addressCoordinates,
    adressList: state.addressList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCoordinatesRequest: () => dispatch(getCoordinatesRequest()),
    getChosenAdress: addressRouts => dispatch(getChosenAdress(addressRouts)),
    clearRoutes: () => dispatch(clearRoutes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
