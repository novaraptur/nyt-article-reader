import './App.css';

import Header from '../Header/Header';
import ArticlesList from '../ArticlesList/ArticlesList';
import Search from '../Search/Search';

const App = () => {
  return (
    <main>
      <Header />
      <Search />
      <ArticlesList />
    </main>
  );
}

export default App;
