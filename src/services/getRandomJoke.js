const API_URL = 'https://icanhazdadjoke.com/';
const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };

const fetchJoke = async () => {
  const response = await fetch(API_URL, REQUEST_CONFIG);
  const data = await response.json();
  return data.joke;
}

export default fetchJoke;
