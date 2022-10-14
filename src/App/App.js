import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './pages/home'
import Flowerpot from './pages/flowerpot'
import Add from './pages/add'
import User from './pages/user'
import Status from './pages/status'
import Error from './pages/error'

function App() {
  return (
    <Router>
      <div className="App">
	<Routes>
	  <Route path='/' element={<Home/>}/>
	  <Route path='/flowerpot' element={<Flowerpot/>}/>
	  <Route path='/add' element={<Add/>}/>
	  <Route path='/user' element={<User/>}/>
	  <Route path='/status/:plantID' element={<Status/>}/>
	  <Route path='*' element={<Error/>}/>
	</Routes>
      </div>
    </Router>
  );
}

export default App;
