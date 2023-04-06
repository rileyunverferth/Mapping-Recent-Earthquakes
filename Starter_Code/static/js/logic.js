var usCenter = [40.279506, -112.847442];


function createMap(response) {

    var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

    var baseMaps = {
        "Country Map": countryMap
    };

    var myMap = L.map("map", {
        center: usCenter,
        zoom: 5,
        layers: countryMap
    });

    console.log("Data: ", response);

    var earthquakeData = response.features;

    var earthqakes = [];

    for (var i = 0; i < earthquakeData.length; i++) {
        var earthquake = earthquakeData[i];

        var earthquakeMarker = L.marker([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]).bindPopup("Location: " + earthquake.properties.place + "<br>Magnitude: " + earthquake.properties.mag).addTo(myMap);

    }
}

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(createMap);