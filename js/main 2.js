const selectorProgramas1 = document.getElementById('selectorProgramas1')
const selectorProgramas2 = document.getElementById('selectorProgramas2')
const selectorProgramas3 = document.getElementById('selectorProgramas3')
const appHtml = document.getElementById('app')
let selectorClickeado = 0
selectorClickeado = 1
selectorProgramas1.addEventListener("click", function(){

  selectorClickeado= 1
  const hijoPrograma = document.createElement('div')

  hijoPrograma.innerHTML =' <div  style="border: 2px solid black; width: fit-content; margin: auto; padding: 10px; margin-top: 20px;"> <h3> CALCULADORA DE INGRESOS</h3>    <h4>Cantidad inicial de dinero:</h4>    <input type="text" placeholder="Ingrese su cantidad inicial">    <div style="border: 2px solid black;width: fit-content;margin: auto;padding: 10px; margin-top: 10px;">        <h3>Transacción 1</h3>        <input type="text" placeholder="Cantidad de dinero">        <div>            <h3>Ingreso o gasto?</h3>            <h4> Ingreso</h4>            <input type="checkbox">            <h4> Gasto</h4>            <input type="checkbox">        </div>        <button type="button"> Completar Ingreso</button>        <button type="button"> Completar Ingreso y terminar con el programa</button>    </div> <button id="cerrar1" style="margin-top:5px;">CERRAR</button> </div>'

  appHtml.appendChild(hijoPrograma) 

  console.log('Apretado boton numero: ' + selectorClickeado)
})
selectorProgramas2.addEventListener("click", function(){
  selectorClickeado=2
  const hijoPrograma = document.createElement('div')
  hijoPrograma.innerHTML ='<div   style="border: 2px solid black; width: fit-content; margin: auto; padding: 10px; margin-top: 20px;"> <h3> CALCULADORA STOCK</h3>            <button type="button"> Agregar Producto</button>            <button type="button"> Finalizar Programa</button>            <h4>Producto numero 1</h4>            <input type="text" placeholder="Nombre">            <input type="text" placeholder="Precio">            <input type="text" placeholder="Cantidad">            <button type="button"> Agregar Producto</button>            <button type="button"> Ver lista</button>            <p> =============================================================</p>            <p> Producto numero 1: Nombre: Perrito Precio: $500 Cantidad: 500</p>            <p> Producto numero 2: Nombre: Perrito Precio: $500 Cantidad: 500</p>            <p> Producto numero 3: Nombre: Perrito Precio: $500 Cantidad: 500</p>            <p> =============================================================</p> <button id="cerrar2" style="margin-top:5px;">CERRAR</button> </div>'
  appHtml.appendChild(hijoPrograma) 
  console.log('Apretado boton numero: ' + selectorClickeado)
})
selectorProgramas3.addEventListener("click", function(){
  selectorClickeado=3

  const hijoPrograma = document.createElement('div')
  hijoPrograma.innerHTML =' <div  style="border: 2px solid black; width: fit-content; margin: auto; padding: 10px; margin-top: 20px;"> <h3> CALCULADORA GENERAL</h3> <p>nadie utiliza estos terminos pero bueno, son los que encontré como cientificos</p> <h4>Operando</h4> <input type="text" placeholder="numero inicial"> <div>          <h4>Operación</h4> <button class="botonCalcu">+</button> <button class="botonCalcu">-</button> <button class="botonCalcu">*</button> <button class="botonCalcu">/</button> <button class="botonCalcu">^</button> <button class="botonCalcu">√</button> <button class="botonCalcu">%</button> </div> <h4>Factor</h4> <input type="text" placeholder="factor"> <button class="botonCalcu">Calcular</button>  <h4>Resultado</h4> <input></input> <div></div> <button id="cerrar3" style="margin-top:5px;">CERRAR</button> </div>'
  appHtml.appendChild(hijoPrograma) 
  console.log('Apretado boton numero: ' + selectorClickeado)})





console.log(appHtml)