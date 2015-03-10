/** @jsx React.DOM */
var ForecastFullItem = require('./forecast.full.item'),
    ForecastToday = require('./forecast.today-full.jsx'),
    ForecastFull;

ForecastFull = React.createClass({
    render: function () {
        return (
            <div role="tabpanel" id="full" className="tabs-panel fade in">
                <ForecastToday today={this.props.today}></ForecastToday>
                {this.props.full.map(function(object, i){
                    if (i === 1) {
                        return <ForecastFullItem day={object} item={i} key={i}/>;
                    }
                })}
            </div>
        );
    }
});

module.exports = ForecastFull;


