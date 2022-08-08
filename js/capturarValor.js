import { mostrarPokemon } from "./mostrarPokemon.js"
import { limpiarHTML } from "./limpiarHTML.js"

const mostrarCarrito = document.querySelector('.mostrarCarrito')

let cont = 1;
var array = [];
var arrayPokemon = [];

var variableImagen = -3;
var variableNombre = -2;
var variablePrecio = -1;

export function capturarValor(imagen, nombre, precio){
    
    arrayPokemon.push(imagen, nombre, precio);
    
    //LOCALSTORAGE
    //Almacenarlo en el LS 
    localStorage.setItem('arrayPokemon', JSON.stringify(arrayPokemon))

    //Sacarlo del LS
    const strLocalPokemon = JSON.parse(localStorage.getItem('arrayPokemon'))
    if (strLocalPokemon) {
        variableImagen +=3;
        variableNombre +=3;
        variablePrecio +=3;

        const th = document.createElement('th')
        th.classList.add('thCarrito')

        const img = document.createElement('img')
        img.classList.add('imgCarrito')
        img.src = `${strLocalPokemon[variableImagen]}`
        th.appendChild(img)

        const texto = document.createElement('span')
        texto.classList.add('spanCarrito')
        texto.innerHTML = `${cont}${'x'}${' '}${strLocalPokemon[variableNombre]}${'  '}${'$'}${strLocalPokemon[variablePrecio]}`
        th.appendChild(texto)

        mostrarCarrito.appendChild(th)
        
    }
}