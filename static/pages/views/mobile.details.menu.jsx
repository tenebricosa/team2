/** @jsx React.DOM */
var MobileDetailsMenu = React.createClass({
    render: function() {
        return (
            <div className="mobile__details-menu">
                <ul className="tabs" role="tablist">
                    <li className="tabs__item active"><a href="#short" data-toggle="tab" className="tabs__link" role="tab" aria-controls="short" aria-expanded="true">кратко</a></li>
                    <li className="tabs__item"><a href="#full" data-toggle="tab" className="tabs__link tabs__item_active" role="tab" aria-controls="full" aria-expanded="true" >подробно</a></li>
                    <li className="tabs__item"><a href="#hourly" data-toggle="tab" className="tabs__link" role="tab" aria-controls="hourly" aria-expanded="true">наглядно</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = MobileDetailsMenu;
