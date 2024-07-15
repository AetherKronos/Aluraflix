import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import viteLogo from '/vite.svg'
import './App.css'
import Header  from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Home from './pages/Home';
import NewVideoPage from './pages/NewVideoPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NewVideoPage />} />
      </Routes>
    </Router>
  );
}

export default App