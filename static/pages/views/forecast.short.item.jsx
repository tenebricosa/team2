/** @jsx React.DOM */
var moment = require('moment'),
    momentLocales = require('../../../server/locales/moment.locale.js'),
    ForecastShortItem;

moment.locale( 'ru', momentLocales );

ForecastShortItem = React.createClass({
    render: function () {
        var day = this.props.day,
            date = moment( day.date );

        return (
            <div>
                <span className={( (date.get('day') == 0 || date.get('day') == 6) ? 'weather__when weather__when-holiday': 'weather__when' )}>
                    <span className="forecast-short__date__monthday">{date.get('date')}, </span>
                    <span className="forecast-short__date__weekday">{date.format('dd')}</span>
                </span>
                <div className="weather__container" style={{"backgroundColor": day.color_max}}>
                    <div className="weather__time">Утром</div>
                    <div className="weather__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + day.weather_icon + ".svg)"}}></div>            
                    <div className="weather__degree">{day.temp_min>0?"+":""}{day.temp_min}</div>
                    <div className="weather__degree">{day.temp_max>0?"+":""}{day.temp_max}</div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastShortItem;
