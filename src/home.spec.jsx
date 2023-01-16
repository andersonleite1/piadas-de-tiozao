import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './Home';

afterEach(() => jest.clearAllMocks());

const jokeOne = {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200,
};

const jokeTwo = {
  id: '4g2oGHrOfZa',
  joke: 'White boards ... not black.',
  status: 200,
};

const jokeOneTranslated = {
  responderId: null,
  responseData: {
    translatedText: 'Quadros brancos ... não pretos.'
  },
  responseStatus: 200,
};

describe('Home', () => {
  it('should render the component without errors', () => {
    render(<App />);
  });

  it('should display the title', () => {
    render(<App />);
    const title = screen.getByText('Piadas de Tiozão');
    expect(title).toBeInTheDocument();
  });
  
  it('should display a joke on page load', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(jokeOne),
    });

    render(<App />)

    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
    );
  });

  it('should render new joke when click "Gerar Nova" button', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(jokeOne),
    });

    render(<App />)

    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
    );

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(jokeTwo),
    });

    const buttonGetNewJoke = await screen.findByText('Gerar Nova');
    userEvent.click(buttonGetNewJoke);
    const renderedJokeTwo = await screen.findByText('White boards ... not black.');
    expect(renderedJokeTwo).toBeInTheDocument();
  });

  it('should translate the joke by clicking on the "Traduzir" button', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(jokeOne),
    });

    render(<App />)

    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(jokeOneTranslated),
    });
    
    const buttonTranslate = await screen.findByText('Traduzir');
    userEvent.click(buttonTranslate);
    const renderedJokeTranslated = await screen.findByText('Quadros brancos ... não pretos.');
    expect(renderedJokeTranslated).toBeInTheDocument();
  });
});
