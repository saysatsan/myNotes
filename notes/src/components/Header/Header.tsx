import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeaderContainer, StyledHeaderTitle } from './styled';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <StyledHeaderContainer>
      <StyledHeaderTitle onClick={handleClick}>My Notes</StyledHeaderTitle>
    </StyledHeaderContainer>
  );
};

export default Header;
