import styled from "styled-components";
export const StyledMapContainer = styled.div`
height: 500px;
width: 100%;
// position: relative;

@media (max-width: 1400px) {
  height: 100px;
  width: 100%;
}

@media (max-width: 480px) {
  height: 400px; /* Adjust map height for mobile size */
}
`;