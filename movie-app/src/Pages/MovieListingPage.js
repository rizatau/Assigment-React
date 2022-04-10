import React, { useState, useEffect } from 'react'
import { fetchApi } from '../api';
import AddMovie from '../Components/AddMovie';
import MovieList from '../Components/MovieList';

export default function MovieListingPage() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetchMovies()
  }, []);

  async function fetchMovies() {
    try {
      const response = await fetchApi('movies') 
      const data = await response.json();

      setMovies(data);
    } catch(err) {
      console.log(err);
    }
   
  }

  return (
    <div className='container'>
        <AddMovie setMovies={setMovies} />
        <MovieList movies={movies} setMovies={setMovies}/>
    </div>
  )
}
