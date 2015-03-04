/** @jsx React.DOM */
var DefaultLayout = require('../layouts/default/main'),
    ForecastToday= require('./forecast.today.jsx'),
    ForecastFull = require('./forecast.full.jsx'),
    ForecastShort = require('./forecast.short.jsx'),
    ForecastHourly = require('./forecast.hourly.jsx'),
    DetailsMenu = require('./details.menu.jsx');

var Index = React.createClass({
    render: function() {
        return (            
            <DefaultLayout title={this.props.title} info={this.props.info}>
                <DetailsMenu></DetailsMenu>
                <ForecastToday today={this.props.today}></ForecastToday>
                <ForecastFull full={this.props.full}></ForecastFull>
                <ForecastShort short={this.props.short}></ForecastShort>
                
                <div id="hint__forecast-base" className="hint" style={{"top": "198px", "left": "524px", "display": "none"}}>
                    <p className="hint__text">На основе прогноза</p>
                </div>

                <ForecastHourly hours={this.props.hourly.hours} min={this.props.hourly.min} max={this.props.hourly.max} half={this.props.hourly.half}></ForecastHourly>
            </DefaultLayout>
        );
    }
});

module.exports = Index;
