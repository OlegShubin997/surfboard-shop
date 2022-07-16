let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.751338, 37.597355],
        zoom: 14,
        controls: []
    });

    const coords = [
        [55.750579, 37.602445]
    ];

    const myCollection = new ymaps.GeoObjectCollection({},{
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./image/marker.png",
        iconImageSize: [58, 73],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);