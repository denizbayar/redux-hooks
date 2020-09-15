import {combineReducers} from 'redux';
import fetchTech from './fetch_tech';
import customSearch from './custom_search';

const reducers = combineReducers({
    FetchTech:fetchTech,
    CustomSearch: customSearch
});

export default reducers;