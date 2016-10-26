craftEd.data = {
  "name": "",
  "rating": 0,

 "children": [

    {
      "name": "Browns", "size": 15,
      "rating": 0,
      "children": [
        {
          "name": "American", "size": 5
        },
        {
          "name": "English", "size": 5
        }
      ]
    },


    {
     "name": "Porters","size": 5,
     "rating": 1,
     "children": [
        {
          "name": "Baltic", "size": 5
        },
        {
          "name": "Robust", "size": 5
        }
      ]
    },

    {
     "name": "Stouts","size": 5,
     "rating": -2,
     "children": [
        {
          "name": "Dry", "size": 5
        },
        {
          "name": "Sweet", "size": 5
        },
        {
          "name": "Oatmeal", "size": 5
        },
         {
          "name": "Foreign", "size": 5
        },
         {
          "name": "Imperial", "size": 5
        }
      ]
    },

    {
     "name": "Pale Ales","size": 5,
     "rating": 2,
     "children": [
        {
          "name": "American", "size": 5
        },
        {
          "name": "American Double", "size": 5
        },
        {
          "name": "India", "size": 5
        },
         {
          "name": "Bitter", "size": 5
        }
      ]
    },

    {
     "name": "Belgians","size": 5,
     "rating": 3,
     "children": [
        {
          "name": "Abbey", "size": 5
        },
        {
          "name": "Tripel", "size": 5
        },
        {
          "name": "Dubbel", "size": 5
        },
         {
          "name": "Quadrupel", "size": 5
        },
        {
          "name": "Saison", "size": 5
        },
        {
          "name": "Golden Blonde", "size": 5
        },
        {
          "name": "Lambic", "size": 5
        },
        {
          "name": "Flanders", "size": 5
        }
      ]
    },

     {
     "name": "Sours","size": 5,
     "rating": 1,
     "children": [
        {
          "name": "Lambic", "size": 5
        },
        {
          "name": "Flanders", "size": 5
        },
        {
          "name": "Wild", "size": 5
        },
        {
          "name": "Berlinweisse", "size": 5
        }
      ]
    },

    {
     "name": "Wheats","size": 5,
     "rating": 1,
     "children": [
        {
          "name": "Hefeweizen", "size": 5
        },
        {
          "name": "Dunkelweizen", "size": 5
        },
        {
          "name": "Witbier", "size": 5
        }
      ]
    },


     {
     "name": "Bocks","size": 5,
     "rating": -1,
     "children": [
        {
          "name": "Eisbock", "size": 5
        },
        {
          "name": "Maibock/Helles", "size": 5
        },
        {
          "name": "Doppelbock", "size": 5
        }
      ]
    },

    {
     "name": "Pale Lagers","size": 5,
     "rating": -2,
     "children": [
        {
          "name": "American", "size": 5
        },
        {
          "name": "India", "size": 5
        },
        {
          "name": "Pilsner", "size": 5
        },
         {
          "name": "Munich Dunkel", "size": 5
        },
        {
          "name": "Munich Helles", "size": 5
        },
        {
          "name": "Schwarzbier", "size": 5
        }
      ]
    },

    {
     "name": "Dark Lagers","size": 5,
     "rating": 1,
     "children": [
        {
          "name": "Munich Helles", "size": 5
        },
        {
          "name": "Schwarzbier", "size": 5
        },
        {
          "name": "Marzen", "size": 5
        }
      ]
    },

    {
     "name": "Ambers","size": 5,
     "rating": -3,
     "children": [
        {
          "name": "Vienna", "size": 5
        },
        {
          "name": "Rauchbier", "size": 5
        },
        {
          "name": "Amber", "size": 5
        }
      ]
    }
   ]
}

// var type0 = angular.element(document.querySelector('beer-type-0'));
// var type1 = angular.element(document.querySelector('beer-type-1'));
var type2 = document.getElementsByClassName('beer-type-2');

var wheelClick = function(){
    for(var i = 0; i < type2.length; i++){
      type2[i].style.opacity = 1;
    }
  };

var wheelHide = function(){
  for(var i = 0; i < type2.length; i++){
      type2[i].style.opacity = 0;
    }
  };
var literallyNothing = function(){
  console.log('')
}

var width = 320,
    height = 320,
    radius = Math.min(width, height)/2.2;

var x = d3.scale.linear().range([0, 2 * Math.PI]);
var y = d3.scale.linear().range([0, radius]);
var partition = d3.layout.partition().value(function(d) { return d.size; });
// Interpolate the scales!
function arcTween(d) {
  var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
      yd = d3.interpolate(y.domain(), [d.y, 1]),
      yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
  return function(d, i) {
    return i
        ? function(t) { return arc(d); }
        : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
  };
}
// This function rotates the words so they fill in all the boxes
function computeTextRotation(d) {
  if (d.name === "Beer") { return 0; }
  return (x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180;
}

var arc = d3.svg.arc()
    .startAngle(function(d) {return Math.max(0, Math.min(2 * Math.PI, x(d.x)));})
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

var generateChart = function(scope, elem, attrs) {
  var color = d3.scale.threshold().domain([-3,-2,-1,0,1,2,3]).range(["#F9A828","#B71C1C","#EF5350","#EF9A9A","#F9A828","#81C784","#43A047","#1B5E20"]);
  var svg = d3.select(elem[0]).append("svg")
    .attr("width", width)
    .attr("height", height + 100)
    .append("g")
    .attr("transform", "translate(" + (width / 2+1) + "," + (height / 2) + ")");

  var g = svg.selectAll("g")
    .data(partition.nodes(craftEd.data))
    .enter().append("g")
    .attr("onclick", function(d){
      if(d.depth === 0){
        return "wheelHide()";
      }else if(d.depth === 1){
        return "wheelClick()";
      }else if(d.depth === 2){
        return "literallyNothing()";
      }
    })
    .attr("id", function(d){ return d.name })
    .attr("class", function(d){ return d.name + " beer-type-" + d.depth});

  var path = g.append("path")
    .attr("d", arc)
    // Below is the method that applies the color template to the wheel
    .style("fill", function(d) {return color((d.children ? d : d.parent).rating); })
    .on("click", click);

  var text = g.append("text")
    .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
    .attr("x", function(d) {return y(d.y);})
    .attr("dx", "6") // margin
    .attr("dy", ".35em") // vertical-align
    .text(function(d) { return d.name; })
    .on("click", click);

  function click(d) {
    // fade out all text elements
    text.transition().attr("opacity", 0);
    path.transition()
      .duration(600)
      .attrTween("d", arcTween(d))
      .each("end", function(e, i) {
          // check if the animated element's data e lies within the visible angle span given in d
          if (e.x >= d.x && e.x < (d.x + d.dx)) {
            // get a selection of the associated text element
            var arcText = d3.select(this.parentNode).select("text");
            // fade in the text element and recalculate positions
            arcText.transition().duration(600)
              .attr("opacity", 1)
              .attr("transform", function() { return "rotate(" + computeTextRotation(e) + ")" })
              .attr("x", function(d) { return y(d.y); });
          }
      });
    };
    d3.select(self.frameElement).style("height", height + "px");
  }





craftEd.directive('fwVisualization', function() {
  return {
    restrict: 'A',
    link: generateChart
  }
});
