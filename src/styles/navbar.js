import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";

export const CustomNavLink = styled(Nav.Link)`
  font-size: 2.25rem;
  // padding: 15px;
  color: white;

  &:hover {
    color: #ffc107;
  }
`;

export const CustomNavbar = styled.nav`
  background-color: #bc8bf8 !important;
`;
export const StyledNavbar = styled(Navbar)`
  position: fixed;
  width: 100%;
  background-color: #bc8bf8;
  z-index: 1000;
`;
