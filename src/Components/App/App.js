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

  console.log(allArticles);

  const filterArticles = (userSelectedSection) => {
    const filteredArticles = allArticles.results.filter((article) => {
      if (article.section.includes(userSelectedSection)) {
        return;
      }
    })
    setAllArticles(filteredArticles);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:created_date"
          render={({match}) => {
            return <ArticlePage allArticles={allArticles} created_date={match} />
          }}
        />
        <Route exact path="/"
          render={() => {
            return (
              <main>
                <Header />
                <Search filterArticles={filterArticles} />
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
