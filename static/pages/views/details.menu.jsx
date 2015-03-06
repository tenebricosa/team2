/** @jsx React.DOM */
var DetailsMenu = React.createClass({
    render: function() {
        return (
            <ul className="tabs" role="tablist">
                <li className="tabs__item"><a href="#short" data-toggle="tab" className="tabs__link" role="tab" aria-controls="short" aria-expanded="true">Кратко</a></li>
                <li className="tabs__item active"><a href="#full" data-toggle="tab" className="tabs__link tabs__item_active" role="tab" aria-controls="full" aria-expanded="true" >Подробно</a></li>
                <li className="tabs__item"><a href="#hourly" data-toggle="tab" className="tabs__link" role="tab" aria-controls="hourly" aria-expanded="true">Наглядно</a></li>
            </ul>
        );
    }
});

module.exports = DetailsMenu;
