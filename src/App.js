// src/App.js
import React from 'react';
// import AnimeSeriesForm from './components/AnimeSeriesForm';
// import AnimeSeriesList from './components/AnimeSeriesList';
import AppRoutes from './routes/animeRoutes';
// import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import MiniComponents from './miniComponents/miniComponents';
// import Login from './components/aouth/Login';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function App() {
  return (
    <BrowserRouter>

      <AppRoutes/>


    </BrowserRouter>
  );
}

export default App;
