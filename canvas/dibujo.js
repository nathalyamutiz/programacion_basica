var lienzo = document.getElementById("dibujito");
var dibujo = lienzo.getContext("2d");
console.log(dibujo);

dibujarLinea(0,0, 300,0, 'purple');
dibujarLinea(0,0, 0,300, 'purple');
dibujarLinea(0,300, 300,300, 'purple');
dibujarLinea(300,0, 300,300, 'purple');

function dibujarLinea(xMoveTo, yMoveTo, xLineTo, yLineTo, color)
{
  dibujo.beginPath();
  dibujo.strokeStyle = color;
  dibujo.moveTo (xMoveTo,yMoveTo);
  dibujo.lineTo (xLineTo, yLineTo);
  dibujo.stroke();
  dibujo.closePath();
}
