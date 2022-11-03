import star from './star.svg'
import starFilled from './star-filled.svg'

import './Listing.css'

import { listings } from '../../data/listings'

import { Tag } from '../../Components/Tag/Tag';
import { Collapse } from '../../Components/Collapse/Collapse';
import { Slideshow } from '../../Components/Slideshow/Slideshow';
import { NotFound } from '../NotFound/NotFound';

import { useParams } from 'react-router-dom'

export function Listing() {

  // Getting the ID from the page URL
  const params = useParams();
  const listingId = params.id;

  // We add all our listing IDs in a new array
  let allListingsIds = listings.reduce((acc, curVal) => acc.concat(curVal.id), []);

  // If what's after listing/ in the URL doesn't match our listing ids, we render the NotFound component
  if(allListingsIds.includes(listingId) === false) {
    return <NotFound />
  } 
      // Getting the listings information from the ID
      const listingArray = listings.filter(el => el.id === listingId);
      // Reducing to one element to remove the need for the index 0
      const currentListing = listingArray.shift();

      // Setting the total number of stars and the listings number of stars
      const totalRatings = 5;
      const numberOfStars = Number(currentListing.rating);

      // Initializing an array with 5 items
      const listingRating = Array.from(Array(totalRatings))
      // Filling the array with the filled stars according to the rating, and then filling it out with grey stars
      listingRating.fill(starFilled, 0, numberOfStars).fill(star, numberOfStars, totalRatings)

  return (
    <div className="listing-page">

        <Slideshow photos={currentListing.pictures} title={currentListing.title}/>

        <section className="listing-main-info">

          <div className="listing-info-tags">
            <div className="listing-info">
              <h1>{currentListing.title}</h1>
              <p>{currentListing.location}</p>
            </div>
            <div className="listing-all-tags">
              {currentListing.tags.map(item => {
                return (
                  <li key={`${listingId}-${item}`}><Tag text={item} /></li>
                )
              })}
            </div>
          </div>

          <div className="listing-host-rating">
            <div className="listing-host">
                <p>{currentListing.host.name}</p>
                <img src={currentListing.host.picture} alt={currentListing.host.name} />
            </div>
            <div className="listing-rating">
              {listingRating.map((item, index) => {
                return <img key={`${index}-${item}`} src={item} alt="rating"/>
              })}
            </div>
          </div>

        </section>

      <section className="listing-desc-equip">
        <Collapse heading="Description" text={currentListing.description} />
        <Collapse heading="Équipements" text={
          currentListing.equipments.map(item => {
            return <li key={`${listingId}-${item}`}>{item}</li>
          })
        } />
      </section>

    </div>
  )
  
}
