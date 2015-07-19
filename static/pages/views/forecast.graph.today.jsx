/** @jsx React.DOM */
var moment = require('moment');

var ForecastToday = React.createClass({
    render: function () {
        var weatherToday = this.props.today,
            date = moment( weatherToday.date );
        
        return (
            <div className="weather">
                <span className="weather__when">Cегодня, {date.format('Do MMMM')} </span>
                <div className="weather-short-now">
                    <div className="weather-short-now__new-line">
                        <span className="weather-short-now__degree">{weatherToday.now.temp > 0 ? "+" : ""}{weatherToday.now.temp}°C</span>
                        <p className="weather-short-now__update">2 часа назад</p>
                    </div>
                    <div className="weather-short-now__new-line">
                        <div className="weather-short-now__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.now.weather_icon + ".svg)"}}></div>
                        <div className="weather-short-now__condensation">{weatherToday.now.weather}</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastToday;
