import styled from "styled-components";

export const WeatherPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch; 
  justify-content: center;
  min-height: 100vh;
  background-color: #CDC1FF;
  padding: 20px;
  gap: 20px; 
`;

export const LeftContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const RightContainer = styled(LeftContainer)``;

export const LocationInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  outline: none;
  margin-bottom: 20px;
`;

export const WeatherIcon = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 10px;
`;

export const DayText = styled.h3`
  font-size: 1.2rem;
  margin: 5px 0;
  color: #555;
`;

export const TimeText = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
`;

export const DividerLine = styled.hr`
  width: 100%;
  border: 0.5px solid #ccc;
  margin: 15px 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DetailIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const DetailText = styled.p`
  font-size: 1rem;
  color: #333;
`;

export const ForecastUpdateContainer = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
  width: 40rem;
  margin-bottom: 20px;
 
`;

export const ForecastUpdateText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0; // Remove default margin
`;

export const SmallCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const SmallCardTitle = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

export const SmallCardValue = styled.p`
  font-size: 1.6rem;
  color: #333;
  font-weight: bold;
`;

export const HumidityContainer = styled(SmallCard)``;
export const VisibilityContainer = styled(SmallCard)``;
export const SunriseContainer = styled(SmallCard)``;
export const SunsetContainer = styled(SmallCard)``; 
