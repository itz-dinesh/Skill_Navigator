import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import SidebarAndProfile from './components/SidebarAndProfile';
import Login from './components/Login'; // Import the Login component
import Home from './components/Homepage/Home';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} /> {/* Add login route */}
          <Route path="/profile" element={<SidebarAndProfile />} />
          <Route path="/Home" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
