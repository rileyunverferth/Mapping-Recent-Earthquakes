// Declare center for map
var usCenter = [38.925209, -115.176544];

// Create function for colorscale
function getColor(d) {
  return d > 90 ? "red" :
         d > 70  ? "sandybrown" :
         d > 50  ? "orange" :
         d > 30  ? "gold" :
         d > 10  ? "yellow" :
                   "greenyellow";
}

// Create function to build map
function createMap(response) {

  // Log data to the console
  console.log("Data: ", response);

  // Establish base layer
  var countryMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create the map object
  var myMap = L.map("map", {
    center: usCenter,
    zoom: 6,
    layers: countryMap
  });

  // Establish variable to access features from response
  var earthquakeData = response.features;

  // Empty list to house data from loop
  var earthqakes = [];

  // Loop through earthquake array
  for (var i = 0; i < earthquakeData.length; i++) {
    var earthquake = earthquakeData[i];

    // Plot circles on map from earthquake data, get color from getColor function, size based on depth
    // Add pop ups to show location, magnitude, and depth
    L.circle([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]], {
      fillOpacity: 0.90,
      color: "black",
      weight: 1,
      fillColor: getColor(earthquake.geometry.coordinates[2]),
      radius: earthquake.properties.mag * 10000
      }).bindPopup("Location: " + earthquake.properties.place + "<br>Magnitude: " + earthquake.properties.mag + "<br>Depth (Km): " + earthquake.geometry.coordinates[2]).addTo(myMap);
  }

  // Create legend to show colorscale, add to map
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

// Get data with d3, call createMap function
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(createMap);