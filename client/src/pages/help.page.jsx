import React from "react";
import styled from "styled-components";

const HelpPageContainer = styled.div`
  padding: 0px;
  max-width: 1900px;
  margin: 8px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #000;

  h1,
  h2 {
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const StyledH4 = styled.h4`
  font-style: italic;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
  color: #333;
`;

const BulletList = styled.ul`
  margin-left: 20px;
  list-style-type: disc;

  li {
    margin-bottom: 10px;
  }
`;

const Code = styled.span`
  background-color: #f4f4f4;
  padding: 2px 4px;
  font-family: monospace;
  border-radius: 3px;
`;

const HelpPage = () => {
  return (
    <HelpPageContainer>
      <h1>Route Planner Application</h1>
      <p>
        The Route Planner application is a web-based tool that helps users plan
        and manage their routes efficiently. The project uses a React.js
        frontend with Styled-Components for dynamic styling, and a Spring Boot
        backend for handling API requests and business logic.
        <br />
        <br />
        It provides features like:
      </p>
      <BulletList>
        <li>Displaying routes on a map</li>
        <li>User profile management</li>
        <li>Tracking the history of routes</li>
        <li>Weather forecasts for planned routes</li>
      </BulletList>
      <br />
      <h2>Project Structure</h2>
      <StyledH4>Frontend (React)</StyledH4>
      <p>This project is structured as a full-stack application:</p>
      <BulletList>
        <li>
          <strong>React.js</strong>: Core frontend technology for building user
          interfaces
        </li>
        <li>
          <strong>Styled-Components</strong>: For CSS-in-JS styling
        </li>
        <li>
          <strong>React Router</strong>: For navigation and routing
        </li>
        <li>
          <strong>Axios</strong>: For API communication between frontend and
          backend
        </li>
      </BulletList>
      <StyledH4>Backend (Spring Boot)</StyledH4>
      <p>
        The backend is built with Spring Boot (Java), handling route planning
        logic, user history, and other backend operations.
      </p>
      <StyledH4>Key Features</StyledH4>
      <BulletList>
        <li>
          <strong>Route Planning</strong>: Users can plan and visualize their
          routes using a map interface powered by React-Leaflet.
        </li>
        <li>
          <strong>User Profiles</strong>: Manage user profiles, including
          settings and preferences.
        </li>
        <li>
          <strong>Route History</strong>: Track past routes, stored in the
          backend, and accessible through the History page.
        </li>
        <li>
          <strong>Weather Forecast</strong>: Provides weather updates using an
          external API to help users plan routes based on weather conditions.
        </li>
      </BulletList>
      {/* <h2>Project Structure</h2>
      <h3>Frontend (React)</h3>
      <BulletList>
        <li>
          <strong>src/components</strong>: Contains reusable components like
          Sidebar, History Panel, and Route Box.
        </li>
        <li>
          <strong>src/styles</strong>: Defines styled-components for handling
          CSS-in-JS.
        </li>
        <li>
          <strong>src/pages</strong>: Handles different views like History and
          Route Plans.
        </li>
        <li>
          <strong>src/App.js</strong>: The main entry point for rendering
          components and routing.
        </li>
        <li>
          <strong>package.json</strong>: Contains dependencies and scripts for
          running the React app.
        </li>
      </BulletList>
      <h3>Backend (Spring Boot)</h3>
      <BulletList>
        <li>
          <strong>src/main/java/com/example</strong>: Contains Java files for
          Spring Boot controllers, services, and models.
        </li>
        <li>
          <strong>pom.xml</strong>: Defines dependencies and plugins for
          building and running the Spring Boot project.
        </li>
        <li>
          <strong>src/main/resources/application.properties</strong>: Configures
          backend settings like database connections and server properties.
        </li>
      </BulletList> */}
      <h3>Available Scripts</h3>
      <StyledH4>Frontend (React)</StyledH4>
      <BulletList>
        <li>
          <Code>npm start</Code>: Starts the React development server on{" "}
          <Code>http://localhost:3000</Code>.
        </li>
        <li>
          <Code>npm run build</Code>: Builds the app for production to the{" "}
          <Code>build</Code> folder.
        </li>
        <li>
          <Code>npm test</Code>: Runs the test suite for the frontend using
          Jest.
        </li>
      </BulletList>
      <StyledH4>Backend (Spring Boot)</StyledH4>
      <BulletList>
        <li>
          <Code>mvn spring-boot:run</Code>: Runs the Spring Boot backend server
          on <Code>http://localhost:8080</Code>.
        </li>
        <li>
          <Code>mvn test</Code>: Runs the test suite for the backend.
        </li>
      </BulletList>
    </HelpPageContainer>
  );
};

export default HelpPage;
