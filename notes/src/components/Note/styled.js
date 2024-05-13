import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Button)`
  && {
    font-family: 'Playfair Display, serif';
    color: #9a2c93;
  }
`;

export const StyledLink = styled(Link)` 
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: green;
  }
`;
