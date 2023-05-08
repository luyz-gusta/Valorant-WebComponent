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
            background-image: url(../img/icon-valorant.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 20px;
            width: clamp(12.5rem, 11.625rem + 3.3333vw, 15.625rem);
            height: clamp(15.625rem, 13.875rem + 6.6667vw, 21.875rem);
            transition: all 0.5s;
        }

        .card__agente:hover{
            width: clamp(14.0625rem, 13.1875rem + 3.3333vw, 17.1875rem);
            height: clamp(17.1875rem, 15.4375rem + 6.6667vw, 23.4375rem);
        }
        
        
        .card__agente p {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: clamp(1.25rem, 1.145rem + 0.4vw, 1.625rem);
            color: white;
        }
        
        .card__image{
            width:  clamp(10.625rem, 9.4rem + 4.6667vw, 15rem);
            height: clamp(10.625rem, 9.4rem + 4.6667vw, 15rem);
        }
        `

        return css
    }

}

customElements.define('card-agente', card_agente)