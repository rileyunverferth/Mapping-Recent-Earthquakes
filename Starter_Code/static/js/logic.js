
var usCenter = [38.925209, -115.176544];

function createMap(response) {

  console.log("Data: ", response);

  var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var myMap = L.map("map", {
    center: usCenter,
    zoom: 6,
    layers: countryMap
  });

  var earthquakeData = response.features;

  var earthqakes = [];

  function getColor(d) {
    return d > 90 ? "red" :
           d > 70  ? "sandybrown" :
           d > 50  ? "orange" :
           d > 30  ? "gold" :
           d > 10  ? "yellow" :
                     "greenyellow";
  }

  for (var i = 0; i < earthquakeData.length; i++) {
    var earthquake = earthquakeData[i];

    L.circle([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]], {
      fillOpacity: 0.90,
      color: "black",
      weight: 1,
      fillColor: getColor(earthquake.geometry.coordinates[2]),
      radius: earthquake.properties.mag * 10000
      }).bindPopup("Location: " + earthquake.properties.place + "<br>Magnitude: " + earthquake.properties.mag + "<br>Depth (Km): " + earthquake.geometry.coordinates[2]).addTo(myMap);
  }

  var legend = L.control({
    position: "bottomright"
  });
  legend.onAdd = function(myMap) {
    var div = L.DomUtil.create('div', 'info legend'),
        categories = [-10, 10, 30, 50, 70, 90];

    for (var i=0; i < categories.length; i++) {
      div.innerHTML += '<i style="background: ' + getColor(categories[i] + 1) + '"></i>' + categories[i] + (categories[i+1] ? '&ndash;' + categories[i + 1] + '<br>' : '+');
    }
    return div;
    };
  legend.addTo(myMap);
};

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(createMap);