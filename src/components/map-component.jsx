import React from "react";
import { StyledCard } from "../styles/index";

const MapComponent = () => {
  return (
    <>
      <StyledCard width="100%" height="200px">
        <StyledCard.Body>
          <StyledCard.Title>map component</StyledCard.Title>
          <StyledCard.Subtitle className="mb-2 text-muted">
            map component
          </StyledCard.Subtitle>
          <StyledCard.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </StyledCard.Text>
          <StyledCard.Link href="#">Card Link 2</StyledCard.Link>
          <StyledCard.Link href="#">Another Link 2</StyledCard.Link>
        </StyledCard.Body>
      </StyledCard>
    </>
  );
};

export default MapComponent;
