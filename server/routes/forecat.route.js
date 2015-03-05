var colorsConfig = require('../configs/colors.config.js'),
    info = require('../helpers/locality.info.helper.js'),
    extend = require('node.extend');

module.exports = function (req, res) {
    var geoid = req.params.geoid;
    
    info(geoid).then(function (result) {
        //Short view        
        var short = [];
        result.forecast.map(function (object, i) {
            if (i < 10) {
                var day = object.parts.filter(function(object, i){
                    return object.type == "day_short";
                })[0];
                var night = object.parts.filter(function(object, i){
                    return object.type == "night_short";
                })[0];
                
                short[short.length] = {
                    date: object.date,
                    weather: day.weather,
                    weather_icon: day.weather_icon,
                    temp_max: day.temp,
                    temp_min: night.temp,
                    color_max: colorsConfig[day.temp],
                    color_min: colorsConfig[night.temp]
                };
            }
        });

        //Full view      
        result.forecast.map(function (object, i) {
            object.parts.map(function (object, i) {
                object.color = colorsConfig[object.temp];
            })
        });

        //Today view
        var todayParts = [];
        result.forecast[0].parts.map(function (object, i) {
            if (object.type == "morning" || object.type == "day" || object.type == "evening" || object.type == "night") {
                object.color = colorsConfig[object.temp];
                object.temp_min = object.temp_min;
                object.temp_max = object.temp_max;
                todayParts[todayParts.length] = object;
            }
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
                color: colorsConfig[object.temp]
            };
        });


        var data = {
            info: result.info,
            title: 'Погода ' + result.info.nameprep,
            today: {
                now: extend(true, result.fact, {
                    sunrise: result.forecast[0].sunrise,
                    sunset: result.forecast[0].sunset,
                    color: colorsConfig[result.fact.temp]
                }),
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
            }
        };

        res.render(__dirname + '/../../static/pages/views/index', data)

    });
};
