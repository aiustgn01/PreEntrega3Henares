

const saludo = document.getElementById("saludo")

const botonCambiarNombre = document.getElementById("boton-nombre")
let nombreGuardado = localStorage.getItem("nombre")
console.log(nombreGuardado)
if (nombreGuardado){
} else {localStorage.setItem("nombre","Usuario")}
saludo.textContent = `Bienvenido, ${nombreGuardado}`;

botonCambiarNombre.addEventListener("click",function(){
let valorNombre = document.getElementById("input-nombre").value
localStorage.setItem("nombre",valorNombre)
saludo.textContent = `Bienvenido, ${valorNombre}`;
})

const selectorProgramas1 = document.getElementById("selectorProgramas1");
const appHtml = document.getElementById("appHtml");
const selectorProgramas2 = document.getElementById("selectorProgramas2");
const appHtml2 = document.getElementById("appHtml2");
const selectorProgramas3 = document.getElementById("selectorProgramas3");
const appHtml3 = document.getElementById("appHtml3");

let selectorClickeado = 0;

selectorProgramas1.addEventListener("click", function () {
  selectorClickeado += 1;
  selectorProgramas1.disabled = true;
  const programaHtml = `
  <div  style="border: 2px solid black; width: fit-content; margin: auto; padding: 10px; margin-top: 20px;">
  <h3> CALCULADORA GENERAL</h3>
  <p>nadie utiliza estos terminos pero bueno, son los que encontré como cientificos</p>
  <h4>Operando</h4>
  <input type="text" placeholder="numero inicial">
  <div>
  <h4>Operación</h4>
  <p id="operacionCalcu">+<p>
  <button class="botonCalcu">+</button>
  <button class="botonCalcu">-</button>
  <button class="botonCalcu">*</button>
  <button class="botonCalcu">/</button>
  <button class="botonCalcu">^</button>
  <button class="botonCalcu">√</button>
  <button class="botonCalcu">%</button>
  </div>
  <h4>Factor</h4>
  <input type="text" placeholder="factor">
  <button class="botonCalcu">Calcular</button>
  <h4>Resultado</h4>
  <input></input>
  <div></div>
  <button class="boton-cerrar" style="margin-top:5px;">CERRAR</button> </div>
  `;

  const programaContainer = document.createElement("div");
  programaContainer.innerHTML = programaHtml;
  programaContainer.classList.add("programa");
  appHtml.appendChild(programaContainer);

});

selectorProgramas2.addEventListener("click", function () {
  selectorClickeado += 1;
selectorProgramas2.disabled = true;
  const programaHtml = `
  <div   style="border: 2px solid black; width: fit-content; margin: auto; padding: 10px; margin-top: 20px;">
   <h3> CALCULADORA STOCK</h3>
   
 
   <h4>Producto numero 1</h4>
   <input type="text" placeholder="Nombre" id='input-nombre-lista'>
   <input type="text" placeholder="Precio" id='input-precio-lista'>
   <input type="text" placeholder="Cantidad" id='input-cantidad-lista'>
   <button type="button" id='boton-agregar-producto'> Agregar Producto</button>
   <button type="button" id='boton-ver-lista'> Ver lista</button>
   <p> =============================================================</p>
<div id='listas-programa2'></div>
   <p> =============================================================</p>
   <button class="boton-cerrar" style="margin-top:5px;">CERRAR</button> 
   <button id="exportar-lista" style="margin-top:5px;">EXPORTAR A JSON</button> 
   <div id='lista-json'></div></div>
    
    `;
  const programaContainer = document.createElement("div");
  programaContainer.innerHTML = programaHtml;
  programaContainer.classList.add("programa");
  appHtml2.appendChild(programaContainer);

  let botonAgregarProducto = document.getElementById("boton-agregar-producto")
  let botonVerLista = document.getElementById("boton-ver-lista")
  var contadorProductos = 0
  const listaProductos = []
  botonAgregarProducto.addEventListener('click', function(){
    contadorProductos ++
    let objetoProducto = {}
let nombreProducto = document.getElementById('input-nombre-lista')
let precioProducto = document.getElementById('input-precio-lista')
let cantidadProducto = document.getElementById('input-cantidad-lista')
objetoProducto.nombre = nombreProducto.value
objetoProducto.precio = precioProducto.value
objetoProducto.cantidad = cantidadProducto.value
objetoProducto.numero = contadorProductos
listaProductos.push(objetoProducto)
console.log(listaProductos)
  })

botonVerLista.addEventListener('click',function(){
let listas = document.getElementById('listas-programa2')
for(let i=0; i<(listaProductos.length);i++){
console.log(listaProductos[i].numero, listaProductos[i].nombre, listaProductos[i].precio, listaProductos[i].cantidad)
let contenidolista = ` Producto numero: ${listaProductos[i].numero} Nombre : ${listaProductos[i].nombre}, Precio: $${listaProductos[i].precio}, cantidad: ${listaProductos[i].cantidad}`
let listahtml = document.createElement('div');
listahtml.innerHTML = contenidolista
listas.appendChild(listahtml)
}})

let botonExportar = document.getElementById('exportar-lista')
botonExportar.addEventListener('click',function(){
let jsonProductos = JSON.stringify(listaProductos)
let divjson = document.getElementById('lista-json')
divjson.innerText = jsonProductos
})
});

selectorProgramas3.addEventListener("click", function () {
  selectorClickeado += 1;
  selectorProgramas3.disabled = true;
  const programaHtml = ` 
  <div style="border: 2px solid black; width: fit-content; margin: auto; padding: 10px; margin-top: 20px;">
    <h3> CALCULADORA DE INGRESOS</h3>
    <h4>Cantidad inicial de dinero:</h4>
    <input type="text" placeholder="Ingrese su cantidad inicial">
    <div style="border: 2px solid black;width: fit-content;margin: auto;padding: 10px; margin-top: 10px;">
        <h3>Transacción 1</h3>
        <input type="text" placeholder="Cantidad de dinero">
        <div>
            <h3>Ingreso o gasto?</h3>
            <h4> Ingreso</h4>
            <input type="checkbox">
            <h4> Gasto</h4>
            <input type="checkbox">
        </div>
        <button type="button"> Completar Ingreso</button>
        <button type="button"> Completar Ingreso y terminar con el programa</button>
    </div> <button class="boton-cerrar" style="margin-top:5px;">CERRAR</button>
</div>
     `;

  const programaContainer = document.createElement("div");
  programaContainer.innerHTML = programaHtml;
  programaContainer.classList.add("programa");
  appHtml3.appendChild(programaContainer);
});

appHtml.addEventListener("click", function (event) {
  if (event.target.classList.contains("boton-cerrar")) {
    event.target.closest(".programa").remove();
    selectorProgramas1.disabled = false;
  }
  selectorClickeado -= 1;
});
appHtml2.addEventListener("click", function (event) {
  if (event.target.classList.contains("boton-cerrar")) {
    event.target.closest(".programa").remove();
    selectorProgramas2.disabled = false;
  }
  selectorClickeado -= 1;
});
appHtml3.addEventListener("click", function (event) {
  if (event.target.classList.contains("boton-cerrar")) {
    event.target.closest(".programa").remove();
    selectorProgramas3.disabled = false;
  }
  selectorClickeado -= 1;
});
