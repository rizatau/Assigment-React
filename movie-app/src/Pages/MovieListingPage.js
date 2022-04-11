import React, { useState, useEffect } from 'react'
import { fetchApi } from '../api';
import AddMovie from '../Components/AddMovie';
import MovieList from '../Components/MovieList';

export default function MovieListingPage({viewForm,setViewForm}) {
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
    <div> 
      <AddMovie setMovies={setMovies} viewForm={viewForm} setViewForm={setViewForm}/>
      <div className='container'>
          <MovieList movies={movies} setMovies={setMovies}/>
      </div>
    </div>
  )
}
