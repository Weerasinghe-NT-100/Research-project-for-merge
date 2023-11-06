import React from 'react';
import AboutUs from './AboutUs';
import DomainPage from './DomainPage';
import { TimelineAnimation } from '../Component';
import HomeIm from '../Web-photos/Home.jpg'
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box m={1} sx={{ position: 'relative' }}>
          <img src={HomeIm} width="100%" height="600px" style={{ borderRadius: '8px 8px 0 0' }} />
          <Typography variant='h1' sx={{
            fontSize: '40px',
            color: 'whitesmoke',
            position: 'absolute',
            top: '20px',
            left: '20px', // Adjust the left position as needed
            zIndex: 1, // Ensure the text appears above the image
           }}>
            Welcome to EcoAware
          </Typography>
      </Box>
      <DomainPage />
      <TimelineAnimation/>
      <AboutUs />
    </>
  );
};

export default Home;
