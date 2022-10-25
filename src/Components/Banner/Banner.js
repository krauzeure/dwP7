import './Banner.css'

export function Banner(props) {

  return (
    <section className={props.source === "about" ? "banner-container banner-container-about" : "banner-container"}>
        <div className={props.source === "about" ? "banner-overlay banner-overlay-about" : "banner-overlay"}></div>
        <img src={props.img} alt={props.alt}/>
        {props.text && <h1 className="banner-header">{props.text}</h1>}
    </section>
  )
}
