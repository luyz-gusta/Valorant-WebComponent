'use strict'

export const getAgentes = async () => {
    const url = `https://valorant-api.com/v1/agents?language=pt-BR`
    const response = await fetch(url)
    const data = await response.json()

    let responseJSON ={}
    let arrayAgentes = []

    data.data.forEach((agente) => {
        if(agente.role != null){
            responseJSON = {
                nome: agente.displayName,
                imagem: agente.fullPortrait,
                categoria: agente.role.displayName
            }
            arrayAgentes.push(responseJSON)
        }
    })

    const retornoJSON = {
        status: data.status,
        agentes: arrayAgentes
    }
    
    return retornoJSON
}