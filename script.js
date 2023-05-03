const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

boton.addEventListener('click', clickBoton);

function clickBoton(event){
  let a = parseInt(input1.value);
  let b = parseInt(input2.value);
  let c = a + b;
  pResult.innerText = "El resultado es: " + c;
}