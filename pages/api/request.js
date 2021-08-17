const API_KEY = process.env.NEWS_API_KEY

const request = {
    fetchTopHeadlines :`top-headlines?country=ph&token=${API_KEY}`,
    fetchWorld :`top-headlines?country=ph&topic=world&token=${API_KEY}`,
    fetchNation :`top-headlines?country=ph&topic=nation&token=${API_KEY}`,
    fetchBusiness :`top-headlines?country=ph&topic=business&token=${API_KEY}`,
    fetchEntertainment :`top-headlines?country=ph&topic=entertainment&token=${API_KEY}`,
    fetchHealth :`top-headlines?country=ph&topic=health&token=${API_KEY}`,
    fetchScience :`top-headlines?country=ph&topic=science&token=${API_KEY}`,
    fetchSports :`top-headlines?country=ph&topic=sports&token=${API_KEY}`,
    fetchTechnology :`top-headlines?country=ph&topic=technology&token=${API_KEY}`,
}
export default request;

