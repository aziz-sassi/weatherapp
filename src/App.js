import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';
import { useState } from 'react';
import { onSearch, fetchWeatherData } from './helpers';
import Results from './components/results';

function App() {
  const [searchedLoc, setSearchedLoc] = useState('');
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (loc) => {
    try {
      const result = await onSearch(loc);
      setSearchResult(result);
      console.log(result);
      const weather = await fetchWeatherData(result.latitude, result.longitude);
      setWeatherData(weather);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          setSearchedLoc={setSearchedLoc}
        />
        <div className='mainContainer'>
          <Results results={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
