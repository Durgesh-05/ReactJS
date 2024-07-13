import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={loggedIn?<Dashboard />:<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
