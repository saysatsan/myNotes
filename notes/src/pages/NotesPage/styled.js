import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
