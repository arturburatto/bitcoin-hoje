const BTC = document.querySelector('.btc')
const data = document.querySelector('.data')

function fetchBTC() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {        
        const valor = btcJson.BRL.buy.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    BTC.innerText = valor;   
    })
}

setInterval(fetchBTC, 30000);

fetchBTC();

data.innerText = new Date();

