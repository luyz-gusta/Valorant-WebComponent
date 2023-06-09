'use strict'

'use strict'

class card_arma extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })

        this.nome = ''
        this.foto = null
        this.dano_corpo = ''
        this.dano_cabeca = ''
        this.categoria = ''
    }

    static get observedAttributes() {
        return ['nome', 'foto', 'dano_corpo', 'dano,cabeca', 'categoria']
    }

    attributesChangedCallback(nameAtrr, oldValue, newValue) {
        this[nameAtrr] = newValue
    }

    connectedCallback() {
        this.shadow.append(this.component(), this.styles())
    }

    component() {
        const cardArma = document.createElement('div')
        cardArma.classList.add('card__arma')

        if (this.categoria == 'Armas Pesadas') {
            cardArma.classList.add('arma__pesada')
        } else if (this.categoria == 'Escopetas') {
            cardArma.classList.add('escopeta')
        } else if (this.categoria == 'Fuzis de Assalto') {
            cardArma.classList.add('fuzis')
        } else if (this.categoria == 'Fuzis de Precisão') {
            cardArma.classList.add('precisao')
        } else if (this.categoria == 'Armas Leves') {
            cardArma.classList.add('leves')
        }else if(this.categoria == 'Submetralhadoras'){
            cardArma.classList.add('subs')
        }

        const nomeArma = document.createElement('p')
        nomeArma.classList.add('nome__categoria')
        nomeArma.textContent = this.nome

        const imagemArma = document.createElement('img')
        imagemArma.classList.add('foto__arma')
        imagemArma.src = this.foto

        const danoCorpo = document.createElement('p')
        danoCorpo.classList.add('dano__arma')
        danoCorpo.textContent = `Dano Corpo:${this.dano_corpo}`

        const danoCabeca = document.createElement('p')
        danoCabeca.classList.add('dano__arma')
        danoCabeca.textContent = `Dano Cabeça:${this.dano_cabeca}`

        const categoriaArma = document.createElement('p')
        categoriaArma.classList.add('nome__categoria')
        categoriaArma.textContent = this.categoria

        cardArma.append(nomeArma, imagemArma, danoCorpo, danoCabeca, categoriaArma)

        return cardArma
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .card__arma {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: var(--second-color);
            border-radius: 20px;
            width: clamp(12.5rem, 11.275rem + 4.6667vw, 16.875rem);
            height: clamp(17.1875rem, 15.875rem + 5vw, 21.875rem);
            gap: 24px;
            transition: all 0.5s;
        }

        .card__arma:hover{
            width: clamp(14.0625rem, 12.8375rem + 4.6667vw, 18.4375rem);
            height: clamp(18.75rem, 17.4375rem + 5vw, 23.4375rem);
        }
        
        .nome__categoria {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: clamp(1.25rem, 1.145rem + 0.4vw, 1.625rem);
            color: white;
        }
        
        .dano__arma {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: clamp(0.875rem, 0.77rem + 0.4vw, 1.25rem);
            color: white;
        }
        
        .foto__arma {
            width: clamp(12.5rem, 11.625rem + 3.3333vw, 15.625rem);
            height: clamp(3.75rem, 3.225rem + 2vw, 5.625rem);
        }
        `

        return css
    }

}

customElements.define('card-arma', card_arma)