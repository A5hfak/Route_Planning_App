import styled from 'styled-components';

export const HistoryPanelContainer = styled.div`
position: absolute;
top: 80px;
left: 110px;
width: 350px;
background-color: #f7f0ff;
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 15px;
overflow-y: auto;
`;


export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SearchIcon = styled.img`
width: 17px;
height: 17px;
margin-right: 10px;
`;

export const SearchInput = styled.input`
flex-grow: 1;
border: none;
outline: none;
font-size: 14px;
color: #333;
`;
export const PreviousRoutesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const RouteCardContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 10px;
background-color: #eae7ff;
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
position: relative;
`;

export const RouteInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const RouteDetails = styled.div`
display: flex;
align-items: center;
gap: 2px;
`;
export const RouteFrom = styled.span`
font-weight: bold;
font-size: 16px;
color: #333;
`;

export const RouteTo = styled(RouteFrom)``; // Same style as RouteFrom

export const ArrowIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 2px;
`;

export const RouteTime = styled.span`
  font-size: 12px;
  color: #555;
  text-align: right;
  align-self: flex-start;
  margin-top: 3px;
`;

export const ReplanButton = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #8967b3;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  border: none;
  cursor: pointer;
`;

export const RepeatIcon = styled.img`
  width: 17px;
  height: 17px;
`;

export const MapPlaceholder = styled.div`
  margin-top: 20px;
  height: 200px;
  background-color: #ddd;
  border-radius: 8px;
`;
