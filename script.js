const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.27
const eur = 5.13
const bitcoin = 0.0000096


const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais); // 'R$100.00'

    if (inputReais === '') {alert('Insira um valor para realizar a conversão')}

    if (select.value === 'Dólar Americano (US$)') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar); // '$100.00'
    }

    if (select.value === 'Euro (€)') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / eur); // '€100.00'
    }

    if (select.value === 'Bitcoin (BTC)') {
        currencyValueText.innerHTML = inputReais * bitcoin
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'Dólar Americano (US$)') {
        currencyName.innerHTML = 'Dólar Americano (US$)'
        currencyImg.src = "./assets/estados-unidos-icon.svg"
    }

    if (select.value === 'Euro (€)') {
        currencyName.innerHTML = 'Euro (€)'
        currencyImg.src = "./assets/euro-icon.svg"
    }

    if (select.value === 'Bitcoin (BTC)') {
        currencyName.innerHTML = 'Bitcoin (BTC)'
        currencyImg.src = "./assets/bitcoin-icon.svg"
    }
    convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

