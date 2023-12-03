let dollarRate, euroRate, poundRate, bitcoinRate;

async function getExchangeRates() {
    const apiKey = 'e04cd48383-ced4967384-s52dhb';
    const baseCurrency = 'BRL';

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`);
        const data = await response.json();
        dollarRate = data.rates.USD;
        euroRate = data.rates.EUR;
        poundRate = data.rates.GBP; // Adiciona a taxa de conversão para Libra (GBP)
        bitcoinRate = data.rates.BTC; // Adiciona a taxa de conversão para Bitcoin (BTC)

    } catch (error) {
        console.error('Erro ao obter as taxas de câmbio:', error);
        throw error;
    }
}

async function main() {
    try {
        await getExchangeRates();

        console.log(`Taxa de câmbio atual para Dólar: ${dollarRate}`);
        console.log(`Taxa de câmbio atual para Euro: ${euroRate}`);
        console.log(`Taxa de câmbio atual para Libra: ${poundRate}`);
        console.log(`Taxa de câmbio atual para Bitcoin: ${bitcoinRate}`);

        // Agora você pode usar as variáveis dollarRate, euroRate, poundRate e bitcoinRate como desejar
        // Por exemplo, você pode criar variáveis separadas com nomes diferentes
        const valorEmBRL = 100;
        const valorEmDolar = valorEmBRL / dollarRate;
        const valorEmEuro = valorEmBRL / euroRate;
        const valorEmLibra = valorEmBRL / poundRate;
        const valorEmBitcoin = valorEmBRL / bitcoinRate;

        console.log(`Valor em Dólar: ${valorEmDolar.toFixed(2)}`);
        console.log(`Valor em Euro: ${valorEmEuro.toFixed(2)}`);
        console.log(`Valor em Libra: ${valorEmLibra.toFixed(2)}`);
        console.log(`Valor em Bitcoin: ${valorEmBitcoin.toFixed(8)}`); // Ajusta a quantidade de casas decimais para Bitcoin

    } catch (error) {
        console.error('Erro no programa principal:', error);
    }
}

// Chama a função principal para obter as taxas de câmbio em tempo real
main();





const convertButton = document.querySelector(".convert-button")




function convertValues(){
    

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".value-to-convert")
    const currencyValueConverted = document.querySelector(".value")//valor em real

    
    const valorEmDolar =  dollarRate;
    const valorEmEuro =  euroRate;

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)


    if (currencySelect.value == "dolar") {


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency", 
            currency: "USD"
        }).format(inputCurrencyValue * valorEmDolar)

        

    }

    if (currencySelect.value == "euro") {
        

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * valorEmEuro);


    }

    if (currencySelect.value == "libra") {
        
    
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * poundRate);
    }
   
    
}

const currencySelect = document.getElementById("currency-select")


    function changeCurrency(){
        console.log("mudou")
        
        const currencyImg = document.getElementById("img-baixo")
        const currencyName = document.getElementById("currency-name")

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar americano"
            currencyImg.src ="./assets/Dolar.png"
            
            
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImg.src = "./assets/Euro.png"
        }

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImg.src ="./assets/libra 1.png"
        }
    }

    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)
    

convertButton.addEventListener("click", convertValues)