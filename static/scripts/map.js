ymaps.ready(init);

function init(){   
    var coords = $('#map').data();
    var myMap = new ymaps.Map("map", {
        center: [coords.lat, coords.lon],
        zoom: 7
    });

    var myPlacemark = ymaps.templateLayoutFactory.createClass(
        '<div class="map__placemark hover ymaps-placemark">' +
            '<i class="map__icon icon" style=' +
                '"background-image: url(\'http://ekb.shri14.ru/icons/$[properties.weatherIcon].svg\')">' +
            '</i>' +
            '<span class="map__temp">$[properties.iconContent]</span>' +
        '</div>'
    );

    ymaps.layout.storage.add('metka#m', myPlacemark); 
    var cache = {}
    var render = function (){
        console.log('boundschange kek')
        var bounds = myMap.getBounds();
        for (x in bounds) {for (y in bounds[x]) {bounds[x][y] = bounds[x][y].toFixed(0)}}
        var params = {
            lt: [bounds[0][1],bounds[1][0]].join(','),
            rb: [bounds[1][1], bounds[0][0]].join(','),
            zoom: 7
        }
        console.log(cache[params], params)
        if (cache[bounds.toString()]) {
            return
        }

        $.get('http://ekb.shri14.ru/api/map-data', params).then(function (response) {
            console.log('request')
            cache[params] = response
            response.map(function(object, i) {
                var myGeoObject = new ymaps.Placemark(
                     [object.lat, object.lon],
                     {draggable: 1,
                        iconContent: object.temp,
                        hintContent: object.name,
                        weatherIcon: object.weather_icon,
                    },
                 {
                    iconLayout: 'metka#m',
                });
                
                myMap.geoObjects.add(myGeoObject);
            })
        });
        
    }
    myMap.events.add('boundschange', render);
    render()
}