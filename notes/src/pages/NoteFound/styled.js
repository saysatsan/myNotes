import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledNoteFound = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;

export const StyledImg = styled.img`
  width: 300px;
  height: auto;
`;

export const StyledP = styled.p`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: red;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  && {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: green;
    text-align: center;
  }
`;
