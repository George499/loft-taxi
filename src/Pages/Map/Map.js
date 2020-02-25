import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCoordinatesRequest,
  getAddressListRequest,
  getChosenAdress,
  clearRoutes
} from "../../Redux/Actions/Actions";
import mapboxgl from "mapbox-gl";
import "./Map.scss";
import { Paper, Grid, FormControl, Button } from "@material-ui/core";
import Select from "react-select";
import newAddressList from "../../Components/PrivateRoute/index";

class Map extends Component {
  constructor(props) {
    super(props);

    // {
    //   adressList,
    //   getAddressListRequest,
    //   getCoordinatesRequest,
    //   getChosenAdress,
    //   orderCoords,
    //   clearRoutes
    // };

    this.state = {
      fetchedAdressess: newAddressList(props.adressList),
      address1: "Город",
      address2: "Город"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let addressRouts = {
      address1: this.state.address1,
      address2: this.state.address2
    };
    console.log(this.state);

    this.props.getChosenAdress(addressRouts);
    this.props.getCoordinatesRequest(addressRouts);
  };
  handleFirstAdress = () => {
    this.setState({ address1: this.address1.value });
  };
  handleSecondAdress = () => {
    this.setState({ address2: this.address2 });
  };

  map = null;
  mapRef = React.createRef();

  renderRoute = () => {
    const { orderCoords } = this.props;
    this.map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {
            color: "#ffc617"
          },
          geometry: {
            type: "LineString",
            coordinates: orderCoords
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-width": 6,
        "line-color": "#ffc617"
      }
    });

    this.map.flyTo({
      center: orderCoords[0],
      zoom: 12
    });
  };

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL;
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      center: [30.27, 60],
      zoom: 12,
      accessToken:
        "pk.eyJ1IjoiZ2VvcmdlaXNhZXYiLCJhIjoiY2s1ejZtM2ppMDZ2NTNncWpjcmgyMnR5NSJ9.fxa6wtBm8oLF6UNVsQeJMQ",
      style: "mapbox://styles/georgeisaev/ck5z7ctu17adp1inwpu37v147"
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { addressCoordinates } = this.props;

      if (this.map.getLayer("route")) {
        this.map.removeLayer("route");
        this.map.removeSource("route");
      }

      if (addressCoordinates && addressCoordinates.length > 0) {
        this.renderRoute();
      }
    }
  }
  componentWillUnmount() {
    this.map.remove();
    this.props.removeCoordinatesMap();
  }

  render() {
    console.log(this.state.address1.value);

    return (
      <div style={{ position: "relative", zIndex: "-10" }}>
        <div ref={this.mapRef} className="map-wrapper"></div>
        <form onSubmit={this.handleSubmit}>
          <Paper className="mapModal" elevation={1}>
            <Grid container>
              <Grid item xs={12} style={{ marginBottom: "30px" }}>
                <FormControl fullWidth>
                  <label className="modalInput">Откуда</label>
                  <Select
                    value={this.state.address1}
                    placeholder="Выбрать маршрут..."
                    onChange={this.handleFirstAdress}
                    className="basic-single"
                    classNamePrefix="select"
                    options={this.state.fetchedAdressess}
                    isClearable
                    isSearchable
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} style={{ marginBottom: "30px" }}>
                <FormControl fullWidth>
                  <label className="modalInput">Куда</label>
                  <Select
                    value={this.state.address2}
                    placeholder="Выбрать маршрут..."
                    onChange={this.handleSecondAdress}
                    className="basic-single"
                    classNamePrefix="select"
                    options={this.state.fetchedAdressess}
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
  }
}
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
