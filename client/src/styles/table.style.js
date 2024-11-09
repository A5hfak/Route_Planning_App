// src/styles/index.js
import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;   /* Ensure borders are collapsed for seamless attachment */
  border: 2px solid #B2A0F3;   /* Same border as the h3 */
  border-top: none;            /* Remove top border to attach to the h3 */
  background-color: #ffffff;
  th, td {
    border: 1px solid #B2A0F3; /* Internal table cell borders */
    padding: 8px;
    text-align: left;
  }
`;
export const StyledTableHeader = styled.th`
  background-color: #B2A0F3;
  color: black;
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const StyledTableData = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

export const StyledH3 = styled.h3`
  border: 2px solid #B2A0F3;  /* Same border color as the table */
  border-bottom: none;        /* Remove the bottom border to attach to the table */
  padding: 10px;
  text-align: left;            /* Align text to the left */
  font-size: 1.5rem;
  color: black;
  background-color: #f9f9f9;   /* Optional: Add a light background */
  border-radius: 5px 5px 0 0;  /* Rounded corners only at the top */
  width: 100%;
  margin: 0;                   /* Remove margin to ensure it attaches to the table */
`;
