function calcularMedia(lista) {
  let sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  let promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//let lista1 = [100, 200, 500, 400000000];

function calcularMediana(lista) {
  // Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
  const listaOrdenada = lista.sort(function (numeroMenor, numeroMayor) {
    return numeroMenor - numeroMayor;
  });
  // console.log(listaOrdenada);

  // Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
  let mitadLista = parseInt(listaOrdenada.length / 2);

  // Creamos la funcion esPar para verificar si la lista es par o impar
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  // Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
  if (esPar(listaOrdenada.length)) {
    let elemento1 = listaOrdenada[mitadLista - 1];
    let elemento2 = listaOrdenada[mitadLista];

    // Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
    let promedioElementos = calcularMedia([elemento1, elemento2]);
    mediana = promedioElementos;
  } else {
    mediana = listaOrdenada[mitadLista];
  }

  return mediana;
}
