import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

//import mapStyles from "../../mapStyles";
import useStyles from "./style.js";

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  const coordination = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8muH9phs4NCfcNnPoHLlp-eXuRU7ASGI" }}
        defaultCenter={coordination}
        center={coordination}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        option={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
