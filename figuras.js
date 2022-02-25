//CÓDIGO CUADRADO
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lado del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

//CÓDIGO TRIÁNGULO
console.group("Triángulo");

//const lado1 = 6;
//const lado2 = 6;
//const base = 4;

//console.log(
//  "Los lados del triángulo miden: " +
//    lado1 +
//    "cm, " +
//    lado2 +
//    "cm y " +
//    base +
//    "cm"
//);

//const altura = 5.5;
//console.log("La altura del triángulo es: " + altura + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//  console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//CÓDIGO CIRCULO
console.group("Circulo");

//radio
//const radio = 4;
//console.log("El radio del circulo es: " + radio + "cm");

//diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
//console.log("El diámetro del circulo es: " + diametro + "cm");

//PI
const PI = Math.PI;
//console.log("PI es igual a: " + PI);

//circunferencia
function circunferenciaCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetro + "cm");

//área
function areaCirculo(radio) {
  return radio * radio * PI;
}
//console.log("El área del circulo es: " + areaCirculo + "cm2");

console.groupEnd();

//Desde aquí interactuamos con el html

//CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//TRIANGULO
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);

  const inputLado2 = document.getElementById("inputLado2");
  const valueLado2 = Number(inputLado2.value);

  const inputBase = document.getElementById("inputBase");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputBase");
  const valueBase = inputBase.value;

  const inputAltura = document.getElementById("inputAltura");
  const valueAltura = inputAltura.value;

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

//CIRCULO
function calculardiametroCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const valueRadio = inputRadio.value;

  const diametro = diametroCirculo(valueRadio);
  alert(diametro);
}

function calcularCircunferenciaCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const valueRadio = inputRadio.value;

  const circunferencia = circunferenciaCirculo(valueRadio);
  alert(circunferencia);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const valueRadio = inputRadio.value;

  const area = areaCirculo(valueRadio);
  alert(area);
}
