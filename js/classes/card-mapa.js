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
            gap: clamp(0.75rem, 0.61rem + 0.5333vw, 1.25rem);
            background-color: white;
            align-items: center;
            height: clamp(24.0625rem, 21.6125rem + 9.3333vw, 32.8125rem);
            width: clamp(16.5625rem, 14.55rem + 7.6667vw, 23.75rem);
            border-radius: 1.5rem;
            transition: all 0.5s;
        }

        .card__mapa:hover{
            width: clamp(18.125rem, 16.1125rem + 7.6667vw, 25.3125rem);
            height: clamp(25.625rem, 23.175rem + 9.3333vw, 34.375rem);
        }
        
        .nome__mapa {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: clamp(1.25rem, 1.18rem + 0.2667vw, 1.5rem);
        }
        
        .foto__mapa {
            width: clamp(12.5rem, 10.8375rem + 6.3333vw, 18.4375rem);
            height: clamp(8.4375rem, 7.3rem + 4.3333vw, 12.5rem);
        }
        
        .mini__mapa {
            width: clamp(10.9375rem, 9.52rem + 5.4vw, 16rem);   
            height: clamp(11.25rem, 10.4625rem + 3vw, 14.0625rem);
        }
        `
        return css
    }

}

customElements.define('card-mapa', card_mapa)