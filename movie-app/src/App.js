import { useState } from 'react';
import NavBar from './Components/NavBar';
import MovieListingPage from './Pages/MovieListingPage';
import Home from './Pages/Home';
import './App.css';

function App() {
  
  const [ menu, setMenu ] = useState('home');
  const [ viewForm , setViewForm] = useState('');
  
  console.log(useState);
  return (
    <div>
      <NavBar setMenu={setMenu} setViewForm={setViewForm} menu={menu}/>
      { menu === 'home' ? <Home /> : (menu === 'movies') ? <MovieListingPage viewForm={viewForm} setViewForm={setViewForm}/> : <Home /> }
    </div>
  );
}

export default App;