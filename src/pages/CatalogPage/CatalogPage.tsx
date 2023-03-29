import * as React from 'react';
import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './style/style.scss'
import CatalogTitle from './catalog-header/catalog_title';
import CatalogItem from './catalogItem/catalogItem';

import PageSlider from './pageSlider/pageSlider';
import LeftPanel from './leftPanel/leftPanel';
import { useParams, useSearchParams } from 'react-router-dom';

interface IProduct {
    name: string;
    price: string;
    brand: string;
    weight?: string;
    id: string;
    type: string;
    description: string;
    imgName: string;
    subcategory: string;
    category: string;
    hardness?: string;
    count?: string;
    diametr?: string;
    volume?: string;
    size?: string;
}

interface CatalogPageProps {
    products: IProduct[]
    title: string
    links: { src: string, title: string }[]
}

export default function CatalogPage({ products, title, links }: CatalogPageProps) {
    const [productList, setProductList] = useState(products)
    const [sortType, setSortType] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [minPrice, setMinPrice] = useState('0')
    const [maxPrice, setMaxPrice] = useState('10000')

    function sortCards(sort: string, filtredList = productList) {
        setSortType(sort)
        setCurrentPage(0)
        switch (sort) {
            case 'name':
                setProductList(filtredList.sort((a, b) => a.name.localeCompare(b.name)))
                break;
            case 'price up':
                setProductList(filtredList.sort((a, b) => {
                    return parseInt(a.price.split(' ').join('')) - parseInt(b.price.split(' ').join(''))
                }))
                break;
            case 'price down':
                setProductList(filtredList.sort((a, b) => {
                    return parseInt(b.price.split(' ').join('')) - parseInt(a.price.split(' ').join(''))
                }))
                break;
        }
    }

    function priceFilter(min: string = minPrice.toString(), max: string = maxPrice.toString()) {
        setMinPrice(min)
        setMaxPrice(max)
        let minNumber = (min == '' || parseInt(min) < 0 || parseInt(min) > parseInt(max)) ? 0 : parseInt(min)
        let maxNumber = (max == '' || parseInt(max) < minNumber) ? minNumber + 1 : parseInt(max)

        const filtredList = [...products].filter(product => {
            const price = parseInt(product.price.split(' ').join(''))
            const result = (minNumber <= price && price <= maxNumber)
            return result
        })

        sortCards(sortType, filtredList)
    }

    return (
        <div className='catalogPage'>
            <Navigation links={links} />
            <div className="content">
                <CatalogTitle sortType={sortType} sortCards={sortCards}>{title}</CatalogTitle>
                <div className="catalog-cards">
                    {productList.slice((currentPage == 0 ? 0 : currentPage * 15 - 1), (currentPage + 1) * 15).map(product => <CatalogItem product={product} />)}
                </div>
                <LeftPanel priceFilter={priceFilter} price={{ min: minPrice, max: maxPrice }} />
                <PageSlider setCurrentPage={setCurrentPage} currentPage={currentPage} itemsCounter={productList.length}></PageSlider>
            </div>
        </div>
    );
}
