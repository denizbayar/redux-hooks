import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCustomNews} from '../../actions/fetch_custom_news';

import Form from './Form';
import NewsCard from '../Shared/news_card';

 const Main = ()=> {
     const [sources, setSources] = useState([]);
     const [source, setSource] = useState('');
     const [relevance, setRelavance] = useState("");

     const customNewsSelector = useSelector((state)=>state.CustomSearch);
     const dispatch = useDispatch();
     const getCustomNews = (source, relevance)=>dispatch(fetchCustomNews(source,relevance));

     const getSources= ()=>{
         fetch("https://newsapi.org/v1/sources?").then(res=>{
             console.log(customNewsSelector.customNews);
             return res.json();
         }).then(res=>{
             console.log(res);
             setSources(res.sources)
         })
     }

     useEffect(()=>{
         console.log(getSources());
         console.log(customNewsSelector);
         getSources(); // eslint-disable-next-line
     },[]); 

     const getNews = (e)=>{
         console.log(source);
         e.preventDefault();
         if(source==="" || source==='nothing'){
             console.log("There is no source selected");
         }else{
             getCustomNews(source,relevance);
             console.log(customNewsSelector.customNews)
         }
     }

     let news;

     if(customNewsSelector.customNews.length>0){
         news = <div className="row">
             {
                 customNewsSelector.customNews.map(news=>{
                     return (
                         <NewsCard news={news}/>
                     )
                 }) 
             }
         </div>
     } else{

         news = <div className="alert alert-danger mt-2" role="alert">
         Please select a source to view the news.
       </div>
       
     }

    return (
        <div>
            <Form 
            sources={sources}
            setSource={setSource}
            setRelavance={setRelavance}
            getNews={getNews}
            />

            <div className="container mt-2">
                {news}
            </div>
        </div>
    )
}

export default Main;
