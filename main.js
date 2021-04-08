var mouseevent = "empty";
 var lastx, lasty; 
 canvas = document.getElementById("myCanvas"); 
 ctx = canvas.getContext("2d");
  color = "black"; 
  width = 1;
   canvas.addEventListener("mousedown", mymousedown); 
   function mymousedown(e) { mouseevent = "mousedown";
 } canvas.addEventListener("mouseup", mymouseup); function mymouseup(e) { mouseevent = "mouseup";
 } canvas.addEventListener("mouseleave", mymouseleave); function mymouseleave(e) { mouseevent = "mouseleave";
 } canvas.addEventListener("mousemove", mymouse);
  function mymouse(e) { current_x = e.clientX - canvas.offsetLeft; 
    current_y = e.clientY - canvas.offsetTop;
     if (mouseevent == "mousedown") { ctx.beginPath(); 
        ctx.strokeStyle = color;
         ctx.lineWidth = width;
          ctx.arc(current_x, current_y, 15, 0, 2 * Math.PI); 
          ctx.stroke(); } }
