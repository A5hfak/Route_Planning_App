// src/styles/index.js
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const StyledButton = styled(Button)`
  background-color: #B2A0F3;  
  width: 29rem;
  color: black;               
  font-size: 1.2rem;         
  padding: 10px 20px;        
  border: none;              
  border-radius: 5px;      
  margin-bottom: 20px;     
  
  &:hover {
    background-color: #a18cb7;
  }
`;

export const StyledInput = styled.input`
  width: 80%;                
  padding: 10px;             
  margin: 10px 0;            
  border: 1px solid #ccc;    
  border-radius: 5px;        
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px; 
`;

export const SourceIcon = styled(FaMapMarkerAlt)`
  color: #007bff; 
  font-size: 1.2rem;
`;

export const DestinationIcon = styled(FaMapMarkerAlt)`
  color: #dc3545;
  font-size: 1.2rem; 
`;

export const StyledSwapButton = styled.button`
background-color: #B2A0F3;
border: none;              
border-radius: 5px;        
color: black;              
cursor: pointer;           
display: flex;             
align-items: center;      
justify-content: center;    
// margin: 0 10px;            

&:hover {
  background-color: #a18cb7; 
}
`;