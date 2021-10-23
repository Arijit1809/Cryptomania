import { useState, useEffect } from 'react'

const News = () => {

    const [news,setNews] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        getNews()
    },[])

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
    if(loading){
        return(
            <div>loading...</div>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default News
