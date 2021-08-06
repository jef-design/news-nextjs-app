const API_KEY = `fe6eff4c10f94d02974d39a3b569941c`

const request = {
            fetchTopHeadlines:  `top-headlines?country=ph&apiKey=${API_KEY}`,
            fetchBusiness: `top-headlines?country=ph&category=Business&apiKey=${API_KEY}`,
            fetchTechnology: `top-headlines?country=ph&category=Technology&apiKey=${API_KEY}`,
            fetchEntertainment: `top-headlines?country=ph&category=entertainment&apiKey=${API_KEY}`,
            fetchSports: `top-headlines?country=ph&category=sports&apiKey=${API_KEY}`,
            fetchScience: `top-headlines?country=ph&category=science&apiKey=${API_KEY}`,
            fetchHealth: `top-headlines?country=ph&category=health&apiKey=${API_KEY}`

}
export default request;