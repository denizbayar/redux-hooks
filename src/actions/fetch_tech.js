export function fetchTech(){
    return function(dispatch){
        fetch("https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=973a54adbc9c4755b552aab09bd45935")
        .then(res=>{
            return res.json();
        })
        .then(res=> dispatch({type:"FETCH_TECH_NEWS", payload:res.articles}))
        .catch(err=>console.log(err));
    }
}