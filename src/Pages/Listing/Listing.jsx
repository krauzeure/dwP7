import star from './star.svg'
import starFilled from './star-filled.svg'

import './Listing.css'

import { listings } from '../../data/listings'

import { Tag } from '../../Components/Tag/Tag';
import { Collapse } from '../../Components/Collapse/Collapse';
import { Slideshow } from '../../Components/Slideshow/Slideshow';
import { NotFound } from '../NotFound/NotFound';

import { useParams } from 'react-router-dom'

/* On the Listing page, we use the useParams hook to get the listing ID from the URL.
The we check if the ID in the URL matches our list of listing ids. If not, we render the NotFound component.
We use the array.from and fill methods to create an array with the stars for the rating.
Then we use the Slideshow component, passing the listing pictures as props.
We create the listing page with different blocks, using the map method to show the tags, ratings and equipments. */
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
              <ul>
                {currentListing.tags.map(item => {
                  return (
                    <li key={`${listingId}-${item}`}><Tag text={item} /></li>
                  )
                })}
              </ul>
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
        <Collapse heading="Description" text={<p>{currentListing.description}</p>} />
        <Collapse heading="??quipements" 
          text={
            <ul className="listing-equip">
              {currentListing.equipments.map(item => {
                return <li key={`${listingId}-${item}`}>{item}</li>})}
            </ul>
          }
        />
      </section>

    </div>
  )
  
}
