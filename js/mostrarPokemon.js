import { limpiarHTML } from "./limpiarHTML.js"
import { capturarValor } from "./capturarValor.js"

export function mostrarPokemon(resultado) {
    //limpiarHTML()
    const {name:nombre, height:altura, weight:peso, sprites:{other:{dream_world:{front_default:imagen}}}, types:[{type:{name:tipo}}], base_experience:precio } = resultado;
    
    const cards = document.querySelector('.cards')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('container')
    cardContainer.classList.add('page-wrapper')

    const page_inner = document.createElement('div')
    page_inner.classList.add('page-inner')
    cardContainer.appendChild(page_inner)

    const row = document.createElement('div')
    row.classList.add('row')
    page_inner.appendChild(row)

    const el_wrapper = document.createElement('div')
    el_wrapper.classList.add('el-wrapper')
    row.appendChild(el_wrapper)

    const box_up = document.createElement('div')
    box_up.classList.add('box-up')
    el_wrapper.appendChild(box_up)

    const img = document.createElement('img')
    img.classList.add('img')
    img.src = `${imagen}`
    box_up.appendChild(img)

    const img_info = document.createElement('div')
    img_info.classList.add('img-info')
    box_up.appendChild(img_info)

    const info_inner = document.createElement('div')
    info_inner.classList.add('info-inner')
    img_info.appendChild(info_inner)

    const p_name = document.createElement('span')
    p_name.classList.add('p-name')
    p_name.innerHTML = `${nombre.toUpperCase()}`
    info_inner.appendChild(p_name)

    const p_company = document.createElement('a')
    p_company.classList.add('p-company')
    p_company.innerHTML = `${'TIPO: '}${tipo}`
    info_inner.appendChild(p_company)

    const a_size = document.createElement('div')
    a_size.classList.add('a-size')
    img_info.appendChild(a_size)

    const size2 = document.createElement('span')
    size2.innerHTML = `${'Altura: '}${altura}${'mts'}`
    a_size.appendChild(size2)
    
    
    const size = document.createElement('span')
    size.classList.add('size')
    size.innerHTML = `${' - Peso: '}${peso}${'kg'}`
    a_size.appendChild(size)

    /*----*/
    
    const box_down = document.createElement('div')
    box_down.classList.add('box-down')
    box_down.onclick= function(){
        /* Al presionar sobre Agregar al carrito captura el valor del precio*/  
        capturarValor(imagen, nombre.toUpperCase(), precio)
      };
    el_wrapper.appendChild(box_down)

    const h_bg = document.createElement('div')
    h_bg.classList.add('h-bg')
    box_down.appendChild(h_bg)

    const h_bg_inner = document.createElement('div')
    h_bg_inner.classList.add('h-bg-inner')
    h_bg.appendChild(h_bg_inner)

    const cart = document.createElement('a')
    cart.classList.add('cart')
    box_down.appendChild(cart)

    const price = document.createElement('span')
    price.classList.add('price')
    price.innerHTML = `${'$ '}`
    cart.appendChild(price)

    const price_a = document.createElement('span')
    price.classList.add('price-a')
    price_a.innerHTML = `${precio}`
    price.appendChild(price_a)

    const add_to_cart = document.createElement('span')
    add_to_cart.classList.add('add-to-cart')
    cart.appendChild(add_to_cart)

    const txt = document.createElement('span')
    txt.classList.add('txt')
    txt.innerHTML = `${'Agregar al carrito'}`
    add_to_cart.appendChild(txt)

    cards.appendChild(cardContainer)
}