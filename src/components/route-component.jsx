// src/components/RoutePlanning.jsx
import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { SourceIcon, StyledSwapButton } from "../styles/index";
import { DestinationIcon, IconContainer } from "../styles/index";
import { StyledButton, StyledCard, StyledInput } from "../styles/index";

const RoutePlanning = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  // Function to handle the swap
  const handleSwap = () => {
    setSource(destination);
    setDestination(source);
  };

  return (
    <div>
      <StyledCard
        width="100%"
        height="auto"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <StyledCard.Body>
          <StyledCard.Text className="mt-3">
            <StyledButton variant="primary">ROUTE PLANNING</StyledButton>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <FaQuestionCircle
                style={{ fontSize: "1.5rem", color: "black" }}
              />
            </div>
          </StyledCard.Text>

          {/* Source Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <IconContainer>
              <SourceIcon />
            </IconContainer>
            <StyledInput
              type="text"
              placeholder="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>

          {/* Swap Button Container */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <StyledSwapButton
              onClick={handleSwap}
              style={{
                backgroundColor: "#B2A0F3",
                border: "none",
                borderRadius: "5px",
                color: "black",
                cursor: "pointer",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaExchangeAlt style={{ marginRight: "5px" }} />
            </StyledSwapButton>
          </div>

          {/* Destination Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <IconContainer>
              <DestinationIcon />
            </IconContainer>
            <StyledInput
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)} // Update destination state
            />
          </div>
        </StyledCard.Body>
      </StyledCard>
    </div>
  );
};

export default RoutePlanning;
