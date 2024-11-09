import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
 /* Remove the fixed height to allow for content height */
  width: 90vw; /* Full width of the viewport */
  padding: 20px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  display: flex; /* Use flex to align form and image */
  flex-direction: column; /* Stack items vertically on small screens */
  align-items: center; /* Center align for smaller screens */
  
  /* Media query for larger screens */
  @media (min-width: 768px) {
    flex-direction: row; /* Align items in a row on larger screens */
    justify-content: space-between; /* Space between the two containers */
  }
`;

export const ProfileFormContainer = styled.div`
  flex: 1; /* Take up flexible space for the form container */
  padding: 20px; /* Padding around the form */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  margin-right: 20px; /* Space between form and image container */
  height: 100vh; /* Set height to 100% of the viewport */

  @media (min-width: 768px) {
    margin-right: 15px; /* Maintain space between form and image container */
  }

  @media (max-width: 767px) {
    margin-right: 0; /* Remove margin on small screens */
    width: 100%; /* Full width on small screens */
  }
`;


export const MandatoryMessage = styled.p`
   color: red;
  font-weight: bold;
  margin-bottom: 20px; /* Space below the mandatory message */
`;

export const FormContainer = styled.div`
  flex: 0 1 60%; /* Take up 60% of the width and allow to grow/shrink */
  padding-right: 20px; /* Space between form and image */
  display: flex; /* Allow form elements to be flex items */
  flex-direction: column; /* Stack items vertically */
`;

export const ProfileImageContainer = styled.div`
   flex: 0 1 30%; /* Fixed width for the image container */
     display: flex;
  flex-direction: column; /* Stack contents vertically */
  justify-content: space-between; /* Push the button to the bottom */

  text-align: center; /* Center the content */
  padding: 30px; /* Padding around the image container */
  background-color: #ffffff; /* Background for the image container */
//   border-radius: 8px; /* Rounded corners */
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Light shadow for the container */
  height: 100vh; /* Set height to 100% of the viewport */

  @media (max-width: 767px) {
    width: 100%; /* Full width on small screens */
    margin-top: 20px; /* Add margin on top to separate from the form */
  }
`;

export const ProfileImage = styled.img`
  width: 100%; /* Set width of profile image to 100% of its container */
  height: auto; /* Keep aspect ratio */
  max-width: 200px; /* Set maximum width */
  max-height: 200px; /* Set maximum height */
  border-radius: 50%; /* Make it a circle */
  object-fit: cover; /* Cover the area of the image */
  margin-bottom: 10px; /* Space between image and text */
  margin-left: 50px;
`;

export const ProfileText = styled.p`
   margin-top: 10px; /* Space above the text */
  font-size: 16px; /* Increased font size for better readability */
  color: #333; /* Set text color */
flex-grow: 1; /* Allow the text to take available space */

`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column; /* Stack label above input */
  margin-bottom: 20px; /* Increased space between form groups */

  @media (min-width: 600px) {
    flex-direction: row; /* Align horizontally on larger screens */
    align-items: center; /* Align items vertically in the center */
  }
`;

export const Label = styled.label`
 flex: 0 0 150px; /* Fixed width for the label */
  margin-right: 10px; /* Space between label and input */
  font-weight: bold;
  font-size: 16px; /* Increased font size for label */

  /* Append asterisk for mandatory fields */
  &:after {
    content: "${(props) =>
        props.isMandatory ? " *" : ""}"; /* Conditionally render asterisk */
    color: red; /* Red color for asterisk */
  }
`;

export const Input = styled.input`
  flex: 1; /* Allow input to take available space */
  padding: 15px; /* Increased padding for better user experience */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; /* Increased font size for input */
  min-width: 0; /* Allow inputs to shrink as needed */

  &:focus {
    border-color: #7a42f4; /* Custom focus color */
    outline: none;
  }

  /* Highlight mandatory fields */
  &.mandatory {
    border-color: red; /* Red border for mandatory fields */
  }
`;

export const ProfileIcon = styled.img`
  width: 8vw; /* Set size for the icon to be responsive */
  height: 8vw; /* Set size for the icon to be responsive */
  max-width: 40px; /* Set maximum width */
  max-height: 40px; /* Set maximum height */
  margin-bottom: 10px; /* Space between icon and image */
`;

export const SubmitButton = styled.button`
   background-color: #7a42f4; /* Button background color */
  color: white; /* Button text color */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  padding: 15px 20px; /* Increased padding inside the button */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Increased font size for button text */
  margin-top: 20px; /* Space above the button */

  &:hover {
    background-color: #5b31b6; /* Darker color on hover */
  }
`;

export const GeneralInfoContainer = styled.div`
  margin-bottom: 20px; /* Space between containers */
  padding: 20px; /* Padding inside the container */
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px; /* Rounded corners */
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
`;
