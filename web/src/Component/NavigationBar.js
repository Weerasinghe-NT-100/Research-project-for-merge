import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

const NavigationBar = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#3c3c3c', boxShadow: '0px 2px 4px rgba(0, 1, 0, 0.1)', transform: 'translateZ(0)', maxHeight: '60px' }}>
        <Toolbar>
          <Link to="/">
            <Button color="inherit" sx={{ display: 'flex', alignItems: 'center', height: '56px', width: '100px', color: 'white', backgroundColor: isHome ? 'black' : '#3c3c3c' }}>
              <HomeIcon sx={{ marginRight: 1, color: 'white', fontSize: 20 }} />
              <Typography fontSize="13px" sx={{ fontWeight: 'semi-bold' }}>
                Home
              </Typography>
            </Button>
          </Link>

          <Link to="/">
            <Button color="inherit" sx={{ display: 'flex', alignItems: 'center', height: '56px', width: '100px', color: 'white', backgroundColor: '#3c3c3c' }}>
              <Typography fontSize="13px" sx={{ fontWeight: 'semi-bold' }}>
                Domain
              </Typography>
            </Button>
          </Link>

          <Link to="/TimelineAnimation">
            <Button color="inherit" sx={{ display: 'flex', alignItems: 'center', height: '56px', width: '100px', color: 'white', backgroundColor: '#3c3c3c' }}>
              <Typography fontSize="13px" sx={{ fontWeight: 'semi-bold' }}>
                Milestones
              </Typography>
            </Button>
          </Link>

          <Link to="/Documents">
            <Button color="inherit" sx={{ display: 'flex', alignItems: 'center', height: '56px', width: '100px', color: 'white', backgroundColor: '#3c3c3c' }}>
              <Typography fontSize="13px" sx={{ fontWeight: 'semi-bold' }}>
                Documents
              </Typography>
            </Button>
          </Link>

          <Link to="/Presentations">
            <Button color="inherit" sx={{ display: 'flex', alignItems: 'center', height: '56px', width: '200px', color: 'white', backgroundColor: '#3c3c3c' }}>
              <Typography fontSize="13px" sx={{ fontWeight: 'semi-bold' }}>
                Past Presentations
              </Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
