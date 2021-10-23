import {useState,useEffect} from 'react'

const Cryptocurrencies = () => {
    const [coins,setCoins] = useState();
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        getApi()
    },[])

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
    const {name,symbol,rank} = coin
    return (
        <div>
            <div>{rank}</div>
            <div>{name} : {symbol}</div>
        </div>
    )
}

export default Cryptocurrencies
