export class classMina {
  constructor() {
    //Un array con dos posiciones,
    // y en cada una de las posiciones creamos otro array que contiene 8 posiciones cada uno.
    this.tablero = new Array(8);
    for (let i = 0; i < this.tablero.length; i++) {
      this.tablero[i] = new Array(8);
      for (let j = 0; j < this.tablero[i].length; j++) {
        this.tablero[i][j] = 0;
      }
    }
    this.generarBomba();
  }

  //Insertamos la bomba en el tablero
  generarBomba() {
    var fil = 0;
    var col = 0;
    for (let i = 0; i < 10; i++) {
      fil = Math.round(Math.random() * (8 - 1));
      col = Math.round(Math.random() * (8 - 1));
      this.tablero[fil][col] = "bum";

      //  var casillasColindantes = casillasColindantes(fil, col);//recorre el array buscando la bomba
      //   for (let j = 0; j < casillasColindantes.length; j++) {
      //    if(this.tablero[casillasColindantes[j].fil][casillasColindantes[j].col] != "bum"){
      //       this.tablero[casillasColindantes[j].fil][casillasColindantes[j].col]++ ;
      //    }

      //   }
    }
  }
}
// buscarMinaAlrededor(){
//   var xActual = y-1;
//   var yActual = y-1;
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if(this.tablero[xActual][yActual] == "bum"){
//           yActual++;
//       }

//     }
//     xActual++;
//     yActual = y-1;

//   }
// }

// var busca = new buscaminas();
// console.log(busca.tablero);
// document.write(busca.tablero);
// }
