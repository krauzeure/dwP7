import { Banner } from '../../Components/Banner/Banner'
import HeaderBanner from '../../Components/Banner/home-banner.png'
import { ListingCard } from '../../Components/ListingCard/ListingCard'
import './Home.css'
import { listings } from '../../data/listings'

export function Home() {
  return (
    <>
        <Banner img={HeaderBanner} alt={"Partout et aillers"} text={"Chez vous, partout et ailleurs"}/>
        <ul className="cards-list">
        {listings.map((item, index) => {
          return (
            <li key={index}><ListingCard imageURL={listings[index].pictures[0]} title={listings[index].title}/></li>
          )
        })
        }
        </ul>
    </>
  )
}
