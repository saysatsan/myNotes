import React from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import StyledWrapper from './styled';

const Templates = () => (
  <Grid container style={{ display: 'flex', minHeight: '100%' }}>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <StyledWrapper className='mainWrapper' item xs={12}>
      <Outlet />
    </StyledWrapper>
  </Grid>
);

export default Templates;
