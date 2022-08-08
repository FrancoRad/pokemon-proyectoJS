import API from './api.js';
import {APIALL, APIURL} from './apiAll.js';
import * as UI from './interfaz.js';
import { mostrarPokemon } from "./mostrarPokemon.js";
import { capturarValor } from "./capturarValor.js";
import { limpiarHTML } from "./limpiarHTML.js";

var num = 0;
const mostrarCarrito = document.querySelector('.mostrarCarrito');

var variableImagen = -3;
var variableNombre = -2;
var variablePrecio = -1;
let cont = 1;

window.addEventListener('load', () => {
    //MUESTRA LOS PRIMEROS 9 POKEMONES SIN INGRESAR NADA AL FORM
    
    const busqueda2 = new APIALL(pokemon.value)
    busqueda2.consultarAPIAll(num)

    //MUESTRA LO QUE HAY EN EL LOCALSTORAGE
    const strLocalPokemon = JSON.parse(localStorage.getItem('arrayPokemon'))
    if (strLocalPokemon) {
        for (let index = 0; index < strLocalPokemon.length/3; index++) {
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
    
    //VACIAR LOCALSTORAGE
    UI.botonVaciarCarrito.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("vaciar carrito");
        localStorage.clear();
        location.reload();
    })
    


    UI.formularioBuscarPokemon.addEventListener('submit', (e) => {
        e.preventDefault();
        const busqueda = new API(pokemon.value)
        busqueda.consultarAPI()
    })
    UI.botonMostrarTodo.addEventListener('submit', (e) => {
        e.preventDefault();
        const busqueda2 = new APIALL(pokemon.value)
        busqueda2.consultarAPIAll(num)
    })
    UI.botonAnterior.addEventListener('submit', (e) => {
        e.preventDefault();
        if (num>8) {
            num -= 9;
            const busqueda2 = new APIALL(pokemon.value)
            busqueda2.consultarAPIAll(num)
        }else{
            num = num;
        }
        console.log(num);
    })
    UI.botonSiguiente.addEventListener('submit', (e) => {
        e.preventDefault();
        num += 9;
        const busqueda2 = new APIALL(pokemon.value)
        busqueda2.consultarAPIAll(num)
        console.log(num);
    })

})