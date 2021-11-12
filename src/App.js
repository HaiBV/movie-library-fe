import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>
        </>
      </Router>
    </Provider>
  );
}

export default App;
