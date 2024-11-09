import React from "react";
import { SmallCard, SmallCardTitle, SmallCardValue } from "../styles/weather";

const WeatherDetailsSection = ({ weatherData }) => (
  <div
    className=""
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div style={{ width: "100%", maxWidth: "500px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <SmallCard style={{ flex: "1", padding: "30px", fontSize: "1.1em" }}>
            <SmallCardTitle>Humidity</SmallCardTitle>
            <SmallCardValue>{weatherData.humidity}</SmallCardValue>
          </SmallCard>
          <SmallCard style={{ flex: "1", padding: "30px", fontSize: "1.1em" }}>
            <SmallCardTitle>Visibility</SmallCardTitle>
            <SmallCardValue>{weatherData.visibility}</SmallCardValue>
          </SmallCard>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <SmallCard style={{ flex: "1", padding: "30px", fontSize: "1.1em" }}>
            <SmallCardTitle>Sunrise</SmallCardTitle>
            <SmallCardValue>{weatherData.sunrise}</SmallCardValue>
          </SmallCard>
          <SmallCard style={{ flex: "1", padding: "30px", fontSize: "1.1em" }}>
            <SmallCardTitle>Sunset</SmallCardTitle>
            <SmallCardValue>{weatherData.sunset}</SmallCardValue>
          </SmallCard>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherDetailsSection;
