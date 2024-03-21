// src/App.js
import React from 'react';
// import AnimeSeriesForm from './components/AnimeSeriesForm';
// import AnimeSeriesList from './components/AnimeSeriesList';
import AppRoutes from './routes/animeRoutes';
// import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       {/* <Navbar /> */}
      <AppRoutes/>
      {/* <hr/>
      <AnimeSeriesForm />
      <hr />
      <AnimeSeriesList /> */}

    </BrowserRouter>
  );
}

export default App;
