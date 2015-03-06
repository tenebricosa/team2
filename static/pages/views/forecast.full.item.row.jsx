/** @jsx React.DOM */
var timeOfDay = require('../../../server/locales/timeofday.locale.js');

var ForecastFullItemRow = React.createClass({
    render: function() {
        var item = this.props.part;
        return (
            <div className="weather__container" style={{"backgroundColor": item.color}}>
                <div className="weather-full__time">{timeOfDay[item.type]}</div>
                <div className="weather-full__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + item.weather_icon + ".svg)"}}></div>
                <div className="weather-full__degree">{item.temp_min>0?"+":""}{item.temp_min}</div>
                <div className="weather-full__degree">{item.temp_max>0?"+":""}{item.temp_max}</div>
                <div className="weather-full__condensation">{item.weather}</div>
                <div className="weather-full__weather__pressure">{item.pressure}</div>
                <div className="weather-full__weather__humidity">{item.humidity}%</div>
                <div className="weather-full__weather__wind">
                    <img className="forecast-full__weather__wind__icon" src={"http://yandex.st/weather/1.2.83/i/wind/" + item.wind_direction +".gif"} alt="" title={"Ветер: "+ item.wind  }/>
                {item.wind_speed}</div>
            </div>
        );
    }
});

module.exports = ForecastFullItemRow;
