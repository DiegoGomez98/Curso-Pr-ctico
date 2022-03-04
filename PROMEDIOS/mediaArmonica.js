//let lista = [9, 4, 6, 8, 8, 12];

function calculo(lista) {
  //ordenamos la lista
  lista.sort(function (numeroMenor, numeroMayor) {
    return numeroMenor - numeroMayor;
  });

  //volvemos fracciones todos los elementos de la lista
  let fracciones = lista.map(function (elemento) {
    return 1 / elemento;
  });

  //ahora, sumamos todos los elementos fraccionados
  let sumaFracciones = fracciones.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });

  //formula
  let calcularMediaArmonica = lista.length / sumaFracciones;

  return calcularMediaArmonica;
}
