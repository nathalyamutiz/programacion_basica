var dibujo = document.getElementById("dibujito");
var lienzo = dibujo.getContext("2d");
var lineas = 30
var l = 0;
var yi, xf, yi1, xf1,yi2;

while(l < lineas) {
  yi = 10 * l;
  xf = 10 * (1 + l);
  yi2 = 10 * (lineas - l);

  dibujarLinea(0, yi, xf, 300, 'purple');
  dibujarLinea(yi, 0, 300, xf, 'purple');
  dibujarLinea(0, yi2, xf, 0, 'purple');
  l = l + 1;
  yi1 = 10 * (l - 1);
  xf1 = 10 * (lineas - l);
  dibujarLinea(300, yi1, xf1, 300, 'purple');
}

dibujarLinea(0,0, 300,0, 'purple');
dibujarLinea(0,0, 0,300, 'purple');
dibujarLinea(0,300, 300,300, 'purple');
dibujarLinea(300,0, 300,300, 'purple');

function dibujarLinea(xMoveTo, yMoveTo, xLineTo, yLineTo, color)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo (xMoveTo,yMoveTo);
  lienzo.lineTo (xLineTo, yLineTo);
  lienzo.stroke();
  lienzo.closePath();
}
