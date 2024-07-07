// src/pages/Dashboard.js
import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>Dashboard Content</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
