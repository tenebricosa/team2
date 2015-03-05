/** @jsx React.DOM */
var DefaultLayout = require('../layouts/default/main'),
    ForecastFull = require('./forecast.full.jsx'),
    ForecastShort = require('./forecast.short.jsx'),
    ForecastHourly = require('./forecast.hourly.jsx'),
    DetailsMenu = require('./details.menu.jsx');

var Index = React.createClass({
    render: function() {
        return (            
            <DefaultLayout title={this.props.title} info={this.props.info}>
                <DetailsMenu></DetailsMenu>
                <ForecastFull full={this.props.full}></ForecastFull>
                <ForecastShort today={this.props.today} short={this.props.short}></ForecastShort>
                <ForecastHourly hours={this.props.hourly.hours} min={this.props.hourly.min} max={this.props.hourly.max} half={this.props.hourly.half}></ForecastHourly>
            </DefaultLayout>
        );
    }
});

module.exports = Index;
