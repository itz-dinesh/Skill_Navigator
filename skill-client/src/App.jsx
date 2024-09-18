import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import SidebarAndProfile from './components/SidebarAndProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<SidebarAndProfile />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
