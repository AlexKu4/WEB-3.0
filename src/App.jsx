import React from 'react';
import Header from './components/Header';
import Converter from './components/Converter';
import Footer from './components/Footer.jsx';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Converter />
      </main>
      <Footer />
    </>
  );
}

export default App;
