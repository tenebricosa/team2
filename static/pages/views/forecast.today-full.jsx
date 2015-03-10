/** @jsx React.DOM */
var moment = require('moment');

var ForecastToday = React.createClass({
    render: function () {
        var weatherToday = this.props.today,
            date = moment( weatherToday.date ),
            wind_class = "weather-full-now__wind weather-full-now__wind--" + weatherToday.now.wind_direction;
            wind_class0 = "weather-full-now__wind weather-full-now__wind--" + weatherToday.parts[0].wind_direction;
            wind_class1 = "weather-full-now__wind weather-full-now__wind--" + weatherToday.parts[1].wind_direction;
            wind_class2 = "weather-full-now__wind weather-full-now__wind--" + weatherToday.parts[2].wind_direction;
            wind_class3 = "weather-full-now__wind weather-full-now__wind--" + weatherToday.parts[3].wind_direction;
        
        return (
            <div className="weather">
                <span className="weather__when">Cегодня, {date.format('Do MMMM')} </span>
                <div className="weather-full-now" style={{"backgroundColor": weatherToday.now.color}}>
                    <div className="weather-full-now__new-line">
                        <span className="weather-full-now__degree">{weatherToday.now.temp > 0 ? "+" : ""}{weatherToday.now.temp}°C</span>
                        <div className="weather-full-now__update">
                            <p className="update-full-now__line">2 часа назад</p>
                        </div>
                    </div>
                    <div className="weather-full__new-line">
                        <div className="weather-full-now__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.now.weather_icon + ".svg)"}}></div>
                        <div className="weather-full-now__additional">
                            <div className="weather-full-now__condensation">{weatherToday.now.weather}</div>
                            <div className="additional-full__line">Ветер: <div className={wind_class}></div> {weatherToday.now.wind}, {weatherToday.now.wind_speed} м/с</div>
                            <p className="additional-full__line">Влажность: {weatherToday.now.humidity}%</p>
                            <p className="additional-full__line">Давление: {weatherToday.now.pressure} мм рт. ст.</p>
                            <p className="additional-full__line">Восход: {weatherToday.now.sunrise} Заход: {weatherToday.now.sunset}</p>
                        </div>
                    </div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[0].color}}>
                    <div className="weather-full__time">Утром</div>
                    <div className="weather-full__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[0].weather_icon + ".svg)"}}></div>
                    <div className="weather-full__degree">{weatherToday.parts[0].temp_min > 0 ? "+" : ""}{weatherToday.parts[0].temp_min}</div>
                    <div className="weather-full__degree">{weatherToday.parts[0].temp_max > 0 ? "+" : ""}{weatherToday.parts[0].temp_max}</div>
                    <div className="weather-full__additional">
                        <div className="weather-full-now__condensation">{weatherToday.parts[0].weather}</div>
                        <div className="additional-full__line">Ветер: <div className={wind_class0}></div> {weatherToday.parts[0].wind}, {weatherToday.parts[0].wind_speed} м/с</div>
                        <p className="additional-full__line">Влажность: {weatherToday.parts[0].humidity}%</p>
                        <p className="additional-full__line">Давление: {weatherToday.parts[0].pressure} мм рт. ст.</p>
                    </div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[1].color}}>
                    <div className="weather-full__time">Днем</div>
                    <div className="weather-full__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[1].weather_icon + ".svg)"}}></div>
                    <div className="weather-full__degree">{weatherToday.parts[1].temp_min > 0 ? "+" : ""}{weatherToday.parts[1].temp_min}</div>
                    <div className="weather-full__degree">{weatherToday.parts[1].temp_max > 0 ? "+" : ""}{weatherToday.parts[1].temp_max}</div>
                    <div className="weather-full__additional">
                        <div className="weather-full-now__condensation">{weatherToday.parts[1].weather}</div>
                        <div className="additional-full__line">Ветер: <div className={wind_class1}></div> {weatherToday.parts[1].wind}, {weatherToday.parts[1].wind_speed} м/с</div>
                        <p className="additional-full__line">Влажность: {weatherToday.parts[1].humidity}%</p>
                        <p className="additional-full__line">Давление: {weatherToday.parts[1].pressure} мм рт. ст.</p>
                    </div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[2].color}}>
                    <div className="weather-full__time">Вечером</div>
                    <div className="weather-full__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[2].weather_icon + ".svg)"}}></div>
                    <div className="weather-full__degree">{weatherToday.parts[2].temp_min > 0 ? "+" : ""}{weatherToday.parts[2].temp_min}</div>
                    <div className="weather-full__degree">{weatherToday.parts[2].temp_max > 0 ? "+" : ""}{weatherToday.parts[2].temp_max}</div>
                    <div className="weather-full__additional">
                        <div className="weather-full-now__condensation">{weatherToday.parts[2].weather}</div>
                        <div className="additional-full__line">Ветер: <div className={wind_class2}></div> {weatherToday.parts[2].wind}, {weatherToday.parts[2].wind_speed} м/с</div>
                        <p className="additional-full__line">Влажность: {weatherToday.parts[2].humidity}%</p>
                        <p className="additional-full__line">Давление: {weatherToday.parts[2].pressure} мм рт. ст.</p>
                    </div>
                </div>
                <div className="weather__container" style={{"backgroundColor": weatherToday.parts[3].color}}>
                    <div className="weather-full__time">Ночью</div>
                    <div className="weather-full__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[3].weather_icon + ".svg)"}}></div>
                    <div className="weather-full__degree">{weatherToday.parts[3].temp_min > 0 ? "+" : ""}{weatherToday.parts[3].temp_min}</div>
                    <div className="weather-full__degree">{weatherToday.parts[3].temp_max > 0 ? "+" : ""}{weatherToday.parts[3].temp_max}</div>
                    <div className="weather-full__additional">
                        <div className="weather-full-now__condensation">{weatherToday.parts[3].weather}</div>
                        <div className="additional-full__line">Ветер: <div className={wind_class3}></div> {weatherToday.parts[3].wind}, {weatherToday.parts[3].wind_speed} м/с</div>
                        <p className="additional-full__line">Влажность: {weatherToday.parts[3].humidity}%</p>
                        <p className="additional-full__line">Давление: {weatherToday.parts[3].pressure} мм рт. ст.</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastToday;

