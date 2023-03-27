import * as React from 'react';
import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './style/style.scss'
import CatalogTitle from './catalog-header/catalog_title';
import CatalogItem from './catalogItem/catalogItem';
import products from '../../data/commodity';
import PageSlider from './pageSlider/pageSlider';



function CatalogPage(props: any) {
    const [productList, setProductList] = useState(products)
    const [sortType, setSortType] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    function sortCards(sort: string) {
        setSortType(sort)
        switch (sort) {
            case 'name':
                setProductList([...productList].sort((a, b) => a.name.localeCompare(b.name)))
                break;
            case 'price up':
                setProductList([...productList].sort((a, b) => {
                    return parseInt(a.price.split(' ').join('')) - parseInt(b.price.split(' ').join(''))
                }))
                break;
            case 'price down':
                 setProductList([...productList].sort((a, b) => {
                    return parseInt(b.price.split(' ').join('')) - parseInt(a.price.split(' ').join('')) 
                }))
                break;
        }
    }

    return (
        <div className='catalogPage'>
            <Navigation links={[{ src: '/', title: 'Главная' }]} />
            <div className="content">
                <CatalogTitle sortType={sortType} sortCards={sortCards}>Каталог</CatalogTitle>
                <div className="catalog-cards">
                    {productList.slice((currentPage == 0 ? 0 : currentPage * 15 - 1), (currentPage + 1) * 15).map(product => <CatalogItem product={product} />)}
                </div>
                <PageSlider setCurrentPage={setCurrentPage} currentPage={currentPage} itemsCounter={productList.length}></PageSlider>
            </div>
        </div>
    );
}

export default CatalogPage;