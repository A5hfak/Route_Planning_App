import { Link } from 'react-router-dom';
import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "20px")};
  background-color: #bc8bf8; 
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 1000;

  /* Ensure the sidebar has a minimum width */
  min-width: 90px; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  
  ul {
    padding: 0;
    margin-top: 20px;
  }
`;

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  color: black;
  cursor: pointer;
  margin: 5px 0; 
  background-color: #fff; 

  /* Border and shadow for each item */
  border: 1px solid rgba(0, 0, 0, 0.2); 
  border-radius: 8px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s ease, transform 0.3s ease; 

  &:hover {
    background-color: #495057; 
    transform: translateY(-2px); 
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 10px;
  font-size: 1.5rem; 
  width: ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "38px")};
`;

export const SidebarText = styled.span`
  font-size: 1.1rem;
  display: ${({ $sidebarOpen }) => ($sidebarOpen ? "inline" : "none")};
`;

export const Logout = styled.li`
  margin-top: auto; 
`;

export const SidebarTop = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit; /* Prevents color change on hover */
  }
`;