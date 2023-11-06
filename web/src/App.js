import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar,TimelineAnimation } from './Component';
import { Presentations,Documents,DomainPage } from './Pages';


function App() {
  
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
            <Route path="/" element={<div>Hello</div>} />
            <Route path="/Presentations" element={<Presentations/>} />
            <Route path="/Documents" element={<Documents/>} />
            <Route path="/TimelineAnimation" element={<TimelineAnimation/>} />
            <Route path="/DomainPage" element={<DomainPage/>} />
          </Routes>
            </Box>
          </Box>
      </Router>
    </div>
  );
}

export default App;
