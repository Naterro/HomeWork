/* grid */
var canvas = document.getElementById('grid');
var wid = canvas.width;
var hei = canvas.height;
var ctx = canvas.getContext('2d');
for (let i = 1; i <= 10; i++) {
    left_right(ctx, i);
    right_left(i, ctx);
}
ctx.stroke();

function left_right(ctx, y) {
    ctx.moveTo(0, y*20);
    ctx.lineTo(wid, y*20);
}

function right_left(x, ctx) {
    ctx.moveTo(x*20, 0);
    ctx.lineTo(x*20, hei);
}


moveTo(20,0);
for (let i=1;i<=10;i++){
    ctx.lineTo(100,20)
}
/* flag*/
var canvas = document.getElementById("canada");
var wid = canvas.width;
var hei = canvas.height;
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 50, 100);
ctx.fillRect(wid - 50, 0, 50, 100);

ctx.beginPath();
ctx.moveTo(84, 19);
ctx.bezierCurveTo(90, 24, 92, 24, 99, 8);
ctx.bezierCurveTo(106, 23, 107, 23, 113, 19);
ctx.bezierCurveTo(108, 43, 110, 44, 121, 31);
ctx.bezierCurveTo(122, 37, 124, 38, 135, 35);
ctx.bezierCurveTo(130, 48, 131, 50, 136, 51);
ctx.bezierCurveTo(117, 66, 116, 67, 118, 73);
ctx.bezierCurveTo(100, 71, 99, 72, 100, 93);
ctx.lineTo(97, 93);
ctx.bezierCurveTo(97, 72, 97, 71, 79, 74);
ctx.bezierCurveTo(81, 67, 80, 66, 62, 51);
ctx.bezierCurveTo(67, 49, 67, 48, 63, 35);
ctx.bezierCurveTo(74, 38, 75, 37, 77, 31);
ctx.bezierCurveTo(88, 44, 89, 43, 84, 19);
ctx.closePath();
ctx.fill();



