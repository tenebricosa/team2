ymaps.ready(init);
var myMap;

function init(){   
    var coords = $('#map').data()  
    myMap = new ymaps.Map("map", {
        center: [coords.lat, coords.lon],
        zoom: 7
    });
    var bounds = myMap.getBounds();
    var params = {
        lt: [bounds[0][1],bounds[1][0]].join(','),
        rb: [bounds[1][1], bounds[0][0]].join(','),
        zoom: 7
    }

    var myPlacemark = ymaps.templateLayoutFactory.createClass(
        '<div class="map__placemark">' +
            '<i class="map__icon" style=' +
                '"background-image: url(\'http://ekb.shri14.ru/icons/$[properties.weatherIcon].svg\')">' +
            '</i>' +
            '<span class="map__temp">$[properties.iconContent]</span>' +
        '</div>',
        {
            build: function () {
                this.constructor.superclass.build.call(this);
            },
            clear: function () {
                this.constructor.superclass.clear.call(this);
            }
        }
    );

    ymaps.layout.storage.add('metka#m', myPlacemark); 

    $.get('http://ekb.shri14.ru/api/map-data', params).then(function (response) {

        response.map(function(object, i) {
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [object.lat, object.lon]
                },
                properties: {
                    iconContent: object.temp,
                    hintContent: object.name,
                    weatherIcon: object.weather_icon
                }
            }, {
                iconContentLayout: 'metka#m'
            });
            myMap.geoObjects.add(myGeoObject);
        })
    });
    
}