import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import styled from "styled-components";
import { StyledCard, StyledMapContainer } from "../styles";

// Fix for marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapComponent = () => {
  return (
    <StyledCard width="100%" height="200px">
      <StyledMapContainer>
        <MapContainer
          center={[61.4978, 23.7608]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "25rem", width: "%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[61.4978, 23.7608]}>
            <Popup>Tampere, Finland</Popup>
          </Marker>
        </MapContainer>
      </StyledMapContainer>
    </StyledCard>
  );
};

export default MapComponent;
