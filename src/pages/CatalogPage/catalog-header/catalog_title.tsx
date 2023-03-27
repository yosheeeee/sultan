import react, { ChangeEvent } from 'react';
import { MouseEventHandler, useState } from 'react';

interface CatalogTitleProps {
    children: string
    sortType: string
    sortCards: Function
}

const CatalogTitle = ({ children, sortType, sortCards }: CatalogTitleProps) => {

    const [switcher, setSwitcher] = useState(false)
    const switcherClassList: string[] = ['switch', switcher ? 'right' : 'left']
    const sliderClassList: string[] = ['slider', switcher ? 'right' : 'left']

    function changeSort(event: ChangeEvent<HTMLSelectElement>): void {
        sortCards(event.target.value)
    }

    return (
        <div className="title">
            <h1>{children}</h1>
            <form name='sorting'>
                <p>Сортировка:</p>
                <select name="sortType" onChange={changeSort}>
                    {sortType == '' ? <option value='' selected disabled>Сортировка</option> : <></>}
                    <option value="name">Название</option>
                    <option value="price up">Цена по возрастанию</option>
                    <option value='price down'>Цена по убыванию</option>
                </select>

                <div className={switcherClassList.join(' ')} onClick={() => setSwitcher(prev => !prev)}></div>
            </form>
        </div>
    );
}

export default CatalogTitle;