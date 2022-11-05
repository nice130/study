import { useState, useEffect } from "react";
function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(0);
  const [need, setNeed] = useState(0);
  function handleInput(e) {
    setNeed(e.target.value);
  }
  function onChange(e) {
    setCost(e.target.value);
    setNeed(1);
  }
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=> response.json())
    .then((json)=> { 
      setCoins(json);
      setLoading(false);
    });

  },[]);
  return (
    <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
      <strong>Loading...</strong>) 
      : (
      <select onChange={onChange}>
        {coins.map((coin) => 
        <option key={coin.id} value={coin.quotes.USD.price}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>)}
      </select>
      )}
      <h2>Enter the amount</h2>
      <div>
        $<input 
        type="number"
        value={need}
        placeholder="dollor"
        onChange={handleInput}
        />
      </div>
      <h3>{cost !== 0 ? `You can get ${need/cost}` : null} </h3>
    </div>
  );
}

export default Coins;
