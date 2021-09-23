import './ArticlesList.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesList = ({allArticles}) => {
  const generateArticleCards = () => {
    let results;
    if (allArticles.results) {
      results = allArticles.results;
    } else {
      results = allArticles;
    }
    return results.map((article) => {
      return <ArticleCard article={article} />
    })
  }

  return (
    <section className="articles-list">
      {!allArticles.length && !allArticles.results ? <h2>Loading . . .</h2> : generateArticleCards()}
    </section>
  );
}

export default ArticlesList;
