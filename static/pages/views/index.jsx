/** @jsx React.DOM */
var DefaultLayout = require('../layouts/default/main'),
    ForecastFull = require('./forecast.full.jsx'),
    ForecastShort = require('./forecast.short.jsx'),
    ForecastHourly = require('./forecast.hourly.jsx'),
    DetailsMenu = require('./details.menu.jsx'),
    ForecastGraph = require('./forecast.graph.jsx');

var Index = React.createClass({
    render: function() {
        return (            
            <DefaultLayout title={this.props.title} info={this.props.info}>
                <DetailsMenu></DetailsMenu>
                <ForecastFull today={this.props.today} full={this.props.full}></ForecastFull>
                <ForecastShort today={this.props.today} short={this.props.short}></ForecastShort>
                <ForecastGraph data={this.props.graph.data} today={this.props.today} max={this.props.graph.max} min={this.props.graph.min}></ForecastGraph>
            </DefaultLayout>
        );
    }
});

module.exports = Index;
