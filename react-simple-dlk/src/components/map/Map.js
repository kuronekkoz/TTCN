import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 21.027763, lng: 105.83416 }}
      ></GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
