'use strict'

class card_mapa extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })

        this.nome = ''
        this.foto_mapa = null
        this.mini_mapa = null
    }

    static get observedAttributes() {
        return ['nome', 'foto_mapa', 'mini_mapa']
    }

    attributesChangedCallback(nameAtrr, oldValue, newValue) {
        this[nameAtrr] = newValue
    }

    connectedCallback() {
        this.shadow.append(this.component(), this.styles())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card__mapa')

        const nomeMapa = document.createElement('p')
        nomeMapa.classList.add('nome__mapa')
        nomeMapa.textContent = this.nome

        const fotoMapa = document.createElement('img')
        fotoMapa.classList.add('foto__mapa')
        fotoMapa.src = this.foto_mapa

        const miniMapa = document.createElement('img')
        miniMapa.classList.add('mini__mapa')
        miniMapa.src = this.mini_mapa

        card.append(nomeMapa, fotoMapa, miniMapa)
        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .card__mapa {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            background-color: white;
            align-items: center;
            height: 525px;
            width: 380px;
            border-radius: 1.5rem;
        }
        
        .nome__mapa {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 1.5rem;
        }
        
        .foto__mapa {
            width: 295px;
            height: 202px;
        }
        
        .mini__mapa {
            width: 256px;
            height: 224px;
        }
        `
        return css
    }

}

customElements.define('card-mapa', card_mapa)