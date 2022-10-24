import { useParams } from 'react-router-dom'
import { listings } from '../../data/listings'
import './Listing.css'
import { Tag } from '../../Components/Tag/Tag';
import { Collapse } from '../../Components/Collapse/Collapse';
import star from './star.svg'
import starFilled from './star-filled.svg'
import { Slideshow } from '../../Components/Slideshow/Slideshow';

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

        <Slideshow photos={currentListing[0].pictures} title={currentListing[0].title}/>

        <div className="listing-main-info">

          <div className="listing-info-tags">
            <div className="listing-info">
              <h1>{currentListing[0].title}</h1>
              <p>{currentListing[0].location}</p>
            </div>
            <div className="listing-all-tags">
              {currentListing[0].tags.map(item => {
                return (
                  <li key={`${listingId}-${item}`}><Tag text={item} /></li>
                )
              })}
            </div>
          </div>

          <div className="listing-host-rating">
            <div className="listing-host">
                <p>{currentListing[0].host.name}</p>
                <img src={currentListing[0].host.picture} alt={currentListing[0].host.name} />
            </div>
            <div className="listing-rating">
              {listingRating}
            </div>
          </div>

        </div>

      <div className="listing-desc-equip">
        <Collapse heading="Description" text={currentListing[0].description} />
        <Collapse heading="Équipements" text={
          currentListing[0].equipments.map(item => {
            return <li key={`${listingId}-${item}`}>{item}</li>
          })
          } />
      </div>
    </div>
  )
}
