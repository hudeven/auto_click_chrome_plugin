var count = 0;
var canvas = document.getElementsByTagName("canvas")[0];
canvas.addEventListener('click', 
	function() { 
 		console.log("canvas is clicked");
	}
	, false);

setInterval(autoClick,500);

function autoClick() {
	count++;
	// var element = document.elementFromPoint(650, 100); // select element by coordinates
	var element = document.getElementsByTagName("canvas")[0];
	dispatchMouseEvent(element, 'mouseover', true, true);
	dispatchMouseEvent(element, 'mousedown', true, true);
	dispatchMouseEvent(element, 'click', true, true);
	dispatchMouseEvent(element, 'mouseup', true, true);
	// click(650, 100); // click by coordinates
}

var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
  // console.log("clicked " + count)
};

function click(x,y){
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x,y);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        x, y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}