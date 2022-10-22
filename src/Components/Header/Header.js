import logo from '../Header/logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
        <img src={logo} alt=""/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    </header>
    
  )
}
