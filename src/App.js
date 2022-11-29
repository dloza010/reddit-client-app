import React from 'react';
import './App.css';
import { Header } from './Components/Header/header';
// import { Posts } from './Components/Posts/posts';
import Home from './Components/Home/Home'
import {Subreddits} from './Components/SubReddits/subreddits';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
