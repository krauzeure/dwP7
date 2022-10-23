import logo from '../Header/logo.svg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <Link to="/"><img src={logo} alt=""/></Link>
        <nav>
            <NavLink 
            to="/" end
            className={({isActive}) => {
                return isActive ? " navlink active-link" : "navlink"
            }}
            >Accueil</NavLink>

            <NavLink 
            to="/about"
            className={({isActive}) => {
                return isActive ? "active-link" : "navlink"
            }}
            >A propos</NavLink>
        </nav>
    </header>
    
  )
}
