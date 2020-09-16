import {FETCH_CUSTOM_NEWS} from '../actions/types';

const initialState = {customNews:[]};

const customSearch = (state=initialState, action)=>{
    if(action.type === FETCH_CUSTOM_NEWS){
        state={
            ...state,
            customNews:action.payload
        }
    }
    return state;
}

export default customSearch;