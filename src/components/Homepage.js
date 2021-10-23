import {useState,useEffect} from 'react'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const Homepage = () => {

    const [stats,setStats] = useState();
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
        setStats(data);
    }

    if(loading){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="w-4/5 h-screen overflow-auto">
            <h1 className="mb-5">Homepage</h1>
            {/* Stats Section */}
            <div className="grid grid-cols-2"> 
                <div>Total Cryptocurrencies : {stats?.data?.stats?.total}</div>
                <div>Total Exchanges : {stats?.data?.stats?.totalExchanges}</div>
                <div>Total Market Cap : {stats?.data?.stats?.totalMarketCap}</div>
                <div>Total 24h Volume : {stats?.data?.stats?.total24hVolume}</div>
                <div>Total Markets : {stats?.data?.stats?.totalMarkets}</div>
            </div>
            <Cryptocurrencies/>
            <News/>
        </div>
    )
}

export default Homepage
