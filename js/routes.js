'use strict'

import { 
    carregarCardsAgentes, 
    carregarCategoriasAgents, 
    carregarCardsArmas, 
    carregarCategoriasArmas,
    carregarCardsMapas,
    carregarCardsAgentesFiltro
} from "./app.js"

const routes = {
    '/' : '/pages/home.html',
    '/agentes' : '/pages/agentes.html',
    '/armas' : '/pages/armas.html',
    '/mapas' : '/pages/mapas.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if(window.location.pathname == '/agentes'){
        let inputNome = document.getElementById('input__nome')
        carregarCardsAgentes()
        carregarCategoriasAgents()
        document.getElementById('listaCategoriasAgents').addEventListener('click', carregarCardsAgentesFiltro)
        inputNome.addEventListener('keydown', (e) => {
            if(e.key == "Enter"){
                localStorage.setItem('nomePersonagem', inputNome.value)
                carregarCardsAgentesFiltro()
            }
        })
    }else if(window.location.pathname == '/armas'){
        carregarCardsArmas()
        carregarCategoriasArmas()
    }else if(window.location.pathname == '/mapas'){
        carregarCardsMapas()
    }
}

window.route = route