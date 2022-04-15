import Heading from './Heading';
import { Link } from "react-router-dom";

export default function NavBar({ }) {

  return (
    <div>
      <header>
        <ul className='main-menu'>
          <li><Link className='menu-link' to="/">Home</Link></li>
          <li><Link className='menu-link' to="/profile">Profile</Link></li>
          <li><Link className='menu-link' to="/product">Product</Link></li>
        </ul>
        <div className='login-menu'>
          <Link className='menu-link' to="/login">Login</Link>
          <Heading className='menu-link' title='Sign Out'/>
        </div>
      </header>
    </div>
  )
}
