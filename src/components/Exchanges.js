import React,{useState} from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';

const Exchanges = () => {

    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    const [showDescriptionOfId,setShowDescriptionOfId] = useState('')

    if (isFetching) return <h1>Loading...</h1>;

    return (
        <div>
            <div className="flex p-4">
                <span className="flex-1">Exchanges</span>
                <span className="flex-1">24h Trade Volume</span>
                <span className="flex-1">Markets</span>
                <span className="flex-1">Change</span>
            </div>
            <div>
                {exchangesList.map((exchange) => (
                    <div key={exchange.id} >
                        <div 
                            onClick = {() => {
                                setShowDescriptionOfId(exchange.id)
                            }} 
                            className="flex p-4"
                        >
                            <span className="flex-1">
                                <span>{exchange.rank}.</span>
                                <img className="h-4 inline-block" src={exchange.iconUrl} />
                                <span>{exchange.name}</span>
                            </span>
                            <span className="flex-1">${millify(exchange.volume)}</span>
                            <span className="flex-1">{millify(exchange.numberOfMarkets)}</span>
                            <span className="flex-1">{millify(exchange.marketShare)}%</span>
                        </div>
                        {showDescriptionOfId === exchange.id && HTMLReactParser(exchange.description || '')}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exchanges;
