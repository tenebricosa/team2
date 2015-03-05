/** @jsx React.DOM */
var ForecastToday = React.createClass({
    render: function () {
        var weatherToday = this.props.today;
        
        return (
            <div className="weather">
                <span className="weather__when">Cегодня, ололо</span>
                <div className="weather-now" style={{"backgroundColor": weatherToday.now.color}}>
                    <div className="weather-now__new-line">
                        <span className="weather-now__degree">{weatherToday.now.temp > 0 ? "+" : ""}{weatherToday.now.temp}°C</span>
                        <div className="weather-now__additional">
                            <p className="additional__line">Ветер: {weatherToday.now.wind_speed} м/с</p>
                            <p className="additional__line">Влажность: {weatherToday.now.humidity}%</p>
                            <p className="additional__line">Давление: {weatherToday.now.pressure} мм рт. ст.</p>
                        </div>
                    </div>
                    <div className="weather-now__new-line">
                        <div className="weather-now__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.now.weather_icon + ".svg)"}}></div>
                        <div className="weather-now__condensation">{weatherToday.now.weather}</div>
                    </div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[0].color}}>
                    <div className="weather__time">Утром</div>
                    <div className="weather__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[0].weather_icon + ".svg)"}}></div>
                    <div className="weather__degree">{weatherToday.parts[0].temp_min > 0 ? "+" : ""}{weatherToday.parts[0].temp_min}</div>
                    <div className="weather__degree">{weatherToday.parts[0].temp_max > 0 ? "+" : ""}{weatherToday.parts[0].temp_max}</div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[1].color}}>
                    <div className="weather__time">Днем</div>
                    <div className="weather__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[1].weather_icon + ".svg)"}}></div>
                    <div className="weather__degree">{weatherToday.parts[1].temp_min > 0 ? "+" : ""}{weatherToday.parts[1].temp_min}</div>
                    <div className="weather__degree">{weatherToday.parts[1].temp_max > 0 ? "+" : ""}{weatherToday.parts[1].temp_max}</div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[2].color}}>
                    <div className="weather__time">Вечером</div>
                    <div className="weather__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[2].weather_icon + ".svg)"}}></div>
                    <div className="weather__degree">{weatherToday.parts[2].temp_min > 0 ? "+" : ""}{weatherToday.parts[2].temp_min}</div>
                    <div className="weather__degree">{weatherToday.parts[2].temp_max > 0 ? "+" : ""}{weatherToday.parts[2].temp_max}</div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[3].color}}>
                    <div className="weather__time">Ночью</div>
                    <div className="weather__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[3].weather_icon + ".svg)"}}></div>
                    <div className="weather__degree">{weatherToday.parts[3].temp_min > 0 ? "+" : ""}{weatherToday.parts[3].temp_min}</div>
                    <div className="weather__degree">{weatherToday.parts[3].temp_max > 0 ? "+" : ""}{weatherToday.parts[3].temp_max}</div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastToday;

