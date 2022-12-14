import './NotFound.css'

import { Link } from "react-router-dom"

/* The NotFound page shows an error message when the user tries a route that doesn't exist.
It also creates a link to go back to the homepage. */
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
