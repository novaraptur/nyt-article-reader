import './ArticlesList.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesList = ({allArticles}) => {
  console.log(allArticles);
  const results = allArticles.results;

  const generateArticleCards = () => {
    console.log(results);
    return results.map((result) => {
      return <h2>M</h2>
    })
  }

  return (
    <section className="articles-list">
      {!allArticles.results ? <h2>Loading . . .</h2> : generateArticleCards()}
    </section>
  );
}

export default ArticlesList;
