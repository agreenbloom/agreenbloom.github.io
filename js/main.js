// $( document ).ready(function() {
//   console.log( "ready!" );
//
//   // $(".underline").hover(function () {
//   //   $(this).animate({
//   //     width : '80%'
//   //   }, 600);
//   //   console.log ('hover')
//   // });
//
// });


$(document).on('ready', function(){

  L.mapbox.accessToken = 'pk.eyJ1IjoiYWdyZWVuYmxvb20iLCJhIjoiMmIyMWUzZjc2OTE2Yjk3ODg2NDM1NGM3MDZiOWYxMzcifQ.VsF_nJF3v7yTmshY8MEcKQ';

  var map = L.mapbox.map('map-one', 'mapbox.streets')
    .setView([45.4665666,-31.692693], 3);
  var layers = document.getElementById('menu-ui');

// add layers to map

var featureLayer = L.mapbox.featureLayer('agreenbloom.nin7jalk');

featureLayer.on('ready', function() {
  console.log(featureLayer.getGeoJSON());
});

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();


// function for pop up button

  map.featureLayer.on('ready', function(e){
    document.getElementById('open-popup').onclick = clickbutton;
  });

  function clickButton(){
    map.featureLayer.eachLayer(function(marker){
      if (maker.feature.properties.title ==- '') {
        marker.openPopup();
      }
    });
  }

// get images from Instagram
  function mapData(data) {

    window.data = data;

    for (var i = 0; i < data.length; i++) {

      if (typeof data[i]['location']) {
        var arr = [
          data[i]['location']['latitude'],
          data[i]['location']['longitude']
        ];

        // console.log(arr);
      }

      // creating markers from instagram pictures
      var iconUrl = data[i]['images']['thumbnail']['url']
      var myIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25],
      })

      var marker = L.marker(arr, {
        icon: myIcon
      })
      .bindPopup(data[i]['caption']['text'])
      .addTo(map);
      ;

    }
  }


  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: true,
    url: "https://api.instagram.com/v1/users/self/media/recent?access_token=331450725.1fb234f.4b990d8ef88348d6911570ee3a8c8fe6&HTTP/1.1",
    pagination: {
      next_url: "https://api.instagram.com/v1/users/331450725/media/recent?access_token=331450725.1fb234f.4b990d8ef88348d6911570ee3a8c8fe6&max_id=796511003009047517_331450725&HTTP%2F1.1=&count=-1 ",
      next_max_id: "max_id=419818452284037943_331450725"
    },
    success: function(data) {
      data = data['data'];
      mapData(data);
    }
  });

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: true,
    url: "https://api.instagram.com/v1/users/self/media/recent?access_token=331450725.1fb234f.4b990d8ef88348d6911570ee3a8c8fe6&max_id=419818452284037943_331450725&HTTP%2F1.1=",
    success: function(data) {
      data = data['data'];
      mapData(data);
    }
  });

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: true,
    url: "https://api.instagram.com/v1/users/self/media/recent?access_token=331450725.1fb234f.4b990d8ef88348d6911570ee3a8c8fe6&max_id=457078848824760554_331450725&HTTP%2F1.1=",
    success: function(data) {
      data = data['data'];
      mapData(data);
    }
  });

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: true,
    url: "https://api.instagram.com/v1/users/self/media/recent?access_token=331450725.1fb234f.4b990d8ef88348d6911570ee3a8c8fe6&max_id=474770154837465807_331450725&HTTP%2F1.1=",
    success: function(data) {
      data = data['data'];
      mapData(data);
    }
  });

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: true,
    url: "https://api.instagram.com/v1/users/self/media/recent?access_token=331450725.1fb234f.4b990d8ef88348d6911570ee3a8c8fe6&max_id=569556043098183851_331450725&HTTP%2F1.1=",
    success: function(data) {
      data = data['data'];
      mapData(data);
    }
  });

});
