import { Button, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledTitle = styled.h1`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
  color: #260124;
`;

export const StyledButton = styled(Button)`
  && {
    font-family: 'Playfair Display, serif';
    color: #9a2c93;
  }
`;

export const StyledButtonBlock = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;  
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: red;
  transition: color 0.3s ease;
  font-family: 'Playfair Display, serif';
`;

export const StyledIcon = styled(ListItemIcon)`
  justify-content: center;
  margin-bottom: 20px;
`;
