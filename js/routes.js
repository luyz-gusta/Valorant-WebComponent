'use strict'

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
}

window.route = route