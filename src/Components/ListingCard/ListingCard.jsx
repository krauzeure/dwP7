import './ListingCard.css'

import { Link } from 'react-router-dom'

/* The ListingCard component creates a link with a card inside.
The card uses the information from the props to show the listing info. */
export function ListingCard(props) {
  return (
    <Link to={`/listings/${props.id}`}>
        <div className='listing-card'>
            <img src={props.imageURL} alt={props.title}/>
            <p className='listing-card-title'>{props.title}</p>
        </div>
    </Link>
  )
}
