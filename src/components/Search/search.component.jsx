import React  from 'react';
import './search.style.css';

function Search(props) {
    
    
    return (
        <div className="searchfield">
            <input  type="search" placeholder="Enter Monsters Name" value={props.inputType} onChange={props.func}></input>
        </div>
    )

}

export default Search;