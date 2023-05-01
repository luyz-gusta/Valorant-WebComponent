'use strict'

class card_agente extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })

        this.nome = ''
        this.foto = null
        this.categoria = ''
    }

    static get observedAttributes() {
        return ['nome', 'foto', 'categoria']
    }

    attributesChangedCallback(nameAtrr, oldValue, newValue) {
        this[nameAtrr] = newValue
    }

    connectedCallback() {
        this.shadow.append(this.component(), this.styles())
    }

    component() {
        const cardAgente = document.createElement('div')
        cardAgente.classList.add('card__agente')

        const nomeAgente = document.createElement('p')
        nomeAgente.textContent = this.nome

        const fotoAgente = document.createElement('img')
        fotoAgente.classList.add('card__image')
        fotoAgente.src = this.foto

        const categoriaAgente = document.createElement('p')
        categoriaAgente.textContent = this.categoria

        cardAgente.append(nomeAgente, fotoAgente, categoriaAgente)

        return cardAgente
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
            .card__agente {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: var(--second-color);
            border-radius: 20px;
            width: 250px;
            height: 350px;
        }
        
        .cards_agentes{
            display: flex;
            flex-wrap: wrap;
            gap: 100px 250px;
        }
        
        .card__agente p {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 26px;
            color: white;
        }
        
        .card__image{
            width: 240px;
            height: 240px;
        }
        `

        return css
    }

}

customElements.define('card-agente', card_agente)