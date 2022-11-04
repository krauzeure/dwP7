import HeaderBanner from '../../Components/Banner/home-banner.png'

import './Home.css'

import { Banner } from '../../Components/Banner/Banner'
import { ListingCard } from '../../Components/ListingCard/ListingCard'
import { listings } from '../../data/listings'

/* The Home page uses the Banner component with the alt text, image and source in props.
It uses the map method to create the different listing cards with the ListingCard component. */
export function Home() {
  return (
    <>
      <Banner img={HeaderBanner} alt={"Partout et ailleurs"} text={"Chez vous, partout et ailleurs"}/>
      <ul className="cards-list">
        {listings.map((item, index) => {
          return (
            <li key={item.id}><ListingCard imageURL={listings[index].pictures[0]} title={listings[index].title} id={item.id}/></li>
          )
        })}
      </ul>
    </>
  )
}
