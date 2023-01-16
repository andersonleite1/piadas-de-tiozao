import { useEffect, useState } from "react";
import Header from "./components/Header";
import TextContent from "./components/TextContent";

import fetchJoke from "./services/getRandomJoke";

import './home.css';
import fetchTranslateText from "./services/getTrasnlateText";

function App() {

  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke()
      .then((joke) => {
        setJoke(joke);
      })
  }, [])

  const handleGetNewJoke = () => {
    setJoke('Carregando...');
    fetchJoke()
      .then((joke) => {
        setJoke(joke);
      });
  }

  const handleTranslateText = () => {
    setJoke('Traduzindo...');
    fetchTranslateText(joke)
      .then((jokeTranslated) => {
        setJoke(jokeTranslated);
      });
  }

  return (
    <div className="App">
      <Header title="Piadas de Tiozão" />
      <section className="container">
        <TextContent>
          { joke }
        </TextContent>
        <div className="btns-container">
          <button 
            className="btn-get-new"
            onClick={handleGetNewJoke}
          >
            Gerar Nova
          </button>
          <button 
            className="btn-traslate"
            onClick={handleTranslateText}
          >
            Traduzir
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
