'use strict'

export const getMapas = async () => {
    const url = `https://valorant-api.com/v1/maps?language=pt-BR`
    const response = await fetch(url)
    const data = await response.json()

    let responseJSON = {}
    let arrayMaps = []

    data.data.forEach((map) => {
        if(map.displayIcon){
            responseJSON = {
                nome: map.displayName,
                foto_mapa: map.splash,
                mini_mapa: map.displayIcon
            }
            arrayMaps.push(responseJSON)
        }
    })

    const retornoJSON = {
        status: data.status,
        mapas: arrayMaps
    }

    return retornoJSON
}