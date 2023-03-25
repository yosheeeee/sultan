import React, { useState } from 'react';
import Header from "./components/header/header";
import Footer from './components/footer/Footer';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/catalog' element={<CatalogPage/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
