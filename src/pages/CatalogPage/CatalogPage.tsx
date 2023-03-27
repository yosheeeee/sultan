import * as React from 'react';
import {useState} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './style/style.scss'
import CatalogTitle from './catalog-header/catalog_title';
import CatalogItem from './catalogItem/catalogItem';
import products from '../../data/commodity';



function CatalogPage(props : any) {
    const [productList, setProductList] = useState(products)
    const [sortType, setSortType] = useState('')

    function sortCards(sort : string){
        setSortType(sort)
        switch(sort){
            case 'name':
                setProductList([...productList].sort((a,b) => a.name.localeCompare(b.name)))
                break;
            case 'price':
                setProductList([...productList].sort( (a,b) => {
                    console.log(parseInt(a.price))
                    console.log(parseInt(b.price));
                    return parseInt(a.price.split(' ').join('')) - parseInt(b.price.split(' ').join(''))
                }))
                break;
        }
    }

    return ( 
        <div className='catalogPage'>
            <Navigation links={[{src:'/',title:'Главная'}]}/>
            <div className="content">
                <CatalogTitle sortType={sortType} sortCards={sortCards}>Каталог</CatalogTitle>
                <div className="catalog-cards">
                    {productList.map(product => <CatalogItem product={product}/>)}
                </div>
            </div>
        </div>
     );
}

export default CatalogPage;