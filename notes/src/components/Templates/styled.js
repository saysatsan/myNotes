import styled from 'styled-components';
import { Grid } from '@mui/material';

const StyledWrapper = styled(Grid)`
  &.mainWrapper {
    border-left: 1px solid #e0e0e0;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledWrapper;
