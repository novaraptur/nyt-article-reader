import './ArticleCard.css';

const ArticleCard = ({article}) => {
  return (
    <article className="article-card">
      <h4>{article.title}</h4>
      <p>{article.abstract}</p>
    </article>
  );
}

export default ArticleCard;
