import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Na from './components/Na';
import Main from './components/Main';
import Footer from './components/Footer';
import { MoiveProvider } from './components/MovieContext';
import './App.css';

function App() {
  return (
    <MoiveProvider>
      <div className='App'>
        <Na />
        <Main />
        <Footer />
      </div>
    </MoiveProvider>
  );
}

export default App;
