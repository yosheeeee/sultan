import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './style/style.css'
import CatalogTitle from './catalog-header/catalog_title';


function CatalogPage(props : any) {
    return ( 
        <div className='catalogPage'>
            <Navigation links={[{src:'/',title:'Главная'}]}/>
            <div className="content">
                <CatalogTitle>Каталог</CatalogTitle>
            </div>
        </div>
     );
}

export default CatalogPage;