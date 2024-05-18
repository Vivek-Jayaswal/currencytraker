import { useEffect, useState } from "react";
import Table from "./Table.js";
import "./app.scss";

// name,id,image,symbol, current_price,total_volume


const App = () => {

  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [sortCriteria,setSortCriteria] = useState("")


  console.log(input);
  const onTextChange = (e) => {

    const value = e.target.value.toLowerCase();
    setInput(value);
    
    const filterData = data.filter((item) => {
       return item.name.toLowerCase().includes(value);
    })
    console.log(filterData);
    setFilteredData(filterData);  
  }

  const onSortByMktCap = () => {
    if (sortCriteria === "market_cap") {
      setFilteredData([...filterData].reverse());
    } else {
      const sortedData = [...filterData].sort((a, b) => b.market_cap - a.market_cap);
      setFilteredData(sortedData);
      setSortCriteria("market_cap");
    }
  };

  const onSortByPercentage = () => {
    if (sortCriteria === "price_change_percentage_24h") {
      setFilteredData([...filterData].reverse());
    } else {
      const sortedData = [...filterData].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
      setFilteredData(sortedData);
      setSortCriteria("price_change_percentage_24h");
    }
  };


  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      .then(response => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <div>
      <div className="input">
        <input  value={input} placeholder="Search By Name or Symbol" onChange={onTextChange} />
        <button className="btn-1" onClick={onSortByMktCap}>Sort By Mkt Cap</button>
        <button className="btn-1"  onClick={onSortByPercentage}>Sort by percentage</button>
      </div>
      <Table data={filterData} />
    </div>
  )
}
export default App;