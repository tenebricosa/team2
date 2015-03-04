var DefaultLayoutFooter = React.createClass({
        render: function () {
            return (
                <footer className="footer">
                    <ul className="footer__link-list">
                        <li>
                            &copy;&nbsp;2008-2015&nbsp;&laquo;
                            <a href="http://ya.ru" className="link-list__item">Яндекс</a>
                            &raquo;
                        </li>
                        <li>
                            <a href="https://feedback2.yandex.ru/pogoda/" className="link-list__item">Обратная связь</a>
                        </li>
                        <li>
                            <a href="#" className="link-list__item">Полная версия</a>
                        </li>
                    </ul>
                </footer>
            );
        }
    });

module.exports = DefaultLayoutFooter;
