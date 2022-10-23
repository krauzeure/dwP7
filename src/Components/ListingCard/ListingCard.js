import './ListingCard.css'
import { Link } from 'react-router-dom'

export function ListingCard(props) {
  return (
    <Link to="/listings/:id">
        <div className='listing-card'>
            <img src={props.imageURL} alt={props.title}/>
            <p className='listing-card-title'>{props.title}</p>
        </div>
    </Link>
  )
}
