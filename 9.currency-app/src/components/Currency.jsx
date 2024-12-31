import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_OI9a2uHNFBjavQMyXjmMaC7WGZ8EsKWy8qBZH7YL";
let EXCHANGE_API = `${BASE_URL}`;

function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, seetFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    //console.log(amount);
    //console.log(fromCurrency);
    //console.log(toCurrency);

    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    //console.log(response.data.data);
    //console.log(response.data.data[toCurrency]);
    // ! Ekranda seçmiş olduğum dönüştürmek istediğim para biriminin değerini getirir. [toCurrency]
    // ! toFixed(2) -> Virgülden sonra kaç basamak görünecek.
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div>
        <h3 style={{ fontFamily: "arial", color: "indigo" }}>
          DÖVİZ KURU UYGULAMASI
        </h3>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => seetFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight
          style={{ fontSize: "25px", marginRight: "10px" }}
        />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>

      <div style={{ marginTop: "25px" }}>
        <button onClick={exchange} className="exchange-button">
          Hesapla
        </button>
      </div>
    </div>
  );
}

export default Currency;
