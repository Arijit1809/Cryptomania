import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import millify from 'millify';


const Cryptocurrencies = () => {
    const [coins,setCoins] = useState();
    const [loading,setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() =>{
        getApi()
    },[])

    useEffect(() =>{
        setCoins(prevData=>{
            prevData = coins?.data?.coins.filter((item) => console.log(item.name.toLowerCase().includes(searchTerm)));
        })
    },[searchTerm])

    const getApi = async () => {
        const response = await fetch("https://coinranking1.p.rapidapi.com/coins", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "a19c8df793msh5c4ea359fdc151ap1adc51jsn3da7e90cf7a5"
            }
        })
        setLoading(false)
        const data = await response.json();
        setCoins(data);
    }
    if(loading){
        return(
            <div>loading...</div>
        )
    }
    return (
        <div>
            Cryptocurrencies
            <div className="search-crypto">
          <input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
        </div>
            <div className="grid grid-cols-4">
                {coins?.data?.coins.map((coin) =>{
                    return(
                        <CryptoCard key={coin.id} coin={coin}/>
                    )
                })}
            </div>
            
        </div>
    )
}

const CryptoCard = ({coin})=>{
    const {id,name,symbol,rank,iconUrl,price,marketCap,change} = coin
    return (
        <div>
            {/* <Link key={currency.id} to={`/crypto/${currency.id}`}> */}
            <Link to={`/crypto/${id}`}>
            <img src={iconUrl} />
            <div>{rank}</div>
            <div>{name} : {symbol}</div>
            <p>Price: {millify(price)}</p>
            <p>Market Cap: {millify(marketCap)}</p>
            <p>Daily Change: {change}%</p>
            </Link>
        </div>
    )
}

export default Cryptocurrencies
