import React, { useEffect, useState, useCallback } from 'react';
import './App.css';

import Header from '../Header/Header';
import ArticlesList from '../ArticlesList/ArticlesList';
import Search from '../Search/Search';

import { getArticles } from '../../api_calls';

const dotenv = require('dotenv').config();

const App = () => {
  const [allArticles, setAllArticles] = useState({});

  useEffect(() => {
    getArticles()
      .then((data) => {
        setAllArticles(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <main>
      <Header />
      <Search />
      {!allArticles && <h2>Loading articles . . .</h2>}
      {!!allArticles && <ArticlesList allArticles={allArticles} />}
    </main>
  );
}

export default App;
