import * as React from 'react';
import { MouseEventHandler, useState } from 'react';


interface CatalogTitleProps {
    children: string
}

const CatalogTitle = ({ children }: CatalogTitleProps) => {
    
    const [switcher, setSwitcher] = useState(false)
    const switcherClassList : string[] = ['switch', switcher ? 'right' : 'left']
    const sliderClassList : string[] = ['slider', switcher ? 'right' : 'left']


    return (
        <div className="title">
            <h1>{children}</h1>
            <form name='sorting'>
                <p>Сортировка:</p>
                <select name="sortType">
                    <option value="name">Название</option>
                    <option value="price">Цена</option>
                </select>

                <div className={switcherClassList.join(' ')} onClick={ () => setSwitcher(prev => !prev)}>
                    <div className={sliderClassList.join(' ')}></div>
                </div>
            </form>
        </div>
    );
}

export default CatalogTitle;