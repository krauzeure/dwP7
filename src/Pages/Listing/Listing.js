import './Listing.css'

import star from './star.svg'
import starFilled from './star-filled.svg'

import { listings } from '../../data/listings'

import { Tag } from '../../Components/Tag/Tag';
import { Collapse } from '../../Components/Collapse/Collapse';
import { Slideshow } from '../../Components/Slideshow/Slideshow';

import { useParams } from 'react-router-dom'

export function Listing() {

  // Getting the ID from the page URL
  const params = useParams();
  const listingId = params.id;

  // Getting the listings information from the ID
  const currentListing = listings.filter(el => el.id === listingId);

  // Setting the total number of stars and the listings number of stars
  const totalRatings = 5;
  const numberOfStars = parseInt(currentListing[0].rating);

  // Initializing an empty array
  const listingRating = []

  //Looping on the listings stars to add them to the array
  for(let i = 0; i < numberOfStars; i++) {
    listingRating.push(<img key={i}src={starFilled} alt="rating"/>)
  }

  // Looping on the last empty spaces to add grey stars
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
