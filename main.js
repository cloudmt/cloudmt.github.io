
function initialize()
{
  var map = new google.maps.Map(document.getElementById("map"), 
    {
      zoom: 13,
      center: new google.maps.LatLng(45.45, -77.32),
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
  );

  ol = new google.maps.GroundOverlay(
    './CloudMountain_1863.jpg',
    {
      west: -77.412,
      south: 45.4,
  
      east: -77.137,
      north: 45.52
    },
    {
      map: map,
      opacity: 0.6
    }
  );
  
  
  var opacitySlider = document.getElementById('opacitySlider');
  opacitySlider.value = 0.8;
  opacitySlider.oninput =
    function()
    {
      ol.setOpacity(Number(opacitySlider.value));
    };
}
