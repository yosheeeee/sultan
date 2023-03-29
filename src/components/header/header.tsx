import * as React from 'react';
import './style/style.scss'
import { JsxElement } from 'typescript';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="first-line">
                <div className="first-line--location">
                    <img src="/img/header/location.svg" alt="location" />
                    <p>г. Кокчетав, ул. Ж. Ташенова 129Б <br />
                        <span>(Рынок Восточный)</span>
                    </p>
                </div>
                <div className="first-line--contacts">
                    <img src="/img/header/mail.svg" alt="mail" />
                    <p>opt.sultan@mail.ru <br />
                        <span>На связи в любое время</span>
                    </p>
                </div>
                <ul className="first-line--menu">
                    <li>О компании</li>
                    <li>Доставка и оплата</li>
                    <li>Возврат</li>
                    <li>Контакты</li>
                </ul>
                <div className="burger" />
                <img src="/img/header/logo-mobile.svg" alt="logo" className="mobile-logo" />
                <div className="caret">
                    <p>3</p>
                </div>

            </div>
            <div className="second-line">
                <div className="second-line--content">
                    <Link to='/'><img src="/img/header/logo.svg" alt="logo" className="logo" /></Link>
                    <Link to='/catalog'>
                        <button className="catalog">
                            <p>Каталог</p><img src="/img/header/squares.svg" alt="squares" />
                        </button>
                    </Link>
                    <form name="search" className="search">
                        <input type="text" name="searchInput" placeholder="Поиск..." />
                        <input type="submit" name="searchButton" value="" />
                    </form>

                    <div className="second-line--contacts">
                        <div className="second-line--contacts--text">
                            <p className="second-line--contacts--text--phone">+7 (777) 490-00-91</p>
                            <p className="second-line--contacts--text--time">время работы: 9:00-20:00</p>
                            <p className="second-line--contacts--text--call">Заказать звонок</p>
                        </div>

                        <img src="/img/header/helper.png" alt="helper" className="second-line--contacts--img" />
                    </div>

                    <img src="/img/header/vertical_line.svg" alt="line" className="second-line--separator" />

                    <button className="second-line--price-list">
                        <p>Прайс-лист</p>
                        <img src="/img/header/price-list.svg" alt="prise-list" />
                    </button>

                    <img src="/img/header/vertical_line.svg" alt="line" className="second-line--separator" />

                    <div className="second-line--caret">
                        <div className="second-line--caret--caret">
                            <p>3</p>
                        </div>

                        <div className="second-line--caret--text">
                            <p>Корзина</p>
                            <p className="second-line--caret--text--price">12 478 ₸</p>
                        </div>
                    </div>


                </div>
                <div className="second-line--mobile">
                    <div className="second-line--mobile--catalog">
                        <img src="/img/header/squares-mobile.svg" alt="squares" />
                        <p>Каталог</p>
                    </div>
                    <img src="/img/header/separator-mobile.svg" alt="separator" className="mobile-separator" />
                    <div className="second-line--mobile--search">
                        <img src="/img/header/search-mobile.svg" alt="search" />
                        <p>Поиск</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;