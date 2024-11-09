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
export const StyledButtonRoute = styled(Button)`
  background-color: #B2A0F3;
  width: 14.5rem;  
  color: black;
  font-size: 1rem;  
  padding: 5px 10px;  
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  margin:auto;
  align-items: center;
  justify-content: center;
  gap: 8px;  

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
  background-color: transparent;         
  border: none;
  border-radius: 5px;
  color: #4b4b4b;                        
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;                     
  font-size: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);  
  transition: all 0.3s ease;            

  &:hover {
    color: #333;                         
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25); 
    transform: translateY(-2px);         
  }

  &:active {
    transform: translateY(0);           
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2); 
  }

  @media (max-width: 768px) {
    padding: 6px 12px;                   
    font-size: 0.9rem;                   
  }
`;