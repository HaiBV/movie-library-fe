import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Homepage from './containers/home/Homepage';
import ShareMovie from './containers/movie/ShareMovie';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Router>
          <>
            <Navbar />
            <Alert />
            <div className='main-content'>
              <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/share' element={<ShareMovie />} />
              </Routes>
            </div>
          </>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
