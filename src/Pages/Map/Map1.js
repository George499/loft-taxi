import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} from "react";
import "./Map.scss";
import Select from "react-select";
import mapboxgl from "mapbox-gl";
import { Paper, Grid, FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import newAddressList from "../../Components/PrivateRoute/index";
import PropTypes from "prop-types";
import {
  getCoordinatesRequest,
  getAddressListRequest,
  getChosenAdress,
  clearRoutes
} from "../../Redux/Actions/Actions";
import { connect } from "react-redux";

const Map = props => {
  const {
    adressList,
    getAddressListRequest,
    getCoordinatesRequest,
    getChosenAdress,
    orderCoords,
    clearRoutes
  } = props;

  Map.propTypes = {
    orderCoords: PropTypes.array,
    adressList: PropTypes.array
  };

  const classes = makeStyles({
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
  // const [mapState] = useState({
  //   lng: 30.27,
  //   lat: 60,
  //   zoom: 12,
  //   accessToken:
  //     "pk.eyJ1IjoiZ2VvcmdlaXNhZXYiLCJhIjoiY2s1ejZtM2ppMDZ2NTNncWpjcmgyMnR5NSJ9.fxa6wtBm8oLF6UNVsQeJMQ",
  //   style: "mapbox://styles/georgeisaev/ck5z7ctu17adp1inwpu37v147"
  // });

  const coords = useMemo(() => {
    return orderCoords;
  }, [orderCoords]);

  let mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const renderRoute = useCallback(() => {
    if (map) {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {
              color: "#F7455D"
            },
            geometry: {
              type: "LineString",
              coordinates: coords
            }
          }
        },
        paint: {
          "line-width": 8,
          "line-color": ["get", "color"]
        }
      });
      map.flyTo({
        center: coords[0]
      });
    }
  }, [map, coords]);

  useEffect(() => {
    getAddressListRequest();
    const initializeMap = ({ setMap, mapRef }) => {
      const map = new mapboxgl.Map({
        container: mapRef.current,
        center: [mapState.lng, mapState.lat],
        zoom: mapState.zoom,
        accessToken: mapState.accessToken,
        style: mapState.style
      });
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapRef });
  }, [map, mapState, getAddressListRequest]);

  useEffect(() => {
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
    if (coords && coords.length > 0) {
      renderRoute();
    }
    if (coords.length > 0) clearRoutes();
    return () => {};
  }, [coords, map, renderRoute, clearRoutes]);
  console.log(coords);

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
  return {
    orderCoords: state.addressCoordinates,
    adressList: state.addressList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddressListRequest: () => dispatch(getAddressListRequest()),
    getCoordinatesRequest: () => dispatch(getCoordinatesRequest()),
    getChosenAdress: addressRouts => dispatch(getChosenAdress(addressRouts)),
    clearRoutes: () => dispatch(clearRoutes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
