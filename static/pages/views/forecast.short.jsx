/** @jsx React.DOM */
var ForecastShortItem = require('./forecast.short.item'),
    ForecastToday = require('./forecast.today.jsx'),
    ForecastShort;
    
var ForecastShort = React.createClass({
    render: function () {
        return (
            <div role="tabpanel" className="tabs-panel fade in active" id="short">
            <div className="weather">
                <ForecastToday today={this.props.today}></ForecastToday>
                {this.props.short.map(function(object, i){
                    return <ForecastShortItem day={object} key={i}/>;
                })}
            </div>
            </div>
        );
    }
});

module.exports = ForecastShort;
