import React, { useState, useEffect } from "react";
import {
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableData,
  StyledH3,
} from "../styles";

const Tables = () => {
  // State to hold the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Update the date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      {/* Dynamic h3 displaying current date and time */}
      <StyledH3>
        {currentDateTime.toLocaleDateString()} -{" "}
        {currentDateTime.toLocaleTimeString()}
      </StyledH3>

      {/* Table */}
      <StyledTable>
        <thead>
          <StyledTableRow>
            <StyledTableHeader>#</StyledTableHeader>
            <StyledTableHeader>Source</StyledTableHeader>
            <StyledTableHeader>Destination</StyledTableHeader>
            <StyledTableHeader>Distance</StyledTableHeader>
          </StyledTableRow>
        </thead>
        <tbody>
          <StyledTableRow>
            <StyledTableData>1</StyledTableData>
            <StyledTableData>New York</StyledTableData>
            <StyledTableData>Los Angeles</StyledTableData>
            <StyledTableData>3,941 km</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>2</StyledTableData>
            <StyledTableData>Chicago</StyledTableData>
            <StyledTableData>Houston</StyledTableData>
            <StyledTableData>1,742 km</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>3</StyledTableData>
            <StyledTableData>San Francisco</StyledTableData>
            <StyledTableData>Seattle</StyledTableData>
            <StyledTableData>1,298 km</StyledTableData>
          </StyledTableRow>
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Tables;
