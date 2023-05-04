'use strict'

import './routes.js'

/************ Functions Agents ************/
import './classes/card-agent.js'

import { getAgents } from './api/agents.js'

const listaAgentes = await getAgents()

const getCategoriasAgents = () => {
    let listAllCategory = []

    listaAgentes.agentes.forEach((agent) => {
        listAllCategory.push(agent.categoria)
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

const criarCategoriasAgents = (listaCategoria) => {
    const categoria = document.createElement('li')
    categoria.classList.add('item__categoria__agent')
    categoria.textContent = listaCategoria
    categoria.id = listaCategoria

    categoria.addEventListener('click', () => {
        localStorage.setItem('categoriaAgente', categoria.textContent)
    })

    return categoria
}

export const carregarCategoriasAgents = () => {
    const lista = document.getElementById('listaCategoriasAgents')
    const listaCategorias = getCategoriasAgents()
    const categorias = listaCategorias.map(criarCategoriasAgents)

    lista.replaceChildren(...categorias)
}

const criarCardAgentes = (agente) => {
    const cardAgente = document.createElement('card-agente')
    cardAgente.classList.add('card__agente')

    cardAgente.nome = agente.nome
    cardAgente.foto = agente.imagem
    cardAgente.categoria = agente.categoria

    return cardAgente
}

export const carregarCardsAgentes = () => {
    const container = document.querySelector('.cards__agentes')
    const cards = listaAgentes.agentes.map(criarCardAgentes)
    container.replaceChildren(...cards)
}

export const carregarCardsAgentesFiltro = () => {
    const categoria = localStorage.getItem('categoriaAgente')
    const personagem = localStorage.getItem('nomePersonagem')
    const container = document.querySelector('.cards__agentes')
    if(personagem != ''){
        const nome = filtroAgente(personagem)
        const cards = nome.map(criarCardAgentes)
        container.replaceChildren(...cards)
        localStorage.setItem('nomePersonagem', '')
    }else if(categoria == 'Todos'){
        carregarCardsAgentes()
    }else{
        const lista = getAgentsCategoria(categoria)
        const cards = lista.map(criarCardAgentes)
        container.replaceChildren(...cards)
    }
}

const getAgentsCategoria = (categoria) => {
    let arrayPersonagens = []
    listaAgentes.agentes.forEach((personagem) => {
        if (personagem.categoria == categoria) {
            arrayPersonagens.push(personagem)
        }
    })
    return arrayPersonagens
}

const filtroAgente = (nomePersonagem) => {
    const nomes = []
    let teste = 'teste'

    listaAgentes.agentes.forEach((agente) => {
        if(agente.nome.toUpperCase() == nomePersonagem.toUpperCase()){
            nomes.push(agente)
        }
    })
    return nomes
}

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
    return listaCategoria
}

const criarCategoriasArmas = (listaCategoria) => {
    const categoria = document.createElement('li')
    categoria.classList.add('li__categoria')
    categoria.textContent = listaCategoria
    categoria.id = listaCategoria

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
    card.dano_cabeca = arma.dano_cabeca
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
