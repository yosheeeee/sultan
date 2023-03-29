import react, { ChangeEvent } from 'react';
import './style.scss'

interface IPrice {
    max: string
    min: string
}


interface PriceSortProps {
    priceFilter: Function
    price: IPrice

}

const PriceSort: react.FunctionComponent<PriceSortProps> = ({ priceFilter, price }) => {

    function setPriceFilter(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        console.log(event.currentTarget.value);
        if (event.currentTarget.name == 'minPrice')
            priceFilter(event.currentTarget.value)
        else priceFilter(undefined,event.currentTarget.value)

    }

    return (
        <div className='price-sort'>
            <form name='priceSort'>
                <p>Цена <span>₸</span></p>
                <fieldset>
                    <input type="number" name="minPrice" value={price.min} onChange={setPriceFilter} />
                    <p>-</p>
                    <input type="number" name="maxPrice" value={price.max} onChange={setPriceFilter} />
                </fieldset>
            </form>
        </div>
    );
}

export default PriceSort;