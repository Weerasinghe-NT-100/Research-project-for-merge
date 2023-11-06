import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './Component';
import { Presentations, DomainPage } from './Pages';


function App() {
  
  return (
    <div className="App">
      <Router>
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<div>Hello</div>} />
            <Route path="/Presentations" element={<Presentations/>} />
            <Route path="/DomainPage" element={<DomainPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
