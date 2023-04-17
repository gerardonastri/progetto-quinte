import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Home2 from './pages/Home2/Home2';
import Home3 from './pages/Home3/Home3';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/orario/:id" element={<Home />} /> */}
        <Route path="/orario/:id" element={<Home3 />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
