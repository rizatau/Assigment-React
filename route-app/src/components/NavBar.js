import Heading from './Heading';
import { Link , useNavigate} from "react-router-dom";

export default function NavBar({ }) {
  const navigate = useNavigate()
  const handleSignOut = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <header>
        <ul className='main-menu'>
          <li><Link className='menu-link' to="/">Home</Link></li>
          <li><Link className='menu-link' to="/profile">Profile</Link></li>
          <li><Link className='menu-link' to="/product">Product</Link></li>
        </ul>
        <div className='login-menu'>
          {!localStorage.getItem('token') ? <Link className='menu-link' to="/login">Login</Link> : <Heading className='menu-link' title='Sign Out' onClick={handleSignOut}/> }
        </div>
      </header>
    </div>
  )
}
