var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorLinea);

var dibujo = document.getElementById("dibujito");
var lienzo = dibujo.getContext("2d");
var ancho = dibujo.width;

function dibujarLinea(xMoveTo, yMoveTo, xLineTo, yLineTo, color)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo (xMoveTo,yMoveTo);
  lienzo.lineTo (xLineTo, yLineTo);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorLinea()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var l = 0;
  var yi, xf, yi1, xf1,yi2;

  while(l < lineas) {
    yi = espacio * l;
    xf = espacio * (1 + l);
    yi2 = espacio * (lineas - l);

    dibujarLinea(0, yi, xf, ancho, 'purple');
    dibujarLinea(yi, 0, ancho, xf, 'purple');
    dibujarLinea(0, yi2, xf, 0, 'purple');
    l = l + 1;
    yi1 = espacio * (l - 1);
    xf1 = espacio * (lineas - l);
    dibujarLinea(ancho, yi1, xf1, ancho, 'purple');
  }

  dibujarLinea(0,0, ancho,0, 'purple');
  dibujarLinea(0,0, 0,ancho, 'purple');
  dibujarLinea(0,ancho, ancho,ancho, 'purple');
  dibujarLinea(ancho,0, ancho,ancho, 'purple');
}
