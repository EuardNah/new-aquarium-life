import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import './Search.css'

const Search = () => {
    return (
        <>
            <div className='search' >
                <input type="text" placeholder='Search...' />
                <button type='submit' ><AiOutlineSearch className='icon' /></button>
            </div>
        </>
    );
};

export default Search;