const axios = require("axios");
require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
  }

  async getPriceData(coinOption, curOption) {
    try {
      // Formatter fo rcurrency
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
      });
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );
      let output = "";
      res.data.forEach((coin) => {
        output += `Coin: ${coin.symbol.red} (${coin.name}) | Price: ${
          formatter.format(coin.price).green
        } | Rank: ${coin.rank.blue}\n`;
      });
      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error("Your API key is invalid - Go to https://nomics.com");
  } else if (err.response.status === 404) {
    throw new Error("Your Api is not responding");
  } else {
    throw new Error("Something went wrong, Try again later");
  }
}

module.exports = CryptoAPI;
