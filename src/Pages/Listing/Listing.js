import { useParams } from 'react-router-dom'
import { listings } from '../../data/listings'
import './Listing.css'
import { Tag } from '../../Components/Tag/Tag';
import star from './star.svg'
import starFilled from './star-filled.svg'

export function Listing() {

  const params = useParams();
  const listingId = params.id;

  const currentListing = listings.filter(el => el.id === listingId);


  const totalRatings = 5;
  const numberOfStars = parseInt(currentListing[0].rating);

  const listingRating = []
  for(let i = 0; i < numberOfStars; i++) {
    listingRating.push(<img key={i}src={starFilled} alt="rating"/>)
  }

  for(let i = numberOfStars; i < totalRatings; i++) {
    listingRating.push(<img key={i}src={star} alt="rating"/>)
  }


  return (
    <div className="listing-page">
      <div className='listing-slideshow'>
        <img src={currentListing[0].pictures[0]} alt={currentListing[0].title}/>
      </div>

      <div className="listing-details">
        <div className="listing-info-host">

          <div className="listing-info">
            <h1>{currentListing[0].title}</h1>
            <p>{currentListing[0].location}</p>
          </div>

          <div className="listing-host">
            <p>{currentListing[0].host.name}</p>
            <img src={currentListing[0].host.picture} alt={currentListing[0].host.name} />
          </div>
        </div>
      </div>

      <div className="listing-tag-rating">
        <div className="listing-all-tags">
          {currentListing[0].tags.map(item => {
            return (
              <li key={`${listingId}-${item}`}><Tag text={item} /></li>
            )
          })}
        </div>
        <div className="listing-rating">
          {listingRating}
        </div>
      </div>
    </div>
  )
}
