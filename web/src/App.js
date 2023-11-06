import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './Component';
import { Presentations } from './Pages';
import AboutUs from './Pages/AboutUs';


function App() {
  
  return (
    <div className="App">
      <Router>
          <NavigationBar/>
          <Routes>
            <Route path="/AboutUS" element={<AboutUs/>} />
            <Route path="/Presentations" element={<Presentations/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
