import { Banner } from '../../Components/Banner/Banner'
import HeaderBanner from '../../Components/Banner/home-banner.png'

export function Home() {
  return (
    <div>
        <Banner img={HeaderBanner} alt={"Partout et aillers"} text={"Chez vous, partout et ailleurs"}/>
    </div>
  )
}
