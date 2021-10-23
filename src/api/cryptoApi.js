const getApi = async () => {
    const response = await fetch("https://coinranking1.p.rapidapi.com/stats", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": "a19c8df793msh5c4ea359fdc151ap1adc51jsn3da7e90cf7a5"
        }
    })
    console.log(response);
}

