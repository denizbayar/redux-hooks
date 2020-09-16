import React from 'react'

const Form=(props)=> {
    return (
        <div>
            <form onSubmit={props.getNews} className="container">
            <div className="row">   
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Sources</label>

                    <select onChange={e=>props.setSource(e.target.value)} id="inputState" className="form-control">
                        <option value="">Select a new source</option>
                        {
                        props.sources.map(source =>(
                            <option value={source.id} key={source.id}>{source.name}</option>)
                            )
                        }
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Relavance</label>
                    <select onChange={e=>props.setRelavance(e.target.value)} id="inputState" className="form-control">
                            <option value="publishedAt">Newest</option>
                            <option value="popularity">Popular</option>
                    </select>
                </div>
                <div className="col-md-6">
                <button className="btn btn-success" type="submit">Get News</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Form;
