ymaps.ready(init);
var myMap,
    myPlacemark;
  

function init(){   
    var coords = $('#map').data()  
    myMap = new ymaps.Map("map", {
        center: [coords.lat, coords.lon],
        zoom: 7
    });

    // $.get('http://ekb.shri14.ru/api/map-data', params).then(function (response) {

    // });

    myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
    });

    myMap.geoObjects.add(myPlacemark);
}