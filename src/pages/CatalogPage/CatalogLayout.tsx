import { useParams, useSearchParams } from 'react-router-dom';
import products from '../../data/commodity';
import CatalogPage from './CatalogPage';
import React, { useState } from 'react';


function CatalogLayout() {

    const [params, setParams] = useSearchParams()

    let category: string = params.get('category') || 'Каталог'
    const [currentCategory, setCurrentCategory] = useState(category)
    let links: any;
    switch (category) {
        case 'household_chemicals':
            setCurrentCategory('бытовая химия')
            links = [
                {
                    title: "Главная",
                    src: '/'
                },
                {
                    title: "Каталог",
                    src: '/catalog'
                }
            ]
            break;
        default:
            links = [
                {
                    title: "Главная",
                    src: '/'
                }
            ]
            break;
    }
    return (
        <CatalogPage products={products.filter(product => product.category == currentCategory || currentCategory == 'Каталог')} title={category} links={links} />
    );
}

export default CatalogLayout;