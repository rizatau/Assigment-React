import React from 'react'

export default function NavBar({ setMenu }) {
  return (
    <header className='main-header'>
      <div className="">
        <nav className="navbar-nav">
            <img class="navbar-logo" src="https://templates.iqonic.design/streamit/frontend/html/images/logo.png" loading="lazy" alt="streamit"/>
            <div className='main-menu'>
              <ul className='ul-menu'>
                  <li className="nav-item">
                    <div className="nav-link" onClick={() => setMenu('home')}>Home</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" onClick={() => setMenu('movies')}>Movie List</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link add-movies-btn" onClick>Add Movies</div>
                  </li>
              </ul>
            </div>
            <div className='right-menu'>

            </div>
        </nav>
      </div>
    </header>
  )
}
