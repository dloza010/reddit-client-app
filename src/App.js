import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Posts } from './Components/Posts/Posts';
import Home from './Components/Home/Home'
import {Subreddits} from './Components/SubReddits/Subreddits';

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
