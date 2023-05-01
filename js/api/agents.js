'use strict'

export const getAgents = async () => {
    const url = `https://valorant-api.com/v1/agents?language=pt-BR`
    const response = await fetch(url)
    const data = await response.json()

    let responseJSON ={}
    let arrayAgents = []

    data.data.forEach((agent) => {
        if(agent.role != null){
            responseJSON = {
                nome: agent.displayName,
                imagem: agent.fullPortrait,
                categoria: agent.role.displayName
            }
            arrayAgents.push(responseJSON)
        }
    })

    const retornoJSON = {
        status: data.status,
        agentes: arrayAgents
    }
    
    return retornoJSON
}