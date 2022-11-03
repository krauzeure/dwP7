import logo from '../Header/logo.svg'

import './Header.css'

import { Link, NavLink } from 'react-router-dom'

/* The Header component creates a header element with a link on the logo, and navlinks in the nav element.
If the link is active, we apply a different style through a class. */
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
              return isActive ? "navlink active-link" : "navlink"
          }}
          >A propos</NavLink>
      </nav>
    </header>
    
  )
}
