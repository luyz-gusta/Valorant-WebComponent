'use strict'

import './routes.js'

import './card-agente.js'

import { getAgentes } from './agente.js'

const listaAgentes = await getAgentes()

const criarCard = (agente) => {
    const cardAgente = document.createElement('card-agente')
    cardAgente.classList.add('card__agente')

    cardAgente.nome = agente.nome
    cardAgente.foto = agente.imagem
    cardAgente.categoria = agente.categoria

    return cardAgente
}

const carregarCards = () => {
    // const main = document.querySelector('#root')
    // const container = document.createElement('div')
    // container.classList.add('cards_agentes')
    // main.appendChild(container)
    const container = document.querySelector('#root')
    const cards = listaAgentes.agentes.map(criarCard)

    console.log(container);
    container.replaceChildren(... cards)
}

// document.querySelector('#agente').addEventListener('click', carregarCards)

carregarCards()

