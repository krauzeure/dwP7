import { Link } from "react-router-dom"
import './NotFound.css'

export function NotFound() {
  return (
    <>
    <div className="not-found-container">
      <h1 className="not-found-header">404</h1>
      <p className="not-found-text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="not-found-link">Retourner sur la page d'accueil</Link>
    </div>
    </>
  )
}
