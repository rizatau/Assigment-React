import { useState } from 'react';
import NavBar from './Components/NavBar';
import MovieListingPage from './Pages/MovieListingPage';
import Home from './Pages/Home';
import './App.css';

function App() {
  
  const [ menu, setMenu ] = useState('home');

  return (
    <div>
      <NavBar setMenu={setMenu}/>
      { menu === 'home' ? <Home /> : (menu === 'movies') ? <MovieListingPage /> : <Home /> }
    </div>
  );
}

export default App;