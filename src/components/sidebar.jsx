import React, { useState } from "react";
import { FaUser, FaHistory, FaRoute } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { BurgerButton, SidebarContainer, SidebarIcon } from "../styles";
import { SidebarItem, SidebarText, SidebarTop, Overlay } from "../styles";
import { FaDownload, FaCloudSun, FaSignOutAlt, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <SidebarContainer sidebarOpen={sidebarOpen}>
        <SidebarTop>
          <BurgerButton onClick={toggleSidebar}>
            <FaBars />
          </BurgerButton>
        </SidebarTop>

        {/* Sidebar buttons */}
        <ul className="list-unstyled">
          <SidebarItem sidebarOpen={sidebarOpen}>
            <SidebarIcon>
              <FaUser />
            </SidebarIcon>
            <SidebarText $sidebarOpen={sidebarOpen}>Profile</SidebarText>
          </SidebarItem>

          <SidebarItem $sidebarOpen={sidebarOpen}>
            <SidebarIcon>
              <FaHistory />
            </SidebarIcon>
	    <Link to="/history">
            <SidebarText $sidebarOpen={sidebarOpen}>History</SidebarText>
	    </Link>
          </SidebarItem>

          <SidebarItem $sidebarOpen={sidebarOpen}>
            <SidebarIcon>
              <FaRoute />
            </SidebarIcon>
            <SidebarText $sidebarOpen={sidebarOpen}>Route Plans</SidebarText>
          </SidebarItem>

          <SidebarItem $sidebarOpen={sidebarOpen}>
            <SidebarIcon>
              <FaDownload />
            </SidebarIcon>
            <SidebarText $sidebarOpen={sidebarOpen}>Download</SidebarText>
          </SidebarItem>

          <SidebarItem $sidebarOpen={sidebarOpen}>
            <SidebarIcon>
              <FaCloudSun />
            </SidebarIcon>
            <SidebarText $sidebarOpen={sidebarOpen}>Weather</SidebarText>
          </SidebarItem>
        </ul>

        {/* Logout button at the bottom */}
        <SidebarItem $sidebarOpen={sidebarOpen} style={{ marginTop: "auto" }}>
          <SidebarIcon>
            <FaSignOutAlt />
          </SidebarIcon>
          <SidebarText $sidebarOpen={sidebarOpen}>Logout</SidebarText>
        </SidebarItem>
      </SidebarContainer>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <Overlay onClick={toggleSidebar} />}
    </>
  );
};

export default Sidebar;
