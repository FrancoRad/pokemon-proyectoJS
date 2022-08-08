import { limpiarHTML } from "./limpiarHTML.js";
import { mostrarPokemon } from "./mostrarPokemon.js";
import * as UI from './interfaz.js';

const card = document.querySelector('.cards')
/*
API DE POKEMON
https://pokeapi.co/docs/v2
*/

class API{
    constructor(nombre){
        this.nombre = nombre;
    }
    async consultarAPI(){
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.value}/`;
        
        UI.spinner();

        //METODO ASYNC/AWAIT
        try{
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
             
            if(resultado){
                setTimeout(() => {
                    limpiarHTML() 
                    mostrarPokemon(resultado);
                }, 1000);
            }else{
                throw new Error("api no encontrada")
            }
        }catch (error){
            console.log("Entro al catch");
        }finally{
            console.log("Entro al final");
        }
    }
}
export default API