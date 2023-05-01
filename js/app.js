'use strict'

import './routes.js'

import './classes/card-agent.js'

import './classes/card-weapon.js'

import { getAgents } from './api/agents.js'

import { getWeapons } from './api/weapons.js'


/************ Functions Agents ************/
const listaAgentes = await getAgents()

const criarCardAgentes = (agente) => {
    const cardAgente = document.createElement('card-agente')
    cardAgente.classList.add('card__agente')

    cardAgente.nome = agente.nome
    cardAgente.foto = agente.imagem
    cardAgente.categoria = agente.categoria

    console.log(cardAgente);
    return cardAgente
}

const carregarCardsAgentes = () => {
    // const main = document.querySelector('#root')
    // const container = document.createElement('div')
    // container.classList.add('cards_agentes')
    // main.appendChild(container)
    const container = document.querySelector('.cards_agentes')
    const cards = listaAgentes.agentes.map(criarCardAgentes)

    console.log(container);
    container.replaceChildren(... cards)
}


/************ Functions Weapons ************/
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
            if(categoria == categoriaTemp){
                status = true
            }
        })
        if(status == false){
            listaCategoria.push(categoria)
        }
    })

    listaCategoria.shift()
    return listaCategoria
}

const criarCategoriasArmas = (listaCategoria) => {
    const categoria = document.createElement('li')
    categoria.classList.add('li__categoria')
    categoria.textContent = listaCategoria
    categoria.id = listaCategoria

    return categoria
}

const carregarCategoriasArmas = () => {
    const lista = document.getElementById('list-weapons')
    const listaCategorias = getCategoriasArmas()
    const categorias = listaCategorias.map(criarCategoriasArmas)

    lista.replaceChildren(... categorias)
}

const criarCardArmas = (arma) => {
    const card = document.createElement('card-arma')
    card.classList.add('card__arma')

    card.nome = arma.nome
    card.foto = arma.imagem
    card.dano_cabeca = arma.dano_cabeca
    card.dano_cabeca = arma.dano_cabeca
    card.categoria = arma.categoria

    console.log(card);
    return card
}

const carregarCardsArmas = () => {
    const container = document.querySelector('.cards__armas')
    const cards = listaArmas.armas.map(criarCardArmas)

    console.log(container);
    container.replaceChildren(... cards)
}


carregarCardsArmas()
carregarCategoriasArmas()


/************ Events ************/
document.querySelector('#agente').addEventListener('click', carregarCardsAgentes)

