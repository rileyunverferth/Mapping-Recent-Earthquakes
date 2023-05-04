# leaflet-challenge
## Module 15 Challenge
This challenge incorporates Leaflet to plot recent earthquakes on a map, and show their depth and magnitude.

### How frequent are earthquakes?
![Earthquakes](https://github.com/rileyunverferth/leaflet-challenge/blob/main/Starter_Code/Images/6-Time_Keeps_On_Ticking.gif?raw=true)
<br><br>The USGS collects massive amounts of data on earthquakes from all over the world each day, but it can be difficult to view that data in a meaningful way. We're going to create a map that shows that data, and plots in on a map where the earthquake occured.

### United States Geological Survey
![USGS Logo](https://github.com/rileyunverferth/leaflet-challenge/blob/main/Starter_Code/Images/1-Logo.png?raw=true)
<br>On the [USGS website](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) you can monitor data the data they record, and view it in a JSON file. Their feeds include data from the past hour, day, week, or month. The website also gives you a preview of the keys they use for their JSON files. <br>

### USGS GeoJSON Feed
![Website](https://github.com/rileyunverferth/leaflet-challenge/blob/main/Starter_Code/Images/3-Data.png?raw=true)
<br><br>We took data from all earthquakes from the past 7 days. This data is constantly being updated so the map will be populated based on when it is opened.

### JSON File
![JSON](https://github.com/rileyunverferth/leaflet-challenge/blob/main/Starter_Code/Images/4-JSON.png)
<br><br>Calling on the features of the JSON file, we can take the coordinates from each earthquake (which includes their depth) to plot on our map, as well as other features such as location and magnitude to display when they are selected.
<br><br>We imported the data with the code that can be found in the starter file, using Leaflet to first establish a base layer of a map, and then populate that map with our data. You will see that the magnitude of the earthquakes will be reflected by the size of the marker, and the depth of the earthquake by color. Earthquakes with higher magnitudes will appear larger, and earthquakes with greater depth will appear darker in color.

<br>On the map is also a legend to show how to read the depth of the earthquake by color. Some of the code to make the legend, both in the js file and the css file, is from the example that is given on the [Leaflet website](https://leafletjs.com/examples/choropleth/).
### End Result
![Map](https://github.com/rileyunverferth/leaflet-challenge/blob/main/Starter_Code/Images/2-BasicMap.png)
<br><br>The center was chosen to highlight the cluster of earthquakes that occurs in the western part of the continental United States, but feel free to roam around or zoom in or out to get different views!

## Thank you for reading.
