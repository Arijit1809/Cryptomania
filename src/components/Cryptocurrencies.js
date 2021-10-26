import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {

    const count = 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

    const [coins, setCoins] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCoins(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

        setCoins(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return <div>loading...</div>;

    return (
        <div>
            <h1 className="text-4xl m-4">Cryptocurrencies</h1>
            <div className="m-4">
                <input className="p-4 rounded-md w-full placeholder-black" placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
            </div>
            <div className="grid grid-cols-4 bg-gray-100 bg-opacity-20">
                {coins?.map((coin) => {
                    return (
                        <CryptoCard key={coin.id} coin={coin} />
                    )
                })}
            </div>
        </div>
    )
}

const CryptoCard = ({ coin }) => {
    const { id, name, symbol, rank, iconUrl, price, marketCap, change } = coin
    return (
        <div className="p-4 m-4 rounded-md shadow-md hover:shadow-2xl bg-white">
            <Link to={`/crypto/${id}`}>
                <div className="flex flex-row justify-between items-center mb-4">
                    <span>{rank}. {name} ({symbol})</span>
                    <img className="h-1/2 w-1/5" src={iconUrl} />
                </div>
                <p className="mb-2">Price: {millify(price)}</p>
                <p className="mb-2">Market Cap: {millify(marketCap)}</p>
                <p className="mb-2">Daily Change: {change}%</p>
            </Link>
        </div>
    )
}

export default Cryptocurrencies
