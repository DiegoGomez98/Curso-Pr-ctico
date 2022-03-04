function calcularModa(lista) {
  let listaCount = {};

  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  //con object.entries vamos a poner arrays dentro de arrays, es decir que nuestro objeto lista1Count se volverá array
  let listaArray = Object.entries(listaCount).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  let moda = listaArray[listaArray.length - 1];
  return moda;
}
