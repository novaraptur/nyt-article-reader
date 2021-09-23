const dotenv = require('dotenv').config();

const baseURL = 'https://api.nytimes.com/svc/topstories/v2';
const apiKey = process.env.REACT_APP_API_KEY;

const getArticles = async () => {
  return await fetch(`${baseURL}/home.json?api-key=${apiKey}`)
    .then(checkResponse)
}

const checkResponse = (response) => {
  if (response.status === 404) {
    throw new Error("Sorry, we can't find the page you are looking for.");
  } else if (response.status === 500) {
    throw new Error('Internal Server Error. Our whole team is now aware.');
  } else if (response.status !== 200) {
    throw new Error('Sorry, something went wrong.');
  } else {
    return response.json();
  }
}

export { getArticles };
