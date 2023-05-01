'use strict'

export const getWeapons = async () => {
    const url = `https://valorant-api.com/v1/weapons?language=pt-BR`
    const response = await fetch(url)
    const data = await response.json()

    let responseJSON = {}
    let arrayWeapons = []

    data.data.forEach((weapon) => {
        if(weapon.weaponStats != null){
            responseJSON = {
                nome: weapon.displayName,
                imagem: weapon.displayIcon,
                dano_corpo: weapon.weaponStats.damageRanges[0].bodyDamage,
                dano_cabeca: weapon.weaponStats.damageRanges[0].headDamage,
                categoria: weapon.shopData.categoryText
            }
            arrayWeapons.push(responseJSON)
        }
    })

    const retornoJSON = {
        status: data.status,
        armas: arrayWeapons
    }
    return retornoJSON
}