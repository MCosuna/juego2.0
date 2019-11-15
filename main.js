import {classMina} from "./classMina.js";
var busca = new classMina();

function marcarCasilla(celda, fila, columna) {
  var cont = 0;
  //coge la celda, fila y columna del tablero.
  var resultado = busca.tablero[fila][columna]; //recorre el tablero por fila y columna
  celda.innerHTML = resultado; //muestra el resultado en la celda correspondiente, y lo muestra
  if (resultado == "bum") {
    celda.style.backgroundImage = "url('boom.jpg')"; //  inserta img de la bomba
    celda.innerHTML = "";
    // celda.style.backgroundColor = "red";
    alert("Has perdido"); //Si elelemento que existe en el array es BUM, has perdido
    var celdas = document.getElementsByTagName("td"); //coge las celdas, que es td
    for (let i = 0; i < celdas.length; i++) {
      celdas[i].style.pointerEvents = "none"; //ELIMINA LOS EVENTOS ASOCIADOS A DICHA CELDA, SIRVE PARA APLICARLO CUANDO PIERDES
    }
  } else if (resultado == 0) {
    celda.innerHTML = "1";
    celda.style.color = "blue";
  }
  //Si nos quedamos sin celdas, hemos ganado.
  casillasFaltan--;
  if (casillasFaltan == 0) {
    alert("has ganado");
  }
}

function inicio() {
  //Obtengo el primero elemento del árbol que me proporciona
  var body = document.getElementsByTagName("body")[0];
  var tablasExistentes = document.getElementsByTagName("table"); //Comprueba los elementos tabla
  for (let i = 0; i < tablasExistentes.length; i++) {
    //recorre la tabla que encuentra en el paso de arriba
    body.removeChild(tablasExistentes[i]); //elimina todos los hijos del elemento body que contenga tablaexistente
  }
  var casillasFaltan = 8 * 8 - 10; //Si tenemos una tabla de 8x8, pues le restamos las bombas
  var tabla = document.createElement("table"); //crea un elemento tipo <table>
  for (let i = 0; i < busca.tablero.length; i++) {
    var tr = document.createElement("tr"); //crear el elemento tr
    for (let j = 0; j < busca.tablero.length; j++) {
      var td = document.createElement("td");
      var texto = busca.tablero[i][j];

      td.style.width = "30px";
      td.style.height = "30px";
      td.innerHTML = "&nbsp;";
      tr.appendChild(td);
      tabla.appendChild(tr);
      td.addEventListener("click", function (event) {
        //creamos un evento
        marcarCasilla(event.target, i, j); //event.target retorna la celda en la que se ha hecho click,
        //y la comprueba con los bucles fil y col.
      });
      td.addEventListener("click", function (event) {
        // ponerBandera(event.target, i,j);
        if (event.ctrlKey) {
          // event.target.style.backgroundColor = "red";
          event.target.style.backgroundImage = "url('marca.jpg')";
          event.target.innerHTML = "";
        }
      });
      // evento contextmenu para poner la bandera ???
    }
  }
  //cerramos las etiquetas
  tabla.appendChild(tr);
  body.appendChild(tabla);
  tr.appendChild(td);
  //añadimos los atributos
  tabla.setAttribute("border", "1");
  tabla.setAttribute("width", "250");
  tabla.setAttribute("height", "250");
  tabla.setAttribute("bgcolor", "#FFFFFF");
  body.setAttribute("bgcolor", "black");
  tabla.setAttribute("cellpadding", "0");
  tabla.setAttribute("cellspacing", "1");
}

// function ponerBandera(event){
//     if (event.ctrlKey) {
//       event.target.style.backgroundColor = "red";
//       alert("marcada");
//     }
// }

inicio();
var btnInicio = document.getElementById("inicio");
btnInicio.addEventListener("click", inicio); //adevent listener añade un evento a un elemento de la página.

// console.log(busca.generarBomba());
