import React,{useState} from 'react'

export default function NavBar({ setMenu , menu , setViewForm}) {

  const [addButton, setAddButton] =useState();
  
  const handleClickMenu = (e) => {
    if (e.target.id === 'movie-menu'){
      setAddButton('add-btn-active')
      setMenu('movies')

    } else if(e.target.id === 'home-menu' || e.target.id === 'home-icon') {
      setAddButton('')
      setMenu('home')
    }
  }  

  
  return (
    <header className=''>
          <div id='home-icon' className='logo home-active' onClick={handleClickMenu}> <i className='bx bxs-movie' ></i> Movies </div>
          <div className='bx bx-menu' id='menu-icon' ></div>
          <ul className='main-menu'>
              <li id='home-menu' className={menu === 'home' ? 'menu-active' : (menu === 'movies') ? '' : 'menu-active'}  onClick={handleClickMenu}>Home</li>
              <li id='movie-menu' className={menu === 'home' ? '' : (menu === 'movies') ? 'menu-active' : ''} onClick={handleClickMenu}>Movie List</li>
          </ul>
          <div onClick={()=>setViewForm('active')} className={`add-btn ${addButton}`}  > <i className='bx bx-plus-medical' ></i> Add Movies </div>
  
    </header>
  )
}
