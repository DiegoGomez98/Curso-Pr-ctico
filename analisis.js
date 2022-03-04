//FUNCIONES HELPERS/UTILS
function esPar(numero) {
  //  if (numero % 2 === 0) {
  //    return true;
  //  } else {
  //    return false;
  //  }
  //  SE PUEDE SIMPLIFICAR POR:
  return numero % 2 === 0;
}

function calcularMedia(lista) {
  let sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  let promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//CALCULADORA DE MEDIANAS
function medianaSalarios(lista) {
  let mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    let personitaMitad1 = lista[mitad - 1];
    let personitaMitad2 = lista[mitad];

    let mediana = calcularMedia([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    let personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

//MEDIANA GENERAL
let salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

let salariosColSorted = salariosCol.sort(function (
  salariosMenor,
  salarioMayor
) {
  return salariosMenor - salarioMayor;
});

let mediaGeneralCol = medianaSalarios(salariosColSorted);

//MEDIA DEL TOP 10%
let spliceStart = (salariosColSorted.length * 90) / 100;
let spliceCount = salariosColSorted.length - spliceStart;

let salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

let mediaTop10Col = medianaSalarios(salariosColTop10);

console.log({
  mediaGeneralCol,
  salariosColTop10,
});
