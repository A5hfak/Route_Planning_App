import React from "react";
import { ForecastUpdateContainer, ForecastUpdateText } from "../styles/weather";

const ForecastUpdateSection = ({ formattedDate, formattedTime, location }) => (
  <div
    className="bg-light "
    style={{
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    <ForecastUpdateContainer>
      <span>
        <strong>Forecast</strong>
        {"   "}
        Update
      </span>
      <ForecastUpdateText>
        {formattedDate} {formattedTime}
      </ForecastUpdateText>
    </ForecastUpdateContainer>
    <h3 style={{ margin: 0 }}>{location}</h3>
  </div>
);

export default ForecastUpdateSection;
