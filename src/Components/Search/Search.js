import './Search.css';

import { useState } from 'react';

const Search = ({filterArticles}) => {
  const [userSelectedSection, setUserSelectedSection] = useState('');

  const updateUserSelectedSection = (event) => {
    event.preventDefault();
    setUserSelectedSection(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    filterArticles(userSelectedSection);
  }

  return (
    <form>
      <label htmlFor="userSelectedSection" className="form-element">Section:</label>
      <select onChange={updateUserSelectedSection} name="userSelectedSection" id="userSelectedSection" className="form-element">
        <option value="home">Home</option>
        <option value="arts">Arts</option>
        <option value="automobiles">Automobiles</option>
        <option value="books">Books</option>
        <option value="business">Business</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="health">Health</option>
        <option value="home">Home</option>
        <option value="insider">Insider</option>
        <option value="magazine">Magazine</option>
        <option value="movies">Movies</option>
        <option value="nyregion">NY Region</option>
        <option value="obituaries">Obituaries</option>
        <option value="opinion">Opinion</option>
        <option value="politics">Politics</option>
        <option value="realestate">Real Estate</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="sundayreview">Sunday Review</option>
        <option value="technology">Technology</option>
        <option value="theater">Theater</option>
        <option value="t-magazine">T-Magazine</option>
        <option value="travel">Travel</option>
        <option value="upshot">Upshot</option>
        <option value="us">U.S.</option>
        <option value="world">World</option>
      </select>
      <button onClick={handleClick} className="form-element">Search For This Category</button>
    </form>
  );
}

export default Search;
