$(document).on('ready', function(){

  var width = 1230,
      height = 1160;

  var projection = d3.geo.mercator()
      .scale(120555)
      .center([-79.37695456083674,43.652928223214616])
      .translate([height / 2, width / 2]);

  var path = d3.geo.path()
    .projection(projection);


  var color = d3.scale.quantize()
      .range(["rgb(237,248,233)","rgb(186,228,179)","rgb(116,196,118)"]);


  var y = d3.scale.sqrt()
    .domain([0, 50000])
    .range([0,325]);

  var yAxis = d3.svg.axis()
    .scale(y)
    .tickValues(color.domain())
    .orient("right");


  var svg = d3.select("#toronto")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
      d3.csv("/data/uber.csv", function(data) {
        color.domain([
          d3.min(data, function(d) { return d.value; }),
          d3.max(data, function(d) { return d.value; })
        ]);

        d3.json("/json/toronto.geojson", function(json) {
          for (var i = 0; i < data.length; i++) {
            var dataID = data[i].id;
            var uberVote = data[i].vote;
            var dataValue = parseFloat(data[i].value);

            for (var j = 0; j < json.features.length; j++) {

              var jsonID = json.features[j].properties.id;

              if (dataID == jsonID) {

                json.features[j].properties.value = dataValue;
                json.features[j].properties.vote = uberVote;

                break;

              }

            }
          }
          svg.selectAll("path")
             .data(json.features)
             .enter()
             .append("path")
             .attr("d", path)
             .style("fill", function(d) {
                var value = d.properties.value;

                if (value) {
                  return color(value);
                } else {
                  return "#ccc";
                }
             })
             .on("mouseover", function(d) {
                var xPosition = d3.mouse(this)[0];
                var yPosition = d3.mouse(this)[1] - 30;


                svg.append("text")
                    .attr("id", "tooltip")
                    .attr("x", xPosition)
                    .attr("y", yPosition)
                    .text(d.properties.HOOD)
                    .attr("text-anchor", "middle");

            })
            .on("mouseout", function(d) {
                d3.select("#tooltip").remove();
            });

      });

      });


});


