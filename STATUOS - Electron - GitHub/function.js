//<!---------------------heatmap------------------------>

      window.onload = function() {
        /*  start legend code */
// we want to display the gradient, so we have to draw it
var legendCanvas = document.createElement('canvas');
legendCanvas.width = 100;
legendCanvas.height = 10;
var min = document.querySelector('#min');
var max = document.querySelector('#max');
var gradientImg = document.querySelector('#gradient');
var legendCtx = legendCanvas.getContext('2d');
var gradientCfg = {};
function updateLegend(data) {
  // the onExtremaChange callback gives us min, max, and the gradientConfig
  // so we can update the legend
  min.innerHTML = data.min;
  max.innerHTML = data.max;
  // regenerate gradient image
  if (data.gradient != gradientCfg) {
    gradientCfg = data.gradient;
    var gradient = legendCtx.createLinearGradient(0, 0, 100, 1);
    for (var key in gradientCfg) {
      gradient.addColorStop(key, gradientCfg[key]);
    }
    legendCtx.fillStyle = gradient;
    legendCtx.fillRect(0, 0, 100, 10);
    gradientImg.src = legendCanvas.toDataURL();
  }
};
/* legend code end */
var heatmapInstance = h337.create({
  container: document.querySelector('.heatmap'),
  // onExtremaChange will be called whenever there's a new maximum or minimum
  onExtremaChange: function(data) {
    updateLegend(data);
  }
});
/* tooltip code start */
var demoWrapper = document.querySelector('#heatmapContainerWrapper');
var tooltip = document.querySelector('.tooltip');
function updateTooltip(x, y, value) {
  // + 15 for distance to cursor
  var transl = 'translate(' + (x + 10) + 'px, ' + (y + 10) + 'px)';
  tooltip.style.webkitTransform = transl;
  tooltip.innerHTML = value;
};
demoWrapper.onmousemove = function(ev) {
  var x = ev.layerX;
  var y = ev.layerY;
  // getValueAt gives us the value for a point p(x/y)
  var value = heatmapInstance.getValueAt({
    x: x, 
    y: y
  });
  passValue();
  tooltip.style.display = 'block';
  updateTooltip(x, y, value);
  
    function passValue(){
        var displayValue=value;
        localStorage.setItem("displayValue",displayValue);
        console.log(localStorage.getItem("displayValue"));
        return false;
    }
};
// hide tooltip on mouseout
demoWrapper.onmouseout = function() {
  tooltip.style.display = 'none';
};
/* tooltip code end */
function printMousePos(event) {
    var clickx = event.clientX;
    var clicky = event.clientY;
    var clickPos = {
      x: clickx,
      y: clicky
  }
  return clickPos;
}

document.addEventListener("click", function(){
    var location = printMousePos(event);
    localStorage.setItem('clickpos', JSON.stringify(location));
    addPoint();
    return false;
    
});

var points = [];
var max = 1000;
var min = 0;
var width = 1920;
var height = 1080;

function addPoint(){
  var test = JSON.parse(localStorage.getItem('clickpos'));
  var val = Math.floor(Math.random()*1234);
  max = Math.max(max, val);
  min = Math.min(min, val);
  var point = {
    x: test.x,
    y: test.y,
    value: 1000
  };
  points.push(point);
    var data = { max: max, min:min, data: points };
    localdata = localStorage.setItem('localData', JSON.stringify(data))
heatmapInstance.setData(JSON.parse(localStorage.getItem('localData')));
}
          
function reset(){
    points = [];
};

//<!---------------------heatmap------------------------>
      
//<!---------------------visualizer--------------------->    
  var clickcount = 0;
  var bod = document.getElementById("container");
    bod.addEventListener('click',addClick);

function addClick(){
    clickcount+=1;
    console.log(clickcount);
    document.getElementById("test").innerHTML=clickcount;
}

setInterval(function(){
   numcont.innerHTML=localStorage.getItem("displayValue");        
},10);

setInterval(function(){
   var coord = JSON.parse(localStorage.getItem('clickpos'));
    coordx.innerHTML=coord.x;
    coordy.innerHTML=coord.y;
},100);
      
      
//<!---------------------visualizer--------------------->     
      
      
      };