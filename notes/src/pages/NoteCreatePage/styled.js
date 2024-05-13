import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;