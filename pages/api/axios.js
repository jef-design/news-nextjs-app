import axios from 'axios'

const instance = axios.create({
    baseURL: `https://gnews.io/api/v4`,
});

export default instance;

// baseURL: `https://newsapi.org/v2`,
//https://google-news.p.rapidapi.com/v1