var velem = document.getElementById("video-source");
var frame = document.createElement("canvas");
frame.width = velem.scrollWidth;
frame.height = velem.scrollHeight;
velem.width = velem.scrollWidth;
velem.height = velem.scrollHeight;
var fcontext = frame.getContext("2d");
velem.is2D = false;

function is2DFunc(videoElement, frameContext, frame) {
	frameContext.drawImage(videoElement, 0, 0, frame.width, frame.height)
	var idata = frameContext.getImageData(0, 0, frame.width, frame.height);
	var data = idata.data;
	var count = 0;
	for(var i = 0; i < data.length; i += 4) {
		var r = data[i];
		var g = data[i+1];
		var b = data[i+2];
		if(r === 0 && g === 0 && b === 0) {
			count += 1;
		}
	}
	if(count/(frame.width * frame.height) >= 0.5)
		return true;
	return false;
}
console.log("adding event listener");
velem.addEventListener("play", function() {
	frame.width = velem.scrollWidth;
	frame.height = velem.scrollHeight;
	velem.width = velem.scrollWidth;
	velem.height = velem.scrollHeight;
	//var is2D = is2DFunc(velem, fcontext, frame);
	console.log("playing");
	console.log(frame)
	//velem.is2D = is2D;
})