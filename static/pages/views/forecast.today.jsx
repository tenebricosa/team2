/** @jsx React.DOM */
var ForecastToday = React.createClass({
    render: function () {
        var weatherToday = this.props.today;

        return (
            <div className="weather-main">
                <div className="weather-main__container">
                    <span className="weather-main__when">Cегодня,</span>
                    <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.now.color}}>
                        <div className="weather-main__degree">{weatherToday.now.temp > 0 ? "+" : ""}{weatherToday.now.temp} °C</div>
                        <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.now.weather_icon + ".svg)"}}></div>
                        <span className="weather-main__condensation">{weatherToday.now.weather}</span>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">днем</span>
                    <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.parts[0].color}}>
                        <span className="weather-main__degree">{weatherToday.parts[0].temp > 0 ? "+" : ""}{weatherToday.parts[0].temp} °C</span>
                        <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[0].weather_icon + ".svg)"}}></div>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">вечером</span>
                    <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.parts[1].color}}>
                        <span className="weather-main__degree">{weatherToday.parts[1].temp > 0 ? "+" : ""}{weatherToday.parts[1].temp} °C</span>
                        <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[1].weather_icon + ".svg)"}}></div>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">ночью</span>
                    <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.parts[2].color}}>
                        <span className="weather-main__degree">{weatherToday.parts[2].temp > 0 ? "+" : ""}{weatherToday.parts[2].temp} °C</span>
                        <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[2].weather_icon + ".svg)"}}></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastToday;

