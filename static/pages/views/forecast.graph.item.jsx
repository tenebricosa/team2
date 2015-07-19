/** @jsx React.DOM */
var moment = require('moment');

moment.locale('ru')

ForecastHourlyItem = React.createClass({
    render: function () {
        var day = this.props.day,
            max = this.props.max,
            min = this.props.min,
            maxHeight = this.props.half?50:100,
            height = Math.abs(day.temp*maxHeight/(Math.max(Math.abs(max), Math.abs(min)) + 2)),
            style = {
              height: height +'%',
              background: day.color,
              borderTop: '6px solid ' + day.color_dark
            };
        
        return (
            <div className="forecast-hourly__item">
                <div className="forecast-hourly__bar forecast-hourly__bar_plus" style={style}><div className="forecast-hourly__text">{day.temp>0?"+":""}{day.temp}</div></div>
                <div className="forecast-hourly__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + day.weather + ".svg)"}}></div>
                <div className="forecast-hourly__hour">{moment(day.date).format('dd')}</div>                                       
            </div>
        );
    }
});

module.exports = ForecastHourlyItem;