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
function perimetroCirculo(radio) {
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
