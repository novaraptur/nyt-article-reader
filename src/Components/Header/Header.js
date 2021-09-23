import './Header.css';

const Header = () => {
  return (
    <header>
      <a href="https://www.nytimes.com/" target="_blank"><img src="https://newcanaanlibrary.org/wp-content/uploads/2016/12/nyt-t-logo.png" alt="New York Times logo" className="logo" /></a>
      <h1>NYT Reader</h1>
      <h3>Top Articles From The New York Times</h3>
    </header>
  );
}

export default Header;
