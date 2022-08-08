//Navbar
export const toggle = document.querySelector('.toggle')
export const links = document.querySelector('.links')

//Buscador
export const formularioBuscarPokemon = document.querySelector('#buscar-pokemon'),
buscar = document.querySelector('#buscar')

export const pokemon = document.querySelector('#pokemon')

export const botonAnterior = document.querySelector('#anterior-paginacion'),
anterior = document.querySelector('#anterior')

export const botonSiguiente = document.querySelector('#siguiente-paginacion'),
siguiente = document.querySelector('#siguiente')

export const botonMostrarTodo = document.querySelector('#mostrar-todo'),
mostrarTodo = document.querySelector('#mostrarTodo')

export const botonVaciarCarrito = document.querySelector('#vaciar-carrito'),
vaciarCarrito = document.querySelector('#vaciarCarrito')

export function spinner() {
    const card = document.querySelector('.cards')
    //SPINNER
    const spinner = document.createElement('span')
    spinner.classList.add('spinner')
    card.appendChild(spinner)
}