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
            <div>
                <span className={( (date.get('day') == 0 || date.get('day') == 6) ? 'weather__when weather__when-holiday': 'weather__when' )}>
                    <span className="forecast-short__date__monthday">{date.get('date')}, </span>
                    <span className="forecast-short__date__weekday">{date.format('dd')}</span>
                </span>
                {day.parts.map(function(object, i) {
                    return (<div className="weather__container" key={i} style={{"backgroundColor": object.color_max}}>
                        <div className="weather__time">Утром</div>
                        <div className="weather__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + object.weather_icon + ".svg)"}}></div>            
                        <div className="weather__degree">{object.temp_min>0?"+":""}{object.temp_min}</div>
                        <div className="weather__degree">{object.temp_max>0?"+":""}{object.temp_max}</div>
                    </div>)
                })}
            </div>
        );
    }
});

module.exports = ForecastShortItem;
