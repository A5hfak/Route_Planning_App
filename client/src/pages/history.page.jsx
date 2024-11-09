import React from "react";
import { useNavigate } from "react-router-dom";
import routeData from "../data/routeData";
import { Row, Col } from "react-bootstrap";

import {
  ArrowIcon,
  HistoryPanelContainer,
  PreviousRoutesContainer,
  RepeatIcon,
  ReplanButton,
  RouteCardContainer,
  RouteDetails,
  RouteFrom,
  RouteInfo,
  RouteTime,
  RouteTo,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
} from "../styles";
import { MapComponent } from "../components";

const getUniqueRoutes = (data) => {
  const uniqueRoutes = new Map();
  data.forEach((route) => {
    if (!uniqueRoutes.has(route.id)) {
      uniqueRoutes.set(route.id, route);
    }
  });
  return Array.from(uniqueRoutes.values());
};

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71e00a6c7663350f98a5c48af60a3345537cd40740ffb7ae3cedf1bdf720f1f7?placeholderIfAbsent=true&apiKey=d36cc05a5b1a4bb7ba5cb2a47e3af8f3"
        alt="Search Icon"
      />
      <SearchInput
        type="text"
        placeholder="Search..."
        aria-label="Search past routes"
      />
    </SearchBarContainer>
  );
};

const RouteCard = ({ id, from, to, date }) => {
  const navigate = useNavigate();

  const handleReplanClick = () => {
    navigate(`/route/${id}`);
  };

  return (
    <RouteCardContainer>
      <RouteInfo>
        <RouteDetails>
          <RouteFrom>{from}</RouteFrom>
          <ArrowIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0254ddf482c48f80dca6513413d0fd20da46634778c604ead30814fc4f6c0883?placeholderIfAbsent=true&apiKey=d36cc05a5b1a4bb7ba5cb2a47e3af8f3"
            alt="Arrow Icon"
          />
          <RouteTo>{to}</RouteTo>
        </RouteDetails>
        <RouteTime>{date}</RouteTime>
      </RouteInfo>
      <ReplanButton onClick={handleReplanClick}>
        <RepeatIcon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27471eced6f7aa7f3a3d83291c15d3bc26f09a5ba121bd375ca24d70ca9833ad?placeholderIfAbsent=true&apiKey=d36cc05a5b1a4bb7ba5cb2a47e3af8f3"
          alt="Replan Icon"
        />
        Replan
      </ReplanButton>
    </RouteCardContainer>
  );
};

const HistoryPanel = () => {
  const uniqueRoutes = getUniqueRoutes(routeData);

  return (
    <div style={{ padding: "20px" }}>
      <Row className="mb-0">
        <Col>
          <HistoryPanelContainer>
            <SearchBar />
            <PreviousRoutesContainer>
              {uniqueRoutes.length === 0 ? (
                <p>
                  No routes available. Please try searching or creating new
                  routes.
                </p>
              ) : (
                uniqueRoutes.map((route) => (
                  <RouteCard
                    key={route.id}
                    id={route.id}
                    from={route.from}
                    to={route.to}
                    date={route.date}
                    distance={route.distance}
                    time={route.time}
                    icon={route.icon}
                    transportMode={route.transportMode}
                  />
                ))
              )}
            </PreviousRoutesContainer>
          </HistoryPanelContainer>
        </Col>
        <Col>
          <div>
            <MapComponent />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HistoryPanel;
