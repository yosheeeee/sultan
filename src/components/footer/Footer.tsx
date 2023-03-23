import * as React from 'react';
import './style/style.css'




const Footer = () => {
    return (  
        <footer>
        <div className="footer--contet">
        </div>
        <div className="footer--content--mobile">
            <img src="img/footer/logo-mobile.svg" alt="logo" className="footer--content--mobile--logo" />
            <button className="footer--content--mobile--price-list">
                <p>Прайс-лист</p>
                <img src="img/footer/download-mobile.svg" alt="download" />
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
                <p>Бытовая химия</p>
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