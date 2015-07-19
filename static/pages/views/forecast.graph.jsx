/** @jsx React.DOM */
var ForecastGraphItem = require('./forecast.graph.item'),
    ForecastToday = require('./forecast.graph.today.jsx'),
    ForecastGraph;

ForecastGraph = React.createClass({
    render: function() {
        var min = this.props.min,
        max = this.props.max;
        half = !((min >= 0 && max >= 0) || (min <= 0 && max <= 0))
        return (            
            <div role="tabpanel" className="tabs-panel fade active" id="hourly">
            <ForecastToday today={this.props.today} />                
            <div className={( half ? 'forecast-hourly forecast-hourly_half': 'forecast-hourly' )}>                
                {this.props.data.map(function(object, i){
                    return <ForecastGraphItem max={max} min={min} day={object} half={half} key={i}/>;
                })}
            </div>
            </div>
        )
    }
});

module.exports = ForecastGraph;
