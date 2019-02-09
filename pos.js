
function Pos (poss, context) {
	this.poss = poss;
	this.context = context;
	this.position = {
		x: this.poss.layerX + 50,
		y: this.poss.layerY + 250
	}
}

Pos.prototype.drawCircle = function () {
	let poss = this.poss;
	let context = this.context;
	let position = this.position;

	console.log(poss);
	context.beginPath();
	context.arc(position.x, position.y, 3, 0, 2 * Math.PI, false);
	// context.arc(poss.pageX, poss.pageY, 3, 0, 2 * Math.PI, false);
	context.fill();
}

Pos.prototype.drawClientPos = function () {
	let poss = this.poss;
	let context = this.context;
	let position = this.position;

	context.strokeStyle = "green";
	context.beginPath();
	context.moveTo(position.x - poss.clientX, position.y + 15);
	context.lineTo(position.x, position.y + 15);
	context.stroke();

	context.beginPath();
	context.moveTo(position.x + 15, position.y - poss.clientY);
	context.lineTo(position.x + 15, position.y);
	context.stroke();
};

Pos.prototype.drawLayerPos = function () {
	let poss = this.poss;
	let context = this.context;
	let position = this.position;

	context.strokeStyle = "red";
	context.beginPath();
	context.moveTo(50, position.y);
	context.lineTo(position.x, position.y);
	context.stroke();
	
	context.beginPath();
	context.moveTo(position.x, 250);
	context.lineTo(position.x, position.y);
	context.stroke();	
};

Pos.prototype.drawOffsetPos = function () {
	let poss = this.poss;
	let context = this.context;
	let position = this.position;

	context.strokeStyle = "orange";
	context.beginPath();
	context.moveTo(position.x - poss.offsetX, position.y + 45);
	context.lineTo(position.x, position.y + 45);
	context.stroke();

	context.beginPath();
	context.moveTo(position.x + 45, position.y - poss.offsetY);
	context.lineTo(position.x + 45, position.y);
	context.stroke();
};

Pos.prototype.drawPagePos = function () {
	let poss = this.poss;
	let context = this.context;
	let position = this.position;

	context.strokeStyle = "grey";
	context.beginPath();
	context.moveTo(position.x - poss.pageX, position.y + 30);
	context.lineTo(position.x, position.y + 30);
	context.stroke();

	context.beginPath();
	context.moveTo(position.x + 30, position.y - poss.pageY);
	context.lineTo(position.x + 30, position.y);
	context.stroke();
};

Pos.prototype.normalPos = function () {
	let poss = this.poss;
	let context = this.context;
	let position = this.position;

	context.strokeStyle = "purple";
	context.beginPath();
	context.moveTo(position.x - poss.x, position.y + 60);
	context.lineTo(position.x, position.y + 60);
	context.stroke();

	context.beginPath();
	context.moveTo(position.x + 60, position.y - poss.y);
	context.lineTo(position.x + 60, position.y);
	context.stroke();
};
Pos.prototype.drawText = function () {
	let poss = this.poss;
	let context = this.context;
	let position = this.position;
	context.font = '10px arial';

	context.fillStyle = 'red';
	context.fillText(`layerX: ${poss.layerX}px`, 50 + 5, position.y + 10);
	context.fillText(`layerY: ${poss.layerY}px`, position.x + 5, 250 + 10);

	context.fillStyle = 'green';
	context.fillText(`clientX: ${poss.clientX}px`, 50 + 5, position.y + 25);
	context.fillText(`clientY: ${poss.clientY}px`, position.x + 20, 250 + 25);

	context.fillStyle = 'orange';
	context.fillText(`offsetX: ${poss.offsetX}px`, 50 + 5, position.y + 55);
	context.fillText(`offsetY: ${poss.offsetY}px`, position.x + 50, 250 + 55);

	context.fillStyle = 'grey';
	context.fillText(`pageX: ${poss.pageX}px`, 50 + 5, position.y + 40);
	context.fillText(`pageY: ${poss.pageY}px`, position.x + 35, 250 + 40);

	context.fillStyle = 'purple';
	context.fillText(`x: ${poss.x}px`, 50 + 5, position.y + 70);
	context.fillText(`y: ${poss.y}px`, position.x + 65, 250 + 70);
}
