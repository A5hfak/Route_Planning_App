import React from "react";
import { Row, Col } from "react-bootstrap";
import { MapComponent } from "./index";
import { PlanPage } from "../pages";

const ParentComponent = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Row className="mb-0">
        <Col>
          <PlanPage />
        </Col>
        <Col>
          <MapComponent />
        </Col>
      </Row>
      <Row className="mb-0">
      </Row>
    </div>
  );
};

export default ParentComponent;
