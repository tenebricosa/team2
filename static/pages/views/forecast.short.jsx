/** @jsx React.DOM */
var ForecastShortItem = require('./forecast.short.item'),
    ForecastShort;
    
var ForecastShort = React.createClass({
    render: function () {
        return (
            <div role="tabpanel" className="tabs-panel fade in active" id="short">
            <div className="weather">
                {this.props.short.map(function(object, i){
                    return <ForecastShortItem day={object} key={i}/>;
                })}
            </div>
            </div>
        );
    }
});

module.exports = ForecastShort;
