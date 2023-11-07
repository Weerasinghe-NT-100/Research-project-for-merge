import React, { useState, useEffect } from 'react';
import './App.css';
import { Box,Button,useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { makeStyles } from '@mui/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './Component';
import { Presentations,Documents,Home } from './Pages';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'fixed',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    zIndex: 1000,
  },
}));


function App() {

  const theme = useTheme(); 
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="App">
      <Router>
          <NavigationBar/>
          <Box mt={-4} sx={{ backgroundImage: `url(${require('./Web-photos/Colombo-sri-lanka.jpg')})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box m={4} mt={6} sx={{ flexGrow: 1,backgroundColor: 'rgba(217, 217, 217, 0.8)', borderRadius: '24px', border: '1px solid #CBB7B7',
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Presentations" element={<Presentations/>} />
                <Route path="/Documents" element={<Documents/>} />
            </Routes>
            </Box>
          </Box>
      </Router>
      {isVisible && (
        <Button className={classes.root} color="primary" sx={{ backgroundColor:'#adc2ff' }} onClick={scrollToTop}>
          <KeyboardArrowUpIcon sx={{ fontSize:'40px',fontWeight:'bold' }} />
        </Button>
      )}
    </div>
  );
}

export default App;
