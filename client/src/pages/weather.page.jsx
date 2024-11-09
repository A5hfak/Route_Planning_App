import React, { useState, useEffect } from "react";
import {
  WeatherPageContainer,
  LeftContainer,
  RightContainer,
  LocationInput,
  WeatherIcon,
  DayText,
  TimeText,
  DetailsContainer,
  DetailIcon,
  DetailText,
} from "../styles/weather";
import { ForecastUpdateSection, WeatherDetailsSection } from "../components/";

const API_KEY = "ef92cd611ae451d1b7efb9cf50002de5";

export const WeatherPage = () => {
  const [location, setLocation] = useState("Tampere");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData({
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        day: new Date(data.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        humidity: `${data.main.humidity}%`,
        visibility: `${data.visibility / 1000} km`,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        cloudIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        rainOrSnow: {
          name: data.weather[0].main,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        },
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <WeatherPageContainer>
      {/* Left Container */}
      <LeftContainer
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        <ForecastUpdateSection
          formattedDate={formattedDate}
          formattedTime={formattedTime}
          location={location}
        />
        {weatherData && <WeatherDetailsSection weatherData={weatherData} />}
      </LeftContainer>

      {/* Right Container */}
      <RightContainer>
        <LocationInput
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleInputChange}
        />
        {weatherData && (
          <div
            style={{ backgroundColor: "#fff", width: "100%", height: "100vh" }}
          >
            <WeatherIcon src={weatherData.icon} alt="Weather Icon" />
            <DayText>{weatherData.day}</DayText>
            <TimeText>{weatherData.time}</TimeText>

            <DetailsContainer>
              <DetailIcon src={weatherData.cloudIcon} alt="Cloud Icon" />
              <DetailText>{weatherData.rainOrSnow.name}</DetailText>
              <DetailIcon src={weatherData.rainOrSnow.icon} alt="Rain Icon" />
              <DetailText>{weatherData.rainOrSnow.name}</DetailText>
            </DetailsContainer>
          </div>
        )}
      </RightContainer>
    </WeatherPageContainer>
  );
};

export default WeatherPage;
