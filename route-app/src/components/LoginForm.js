import React, { useState } from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import Button from './Button';
import Heading from './Heading';
import InputField from './InputField';

export default function LoginForm({ }) {

  const location = useLocation();
  const navigate = useNavigate();

  const [ userLogin , setUserLogin ] = useState ([{username: '', password: ''}])
  
  const handleChangeInput=(e)=>{
    setUserLogin((currValue) => {
      return {...currValue,[e.target.id]: e.target.value}
    })
  }

  const loginSubmit = async (e)=>{
    e.preventDefault()

    const response = await fetch('http://localhost:8080/authenticate',{
      method: 'POST',
      body: JSON.stringify(userLogin),
      headers: {
        'Content-Type':'application/json'
      }
    });
    const data = await response.json();
    // console.log(data);
    localStorage.setItem("token", data.token);
    console.log(location.state.from.pathname);
    navigate(`${location.state.from.pathname}`)
  }
 
  return (
    <div className='form-container'>
      <Heading title='Sign In Here' />
      <form className='form'>
          <InputField id='username' className='input-field' placeHolder='USERNAME' onChange={handleChangeInput} />
          <InputField id='password' className='input-field' placeHolder='PASSWORD' onChange={handleChangeInput} />
          <Button className='add-movie-btn' iconClass='' btnLabel='LOGIN' onClick={loginSubmit} />
      </form>
    </div>
  )
}
