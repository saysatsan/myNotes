import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledImg, StyledNoteFound, StyledP } from './styled';

const NoteFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledNoteFound>
      <StyledImg src='/static/images/404.jpg' alt="ImageNoteFound" />
      <StyledP>Sorry, the page you are looking for doesn`t exist or has been removed.</StyledP>
      <StyledButton color="secondary" onClick={handleGoBack}>
        Return to the previous page
      </StyledButton>
    </StyledNoteFound>
  );
};

export default NoteFound;