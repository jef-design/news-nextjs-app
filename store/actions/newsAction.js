import { ActionTypes} from '../constants/types';
import request from '../../pages/api/request';
// import axios from '../../pages/api/axios';
import axios from "axios";



export const fetchTopHeadlines = () =>{
   return async function(dispatch) {
    const response = await axios.request(request.fetchTopHeadlines)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_TOP_HEADLINES,
   payload: response.data.articles})
   }

}

export const fetchSports = () =>{
   return async function(dispatch) {
    const response = await axios.request(request.fetchSports)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_SPORTS,
      payload: response.data.articles})
   }

}

export const fetchBusiness = () =>{
   return async function(dispatch) {
    const response = await axios.request(request.fetchBusiness)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_BUSINESS,
      payload: response.data.articles})
   }

}
export const fetchEntertainment = () =>{
   return async function(dispatch) {
    const response = await axios.request(request.fetchEntertainment)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_ENTERTAINMENT,
      payload: response.data.articles})
   }

}
export const fetchHealth = () =>{
   return async function(dispatch) {
    const response = await axios.request(request.fetchHealth)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_HEALTH,
      payload: response.data.articles})
   }

}
export const fetchScience = () =>{
   return async function(dispatch) {
    const response = await axios.request(request.fetchScience)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_SCIENCE,
      payload: response.data.articles})
   }

}
export const fetchTechnology = () =>{
   return async function(dispatch) {
    const response = await axios.request(request.fetchTechnology)
    console.log(response)
    dispatch({type: ActionTypes.FETCH_TECHNOLOGY,
      payload: response.data.articles})
   }

}