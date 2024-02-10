import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
