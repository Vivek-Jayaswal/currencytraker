const Table = ({data}) => {
    // console.log(filterData);
    return (
        <table className="table">
            {
                data.map((currentData) => {
                    return (
                        <tbody>
                            <tr>
                                <td className="image"><img src={currentData.image} /></td>
                                <td className="name">{currentData.name}</td>
                                <td className="symbol">{currentData.symbol.toUpperCase()}</td>
                                <td className="current-price">${currentData.current_price}</td>
                                <td className="total_volume">${currentData.total_volume}</td>
                                <td className={currentData.price_change_percentage_24h < 0 ? "dec" : "inc"}>{currentData.price_change_percentage_24h}%</td>
                                <td className="market_cap">Mkt Cap : ${currentData.market_cap}</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}

export default Table;