// const API_KEY = `fe6eff4c10f94d02974d39a3b569941c`
const API_KEY = `5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e`

const request = {
            fetchTopHeadlines : {
                method: 'GET',
                url: 'https://google-news.p.rapidapi.com/v1/top_headlines',
                params: {lang: 'en', country: 'US'},
                headers: {
                  'x-rapidapi-key': '5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e',
                  'x-rapidapi-host': 'google-news.p.rapidapi.com'
                }
              },
              fetchBusiness : {
                method: 'GET',
                url: 'https://google-news.p.rapidapi.com/v1/topic_headlines',
                params: {lang: 'en', country: 'US', topic: 'business'},
                headers: {
                  'x-rapidapi-key': '5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e',
                  'x-rapidapi-host': 'google-news.p.rapidapi.com'
                }
              },
            fetchTechnology:{
                method: 'GET',
                url: 'https://google-news.p.rapidapi.com/v1/topic_headlines',
                params: {lang: 'en', country: 'US', topic: 'technology'},
                headers: {
                  'x-rapidapi-key': '5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e',
                  'x-rapidapi-host': 'google-news.p.rapidapi.com'
                }
              },
            fetchEntertainment:{
                method: 'GET',
                url: 'https://google-news.p.rapidapi.com/v1/topic_headlines',
                params: {lang: 'en', country: 'US', topic: 'entertainment'},
                headers: {
                  'x-rapidapi-key': '5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e',
                  'x-rapidapi-host': 'google-news.p.rapidapi.com'
                }
              },
            fetchSports: {
                method: 'GET',
                url: 'https://google-news.p.rapidapi.com/v1/topic_headlines',
                params: {lang: 'en', country: 'US', topic: 'sports'},
                headers: {
                  'x-rapidapi-key': '5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e',
                  'x-rapidapi-host': 'google-news.p.rapidapi.com'
                }
              },
            fetchScience: {
                method: 'GET',
                url: 'https://google-news.p.rapidapi.com/v1/topic_headlines',
                params: {lang: 'en', country: 'US', topic: 'science'},
                headers: {
                  'x-rapidapi-key': '5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e',
                  'x-rapidapi-host': 'google-news.p.rapidapi.com'
                }
              },
            fetchHealth: {
                method: 'GET',
                url: 'https://google-news.p.rapidapi.com/v1/topic_headlines',
                params: {lang: 'en', country: 'US', topic: 'health'},
                headers: {
                  'x-rapidapi-key': '5396212fd8msh580e48e2e9bc514p12ac00jsna1bf2a5b080e',
                  'x-rapidapi-host': 'google-news.p.rapidapi.com'
                }
              },
            // fetchSearch: `everything?q=&apiKey=${API_KEY}`

}
export default request;


 
//   const fetchEntertainment = 
//   const fetchHealth = 
//   const fetchScience = 
//   const fetchSports = 
//   const fetchTechnology = 
// // lang=en&country=US