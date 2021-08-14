import axios from 'axios'

const instance = axios.create({
    baseURL: `https://google-news.p.rapidapi.com/v1`,
});

export default instance;

// baseURL: `https://newsapi.org/v2`,