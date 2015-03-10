/** @jsx React.DOM */
var ForecastShortItem = require('./forecast.short.item'),
    ForecastToday = require('./forecast.today-short.jsx'),
    ForecastShort;
    
var ForecastShort = React.createClass({
    render: function () {
        return (
            <div role="tabpanel" className="tabs-panel fade in" id="short">
            <ForecastToday today={this.props.today}></ForecastToday>
            {this.props.short.map(function(object, i){
                return <ForecastShortItem day={object} key={i} id={i}/>;
            })}
            </div>
        );
    }
});

module.exports = ForecastShort;
