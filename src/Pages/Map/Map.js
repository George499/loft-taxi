import React, { useState, useEffect, useRef } from "react";
import "./Map.scss";
import Select from "react-select";
import mapboxgl from "mapbox-gl";
import { Paper, Grid, Form, FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import newAddressList from "../../Components/PrivateRoute/index";
import {
  getCoordinatesRequest,
  getAddressListRequest
} from "../../Redux/Actions/Actions";
import { connect } from "react-redux";

const Map = props => {
  const { adressList, getAddressListRequest, getCoordinatesRequest } = props;

  let mapRef = useRef(null);

  useEffect(() => {
    getAddressListRequest();
    const map = new mapboxgl.Map({
      accessToken:
        "pk.eyJ1IjoiZ2VvcmdlaXNhZXYiLCJhIjoiY2s1ejZtM2ppMDZ2NTNncWpjcmgyMnR5NSJ9.fxa6wtBm8oLF6UNVsQeJMQ",
      container: mapRef.current,
      center: [37.6174943, 55.7504461],
      zoom: 10,
      style: "mapbox://styles/georgeisaev/ck5z7ctu17adp1inwpu37v147",
      dragRotate: false
    });
    return () => {
      map.remove();
    };
  }, [getAddressListRequest]);

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
    getCoordinatesRequest(addressRouts);
  };

  const classes = useStyles();

  return (
    <div style={{ position: "relative", zIndex: "-10" }}>
      <div ref={mapRef} className="map-wrapper"></div>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Вызвать такси
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { adressList: state.addressList };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddressListRequest: () => dispatch(getAddressListRequest()),
    getCoordinatesRequest: () => dispatch(getCoordinatesRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
