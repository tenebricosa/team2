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

    var newPlaceMark = ymaps.templateLayoutFactory.createClass(
        '<div class="baloon ymaps-placemark">' +
        '<a class="link" href="#">asd' +
        // '<i class="icon icon_size_30 baloon__icon" data-width="30" style=' +
        // '"background-image: url(\'http://ekb.shri14.ru/icons/$[properties.weather_icon].svg\')">' +
        // '</i>' +
        '<span class="baloon__temp">$[properties.temp]</span>' +
        '</a>' +
        '</div>'
    );

    $.get('http://ekb.shri14.ru/api/map-data', params).then(function (response) {
        response.map(function(object, i){
            var myPlacemark = new ymaps.Placemark([object.lat, object.lon], {
                hintContent: object.name,
                balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
//    iconContent: "Азербайджан",
            }, {
                iconContentLayout: newPlaceMark,

            });

            myMap.geoObjects.add(myPlacemark);
        })
    });

    
}