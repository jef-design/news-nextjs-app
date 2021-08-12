import { ActionTypes} from '../constants/types';
import axios from '../../pages/api/axios';



export const fetchSearch = (query) =>{
   return async function(dispatch) {
        try {
            dispatch({
               type: ActionTypes.FETCH_IS_LOADING
             });
             const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=fe6eff4c10f94d02974d39a3b569941c`)
             dispatch({type: ActionTypes.FETCH_SEARCH,
                 payload: response.data.articles})
          } catch (error) {
             
          }
   }

}

export const searchQuery = (query) =>{
    return {
        type: ActionTypes.SEARCH_QUERY,
        payload: query
    }
}