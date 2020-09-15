const initialState = {techNews:[]};

const fetchTech = (state=initialState,action)=>{
    if(action.type === 'FETCH_TECH_NEWS'){
        state={...state,techNews:action.payload}
    }
    return state;
}

export default fetchTech;