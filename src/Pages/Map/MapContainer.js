import React, { Component } from "react";
import { connect } from "react-redux";
import {
  clearRoutes,
  getAddressListRequest
} from "../../Redux/Actions/Actions";
import mapboxgl from "mapbox-gl";
import "./Map.scss";

class Map extends Component {
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
      zoom: 11
    });
  };

  componentDidMount() {
    const { getAddressListRequest } = this.props;
    getAddressListRequest();
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
      const { orderCoords } = this.props;

      if (this.map.getLayer("route")) {
        this.map.removeLayer("route");
        this.map.removeSource("route");
      }

      if (orderCoords && orderCoords.length > 0) {
        this.renderRoute();
      }
    }
  }
  componentWillUnmount() {
    this.map.remove();
    this.props.clearRoutes();
  }

  render() {
    return <div ref={this.mapRef} className="map-wrapper"></div>;
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
    clearRoutes: () => dispatch(clearRoutes()),
    getAddressListRequest: () => dispatch(getAddressListRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
