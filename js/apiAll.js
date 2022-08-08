import { limpiarHTML } from "./limpiarHTML.js";
import { mostrarPokemon } from "./mostrarPokemon.js";
import * as UI from './interfaz.js';

const card = document.querySelector('.cards')
/*
API DE POKEMON
https://pokeapi.co/docs/v2
*/

export class APIALL{
    constructor(nombre){
        this.nombre = nombre;
    }
    async consultarAPIAll(num){
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${num}/`;
        UI.spinner();
        //METODO ASYNC/AWAIT
        try{
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
             
            if(resultado){
                setTimeout(() => {
                    limpiarHTML()
                    const {results} = resultado
                    results.map(resultado => {
                        const {url} = resultado
                        const busqueda3 = new APIURL(url)
                        busqueda3.consultarAPIURL(url)
                    })
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

export class APIURL{
    constructor(nombre){
        this.nombre = nombre;
    }
    async consultarAPIURL(url){

        UI.spinner();
        //METODO ASYNC/AWAIT
        try{
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
             
            if(resultado){
                limpiarHTML() 
            setTimeout(() => {
                mostrarPokemon(resultado);
            }, 100);
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