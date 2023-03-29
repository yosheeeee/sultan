import React, { useState } from 'react';
import Header from "./components/header/header";
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import products from './data/commodity';
import Layout from './pages/layout/layout';
import CatalogLayout from './pages/CatalogPage/CatalogLayout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='catalog/' element={<CatalogPage products={[...products]} title='Каталог' links={[{ title: "Главная", src: '/' }]} />}></Route>
          <Route path='catalog/household_chemicals' element={<CatalogPage products={[...products].filter(product => product.category == 'бытовая химия')} title='Бытовая химия' links={[{ title: "Главная", src: '/' }, { title: "Каталог", src: "/catalog/" }]} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
