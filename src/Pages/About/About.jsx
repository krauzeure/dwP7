import AboutBanner from '../../Components/Banner/about-banner.png'

import './About.css'

import { Banner } from '../../Components/Banner/Banner'
import { Collapse } from '../../Components/Collapse/Collapse'

/* The About page uses the Banner component with the alt text, image and source in props.
It then uses the Collapse component several times with heading, text and source props. */
export function About() {
  return (
    <>
      <Banner img={AboutBanner} alt={"montagne enneigées"} source="about"/>
      <section className="about-collapse">

        <Collapse heading="Fiabilité" text={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>} source="about" />

        <Collapse heading="Respect" text={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} source="about" />

        <Collapse heading="Service" text={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>} source="about" />

        <Collapse heading="Sécurité" text={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>} source="about" />
        
      </section>
    </>
  )
}
