const coordinates = {
  // If true, obfuscate the coordinates of the listings that are shown
  // on a map.
  fuzzy: false,

  // Default zoom level when showing a single circle on a Map. Should
  // be small enough so the whole circle fits in.
  fuzzyDefaultZoomLevel: 14,

  // When fuzzy === true, the coordinates on the Map component are
  // obfuscated and a circle is shown instead of a marker. To decide a
  // proper value for the offset and the radius, see:
  //
  // https://gis.stackexchange.com/a/8674

  // Amount of maximum offset in meters that is applied to obfuscate
  // the original coordinates. The actual value is random, but the
  // obfuscated coordinates are withing a circle that has the same
  // radius as the offset.
  coordinateOffset: 500,

  // Options to style the circle appearance.
  //
  // See: https://developers.google.com/maps/documentation/javascript/reference#CircleOptions
  circleOptions: {
    fillColor: '#c0392b',
    fillOpacity: 0.2,
    strokeColor: '#c0392b',
    strokeWeight: 0.5,
    clickable: false,
  },
};

const config = {   
  coordinates,
};

export default config;