import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />}>
      </Route>
      <Route path='/dashboard' element={<Dashboard />}>
      </Route>
    </Routes>
  );
}
