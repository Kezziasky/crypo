// Starting balance and portfolio (fake data)
let balance = 1000;
let portfolio = {
    BTC: 0,
    ETH: 0,
    LTC: 0,
    DOGE: 0,
    XRP: 0,
    ADA: 0,
    SOL: 0
};

// API URL for fetching crypto prices
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,dogecoin,xrp,cardano,solana&vs_currencies=usd';

// Fetching and displaying the market prices
async function updateMarket() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const marketPrices = document.getElementById('market-prices');

    marketPrices.innerHTML = ''; // Clear previous data

    for (const [crypto, details] of Object.entries(data)) {
        const priceElement = document.createElement('p');
        priceElement.textContent = `${crypto.toUpperCase()} > $${details.usd}`;
        marketPrices.appendChild(priceElement);
    }
}

// Update the portfolio display
function updatePortfolio() {
    const portfolioList = document.getElementById('portfolio-list');
    portfolioList.innerHTML = '';

    for (const [crypto, amount] of Object.entries(portfolio)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${crypto.toUpperCase()}: ${amount} (Value: $${(data[crypto]?.usd || 0) * amount})`;
        portfolioList.appendChild(listItem);
    }
}

// Initial update of market and portfolio
updateMarket();
updatePortfolio();
