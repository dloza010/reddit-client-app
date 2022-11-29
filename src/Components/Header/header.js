import React, { useState } from 'react';
import { HiSearch } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { FaRedditAlien } from 'react-icons/fa';
import './Header.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts, setSearchTerm } from '../../Store/redditSlice';



export const Header = () => {

    const [searchTermLocal, setSearchTermLocal] = useState('');
    const reddit = useSelector((state) => state.reddit);
    const {selectedSubreddit, searchTerm} = reddit
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
      }, [selectedSubreddit]);
    
    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };





    return (
        <header>
            <div className="logo">
                <FaRedditAlien className='logo-icon'/>
                <button 
                    className='home-button' 
                    type="button" 
                    onClick={() => dispatch(fetchPosts('/r/memes'))}>
                    Reddit<span>Essential</span>
                </button>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label="Search posts"
                />
                <button type="submit" aria-label="Search">
                    <HiSearch/>
                </button> 
            </form>
        </header>
    );
};

