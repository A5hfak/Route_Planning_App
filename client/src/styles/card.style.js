import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const StyledCard = styled(Card)`
  width: ${({ width }) => width || "28rem"};  
  height: ${({ height }) => height || "auto"}; 

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 80%; /
    height: 250px; 
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 90%; 
    height: 400px; 
  }

  @media (min-width: 1201px) {
    width: 34rem; 
    height: 400px;
  }
  @media (min-width: 1500px) {
    width: 54rem; 
    height: 650px; 
  }
`;


// New styled component based on Card
export const OutputComponentStyle = styled(Card)`
  width: ${({ width }) => width || "50rem"}; 
  height: ${({ height }) => height || "auto"};

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 90%; 
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 99%; 
  }

  @media (min-width: 1201px) {
    width: 99%; 
    height: 350px; 
  }
`;