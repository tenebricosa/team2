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
                        <span>{date.get('date')} {date.format('MMMM')}</span>
                </div>
                <div className="forecast-full__weather">
                    {(function( scope ){
                        if ( scope.props.item === 0 ) {
                            return <div className="forecast-full__weather__header">
                                <div className="forecast-full__weather__degree"></div>
                                <div className="forecast-full__weather__precipitation"></div>
                                <div className="forecast-full__weather__pressure">
                                    <div className="forecast-full__title">давление,
                                        <br/>
                                    мм&nbsp;рт.&nbsp;ст.</div>
                                </div>
                                <div className="forecast-full__weather__humidity">
                                    <div className="forecast-full__title">влажность</div>
                                </div>
                                <div className="forecast-full__weather__wind">
                                    <div className="forecast-full__title">ветер,
                                        <br/>
                                    м/с</div>
                                </div>
                            </div>
                        }
                    })( this )}
                        
                    {day.parts.map(function(object, i){
                        // morning, day, evening, night
                        // todo не возвращать больше 4х
                        if ( i < 4 ) {
                            return <ForecastFullItemItem part={object} key={i}/>;
                        }
                    })}
                </div>
            </div>
        );
    }
});

module.exports = ForecastFullItem;
