import React, { useState } from "react";
import { BurgerButton, SidebarIcon } from "../styles";
import { SidebarContainer, StyledLink } from "../styles";
import { FaUser, FaHistory, FaRoute } from "react-icons/fa";
import { SidebarItem, SidebarText, SidebarTop, Overlay } from "../styles";
import {
  FaDownload,
  FaCloudSun,
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
} from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <SidebarContainer sidebarOpen={sidebarOpen}>
        <SidebarTop>
          <BurgerButton onClick={toggleSidebar}>
            <FaBars />
          </BurgerButton>
        </SidebarTop>

        <ul className="list-unstyled">
          <Nav.Link href="/profile">
            <SidebarItem sidebarOpen={sidebarOpen}>
              <SidebarIcon>
                <FaUser />
              </SidebarIcon>
              <SidebarText $sidebarOpen={sidebarOpen}>Profile</SidebarText>
            </SidebarItem>
          </Nav.Link>

          <Nav.Link href="/history">
            <SidebarItem $sidebarOpen={sidebarOpen}>
              <SidebarIcon>
                <FaHistory />
              </SidebarIcon>
              <SidebarText $sidebarOpen={sidebarOpen}>History</SidebarText>
            </SidebarItem>
          </Nav.Link>

          <Nav.Link href="/routeplan">
            {/* <StyledLink to="/routeplan"> */}
            <SidebarItem $sidebarOpen={sidebarOpen}>
              <SidebarIcon>
                <FaRoute />
              </SidebarIcon>
              <SidebarText $sidebarOpen={sidebarOpen}>Route Plans</SidebarText>
            </SidebarItem>
          </Nav.Link>
          {/* </StyledLink> */}

          <SidebarItem $sidebarOpen={sidebarOpen}>
            <SidebarIcon>
              <FaDownload />
            </SidebarIcon>
            <SidebarText $sidebarOpen={sidebarOpen}>Download</SidebarText>
          </SidebarItem>

          <StyledLink to="/weather">
            <SidebarItem $sidebarOpen={sidebarOpen}>
              <SidebarIcon>
                <FaCloudSun />
              </SidebarIcon>
              <SidebarText $sidebarOpen={sidebarOpen}>Weather</SidebarText>
            </SidebarItem>
          </StyledLink>
        </ul>

        <SidebarItem
          $sidebarOpen={sidebarOpen}
          style={{ marginTop: "auto" }}
          onClick={handleLoginLogout}
        >
          <SidebarIcon>
            {isLoggedIn ? <FaSignOutAlt /> : <FaSignInAlt />}
          </SidebarIcon>
          <SidebarText $sidebarOpen={sidebarOpen}>
            {isLoggedIn ? "Logout" : "Login"}
          </SidebarText>
        </SidebarItem>
      </SidebarContainer>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <Overlay onClick={toggleSidebar} />}
    </>
  );
};

export default Sidebar;
