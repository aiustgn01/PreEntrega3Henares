let selectorProgramas = parseInt(prompt("Ingrese a qué programa desea acceder (1: Calculadora de ingresos y gastos básica, 2: Generador de listas de productos, 3: Calculadora general, 4: Terminar programa)"))

/* CALCULADORA GASTOS INGRESOS*/
while (selectorProgramas!==4)  {

if (selectorProgramas==1){
  alert('INICIADA CALCULADORA DE INGRESOS Y GASTOS')
const montoInicial = parseInt(prompt("Ingrese su monto inicial"));
var cantidadIngresos;
var ingresoOGasto;
var arrayIngresos = []
var arrayGastos = []
if (isNaN(montoInicial)) {
  console.log("Usted no ingresó un monto inicial.");
} else {
  console.log("Usted ingresó una cantidad de: " + montoInicial + " pesos.");
  cantidadIngresos = parseInt(prompt("Ingrese la cantidad de movimientos (ingresos o gastos) que desea realizar:"));
  if (!(isNaN(cantidadIngresos))) {
    console.log(
      "Usted digitó una cantidad de: " + cantidadIngresos + " Ingresos/Gastos"
    );
  }
}
var montoFinal = montoInicial;
funcionIngresos();
if (isNaN(montoInicial) || isNaN(cantidadIngresos)) {
  console.log("ERROR, RECARGUE LA PAGINA");
} else {
  console.log("Usted cuenta con un monto de: $" + montoFinal + " pesos.");
  alert("Usted cuenta con un monto de: $" + montoFinal + " pesos.");
}
console.log(arrayGastos)
console.log(arrayIngresos)
if(arrayGastos.length > 0){
alert("Sus gastos ingresados fueron (en orden): " + arrayGastos)
}
if(arrayIngresos.length > 0){
  alert("Sus ingresos digitados fueron (en orden): " + arrayIngresos)
  }
  }
/* FIN CALCULADORA GASTOS INGRESOS */



else  if (selectorProgramas==2){
    alert('GENERADOR DE LISTAS DE PRODUCTOS')
let arrayObjetosProgramaDos = []
let siONo = prompt("Desea agregar un producto a la lista? y/n")
let contadorProductos = 0
let ingresolista
while ((siONo == "y") || (siONo == "Y")){
contadorProductos++
const producto= {
  numeroProducto: contadorProductos,
}
producto.nombreProducto = prompt("Ingrese el nombre del producto a agregar")
producto.precioProducto = prompt("Ingrese el precio del producto a agregar")
producto.stockProducto = prompt("Ingrese la cantidad de unidades disponibles del producto a agregar")
arrayObjetosProgramaDos.push(producto)
alert("Producto número "+ contadorProductos + " agregado a la lista.")
siONo = prompt("Desea agregar un producto a la lista? y/n")
}

ingresolista = prompt("Lista terminada, ingrese el numero del producto que desea ver, ingrese el número 0 para terminar con el programa, ingrese la letra 'b' para buscar entre los productos ya agregados")
while (!(ingresolista==0)){
alert("Producto número "+ arrayObjetosProgramaDos[ingresolista-1].numeroProducto + ": " + arrayObjetosProgramaDos[ingresolista-1].nombreProducto + ". Stock: " + arrayObjetosProgramaDos[ingresolista-1].stockProducto + " unidades. Precio por unidad: $" + arrayObjetosProgramaDos[ingresolista-1].precioProducto)
ingresolista = prompt("ingrese el numero del producto que desea ver, ingrese el número 0 para terminar con el programa.")
}
alert("Programa finalizado.")

for (let i = 0; i<contadorProductos; i++){
  console.log(arrayObjetosProgramaDos[i])
}

}



else if (selectorProgramas==3){alert('INICIADA CALCULADORA GENERAL')
let operacionProgramaTres = recibirOperacion()
while (operacionProgramaTres!='x'){
if (operacionProgramaTres=='suma'){ 
  sumaHastaCorte()
  operacionProgramaTres = recibirOperacion()
}
else if (operacionProgramaTres=='resta'){
 restaHastaCorte()
 operacionProgramaTres = recibirOperacion()
} 
else if (operacionProgramaTres=='multiplicacion'){
   multiplicacionHastaCorte()
   operacionProgramaTres = recibirOperacion()
} else if (operacionProgramaTres=='division'){
    divisionHastaCorte()
    operacionProgramaTres = recibirOperacion()
} else if (operacionProgramaTres=='potencia'){
    potenciaHastaCorte()
    operacionProgramaTres = recibirOperacion()
} else if (operacionProgramaTres=='raiz'){
   raizHastaCorte()
   operacionProgramaTres = recibirOperacion()
} else if (operacionProgramaTres=='porcentaje'){
   porcentajeHastaCorte()
   operacionProgramaTres = recibirOperacion()
    
  
}

}}
selectorProgramas = parseInt(prompt("Ingrese a qué programa desea acceder (1: Calculadora de ingresos y gastos básica, 2: Generador de listas de productos, 3: Calculadora general, 4: Terminar programa)"))}




function ingreso() {
  if (ingresoOGasto == "I") {
    let numIOG = parseInt(prompt("Ingrese el monto del ingreso "));
    
    if (isNaN(numIOG)) {
      numIOG = 0;
      i++;
      console.log("ERROR:NO INGRESO UN NUMERO, REALICE EL INGRESO NUEVAMENTE");
    }
    arrayIngresos.push(numIOG)
    montoFinal = montoFinal + numIOG;
    console.log("Digitado un ingreso de: $" + numIOG + " pesos.");
  } else if (ingresoOGasto == "G") {
    let numIOG = parseInt(prompt("Ingrese el monto del gasto"));
    if (isNaN(numIOG)) {
      numIOG = 0;
      i++;
      console.log("ERROR:NO INGRESO UN NUMERO, REALICE EL INGRESO NUEVAMENTE");
    }
    arrayGastos.push(numIOG)
    montoFinal = montoFinal - numIOG;
    console.log("Digitado un gasto de: $" + numIOG + " pesos.");
  } else {
    i++;
    console.log(
      "Error: No ingresó 'I' o 'G', asegúrese de ingresar un solo carácter"
    );
  }
  return montoFinal;
}

function funcionIngresos() {
  for (i = cantidadIngresos; i > 0; i--) {
    ingresoOGasto = prompt("Ingrese 'I' para realizar un ingreso, o 'G' para realizar un gasto").toUpperCase();

    ingreso();
  }
}

function sumaHastaCorte(){

  let operandoUno = parseInt(prompt('Ingrese el primer número a sumar'))
  let resultado = operandoUno
  let operandoDos = parseInt(prompt('Ingrese el siguiente número a sumar, o 0 para terminar con la suma'))
  while (operandoDos != 0){
  resultado = resultado+operandoDos
  operandoDos = parseInt(prompt('Ingrese el siguiente número a sumar, o 0 para terminar con la suma'))
  }
alert('El resultado final de la suma es: '+ resultado)
return resultado
}

function restaHastaCorte(){
  let operandoUno = parseInt(prompt('Ingrese el primer número'))
  let resultado = operandoUno
  let operandoDos = parseInt(prompt('Ingrese el siguiente número a restar, o 0 para terminar con la resta'))
  while (operandoDos != 0){
  resultado = resultado-operandoDos
  operandoDos = parseInt(prompt('Ingrese el siguiente número a restar, o 0 para terminar con la resta'))
  }
alert('El resultado final de la resta es: '+ resultado)
return resultado
}

function multiplicacionHastaCorte(){
let operandoUno = parseInt(prompt('Ingrese el primer número'))
let resultado = operandoUno
let operandoDos = parseInt(prompt('Ingrese el siguiente número a multiplicar, o 0 para terminar con la multiplicación'))
while (operandoDos != 0){
resultado = resultado*operandoDos
operandoDos = parseInt(prompt('Ingrese el siguiente número a multiplicar, o 0 para terminar con la multiplicación'))
}
alert('El resultado final de la multiplicación es: '+ resultado)
return resultado
}

function divisionHastaCorte(){
  let operandoUno = parseInt(prompt('Ingrese el primer número'))
    let resultado = operandoUno
    let operandoDos = parseInt(prompt('Ingrese un número por el cual dividir al primero, o 0 para terminar con la división'))
    while (operandoDos != 0){
    resultado = resultado/operandoDos
    operandoDos = parseInt(prompt('Ingrese el siguiente número por el cual dividir al resultado, o 0 para terminar con la división'))
    }
  alert('El resultado final de la división es: '+ resultado)
  return resultado
}

function potenciaHastaCorte(){
  let operandoUno = parseInt(prompt('Ingrese el primer número, cuidado, las potencias pueden llegar a numeros muy elevados muy rapido y ralentizar tu pc'))
    let resultado = operandoUno
    let operandoDos = parseInt(prompt('Ingrese el primer número por el cual potenciar al número ingresado, o 0 para terminar con la potencia'))
    while (operandoDos != 0){
    resultado = Math.pow(resultado, operandoDos)
    operandoDos = parseInt(prompt('Ingrese el siguiente número por el cual potenciar al resultado, o 0 para terminar con la potencia'))
    }
  alert('El resultado final de la potencia es: '+ resultado)
  return resultado
}

function raizHastaCorte(){
  let operandoUno = parseInt(prompt('Ingrese el primer número'))
  let resultado = operandoUno
  let operandoDos = parseInt(prompt('Ingrese el primer número por el que se desea radicar al resultado, o 0 para terminar con la radicación'))
  
  while (operandoDos != 0){
  operandoDos = 1/operandoDos
  resultado = Math.pow(resultado, operandoDos)
  operandoDos = parseInt(prompt('Ingrese el siguiente número por el cual se desea radicar al resultado, o 0 para terminar con la radicación'))
  
  }
alert('El resultado final de la radicación es: '+ resultado)
return resultado
}

function porcentajeHastaCorte(){
let operandoUno = parseInt(prompt('Ingrese el primer número'))
  let resultado = operandoUno
  let operandoDos = parseInt(prompt('Ingrese el porcentaje del primer número que quiere obtener o 0 para terminar con el calculo de porcentaje (50 = 50%)'))
  resultado = resultado*(operandoDos/100)
  alert('El '+ operandoDos + '% de ' + operandoUno + ' es : ' + resultado)
  while (operandoDos != 0){
  operandoUno = resultado
  operandoDos = parseInt(prompt('Ingrese el siguiente número por el cual potenciar al resultado, o 0 para terminar con la potencia'))
  if(operandoDos==0){break}
  resultado = resultado*(operandoDos/100)
  alert('El '+ operandoDos + '% de '+operandoUno+ " es: "+resultado)
  }
  return resultado
}

function recibirOperacion(){
  let datoOperacion = prompt('Ingrese una operación a realizar ("suma", "resta", "multiplicacion", "division", "potencia", "raiz", "porcentaje" o "x" para terminar con el programa)')
  return datoOperacion
}