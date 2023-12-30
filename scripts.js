const convertButton = document.querySelector(".convert-button");

const convertValues = async () => {
  
  const inputCurrencyValue = document.querySelector(".input-currency").value; // Digitar Valor
  const currencyValueToConvert = document.querySelector(".value-to-convert"); // Valor de cima
  const currencyValueConverted = document.querySelector(".value"); //valor de baixo

   


const data = await fetch(' https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
      
const dolar = data.USDBRL.high
      
const euro = data.EURBRL.high

console.log(data)

  if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / 1);
  }

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolar);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euro);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / valorEmLibra);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / valorEmBtc);
  }

  if (baseCurrency.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }

  if (baseCurrency.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  }

  if (baseCurrency.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  if (baseCurrency.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  }


};


const baseCurrency = document.getElementById("base-currency");
// Moeda de cima
const currencySelect = document.getElementById("currency-select");
// Moeda de baixa
const currencyImg = document.getElementById("img-baixo");
//imagem de baixo
const currencyName = document.getElementById("currency-name");
// Nome de baixo
const topCurrency = document.getElementById("top-currency");
// Nome de cima
const topCurrencyimg = document.getElementById("img-cima"); // Imagem de cima

const topCurrencyName = document.getElementById("currency"); // nome cima

function changeCurrency() {
  console.log("mudou");

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assets/Real.png";
  }

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/Dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/Euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assets/libra 1.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin 1.png";
  }

  if (baseCurrency.value == "euro") {
    topCurrency.innerHTML = "Euro";
    topCurrencyimg.src = "./assets/Euro.png";
  }

  if (baseCurrency.value == "dolar") {
    topCurrency.innerHTML = "Dólar americano";
    topCurrencyimg.src = "./assets/Dolar.png";
  }

  if (baseCurrency.value == "libra") {
    topCurrency.innerHTML = "Libra";
    topCurrencyimg.src = "./assets/libra 1.png";
  }

  if (baseCurrency.value == "real") {
    topCurrency.innerHTML = "Real brasileiro";
    topCurrencyimg.src = "./assets/Real.png";
  }


  convertValues();
}

//baseCurrency.addEventListener("change",  changeCurrency)

currencySelect.addEventListener("change", changeCurrency);
baseCurrency.addEventListener("change",changeCurrency )


convertButton.addEventListener("click", convertValues);
