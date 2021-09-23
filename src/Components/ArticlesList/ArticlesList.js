import './ArticlesList.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesList = ({allArticles}) => {
  const results = allArticles.results;

  const generateArticleCards = () => {
    console.log(results);
    return results.map((article) => {
      return <ArticleCard article={article} />
    })
  }

  return (
    <section className="articles-list">
      {!allArticles.results ? <h2>Loading . . .</h2> : generateArticleCards()}
    </section>
  );
}

export default ArticlesList;
