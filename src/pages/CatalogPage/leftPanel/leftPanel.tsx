import react from 'react';
import './style.scss';
import PriceSort from './priceSort/priceSort';

interface LeftPanelProps {
    priceFilter: Function
    price: IPrice
}

interface IPrice{
    min: string
    max: string
}

const LeftPanel: react.FunctionComponent<LeftPanelProps> = ({priceFilter , price}) => {
    return ( 
        <div className='left-panel'>
            <h2>Подбор по параметрам</h2>
            <PriceSort priceFilter={priceFilter} price={price}/>
        </div>
     );
}
 
export default LeftPanel;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       