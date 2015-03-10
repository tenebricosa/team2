/** @jsx React.DOM */
var moment = require('moment'),
    momentLocales = require('../../../server/locales/moment.locale.js'),
    ForecastFullItemItem = require('./forecast.full.item.row'),
    ForecastFullItem;

moment.locale( 'ru', momentLocales );

ForecastFullItem = React.createClass({
    render: function () {
        var day = this.props.day,
            date = moment( day.date );
        
        return (
            <div className="weather">
                <div className={( (date.get('day') == 0 || date.get('day') == 6) ? 'weather__when weather__when-holiday': 'weather__when ' )}>
                    Завтра, {date.get('date')} {date.format('MMMM')}
                </div>
                <div className="forecast-full__weather">
                    {day.parts.slice(0,4).map(function(object, i){
                        return <ForecastFullItemItem part={object} key={i}/>;
                    })}
                </div>
            </div>
        );
    }
});

module.exports = ForecastFullItem;
