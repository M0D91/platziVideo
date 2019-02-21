import React from 'react';
import './search.css';

// function Search(props) {
//     return(
//         <div>
//             Algo
//         </div>
//     )
// }

// Lo de arriba tambien puede hacerse de modo pijo:
const Search = () => (
    <form 
        className='Search'
        action=''>
        <input 
            type='text'
            className='Search-input'
            placeholder='Buscar video chachi'
            />
    </form>
)

export default Search;