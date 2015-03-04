var DefaultLayoutHeader = React.createClass({
    render: function () {
        return (
            <header className="header">
                <div className="header__logo">
                    <a href="//www.yandex.ru" className="logo__ya"></a>
                    <a className="logo__weather">Погода</a>
                </div>
   
                <script src="http://twitter.github.io/typeahead.js/releases/latest/typeahead.bundle.js"></script>
                <script src="dist/js/suggest.js"></script>

                <div className="header__section header__city-search-wrapper">
                    <form>
                        <div className="city-search__actions-wrapper">
                            <input className="city-search__input" placeholder={this.props.city}/>
                            <span className="city-search__clear-btn hidden"></span>
                        </div>
                        <button type="submit" className="city-search__submit-btn">Найти</button>
                    </form>
                </div>
            </header>
        );
    }
});

module.exports = DefaultLayoutHeader;
