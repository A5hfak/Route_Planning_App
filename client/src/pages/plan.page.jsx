import React from "react";
import { StyledCard } from "../styles/index";
import { FaQuestionCircle } from "react-icons/fa";

const PlanPage = () => {
  return (
    <StyledCard
      width="100%"
      height="200px"
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
          There are no new plans
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            <FaQuestionCircle style={{ fontSize: "1.5rem", color: "black" }} />
          </div>
        </StyledCard.Text>
      </StyledCard.Body>
    </StyledCard>
  );
};

export default PlanPage;
