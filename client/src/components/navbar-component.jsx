import React from "react";
import Nav from "react-bootstrap/Nav";
import { FaPlus } from "react-icons/fa";
import { StyledNavbar } from "../styles";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Navbars() {
  const navigate = useNavigate();

  const handleAddNewPlan = () => {
    navigate("/new-plan");
  };

  return (
    <StyledNavbar expand="lg" className="">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Button
                variant="light"
                size="sm"
                style={{ display: "flex", alignItems: "center" }}
                onClick={handleAddNewPlan}
              >
                <FaPlus style={{ color: "black", marginRight: "5px" }} /> Add
                New Plan
              </Button>
            </Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <Nav.Link href="/profile">Settings</Nav.Link>
            <Nav.Link href="/help">
              {/* <StyledLink to="/help" style={{ textDecoration: "" }}> */}
              Help
              {/* </StyledLink> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Navbars;
