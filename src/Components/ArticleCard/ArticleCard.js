import './ArticleCard.css';

import { NavLink, Redirect } from 'react-router-dom';

const ArticleCard = ({article}) => {
  return (
    <NavLink to={`/${article.created_date}`} id={article.created_date} className="article-card">
      <h4>{article.title}</h4>
      <p>{article.abstract}</p>
    </NavLink>
  );
}

export default ArticleCard;
