import axios from "axios"
import{ options } from '../../utils/constants';
import { actionTypes } from './actionTypes';

//  temel API URL
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

//! Asenkron aksiyon

// verileri çekip reducer'a aktrama
export const getMovies = () => (dispatch) => {
    //  asenkron işlemler
    axios.get('/movie/popular', options)
    .then((res) => dispatch({
        type: actionTypes.SET_MOVIES,
        payload: res.data.results,
    }));
};

//  kategori verilerini çek ve store'a aktar.

export const getGenres = () => (dispatch) => {
    axios.get('/genre/movie/list?language=tr' , options)
    //  çekilen veriyi reducer'a aktarma
    .then((res) => dispatch({
        type: actionTypes.SET_CATEGORIES,
        payload: res.data.genres, 
    }));
};