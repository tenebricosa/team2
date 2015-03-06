/** @jsx React.DOM */
var moment = require('moment'),
    momentLocales = require('../../../server/locales/moment.locale.js'),
    ForecastShortItem;

moment.locale( 'ru', momentLocales );

ForecastShortItem = React.createClass({
    render: function () {
        var day = this.props.day,
            parts = day.parts,
            date = moment( day.date );

        return (
            <div className="weather">
                <span className={( (date.get('day') == 0 || date.get('day') == 6) ? 'weather__when weather__when-holiday': 'weather__when' )}>
                    Завтра, {date.format('Do MMMM')}
                </span>
                <span className={( (date.get('day') == 0 || date.get('day') == 6) ? 'weather__when weather__when-holiday': 'weather__when' )}>
                    {date.format('Do MMMM')}, <div className="weather__when--weekday">{date.format('dddd')}</div>
                </span>
                {parts.map(function(object, i) {
                    if (i < 4) {
                        return (<div className="weather__container" key={i} style={{"backgroundColor": object.color}}>
                            <div className="weather-short__time">Утром</div>
                            <div className="weather-short__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + object.weather_icon + ".svg)"}}></div>            
                            <div className="weather-short__degree">{object.temp_min>0?"+":""}{object.temp_min}</div>
                            <div className="weather-short__degree">{object.temp_max>0?"+":""}{object.temp_max}</div>
                        </div>)
                    }
                })}
            </div>
        );
    }
});

module.exports = ForecastShortItem;
