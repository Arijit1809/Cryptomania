import { useState, useEffect } from 'react'
import moment from 'moment';

const News = () => {

    const [news, setNews] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getNews()
    }, [])

    const getNews = async () => {
        const response = await fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&freshness=Day&textFormat=Raw&safeSearch=Off", {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "a19c8df793msh5c4ea359fdc151ap1adc51jsn3da7e90cf7a5"
            }
        })
        const data = await response.json();
        setNews(data);
        setLoading(false)
    }
    if (loading) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <div>
            <h1 className="text-4xl m-4">News</h1>
            <div className="grid grid-cols-3">
                {/* {console.log(news)} */}
                {news.value.map((news, index) => {
                    return (
                        <NewsCard news={news} key={index} />
                    )
                })}
            </div>
        </div>

    )
}

const NewsCard = ({ news }) => {
    return (
        <div className="p-4 m-4 rounded-md shadow-xl bg-white">
            <a href={news.url} target="_blank" rel="noreferrer">
                <div className="flex items-center mb-4">
                    <h1 className="text-lg font-medium">{news.name}</h1>
                    <img src={news?.image?.thumbnail?.contentUrl} alt="" />
                </div>
                <p className="mb-4 text-sm">{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center ">
                        <img className="h-10" src={news.provider[0]?.image?.thumbnail?.contentUrl} alt="" />
                        <p className="ml-2">{news.provider[0]?.name}</p>
                    </div>
                    <p>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                </div>
            </a>
        </div>
    )
}

export default News
