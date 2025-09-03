require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer"
], function(Map, MapView, CSVLayer) {

  // CSV file URL
  var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

 
  var renderer = {
    type: "simple",
    symbol: {
      type: "simple-marker",
      color: "green",
      size: "6px",
      outline: {
        color: "white",
        width: 0.5
      }
    }
  };

  // Create CSV Layer
  var csvLayer = new CSVLayer({
    url: url,
    title: "St. Louis Crime Data",
    renderer: renderer
  });

  // Create Map
  var map = new Map({
    basemap: "gray-vector",
    layers: [csvLayer]
  });

  // MapView centered on St. Louis
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-90.1994, 38.6270], // St. Louis, MO
    zoom: 10
  });
});
