//let precioOriginal = 120;
//let descuento = 18;

let cupones = ["Ragotti_Discounts", "Plus_Discount", "Max_Possible_Discounts"];

function calcularPrecioDescuento(precio, descuento, descuentoCupon) {
  let porcentajeDescuento = 100 - (descuento + descuentoCupon);
  let precioConDescuento = (precio * porcentajeDescuento) / 100;
  return precioConDescuento;
}

//console.log({
//  precioOriginal,
//  descuento,
//  porcentajeDescuento,
//  precioConDescuento,
//});

function precioDeOferta() {
  let inputPrecio = document.getElementById("inputPrecio");
  let precioValue = Number(inputPrecio.value);

  let inputDescuento = document.getElementById("inputDescuento");
  let descuentoValue = Number(inputDescuento.value);

  let inputCupon = document.getElementById("inputCupon");
  let cuponValue = inputCupon.value;
  //La función array.includes() nos permite validar si un elemento ha sido almacenado en el array.
  if (!cupones.includes(cuponValue)) {
    alert("El cupón " + cuponValue + "no existe, intenta con otro");
  } else if (cuponValue === "Ragotti_Discounts") {
    cuponValue = 10;
  } else if (cuponValue === "Plus_Discount") {
    cuponValue = 20;
  } else if (cuponValue === "Max_Possible_Discounts") {
    cuponValue = 30;
  }

  let precioConDescuento = calcularPrecioDescuento(
    precioValue,
    descuentoValue,
    cuponValue
  );

  let resultado = document.getElementById("resultado");
  resultado.innerText = "El precio con descuentos es: $" + precioConDescuento;
}
