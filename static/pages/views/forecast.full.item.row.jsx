/** @jsx React.DOM */
var timeOfDay = require('../../../server/locales/timeofday.locale.js');

var ForecastFullItemRow = React.createClass({
    render: function() {
        var item = this.props.part,
            wind_class = "weather-full-now__wind weather-full-now__wind--" + item.wind_direction;
        return (
            <div className="weather__container" style={{"backgroundColor": item.color}}>
                <div className="weather-full__time">{timeOfDay[item.type]}</div>
                <div className="weather-full__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + item.weather_icon + ".svg)"}}></div>
                <div className="weather-full__degree">{item.temp_min>0?"+":""}{item.temp_min}</div>
                <div className="weather-full__degree">{item.temp_max>0?"+":""}{item.temp_max}</div>
                <div className="weather-full__additional">
                    <div className="weather-full-now__condensation">{item.weather}</div>
                    <div className="additional-full__line">
                        Ветер: <div className={wind_class}></div> {item.wind}, {item.wind_speed} м/с
                    </div>
                    <div className="additional-full__line">Влажность: {item.humidity}%</div>
                    <div className="additional-full__line">Давление: {item.pressure}</div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastFullItemRow;
