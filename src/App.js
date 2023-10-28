import React from 'react';
import LaunchPage from './components/LaunchPage/LaunchPage';
import { Route, Routes } from 'react-router-dom';
import LiveCard from './components/LiveCard/LiveCard';
import NewModule from './components/NewMoudulePage/NewModule';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={ <LaunchPage />} />
      <Route path='/live' element={<LiveCard />} />
      <Route path='/new-module' element={<NewModule />} />
    </Routes>
   </>
  );
}

export default App;
