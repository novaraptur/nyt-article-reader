import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import ArticlesList from '../ArticlesList/ArticlesList';
import ArticlePage from '../ArticlePage/ArticlePage';
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/:article-id"
          render={({match}) => {
            return <ArticlePage />
          }}
        />
        <Route exact path="/"
          render={() => {
            return (
              <main>
                <Header />
                <Search />
                <ArticlesList allArticles={allArticles} />
              </main>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
