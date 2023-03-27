
import * as React from 'react';
import './style.scss'

interface CatalogItemProps {
    product:IProduct
}

interface IProduct{
    imgName: string
    brand: string
    name:string
    id:string
    price: string
    weight? : string
    type? : string
    description? : string
    subcategory: string
    category: string
}
 
const CatalogItem: React.FunctionComponent<CatalogItemProps> = ({product}: CatalogItemProps) => {
    return ( 
        <div className="card">
            <img src={`img/products/${product.imgName}`} className="image" />
            <p className="weight">{product.weight}</p>
            <p className="name"><span>{product.brand}</span> {product.name}</p>
            <div className="description">
                <p><span>Штрихкод:</span> {product.id}</p>
                <p><span>Бренд:</span> {product.brand}</p>
            </div>
            <div className="priceAdd">
                <p>{product.price} ₸</p>
                <button>
                    В корзину
                </button>
            </div>
        </div>
     );
}
 
export default CatalogItem;