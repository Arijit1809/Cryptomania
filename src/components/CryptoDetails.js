import { useParams } from 'react-router-dom';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
// icons imported for current time-period, to be substituted later
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';

const CryptoDetails = () => {
    const { coinId } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const coin = data?.data?.coin;

    if (isFetching) return <div>loading...</div>;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    return (
        <CoinDetails coin={coin}/>
    )
}

const CoinDetails = ({coin}) =>{
    console.log(coin);
    const stats = [
        { title: 'Price to USD', value: `$ ${coin?.price && millify(coin?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: coin?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${coin?.volume && millify(coin?.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(coin?.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: coin?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: coin?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: coin?.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${millify(coin?.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${millify(coin?.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    ];


    return (
        <div>
            <div>
                <div>
                    <h2 className="coin-name">
                        {coin?.name} ({coin?.slug}) Price
                    </h2>
                    <p>{coin?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h3>{coin?.name} Value Statistics</h3>
                        <p>An overview showing the statistics of {coin?.name}, such as the base and quote currency, the rank, and trading volume.</p>
                    </div>
                    {stats.map(({ icon, title, value }) => (
                        <div>
                            <div>
                                <p>{icon}</p>
                                <p>{title}</p>
                            </div>
                            <p className="stats">{value}</p>
                        </div>
                    ))}
                </div>
                <div className="other-stats-info">
                    <div className="coin-value-statistics-heading">
                        <h3 className="coin-details-heading">Other Stats Info</h3>
                        <p>An overview showing the statistics of {coin?.name}, such as the base and quote currency, the rank, and trading volume.</p>
                    </div>
                    {genericStats.map(({ icon, title, value }) => (
                        <div className="coin-stats">
                            <div className="coin-stats-name">
                                <p>{icon}</p>
                                <p>{title}</p>
                            </div>
                            <p className="stats">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="coin-desc-link">
                <div className="coin-desc">
                    <h3 className="coin-details-heading">What is {coin?.name}?</h3>
                    coin?.description&&{HTMLReactParser(coin.description)}
                </div>
                <div className="coin-links">
                    <h3 className="coin-details-heading">{coin?.name} Links</h3>
                    {coin?.links?.map((link) => (
                        <div className="coin-link" key={link.name}>
                            <h3 className="link-name">{link.type}</h3>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CryptoDetails
