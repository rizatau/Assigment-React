import React, { useState } from 'react'
import { fetchApi } from '../api';
import Button from './Button';
import InputField from './InputField';

export default function AddMovie({ setMovies, viewForm , setViewForm}) {
  const [ newMovie, setNewMovie ] = useState(
    {
        _id : '',
        title : '',
        year : '',
        desc : '',
        poster : '',
        casts : [],
        quota : ''
    }  
    );

  const handleChangeInput = (e) => {
    if(e.target.id === 'casts'){
          setNewMovie((currValue) => {
            return { ...currValue, [e.target.id]: e.target.value.split(',') }
        })
    } else {
            setNewMovie((currValue) => {
                return { ...currValue, [e.target.id]: e.target.value }
            })
    }
  }

  const saveMovie = (e) => {
      e.preventDefault();
      saveData();
      setViewForm('')
  }

   const saveData = async() => {
      try {
        const response = await fetchApi('movies', {
                                                    method: 'POST',
                                                    body: JSON.stringify(newMovie),
                                                    headers: {
                                                      'Content-type': 'application/json; charset=UTF-8',
                                                    },
                                                  })

        const savedMovie = await response.json();
        
        setMovies((currValue) => {
           return [ ...currValue, savedMovie ] 
        })

      } catch(err) {
        console.log(err);
      }
  }

  return (
    <div className={`add-movie-cont ${viewForm === 'active' ? 'add-movie-cont-active': ''}`}>
      <div className='form-container'>
        <i onClick={()=>setViewForm('')} className='bx bxs-x-circle bx-burst' ></i>
        <form className='add-movie-form'>
            <InputField id='title' value={newMovie.title} inputType='text' className='input-field' placeHolder='Movie Title' onChange={handleChangeInput} />
            <InputField id='year' value={newMovie.year} inputType='number' className='input-field' placeHolder='Year' onChange={handleChangeInput} />
            <InputField id='desc' value={newMovie.desc} inputType='text' className='input-field' placeHolder='Description' onChange={handleChangeInput} />
            <InputField id='poster' value={newMovie.poster} inputType='text' className='input-field' placeHolder='Poster url' onChange={handleChangeInput} />
            <InputField id='casts' value={newMovie.casts} inputType='text' className='input-field' placeHolder='Movie casts (split with comma)' onChange={handleChangeInput} />
            <Button className='add-movie-btn' iconClass='' btnLabel='SAVE MOVIE' onClick={saveMovie}/>
        </form>
      </div>
    </div>
  )
}
