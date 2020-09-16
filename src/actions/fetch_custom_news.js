import {FETCH_CUSTOM_NEWS} from './types';

export function fetchCustomNews(source,relevance){
    return function(dispatch){
        fetch("https://newsapi.org/v1/articles?source="+source+"&sortBy="+relevance+ "&apiKey=973a54adbc9c4755b552aab09bd45935")
        .then(res=>{
            return res.json();
        })
        .then(res=> dispatch({type:FETCH_CUSTOM_NEWS, payload:res.articles}))
        .catch(err=>console.log(err));
    }
}