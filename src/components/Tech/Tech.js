import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTech} from '../../actions/fetch_tech';
import NewsCard from '../Shared/news_card';

 const Tech = ()=> {

    const techSelector = useSelector((state)=>state.FetchTech);
    const dispatch = useDispatch();
    const getTechNews= ()=> dispatch(fetchTech());

    useEffect(()=>
        getTechNews() // eslint-disable-next-line
    ,[]);
    console.log(techSelector)
    return (
        <React.Fragment>
            <section>
                <h1 style={{textAlign:"center"}}>Technology News</h1>
                <div className="container">
                    <div className="row">
                        {
                            techSelector.techNews.map(news=>(
                                <NewsCard news={news}/>
                                ))
                            }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Tech;