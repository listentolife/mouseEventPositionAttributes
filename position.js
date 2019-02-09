let container = document.getElementById('container');
let canvas = document.getElementById('canvas');
let context = canvas = canvas.getContext('2d');

container.addEventListener('click', function (e) {
	console.log(e);

	let poss = {
		clientX: e.clientX,
		clientY: e.clientY,
		layerX: e.layerX,
		layerY: e.layerY,
		offsetX: e.offsetX,
		offsetY: e.offsetY,
		pageX: e.pageX,
		pageY: e.pageY,
		screenX: e.screenX,
		screenY: e.screenY,
		x: e.x,
		y: e.y
	}
	
	targetPos = new Pos(poss, context);

	targetPos.drawCircle();
	targetPos.drawClientPos();
	targetPos.drawLayerPos();
	targetPos.drawOffsetPos();
	targetPos.drawPagePos();
	targetPos.drawText();
	targetPos.normalPos();
})