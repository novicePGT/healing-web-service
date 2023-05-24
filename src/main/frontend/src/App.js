import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Objectives from './components/Objectives.jsx';
import Brazil from './components/Brazil.jsx';
import Recommend from './components/Recommend.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Footer from './components/Footer.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import Russia from './components/Russia.jsx';
import Sweden from './components/Sweden.jsx';
import France from './components/France.jsx';
import Argentina from './components/Argentina.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Main />
        <Objectives />
        <AudioPlayer />
        <Routes>
          <Route path="/brazil" element={<Brazil />} />
          <Route path="/russia" element={<Russia />} />
          <Route path="/sweden" element={<Sweden />} />
          <Route path="/france" element={<France />} />
          <Route path="/argentina" element={<Argentina />} />
        </Routes>
        <Recommend />
        <ImageSlider />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
