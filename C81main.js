canvas= document.getElementById("my_canvas")
ctx= canvas.getContext("2d");
color= "red";

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 1;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    MouseEvent = "mouseDown";
}

function my_mousedown(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        console.log("Current position of X and Y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2* Math.PI);
        ctx.stroke();
    }
}


function clearArea() {
     ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
}