'use strict'

/************ Functions Maps ************/
import './classes/card-mapa.js'

import { getMapas } from './api/mapas.js'

const listaMapas = await getMapas()

const criarCardMapas = (mapa) => {
    const card = document.createElement('card-mapa')
    card.classList.add('card__mapa')

    card.nome = mapa.nome
    card.foto_mapa = mapa.foto_mapa
    card.mini_mapa = mapa.mini_mapa

    return card
}

export const carregarCardsMapas = () => {
    const container = document.querySelector('.cards__mapas')
    const cards = listaMapas.mapas.map(criarCardMapas)
    container.replaceChildren(...cards)
}
