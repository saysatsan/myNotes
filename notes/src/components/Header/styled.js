import styled from 'styled-components';

const StyledHeaderContainer = styled.header`
  background-color: #04f356;
  padding: 20px 0;
  z-index: 999;
  text-align: center;
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledHeaderTitle = styled.h1`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 32px;
  color: #260124;
  cursor: pointer;
`;

export { StyledHeaderContainer, StyledHeaderTitle };
