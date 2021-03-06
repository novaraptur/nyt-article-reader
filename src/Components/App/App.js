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
  const [userFilteredArticles, setUserFilteredArticles] = useState([]);
  const [userFilterError, setUserFilterError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setAllArticles(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const filterArticles = (userSelectedSection) => {
    const filteredArticles = allArticles.results.filter((article) => {
      if (article.section === userSelectedSection) {
        return article;
      }
    })
    if (!filteredArticles.length) {
      setUserFilterError(true);
    } else {
      setUserFilterError(false);
    }
    setUserFilteredArticles(filteredArticles);
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
                {!!userFilterError && <h3>No articles match that category.</h3>}
                {!userFilteredArticles.length ? <ArticlesList allArticles={allArticles} /> : <ArticlesList allArticles={userFilteredArticles} />}
              </main>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
