export default function CoinList () {
    return (
    <>
    {filteredCoins.map(coin => {
        return <Coins
        key={coin.id}
        name={coin.name}
        id={coin.id}
        price={coin.current_price}
        symbol={coin.symbol}
        marketcap={coin.market_cap}
        volume={}
        /> 
    })}
    </>
    );
}