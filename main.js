// Variables - Normal
var current_x, current_y; 
var color = "black";
var line_width = 2;
var radius = 10;
var mouseEvent = "empty";
var width = screen.width;
var new_width, new_height;
new_width = screen.width - 70;
new_height = screen.height - 300;
// Variables - Canvas Related
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// Mouse Events
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById('color').value;
    line_width = document.getElementById('line_width').value;
    radius = document.getElementById('radius').value;
    mouseEvent = "mousedown"
}
canvas.addEventListener("mousemove", my_mouseover);
function my_mouseover(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener('mouseup', my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener('mouseleave', my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
// Touch Events
if (width < 992) {
    document.getElementById('myCanvas').width = new_width;
    document.getElementById('myCanvas').height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener('touchstart', my_touchstart);
function my_touchstart(e) {
    current_x = e.touches[0].clientX - offsetLeft;
    current_y = current_y - offsetTop;
    console.log(last_x_position, last_y_position);
    color = document.getElementById('color').value;
    line_width = document.getElementById('line_width').value;
    radius = document.getElementById('radius').value;
}

canvas.addEventListener('touchmove', my_touchmove);
function my_touchmove(e) {
    console.log("Touchmove Kaam Kar Gaya Re Baba");
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(current_x, current_y);
    ctx.arc(current_x, current_y, radius, 0, Math.PI * 2);
    ctx.stroke()
}