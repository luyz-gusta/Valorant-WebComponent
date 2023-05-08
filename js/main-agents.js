'use strict'

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

    listaAgentes.agentes.forEach((agente) => {
        if(String(agente.nome).toUpperCase() == String(nomePersonagem).toUpperCase()){
            nomes.push(agente)
        }
    })
    return nomes
}