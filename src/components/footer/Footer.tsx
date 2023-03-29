import * as React from 'react';
import './style/style.scss'
import { Navigate, Link } from 'react-router-dom';




const Footer = () => {
    return (
        <footer>
            <div className="footer--content">
                <img src="/img/footer/logo.svg" alt="logo" className="logo" />
                <p className="about-company">
                    Компания «Султан» — снабжаем розничные магазины товарами
                    "под ключ" в Кокчетаве и Акмолинской области
                </p>
                <p className="subscribe">
                    Подпишись на скидки и акции
                </p>

                <form name="inputEmail">
                    <input type="email" name="inputEmailText" placeholder="Введите ваш E-mail" />
                    <input type="submit" value="" name="sendEmail" />
                </form>

                <div className="menu">
                    <h2>Меню сайта:</h2>
                    <ul>
                        <li>
                            О компании
                        </li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>
                        <li>Контакты</li>
                    </ul>
                </div>

                <div className="categories">
                    <h2>Категории</h2>
                    <ul>
                        <Link to='/catalog/household_chemicals'><li>Бытовая химия</li></Link>
                        <li>Косметика и гигиена</li>
                        <li>Товары для дома</li>
                        <li>Товары для детей и мам</li>
                        <li>Посуда</li>
                    </ul>
                </div>
                <div className="price-list">
                    <h2>Скачать прайс-лист:</h2>
                    <button>
                        <p>Прайс-лист</p>
                        <img src="/img/footer/download.svg" alt="download" />
                    </button>

                    <div className="price-list--links">
                        <p>Связь в мессенджерах:</p>
                        <ul>
                            <li className="whatsapp" />
                            <li className="telegram" />
                        </ul>
                    </div>
                </div>

                <div className="contacts">
                    <h2>Контакты:</h2>
                    <strong>+7 (777) 490-00-91</strong>
                    <p>время работы: 9:00-20:00</p>
                    <p><span>Заказать звонок</span></p>

                    <p className="mail">
                        <span>opt.sultan@mail.ru </span> <br />
                        На связи в любое время
                    </p>

                    <ul>
                        <li className="visa" />
                        <li className="mastercard" />
                    </ul>
                </div>

            </div>
            <div className="footer--content--mobile">
                <img src="/img/footer/logo-mobile.svg" alt="logo" className="footer--content--mobile--logo" />
                <button className="footer--content--mobile--price-list">
                    <p>Прайс-лист</p>
                    <img src="/img/footer/download-mobile.svg" alt="download" />
                </button>

                <p className="footer--content--mobile--about-company">
                    Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве
                    и Акмолинской области
                </p>

                <p className="footer--content--mobile--about-company">
                    Подпишись на скидки и акции
                </p>

                <form name="inputEmail">
                    <input type="email" name="inputEmailText" placeholder="Введите ваш E-mail" />
                    <input type="submit" value="" name="sendEmail" />
                </form>

                <div className="footer--content--mobile--menu-block">
                    <h3>Меню сайта:</h3>
                    <p>О компании</p>
                    <p>Доставка и оплата</p>
                    <p>Возврат</p>
                    <p>Контакты</p>
                </div>

                <div className="footer--content--mobile--menu-block">
                    <h3>Категории:</h3>
                    <Link to='/catalog/household_chemicals'><p>Бытовая химия</p></Link>
                    <p>Косметика и гигиена</p>
                    <p>Товары для дома</p>
                    <p>Товары для детей и мам</p>
                    <p>Посуда</p>
                </div>


                <h2>Контакты:</h2>

                <div className="footer--content--mobile--phones">
                    <strong>+7 (777) 490-00-91</strong>
                    <p>время работы: 9:00-20:00</p>
                    <p><span>Заказать звонок</span></p>
                    <p><span className="mail">opt.sultan@mail.ru</span><br />
                        На связи в любое время
                    </p>
                </div>

                <div className="footer--content--mobile--links">
                    <p>Связь<br /> в мессенджерах:</p>
                    <ul className="footer--content--mobile--links--links">
                        <li className="whatsapp" />
                        <li className="telegram" />
                    </ul>
                </div>

                <div className="footer--content--mobile--payment">
                    <ul>
                        <li className="visa" />
                        <li className="mastercard" />
                    </ul>
                </div>
            </div>
        </footer>
    );

}
export default Footer