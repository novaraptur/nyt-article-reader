import './ArticlesList.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesList = ({allArticles}) => {
  console.log(allArticles);
  const results = allArticles.results;

  const generateArticleCards = () => {
    
  }

  return (
    <section className="articles-list">
      {generateArticleCards()}
      <h4>{allArticles.copyright}</h4>
    </section>
  );
}

export default ArticlesList;
