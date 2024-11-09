import React from "react";
import { Row, Col } from "react-bootstrap";
import { Tables, MapComponent, RoutePlanning } from "../components";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Row className="mb-0">
        <Col>
          <RoutePlanning />
        </Col>
        <Col>
          <MapComponent />
        </Col>
      </Row>
      <Row className="mb-0">
        <Col>
          <Tables />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
