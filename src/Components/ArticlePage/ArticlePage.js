import './ArticlePage.css';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ArticlePage = ({allArticles, created_date}) => {
  const modifiedCreatedDate = created_date.url.substring(1);
  const [foundArticle, setFoundArticle] = useState({});

  useEffect(() => {
    const searchedArticle = allArticles.results.find((article) => {
      if (article.created_date === modifiedCreatedDate) {
        return article;
      }
    })
    setFoundArticle(searchedArticle);
  });

  return (
    <section className="article-container">
      <NavLink to="/"><button>Go Back</button></NavLink>
      {!foundArticle ? <h2>Loading . . .</h2> :
        <section className="article-content">
          <h2>{foundArticle.title}</h2>
          <h3>{foundArticle.byline}</h3>
          <p>{foundArticle.abstract}</p>
          <a href={foundArticle.url} target="_blank">Read the Article Here</a>
          <h5>{allArticles.copyright}</h5>
        </section>}
    </section>
  );
}

export default ArticlePage;
