var DefaultLayoutHeader = React.createClass({
    render: function () {
        return (
            <header className="header">
                <div className="header__logo">
                    <a href="//www.yandex.ru" className="logo__ya"></a>
                    <a className="logo__weather">Погода</a>
                </div>
   
                <script src="http://twitter.github.io/typeahead.js/releases/latest/typeahead.bundle.js"></script>
                <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
                <script src="dist/js/suggest.js"></script>
                <script src="dist/js/map.js"></script>

                <div className="header__search">
                    <form>
                        <input className="search__input" placeholder={this.props.city}/>
                        <span className="search__clear hidden"></span>
                        <button type="submit" className="search__submit">Найти</button>
                    </form>
                </div>
            </header>
        );
    }
});

module.exports = DefaultLayoutHeader;
