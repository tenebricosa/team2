var colorsConfig = require('../configs/colors.config.js'),
    colorsDarkConfig = require('../configs/colors-darker.config.js'),
    info = require('../helpers/locality.info.helper.js'),
    extend = require('node.extend');

module.exports = function (req, res) {
    var geoid = req.params.geoid;
    
    info(geoid).then(function (result) {
        //Today view
        var todayMap = function (object, i) {
            if (object.type == "morning" || object.type == "day" || object.type == "evening" || object.type == "night") {
                object.color = colorsConfig[object.temp];
                object.temp_min = object.temp_min;
                object.temp_max = object.temp_max;
                return object;
            }
        }
        
        var todayParts = result.forecast[1].parts.map(todayMap).filter(function(object){return !!object});
        
        //Short view        
        var short = result.forecast.map(function (object, i) {
                var day = object.parts.filter(function(object, i){
                    return object.type == "day_short";
                })[0] || {};
                var night = object.parts.filter(function(object, i){
                    return object.type == "night_short";
                })[0] || {};
                console.log(object.parts)
                return {
                    date: object.date,
                    weather: day.weather,
                    weather_icon: day.weather_icon,
                    temp_max: day.temp,
                    temp_min: night.temp,
                    parts: object.parts.map(todayMap).filter(function(object){return !!object})
                };
        }).slice(0,3);

        //Full view      
        result.forecast.map(function (object, i) {
            object.parts.map(function (object, i) {
                object.color = colorsConfig[object.temp];
            })
        });


        //Hourly view
        var hoursSource = (result.forecast[0].hours).concat(result.forecast[1].hours);
        if (hoursSource.length > 24) {
            hoursSource = hoursSource.slice(-24);
        }
        var hours = [],
            hours_min = 0,
            hours_max = 0;
        
        hoursSource.map(function (object, i) {
            hours_min = object.temp < hours_min ? object.temp : hours_min;
            hours_max = object.temp > hours_max ? object.temp : hours_max;
            hours[hours.length] = {
                temp: object.temp,
                hour: object.hour,
                color: colorsConfig[object.temp],
                color_dark: colorsDarkConfig[object.temp]
            };
        });


        //Graph view
        var graphSource = result.forecast.slice(0,7).map(function(object, i) {
            for (var j in object.parts) {
                var p = object.parts[j]
                if (p.type == 'day_short') {
                    return {date: object.date, temp: p.temp, weather: p.weather_icon, color: colorsConfig[p.temp], color_dark: colorsDarkConfig[p.temp]}
                }
            }
            return {date:'asd'}
        });

        var temps = graphSource.map(function(object, i) {   return object.temp}),
            day_max = Math.max.apply(null, temps),
            day_min = Math.min.apply(null, temps)

        var data = {
            info: result.info,
            title: 'Погода ' + result.info.nameprep,
            today: {
                now: extend(true, result.fact, {
                    sunrise: result.forecast[0].sunrise,
                    sunset: result.forecast[0].sunset,
                    color: colorsConfig[result.fact.temp]
                }),
                date: result.forecast[0].date,
                yesterday: result.yesterday.temp,
                parts: todayParts
            },
            short: short,
            full: result.forecast,
            hourly: {
                hours: hours,
                min: hours_min,
                max: hours_max,
                half: !((hours_min >= 0 && hours_max >= 0) || (hours_min <= 0 && hours_max <= 0))
            },
            graph: {
                data: graphSource,
                max: day_max,
                min: day_min
            }
        };

        res.render(__dirname + '/../../static/pages/views/index', data)

    }).fail(function(a,b){
        res.send('error')
    });
};
