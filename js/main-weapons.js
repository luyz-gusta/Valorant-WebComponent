'use strict'

/************ Functions Weapons ************/
import './classes/card-weapon.js'

import { getWeapons } from './api/weapons.js'

const listaArmas = await getWeapons()

const getCategoriasArmas = () => {
    let listAllCategory = []

    listaArmas.armas.forEach((arma) => {
        listAllCategory.push(arma.categoria)
    })

    let listaCategoria = ['']
    listAllCategory.forEach((categoria) => {

        let status = false
        listaCategoria.forEach((categoriaTemp) => {
            if (categoria == categoriaTemp) {
                status = true
            }
        })
        if (status == false) {
            listaCategoria.push(categoria)
        }
    })

    listaCategoria.shift()
    listaCategoria.unshift('Todos')
    return listaCategoria
}

const criarCategoriasArmas = (listaCategoria) => {
    const categoria = document.createElement('li')
    categoria.classList.add('li__categoria')
    categoria.textContent = listaCategoria
    categoria.id = listaCategoria

    categoria.addEventListener('click', () => {
        localStorage.setItem('categoriaArma', categoria.textContent)
    })

    return categoria
}

export const carregarCategoriasArmas = () => {
    const lista = document.getElementById('list-weapons')
    const listaCategorias = getCategoriasArmas()
    const categorias = listaCategorias.map(criarCategoriasArmas)

    lista.replaceChildren(...categorias)
}

const criarCardArmas = (arma) => {
    const card = document.createElement('card-arma')
    card.classList.add('card__arma')

    card.nome = arma.nome
    card.foto = arma.imagem
    card.dano_corpo = arma.dano_corpo
    card.dano_cabeca = arma.dano_cabeca
    card.categoria = arma.categoria

    return card
}

export const carregarCardsArmas = () => {
    const container = document.querySelector('.cards__armas')
    const cards = listaArmas.armas.map(criarCardArmas)

    console.log(container);
    container.replaceChildren(...cards)
}

const getWeaponsCategoria = (categoria) => {
    let arrayWeapons = []
    listaArmas.armas.forEach((arma) => {
        if (arma.categoria == categoria) {
            arrayWeapons.push(arma)
        }
    })
    return arrayWeapons 
}

export const carregarCardsArmasFiltro = () => {
    const categoria = localStorage.getItem('categoriaArma')
    const container = document.querySelector('.cards__armas')
    if(categoria == 'Todos'){
        carregarCardsArmas()
    }else{
        const lista = getWeaponsCategoria(categoria)
        const cards = lista.map(criarCardArmas)
        container.replaceChildren(...cards)
    }
}
